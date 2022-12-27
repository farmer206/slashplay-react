import React, { useRef, useState } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { dataSlide } from "../scripts/data";
import "./../scss/style.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";


const Slider = () => {
    return (
        <>
        <Swiper
            breakpoints={{
                0: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            }}
            modules={[Autoplay, Pagination, Navigation]}
            
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            navigation={{
                prevEl: '.slider__control.prev',
                nextEl: '.slider__control.next',
            }}
            // pagination={{
            //     clickable: true,
            // }}
            
            className="mySwiper"
        >
            { dataSlide.map( item => (
                <SwiperSlide key={item.id} className="slider__item">
                    <div className="slider__content">
                        <img
                            className="slider__content-image"
                            src={item.img}
                            alt={item.title}
                        />
                        <div className="slider__header">
                            <h2 className="slider__header_title">{item.title}</h2>
                            <p className="slider__header_text">{item.text}</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
            <div className="slider__control prev"></div>
            <div className="slider__control next"></div>
        </Swiper>
        </>
    );
};

export default Slider;