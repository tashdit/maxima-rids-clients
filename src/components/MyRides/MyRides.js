import React from 'react';
import Header from '../Header/Header';

const MyRides = (props) => {
    const { name } = props.order || {}
    return (
        <div>
            <Header></Header>
            <div>
                <h4 className="product-name">{name}</h4>
                <p>Price: </p>
                <p>Quantity:</p>
                <button className="btn-regular">Remove</button>
            </div>
        </div>
    );
};

export default MyRides;