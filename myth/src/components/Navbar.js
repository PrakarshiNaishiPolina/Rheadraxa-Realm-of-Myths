import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar(){
    return(
    <nav className="navbar">
        <h2 className="title">Rhaedraxa</h2>
        <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/gods">Gods</Link>
            <Link to="/heroes">Heroes</Link>
            <Link to="/monsters">Monsters</Link>
        </div>
    </nav>
    );
}

export default Navbar;
