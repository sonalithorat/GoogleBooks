import { Component } from "react"
import React from "react";
import BooksService from "../service/BooksService";
import "./SearchResults.css";
import { NavLink } from 'react-router-dom';
class RecentlyVisited extends Component {
    constructor(props) {
        super(props);

        this.state = {
            books: [
                /* {id: 1, name: 'aaa', description: 'des1', author: 'auth1', price: 122, category: "cat1"},
                {id: 2, name: 'aaa', description: 'des2', author: 'auth2', price: 222, category: "cat2"},
                {id: 3, name: 'aaa', description: 'des3', author: 'auth3', price: 1222, category: "cat2"} */
            ],
            bookInfo: '',
            welcomeMessage: '',
            data: '',
            print: false
        }
        this.getData = this.getData.bind(this)
        this.retriveWelcomeMessage = this.retriveWelcomeMessage.bind(this)
        this.retriveBookDetails = this.retriveBookDetails.bind(this);
    }
    componentDidMount() {
        BooksService.retriveViewedBooks()
            .then(
                response => {
                    this.setState({ books: response.data })
                }
            )

    }


    retriveWelcomeMessage() {
        BooksService.retriveBooksByName(this.state.data)
            .then(
                response => {
                    this.setState({ books: response.data })
                }
            )
        this.setState({ print: true })


    }

    retriveBookDetails(id) {
        console.log(id);
        BooksService.retriveBookById(id).then(
            response => {
                this.setState({ bookInfo: response.data })
                console.log(response.data.id)
                window.location.href = `/details?id=${id}`;
            }
        )




    }
    getData(val) {
        this.setState({ data: val.target.value })
        this.setState({ print: false })
        this.setState({ welcomeMessage: '' })
        console.log(val.target.value)

    }

    render() {
        return (
            <>
                <h2>Recently Visited</h2>
                <div className="search-history">
                    <NavLink
                        to="/books"
                        style={{fontFamily: "fantasy", fontSize: 12, color: "green"}}
                    >
                        Back
                    </NavLink>
                </div>
                {/* <button style={{ color: "Green",  fontSize: 15, backgroundColor: "Yellow" }} className="search-history">back</button> */}
                <div className="books-table">

                    <table className="table">
                        <thead>
                            <tr>
                                <th>name</th>
                                <th>description</th>
                            </tr>

                        </thead>

                        <tbody>
                            {
                                this.state.books.map(
                                    book =>
                                        <tr>
                                            <td onClick={() => this.retriveBookDetails(book.id)}>{book.name}</td>
                                            <td>{book.description}</td>
                                        </tr>
                                )
                            }
                        </tbody>

                    </table>

                </div>
                <button>back</button>
            </>
        )
    }
}


export default RecentlyVisited