import { useState } from "react";
import "./style.css";

const Todo = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<
    {
      id: number;
      text: string;
      completed: boolean;
      status: string;
    }[]
  >([]);
  const [deletedTodos, setDeletedTodos] = useState<
    {
      id: number;
      text: string;
      completed: boolean;
    }[]
  >([]);
  const [isTrashOpen, setIsTrashOpen] = useState(false);
  const [filter, setFilter] = useState("すべて");
  // const [status, setStatus] = useState("未完了");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editText, setEditText] = useState("");
  const addTodo = () => {
    if (!text.trim()) return;
    setTodos([
      ...todos,
      { id: Date.now(), text: text, completed: false, status: "未完了" },
    ]);
    setText("");
  };
  const handleRestore = (id: number) => {
    const restoreTodo = deletedTodos.find((todo) => todo.id === id);
    if (!restoreTodo) return;
    const resetTodo = {
      ...restoreTodo,
      completed: false,
      status: "未完了",
    };

    setTodos([...todos, resetTodo]);
    setDeletedTodos(deletedTodos.filter((todo) => todo.id !== id));
  };
  const handleDeleteForever = (id: number) => {
    setDeletedTodos(deletedTodos.filter((todo) => todo.id !== id));
  };
  const filteredTodos = todos.filter((todo) => {
    if (filter === "すべて") return true;
    return todo.status === filter;
  });
  return (
    <>
      <div className="todo-app">
        <div className="top-bar">
          <div className="add-form">
            <input
              type="text"
              placeholder="Todo"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button onClick={addTodo}>追加</button>
          </div>
          <div className="filter-buttons">
            <button className="filter-btn" onClick={() => setFilter("すべて")}>
              すべて
            </button>
            <button className="filter-btn" onClick={() => setFilter("未完了")}>
              未完了
            </button>
            <button className="filter-btn" onClick={() => setFilter("着手中")}>
              着手中
            </button>
            <button className="filter-btn" onClick={() => setFilter("完了")}>
              完了
            </button>
          </div>
        </div>
        <ul className="todo-list">
          {filteredTodos.map((todo) => (
            <li className="todo-item">
              <div className="left-group">
                <input type="checkbox" checked={todo.completed} />
                <div className="text-group">
                  <div className="title-box">
                    <div
                      className={
                        todo.completed ? "todo-title completed" : "todo-title"
                      }
                    >
                      {todo.id === editingId ? (
                        <input className="edit-input"
                          value={editText}
                          onChange={(e) => setEditText(e.target.value)}
                          autoFocus
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              if(editText.trim()===""){
                                return
                              }
                              setTodos(
                                todos.map((t) =>
                                  t.id === todo.id
                                    ? { ...t, text: editText }
                                    : t,
                                ),
                              );
                              setEditingId(null);
                            }
                          }}
                        />
                      ) : (
                        todo.text
                      )}
                    </div>
                  </div>

                  <div className="todo-info">
                    <div className="date-row">
                      <label>
                        作成日
                        <input className="date-input" type="date" />
                      </label>

                      <label>
                        期限
                        <input className="date-input" type="date" />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right-group">
                <button
                  className={
                    editingId===todo.id
                    ? "right-btn save-btn"
                    : "right-btn"
                  }
                  onClick={() => {
                    if(editingId===todo.id){
                      setTodos(
                        todos.map((t)=>
                        t.id===todo.id
                      ? {...t,text:editText}
                    :t
                  )
                      )
                      setEditingId(null)
                      return
                    }
                    setEditingId(todo.id);
                    setEditText(todo.text);
                  }}
                >
                {editingId===todo.id ? "保存" :"編集"}
                
                </button>
                <button
                  className="right-btn"
                  onClick={() =>
                    setTodos(
                      todos.map((item) =>
                        item === todo ? { ...item, completed: true } : item,
                      ),
                    )
                  }
                >
                  完了
                </button>
                <button
                  className="right-btn"
                  onClick={() => {
                    setDeletedTodos([...deletedTodos, todo]);

                    setTodos(todos.filter((item) => item !== todo));
                  }}
                >
                  削除
                </button>
                <select
                  className="status-select"
                  value={todo.status}
                  onChange={(e) =>
                    setTodos(
                      todos.map((t) =>
                        t.id === todo.id ? { ...t, status: e.target.value } : t,
                      ),
                    )
                  }
                >
                  <option>未完了</option>
                  <option>着手中</option>
                  <option>完了</option>
                </select>
              </div>
            </li>
          ))}
        </ul>
        <div className="trash-area">
          <div className="trash-title">
            削除したリスト
            <button
              className="trash-toggle-btn"
              onClick={() => setIsTrashOpen(!isTrashOpen)}
            >
              {isTrashOpen ? "非表示" : "表示"}
            </button>
          </div>
          {isTrashOpen && (
            <div className="trash-content">
              <ul className="trash-list">
                {deletedTodos.map((todo) => (
                  <li className="trash-item">
                    {todo.text}
                    <div className="trash-buttons">
                      <button
                        className="restore-btn"
                        onClick={() => handleRestore(todo.id)}
                      >
                        元に戻す
                      </button>
                      <button
                        className="delete-btn"
                        onClick={() => handleDeleteForever(todo.id)}
                      >
                        完全削除
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Todo;
