import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserContainer = ({ children }) => {
  const [name, setName] = useState("kamal");
  const [color, setColor] = useState("red");

  return (
    <UserContext.Provider value={{name, setName, color, setColor}}>
      {children}
    </UserContext.Provider>
  );
};
