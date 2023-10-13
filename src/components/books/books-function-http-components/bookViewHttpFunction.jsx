import React, { Component } from "react";
import { Link, useParams } from "react-router-dom";

function BookViewHttpFunction() {
  const params = useParams();
  return (
    <div className="card">
      <div className="card-header bg-warning text-white">
        <h2> Book view </h2>
      </div>

      <div className="card-body">{params.bookId}</div>

      <div className="card-footer bg-warning">

        <Link to="/book-store-function" className="btn btn-light text-warning">
          Close
        </Link>

      </div>
    </div>
  );
}

export default BookViewHttpFunction;
