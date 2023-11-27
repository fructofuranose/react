import React, {useEffect, useState} from 'react';

const Counter = ()=>{
    const [count, setCount]= useState(0)
    const countUp =()=>{
        setCount ((prevState) => {return prevState +1;})
    }   //setCount(i=i+1)
    const countDown = () =>{
        setCount (prevState => prevState -1)
    }

    useEffect(()=>{
    console.log("Current count is...", count);
    },[count])
    
    return (
    <div>
        <p>現在のカウント数:{count}</p>
        <button onClick={countUp}>up</button>
        <button onClick={countDown}down>down</button>
    </div>
    );
};

export default Counter;