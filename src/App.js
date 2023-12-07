import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import SearchBooks from './components/SearchBooks';
import LoginComponent from './components/LoginComponent';
import HomeComponent from './components/HomeComponent';

function App() {

  return (
    
    <div className="App">
      
      <div className='search-bar-container'>
         <HomeComponent></HomeComponent> 
      </div>
     
    </div>
  );
}
export default App;
