import React from "react";
import { useState, useEffect } from "react";
import { Outlet, useNavigate, Link } from "react-router-dom";
import BookItemGraphql from "./bookItemGraphql";

import { useQuery, gql } from "@apollo/client";

function BookStoreGraphql(props) {
  const navigate = useNavigate();
  const [allBooks, setAllBooks] = useState([]);


  const GET_ALL_BOOKS = gql`
  query {
      getAllBooks{
         bookTitle, bookGenre, bookCost, bookAuthor
       }
     }
     `

     const { error, loading, data } =  useQuery(GET_ALL_BOOKS); // in this line the graph ql query is executed.

    console.log("data:", data);

     useEffect(()=>{
      if(data){
        setAllBooks(data.getAllBooks)
      }
     }, [loading, error, data]);


  // Render all books function----------

  const renderBookStore = () => {
    return allBooks.map((eachBook) => (
      <BookItemGraphql
        key={eachBook.id}
        bookData={eachBook}
        onDelete={handleRemove} // short way to do
        onView={handleView}
      ></BookItemGraphql>
    ));
  };

  // Handle view function--------------------

  const handleView = (book) => {
    navigate(`book-view-graphql/${book.id}`); 
  };

  // Handle Delete function

  const handleRemove = (book) => {
  
  };

 

  return (
    <div className="container m-5">
      <h2>Book Graphql Store</h2>
      <div>
        <Link className="btn btn-success" to="/root-book-graphql/book-add-graphql">
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

export default BookStoreGraphql;
