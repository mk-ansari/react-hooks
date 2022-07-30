import React, {useMemo, useState} from "react";

const UseMemoExa = () => {
  const [todo, setTodo] = useState([]);
  const [count, setCount] = useState(0);
  const expensiveCalculation=(num)=>{
    console.log("Calculating...");
  }
  const calculate =  useMemo(() => expensiveCalculation(count), [count]);


  return (
    <>
      <h1>Use Memo </h1>
      <h2>Todo List</h2>
      {todo.map((val, index) => (
        <p key={index}>{val}</p>
      ))}
      <button onClick={()=>setTodo([...todo, "new todo"])}>Add Todo</button>
      <hr />
      <h3>Counter: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h1>{calculate}</h1>
    </>
  );
};

export default UseMemoExa;
