import React from "react";
function BookItemReduxSagaFunction(props) {
  return (
    <React.Fragment>
      <tr key={props.data.id}>
        <td>{props.data.id}</td>
        <td>
          <img
            src={props.data.bookImageUrl}
            width="150px"
            height="100px"
            alt="Books"
          ></img>
        </td>
        <td>{props.data.bookTitle}</td>
        <td>{props.data.bookAuthor}</td>
        <td>{props.data.bookGenre}</td>
        <td>{props.data.bookCost}</td>
      
      </tr>
    </React.Fragment>
  );
}

export default BookItemReduxSagaFunction;
