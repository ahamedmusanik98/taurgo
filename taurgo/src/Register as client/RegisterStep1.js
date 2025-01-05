import React from "react";
import "./RegisterStep1.css";

const RegisterStep1 = () => {
    return (
        <div className="form-containerstep1">
            <h1>Organisation Details</h1>
            <form className="formstep1">
                <div className="form-rowstep1">
                    <div className="form-group">
                        <label>Company name <span className="required">*</span></label>
                        <input type="text" placeholder="Company name" />
                    </div>
                    <div className="form-groupstep1">
                        <label>Full Name <span className="required">*</span></label>
                        <input type="text" placeholder="Full Name" />
                    </div>
                </div>
                <div className="form-rowstep1">
                    <div className="form-groupstep1">
                        <label>Email <span className="required">*</span></label>
                        <input type="email" placeholder="hello@email.com" />
                    </div>
                    <div className="form-groupstep1">
                        <label>Phone <span className="required">*</span></label>
                        <input type="tel" placeholder="Add your phone number" />
                    </div>
                </div>

            </form>
            <button className="next-button" type="submit">Next</button>
        </div>
    );
};

export default RegisterStep1;
