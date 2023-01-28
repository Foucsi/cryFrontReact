import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Signin from "./Signin";
import Signup from "./Signup";

const Container = styled.div`
  border: 1px solid grey;
  height: 70%;
  width: 30%;
`;

const HeaderContainer = styled.div`
  display: flex;
  height: 20%;
  width: 100%;
`;

export default function Sign() {
  const [display, setDisplay] = useState(true);
  return (
    <Container>
      <HeaderContainer>
        <div
          style={{
            height: "100%",
            width: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            background: display ? "tomato" : "#fff",
          }}
          onClick={() => setDisplay(true)}
        >
          <p>LOGIN</p>
        </div>
        <div
          style={{
            height: "100%",
            width: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            background: display ? "#fff" : "tomato",
          }}
          onClick={() => setDisplay(false)}
        >
          <p>SIGN UP</p>
        </div>
      </HeaderContainer>
      {display ? <Signin /> : <Signup />}
    </Container>
  );
}
