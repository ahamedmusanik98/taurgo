import React, { useState } from "react";
import "../Register as client/RegistrationSteps";

const Expertises = () => {
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



            {/* Registration Content */}
            <div className="registration-content">

                <h2 className="thank">Thank you for choosing to partner with Taurgo.</h2>
                <p>
                    To ensure a successful partnership, please follow the Taurgo
                    registration process:
                </p>

                <ol class="no-liststep">
                    <li>
                        Complete the Registration Form: <br />Please fill out the
                        required details on the Taurgo registration process. This
                        information is essential for our initial due diligence to ensure
                        you are placed within the correct team and area of Taurgo.
                    </li>
                    <br />
                    <li>
                        Onboarding with Taurgo: <br />After submitting the
                        registration form, a member of the Taurgo team will reach out to you
                        to complete the onboarding process. They will guide you through the
                        platform if required and ensure you are properly onboarded with the
                        right support and resources.
                    </li>
                    <br />
                    <li>
                        Verification and Placement:
                        <br />Taurgo will review the information provided during registration and complete the rinitiol due diligence. This will determine the appropriate team and crea within Taurgo for your partriership with the You com Smart Assistant
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
                            <strong>Photography
                            </strong>
                            <p>
                                Capture Media Packs of Properties As a Property Photographer for Taurgo, your primary<br />
                                responsibilities will be

                            </p>
                            <ul>
                                <li>Capture 360-Degree Imagery Use a 360-degree camera to obtain comprehensive, high-quality images of the properties we assign to you.
                                </li>
                                <li>Ensure the 360 photos capture all angles and details of the interior and exterior of the properties
                                </li>
                                <li>Smartphone-Based Photography Utilize your smartphone to take additional photos of the properties, focusing on specific details, angles, and features</li>
                                <li>Complement the 360-degree imagery with well-composed, high-resolution smartphone photos.
                                </li>
                                <li>Obtain Raw Floor Plans Using your smartphone, capture the raw floor plans of the properties
                                </li>
                                <li>Ensure the floor plan images are clear, accurate, and can be used to create detailed property media packs
                                </li>
                            </ul>
                            <p>
                                Your role is crucial in providing Tourgo with the necessary visual media and floor plans to create comprehensive property listings and marketing materials. Your attention to detail, technical skills, and ability to work efficiently will be key to the success of this project.

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
                            <strong>Inventory Clerk</strong>
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
                            <strong>Field Assessor</strong>
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
                            <strong>Rics Surveyor/valuer</strong>
                        </label>
                    </div>


                </div>




            </div>
        </div>
    );
};

export default Expertises;
