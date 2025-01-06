import React from "react";
import "./ThankYouPage.css";
import image from "./taurgo-logo.png";
import thank from "./thank.png";

const ThankYouPage = () => {
    return (
        <div className="thank-you-page">
            {/* Logo Section */}
            <div className="logo-container">
                <img src={image} alt="Tauro Logo" className="logo" />
            </div>

            {/* Thank You Message */}
            <div className="message">
                <p className="title">Thank You!</p>
                <p className="subtitle">
                    We appreciate your time and effort. Your submission has been received successfully.
                </p>
            </div>

            {/* Decorative Checkmark */}
            <div className="checkmark-container">
                <div className="checkmark">
                    <i className="bi bi-check-lg"></i>
                    <img src={thank} alt="Tauro Logo" className="logo" />
                </div>
            </div>

            {/* OK Button */}
            <button className="ok-button" onClick={() => alert("Thank you for visiting!")}>
                OK
            </button>
        </div>
    );
};

export default ThankYouPage;
