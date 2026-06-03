type TodoDeleteButtonProps={
  todo: {
    id: number;
    text: string;
    createdAt: string;
    dueDate: string;
    completed: boolean;
    status: string;
    completedAt: number | null;
    order: number;
  };
  todos: {
    id: number;
    text: string;
    createdAt: string;
    dueDate: string;
    completed: boolean;
    status: string;
    completedAt: number | null;
    order: number;
  }[];
  setTodos: React.Dispatch<
    React.SetStateAction<
      {
        id: number;
        text: string;
        createdAt: string;
        dueDate: string;
        completed: boolean;
        status: string;
        completedAt: number | null;
        order: number;
      }[]
    >
  >;
  setEditingId: React.Dispatch<React.SetStateAction<number | null>>;
   deletedTodos:    
   {
      id: number;
      text: string;
      createdAt: string;
      dueDate: string;
      completed: boolean;
      status: string;
      completedAt: number | null;
      order: number;
    }[];
   setDeletedTodos:React.Dispatch<
   React.SetStateAction<
   {
      id: number;
      text: string;
      createdAt: string;
      dueDate: string;
      completed: boolean;
      status: string;
      completedAt: number | null;
      order: number;
    }[]
>>
};
const TodoDeleteButton=({
    todo,
   todos,
   deletedTodos,
   setTodos,
   setDeletedTodos, 
   setEditingId,
}:TodoDeleteButtonProps)=>{
    return(
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