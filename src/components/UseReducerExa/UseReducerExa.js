import React, { useReducer } from "react";
import { counterReducer } from "./Reducers/counterReducer";

const initialValues = {
  count: 0,
};

const UseReducerExa = () => {
  const [state, dispatch] = useReducer(counterReducer, initialValues);
  console.log(state);
  return (
    <>
      <h1>Use Reducer </h1>
      <h3>Counter: {state.count}</h3>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button
        onClick={() => dispatch({ type: "INCREMENT_BY_NUM", payload: 10 })}
      >
        Increment By 10
      </button>
      <button
        onClick={() => dispatch({ type: "DECREMENT_BY_NUM", payload: 20 })}
      >
        Decrement By 20
      </button>
    </>
  );
};

export default UseReducerExa;
