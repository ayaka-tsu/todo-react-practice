import type { Todo } from "../Todo"
type RestoreButtonProps={
    todo: Todo;
    handleRestore:(id: number) => void;
}

const RestoreButton=({todo,handleRestore,}:RestoreButtonProps)=>{
    return(
        <>
                              <button
                        className="restore-btn"
                        onClick={() => handleRestore(todo.id)}
                      >
                        元に戻す
                      </button>

        </>
    );
};
export default RestoreButton;