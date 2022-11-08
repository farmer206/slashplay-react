import React from "react";
import IconLocation from "../img/icons/location/location.svg"
import IconPhone from "../img/icons/location/phone.svg"
import IconHours from "../img/icons/location/24-hours.svg"
import { CustomLink } from "./UI/links/CustomLink";
import "./../scss/style.scss";


const Location = () => {

    return (
        <>
        <section id="location" className="page__location location">
            <div className="location__container container">
                <div className="location__body">
                    <div className="location__video">
                        <iframe
                            src="https://www.youtube.com/embed/-hpqazdTOP4"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen=""
                            width={560}
                            height={315}
                            frameBorder={0}
                        />
                    </div>
                    <div className="location__content">
                        <h2 className="location__title">Мы ждем вас!</h2>
                        <div className="location__text">
                            Здесь вы можете оторваться по полной
                        </div>
                        <div className="location__items">
                            <div className="location__item item-location">
                                <div className="item-location__icon">
                                    <img src={IconLocation} alt={"IconLocation"} />
                                </div>
                                <div className="item-location__body">
                                    <div className="item-location__title">Адрес: </div>
                                    <div className="item-location__text">
                                        <CustomLink target="_blank" to="#">г.Петрозаводск, ул.Максима Горького 25, 4 этаж</CustomLink>
                                    </div>
                                </div>
                            </div>
                            <div className="location__item item-location">
                                <div className="item-location__icon">
                                    <img src={IconPhone} alt={"IconPhone"} />
                                </div>
                                <div className="item-location__body">
                                    <div className="item-location__title">Телефон: </div>
                                    <div className="item-location__text">
                                        <CustomLink to="#">+7(911)407-36-68</CustomLink>
                                    </div>
                                </div>
                            </div>
                            <div className="location__item item-location">
                                <div className="item-location__icon">
                                    <img src={IconHours} alt={"IconHours"} />
                                </div>
                                <div className="item-location__body">
                                    <div className="item-location__title">Часы работы: </div>
                                    <div className="item-location__text">Работатем круглосуточно</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default Location;
