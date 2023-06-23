// Naziya = 'naziya'
import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert.js';
import Footer from './components/Footer';
import Navbar from './components/Navbar.js';
import About from './components/About.js';
import TextUtils from './components/TextUtils.js';
import {
    BrowserRouter as Router,
    Routes, Route
} from "react-router-dom";

export default function App() {

    const [zlert, setzlert] = useState(null)

    const showAlert = (message, type,timing) => {
        setzlert({
            msg: message,
            typ: type
        })
        setTimeout(() => {
            setzlert(null)
        }, timing);
    }

    const enableDarkMode = () => {
        let r = document.querySelector(':root')
        let rs = getComputedStyle(document.body)
        if (rs.getPropertyValue('--bg-color') === 'white') {
            r.style.setProperty('--bg-color', '#212529')
            r.style.setProperty('--fg-color', 'white')
        } else {
            r.style.setProperty('--bg-color', 'white')
            r.style.setProperty('--fg-color', 'black')
        }
    }

    return (
        <>
            <Router>
                <Navbar title='NAZLOOP' aboutText='About Me' mode={enableDarkMode} />
                <Alert alert={zlert} />
                <Routes>
                    <Route path='/' element={<TextUtils showAlert={showAlert} />} />
                    <Route path='/About' element={<About />} />
                </Routes>
                <Footer />
            </Router>
            {/* <About /> */}
            {/* <TextUtils showAlert={showAlert} /> */}
        </>
    );
}













