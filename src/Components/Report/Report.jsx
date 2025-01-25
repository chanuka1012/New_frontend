import React, { useState } from 'react';
import axios from 'axios';
import Header03 from '../Header03/Header03';
import Footer from '../Footer/Footer';

export default function Report() {

  const [userId, setUserId] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [report, setReport] = useState(null);
  const [reportType, setReportType] = useState('expenses'); // Default to expenses

  const handleGenerateReport = async () => {
    const url = 'http://localhost:8081/api/reports/${reportType}';
    try {
      const response = await axios.get(url, {
        params: {
          userId,
          startDate,
          endDate,
        },
      });
      setReport(response.data);
    } catch (error) {
      console.error('Error fetching report:', error);
      alert('Failed to fetch report. Please check the inputs and try again.');
    }
  };

  return (
  <div>
    <Header03/>
    <div className="report-container">
    <div style={{ padding: '20px' }}>
    <div className="box">
      <h1>Generate Report</h1>
      <div>
        <label>User ID: </label>
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="Enter User ID"
        />
      </div>
      <div>
        <label>Start Date: </label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>
      <div>
        <label>End Date: </label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
      <div>
        <label>Report Type: </label>
        <select value={reportType} onChange={(e) => setReportType(e.target.value)}>
          <option value="expenses">Expense Report</option>
          <option value="incomes">Income Report</option>
        </select>
      </div>
      <button onClick={handleGenerateReport} style={{ marginTop: '10px' }}>
        Generate Report
      </button>

      {report && (
        <div style={{ marginTop: '20px' }}>
          <h2>{report.reportType}</h2>
          <p>
            <strong>Total Amount:</strong> ${report.totalAmount.toFixed(2)}
          </p>
          <p>
            <strong>From:</strong> {report.startDate} <strong>To:</strong>{' '}
            {report.endDate}
          </p>
          <h3>Breakdown</h3>
          <ul>
            {Object.entries(report.breakdown).map(([key, value]) => (
              <li key={key}>
                {key}: ${value.toFixed(2)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
    </div>
    </div>
    <Footer />
    </div>
  );
}
