import React from "react";
import Navbar from "./Navbar";
import { CustomLink } from "./UI/links/CustomLink";
import "../scss/style.scss";

const Header = () => {

    return (
        <>
        <header className="header lock-padding">
            <div className="header__container container">
                <CustomLink to="/" className="header__logo"><span>/</span>Play</CustomLink>
                <div className="header__menu menu">
                    <Navbar />
                </div>
            </div>
        </header>
        </>
    );
};

export default Header;