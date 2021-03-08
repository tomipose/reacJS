import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand text-white" href=",">E-commerce</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link active text-white" aria-current="page" href=",">Inicio</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-white" href=",">Productos</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-white" href=",">Nosotros</a>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
            </div>
        )
    }
}

export default NavBar;