  type Todo={
      id: number;
      text: string;
      createdAt: string;
      dueDate: string;
      completed: boolean;
      status: string;
      completedAt: number | null;
      order: number;
  }
  type TodoDatesProps = {
    todo:Todo;
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
  }
const TodoDates = ({todo,todos,setTodos}:TodoDatesProps) =>{
    return(
                            <div className="date-row">
                              <label>
                        作成日
                        <input
                          className="date-input"
                          type="date"
                          defaultValue={todo.createdAt}
                          onChange={(e) => {
                            setTodos(
                              todos.map((item) =>
                                item.id === todo.id
                                  ? { ...item, createdAt: e.target.value }
                                  : item,
                              ),
                            );
                          }}
                        />
                      </label>
                                            <label>
                        期限
                        <input
                          className="date-input"
                          type="date"
                          defaultValue={todo.dueDate}
                          onChange={(e) => {
                            setTodos(
                              todos.map((item) =>
                                item.id === todo.id
                                  ? { ...item, dueDate: e.target.value }
                                  : item,
                              ),
                            );
                          }}
                        />
                      </label>


        </div>
    );
};
export default TodoDates;