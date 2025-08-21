import { create } from "zustand";
import type { DraftTask, Task } from "./types";
import { v4 } from "uuid";
import { devtools, persist } from "zustand/middleware";

type TaskState = {
    tasks: Task[];
    activeTaskId: Task['id'];
    addTask: (task: DraftTask) => void;
    deleteTask: (id: string) => void;
    getTaskById: (id: string) => void;
    updatedTask: (task: DraftTask) => void;
    updateCompletedStatus: (id: string) => void;
}

const createTask = (task: DraftTask): Task => {
    return { ...task, id: v4(), completed: false };
};

export const useTaskStore = create<TaskState>()(
    devtools(
        persist(
            (set) => ({
                tasks: [],
                activeTaskId: "",
                addTask: (task) => {
                    const newTask = createTask(task);
                    set((state) => ({
                        tasks: [...state.tasks, newTask],
                    }));
                },
                deleteTask: (id) => {
                    set((state) => ({
                        tasks: state.tasks.filter((task) => task.id !== id),
                    }));
                },
                getTaskById: (id) => {
                    set(() => ({
                        activeTaskId: id,
                    }));
                },
                updatedTask: (task) => {
                    set((state) => ({
                        tasks: state.tasks.map(t =>
                            t.id === state.activeTaskId
                                ? { id: state.activeTaskId, ...task }
                                : t
                        ),
                        activeTaskId: ""
                    }));
                },
                updateCompletedStatus: (id) => {
                    set((state) => ({
                        tasks: state.tasks.map(task =>
                            task.id === id
                                ? { ...task, completed: !task.completed }
                                : task
                        ),
                    }));
                },
            }),
            { name: "task-storage" }
        )
    )
);