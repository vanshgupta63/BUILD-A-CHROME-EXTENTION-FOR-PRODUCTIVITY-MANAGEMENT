import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';

function Dashboard() {
  const [report, setReport] = useState({});

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const today = new Date().toLocaleDateString(); // e.g. "7/16/2025"
        const res = await axios.get(`http://localhost:5000/report/vansh123/${today}`);
        setReport(res.data?.sites || {});
      } catch (err) {
        console.error("Error fetching report:", err);
      }
    };
    fetchReport();
  }, []);

  const data = {
    labels: Object.keys(report),
    datasets: [
      {
        label: 'Time Spent (in minutes)',
        data: Object.values(report).map(ms => ms / 60000), // Convert ms to minutes
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return (
    <div style={{ width: '80%', margin: 'auto', paddingTop: '30px' }}>
      <h2>Daily Productivity Report</h2>
      <Bar data={data} />
    </div>
  );
}

export default Dashboard;