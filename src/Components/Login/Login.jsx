import React from 'react';
import './Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      showPassword: false,
      rememberMe: false,
      isLoading: false
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  togglePasswordVisibility = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword
    }));
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({ isLoading: true });

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log('Login attempted with:', {
      email: this.state.email,
      password: this.state.password,
      rememberMe: this.state.rememberMe
    });

    this.setState({ isLoading: false });
  };

  render() {
    const { email, password, showPassword, rememberMe, isLoading } = this.state;

    return (
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <div className="logo">
              <span className="logo-circle"></span>
              <span className="logo-text">CompanyName</span>
            </div>
            <h1>Welcome back</h1>
            <p>Enter your credentials to access your account</p>
          </div>

          <form onSubmit={this.handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <div className="input-container">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={this.handleInputChange}
                  placeholder="name@company.com"
                  required
                />
                <span className="input-icon">📧</span>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="input-container">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={password}
                  onChange={this.handleInputChange}
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={this.togglePasswordVisibility}
                >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
            </div>

            <div className="form-options">
              <label className="remember-me">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => this.setState({ rememberMe: e.target.checked })}
                />
                <span>Remember me</span>
              </label>
              <a href="#" className="forgot-password">Forgot password?</a>
            </div>

            <button
              type="submit"
              className={`login-button ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? 'Signing in...' : 'Sign in'}
            </button>

            <div className="divider">
              <span>OR</span>
            </div>


            <div className="social-login">
              <button type="button" className="google-button">
                <span>Continue with Google</span>
              </button>
              <button type="button" className="github-button">
                <span>Continue with GitHub</span>
              </button>
            </div>

            <p className="signup-link">
              Don't have an account? <a href="#">Sign up</a>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;