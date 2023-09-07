import React, { useState } from "react";
import { submitForm } from "./api/api";
// import axios from 'axios'; // Import Axios
const Form = () => {
  const initialFormData = {
    name: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      // Send the form data to the backend using the submitForm function
      const response = await submitForm(formData);
      console.log("Form submitted successfully", response);
      // Reset form fields if needed
      setFormData(initialFormData);
    } catch (error) {
      console.error("Form submission error", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <>
      <div>Form</div>
      <form onSubmit={handleSubmit}>
        {/* dynamically generate form fields based on the keys of the formData object in your React component
        
        you can dynamically generate input fields based on the keys of the formData object while correctly specifying the input type for the 'email' field
        */}
        {Object.keys(formData).map((key) => (
          <div key={key}>
            <label htmlFor={key}>
              {key.charAt(0).toUpperCase() + key.slice(1)}:
            </label>
            <input
              type={key === "email" ? "email" : "text"} // Set the input type based on the key
              id={key}
              name={key}
              value={formData[key]}
              onChange={handleInputChange}
              required
            />
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form;
