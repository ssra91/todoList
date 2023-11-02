import { useState } from "react";
import { getUuid } from "@/src/views/Todos/utils";

export interface Todo {
  id: string;
  title: string;
  description: string;
  isDone: boolean;
}
export const todosData: Todo[] = [
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
  {
    id: getUuid(),
    title: "emotion 공부",
    description: "emotion 공부하기",
    isDone: false,
  },
  {
    id: getUuid(),
    title: "redux 공부",
    description: "redux 공부하기",
    isDone: false,
  },
];

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>(todosData);
  const addTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
  };
  const editTodo = (data: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === data.id) {
        return { ...todo, ...data };
      }
      return todo;
    });
    setTodos(newTodos);
  };
  const removeTodo = (id: string) => {
    const nextTodos = todos.filter((todo) => todo.id !== id);
    setTodos(nextTodos);
  };

  return {
    todos,
    addTodo,
    editTodo,
    removeTodo,
  };
};
