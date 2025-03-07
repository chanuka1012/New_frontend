import React, { useState } from 'react';
import axios from "axios";
import Header03 from "../Header03/Header03";
import Footer from "../Footer/Footer";

export default function DeleteExpense() {
  const [expenses, setExpenses] = useState([]);
  const [expenseId, setExpenseId] = useState('');
  const [message, setMessage] = useState('');

const userID = localStorage.getItem('userId')

  const fetchExpenses = async () => {
    try {
      const response = await axios.get(`http://localhost:8081/api/expenses/user/${userID}`);
      setExpenses(response.data);
      setMessage("Expenses fetched successfully!");
    } catch (error) {
      setMessage("Error fetching expenses. Please try again.");
    }
  };

  const deleteExpense = async () => {
    if (!expenseId) {
      setMessage("Please enter an expense ID to delete.");
      return;
    }

    try {
      await axios.delete(`http://localhost:8081/api/expenses/deleteExpense/${expenseId}`);
      setExpenses(expenses.filter(expense => expense.id !== expenseId));
      setMessage(`Expense with ID ${expenseId} deleted successfully!`);
    } catch (error) {
      setMessage("Error deleting expense. Please try again.");
    }
  };

  return (
    <div>
      <Header03 />
      <div className="expense-container" style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
        <div className="box">
          <h2>Expense Management</h2>

          {/* Fetch Expenses Button */}
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
            onClick={fetchExpenses}
          >
            Get All Expenses
          </button>

          {/* Delete Expense Section */}
          <input
            type="text"
            placeholder="Enter Expense ID"
            value={expenseId}
            onChange={(e) => setExpenseId(e.target.value)}
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
            onClick={deleteExpense}
          >
            Delete Expense
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

          {/* Expense List */}
          {expenses.length > 0 && (
            <div style={{ marginTop: "20px" }}>
              <h3>Expense List</h3>
              <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "10px" }}>
                <thead>
                  <tr style={{ backgroundColor: "#f2f2f2", textAlign: "left" }}>
                    <th style={{ padding: "10px", border: "1px solid #ddd" }}>Expense ID</th>
                    <th style={{ padding: "10px", border: "1px solid #ddd" }}>Category</th>
                    <th style={{ padding: "10px", border: "1px solid #ddd" }}>Amount</th>
                    <th style={{ padding: "10px", border: "1px solid #ddd" }}>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {expenses.map((expense) => (
                    <tr key={expense.id} style={{ borderBottom: "1px solid #ddd" }}>
                      <td style={{ padding: "10px", border: "1px solid #ddd" }}>{expense.id}</td>
                      <td style={{ padding: "10px", border: "1px solid #ddd" }}>{expense.category}</td>
                      <td style={{ padding: "10px", border: "1px solid #ddd" }}>${expense.amount}</td>
                      <td style={{ padding: "10px", border: "1px solid #ddd" }}>{expense.date}</td>
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

