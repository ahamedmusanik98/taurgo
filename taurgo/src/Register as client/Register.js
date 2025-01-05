import React from "react";
import "./Register.css";
import logoImage from '../taurgo-logo.png';
import partnerLogo from '../Rics.jpeg';

const RegisterPage = () => {
    return (
        <div className="register-container">
            {/* Registration Form Section */}
            <div className="register-form">
                <div className="logo">
                    <img src={logoImage} alt="Taurgo Logo" className="logo-image" />
                </div>

                {/* Registration Buttons */}
                <div className="button-group">
                    <button className="btn btn-client">Register as Client</button>
                    <button className="btn btn-partner">Register as Partner</button>
                </div>

                <h2>Create Your Account</h2>

                <form>
                    {/* Organisation Reference */}
                    <label htmlFor="org-reference" className="input-label">
                        Organisation Reference
                    </label>
                    <input
                        type="text"
                        id="org-reference"
                        className="input-field"
                        placeholder="Organisation name"
                    />

                    {/* Email */}
                    <label htmlFor="email" className="input-label">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="input-field"
                        placeholder="Enter your email"
                    />

                    {/* Password */}
                    <label htmlFor="password" className="input-label">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="input-field"
                        placeholder="Enter your password"
                    />

                    {/* Repeat Password */}
                    <label htmlFor="repeat-password" className="input-label">
                        Repeat Password
                    </label>
                    <input
                        type="password"
                        id="repeat-password"
                        className="input-field"
                        placeholder="Repeat your password"
                    />

                    {/* Submit Button */}
                    <button type="submit" className="btn btn-register">
                        Register
                    </button>
                </form>

                {/* Navigation to Login */}
                <p className="login-prompt">
                    Already have an account?{" "}
                    <a href="/login" className="login-link">
                        Log in
                    </a>
                </p>

                {/* Footer Section */}
                <div className="footer">
                    <p>© Taurgo</p>
                    <img src={partnerLogo} alt="Partner Logo" className="partner-logo" />
                </div>
            </div>

            {/* Optional Image or Background Section */}
            <div className="image-container">
                {/* Add an image or background here if required */}
            </div>
        </div>
    );
};

export default RegisterPage;
