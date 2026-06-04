type DeleteForeverButtonProps={
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