import { useEffect } from "react";


function UseDocumentTitle(count) {
  useEffect(()=>{
    document.title = `Clicked ${count} times`;
  }, [count]);

  useEffect(()=>{
    // here to work with unmounting phase, we have to return a function defecation;
    return ()=>{
      document.title = `React App`;
    }
  })
}

export default UseDocumentTitle;