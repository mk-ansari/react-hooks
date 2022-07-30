import React, {useContext} from "react";
import { UserContext } from "../../Context/UserContext";

const Component1 = () => {
  const {name,color} = useContext(UserContext);
  return (
    <>
      <h1>Component1</h1>
      <h3>Name is: {name}</h3>
      <h3>Color is: {color}</h3>
    </>
  );
};

export default Component1;
