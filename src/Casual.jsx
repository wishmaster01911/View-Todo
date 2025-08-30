import React from "react";
import { useSelector } from "react-redux";

const Casual = () => {
  const todo = useSelector((state) => state.todos);
  console.log(todo);
  return <div>Casual</div>;
};

export default Casual;