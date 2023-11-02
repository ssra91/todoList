import styled from "@emotion/styled";
import { ChangeEvent, useState } from "react";
import { Todo, useTodos } from "@/src/views/Todos/hooks/useTodos";
import { getUuid } from "@/src/views/Todos/utils";

// todos 데이터 저장 공간 - 페이지 컴포넌트, 로컬상태로 관리 (useState) - 문제점? 다른 페이지 다녀오면 데이터가 초기화 됨
// 글로벌 스테이트 - zustand 사용

// Todos
// addTodo - todo 추가
// removeTodo - todo 삭제
// editTodo - todo 수정

const Todos = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { todos, addTodo, removeTodo, editTodo } = useTodos();

  const reset = () => {
    setTitle("");
    setDescription("");
  };
  const handleTodoAdd = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo({
      id: getUuid(),
      title,
      description,
      isDone: false,
    });
    reset();
  };
  const handleTodoEdit = (todo: Todo) => {
    editTodo(todo);
  };

  return (
    <Container>
      <h1>Todos</h1>
      {todos.map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <div className="btns">
              <button onClick={handleTodoEdit}>수정</button>
              <button onClick={() => removeTodo(item.id)}>삭제</button>
            </div>
          </div>
        );
      })}
      <div>
        <form onSubmit={handleTodoAdd}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="할 일을 입력해주세요"
          />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="설명을 입력해주세요"
          />
          <button type="submit">확인</button>
        </form>
      </div>
    </Container>
  );
};

const Container = styled.div``;

export default Todos;
