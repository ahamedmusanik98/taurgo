import React from "react";
import { useNavigate } from "react-router-dom";
import "../Register as client/OnboardingForm.css";

const OnboardingFormPartner = () => {


    const navigate = useNavigate();

    const handleThankYouPageNavigation = () => {
        navigate("/ThankYouPage");
    };

    return (
        <div className="container">
            <h2 className="heading">Onboarding Form Complete</h2>
            <p className="text">
                Dylan, thank you for completing your onboarding form. We will now review the information and let you know if there's anything else we need.

            </p>
            {/* <p className="text">
                If you have any question, feel free to get in touch by emailing{" "}
                <a href="mailto:booking@taurgo.co.uk" className="link">
                    booking@taurgo.co.uk
                </a>
            </p> */}
            <h3 className="subHeading">What happens next?
            </h3>
            <p className="text">
                Thank you for registering to partner with Tourgol We are thrilled to have you on board and look forward to a successful collaboration. After submitting your registration, here's what you can expect confirmation Email You will receive a confirmation email shortly, acknowledging your registration. This email will outline the next steps in the partnership process

                <br />    <br />      Review Process <br />   <br />

                Our team will review your application to ensure a great fit. This process typically tokes 3-5 business days. If we require any additional information, we will reach out to you via email

                <br />  <br />   Partnership Agreement <br />   <br />

                Once your application is approved, we will send you a partnership agreement for your review and signature. This document will detail the terms and conditions of our partnership

                <br />   <br />  Onboarding <br />   <br />

                After the agreement is signed, you'll receive onboarding materials and resources to help you get started. We will also schedule an orientation session to walk you through our processes and answer any questions you may have Should you have any questions in the meantime, please feel free to contact us. We are excited to start this journey together and are here to support you every step of the way!

            </p>
            <button className="buttonon" onClick={handleThankYouPageNavigation}>Finish</button>
        </div>
    );
};

export default OnboardingFormPartner;
