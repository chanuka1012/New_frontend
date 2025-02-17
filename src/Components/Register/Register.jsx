import React from 'react';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      showPassword: false,
      marketing: false
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    this.setState({ [name]: checked });
  };

  togglePasswordVisibility = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    console.log('Form submitted:', this.state);
  };

  render() {
    const { email, username, password, showPassword, marketing } = this.state;

    return (
      <div className="p-6 max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-2">Sign up</h1>
        <p className="mb-6">
          Create an account or{' '}
          <a href="#" className="text-purple-600 hover:underline">
            Sign in
          </a>
        </p>

        <form onSubmit={this.handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">
              Email address
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Choose a username"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={password}
                onChange={this.handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Create a password"
              />
              <button
                type="button"
                onClick={this.togglePasswordVisibility}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-green-500 text-white p-1 rounded"
                style={{ padding: '2px 8px' }}
              >
                👁️
              </button>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id="marketing"
              name="marketing"
              checked={marketing}
              onChange={this.handleCheckboxChange}
              className="mt-1"
            />
            <label htmlFor="marketing" className="text-sm text-gray-700">
              I do not want to receive emails with advertising, news, suggestions or marketing promotions
            </label>
          </div>

          <button
            type="submit"
            className="w-auto px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Sign up
          </button>

          <p className="text-sm text-gray-600 mt-4">
            By signing up to create an account, you are accepting our{' '}
            <a href="#" className="text-purple-600 hover:underline">
              terms of service
            </a>{' '}
            and{' '}
            <a href="#" className="text-purple-600 hover:underline">
              privacy policy
            </a>
          </p>
        </form>
      </div>
    );
  }
}

export default Register;