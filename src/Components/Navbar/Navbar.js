import React from 'react'
import './navbar.css'
import { NavLink } from 'react-router-dom';
import Google from '../Google/Google'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-mainbg">
            <NavLink className="navbar-brand navbar-logo" to="/" exact>
                Web Solutions
            </NavLink>


            <button className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toogle navigation">

                <i className="fas fa-bars text-white"> </i>
            </button>

            <div className="collape navbar-collapse"
                id="navbarSupportContent">
                <ul className="navbar-nav ml-auto">
                    <div className="hori-selector">
                        <div className="left"></div>
                        <div className="right"></div>
                    </div>


                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/" exact>
                            <i className="fas fa-tachometer-alt"></i>Home
                        </NavLink>
                    </li>

              
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/services" exact>
                            <i className="far fa-address-book"></i>Books
                        </NavLink>
                    </li>


                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/editor" exact>
                            <i className="far fa-address-book"></i>Editor
                        </NavLink>
                    </li>

                    {/* <li className="nav-item active">
                        <NavLink className="nav-link" to="/about" exact>
                            <i className="far fa-address-book"></i>Course
                        </NavLink>
                    </li> */}

                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/contact" exact>
                            <i className="fasfa-tachometer-alt"></i>Contact us
                        </NavLink>
                    </li>


                    <li className="nav-item active">
                      <Google />
                    </li>

                </ul>
            </div>
        </nav>

    )
}

export default Navbar;