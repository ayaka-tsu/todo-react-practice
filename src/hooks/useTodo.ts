import { useState } from "react";
import type {Todo} from "../Todo";

export const useTodo = () => {
      const [text, setText] = useState("");
        const [todos, setTodos] = useState<Todo[]>([]);
          const [deletedTodos, setDeletedTodos] = useState<Todo[]>([]);
            const [isTrashOpen, setIsTrashOpen] = useState(false);
              const [filter, setFilter] = useState("すべて");
                const [editingId, setEditingId] = useState<number | null>(null);
  const [editText, setEditText] = useState("");
      return{
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
      };
};