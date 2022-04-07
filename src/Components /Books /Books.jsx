import React from "react";
import {
  booksTitle,
  author,
  genre,
  price,
  addBooks,
} from "../Redux/Action";

import { useSelector, useDispatch } from "react-redux";
import "./Books.css";
import { Link } from "react-router-dom";

function Books() {
  const initialData = useSelector((state) => state);
  const dispatch = useDispatch();

  const changeHandler = (event) => {
    switch (event.target.name) {
    //   case "BOOK_ID":
    //     dispatch(booksId(event.target.value));
    //     break;
      case "BOOK_TITLE":
        dispatch(booksTitle(event.target.value));
        break;
      case "AUTHOR":
        dispatch(author(event.target.value));
        break;
      case "GENRE":
        dispatch(genre(event.target.value));
        break;
      case "PRICE":
        dispatch(price(event.target.value));
        break;
      default:
        break;
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // const newBooks = {
    //   bookId: initialData.bookData.length + 1,
    //   title: initialData.title,
    //   author: initialData.author,
    //   genre: initialData.genre,
    //   price: initialData.price,
    // };
    // dispatch(addBooks(newBooks));
  };

  return (
    <div>
      <form className="books-container" onSubmit={submitHandler}>
        <div className="title">
        <h1 > Books App</h1>
        </div>
        <div className="card">
            <div>
          <label className="label">BOOK TITLE</label>
          <input
            type="text"
            className="input"
            name="BOOK_TITLE"
            value={initialData.title}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label className="label">AUTHOR</label>
          <input
            type="text"
            className="input"
            name="AUTHOR"
            value={initialData.author}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label className="label">GENRE</label>
          <input
            type="text"
            className="input"
            name="GENRE"
            value={initialData.genre}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label className="label">PRICE</label>
          <input
            type="text"
            className="input"
            name="PRICE"
            value={initialData.price}
            onChange={changeHandler}
          />
        </div>
        <Link to="/books" >
        <button className="button"  onClick={() => dispatch(addBooks(
            {
                bookId: initialData.bookData.length + 1,
                title: initialData.title,
                author: initialData.author,
                genre: initialData.genre,
                price: initialData.price,
            }
        ))}>CREATE</button>
        </Link>
        </div>
      </form>
    </div>
  );
}

export default Books;
