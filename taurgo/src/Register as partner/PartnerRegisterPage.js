import React from "react";
import "./PartnerRegister.css";
import { useNavigate } from "react-router-dom";
import partnerLogoImage from '../taurgo-logo.png';
import partnerPartnerLogo from '../Rics.jpeg';

const PartnerRegisterPage = () => {

    const navigate = useNavigate();

    const handleRegisterPartnerStepsNavigation = () => {
        navigate("/RegisterPartnerSteps");
    };
    
    const handleRegisterNavigation = () => {
        navigate("/Register");
    };


    return (
        <div className="partner-register-container">
            <div className="partner-register-form">
                <div className="partner-logo">
                    <img src={partnerLogoImage} alt="Taurgo Logo" className="partner-logo-image" />
                </div>
                <div className="partner-button-group">
                    <button onClick={handleRegisterNavigation} className="partner-btn partner-btn-client">Register as Client</button>
                    <button className="partner-btn partner-btn-partner">Register as Partner</button>
                </div>
                <h2>Create Your Account</h2>
                <form>
                    <label htmlFor="partner-org-reference" className="partner-input-label">Full Name</label>
                    <input type="text" id="partner-org-reference" className="partner-input-field" placeholder="Organisation name" />
                    <label htmlFor="partner-email" className="partner-input-label">Email</label>
                    <input type="email" id="partner-email" className="partner-input-field" placeholder="Enter your email" />
                    <label htmlFor="partner-password" className="partner-input-label">Password</label>
                    <input type="password" id="partner-password" className="partner-input-field" placeholder="Enter your password" />
                    <label htmlFor="partner-repeat-password" className="partner-input-label">Repeat Password</label>
                    <input type="password" id="partner-repeat-password" className="partner-input-field" placeholder="Repeat your password" />
                    <button type="submit" onClick={handleRegisterPartnerStepsNavigation} className="partner-btn partner-btn-register">Register</button>
                </form>
                <p className="partner-login-prompt">
                    Already have an account?{" "}
                    <a href="/login" className="partner-login-link">Log in</a>
                </p>
                <div className="partner-footer">
                    <p>© Taurgo</p>
                    <img src={partnerPartnerLogo} alt="Partner Logo" className="partner-partner-logo" />
                </div>
            </div>
            <div className="partner-image-container">
                {/* Add an image or background here if required */}
            </div>
        </div>
    );
};

export default PartnerRegisterPage;
