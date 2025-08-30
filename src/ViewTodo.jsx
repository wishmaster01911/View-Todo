import React from "react";
import { useSelector } from "react-redux";

const ViewTodo = () => {
  const todos = useSelector((state) => state.todos);
  // console.log(todos)

  return (
    <div className="mt-8">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="flex justify-between items-center bg-gray-800 rounded border border-gray-700 p-4 my-2"
        >
          <div className="text-white">{todo.text}</div>
        </div>
      ))}
    </div>
  );
};

export default ViewTodo;