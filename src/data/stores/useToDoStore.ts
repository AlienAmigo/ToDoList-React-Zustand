import {create} from "zustand";

interface Task {
  id: string;
  title: string;
  createdAt: number;
}

interface ToDoStore {
  tasks: Task[];
  createTask: (title: string) => void;
  updateTask: (id: string, title: string) => void;
  removeTask: (id: string) => void;
}

export const useToDoStore = create<ToDoStore>((set, get) => ({
  tasks: [
    {
      id: 'qwerty',
      title: 'asdfgh',
      createdAt: 2123
    }
  ],
  createTask: (title) => {
    const {tasks} = get();
  },
  updateTask: (id, title) => {
  },
  removeTask: (id) => {
  },
}))
