import React, { useState } from "react";

const Counter2 = () => {
  let [count, setCount] = useState({ a: 0 });

  function increment(value) {
    setCount({ ...count, a: count.a + value });
  }

  function decrement(value) {
    setCount({ ...count, a: count.a - value });
  }
  function reset() {
    setCount({ a: 0 });
  }

  return (
    <div className="app3">
      <h1>Count : {count.a}</h1>
      <p>Using Use State for multiple operations on one element</p>
      <div className="increment">
        <button onClick={() => increment(1)}>Increment by 1</button>
        <button onClick={() => increment(5)}>Increment by 5</button>
      </div>

      <div className="decrement">
        <button onClick={() => decrement(1)}>Decrement by 1</button>
        <button onClick={() => decrement(5)}>Decrement by 5</button>
      </div>

      <div className="reset">
        <button onClick={() => reset()}>Reset</button>
      </div>
    </div>
  );
};

export default Counter2;
