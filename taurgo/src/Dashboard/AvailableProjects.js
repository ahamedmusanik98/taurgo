import React from "react";
import "./AvailableProjects.css";

const AvailableProjects = () => {
    const projects = new Array(10).fill({
        address: "78 Court Street, Tonypandy",
        client: "Aktons",
        city: "Birmingham",
        totalPayment: "£250",
        deadline: "2024-12-12",
    });

    return (
        <div className="main-content">
            <header className="header">
                <h1>All Available Projects</h1>
                <p>View property available</p>
            </header>
            <div className="search-bar">
                <input type="text" placeholder="Search" className="search-input" />
            </div>
            <table className="projects-table">
                <thead>
                    <tr>
                        <th>Address</th>
                        <th>Client</th>
                        <th>City</th>
                        <th>Total Payment</th>
                        <th>Deadline</th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map((project, index) => (
                        <tr key={index}>
                            <td>{project.address}</td>
                            <td>{project.client}</td>
                            <td>{project.city}</td>
                            <td>{project.totalPayment}</td>
                            <td>{project.deadline}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="pagination">
                <button className="pagination-button">Previous</button>
                <span>Page 1 of 10</span>
                <button className="pagination-button">Next</button>
            </div>
        </div>
    );
};

export default AvailableProjects;
