import React from "react";

function BookItemHttpFunction(props) {
  let eachBook = props.bookData;

  return (
    <React.Fragment>
      <tr key={eachBook.id}>
        <td>{eachBook.id}</td>
        <td>
          <img
            src={eachBook.bookImageUrl}
            width="150px"
            height="100px"
            alt="Books"
          ></img>
        </td>
        <td>{eachBook.bookTitle}</td>
        <td>{eachBook.bookAuthor}</td>
        <td>{eachBook.bookGenre}</td>
        <td>{eachBook.bookCost}</td>
        {/* <td><button type="button" className="btn btn-danger btn-sm" onClick={handleDelete}>Delete</button></td> */}
        
        <td>
          <button
            type="button"
            className="btn btn-primary btn-sm">
            Edit
          </button>
        </td>
        
        <td>
          <button
            type="button"
            className="btn btn-warning btn-sm"
            onClick={() => props.onView(eachBook)}
          >
            View
          </button>
        </td>
        <td>
          <button
            type="button"
            className="btn btn-danger btn-sm"
            onClick={() => props.onDelete(eachBook)}
          >
            Remove
          </button>
        </td>
      </tr>
    </React.Fragment>
  );
}

export default BookItemHttpFunction;
