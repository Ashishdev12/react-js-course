import React, { useState } from 'react';

function UseStateDemo() {
  const [count, setCount] = useState(0);

 const handleIncrementByFive = () =>{
    for(let i=0; i<5; i++){
      setCount((prevCount) => prevCount +1);
    }
  }
  return ( <div>

    <h1>UseState Ashish</h1>
    <h4>Count: {count}</h4>
    <button type="button" className="btn btn-success" onClick={()=>setCount(count+1)}>Increment</button>
    <button type="button" className="btn btn-primary" onClick={handleIncrementByFive}>Increment by 5</button>
   
  </div> );
}

export default UseStateDemo;