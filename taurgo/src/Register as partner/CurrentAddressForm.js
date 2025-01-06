import React from "react";
import "./CurrentAddressForm.css";

const CurrentAddressForm = () => {
    return (
        <div className="unique-address-form">
            <h2 className="unique-address-form-title">Current Address</h2>
            <p className="unique-address-form-description">
                We are required to collect a five-year address history. Please start with your current address.
            </p>
            <form className="unique-address-form-fields">
                <div className="unique-address-row">
                    <div className="unique-input-group">
                        <label htmlFor="postcode" className="unique-label">Postcode</label>
                        <div className="unique-postcode-wrapper">
                            <input
                                type="text"
                                id="postcode"
                                className="unique-input"
                                placeholder="Search postcode"
                            />
                            <button type="button" className="unique-postcode-search">
                                <i className="unique-search-icon">🔍</i>
                            </button>
                        </div>
                    </div>
                    <div className="unique-input-group">
                        <label htmlFor="address-line-1" className="unique-label">Address Line 1</label>
                        <input
                            type="text"
                            id="address-line-1"
                            className="unique-input"
                            placeholder="Address 1"
                        />
                    </div>
                </div>
                <div className="unique-address-row">
                    <div className="unique-input-group">
                        <label htmlFor="address-line-2" className="unique-label">Address Line 2</label>
                        <input
                            type="text"
                            id="address-line-2"
                            className="unique-input"
                            placeholder="Address 2"
                        />
                    </div>
                    <div className="unique-input-group">
                        <label htmlFor="town-city" className="unique-label">Town/ City</label>
                        <input
                            type="text"
                            id="town-city"
                            className="unique-input"
                            placeholder="City"
                        />
                    </div>
                </div>
                <div className="unique-address-row">
                    <div className="unique-input-group">
                        <label htmlFor="county" className="unique-label">County</label>
                        <input
                            type="text"
                            id="county"
                            className="unique-input"
                            placeholder="County"
                        />
                    </div>
                    <div className="unique-input-group">
                        <label htmlFor="country" className="unique-label">Country</label>
                        <select id="country" className="unique-input">
                            <option value="">Select Country</option>
                            <option value="uk">United Kingdom</option>
                            <option value="us">United States</option>
                            <option value="canada">Canada</option>
                        </select>
                    </div>
                </div>
                <div className="unique-address-row">
                    <div className="unique-input-group">
                        <label htmlFor="date-moved-in" className="unique-label">Date Moved In</label>
                        <input
                            type="date"
                            id="date-moved-in"
                            className="unique-input"
                        />
                    </div>
                    <div className="unique-input-group">
                        <label htmlFor="proof-of-address" className="unique-label">Proof of Address</label>
                        <div className="unique-file-upload">
                            <input type="file" id="proof-of-address" className="unique-file-input" />
                            <label htmlFor="proof-of-address" className="unique-file-label">
                                Upload proof of Address
                            </label>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CurrentAddressForm;
