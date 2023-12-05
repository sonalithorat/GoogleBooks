import axios from "axios";

class BooksService{
    retriveBooks(name){
        console.log(name);
        return axios.get(`http://localhost:8080/api/test/${name}`);
    }
    retriveBookById(id){
        console.log("inside Bookservice:",id);
        return axios.get(`http://localhost:8080/api/getBook/id/${id}`);
    }
    retriveBooksByName(name){
        console.log(name);
        return axios.get(`http://localhost:8080/api/getBook/${name}`);
    }

    retriveAllBooks(){
       
        return axios.get('http://localhost:8080/api/getAllBooks');
    }
    retriveViewedBooks(){
        return axios.get('http://localhost:8080/api/getBook/recentlyVisited');
    }
    // updateBook(id){
    //     axios.put('http://localhost:8080/api/update', data)
    //     console.log("inside Bookservice:",id);
    // }
    updateBook(stock, book) {
        console.log("stock=",book.stock);
        if(stock== -1){
            book.borrowed = true
        }else if(stock == 1){
            book.borrowed = false
        }
       
        book.stock = book.stock+stock;
        console.log("stock=",book.stock);
        //console.log('executed service')
        return axios.put('http://localhost:8080/api/update',book);
    }
}

export default new BooksService()