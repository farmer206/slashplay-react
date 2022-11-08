import React from "react";
import"./../scss/style.scss";

const Preloader = () => {

    return (
        <>
        <div id='preload' className="preloader">
            <div className="preloader__ring"></div>
            <span className="preloader__text">Loading...</span>
        </div>
        </>
    );
};
    
export default Preloader;