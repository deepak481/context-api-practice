import React from "react";
import { useCounter } from "../contexts/counterContext";

function ComponentB() {
    const {increaseCount, decreaseCount} = useCounter();
  return <div>
    <button onClick={increaseCount}>
        Increment
    </button>
    <button onClick={decreaseCount}>
        Decrement
    </button>
  </div>;
}

export default ComponentB;
