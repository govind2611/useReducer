import React, { useReducer } from "react";

let initialState = { a: 0, b: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case "incrementA":
      return { ...state, a: state.a + action.value };
    case "incrementB":
      return { ...state, b: state.b + action.value };

    case "decrementA":
      return { ...state, a: state.a - action.value };
    case "decrementB":
      return { ...state, b: state.b - action.value };
    case "reset":
      return initialState;
  }
};
function Counter3() {
  let [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="app2">
      <p>Using Use Reducer for multiple operations on multiple element</p>
      <h1>Count Of A: {count.a}</h1>
      <h1>Count Of B: {count.b}</h1>
      <div className="increment">
        <button onClick={() => dispatch({ type: "incrementA", value: 1 })}>
          Increment A
        </button>
        <button onClick={() => dispatch({ type: "incrementB", value: 1 })}>
          Increment B
        </button>
      </div>
      <div className="decrement">
        <button onClick={() => dispatch({ type: "decrementA", value: 1 })}>
          Decrement A
        </button>

        <button onClick={() => dispatch({ type: "decrementB", value: 1 })}>
          Decrement B
        </button>
      </div>
      <div className="reset">
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
    </div>
  );
}

export default Counter3;
