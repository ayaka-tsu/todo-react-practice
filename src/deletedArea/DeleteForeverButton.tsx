import type { Todo } from "../Todo";
type DeleteForeverButtonProps={
    todo: Todo;
    handleDeleteForever:(id: number) => void;
}
const DeleteForeverButton=({todo,handleDeleteForever,}:DeleteForeverButtonProps)=>{
    return(
        <>
                              <button
                        className="delete-btn"
                        onClick={() => handleDeleteForever(todo.id)}
                      >
                        完全削除
                      </button>

        </>
    );
};
export default DeleteForeverButton;