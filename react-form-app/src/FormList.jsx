// FormList.js
import React, { useEffect, useState } from "react";
import { getAllSubmissions } from "./api/api";

function FormList() {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    // Fetch form submissions when the component mounts
    getAllSubmissions()
      .then((submissions) => {
        setSubmissions(submissions);
      })
      .catch((error) => {
        console.error("Error fetching form submissions:", error);
      });
  }, []);

  return (
    <div>
      <h2>All Form Submissions</h2>
      <ul>
        {submissions.map((submission) => (
          <li key={submission._id}>
            <strong>Name:</strong> {submission.name}
            <br />
            <strong>Email:</strong> {submission.email}
            <br />
            <strong>Message:</strong> {submission.message}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FormList;
