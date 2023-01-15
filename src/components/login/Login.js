import logo from '../../logo.svg';
import React, { Component } from 'react';
export class Login extends Component {
  render() {
    return(
    <div>
    <h1>Book My House </h1>
    <p>Welcome User</p>
    <img src={logo} className="App-logo" alt="logo" />
    <div>
        <form>
            <input type="text" class="form-control">
                </input>
        </form>
    </div>
      </div>
      
    )
  }
}
export default Login;