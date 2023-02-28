import React, { useState } from "react";
import CrtContext from "./CreateContext";

const Dstate = (props) => {
  const data = {
    name: "test",
    c: "c",
  };
  const newData = {
    name: "test2",
    c: "c",
  };
  const [new1, setNew1] = useState(data);
  const updatedAt = () => {
    setNew1(newData);
  };
  return (
    <CrtContext.Provider value={{ new1, updatedAt }}>
      {props.children}
    </CrtContext.Provider>
  );
};
export default Dstate;
