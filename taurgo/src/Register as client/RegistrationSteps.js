import React, { useState } from "react";
import "./RegistrationSteps.css"; 

const RegistrationSteps = () => {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleOptionClick = (option) => {
        if (selectedOptions.includes(option)) {
            // If the option is already selected, remove it
            setSelectedOptions(selectedOptions.filter((o) => o !== option));
        } else {
            // Otherwise, add it to the selection
            setSelectedOptions([...selectedOptions, option]);
        }
    };

    return (
        <div className="registration-steps">

            <div className="steps-header">
                <ul className="steps-list">
                    <li className="step active"><span className="numBtnstep">1</span>
                        Select your expertise</li>
                    <li className="step"><span className="numBtn2">2</span> Client Details</li>
                    <li className="step"><span className="numBtn2">3</span> Company address</li>
                    <li className="step"><span className="numBtn2">4</span> Fit to work</li>
                    <li className="step"><span className="numBtn2">5</span> Onboarding Form Complete</li>
                </ul>
            </div>

            <br /><br />
            {/* Registration Content */}
            <div className="registration-content">

                <h2 className="thank">Thank you for choosing to partner with Taurgo.</h2>
                <p>
                    To ensure a successful partnership, please follow the Taurgo
                    registration process:
                </p>

                <ol class="no-liststep">
                    <li>
                        <strong>Complete the Registration Form:</strong> Please fill out the
                        required details on the Taurgo registration process. This
                        information is essential for our initial due diligence to ensure
                        you are placed within the correct team and area of Taurgo.
                    </li>
                    <br/>
                    <li>
                        <strong>Onboarding with Taurgo:</strong> After submitting the
                        registration form, a member of the Taurgo team will reach out to you
                        to complete the onboarding process. They will guide you through the
                        platform if required and ensure you are properly onboarded with the
                        right support and resources.
                    </li>
                </ol>

                {/* Business Size Selection */}
                <h3>Select your size of business</h3>
                <div className="business-options1">
                    <div
                        className={`business-optionstep ${selectedOptions.includes("Individual Agency") ? "selected" : ""
                            }`}
                        onClick={() => handleOptionClick("Individual Agency")}
                    >
                        <input
                            type="checkbox"
                            id="individual-agency"
                            name="business-size"
                            checked={selectedOptions.includes("Individual Agency")}
                            readOnly
                        />
                        <label htmlFor="individual-agency">
                            <strong>Individual Agency</strong>
                            <p>
                                This option is for solo estate agents or realtors operating
                                independently. Individuals often manage a limited portfolio of
                                properties and require tailored services to support their
                                specific needs in property marketing, inspections, and
                                valuations.
                            </p>
                        </label>
                    </div>

                    <div
                        className={`business-optionstep ${selectedOptions.includes("Corporate Account") ? "selected" : ""
                            }`}
                        onClick={() => handleOptionClick("Corporate Account")}
                    >
                        <input
                            type="checkbox"
                            id="corporate-account"
                            name="business-size"
                            checked={selectedOptions.includes("Corporate Account")}
                            readOnly
                        />
                        <label htmlFor="corporate-account">
                            <strong>Corporate Account</strong>
                        </label>
                    </div>

                    <div
                        className={`business-optionstep ${selectedOptions.includes("Medium Enterprise") ? "selected" : ""
                            }`}
                        onClick={() => handleOptionClick("Medium Enterprise")}
                    >
                        <input
                            type="checkbox"
                            id="medium-enterprise"
                            name="business-size"
                            checked={selectedOptions.includes("Medium Enterprise")}
                            readOnly
                        />
                        <label htmlFor="medium-enterprise">
                            <strong>Medium Enterprise</strong>
                        </label>
                    </div>
                </div>

                {/* Next Button */}
                <div className="actionsstep">
                    <button className="next-buttonstep">Next</button>
                </div>
            </div>
        </div>
    );
};

export default RegistrationSteps;
