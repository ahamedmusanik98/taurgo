import React from "react";
import "./Sidebar.css";

const Sidebar = ({ setCurrentPage }) => {
    return (
        <div className="sidebar">
            <div className="logo">UNITE COMPLIANCE</div>
            <ul className="sidebar-nav">
                <li className="nav-item" onClick={() => setCurrentPage("available-projects")}>
                    Available Projects
                </li>
                <li className="nav-item" onClick={() => setCurrentPage("my-projects")}>
                    My Projects
                </li>
                <li className="nav-item" onClick={() => setCurrentPage("diary")}>
                    Diary
                </li>
                <li className="nav-item" onClick={() => setCurrentPage("payment")}>
                    Payment
                </li>
                <li className="nav-item" onClick={() => setCurrentPage("settings")}>
                    Settings
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
