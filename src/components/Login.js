import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../ducks/reducer";
import {Link, Redirect} from 'react-router-dom'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  //takes the input from the form and sets it to this components state
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  //this takes the state that was updated by the change handler and calls the function from the reducer and passes it the info for the index
  handleSubmit = e => {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password)
  };

  render() {
      console.log(this.props.user.username)
      if(this.props.user.username){
          return <Redirect push to="/dashboard"/>
      }
    return (
      <div>
        Login
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.username}
            type="username"
            name="username"
            placeholder="Username"
            onChange={this.handleChange}
          />
          <input
            value={this.state.password}
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
          />
          <button onClick={this.handleSubmit}>Login</button>
        </form>

        <Link to="/signup">Signup</Link>
      </div>
    );
  }
}


//maps redux's state to this componenets props 
const mapStateToProps = state => {
  return {
    user: state.user
  };
};


//creates connection to redux
export default connect(
  mapStateToProps,
  { login: login }
)(Login);
