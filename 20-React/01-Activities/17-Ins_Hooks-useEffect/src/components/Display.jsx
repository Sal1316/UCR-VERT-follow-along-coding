import { useState, useEffect } from "react";

/* useEffect when the component mouts to the dom we can have it run useEffect*/

export default function Display() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  // When the component mounts to the VDOM, run this callback
  useEffect(() => {
    const storedCount = localStorage.getItem("myCount");

    // If the value is found in storage, convert the string to a number and update state
    if (storedCount) {
      setCount(parseInt(storedCount));
    }
  }, []); // only runs on time with empty depency array. Only runs when the component is first loaded.

  // When the state changes run this callback
  useEffect(() => {
    // Update the localStorage count variable using the setItem method
    console.log((count, "being updated."));
    localStorage.setItem("myCount ", count);
  }, [count]); // only changes when the count variable changes.

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const clearStorage = () => {
    localStorage.clear();
    setCount(0);
  };

  return (
    <div>
      <p>
        You clicked {count} times and count2 is {count2}
      </p>
      <code>check localStorage in developer console</code>
      <hr />
      <button type="button" onClick={handleIncrease}>
        Click Me
      </button>
      <button type="button" onClick={clearStorage}>
        Reset Count
      </button>
      <button type="button" onClick={() => setCount2(count + 100)}>
        Reset Count
      </button>
    </div>
  );
}
