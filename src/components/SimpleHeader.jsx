import React from "react";
import { CustomLink } from "./UI/links/CustomLink";
import "../scss/style.scss";

const SimpleHeader = () => {

    return (
        <>
        <header className="header lock-padding">
            <div className="header__container container">
            <CustomLink to="/" className="header__logo"><span>/</span>Play</CustomLink>
                <div className="header__menu menu">
                    <nav className="menu__body">
                        <ul className="menu__list">
                            <li className="menu__item"><CustomLink className="menu__link" to="/">Home</CustomLink></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
        </>
    );
};

export default SimpleHeader;