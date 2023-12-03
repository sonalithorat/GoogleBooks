import React from "react";
import { Component } from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LoginComponent from "./LoginComponent";
import WelcomeComponent from "./WelcomeComponent"; 
import SearchResult from "./SearchResult";
import DisplayBookDetails from "./DisplayBookDetails";
import RecentlyVisited from "./RecentyVisited";
class HomeComponent extends Component{
  
    render() {
        return (
            <div>
                <Router>
                    <Routes>
                        <Route path="/" element={<LoginComponent />} />
                        <Route path="/login" element={<LoginComponent />} />
                        <Route path="/welcome" element={<WelcomeComponent />} />
                        <Route path="/books" element={<SearchResult />} />
                        <Route path="/details" element={<DisplayBookDetails />} />
                        <Route path="/recent" element={<RecentlyVisited />} />
                    </Routes>
                </Router>
            </div>
        )
    }
}

export default HomeComponent 