import React from 'react';
import "./LoginRegister.css";

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      confirmPassword: ''
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.username, this.state.password, this.state.confirmPassword);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={this.state.confirmPassword}
            onChange={this.handleInputChange}
          />
        </div>
        <button type="submit">Create Account</button>
      </form>
    );
  }
}

export default RegistrationForm;
