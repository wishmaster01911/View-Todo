import React from "react";
import AddTodo from "./AddTodo";
import ViewTodo from "./ViewTodo";
import Casual from "./Casual";
import General from "./General";

const App = () => {
  return (
    <div className="bg-gray-900 min-h-screen p-4">
      <h1 className="text-3xl font-bold text-white text-center mb-8">
        Todo App
      </h1>
      <AddTodo />
      <ViewTodo />
      <Casual />
      <General />
    </div>
  );
};

export default App;