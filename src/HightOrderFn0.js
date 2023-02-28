import React, { useContext, useEffect } from "react";
import CreateContext from "./context/CreateContext";

const HightOrderFn0 = () => {
  const a = useContext(CreateContext);
  useEffect(() => {
    setTimeout(() => {
      a.updatedAt();
    }, 2000);
  }, []);

  console.log(a);
  return <>{a.new1.name}</>;
};

export default HightOrderFn0;
