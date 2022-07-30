import React, { useEffect, useState } from "react";

const UseEffectExa = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('render!');
    return () => console.log('unmounting...');
  })
  return (
    <>
      <h1>Counter: {count} </h1>
      <button onClick={()=>setCount(count+1)}>Click</button>
    </>
  );
};

export default UseEffectExa;
