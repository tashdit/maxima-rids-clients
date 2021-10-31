import React from "react";
import "./Books.css"
import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/rides")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      });
  }, []);
  return (
    <div>
      <div className="books-main">
        <div className="container">
          <div className="section-title">
            <h2>Best Rigs</h2>
            <p> Enjoy Our All Rides</p>
          </div>
          <div className="row">
            <div className="books">
              {books.map((product) => (
                <Book product={product}></Book>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
