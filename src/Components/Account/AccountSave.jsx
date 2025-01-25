import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../Footer/Footer";
import Header03 from "../Header03/Header03";
import "./accountSave.css";

export default function AccountSave() {
    const { state } = useLocation();
    const navigate = useNavigate();
  
    const accountType = state?.accountType; // Retrieve account type passed from AccountPage
  
    const [accountData, setAccountData] = useState({
      accountName: "",
      balance: "",
      openDate: "", // Will be auto-filled
      additionalDetails: "",
      userId: "", // Add dynamic userId if available
    });
  
    const [message, setMessage] = useState("");
  
    // Auto-fill date with the current date when the component loads
    useEffect(() => {
      const currentDate = new Date().toISOString().split("T")[0]; // Format YYYY-MM-DD
      setAccountData((prevData) => ({ ...prevData, openDate: currentDate }));
    }, []);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setAccountData({ ...accountData, [name]: value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post("http://localhost:8081/api/accounts/save", {
          ...accountData,
          accountType, // Add account type to the request data
        });
  
        setMessage("Account saved successfully!");
        setAccountData({
          accountName: "",
          balance: "",
          openDate: new Date().toISOString().split("T")[0], // Reset date to current date
          additionalDetails: "",
          userId: "",
        });
        navigate("/account"); // Optionally redirect after saving
      } catch (error) {
        setMessage(
          error.response?.data || "Error saving account. Please try again later."
        );
        console.error(error);
      }
    };

    return (
        <div>
          <Header03 />
          <div className="account-container">
            <div style={{ maxWidth: "500px", margin: "auto", padding: "20px" }}>
              <div className="box">
                <h2>Save Account for: {accountType}</h2>
                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: "15px" }}>
                    <label>Account Name:</label>
                    <input
                      type="text"
                      name="accountName"
                      value={accountData.accountName}
                      onChange={handleChange}
                      required
                      style={{
                        width: "100%",
                        padding: "10px",
                        borderRadius: "5px",
                        border: "1px solid #ccc",
                      }}
                    />
                  </div>
    
                  <div style={{ marginBottom: "15px" }}>
                    <label>Balance:</label>
                    <input
                      type="number"
                      name="balance"
                      value={accountData.balance}
                      onChange={handleChange}
                      required
                      style={{
                        width: "100%",
                        padding: "10px",
                        borderRadius: "5px",
                        border: "1px solid #ccc",
                      }}
                    />
                  </div>
    
                  <div style={{ marginBottom: "15px" }}>
                    <label>Open Date:</label>
                    <input
                      type="date"
                      name="openDate"
                      value={accountData.openDate}
                      onChange={handleChange}
                      required
                      style={{
                        width: "100%",
                        padding: "10px",
                        borderRadius: "5px",
                        border: "1px solid #ccc",
                      }}
                    />
                  </div>
    
                  <div style={{ marginBottom: "15px" }}>
                    <label>Additional Details:</label>
                    <textarea
                      name="additionalDetails"
                      value={accountData.additionalDetails}
                      onChange={handleChange}
                      rows="3"
                      required
                      style={{
                        width: "100%",
                        padding: "10px",
                        borderRadius: "5px",
                        border: "1px solid #ccc",
                      }}
                    ></textarea>
                  </div>
    
                  <button
                    type="submit"
                    style={{
                      backgroundColor: "#28A745",
                      color: "white",
                      padding: "10px 20px",
                      borderRadius: "5px",
                      border: "none",
                      cursor: "pointer",
                      width: "100%",
                    }}
                  >
                    Save Account
                  </button>
                </form>
                {message && (
                  <div
                    style={{
                      marginTop: "20px",
                      padding: "10px",
                      color: message.includes("successfully") ? "green" : "red",
                      border: `1px solid ${
                        message.includes("successfully") ? "green" : "red"
                      }`,
                    }}
                  >
                    {message}
                  </div>
                )}
              </div>
            </div>
          </div>
          <Footer />
        </div>
      );
}
