import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import "./OrderPlace.css"
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MyRides from '../MyRides/MyRides';

const OrderPlace = () => {
    const { bookId } = useParams()

    const [orderBooks, setOrderBooks] = useState([])
    const [singlnOrder, setSinglnOrder] = useState({})
    const [ride, setRide] = useState({})



    useEffect(() => {
        fetch('https://ghostly-vault-73275.herokuapp.com/rides')
            .then(res => res.json())
            .then(data => setOrderBooks(data))
    }, [])


    useEffect(() => {
        const orderName = orderBooks.find(order => order._id === bookId)
        setSinglnOrder(orderName);
    }, [orderBooks])

    const placeOrder = (singlnOrder) => {
        const rides = setSinglnOrder.find(p => p._id === singlnOrder._id)
        setRide(rides)
    }
    console.log(ride.name);
    return (
        <div>
            <Header></Header>
            <div className="detain-box">
                <img src={singlnOrder?.img} alt="" />
                <h2>Name: <span> {singlnOrder?.name}</span></h2>
                <h2>Price: <span> {singlnOrder?.price}</span></h2>
                <h4>Details: <span>{singlnOrder?.about}</span></h4>
                <button className="btn btn-warning" onClick={() => placeOrder(singlnOrder)} style={{ marginRight: "5px" }}>Buy Rides</button>
                <Link to="/home"><button className="btn btn-warning">Back to Home</button></Link>
            </div>

            {/* {ride.map(order => (<MyRides order={order}></MyRides>))} */}
            <Footer></Footer>
        </div>
    );
};

export default OrderPlace;