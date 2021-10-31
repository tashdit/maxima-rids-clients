import React from 'react';
import "./AddService.css"
import Header from '../Header/Header';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const AddService = () => {
    const { register, handleSubmit, reset
    } = useForm();
    const onSubmit = data => {
        console.log(data);
        // http://localhost:5000/rides
        axios.post('https://ghostly-vault-73275.herokuapp.com/rides', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added Succesfully')
                    reset()
                }


            })
    }
    return (
        <div>
            <Header></Header>
            <h2>Add Servicess</h2>
            <div className="add-services">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                    <textarea {...register("description")} placeholder="Description" />
                    < input type="number" {...register("price")} placeholder="Price" />
                    < input {...register("img")} placeholder="img" />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddService;