import React, { useState } from 'react';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Remember:', remember);
    };

    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <form onSubmit={handleLogin} style={{ width: '300px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                        <img src="logo.png" alt="Taurgo Logo" style={{ marginBottom: '10px' }} />
                        <h2>Log in</h2>
                        <p>Welcome back!</p>
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            style={{ width: '100%', padding: '10px', marginTop: '5px' }}
                            required
                        />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            style={{ width: '100%', padding: '10px', marginTop: '5px' }}
                            required
                        />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label>
                            <input
                                type="checkbox"
                                checked={remember}
                                onChange={(e) => setRemember(e.target.checked)}
                            />
                            Remember for 30 days
                        </label>
                    </div>
                    <div style={{ marginBottom: '15px', textAlign: 'right' }}>
                        <a href="/forgot-password">Forgot password</a>
                    </div>
                    <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#004d40', color: '#fff', border: 'none', borderRadius: '5px' }}>
                        Sign in
                    </button>
                    <div style={{ marginTop: '15px', textAlign: 'center' }}>
                        <p>Don't have an account? <a href="/register">Register</a></p>
                    </div>
                </form>
            </div>
            <div style={{ flex: 1, backgroundImage: 'url(houses.jpg)', backgroundSize: 'cover' }}></div>
        </div>
    );
};

export default LoginPage;
