type TodoFormProps = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  addTodo: () => void;
};

const TodoForm = ({ text, setText, addTodo }: TodoFormProps) => {
  return (
    <>
      <div className="add-form">
        <input
          type="text"
          placeholder="Todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={addTodo}>追加</button>
      </div>
    </>
  );
};
export default TodoForm;
