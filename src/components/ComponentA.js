import React from "react";
import { useCounter } from "../contexts/counterContext";
import ComponentB from "./ComponentB";

function ComponentA() {
    const {count} = useCounter();
  return <div>
    <h3>
        Count is: {count}
    </h3>
    <ComponentB/>
  </div>;
}

export default ComponentA;
