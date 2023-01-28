import styled from "styled-components";

const Container = styled.div`
  align-items: center;
  height: 100vh;
  width: 100%;

  div {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
`;

function Home() {
  return (
    <Container>
      <div>
        <h1>Hello</h1>
      </div>
    </Container>
  );
}

export default Home;
