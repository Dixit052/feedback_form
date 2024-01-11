import React from "react";
import '../App.css';
import { useState } from "react";
import logo from '../images/abyz_logo.png'

function Feedback() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        rating:'',
        description: '',
    });

    // Function to handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
    };

    return (
        <>
            <div className="container">
                <a href="https://www.abhyaz.com/" > <img className="logo" src={logo} alt="logo"></img>  </a>
                <h2 style={{ margin: "-30px" }}>Feedback Form About internship </h2>
            </div>
            <div id="form"  >
                <form onSubmit={handleSubmit} style={{ padding: "10px" }}>
                    <h3>Name</h3>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />


                    <h3>Email</h3>

                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />

                    <h3>Rating</h3>
                    <select
                        name="rating"
                        value={formData.rating}
                        onChange={handleInputChange}
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>

                        {/* Add more options as needed */}
                    </select>

                    <h3>  Description</h3>

                    <textarea id="textarea"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                    />

                    <br />
                    <br />

                    <button  id="button" type="submit" >Submit</button>
                </form>

            </div>
        </>
    )

}

export default Feedback;