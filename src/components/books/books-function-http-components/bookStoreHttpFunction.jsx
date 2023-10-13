import React from "react";
import { useState, useEffect } from "react";
import { Outlet, useNavigate, Link } from "react-router-dom";
import BookItemHttpFunction from "../books-function-http-components/bookItemHttpFunction";

function BookStoreHttpFunction() {
  const navigate = useNavigate();
  // const [title, setTitle] = useState("LIST OF BOOKS");
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    // here we have to use fetch api to make asynchronous http request
    fetch("http://localhost:4000/books")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAllBooks(data);
      })
      .catch((err) => 
        console.error(err))
      }, []);

  // Render all books function----------

  const renderBookStore = () => {
    return allBooks.map((eachBook) => (
      <BookItemHttpFunction
        key={eachBook.id}
        bookData={eachBook}
        onDelete={handleRemove} // short way to do
        onView={handleView}
      ></BookItemHttpFunction>
    ));
  };

  // Handle view function--------------------

  const handleView = (book) => {
    navigate(`book-view-http-function/${book.id}`); 
  };

  // Handle Delete function

  const handleRemove = (book) => {
    // let allBook = allBooks;
    // allBook = allBook.filter((eBook) => eBook.id !== book.id);
    // setAllBooks(allBook);
  };

  // Add new book function-------------

  // const handleAddNewBook = () => {
  //   // here we should route to book-add-function
  //   // for this we need to import useNavigate from 'react-router-dom'
  //   //  navigate("book-add-function"); // this is relative routing.
  //   navigate("/book-add-function"); // this is absolute routing
  // };

  return (
    <div className="container m-5">
      <h2>Book Http Store</h2>
      <div>
        <Link className="btn btn-success" to="/book-add-http-function">
          ADD NEW BOOK
        </Link>
      </div>


      <Outlet></Outlet>

      {/* Table  view  */}

      <table className="table table-striped">
        <thead className="table-dark text-white">
          <tr>
            <th>ID</th>
            <th>IMAGE</th>
            <th>TITLE</th>
            <th>AUTHOR</th>
            <th>GENRE</th>
            <th>COST</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>

        <tbody>{renderBookStore()}</tbody>
      </table>
    </div>
  );
}

export default BookStoreHttpFunction;
