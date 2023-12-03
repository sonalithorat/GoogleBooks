import logo from './logo.svg';
import './App.css';
import { SearchBar } from './components/SearchBar';
import React, { useState } from 'react';
import { SearchResultsList } from './components/SearchResultList';
import WelcomeComponent from './components/WelcomeComponent';
import SearchBooks from './components/SearchBooks';
import SearchResult from './components/SearchResult';
import LoginComponent from './components/LoginComponent';
import HomeComponent from './components/HomeComponent';
function App() {

  return (
    <div className="App">
      <div className='search-bar-container'>
        {/* <SearchBar></SearchBar> */}
        {/* <SearchBooks></SearchBooks> */}
         {/* <SearchResult></SearchResult> */}
        {/* <LoginComponent></LoginComponent> */}
         <HomeComponent></HomeComponent> 
      </div>
    </div>
  );
}
export default App;
