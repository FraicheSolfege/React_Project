import React from 'react';
import '../index.css';

function Nav(){
    return (
        <nav><div className="nav-content"><div className = "logo"><a href="index.html">Movies Blah Blah</a></div></div><label htmlFor="check" className ="checkbox"><i className="ri-menu-line"></i></label><input type="checkbox" name="check" id="check" /><ul><li><a href='#'>About</a></li>
        <li><a href='#'>Coming Soon</a></li>
        <li><a href='#'>Playing Now</a></li>
        <li><a href='#'>Search</a></li>
        <li><a href='#'>Contact Us</a></li></ul></nav>
    )
}

export default Nav