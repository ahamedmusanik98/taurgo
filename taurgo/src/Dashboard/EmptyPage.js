import React from "react";
import "./EmptyPage.css";

const EmptyPage = ({ title, goBack }) => {
    return (
        <div className="main-content">
            <header className="header">
                <h1>{title}</h1>
            </header>
            <p>This page is currently empty.</p>
            {/* Go Back button */}
            <button className="go-back-btn" onClick={goBack}>
                Go Back
            </button>
        </div>
    );
};

export default EmptyPage;
