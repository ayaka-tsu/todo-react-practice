import type { Todo } from "../types/Todo";
const TodoItem = ({
  todo,
  editingId,
  editText,
  setEditText,
  setEditingId,
  todos,
  setTodos,
}: {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<
    React.SetStateAction<Todo[]>
  >;
  editingId: number | null;
  editText: string;
  setEditText: React.Dispatch<React.SetStateAction<string>>;
  setEditingId: React.Dispatch<React.SetStateAction<number | null>>;
}) => {
  return (
    <li>
      <div className="left-group">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => {
            setTodos(
              todos.map((item) =>
                item === todo
                  ? {
                      ...item,
                      completed: !item.completed,
                      status: !item.completed ? "完了" : "未完了",
                      completedAt: !item.completed ? Date.now() : null,
                      order: item.order,
                    }
                  : item,
              ),
            );
          }}
        />

        <div className="text-group">
          <div className="title-box">
            <div
              className={todo.completed ? "todo-title completed" : "todo-title"}
            >
              {todo.id !== editingId && todo.text}
              {todo.id === editingId ? (
                <input
                  className="edit-input"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  autoFocus
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      if (editText.trim() === "") {
                        return;
                      }
                      setTodos(
                        todos.map((t) =>
                          t.id === todo.id ? { ...t, text: editText } : t,
                        ),
                      );
                      setEditingId(null);
                    }
                  }}
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
export default TodoItem;
