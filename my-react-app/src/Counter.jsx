import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount);
    }
    const counterStyle = {
        border: "2px solid tomato",
        padding: "30px",
        margin: "10px"
    }
    return (
        <div style={counterStyle}>
            <h3>Count: {count}</h3>
            <button onClick={handleAdd}>Add</button>
        </div>
    );
};

export default Counter;