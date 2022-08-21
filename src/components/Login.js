import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [allEntry, setEntry] = useState([]);
    const navigate = useNavigate();
    const submitForm = (e) => {
        e.preventDefault();
        const newEntry = { email: email, password: password };

        setEntry([...allEntry, newEntry]);
        if (newEntry.email === "Pranjal" && newEntry.password === "1234") {
            alert('success');
            navigate("/home");
        }
        else {
            alert('failed');
        }
        setEmail(" ");
        setPassword(null);
    }

    return (
        <div className='LoginContainer container d-flex flex-column align-items-center justify-content-center h-100'>
            <h1 className='mb-4'>Login Details</h1>
            <form action="" onSubmit={submitForm}>
                <div className='row'>
                    <label htmlFor="email" className='col-6'>Email</label>
                    <input className='col-6' type="text" name="" id="" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='row mt-4'>
                    <label htmlFor="password" className='col-6'>Password</label>
                    <input className='col-6' type="password" name="" id="" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className='row'>
                <button className='col-12 mt-4 btn btn-primary text-center' type="submit">Login</button>
                </div>
                
            </form>
        </div>
    )
}
