import logo from '../../logo.svg';
import React, { Component } from 'react';
export class Login extends Component {
  render() {
    return(
    <div>
    <h1>Book My House </h1>
    <p>Welcome User</p>
    <img src={logo} className="App-logo" alt="logo" />
    <div className ="col-12">
        <form>
           <div className=" col-12 d-flex justify-content-center">     
            <div className ="col-12 border d-flex justify-content-center align-items-center border-danger ">
            <div className="col-6">
            <div className ="col-6 d-flex justify-content-center  border border-primary">
                <div className ="col-6 border">
                <label> Login ID: </label>
                </div>
                <div className="col-6 border">
               <input type="text" className="form-control">
                </input>
                </div>
            </div>
            <div className ="col-6 d-flex">
            <div className="col-6 border">
                <label> Password : </label>
                </div>
                <div className="col-6 border">
               <input type="text" className="form-control">
                </input>
                </div>
                </div>
            </div>
            </div>
            </div>
             </form>
             </div>
             </div>
    )
  }
}
export default Login;