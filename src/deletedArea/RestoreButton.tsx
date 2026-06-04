type RestoreButtonProps={
    todo:{
    id: number;
    text: string;
    createdAt: string;
    dueDate: string;
    completed: boolean;
    status: string;
    completedAt: number | null;
    order: number;
    };
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