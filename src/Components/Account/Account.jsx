import React, { useState } from'react'
import Header03 from '../Header03/Header03'
import Footer from '../Footer/Footer'
import { useNavigate } from "react-router-dom";
import "./account.css";

export default function Account() {
    const accountCategories = [
      { category: "Bank Accounts", items: ["Checking Account", "Savings Account"] },
      { category: "Credit Accounts", items: ["Credit Card", "Line of Credit"] },
      { category: "Investment Accounts", items: ["Stocks", "Mutual Funds", "Retirement Accounts"] },
      { category: "Loan Accounts", items: ["Mortgage", "Car Loan", "Personal Loan"] },
      { category: "Cash Accounts", items: ["Cash in Hand", "Cash at Home"] },
      { category: "Other Accounts", items: ["Prepaid Cards", "Gift Cards"] },
    ];

    const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  const handleCategoryChange = (e) => {
    const category = accountCategories.find((cat) => cat.category === e.target.value);
    setSelectedCategory(category);
  };

    return (
        <div>
          <Header03 />
          <div className="account-container">
            <div style={{ padding: "20px", textAlign: "center" }}>
              <div className="box">
                <h2>Account Categories</h2>
    
                {/* Dropdown for Main Categories */}
                <div style={{ marginBottom: "20px" }}>
                  <label htmlFor="category-select" style={{ marginRight: "10px" }}>
                    Select a Category:
                  </label>
                  <select
                    id="category-select"
                    onChange={handleCategoryChange}
                    style={{
                      padding: "10px",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                      fontSize: "16px",
                    }}
                  >
                    <option value="" disabled selected>
                      -- Choose a Category --
                    </option>
                    {accountCategories.map((category, index) => (
                      <option key={index} value={category.category}>
                        {category.category}
                      </option>
                    ))}
                  </select>
                </div>
    
                {/* Buttons for Subcategories */}
                {selectedCategory && (
                  <div style={{ marginTop: "20px" }}>
                    <h3>{selectedCategory.category}</h3>
                    <div>
                      {selectedCategory.items.map((item, idx) => (
                        <button
                          key={idx}
                          style={{
                            margin: "5px",
                            padding: "10px 20px",
                            borderRadius: "5px",
                            border: "none",
                            backgroundColor: "#007BFF",
                            color: "white",
                            cursor: "pointer",
                          }}
                          onClick={() =>
                            navigate("/account/save", { state: { accountType: item } })
                          } Pass account type to details page
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <Footer />
        </div>
      );
}

