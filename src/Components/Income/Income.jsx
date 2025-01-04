
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BackgroundImage from '../BackgroundImage/BackGroundImage';


export default function Income() {

    const incomeCategories = [
        { category: 'Salary', items: ['Monthly Paycheck', 'Bonuses', 'Overtime'] },
        { category: 'Business Income', items: ['Sales Revenue', 'Freelance Income', 'Consulting'] },
        { category: 'Investments', items: ['Dividends', 'Interest', 'Capital Gains'] },
        { category: 'Rental Income', items: ['Property Rent', 'Vacation Rentals'] },
        { category: 'Royalties', items: ['Book Royalties', 'Music Royalties', 'Patent Licensing'] },
        { category: 'Government Benefits', items: ['Unemployment Benefits', 'Social Security', 'Disability Payments'] },
        { category: 'Pension', items: ['Retirement Pension', 'Annuity Income'] },
        { category: 'Gifts', items: ['Monetary Gifts', 'Inheritance'] },
        { category: 'Other Income', items: ['Side Jobs', 'Lottery Winnings', 'Refunds'] },
      ];
    
      const [selectedCategory, setSelectedCategory] = useState(null);
      const navigate = useNavigate();
    
      const handleCategoryChange = (e) => {
        const category = incomeCategories.find((cat) => cat.category === e.target.value);
        setSelectedCategory(category);
      };

  return (
    <div>
      <Header />
      <BackgroundImage />
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Income Categories</h2>

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
            {incomeCategories.map((category, index) => (
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
              backgroundColor: '#28A745',
              color: 'white',
              cursor: 'pointer',
    }}
    onClick={() => navigate('/income/save', { state: { category: item } })} // Pass category to IncomeSave
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
