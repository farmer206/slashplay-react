import React, { useState } from "react";
import Navbar from "./Navbar";
import { CustomLink } from "./UI/links/CustomLink";
import "../scss/style.scss";

const Header = () => {

    const [menuActive, setMenuActive] = useState(false);

    function handleClick() {
        setMenuActive(!menuActive);
    }

    return (
        <>
        <header className="header lock-padding">
            <div className="header__container container">
                <CustomLink to="/" className="header__logo"><span>/</span>Play</CustomLink>
                <div className="header__menu menu">
                    <Navbar active={menuActive} setActive={setMenuActive} />
                    <div className="header__button">
                        <CustomLink
                            to="/login" className="button button-login">
                            <span></span>
                        </CustomLink>
                        <button onClick={handleClick} className="icon-menu">
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
        </>
    );
};

export default Header;