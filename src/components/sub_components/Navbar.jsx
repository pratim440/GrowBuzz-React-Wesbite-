import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
      <div className='container-fluid'>
    <div id='navbarContainer' className='row'>
        <nav className="mx-auto col-lg-10 col-sm-12 navbar navbar-expand-lg navbar-light pl-5 pr-5">
          <NavLink className="navbar-brand" to="/" >Grow Buzz</NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
                <li className='nav-item pr-2'><NavLink exact activeClassName='navItemActive' className="nav-link" to="/" >Home</NavLink></li>
                <li className='nav-item pr-2'><NavLink exact activeClassName='navItemActive' className="nav-link" to="/services" >Services</NavLink></li>
                <li className='nav-item pr-2'><NavLink exact activeClassName='navItemActive' className="nav-link" to="/about" >About</NavLink></li>
                <li className='nav-item pr-2'><NavLink exact activeClassName='navItemActive' className="nav-link" to="/contact" >Contact</NavLink></li>
            </ul>
          </div>
        </nav>
    </div>
    </div>
    );
};

export default Navbar;