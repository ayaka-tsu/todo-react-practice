const TodoItem = ({ todo, 
}: { 
    todo: {
     id:number;
      text: string;
      createdAt: string;
      dueDate: string;
      completed: boolean;
      status: string;
      completedAt: number | null;
      order: number;
 };
 }) => {
  return (
    <>
        {todo.text}
    </>
  );
};
export default TodoItem;
