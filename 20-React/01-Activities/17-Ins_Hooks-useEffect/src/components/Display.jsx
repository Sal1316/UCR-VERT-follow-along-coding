import { useState, useEffect } from "react";

/* when the component mounts to the dom we can have it run useEffect*/

export default function Display() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  // When the component mounts to the VDOM, run this callback
  useEffect(() => {
    const storedCount = localStorage.getItem("myCount"); // what sets 'myCount'?

    // If the value is found in storage, convert the string to a number and update state
    if (storedCount) {
      setCount(parseInt(storedCount));
    }
  }, []); // only runs on time with empty depency array. Only runs when the component is first loaded.

  // When the 'count' state changes run this callback
  useEffect(() => {
    // Update the localStorage count variable using the setItem method
    console.log((count, "being updated."));
    localStorage.setItem("myCount ", count);
  }, [count]); // only changes when the count variable changes.

  const increment = () => {
    setCount(count + 1);
  };

  const clearStorage = () => {
    localStorage.clear();
    setCount(0); // resets count to 0
    setCount2(0); // resets count2 to 0
  };

  return (
    <div>
      <p>
        You clicked {count} times and count2 is {count2}
      </p>
      <code>check localStorage in developer console</code>
      <hr />
      <button type="button" onClick={increment}>
        Click Me
      </button>
      <button type="button" onClick={clearStorage}>
        Reset Count
      </button>
      <button type="button" onClick={() => setCount2(count2 + 100)}>
        Click Me
      </button>
    </div>
  );
}
