import { Component } from "react";
import { searchResults } from "./SearchResults";
import BooksService from "../service/BooksService";
import { FaSearch } from "react-icons/fa";
import "./SearchResults.css";
import { Link } from 'react-router-dom';
import {
    
    NavLink,
} from 'react-router-dom';
import RecentlyVisited from "./RecentyVisited";

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
        this.retriveWelcomeMessage = this.retriveWelcomeMessage.bind(this)
        this.retriveBookDetails = this.retriveBookDetails.bind(this);
    }
    componentDidMount() {
        BooksService.retriveAllBooks()
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
                // BookDetails.displayDetails(response.data) ?ProductId=" + productId;

            }
        )




    }
    getData(val) {
        this.setState({ data: val.target.value })
        this.setState({ print: false })
        this.setState({ welcomeMessage: '' })
        //setData(val.target.value)
        //setPrint(false)
        // BooksService.retriveBooks(val.target.value).then(response => handleSuccessResponse(response))
        console.log(val.target.value)

    }

    render() {
        return (
            <>
                <div className="input-wrapper">
                    <FaSearch id="search-icon" />
                    <input placeholder="Type to search" onChange={this.getData}></input>
                    <button onClick={this.retriveWelcomeMessage} >Click here</button>
                </div>
                <div className ="search-history" >
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
                    {/* <Routes>
                        <Route
                            exact
                            path="/recent"
                            element={<RecentlyVisited />}
                        />
                    </Routes> */}
                    {/* <div className="search-history"><href>Recently Visited</href></div> */}
                
                <div className="books-table">
                    <table className="table">
                        <thead>
                            <tr>
                                {/* <th>id</th> */}
                                <th>name</th>
                                <th>description</th>

                                {/*  <th>author</th>
                                <th>price</th>
                                <th>category</th> */}
                            </tr>

                        </thead>
                        <tbody>
                            {
                                this.state.books.map(
                                    book =>
                                        <tr>
                                            {/* <td>{book.id}</td> */}

                                            <td onClick={() => this.retriveBookDetails(book.id)}>{book.name}</td>
                                            <td>{book.description}</td>
                                            {/* <Link to={`/details=${bookInfo}`}>Go to My Page</Link> */}
                                            {/* <button>Click Here</button> */}
                                            {/* <td>{book.author}</td>
                                            <td>{book.price}</td>
                                            <td>{book.category}</td> */}
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