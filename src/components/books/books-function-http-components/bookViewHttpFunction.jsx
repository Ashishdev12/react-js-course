import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function BookViewHttpFunction() {
  const params = useParams();

  return (
    <div className="container">
      <div className="card">
        <div className="card-header bg-warning text-white">
          <h2> Book Details </h2>
        </div>

        <div className="card-body">
          <div>{params.bookId}</div>
        </div>

        <div className="card-footer bg-warning">
          <Link
            to="/book-store-http-function"
            className="btn btn-light text-warning"
          >
            Close View
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BookViewHttpFunction;
