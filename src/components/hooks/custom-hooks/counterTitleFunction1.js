import { useState } from "react";
import UseDocumentTitle from "./useDocumentTitle";


function CounterTitleFunction1() {
  const [count, setCount] = useState(0);

  UseDocumentTitle(count);

  return(<div>
    <h4>You have Clicked ${count} times</h4>
    <button className="btn btn-primary" onClick={()=>{setCount(count+1)}}>Click</button>
  </div>)
};

export default CounterTitleFunction1;