import React, { useState } from 'react';

const Batsman = () => {
    const [run, setRun] = useState(0);
    const [six, setSix] = useState(0);

    const handleSingle = () => {
        const newRun = run + 1;
        setRun(newRun);
    }
    const handleFour = () => {
        const newRun = run + 4;
        setRun(newRun);
    }
    const handleSix = () => {
        const newRun = run + 6;
        setRun(newRun);

        const newSix = six + 1;
        setSix(newSix);
    }

    const counterStyle = {
        border: "2px solid tomato",
        padding: "30px",
        margin: "10px"
    }
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        // .then(data => console.log(data));
    
/*     const loadData = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = res.json();
        return data;
    } 
*/
    return (
        <div style={counterStyle}>
            
            <h3>Runs: {run}</h3>
            <h4>Sixes: { six}</h4>
            <button onClick={handleSingle}>Single</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    );
};

export default Batsman;