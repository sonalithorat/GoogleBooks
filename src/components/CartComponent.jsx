import { Component } from "react";
import BooksService from "../service/BooksService";

class CartComponent extends Component {
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
       
       
        this.retriveBookDetails = this.retriveBookDetails.bind(this);
        
    }
    componentDidMount() {
        BooksService.retriveCartBooks()
            .then(
                response => {
                    this.setState({ books: response.data })
                }
            )

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
    render() {
        return (
            <>
            <div>
                        <div><button style={{ color: "black", fontWeight: "bolder", fontSize: 13, width: "100px", backgroundColor: "green" }}  onClick={e => window.location.href = `/books`}>Back</button></div>
                    </div>
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

            </>
        )
    }
}
export default CartComponent;