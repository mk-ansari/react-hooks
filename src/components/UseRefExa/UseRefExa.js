import React, { useRef, useState, useEffect } from "react";

const UseRefExa = () => {
  const [state, setState] = useState();
  const input = useRef();
  const input2 = useRef();

  useEffect(() => {
    input.current = state
  }, [state])
  

  const handleFocus = () => {
    input2.current.focus();
  };
  const clearInput = () => {
    input2.current.value = "";
  };


  return (
    <>
      <h1>Use Ref </h1>
      <input
        type="text"
        ref={input}
        onChange={(e) => setState(e.target.value)}
      />
      <h2>current value: {state}</h2>
      <h2>previous value: {input.current}</h2>
      <input
        type="text"
        ref={input2}
        onClick={handleFocus}
      />
      <button onClick={handleFocus}>Input Focus</button>
      <button onClick={clearInput}>Reset</button>
    </>
  );
};

export default UseRefExa;
