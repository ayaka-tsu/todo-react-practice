const TodoItem = ({
  todo,
  editingId,
  editText,
  setEditText,
  setEditingId,
}: {
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
    editingId: number | null;
    editText: string;
    setEditText:React.Dispatch<React.SetStateAction<string>>;
    setEditingId:React.Dispatch<React.SetStateAction<number | null>>;


}) => {
  return <li>
{/* <input type="checkbox" /> */}
    <div className="text-group">
    {todo.text}
     {todo.id === editingId ? (
     <input
      className="edit-input"
       value={editText}
      onChange={(e) => setEditText(e.target.value)}
      
      onKeyDown={(e) => {
      if (e.key === "Enter") {
      setEditingId(null);
   }
  }}
/>
     ) : null}
    </div >
    </li>
};
export default TodoItem;
