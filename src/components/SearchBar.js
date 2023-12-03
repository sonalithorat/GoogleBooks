import "./SearchBar.css"
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import BooksService from "../service/BooksService";

export const SearchBar = () => {

    const [data, setData] = useState(null)
    const [print, setPrint] = useState(false)
    const[welcomeMessage, setWelcomeMessage] = useState("")
    const [input, setInput] = useState("");
   
    function getData(val) {
        setData(val.target.value)
        setPrint(false)
        BooksService.retriveBooks(val.target.value).then(response => handleSuccessResponse(response))
        console.log(val.target.value)

    }

    

    function handleSuccessResponse(response){
        setWelcomeMessage({welcomeMessage: response.data})
    }

    /* const fetchData = (value) => {
        fetch("https://jsonplaceholder.typicode.com/users")
        //fetch("http://localhost:8080/api/hi")
           // .then((response) => response.json())
          //  .then((json) => {
           //     const results = json.filter((user) => {
           //         return value && user && user.name && user.name.toLowerCase().includes(value);

          //      });
           //    console.log(results)
           // });
           .then((response) => response.text)
           .then((result) => {
             console.log(result)
           });
    };
    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    } */
    return (
        <>
            <div className="input-wrapper">
                <FaSearch id="search-icon" />
                <input placeholder="Type to search" onChange={getData}></input>
                <button onClick={() => { setPrint(true)}}>Search</button>


                {/* <input placeholder="Type to search" value={input} onChange={(e) => handleChange(e.target.value)}></input> */}
            </div>
            <div>

                {print ?
                    <h1>{data}</h1>
                    : null}
            </div>

        </>
    );
}