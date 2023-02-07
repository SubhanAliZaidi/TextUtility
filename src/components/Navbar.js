// Naziya = "naziya"
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Navbar(props) {

    return (
        <>
            <nav className = "navbar navbar-expand-lg navbar-dark backdark">
                <div className = "container-fluid">
                    <a className = "navbar-brand titlecss" href = "/">{props.title}</a>
                    <button className = "navbar-toggler" type="button" data-bs-toggle = "collapse" data-bs-target = "#navbarSupportedContent" aria-controls = "navbarSupportedContent" aria-expanded = "false" aria-label = "Toggle navigation">
                        <span className = "navbar-toggler-icon"></span>
                    </button>
                    <div className = "collapse navbar-collapse backdark" id="navbarSupportedContent">
                        <ul className = "navbar-nav me-auto mb-2 mb-lg-0">
                            <li className = "nav-item">
                                <Link className = "navbarcss backdark mx-3" aria-current = "page" to = "/">Home</Link>
                            </li>
                            <li className = "nav-item">
                                <Link className = "navbarcss backdark mx-2" aria-current = "page" to = "/About">{props.aboutText}</Link>
                            </li>
                        </ul>
                        <div className="form-check form-switch mx-3" onClick={props.mode}>
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Light</label>
                        </div>
                        <form className = "d-flex" role = "search">
                            <input className = "form-control me-2" type = "search" placeholder = "Search" aria-label = "Search" />
                            <button className = "btn btn-primary" type = "submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

Navbar.propTypes = {
    title: PropTypes.string,
    aboutText: PropTypes.string,
}

Navbar.defaultProps = {
    title: "Set Title Here",
    aboutText: "Set About Here",
}

export default Navbar




















