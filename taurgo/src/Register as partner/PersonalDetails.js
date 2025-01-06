import React from "react";
import "./PersonalDetails.css";

const PersonalDetails = () => {
    return (
        <div className="personal-container">
            <h4>Personal Details</h4>
            <form className="personal-form">
                <div className="personal-form-row">
                    <div className="personal-input-group">
                        <label className="personal-label">
                            First Name <span>*</span>
                        </label>
                        <input type="text" placeholder="First name" className="personal-input" />
                    </div>
                    <div className="personal-input-group">
                        <label className="personal-label">
                            Last Name <span>*</span>
                        </label>
                        <input type="text" placeholder="Last name" className="personal-input" />
                    </div>
                </div>

                <div className="personal-form-row">
                    <div className="personal-input-group">
                        <label className="personal-label">Title</label>
                        <select className="personal-select">
                            <option value="">Title</option>
                            <option value="Mr">Mr</option>
                            <option value="Ms">Ms</option>
                            <option value="Mrs">Mrs</option>
                            <option value="Dr">Dr</option>
                        </select>
                    </div>
                    <div className="personal-input-group">
                        <label className="personal-label">
                            Date of Birth <span>*</span>
                        </label>
                        <input type="date" className="personal-input" />
                    </div>
                </div>

                <div className="personal-form-row">
                    <div className="personal-input-group">
                        <label className="personal-label">
                            Gender <span>*</span>
                        </label>
                        <select className="personal-select">
                            <option value="">Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="personal-input-group">
                        <label className="personal-label">
                            Email <span>*</span>
                        </label>
                        <input type="email" placeholder="hello@email.com" className="personal-input" />
                    </div>
                </div>

                <div>
                    <label className="personal-label">
                        Phone <span>*</span>
                    </label>
                    <input type="text" placeholder="Add your phone number" className="personal-input" />
                </div>

                <div>
                    <label className="personal-label">
                        Proof of Identity <span>*</span>
                    </label>
                    <input type="file" className="personal-input-file" />
                    <p className="personal-help-text">
                        Please provide a clear picture of an official ID, such as a Driver's Licence or Passport.
                    </p>
                </div>
            </form>
        </div>
    );
};

export default PersonalDetails;
