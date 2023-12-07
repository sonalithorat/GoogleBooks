import { Component } from "react";
import BooksService from "../service/BooksService";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import "./SearchResults.css";
import { Link } from 'react-router-dom';
import {

    NavLink,
} from 'react-router-dom';
import RecentlyVisited from "./RecentyVisited";
import CartComponent from "./CartComponent";

class SearchResult extends Component {
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
        this.retriveBook = this.retriveBook.bind(this)
        this.retriveBookDetails = this.retriveBookDetails.bind(this);
        this.retriveAllBook = this.retriveAllBook.bind(this);
    }
    componentDidMount() {
        BooksService.retriveAllBooks()
            .then(
                response => {
                    this.setState({ books: response.data })
                }
            )

    }


    retriveBook() {
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
    retriveAllBook() {
        console.log();
        BooksService.retriveAllBooks().then(
            response => {
                this.setState({ bookInfo: response.data })
                console.log(response.data.id)
                window.location.href = `/books`;

            }
        )
    }

    getCartItems(){
        console.log();
        window.location.href = `/cart`;
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
            <div className="shopping-cart">
                    <FaShoppingCart id="cart" color="yello" onClick= {this.getCartItems}></FaShoppingCart>
                </div>
                <div className="input-wrapper">
                    <FaSearch id="search-icon" />
                    <input placeholder="Type to search" onChange={this.getData}></input>
                    <button onClick={this.retriveBook} >Click here</button>
                </div>
                
                <div className="search-history" >
                    <NavLink
                        to="/recent"
                        style={({ isActive }) => ({
                            color: isActive
                                ? "greenyellow"
                                : "blue",
                        })}
                    >
                        Recently Visited
                    </NavLink>
                </div>
                <div>
                    <NavLink onClick={() => this.retriveAllBook()}
                        to="/books"
                        style={{ color: "red" }}
                    >
                        Clear
                    </NavLink>
                </div>

                <div className="books-table">
                    <table className="table">
                        <thead>
                            <tr>
                                {/* <th>id</th> */}
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

            </>
        )
    }
}


export default SearchResult