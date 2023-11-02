import styled from "@emotion/styled";
import Link from "next/link";
import TodosPage from "@/pages/todos";

const HomePage = () => {
  return (
    <Container>
      <Link href="/todos">
        <TodosPage />
      </Link>
    </Container>
  );
};

const Container = styled.div``;

export default HomePage;
