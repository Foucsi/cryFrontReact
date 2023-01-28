import React from "react";
import { useSelector } from "react-redux";

export default function welcome() {
  const users = useSelector((state) => state.user.value);
  return (
    <div>
      <h1>Welcome {users.username}</h1>
    </div>
  );
}
