import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="logo">UNITE COMPLIANCE</div>
            <ul className="sidebar-nav">
                <li className="nav-item">
                    <a href="/available-projects">Available Projects</a>
                </li>
                <li className="nav-item">
                    <a href="/my-projects">My Projects</a>
                </li>
                <li className="nav-item">
                    <a href="/diary">Diary</a>
                </li>
                <li className="nav-item">
                    <a href="/payment">Payment</a>
                </li>
                <li className="nav-item">
                    <a href="/settings">Settings</a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
