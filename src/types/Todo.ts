 export type FilterType=
  |"すべて"
  |"未完了"
  |"着手中"
  |"完了";
  export type StatusType=
  |"未完了"
  |"着手中"
  |"完了";
export type Todo = {
  id: number;
  text: string;
  createdAt: string;
  dueDate: string;
  completed: boolean;
  status: StatusType;
  completedAt: number | null;
  order: number;
};
