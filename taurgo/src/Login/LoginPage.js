import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import logoImage from '../taurgo-logo.png';
import partnerLogo from '../Rics.jpeg';

const LoginPage = () => {
    const navigate = useNavigate();

    // Navigate to the registration page
    const handleRegisterNavigation = () => {
        navigate("/register");
    };


    const handleDashboardNavigation = () => {
        navigate("/dashboard");
    };

    return (
        <div className="login-container">
            {/* Login form section */}
            <div className="login-form">
                <div className="logo">
                    <img src={logoImage} alt="Taurgo Logo" className="logo-image" />
                </div>
                <h2>Welcome Back!</h2>
                <p className="subtitle">Log in to your account</p>

                <form>
                    {/* Email input field */}
                    <label htmlFor="email" className="input-label">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="input-field"
                        placeholder="Enter your email"
                    />

                    {/* Password input field */}
                    <label htmlFor="password" className="input-label">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="input-field"
                        placeholder="Enter your password"
                    />

                    {/* Options: Remember me & Forgot password */}
                    <div className="options">
                        <label className="checkbox-container">
                            <input type="checkbox" className="checkbox" />
                            Remember for 30 days
                        </label>
                        <a href="/forgot-password" className="forgot-password-link">
                            Forgot password?
                        </a>
                    </div>

                    {/* Sign in button */}
                    <button onClick={handleDashboardNavigation}type="submit" className="btn">
                        Sign in
                    </button>
                </form>

                {/* Navigation to registration */}
                <p className="register-prompt">
                    Don’t have an account?{" "}
                    <span onClick={handleRegisterNavigation} className="register-link">
                        Register
                    </span>
                </p>
                <div className="footer">
                    <p>© Taurgo</p>
                    <img src={partnerLogo} alt="Partner Logo" className="partner-logo" />
                </div>

            </div>
          

            {/* Placeholder for an optional image section */}
            <div className="image-section">
                {/* You can add an illustration, background, or marketing content here */}
            </div>
        </div>
    );
};

export default LoginPage;
