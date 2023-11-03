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

import BookStoreHttpFunction from './components/books/books-function-http-components/bookStoreHttpFunction';
import BookViewHttpFunction from './components/books/books-function-http-components/bookViewHttpFunction';
import BookAddHttpFunction from './components/books/books-function-http-components/bookAddHttpFunction';

import CookieContainer from './components/redux/react-redux-cookie-demo/components/cookiesContainer';
import { Provider } from 'react-redux';
// import store from './components/redux/react-redux-cookie-demo/store/store';
import BookStoreReduxFunction from './components/redux/react-redux-book-demo/components/bookStoreReduxFunction';
import BookStoreReduxSagaFunction from './components/redux/react-redux-saga-book-demo/components/bookStoreReduxSagaFunction';
// import store from './components/redux/react-redux-book-demo/store/store';
import store from './components/redux/react-redux-saga-book-demo/store/store';
import HooksHeader from './components/hooks/hooks-header';
import UseStateDemo from './components/hooks/useStateDemo';
import RootComponent from './components/hooks/use-context-demo/rootComponent';

import CounterTitleClass from './components/hooks/use-effect-demo/counterTitleClass';
import CounterTitleFunction from './components/hooks/use-effect-demo/counterTitleFunction';
import CounterTitleFunction1 from './components/hooks/custom-hooks/counterTitleFunction1';

import ToDoListParent from './components/lifecycle-methods/toDoItemParent';






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

    <Provider store={store}>
    <div>
      <Header></Header>
      <Routes>

        <Route path="/" element={<Display/>}></Route>
        <Route path="counter" element={<Counter/>}></Route>
        <Route path="list-colors" element={<ListColors/>}></Route>
        <Route path="todo-lifecycle" element={<ToDoListParent />}></Route>
        <Route path="book-store-class" element={<BookStore/>}></Route>

        <Route path="book-store-function" element={<BookStoreFunction/>}>
          <Route path="book-view-function/:bookId" element={<BookViewFunction/>}></Route>
        </Route>

        <Route path="book-add-function" element={<BookAddFunction/>}></Route>

        <Route path="book-store-http-function" element={<BookStoreHttpFunction/>}>
          <Route path="book-view-http-function/:bookId" element={<BookViewHttpFunction/>}></Route>
        </Route>
       
        <Route path="book-add-http-function" element={<BookAddHttpFunction/>}></Route>

        <Route path="redux-cookie" element={<CookieContainer/>}></Route>
        <Route path="redux-book" element={<BookStoreReduxFunction/>}></Route>
        <Route path="redux-saga-book" element={<BookStoreReduxSagaFunction/>}></Route>


        <Route path="hooks" element={<HooksHeader/>}>
          <Route path="use-state" element={<UseStateDemo/>}></Route>
          <Route path="use-context" element={<RootComponent/>}></Route>
          <Route path="class-demo" element={<CounterTitleClass />}></Route>
          <Route path="use-effect" element={<CounterTitleFunction/>}></Route>
          <Route path="custom-hook" element={<CounterTitleFunction1/>}></Route>
        </Route>

      </Routes>
    </div>
    </Provider>

  );
}

export default App;
