import React, { Component } from "react";
import HelloworldService from "../service/HelloworldService";
class WelcomeComponent extends Component {

    constructor(props) {
        super(props);
        this.retriveWelcomeMessage = this.retriveWelcomeMessage.bind(this);
        this.state = {
            welcomeMessage : ''
        }
        this.handleSuccessResponse = this.handleSuccessResponse.bind(this);
    }
    render() {
        return (
            <>
                <h1>Welcome</h1>
                <div className='container'>
                    Click here to get customized message..
                    <button onClick={this.retriveWelcomeMessage} className='btn btn-success'>Click here</button>
                </div>
                <div className='container'>
                    {this.state.welcomeMessage}
                </div>
            </>
        )
    }

    retriveWelcomeMessage(){
        HelloworldService.executeHelloWorldService()
        .then(response => this.handleSuccessResponse(response))

       
    }

    handleSuccessResponse(response){
        this.setState({welcomeMessage: response.data})
    }
}

export default WelcomeComponent