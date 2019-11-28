import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
                <div className="container text-primary" >
                    <Link className="navbar-brand" to="/">
                        <i className="material-icons">
                             </i> T8KIT
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">

                            <li className="nav-item">
                                <Link to="/SingIn" className="nav-link">Ingresar</Link>
                            </li>
                            <li className="nav-item clsx(classes.rightLink, classes.linkSecondary) ">
                                <Link to="/SingUp" className="nav-link">Registrate</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}