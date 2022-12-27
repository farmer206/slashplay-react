import React, { useState } from "react";
import ImageClientOne from "../img/photo/client_1.jpg";
import ImageClientTwo from "../img/photo/client_2.jpg";
import ImageClientThree from "../img/photo/client_3.jpg";
import ImageClientFour from "../img/photo/client_4.jpg";
import "./../scss/style.scss";


const Slider = ({slides}) => {

    // const [pages, setPages] = useState([]);
    // const [offSet, setOffSet] = useState(0);

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevArrow = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.lenght - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
        console.log(setCurrentIndex(newIndex));
    };

    const handleNextArrow = () => {
        const isLastSlide = currentIndex === slides.lenght - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        console.log();
    };

    return (
        <div className="slider">
            <div className="slider__body">
                <div className="slider__items">
                    <div className="slider__item">
                        <div className="slider__content">
                            <img
                                className="slider__content-image"
                                src={ImageClientOne}
                                alt={"ImageClientOne"}
                            />
                            <div className="slider__header">
                                <h2 className="slider__header_title">Расслабься</h2>
                                <p className="slider__header_text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                                    dicta!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="slider__item">
                        <div className="slider__content">
                            <img
                                className="slider__content-image"
                                src={ImageClientTwo}
                                alt={"ImageClientTwo"}
                            />
                            <div className="slider__header">
                                <h2 className="slider__header_title">Участвуй в турнирах </h2>
                                    <p className="slider__header_text">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                                        dicta!
                                    </p>
                            </div>
                        </div>
                    </div>
                    <div className="slider__item">
                        <div className="slider__content">
                            <img
                                className="slider__content-image"
                                src={ImageClientThree}
                                alt={"ImageClientThree"}
                            />
                            <div className="slider__header">
                                <h2 className="slider__header_title">Получай денежные призы</h2>
                                <p className="slider__header_text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                                    dicta!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="slider__item">
                        <div className="slider__content">
                            <img
                                className="slider__content-image"
                                src={ImageClientFour}
                                alt={"ImageClientFour"}
                            />
                            <div className="slider__header">
                            <h2 className="slider__header_title">Играй вместе с друзьями</h2>
                                <p className="slider__header_text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                                    dicta!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="slider__item">
                        <div className="slider__content">
                            <img
                                className="slider__content-image"
                                src={ImageClientThree}
                                alt={"ImageClientThree"}
                            />
                            <div className="slider__header">
                            <h2 className="slider__header_title">Развивайся</h2>
                                <p className="slider__header_text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                                    dicta!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="slider__item">
                        <div className="slider__content">
                            <img
                                className="slider__content-image"
                                src={ImageClientTwo}
                                alt={"ImageClientTwo"}
                            />
                            <div className="slider__header">
                                <h2 className="slider__header_title">Общайся</h2>
                                    <p className="slider__header_text">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                                        dicta!
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={handlePrevArrow} className="slider__control prev"></button>
            <button onClick={handleNextArrow} className="slider__control next"></button>
            <ol className="slider__indicators">
                <li data-slide-to={0} />
                <li data-slide-to={1} />
                <li data-slide-to={2} />
                <li data-slide-to={3} />
                <li data-slide-to={4} />
                <li data-slide-to={5} />
            </ol>
        </div>
    );
};

export default Slider;