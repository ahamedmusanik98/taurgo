import React, { useState } from "react";
import styles from "./MyProjects.module.css";

const MyProjects = () => {
    const [projects, setProjects] = useState([
        {
            address: "78 Court Street",
            client: "Aktons",
            projectType: "Birmingham",
            payment: "Paid",
            status: "Uploaded",
        },
        {
            address: "78 Court Street",
            client: "Aktons",
            projectType: "Birmingham",
            payment: "Pending",
            status: "Awaiting Capture",
        },
        // Add more project data as needed
    ]);

    const getProgressBarClass = (status) => {
        switch (status) {
            case "Uploaded":
                return styles.uploaded;
            case "Awaiting Capture":
                return styles.awaiting;
            case "Captured":
                return styles.captured;
            default:
                return "";
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>My Projects</h1>
            <p className={styles.subtitle}>View property available</p>

            <div className={styles.tableContainer}>
                <table>
                    <thead>
                        <tr>
                            <th>Address</th>
                            <th>Client</th>
                            <th>Project Type</th>
                            <th>Payments</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map((project, index) => (
                            <tr key={index}>
                                <td>
                                    {project.address}
                                    <br />
                                    <span className={styles.subtext}>
                                        {project.address} Tonypandy, 10000
                                    </span>
                                </td>
                                <td>{project.client}</td>
                                <td>{project.projectType}</td>
                                <td
                                    className={`${styles.payment} ${project.payment === "Paid" ? styles.paid : styles.pending
                                        }`}
                                >
                                    {project.payment}
                                </td>
                                <td>
                                    <div className={styles.statusContainer}>
                                        <div className={`${styles.progressBar} ${getProgressBarClass(project.status)}`}></div>
                                        <select
                                            value={project.status}
                                            onChange={(e) => {
                                                const updatedProjects = [...projects];
                                                updatedProjects[index].status = e.target.value;
                                                setProjects(updatedProjects);
                                            }}
                                            className={styles.statusDropdown}
                                        >
                                            <option value="Uploaded">Uploaded</option>
                                            <option value="Awaiting Capture">Awaiting Capture</option>
                                            <option value="Captured">Captured</option>
                                        </select>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className={styles.pagination}>
                <button className={styles.prev}>Previous</button>
                <p>Page 1 of 10</p>
                <button className={styles.next}>Next</button>
            </div>
        </div>
    );
};

export default MyProjects;
