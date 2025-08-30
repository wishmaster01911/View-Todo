import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";  // For animations
import { addTodo, deleteTodo, toggleComplete, editTodo } from "./reducer/TodoSlice.js";  // Assuming these actions exist in the slice

const ViewTodo = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState("");
  const [newTodo, setNewTodo] = useState(""); // New state for adding a new todo

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      dispatch(addTodo({ text: newTodo }));
      setNewTodo(""); // Clear the input after adding
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleToggleComplete = (id) => {
    dispatch(toggleComplete(id));
  };

  const handleEdit = (todo) => {
    setIsEditing(true);
    setEditText(todo.text);
  };

  const handleSaveEdit = (id) => {
    dispatch(editTodo({ id, text: editText }));
    setIsEditing(false);
  };

  return (
    <div className="mt-8">
      {/* Input for adding a new todo */}
      <div className="flex items-center mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)} // Update newTodo state as the user types
          placeholder="Add a new todo..."
          className="bg-gray-700 text-white rounded p-2 mr-2"
        />
        <button
          onClick={handleAddTodo}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add Todo
        </button>
      </div>

      {/* Displaying todos */}
      {todos.map((todo) => (
        <motion.div
          key={todo.id}
          className={`flex justify-between items-center bg-gray-800 rounded border border-gray-700 p-4 my-2 ${
            todo.completed ? "bg-green-800" : ""
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleComplete(todo.id)}
              className="mr-2"
            />
            <div className={`text-white ${todo.completed ? "line-through" : ""}`}>
              {isEditing && editText === todo.text ? (
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="bg-gray-700 text-white rounded p-2"
                />
              ) : (
                todo.text
              )}
            </div>
          </div>

          <div className="flex items-center">
            {isEditing && editText === todo.text ? (
              <button
                onClick={() => handleSaveEdit(todo.id)}
                className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
              >
                Save
              </button>
            ) : (
              <>
                <button
                  onClick={handleAddTodo}
                  className="bg-green-500 text-white px-4 py-2 rounded"
                >
                  Add Todo
                </button>


                <button
                  onClick={() => handleEdit(todo)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded ml-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(todo.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded ml-2"
                >
                  Delete
                </button>
              </>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ViewTodo;
