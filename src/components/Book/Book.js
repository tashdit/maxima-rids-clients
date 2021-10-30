import React from "react";
import "./Book.css"
import { Link } from "react-router-dom";

const Book = (props) => {

  const { _id, picture, name, price, about } = props?.product || {}

  return (
    <div>
      <div className="card" style={{ width: '18rem' }}>
        <img className="card-img-top img" src={picture} alt="" />
        <div className="card-body">
          <h5 className="card-title"> <span>Ride Name:</span> {name.slice(0, 10)}</h5>
          <h5 className="card-title"> <span>Price:</span> {price}</h5>
          <p className="card-text">{about.slice(0, 120)}</p>
          <Link to={`/OrderPlace/${_id}`}><a href="/" className="btn btn-primary">Go Purchss</a></Link>

        </div>
      </div>
    </div>
  );
};

export default Book;
