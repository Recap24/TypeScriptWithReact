import { useState } from "react";
const Counter = () => {
    const [count, setCount] = useState<number>(0);

    return (
      <div>
        <h1>Counter</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <h2>Current Count: {count}</h2>
      </div>
    );
};

export default Counter;