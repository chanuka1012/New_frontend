import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import Header03 from '../Header03/Header03';
import Footer from '../Footer/Footer';

ChartJS.register(CategoryScale, ArcElement, Title, Tooltip, Legend);

export default function IncomeReportPage() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [pieChartData, setPieChartData] = useState(null);
  const [message, setMessage] = useState('');
  const userId = localStorage.getItem('userId');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `http://localhost:8081/api/incomes/report/source/${userId}/${startDate}/${endDate}`
      );

      // Prepare data for pie chart
      const sources = Object.keys(response.data);
      const amounts = Object.values(response.data);

      const chartData = {
        labels: sources,
        datasets: [
          {
            data: amounts,
            backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56', '#4BC0C0', '#FF5733', '#C70039'],
            hoverBackgroundColor: ['#36A4EC', '#FF7386', '#FFDD57', '#4BC1C1', '#FF6743', '#D80042'],
          },
        ],
      };

      setPieChartData(chartData);
      setMessage('Income report generated successfully!');
    } catch (error) {
      setMessage('Error generating report. Please try again later.');
    }
  };

  return (
    <div>
      <Header03 />
      <div className="income-container">
        <div style={{ maxWidth: '500px', margin: 'auto', padding: '20px' }}>
          <div className="box">
            <h2>Generate Income Report</h2>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '15px' }}>
                <label>Start Date:</label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  required
                  style={{ width: '100%', padding: '10px', borderRadius: '5px' }}
                />
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label>End Date:</label>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  required
                  style={{ width: '100%', padding: '10px', borderRadius: '5px' }}
                />
              </div>
              <button
  type="submit"
  style={{
    backgroundColor: '#4D55CC',
    color: 'white',
    padding: '12px 24px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    width: '100%',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'all 0.3s ease', // Smooth transition for hover effect
  }}
  onMouseOver={(e) => {
    e.target.style.backgroundColor = '#3C47A3'; // Darker shade on hover
    e.target.style.transform = 'scale(1.05)'; // Slightly increase size on hover
  }}
  onMouseOut={(e) => {
    e.target.style.backgroundColor = '#4D55CC'; // Revert to original color
    e.target.style.transform = 'scale(1)'; // Revert to original size
  }}
>
  Generate Report
</button>

            </form>

            {message && (
              <div
                style={{
                  marginTop: '20px',
                  padding: '10px',
                  color: message.includes('successfully') ? 'green' : 'red',
                  border: `1px solid ${
                    message.includes('successfully') ? 'green' : 'red'
                  }`,
                }}
              >
                {message}
              </div>
            )}

            {pieChartData && (
              <div style={{ marginTop: '20px' }}>
                <h3>Income Report (Pie Chart)</h3>
                <Pie data={pieChartData} />
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
