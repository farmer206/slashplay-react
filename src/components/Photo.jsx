import React from "react";
// import ImageSlider from "../components/ImageSlider";
// import Slider from "./Slider";
import "./../scss/style.scss";
import SlickSlider from "./SlickSlider";

// const slides = [
//     {url: "../img/photo/client_1.jpg"},
//     {url: "../img/photo/client_2.jpg"},
//     {url: "../img/photo/client_3.jpg"},
//     {url: "../img/photo/client_4.jpg"}
// ];

const Photo = () => {
    return (
        <>
        <section className="page__photo photo">
            <div className="photo__container container">     
                {/* <Slider slides={slides}/> */}
                <SlickSlider />
                {/* <ImageSlider images={images} /> */}
            </div>
        </section>
        </>
    );
};

export default Photo;