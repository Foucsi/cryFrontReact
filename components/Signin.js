import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useState } from "react";
import { login } from "../reducers/user";
import { useDispatch } from "react-redux";

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
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    const res = await fetch(`http://localhost:3000/users/signin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();
    if (data.result) {
      dispatch(
        login({
          username: data.user.username,
          email: data.user.email,
          password: data.user.password,
          token: data.user.token,
        })
      );
      router.push("/welcome");
    }
  };
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
        <Input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={() => handleLogin()}>LOGIN</button>
      </div>
    </Container>
  );
}
