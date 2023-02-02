// Naziya = "naziya"
import React from 'react'
import './App.css';
import Navbar from './components/Navbar.js'
import TextUtils from './components/TextUtils.js'

export default function App() {
  return (
    <div className="App">
        <Navbar title='TextUtility' aboutText='About Us'/>
        <TextUtils/>
    </div>
  );
}


