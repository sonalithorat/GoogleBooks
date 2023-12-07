import React, { Component } from "react";
import BooksService from "../service/BooksService";
import { FaSearch } from "react-icons/fa";
import "./SearchBook.css"
class SearchBooks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            welcomeMessage : '',
            data : '',
            print: false
        }
        this.getData = this.getData.bind(this);
        //this.setPrint = this.setPrint.bind(this);
        this.retriveWelcomeMessage = this.retriveWelcomeMessage.bind(this);
        
        this.handleSuccessResponse = this.handleSuccessResponse.bind(this);
       

    }
   
    render() {
        return (
            <>  
                <div className="input-wrapper">
                   <FaSearch id="search-icon" />
                    <input placeholder="Type to search" onChange={this.getData}></input>
                    <button onClick={this.retriveWelcomeMessage} >Click here</button>
                </div>
                <div>
                    {this.state.print && this.state.welcomeMessage}
                    
                  
                </div>
                <div><href>Recently Visited</href></div>
            </>
        )
    }

    retriveWelcomeMessage(){
        BooksService.retriveBooks(this.state.data)
        .then(response => this.handleSuccessResponse(response))

       
    }

    handleSuccessResponse(response){
        if(response.data.length===0){
            alert("Result not found")
        }
        this.setState({print: true})
        this.setState({welcomeMessage: response.data})
        
    }

    setPrint(val){
        this.setState({print: val})
     }
     
     getData(val) {
        this.setState({data: val.target.value})
        this.setState({print: false})
        this.setState({welcomeMessage: ''})
        //setData(val.target.value)
        //setPrint(false)
        // BooksService.retriveBooks(val.target.value).then(response => handleSuccessResponse(response))
        console.log(val.target.value)

    }
}

export default SearchBooks