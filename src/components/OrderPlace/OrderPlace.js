import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import "./OrderPlace.css"
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const OrderPlace = () => {
    const { bookId } = useParams()

    const [orderBooks, setOrderBooks] = useState([])
    const [singleOrder, setSingleOrder] = useState({})

    useEffect(() => {
        fetch('/orderBooks.json')
            .then(res => res.json())
            .then(data => setOrderBooks(data.books))
    }, [])

    useEffect(() => {
        const orderName = orderBooks.find(order => order._id === bookId)
        setSingleOrder(orderName);
        console.log(orderName);
    }, [orderBooks])
    return (
        <div>
            <Header></Header>
            {bookId}
            <div className="detain-box">
                <img src={singleOrder?.picture} alt="" />
                <h2>Name: <span> {singleOrder?.name}</span></h2>
                <h3>Details {singleOrder?.about}</h3>
                <Link to="/home"><button className="btn btn-warning">Back to Home</button></Link>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default OrderPlace;