import { useState } from "react";

export default function Counter() {
  // useState accepts only one argument - the initial value of the state variable.
  let [count, setCount] = useState(0);

  const incrementByOne = () => {
    setCount(count + 1);
    console.log(`New value of count: ${count}`);
  };

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">Click Counter!</div>
      <div className="card-body">
        <p className="card-text">Click Count: {count}</p>
        {/* In our button element, we add a onClick event that invokes our incrementByOne method */}
        <button
          className="btn btn-primary"
          type="button"
          onClick={incrementByOne}
        >
          Increment
        </button>
      </div>
    </div>
  );
}
