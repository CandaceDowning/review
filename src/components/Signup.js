import React, { Component } from "react";
import { connect } from "react-redux";
import { signup } from "../ducks/reducer";
import {Link, Redirect} from 'react-router-dom'

class Signup extends Component {
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

  //this takes the state that was updated by the change handler and calls the function from the controller to post the information
  handleSubmit = e => {
    e.preventDefault();
    this.props.signup(this.state.username, this.state.password)
  };

  render() {
    return (
      <div>
        Signup
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
          <button>SignUp</button>
        </form>
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
  { signup: signup }
)(Signup);
