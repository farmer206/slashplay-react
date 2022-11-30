import React, { useState } from "react";
import { Link } from "react-scroll";
import"./../scss/style.scss";

const Navbar = () => {

    const [navbarOpen, setNavbarOpen] = useState(false);

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
    }

    const closeMenu = () => {
        setNavbarOpen(false)
    }

    return (
        <>
        <button onClick={handleToggle} className={navbarOpen ? "icon-menu active" : "icon-menu"}>
            <span></span>
        </button>
        <nav className={navbarOpen ? "menu__body active" : "menu__body"}>
            <ul className="menu__list">
                <li className="menu__item"><Link className="menu__link" to="price" smooth={true} onClick={() => closeMenu()} exact>Price</Link></li>
                <li className="menu__item"><Link className="menu__link" to="photo" smooth={true} onClick={() => closeMenu()} exact>Photo</Link></li>
                <li className="menu__item"><Link className="menu__link" to="rules" smooth={true} onClick={() => closeMenu()} exact>Rules</Link></li>
                <li className="menu__item"><Link className="menu__link" to="stats" smooth={true} onClick={() => closeMenu()} exact>Stats</Link></li>
                <li className="menu__item"><Link className="menu__link" to="location" smooth={true} onClick={() => closeMenu()} exact>Contacts</Link></li>
            </ul>
        </nav>
        </>
    );
};

export default Navbar;