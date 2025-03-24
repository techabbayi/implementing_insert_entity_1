// src/components/Home.jsx

import React from "react";
import BookCard from "./components/BookCard";
import { Link } from "react-router-dom";
import books from "./booksData";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Book Library</h1>
      <Link to="/add-book">
        <button className="add-book-button">Add Book</button>
      </Link>
      <div className="books-grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;
