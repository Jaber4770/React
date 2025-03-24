import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount);
    }
    const handleDecrese = () => {
        const newCount = count - 1;
        setCount(newCount);
    }
    const handleReset = () => {
        const newCount = 0;
        setCount(newCount);
    }
    const counterStyle = {
        border: "2px solid tomato",
        padding: "30px",
        margin: "10px"
    }
    {
        // if(count <= 0){return;}
    }
return (
    <div style={counterStyle}>

        <h3>Count: {count}</h3>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleDecrese}>Decrese</button>
        <button onClick={handleReset}>Reset</button>
    </div>
);
};

export default Counter;