import React, { useState } from "react";
import "./Dashboard.css";

import Sidebar from "./Sidebar";
import AvailableProjects from "./AvailableProjects";
import EmptyPage from "./EmptyPage";
import MyProjects from "./MyProjects";

const Dashboard = () => {
    const [currentPage, setCurrentPage] = useState("available-projects");

    const renderPage = () => {
        switch (currentPage) {
            case "available-projects":
                return <AvailableProjects />;
            case "my-projects":
                return (
                    <MyProjects
                        title="My Projects"
                        goBack={() => setCurrentPage("available-projects")}
                    />
                );
            case "diary":
                return (
                    <EmptyPage
                        title="Diary"
                        goBack={() => setCurrentPage("available-projects")}
                    />
                );
            case "payment":
                return (
                    <EmptyPage
                        title="Payment"
                        goBack={() => setCurrentPage("available-projects")}
                    />
                );
            case "settings":
                return (
                    <EmptyPage
                        title="Settings"
                        goBack={() => setCurrentPage("available-projects")}
                    />
                );
            default:
                return <AvailableProjects />;
        }
    };

    return (
        <div className="dashboard">
            <Sidebar setCurrentPage={setCurrentPage} />
            <div className="main-content">{renderPage()}</div>
        </div>
    );
};

export default Dashboard;
