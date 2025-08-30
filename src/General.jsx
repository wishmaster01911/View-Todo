import React from "react";
import { useSelector } from "react-redux";

const General = () => {
  const data = useSelector((state) => state.todos);
  console.log("i am inside genersal");
  console.log(data);
  return <div>General</div>;
};

export default General;