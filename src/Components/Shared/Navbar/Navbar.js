import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
             <nav className="navbar navbar-expand-lg navbar-light bg-light">

<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
</button>

<div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
        <li className="nav-item active">
            <Link className='nav-link ms-5' to="/home">Home</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link ms-5" to="/portfolio">Our Portfolio</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link ms-5" to="/Our Team">Our Team</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link ms-5" to="/admin">Admin </Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link ms-5 " to="/contact ">Contact Us</Link>
        </li>
        <button className="btn btn-outline-success ms-5" type="submit">Login</button>
    </ul>
</div>
</nav>
        </div>
    );
};

export default Navbar;