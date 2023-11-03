import { create } from "zustand";
import { getUuid } from "@/src/views/Todos/utils";

export interface Todo {
  id: string;
  title: string;
  description: string;
  isDone: boolean;
}
const initTodos: Todo[] = [
  {
    id: getUuid(),
    title: "react 공부",
    description: "react 공부하기",
    isDone: false,
  },
  {
    id: getUuid(),
    title: "typescript 공부",
    description: "typescript 공부하기",
    isDone: false,
  },
];

interface TodosStore {
  todos: Todo[];
  title: string;
  description: string;
  addTodo: (todo: Todo) => void;
  editTodo: (data: Todo) => void;
  removeTodo: (id: string) => void;
  updateState: (props: Partial<TodosStore>) => void;
}

export const useTodosStore = create<TodosStore>((setState, getState) => ({
  todos: initTodos,
  title: "",
  description: "",
  updateState: (props: Partial<TodosStore>) => {
    setState((state) => ({
      ...state,
      ...props,
    }));
  },
  addTodo: (todo) => {
    setState((state) => ({
      ...state,
      todos: [...state.todos, todo],
    }));
  },
  editTodo: (data: Todo) => {
    const { todos } = getState();
    const nextTodos = todos.map((todo) => {
      if (todo.id === data.id) {
        return { ...todo, ...data };
      }
      return todo;
    });
    setState((state) => ({
      ...state,
      todos: nextTodos,
    }));
  },
  removeTodo: (id: string) => {
    const { todos } = getState();
    const nextTodos = todos.filter((todo) => todo.id !== id);
    setState((state) => ({
      ...state,
      todos: nextTodos,
    }));
  },
}));
