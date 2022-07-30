import React from "react";
import useFetch from "./useFetch";

const CustomHookExa = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/users");
  return (
    <>
      <h1>CustomHookExa</h1>
      {data &&
        data.map((item, index) => {
          return <p key={index}>{item.name}</p>;
        })}
    </>
  );
};

export default CustomHookExa;
