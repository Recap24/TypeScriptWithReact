
import { useState } from "react";
import UserComponent from "./Component/UserComponent";
const App = () => {
    const [count, setCount] = useState<number>(0);
    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };
    const decrement = () => {
        setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
    };

    return (
        <div>
            <h2>Current Count: {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>

            <UserComponent/>
        </div>
    );
};

export default App;