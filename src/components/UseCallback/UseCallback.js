import React, { useState, useCallback } from "react";
import Todo from "./Todo";

const UseCallback = () => {
  const [count, setCount] = useState(0);
  const [todo, setTodo] = useState([]);

  const addTodo = useCallback(() => {
    setTodo([...todo, "new todo"]);
  }, [todo]);
  return (
    <>
      <h1>Use Callback </h1>
      <Todo todo={todo} addTodo={addTodo} />
      <hr />
      <h3>Counter: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
};

export default UseCallback;
