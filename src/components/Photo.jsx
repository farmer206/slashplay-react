import React from "react";
// import Slider from "./Slider";
import "./../scss/style.scss";
import Slider from "./Slider";




const Photo = () => {
    return (
        <>
        <section className="page__photo photo">
            <div className="photo__container container">     
                <Slider />
            </div>
        </section>
        </>
    );
};

export default Photo;