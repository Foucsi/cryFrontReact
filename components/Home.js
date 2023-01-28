import styled from "styled-components";
import Sign from "./Sign";

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

function Home() {
  return (
    <Container>
      <Sign />
    </Container>
  );
}

export default Home;
