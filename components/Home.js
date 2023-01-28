import React from "react";
import styled from "styled-components";
import Sign from "./Sign";

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export default function Home() {
  return (
    <Container>
      <Sign />
    </Container>
  );
}
