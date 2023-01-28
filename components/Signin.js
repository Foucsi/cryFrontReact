import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

const Container = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const Input = styled.input`
  width: 80%;
  height: 10%;
`;

export default function Signup() {
  const router = useRouter();
  return (
    <Container>
      <div
        style={{
          height: "80%",
          width: "80%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Input placeholder="Username" />
        <Input type="password" placeholder="password" />

        <button onClick={() => router.push("/welcome")}>LOGIN</button>
      </div>
    </Container>
  );
}
