import BookItemFunction from "./bookItemFunction";
import React from "react";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function BookStoreFunction() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("LIST OF BOOKS");
  const [allBooks, setAllBooks] = useState([
    {
      "id": 101,
      "bookTitle": "Harry Potter and the Order Of Phoenix",
      "bookAuthor": "J.K.Rowling",
      "bookGenre": "Fiction",
      "bookCost": "200",
      "bookImageUrl": "https://images.unsplash.com/photo-1609866138210-84bb689f3c61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=469&q=80"
    },
    {
      "id": 102,
      "bookTitle": "Harry Potter and the Sorcerers' Stone",
      "bookAuthor": "J.K.Rowling",
      "bookGenre": "Fiction",
      "bookCost": "300",
      "bookImageUrl": "https://images.unsplash.com/photo-1600189261867-30e5ffe7b8da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    }
  ]);

  // Render all books function----------

  const renderAllBooks = () => {
    return allBooks.map((eachBook) => (
      <BookItemFunction
        key = {eachBook.id}
        data={eachBook}
        // onDelete={() => handleDelete(eachBook)} // 1st method
        // onView={() => handleView(eachBook)}

        // onDelete={(bookData)=>{handleDelete(bookData)}} // good way to do
        // onView={(bookData)=>{handleView(bookData)}}

        onDelete={handleDelete} // short way to do
        onView={handleView}
      ></BookItemFunction>
    ));
  };

  // Handle view function--------------------

  const handleView = (book) => {
    // here we should navigate to 'book-view-function'
    navigate(`book-view-function/${book.id}`); // since it is a nested route , we use relative routing
                                                // notice the / is removed from the front
  };

  // Handle Delete function

  const handleDelete = (book) => {
    let allBook = allBooks;
    allBook = allBook.filter((eBook) => eBook.id !== book.id);
    setAllBooks(allBook);
  };

  // Add new book function-------------

  const handleAddNewBook = () => {
    // here we should route to book-add-function
    // for this we need to import useNavigate from 'react-router-dom'
    //  navigate("book-add-function"); // this is relative routing.
    navigate("/book-add-function"); // this is absolute routing
  };

  return (
    <div className="container m-5">
      <h2>{title}</h2>

      <button
        type="button"
        className="btn btn-success"
        onClick={handleAddNewBook}
      >
        Add New Book
      </button>

      <Outlet></Outlet>

{/* Table  view  */}

      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>IMAGE</th>
            <th>TITLE</th>
            <th>AUTHOR</th>
            <th>GENRE</th>
            <th>COST</th>
            <th></th>
            <th></th>
          </tr>
        </thead>

        <tbody>{renderAllBooks()}</tbody>
      </table>
     
    </div>
  );
}

export default BookStoreFunction;
