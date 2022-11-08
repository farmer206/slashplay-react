import React from "react";
import { Link } from "react-scroll";
import"./../scss/style.scss";

const Navbar = ({active, setActive}) => {

    // const [menuActive, setMenuActive] = useState(false);

    return (
        <>
        <nav className={active ? "menu__body active" : "menu__body"}>
            <ul className="menu__list">
                <li className="menu__item"><Link className="menu__link" to="price" smooth={true}>Price</Link></li>
                <li className="menu__item"><Link className="menu__link" to="#">Photo</Link></li>
                <li className="menu__item"><Link className="menu__link" to="rules" smooth={true}>Rules</Link></li>
                <li className="menu__item"><Link className="menu__link" to="stats" smooth={true}>Stats</Link></li>
                <li className="menu__item"><Link className="menu__link" to="location" smooth={true}>Contacts</Link></li>
            </ul>
        </nav>
        </>
    );
};

export default Navbar;