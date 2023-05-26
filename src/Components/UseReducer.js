import React, { useReducer } from "react";

let initialState = { a: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, a: state.a + action.value };

    case "decrement":
      return { ...state, a: state.a - action.value };
    default:
      return initialState;
  }
};
function Counter() {
  let [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="app1">
     
        <h1>Count : {count.a}</h1>
        <p>Using Use Reducer for multiple operations on one element</p>
        <div className="increment">
            <button onClick={() => dispatch({ type: "increment", value: 1 })}>
            Increment by 1
        </button>
        <button onClick={() => dispatch({ type: "increment", value: 5 })}>
          Increment by 5
        </button>
      </div>
      <div className="decrement">
        <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
          Decrement by 1
        </button>
        <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
          Decrement by 5
        </button>
      </div>
      <div className="reset">
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
