export type Task = {
  id: string;
  title: string;
  description: string;
  deadline?: boolean;
  date?: string;
  completed: boolean;
};

export type DraftTask = Omit<Task, 'id'>