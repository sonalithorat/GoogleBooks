import { Component } from "react";
import React from "react";
import "./LoginComponent.css";
import AuthenticationService from "./AuthenticationService.js";
class LoginComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: 'username',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false,
        }
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }


    handleChange(event) {
        //console.log(this.state);
        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }
        )
    }

    loginClicked() {
        if (this.state.username === 'username' && this.state.password === 'thorat') {
            console.log("login successful");
            AuthenticationService.registerUser(this.state.username, this.state.password)
            window.location.href = '/books'
        }
        else {
            console.log("failed")
            this.setState({
                hasLoginFailed: true,
                showSuccessMessage: false

            })
        }
    }

    render() {

        return (
            <div>
                
                <h1>Login</h1>

                <div className="container">
  
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login Sucessful</div>}
                    User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
            </div>
        )
    }

}

export default LoginComponent