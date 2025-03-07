import React, { useState } from 'react';
import axios from "axios";
import Header03 from "../Header03/Header03";
import Footer from "../Footer/Footer";

export default function DeleteIncome() {
  const [incomes, setIncomes] = useState([]);
  const [incomeId, setIncomeId] = useState('');
  const [message, setMessage] = useState('');

  const userID = localStorage.getItem('userId')

  const fetchIncomes = async () => {
    try {
      const response = await axios.get(`http://localhost:8081/api/incomes/user/${userID}`);
      setIncomes(response.data);
      setMessage("Incomes fetched successfully!");
    } catch (error) {
      setMessage("Error fetching incomes. Please try again.");
    }
  };

  const deleteIncome = async () => {
    if (!incomeId) {
      setMessage("Please enter an income ID to delete.");
      return;
    }

    try {
      await axios.delete(`http://localhost:8081/api/incomes/deleteIncome/${incomeId}`);
      setIncomes(incomes.filter(income => income.id !== incomeId));
      setMessage(`Income with ID ${incomeId} deleted successfully!`);
    } catch (error) {
      setMessage("Error deleting income. Please try again.");
    }
  };

  return (
    <div>
      <Header03 />
      <div className="income-container" style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
        <div className="box">
          <h2>Income Management</h2>

          {/* Fetch Incomes Button */}
          <button
            style={{
              backgroundColor: "#36A2EB",
              color: "white",
              padding: "12px 24px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              width: "100%",
              fontSize: "16px",
              fontWeight: "bold",
              marginBottom: "15px",
              transition: "all 0.3s ease",
            }}
            onClick={fetchIncomes}
          >
            Get All Incomes
          </button>

          {/* Delete Income Section */}
          <input
            type="text"
            placeholder="Enter Income ID"
            value={incomeId}
            onChange={(e) => setIncomeId(e.target.value)}
            style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "5px" }}
          />
          <button
            style={{
              backgroundColor: "#FF5733",
              color: "white",
              padding: "12px 24px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              width: "100%",
              fontSize: "16px",
              fontWeight: "bold",
              transition: "all 0.3s ease",
            }}
            onClick={deleteIncome}
          >
            Delete Income
          </button>

          {/* Message */}
          {message && (
            <div
              style={{
                marginTop: "20px",
                padding: "10px",
                color: message.includes("successfully") ? "green" : "red",
                border: `1px solid ${message.includes("successfully") ? "green" : "red"}`,
              }}
            >
              {message}
            </div>
          )}

          {/* Income List */}
          {incomes.length > 0 && (
            <div style={{ marginTop: "20px" }}>
              <h3>Income List</h3>
              <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "10px" }}>
                <thead>
                  <tr style={{ backgroundColor: "#f2f2f2", textAlign: "left" }}>
                    <th style={{ padding: "10px", border: "1px solid #ddd" }}>Income ID</th>
                    <th style={{ padding: "10px", border: "1px solid #ddd" }}>Source</th>
                    <th style={{ padding: "10px", border: "1px solid #ddd" }}>Amount</th>
                    <th style={{ padding: "10px", border: "1px solid #ddd" }}>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {incomes.map((income) => (
                    <tr key={income.id} style={{ borderBottom: "1px solid #ddd" }}>
                      <td style={{ padding: "10px", border: "1px solid #ddd" }}>{income.id}</td>
                      <td style={{ padding: "10px", border: "1px solid #ddd" }}>{income.source}</td>
                      <td style={{ padding: "10px", border: "1px solid #ddd" }}>${income.amount}</td>
                      <td style={{ padding: "10px", border: "1px solid #ddd" }}>{income.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
