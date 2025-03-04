import React, { useEffect, useState } from 'react';
import { getApplications, addApplication, updateApplication, deleteApplication } from '../api';
import ApplicationForm from './ApplicationForm';
import ApplicationList from './ApplicationList';

const Dashboard = ({ token }) => {
  const [applications, setApplications] = useState([]);
  const [selectedApplication, setSelectedApplication] = useState(null);

  useEffect(() => {
    const fetchApplications = async () => {
      const response = await getApplications(token);
      setApplications(response.data);
    };
    fetchApplications();
  }, [token]);

  const handleAddApplication = async (application) => {
    const response = await addApplication(application, token);
    setApplications([...applications, response.data]);
  };

  const handleUpdateApplication = async (id, application) => {
    const response = await updateApplication(id, application, token);
    setApplications(applications.map(app => (app._id === id ? response.data : app)));
  };

  const handle
