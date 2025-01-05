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
        console.log({
            postcode,
            address1,
            address2,
            city,
            county,
            country,
            logo,
        });
    };

    return (
        <div className="form-container">
            <form className="company-address-form" onSubmit={handleSubmit}>
                <h3>Company address</h3>
                <div className="form-row">
                    <div className="form-group">
                        <label>Postcode</label>
                        <div className="input-with-button">
                            <input
                                type="text"
                                value={postcode}
                                onChange={(e) => setPostcode(e.target.value)}
                                placeholder="Search postcode"
                            />
                            <button type="button" className="search-button">🔍</button>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Address Line 1</label>
                        <input
                            type="text"
                            value={address1}
                            onChange={(e) => setAddress1(e.target.value)}
                            placeholder="Address 1"
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label>Address Line 2</label>
                        <input
                            type="text"
                            value={address2}
                            onChange={(e) => setAddress2(e.target.value)}
                            placeholder="Address 2"
                        />
                    </div>
                    <div className="form-group">
                        <label>Town/City</label>
                        <input
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            placeholder="City"
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label>County</label>
                        <input
                            type="text"
                            value={county}
                            onChange={(e) => setCounty(e.target.value)}
                            placeholder="County"
                        />
                    </div>
                    <div className="form-group">
                        <label>Country</label>
                        <input
                            type="text"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            placeholder="Country"
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label>Upload company logo here</label>
                    <input type="file" accept=".png" onChange={handleFileUpload} />
                    <small>This will be used to brand all our projects with. Upload logo in (.png) format.</small>
                </div>
               
            </form>
        </div>
    );
};

export default CompanyAddressForm;
