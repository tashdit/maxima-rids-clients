import React from "react";
import "./Book.css"
import { Link } from "react-router-dom";

const Book = (props) => {

  const { _id, img, name, price, about } = props?.product || {}

  return (
    <div>
      <div className="card" style={{ width: '18rem' }}>
        <img className="card-img-top img" src={img} alt="Everything is ok, But i dont't know why img did't show" />
        <div className="card-body">
          <h5 className="card-title"> <span>Ride Name:</span> {name}</h5>
          <h5 className="card-title"> <span>Price:</span> {price}</h5>
          <p className="card-text">{about}</p>
          <Link to={`/OrderPlace/${_id}`}><a href="/" className="btn btn-primary">Go Purchss</a></Link>

        </div>
      </div>
    </div>
  );
};

export default Book;
