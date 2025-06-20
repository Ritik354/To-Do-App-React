import { useState, useEffect } from "react";
import { Todocontext } from "../context/Todocontext";

const Wrapper = ({ children }) => {
  // ✅ Step 1: Load todos from localStorage
  const getInitialTodos = () => {
    const savedTodos = localStorage.getItem("myTodos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  };

  // ✅ Step 2: Initialize state from localStorage
  const [todos, setTodos] = useState(getInitialTodos);

  // ✅ Step 3: Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("myTodos", JSON.stringify(todos));
  }, [todos]);

  // ✅ Step 4: Provide state to the rest of the app
  return (
    <Todocontext.Provider value={[todos, setTodos]}>
      {children}
    </Todocontext.Provider>
  );
};

export default Wrapper;
