import React, { useState } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import Header03 from '../Header03/Header03';
import Footer from '../Footer/Footer';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

export default function ReportPage() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [incomeChartData, setIncomeChartData] = useState(null);
  const [expenseChartData, setExpenseChartData] = useState(null);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [balance, setBalance] = useState(0);
  const [message, setMessage] = useState('');
  const userId = localStorage.getItem('userId');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `http://localhost:8081/api/reports/summary/${userId}/${startDate}/${endDate}`
      );

      const { income, expense, totalIncome, totalExpense, balance } = response.data;

      // Prepare Income Pie Chart
      const incomeLabels = Object.keys(income);
      const incomeAmounts = Object.values(income);

      const incomeData = {
        labels: incomeLabels,
        datasets: [
          {
            data: incomeAmounts,
            backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56', '#4BC0C0', '#FF5733'],
          },
        ],
      };

      // Prepare Expense Pie Chart
      const expenseLabels = Object.keys(expense);
      const expenseAmounts = Object.values(expense);

      const expenseData = {
        labels: expenseLabels,
        datasets: [
          {
            data: expenseAmounts,
            backgroundColor: ['#FF5733', '#C70039', '#900C3F', '#581845', '#FFC300'],
          },
        ],
      };

      setIncomeChartData(incomeData);
      setExpenseChartData(expenseData);
      setTotalIncome(totalIncome);
      setTotalExpense(totalExpense);
      setBalance(balance);
      setMessage('Report generated successfully!');
    } catch (error) {
      setMessage('Error generating report. Please try again later.');
    }
  };

  return (
    <div>
      <Header03 />
      <div className="report-container" style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
        <div className="box">
          <h2>Generate Report</h2>
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
                backgroundColor: '#28A745',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '5px',
                border: 'none',
                cursor: 'pointer',
                width: '100%',
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

          {incomeChartData && (
            <div style={{ marginTop: '20px' }}>
              <h3>Income Report (Pie Chart)</h3>
              <Pie data={incomeChartData} />
            </div>
          )}

          {expenseChartData && (
            <div style={{ marginTop: '20px' }}>
              <h3>Expense Report (Pie Chart)</h3>
              <Pie data={expenseChartData} />
            </div>
          )}

          {incomeChartData && expenseChartData && (
            <div style={{ marginTop: '20px', textAlign: 'center', padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '10px', marginTop: '30px' }}>
              <h3>Final Report Summary</h3>
              <p><strong>Total Income:</strong> ${totalIncome.toFixed(2)}</p>
              <p><strong>Total Expense:</strong> ${totalExpense.toFixed(2)}</p>
              <p><strong>Balance:</strong> ${balance.toFixed(2)}</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
