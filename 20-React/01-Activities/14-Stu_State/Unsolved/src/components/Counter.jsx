import { useState } from "react";
import CardBody from "./CardBody";

/* export default is used to export the Counter component as the default export of this module.
It allows you to import this component without specifying its name, like: import Counter from './Counter'. from the file instead of the function name.*/
export default function Counter() {
  const [count, setCount] = useState(0);

  // handler increments by 1
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // handle decrements by 1
  const handleDecrement = () => {
    if (count > 0) {
      // > 0 so the number does not go into the negatives.
      setCount(count - 1);
    }
  };

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">Click Counter!</div>
      <CardBody
        count={count} // the count state which is the present counter.
        handleIncrement={handleIncrement} // a refrence to the incrementing function.
        handleDecrement={handleDecrement} // a refrence to the decrementing function.
      />
    </div>
  );
}
