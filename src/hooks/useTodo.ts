import { useState, useEffect } from "react";
import type { Todo } from "../types/Todo";
import type { FilterType, StatusType } from "../types/Todo";

export const useTodo = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem("todos");

    if (!savedTodos) return [];

    try {
      return JSON.parse(savedTodos) as Todo[];
    } catch {
      return [];
    }
  });
  const [deletedTodos, setDeletedTodos] = useState<Todo[]>(() => {
    const savedDeletedTodos = localStorage.getItem("deletedTodos");

    if (!savedDeletedTodos) return [];

    try {
      return JSON.parse(savedDeletedTodos) as Todo[];
    } catch {
      return [];
    }
  });
  const [isTrashOpen, setIsTrashOpen] = useState(false);
  const [filter, setFilter] = useState<FilterType>("すべて");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editText, setEditText] = useState("");
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  useEffect(() => {
    localStorage.setItem("deletedTodos", JSON.stringify(deletedTodos));
  }, [deletedTodos]);
  const addTodo = () => {
    if (!text.trim()) return;
    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: text,
        createdAt: new Date().toLocaleDateString("sv-SE"),
        dueDate: "",
        completed: false,
        status: "未完了" as StatusType,
        completedAt: Date.now(),
        order: Date.now(),
      },
    ]);
    setText("");
  };
  const handleDeleteForever = (id: number) => {
    setDeletedTodos(deletedTodos.filter((todo) => todo.id !== id));
  };
  const handleRestore = (id: number) => {
    const restoreTodo = deletedTodos.find((todo) => todo.id === id);
    if (!restoreTodo) return;
    const resetTodo = {
      ...restoreTodo,
      completed: false,
      status: "未完了" as StatusType,
      completedAt: null,
      order: restoreTodo.order,
      createdAt: restoreTodo.createdAt,
      dueDate: restoreTodo.dueDate,
    };
    setTodos([...todos, resetTodo]);
    setDeletedTodos(deletedTodos.filter((todo) => todo.id !== id));
  };
  const filteredTodos = todos.filter((todo) => {
    if (filter === "すべて") return true;
    return todo.status === filter;
  });
  const sortedTodos = [...filteredTodos].sort((a, b) => {
    if (a.completed !== b.completed) {
      return Number(a.completed) - Number(b.completed);
    }
    if (a.completed) {
      return (a.completedAt ?? 0) - (b.completedAt ?? 0);
    }
    return a.order - b.order;
  });
  return {
    text,
    setText,
    todos,
    setTodos,
    deletedTodos,
    setDeletedTodos,
    isTrashOpen,
    setIsTrashOpen,
    filter,
    setFilter,
    editingId,
    setEditingId,
    editText,
    setEditText,
    addTodo,
    handleDeleteForever,
    handleRestore,
    filteredTodos,
    sortedTodos,
  };
};
