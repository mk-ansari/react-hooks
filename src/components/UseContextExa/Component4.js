import React, { useContext } from "react";
import { UserContext } from "../../Context/UserContext";

const Component4 = () => {
  const {name, setName,color, setColor} = useContext(UserContext);

  return (
    <>
      <h1>Component4 </h1>
      <h3>The value is: {name}</h3>
      <h3>The value2 is: {color}</h3>
      <button onClick={()=>setName("ansari")}>Change name</button>
      <button onClick={()=>setColor("blue")}>Change color</button>
    </>
  );
};

export default Component4;


