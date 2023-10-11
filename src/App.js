import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Display from './components/display';
import Counter from './components/counter';
import ListColors from './components/listcolors'; 
import BookStore from './components/books/books-class-components/bookStore';
import BookStoreFunction from './components/books/books-function-components/bookStoreFunction';
import BookAddFunction from './components/books/books-function-components/bookAddFunction';
import BookViewFunction from './components/books/books-function-components/bookViewFunction';



function App() {
  return (
    // <div>
    //   <h2>App Component</h2>
    //   <Display></Display>
    // </div>

    // <React.Fragment>
    //   {/* <h2>App Component</h2> */}
    //   {/* <Display></Display> */}
    //   {/* <Counter></Counter> */}
    //   {/* <ListColors></ListColors> */}
    //   {/* <BookStore></BookStore> */}
    //  <BookStoreFunction></BookStoreFunction>
      
    // </React.Fragment>

    <div>
      <Header></Header>
      <Routes>

        <Route path="/" element={<Display/>}></Route>
        <Route path="counter" element={<Counter/>}></Route>
        <Route path="list-colors" element={<ListColors/>}></Route>
        <Route path="book-store-class" element={<BookStore/>}></Route>

        <Route path="book-store-function" element={<BookStoreFunction/>}>
          <Route path="book-view-function/:bookId" element={<BookViewFunction/>}></Route>
        </Route>

        <Route path="book-add-function" element={<BookAddFunction/>}></Route>

      </Routes>
    </div>

  );
}

export default App;
