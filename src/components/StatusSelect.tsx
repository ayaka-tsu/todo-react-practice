type StatusSelectProps={
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
}
const StatusSelect = ({
    todo,
    todos,
    setTodos,
}:StatusSelectProps)=>{
    return(
        <>
                        <select
                  className="status-select"
                  value={todo.status}
                  onChange={(e) =>
                    setTodos(
                      todos.map((t) =>
                        t.id === todo.id
                          ? {
                              ...t,
                              status: e.target.value,
                              completed: e.target.value === "完了",
                              completedAt:
                                e.target.value === "完了" ? Date.now() : null,
                            }
                          : t,
                      ),
                    )
                  }
                >
                  <option>未完了</option>
                  <option>着手中</option>
                  <option>完了</option>
                </select>

        </>
    );
};
export default StatusSelect;