import type { Todo } from "../types/Todo"
type TodoEditButtonProps = {
   editingId: number | null;
     editText: string;
  setEditText: React.Dispatch<React.SetStateAction<string>>;
  setEditingId: React.Dispatch<React.SetStateAction<number | null>>;
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<
    React.SetStateAction<Todo[]>
    >;
};
const TodoEditButton = ({
    editingId,
    editText,
    setEditText,
    setEditingId,
    todo,
    todos,
    setTodos,
}: TodoEditButtonProps) =>{
    return(
        <>
                        <button
                  className={
                    editingId === todo.id ? "right-btn save-btn" : "right-btn"
                  }
                  onClick={() => {
                    if (editingId === todo.id) {
                      setTodos(
                        todos.map((t) =>
                          t.id === todo.id
                            ? {
                                ...t,
                                text: editText,
                                createdAt: t.createdAt,
                              }
                            : t,
                        ),
                      );
                      setEditingId(null);
                      return;
                    }
                    setEditingId(todo.id);
                    setEditText(todo.text);
                  }}
                >
                  {editingId === todo.id ? "保存" : "編集"}
                </button>

        </>
    );
};
export default TodoEditButton;