import React, { useState } from 'react';

function CounterDemo() {
  const [count, setCount] = useState(0);

 const handleIncrementByFive = () =>{
    for(let i=0; i<5; i++){
      setCount((prevCount) => prevCount +1);
    }
  }
  return ( <div>

    <h1>Counter Demo</h1>
    <h4>Count: <h3 data-testid= "countTestId">{ count }</h3></h4>
    <button type="button" className="btn btn-success" onClick={()=>setCount(count+1)}>Increment</button>
    <button type="button" className="btn btn-primary" onClick={handleIncrementByFive}>Increment by 5</button>
   
  </div> );
}

export default CounterDemo;