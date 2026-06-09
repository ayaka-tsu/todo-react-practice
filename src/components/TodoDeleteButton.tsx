import type { Todo } from "../types/Todo";

type TodoDeleteButtonProps = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  setEditingId: React.Dispatch<React.SetStateAction<number | null>>;
  deletedTodos: Todo[];
  setDeletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};
const TodoDeleteButton = ({
  todo,
  todos,
  deletedTodos,
  setTodos,
  setDeletedTodos,
  setEditingId,
}: TodoDeleteButtonProps) => {
  return (
    <>
      <button
        className="right-btn"
        onClick={() => {
          setDeletedTodos([...deletedTodos, todo]);

          setTodos(todos.filter((item) => item !== todo));
          setEditingId(null);
        }}
      >
        削除
      </button>
    </>
  );
};
export default TodoDeleteButton;
