import React, { useState } from 'react';
import "./App.css"

const ShowHide = () => {
    const [toggle, setToggle] = useState(false);

    const showHideToogle = () => {
        setToggle(prev => !prev);
    }
    return (
        <div className='card'>
            <h3>{toggle ? "Hello, React Learner!": ""}</h3>
            <button onClick={showHideToogle}>Toggle</button>
        </div>
    );
};

export default ShowHide;