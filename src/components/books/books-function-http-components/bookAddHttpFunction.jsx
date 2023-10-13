import React, { useState } from "react";

function BookAddHttpFunction() {

  const [title, setTitle] = useState("ADD NEW BOOK");
  const [newBook, setNewBook] = useState(
    {
      id: 0,
      bookTitle: '',
      bookAuthor: '',
      bookGenre: '',
      bookCost: '',
      bookImageUrl: ''
    }
  );

  const handleSubmit = ((event)=>{
    event.preventDefault(); // this will stop the form submission/request to the server
    console.log(newBook); 
     // this form data which is available in the newBook state variable should be sent to back end

    // navigate to book-store-function
  })


  return (
    <div className="container m-5">
      <form onSubmit={handleSubmit}>
        <div className="card">
          <div className="card-header bg-success text-white">
            <h2>{title}</h2>
          </div>
          <div className="card-body">

            <div>
              <label htmlFor="idBookTitle" className="form-label">
                Book Title
              </label>
              <input
                type="text"
                id="idBookTitle"
                className="form-control"
                onChange={(event)=>setNewBook({...newBook, bookTitle: event.target.value})}
              ></input>
            </div>

            <div>
              <label htmlFor="idBookAuthor" className="form-label">
                Book Author
              </label>
              <input
                type="text"
                id="idBookAuthor"
                className="form-control"
                onChange={(event)=>setNewBook({...newBook, bookAuthor: event.target.value})}
              ></input>
            </div>

            <div>
              <label htmlFor="idBookGenre" className="form-label">
                Book Genre
              </label>
              <select id="idBookGenre" className="form-control"
              onChange={(event)=>setNewBook({...newBook, bookGenre: event.target.value})}>
                <option value="Comedy">Comedy</option>
                <option value="Fiction">Fiction</option>
                <option value="Biography">Biography</option>
              </select>
            </div>

            <div>
              <label htmlFor="idBookCost" className="form-label">
                Book Cost:
              </label>
              <input
                type="text"
                id="idBookCost"
                className="form-control"
                onChange={(event)=>setNewBook({...newBook, bookCost: event.target.value})}
              ></input>
            </div>

            <div>
              <label htmlFor="idBookImageUrl" className="form-label">
                Book Image Url:
              </label>
              <input
                type="text"
                id="idBookImageUrl"
                className="form-control"
                onChange={(event)=>setNewBook({...newBook, bookImageUrl: event.target.value})}
              ></input>
            </div>
          </div>

          <div className="card-footer bg-success">
            <button type="submit" className="btn btn-light text-success">
              ADD
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default BookAddHttpFunction;
