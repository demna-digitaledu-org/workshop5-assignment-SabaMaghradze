import { useState } from "react";
import axios from 'axios';


let base = 'http://localhost:3001/';

const validate = (values) => {
    const errors = {};
    if (values.firstName.length < 4) {
        errors.firstName = "Name requires at list 4 characters";
    };

    if (values.lastName.length < 4) {
        errors.lastname = "Last Name is requires at list 4 characters";
    };

    if (!values.email) {
        errors.email = "Email is required!";
    };

    if (!values.email.includes("@")) {
        errors.email = "This Email is not valid";
    };

    if (values.age < 18) {
        errors.age = "User has to be over 18";
    };

    if (!values.sex) {
        errors.sex = 'Must provide gender';
    };

    if (values.sex !== 'Male' || values.sex !== 'Female') {
        errors.sex = 'Invalid gender type';
    };

    return errors;

};

function Form() {

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        sex: '',
        age: ''
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    async function handleSubmit(e) {
        e.preventDefault();
        console.log(validate(user));
        const res = await axios.post(`${base}users`, user);
    };

    return (
        <div className='container'>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name='firstName' placeholder='Name' onChange={handleChange} />
                <input type="text" name='lastName' placeholder='Lastname' onChange={handleChange} />
                <input type="text" name='email' placeholder='Email' onChange={handleChange} />
                <input type="text" name='sex' placeholder='Gender' onChange={handleChange} />
                <input type="text" name='age' placeholder='Age' onChange={handleChange} />
                <button>Submit</button>
            </form>
        </div>
    )
};

export default Form;
