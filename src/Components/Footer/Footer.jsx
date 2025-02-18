import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import './Footer.css';

const Footer = () => {
  return (
    <div>
      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-links">
            <div>
              <h4 className="footer-title">Quick Links</h4>
              <ul className="footer-list">
                <li><a href="#about" className="footer-link">About Us</a></li>
                <li><a href="#classes" className="footer-link">Classes</a></li>
                <li><a href="#trainers" className="footer-link">Trainers</a></li>
                <li><a href="#membership" className="footer-link">Membership</a></li>
              </ul>
            </div>
            <div>
              <h4 className="footer-title">Contact Info</h4>
              <div className="footer-contact">
                <p><Phone className="footer-icon" /> +1 (555) 123-4567</p>
                <p><Mail className="footer-icon" /> info@upliftgym.com</p>
                <p><MapPin className="footer-icon" /> 123 Fitness Avenue, NY</p>
                <p><Clock className="footer-icon" /> Open 5am - 11pm</p>
              </div>
            </div>
            <div>
              <h4 className="footer-title">Newsletter</h4>
              <p className="footer-text">Subscribe to get updates on special offers and events.</p>
              <div className="footer-newsletter">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="footer-input"
                />
                <button className="footer-btn">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-bottom-links">
              <a href="#privacy" className="footer-link">Privacy Policy</a>
              <a href="#terms" className="footer-link">Terms of Service</a>
              <a href="#faq" className="footer-link">FAQ</a>
            </div>
            <p className="footer-text">© 2025 Uplift Gym. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
