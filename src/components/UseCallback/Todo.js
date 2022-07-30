import React, { memo, useState } from "react";

const Child = ({ todo, addTodo }) => {
  console.log("Todo component is rendred.");
  return (
    <>
      <h2>Todo List</h2>
      {todo.map((val, index) => (
        <p key={index}>{val}</p>
      ))}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
};

export default memo(Child);
