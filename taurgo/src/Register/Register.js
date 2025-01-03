import React, { useState } from 'react';
import './Register.css';

const Register = () => {
    const [form, setForm] = useState({
        organisation: '',
        email: '',
        password: '',
        repeatPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div className="container">
            <div className="form-container">
                <img src="logo.png" alt="TAURGO" className="logo" />
                <div className="button-group">
                    <button className="btn client">Register as Client</button>
                    <button className="btn partner">Register as Partner</button>
                </div>
                <h2>Create your account</h2>
                <form onSubmit={handleSubmit}>
                    <label>Organisation Reference</label>
                    <input
                        type="text"
                        name="organisation"
                        value={form.organisation}
                        onChange={handleChange}
                        placeholder="Organisation name"
                    />
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                    />
                    <label>Repeat Password</label>
                    <input
                        type="password"
                        name="repeatPassword"
                        value={form.repeatPassword}
                        onChange={handleChange}
                    />
                    <button type="submit" className="btn register">Register</button>
                </form>
                <p>
                    I have an Account? <a href="/login">Login</a>
                </p>
            </div>
            <div className="image-container">
                <img src="../houses.jpg" alt="Houses" />
            </div>
        </div>
    );
};

export default Register;
