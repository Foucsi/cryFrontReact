import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { login } from "../reducers/user";
import { useDispatch } from "react-redux";
import { useState } from "react";

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

export default function Signup({ setDisplay }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const router = useRouter();

  const dispatch = useDispatch();

  const handleRegister = async () => {
    const res = await fetch(`http://localhost:3000/users/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
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
      setUsername("");
      setEmail("");
      setPassword("");
      router.push("/welcome");
    } else if (data.error === "Missing or empty fields") {
      setMsg("Missing or empty fields");
    } else if (data.error === "User already exists") {
      setMsg(
        <p>
          User already exists{" "}
          <span
            onClick={() => setDisplay(true)}
            style={{ color: "blue", cursor: "pointer" }}
          >
            Login
          </span>
        </p>
      );
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
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <p>{msg}</p>
        </div>

        <button onClick={() => handleRegister()}>SIGN UP</button>
      </div>
    </Container>
  );
}
