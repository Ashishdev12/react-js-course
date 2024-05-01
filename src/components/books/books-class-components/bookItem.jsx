import React, { Component } from "react";

class BookItem extends Component {
  state = {
    // book: this.props.data
  };

  // handleDelete = () => {
    // here are we suppose to handle the delete operation? - no
    // the rule is that the component which hold state should also be responsible for manipulating the state
    // so here the parent component BookStore is hold the state, do deletion should be done in the parent component
    // so the child compoenent has to raise the event and let the parent compoennt know that the event has occured, 
    // so the parent component will handle the event
// }

  render() {
    console.log("props:", this.props);

    return (
      <React.Fragment>
        <tr key={this.props.data.id}>

          <td>{this.props.data.id}</td>
          <td>
            <img
              src={this.props.data.bookImageUrl}
              width="150px"
              height="100px"
              alt="Books"
            ></img>
          </td>
          <td>{this.props.data.bookTitle}</td>
          <td>{this.props.data.bookAuthor}</td>
          <td>{this.props.data.bookGenre}</td>
          <td>{this.props.data.bookCost}</td>
          {/* <td><button type="button" className="btn btn-danger btn-sm" onClick={handleDelete}>Delete</button></td> */}
          <td><button type="button" className="btn btn-danger btn-sm" onClick={() =>this.props.onDelete(this.props.data)}>Delete</button></td>

        </tr>
      </React.Fragment>
    );
  }
}

export default BookItem;
