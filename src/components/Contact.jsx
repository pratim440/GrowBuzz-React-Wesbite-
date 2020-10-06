import React, { useState } from 'react';

const Contact = () => {
    const [formDetails, setFormDetails] = useState({
        name: "",
        phn: "",
        email: "",
        msg: ""
    });
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormDetails((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }
    const handleSubmit = (event) => {
        alert(`Hey! My name is ${formDetails.name} and my number is ${formDetails.phn}. You may also contact me by using my Emaid Id: ${formDetails.email}. And my message to you is ${formDetails.msg}`)
        event.preventDefault();
    }
    return (
        <div className='container-fluid'>
            <div id='form_container'>
                <h1>Contact US</h1>
                <form id='form' onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label for="formGroupExampleInput">Full Name</label>
                        <input name="name" onChange={handleChange} value={formDetails.name} type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter your name"/>
                    </div>
                    <div className="form-group">
                        <label for="formGroupExampleInput">Phone</label>
                        <input name="phn" onChange={handleChange} value={formDetails.phn} type="number" className="form-control" id="formGroupExampleInput" placeholder="Mobile number"/>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlInput1">Email address</label>
                        <input name="email" onChange={handleChange} value={formDetails.email} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div className="form-group">
                    <label for="exampleFormControlTextarea1">Message</label>
                        <textarea name="msg" onChange={handleChange} value={formDetails.msg} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type='submit' id='form_btn' className="btn btn-outline-primary">Submit form</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;