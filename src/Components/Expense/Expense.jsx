import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BackgroundImage from '../BackgroundImage/BackGroundImage';
import Header01 from '../Header01/Header01';

export default function ExpensePage() {
  const expenseCategories = [
    { category: 'Housing', items: ['Rent', 'Mortgage', 'Utilities (Electricity, Water, Internet)'] },
    { category: 'Transportation', items: ['Fuel', 'Vehicle Maintenance', 'Public Transit', 'Parking'] },
    { category: 'Groceries', items: ['Food', 'Beverages', 'Household Supplies'] },
    { category: 'Dining Out', items: ['Restaurants', 'Coffee Shops', 'Takeout'] },
    { category: 'Health', items: ['Medical Bills', 'Insurance', 'Fitness Memberships'] },
    { category: 'Entertainment', items: ['Movies', 'Subscriptions (Netflix, Spotify)', 'Events'] },
    { category: 'Education', items: ['Tuition Fees', 'Books', 'Courses'] },
    { category: 'Personal Care', items: ['Clothing', 'Beauty Products', 'Salon Visits'] },
    { category: 'Debt Payments', items: ['Loan Repayments', 'Credit Card Bills'] },
    { category: 'Savings & Investments', items: ['Emergency Fund', 'Stocks', 'Retirement'] },
    { category: 'Gifts & Donations', items: ['Charity', 'Birthday Presents'] },
    { category: 'Miscellaneous', items: ['Unplanned or Uncategorized Expenses'] },
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate(); // Use navigate hook for programmatic navigation

  const handleCategoryChange = (e) => {
    const category = expenseCategories.find((cat) => cat.category === e.target.value);
    setSelectedCategory(category);
  };

  return (
    <div>
      <Header01 />
      <BackgroundImage />
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Expense Categories</h2>

        {/* Dropdown for Main Categories */}
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="category-select" style={{ marginRight: '10px' }}>
            Select a Category:
          </label>
          <select
            id="category-select"
            onChange={handleCategoryChange}
            style={{
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              fontSize: '16px',
            }}
          >
            <option value="" disabled selected>
              -- Choose a Category --
            </option>
            {expenseCategories.map((category, index) => (
              <option key={index} value={category.category}>
                {category.category}
              </option>
            ))}
          </select>
        </div>

        {/* Buttons for Subcategories */}
        {selectedCategory && (
          <div style={{ marginTop: '20px' }}>
            <h3>{selectedCategory.category}</h3>
            <div>
              {selectedCategory.items.map((item, idx) => (
                <button
                  key={idx}
                  style={{
                    margin: '5px',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    border: 'none',
                    backgroundColor: '#007BFF',
                    color: 'white',
                    cursor: 'pointer',
                  }}
                  onClick={() => navigate('/expense/save', { state: { category: item } })} // Pass category to ExpenseSavingPage
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
