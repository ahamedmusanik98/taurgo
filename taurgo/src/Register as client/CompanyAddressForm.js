import React, { useState } from 'react';
import './form.css';

const CompanyAddressForm = () => {
    const [postcode, setPostcode] = useState('');
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [city, setCity] = useState('');
    const [county, setCounty] = useState('');
    const [country, setCountry] = useState('');
    const [logo, setLogo] = useState(null);

    const handleFileUpload = (e) => {
        setLogo(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
    };

    return (
        <div className="form-containerCom">
            {/* Progress Bar */}
            <div className="progress-barCom">
                <div className="progress-bar-fillCom" style={{ width: '50%' }}></div>
            </div>
            <form className="company-address-form" onSubmit={handleSubmit}>
                <h2>Step 1/2</h2>
                <h3>Company address</h3>
                <div className="form-rowCom">
                    <div className="form-groupCom">
                        <label>Postcode</label>
                        <div className="input-with-buttonCom">
                            <input
                                type="text"
                                value={postcode}
                                onChange={(e) => setPostcode(e.target.value)}
                                placeholder="Search postcode"
                            />
                            <button type="button" className="search-buttonCom">
                                🔍
                            </button>
                        </div>
                    </div>
                    <div className="form-groupCom">
                        <label>Address Line 1</label>
                        <input
                            type="text"
                            value={address1}
                            onChange={(e) => setAddress1(e.target.value)}
                            placeholder="Address 1"
                        />
                    </div>
                </div>
                <div className="form-rowCom">
                    <div className="form-groupCom">
                        <label>Address Line 2</label>
                        <input
                            type="text"
                            value={address2}
                            onChange={(e) => setAddress2(e.target.value)}
                            placeholder="Address 2"
                        />
                    </div>
                    <div className="form-groupCom">
                        <label>Town/City</label>
                        <input
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            placeholder="City"
                        />
                    </div>
                </div>
                <div className="form-rowCom">
                    <div className="form-groupCom">
                        <label>County</label>
                        <input
                            type="text"
                            value={county}
                            onChange={(e) => setCounty(e.target.value)}
                            placeholder="County"
                        />
                    </div>
                    <div className="form-groupCom">
                        <label>Country</label>
                        <input
                            type="text"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            placeholder="Country"
                        />
                    </div>
                </div>
                <div className="form-groupCom">
                    <label>Upload company logo here</label>
                    <input type="file" accept=".png" onChange={handleFileUpload} />
                    <small className="tooltip">
                        This will be used to brand all our projects with. Upload logo in (.png) format.
                    </small>
                </div>
                <div className="form-buttonsCom">
                    <button type="button" className="back-buttonCom">
                        Go Back
                    </button>
                    <button type="submit" className="next-buttonCom">
                        Next
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CompanyAddressForm;
