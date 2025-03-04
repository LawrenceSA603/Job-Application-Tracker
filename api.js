import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Adjust the URL as needed

export const registerUser  = async (userData) => {
  return await axios.post(`${API_URL}/auth/register`, userData);
};

export const loginUser  = async (userData) => {
  return await axios.post(`${API_URL}/auth/login`, userData);
};

export const getApplications = async (token) => {
  return await axios.get(`${API_URL}/applications`, {
    headers: { Authorization: token },
  });
};

export const addApplication = async (applicationData, token) => {
  return await axios.post(`${API_URL}/applications`, applicationData, {
    headers: { Authorization: token },
  });
};

export const updateApplication = async (id, applicationData, token) => {
  return await axios.put(`${API_URL}/applications/${id}`, applicationData, {
    headers: { Authorization: token },
  });
};

export const deleteApplication = async (id, token) => {
  return await axios.delete(`${API_URL}/applications/${id}`, {
    headers: { Authorization: token },
  });
};
