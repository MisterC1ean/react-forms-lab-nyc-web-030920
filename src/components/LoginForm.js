import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  // changeUsername = (event) => {
  //   this.setState({username: event.target.value})
  // }

  // changePassword = (event) => {
  //   this.setState({password: event.target.value})
  // }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // console.log(this.state)
    // this.props.handleLogin({username: this.state.username, password: this.state.password})
    // this.props.handleLogin(this.state.username, this.state.password)
    if(this.state.username && this.state.password){
      this.props.handleLogin(this.state)
    }

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input name="username" onChange={this.handleChange} value={this.state.username.value} id="username" name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input name="password" onChange={this.handleChange} value={this.state.password.value} id="password" name="password" type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
