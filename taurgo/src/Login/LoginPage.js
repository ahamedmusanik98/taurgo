import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Remember:', remember);
    };

    return (
        <>
            <div className="login-container">
                <div className="login-form">
                    <img src="logo.png" alt="Taurgo Logo" className="logo" />
                    <h2>Log in</h2>
                    <p>Welcome back!</p>
                    <form onSubmit={handleLogin}>
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                        <div className="remember-forgot">
                            <label>
                                <input
                                    type="checkbox"
                                    checked={remember}
                                    onChange={(e) => setRemember(e.target.checked)}
                                />
                                Remember for 30 days
                            </label>
                            <a href="/forgot-password">Forgot password</a>
                        </div>
                        <button type="submit" className="sign-in-button">Sign in</button>
                    </form>
                    <p className="register-link">
                        Don't have an account? <button onClick={() => navigate('/register')}>Register</button>
                    </p>
                </div>
                <div>

                </div>
            </div>
            {/* <div className="image-container">
                <img src="../houses.jpg" alt="Houses" />
            </div> */}
        </>

    );
};

export default LoginPage;
