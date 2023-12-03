import { Component } from "react";
import React from "react";
import "./LoginComponent.css";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WelcomeComponent from "./WelcomeComponent";
import { Navigate } from "react-router-dom";
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
        if (this.state.username === 'username' && this.state.password === 'password') {
            console.log("login successful");
            window.location.href = '/books'
            //Contact();
           // WelcomePage();
            //return <Navigate to="/welcome"/>
            
            //this.props.navigate("/welcome")
            // this.setState({
            //     hasLoginFailed: false,
            //     showSuccessMessage: true

            // })
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
                    {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>*/}
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login Sucessful</div>}
                    {/*<ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/>*/}
                    User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
            </div>
        )
    }

}

export default LoginComponent