import React, { Component } from 'react';

class BookStore extends Component {
  state = { 
    title: "Book Store",
    allBooks: [
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
    ]
   } 
  render() { 
    return (
      <div className="container m-5">
        <table className="table table-striped">
          <thead className='table-dark'> 
            <tr>
             <th>ID</th> 
             <th>IMAGE</th> 
             <th>TITLE</th> 
             <th>AUTHOR</th> 
             <th>GENRE</th> 
             <th>COST</th> 
             
            </tr>
          </thead>

          <tbody>
              {this.renderAllBooks()}
          </tbody>
        </table>
      </div>
    );
  }

  renderAllBooks(eachBook){
    return this.state.allBooks.map((eachBook)=>(
      <tr key={eachBook.id}>

      <td>{eachBook.id}</td>
      <td><img src={eachBook.bookImageUrl} width="150px" height="100px" alt='Books'></img></td>
      <td>{eachBook.bookTitle}</td>
      <td>{eachBook.bookAuthor}</td>
      <td>{eachBook.bookGenre}</td>
      <td>{eachBook.bookCost}</td>

      </tr>
    ))
  }
}
 
export default BookStore;