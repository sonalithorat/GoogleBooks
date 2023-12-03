import { Component } from "react";
import React from "react";
import BooksService from "../service/BooksService";
import "./Books.css";

class DisplayBookDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dt: window.location.search,
            urlSearchParam: new URLSearchParams(window.location.search),
            param: 0,
            books: {
                
                /* {id: 1, name: 'aaa', description: 'des1', author: 'auth1', price: 122, category: "cat1"},
                {id: 2, name: 'aaa', description: 'des2', author: 'auth2', price: 222, category: "cat2"},
                {id: 3, name: 'aaa', description: 'des3', author: 'auth3', price: 1222, category: "cat2"} */
            },
            checkedOut: false,
            checkedIn: true

        }

        //const param = (this.state.urlSearchParam).get()
        //  this.setState({ urlSearchParam: new URLSearchParams(this.state.dt) })
        this.setState({ param: this.state.urlSearchParam.get('id') })
        //urlSearchParam = new URLSearchParams(this.state.dt)
        console.log("val of id:", this.state.urlSearchParam.get('id'))
        console.log("val of param:", this.state.param)
        console.log(window.location.search)
        this.getBookId = this.getBookId.bind(this)
        this.handleSuccessResponse = this.handleSuccessResponse.bind(this)
        this.checkIn = this.checkIn.bind(this)
        this.checkOut = this.checkOut.bind(this)
        this.getBookId()
    }
    render() {

        return (
            <> 
                <div><href>Recently Visited</href></div>
                <table>
                    <tr>
                        <th>
                            <div className="bookDetails">

                                <h3 style={{ color: "Green", fontWeight: "bolder", fontSize: 30 }}>{this.state.books.name}</h3>
                                <div style={{ color: "yellow", fontWeight: "bolder", fontSize: 13 }}>{this.state.books.description}</div>
                                <div><p style={{ color: "black", fontWeight: "bolder", fontSize: 13 }}>Price:</p>{this.state.books.price} Rs.</div>
                                <div><p style={{ color: "black", fontWeight: "bolder", fontSize: 13 }}>Categoty: </p>{this.state.books.category}</div>
                                <a><p style={{ color: "black", fontWeight: "bolder", fontSize: 13 }}>Written by: </p>{this.state.books.author}</a>
                                <div><p style={{ color: "black", fontWeight: "bolder", fontSize: 13 }}>Page count: </p> <p2 style={{ color: "red", fontWeight: "bolder" }}>{this.state.books.pageCount}</p2></div>
                                <div><p style={{ color: "black", fontWeight: "bolder", fontSize: 13 }}>Published by:</p> {this.state.books.publisher}</div>

                            </div>
                        </th>
                        <th>
                            <div><p style={{ color: "black", fontWeight: "bolder", fontSize: 13 }}>About: </p> {this.state.books.about}</div>
                        </th>
                    </tr>
                </table>

                <tr>
                    <th>
                        <div><button style={{ color: "black", fontWeight: "bolder", fontSize: 13, width: "100px", backgroundColor: "green" }} onClick={e => window.location.href = `/books`}>Cancel</button></div>
                    </th>

                    {this.state.checkedOut && <th>
                        <div><button style={{ color: "black", fontWeight: "bolder", fontSize: 13, width: "100px", backgroundColor: "yellow" }} onClick={()=>this.checkIn(this.state.books)}>Check In</button></div>
                    </th>
                    }
                    {this.state.checkedIn && <th>
                        <div><button style={{ color: "black", fontWeight: "bolder", fontSize: 13, width: "100px", backgroundColor: "blue" }} onClick={()=>this.checkOut(this.state.books)}>Check Out</button></div>
                    </th>
                    }
                </tr>

            </>
        )
    }

    checkOut(bookInfo) {
        if (this.state.books.stock === 0) {
            alert("Book is out of stock")
            
        }else{
            BooksService.updateBook(-1,this.state.books)
            this.setState({ checkedOut: true })
            this.setState({ checkedIn: false })
        }
        console.log("book stock is:", this.state.books.stock)
    }
    checkIn(bookInfo) {
            BooksService.updateBook(+1,bookInfo)
            this.setState({ checkedOut: false })
            this.setState({ checkedIn: true })     
    }
    getBookId() {
        console.log("inside getBookid")
        this.setState({ param: this.state.urlSearchParam.get('id') })
        console.log(this.state.urlSearchParam.get('id'))
        BooksService.retriveBookById(this.state.urlSearchParam.get('id'))
            .then(
                response => {
                    this.setState({ books: response.data })
                }
            )
        console.log("book is:", this.state.books)
    }

    handleSuccessResponse(response) {
        this.setState({ books: response.data })
        console.log("book is:", response.data)
    }
}

export default DisplayBookDetails