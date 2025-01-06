// React Component for the UI
import React from 'react';
import './ProfessionalDetails.css';

const ProfessionalDetails = () => {
    return (
        <div className="musanik-professional-details-container">
            <h2 className="musanik-heading">Professional Details</h2>

            <div className="musanik-upload-section">
                <label className="musanik-label">Please upload related professional supporting documentation. CV, Certifications, Accreditations.</label>
                <div className="musanik-upload-box">
                    <span className="musanik-upload-icon">📎</span>
                    <span className="musanik-upload-text">Click to Upload</span>
                    <input type="file" className="musanik-file-input" />
                </div>
            </div>

            <div className="musanik-upload-section">
                <label className="musanik-label">Valid DBS within 12 months</label>
                <div className="musanik-upload-box">
                    <span className="musanik-upload-icon">📎</span>
                    <span className="musanik-upload-text">Click to Upload</span>
                    <input type="file" className="musanik-file-input" />
                </div>
            </div>

            <div className="musanik-upload-section">
                <label className="musanik-label">Valid Professional Indemnity Insurance Certificate</label>
                <div className="musanik-upload-box">
                    <span className="musanik-upload-icon">📎</span>
                    <span className="musanik-upload-text">Click to Upload</span>
                    <input type="file" className="musanik-file-input" />
                </div>
            </div>

            <div className="musanik-checkbox-container">
                <input type="checkbox" id="taurgo-supplied" className="musanik-checkbox" />
                <label htmlFor="taurgo-supplied" className="musanik-checkbox-label">Check box if wish to use Taurgo supplied.</label>
            </div>
        </div>
    );
};

export default ProfessionalDetails;
