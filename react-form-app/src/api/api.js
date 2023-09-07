import axios from "axios";

const baseURL = "http://localhost:3001/api"; // Your Express backend's API base URL

const api = axios.create({
  baseURL,
});

// Function to submit the form data to the backend
export const submitForm = async (formData) => {
  try {
    const response = await api.post("/submit", formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllSubmissions = () => {
  return api
    .get("/getAllSubmissions")
    .then((response) => response.data.submissions)
    .catch((error) => {
      console.error("Error fetching form submissions:", error);
      throw error;
    });
};
