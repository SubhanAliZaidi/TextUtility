// Naziya = "naziya"
import React, { useState } from 'react'
import './App.css';
import Alert from './components/Alert.js';
import Footer from './components/Footer';
import Navbar from './components/Navbar.js'
import TextUtils from './components/TextUtils.js'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"

export default function App() {

    const [zlert, setzlert] = useState(null)

    const showAlert = (message, type) => {
        setzlert({
            msg: message,
            typ: type
        })
        setTimeout(() => {

            setzlert(null)
        }, 1000);
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
            <Navbar title='NAZLOOP' aboutText='About Us' mode={enableDarkMode} />
            <Alert alert={zlert} />
            <TextUtils showAlert={showAlert} />
            <Footer />
        </>
    );
}













