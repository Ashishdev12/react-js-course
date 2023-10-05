import React from 'react';
import './App.css';
// import Display from './components/display';
// import Counter from './components/counter';
// import ListColors from './components/listcolors'; 
import BookStore from './books/bookStore';


function App() {
  return (
    // <div>
    //   <h2>App Component</h2>
    //   <Display></Display>
    // </div>

    <React.Fragment>
      {/* <h2>App Component</h2> */}
      {/* <Display></Display> */}
      {/* <Counter></Counter> */}
      {/* <ListColors></ListColors> */}
      <BookStore></BookStore>
      
    </React.Fragment>

  );
}

export default App;
