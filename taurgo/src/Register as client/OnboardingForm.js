import React from "react";
import "./OnboardingForm.css"; // Import the CSS file

const OnboardingForm = () => {
    return (
        <div className="container">
            <h2 className="heading">Onboarding Form Complete</h2>
            <p className="text">
                Our compliance team will review the provided information to ensure we
                have the necessary documentation.
            </p>
            <p className="text">
                If you have any question, feel free to get in touch by emailing{" "}
                <a href="mailto:booking@taurgo.co.uk" className="link">
                    booking@taurgo.co.uk
                </a>
            </p>
            <h3 className="subHeading">Confirm Your Registration</h3>
            <p className="text">
                After pressing "Finish" your registration form, you will receive a
                confirmation email. Please check your inbox (and spam folder) for this
                confirmation.
            </p>
            <button className="buttonon">Finish</button>
        </div>
    );
};

export default OnboardingForm;
