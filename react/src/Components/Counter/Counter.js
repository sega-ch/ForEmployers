import React, {useState} from "react";



function Counter() {

    const [value, setValue] = useState(0);

    function handlePlus()
    {
       setValue(value + 1);
    }

    function handleMinus()
    {
        setValue(value - 1);
    }
    
    return (
        <div className="main">
            <p>{value}</p>
            <button onClick={handlePlus}>+1</button>
            <button onClick={handleMinus}>-1</button>
        </div>
    );
}

export default Counter;