import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = (props) => {

    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/newsapp"> NewsApp </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/newsapp"> Home </Link>
                            </li>
                            <li className="nav-item d-flex gap-2">
                                {/* <Link className="nav-link" to="/about"> {aboutData} </Link> */}
                                <Link className="nav-link" to="/science"> Science </Link>
                                <Link className="nav-link" to="/business"> Business </Link>
                                <Link className="nav-link" to="/sports"> Sports </Link>
                                <Link className="nav-link" to="/health"> Health </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
