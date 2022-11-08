import React from "react";
import IconUpButton from "../../../img/icons/footer/up-arrow.svg";
import { useEffect, useState } from "react";
import"../../../scss/style.scss";

const UpButton = () => {

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 300) {
            setShowButton(true);
            } else {
            setShowButton(false);
            }
        });
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <>
        {showButton && (
        <button onClick={scrollToTop} className="up-button">
            <img src={IconUpButton} alt={"IconUpButton"} />
        </button>
        )}
        </>
    );
};

export default UpButton;