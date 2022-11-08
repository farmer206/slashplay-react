import React from "react";
import IconsWiFi from "../img/main/icons/wi-fi.svg";
import IconsPcGames from "../img/main/icons/pc-games.svg";
import IconsDrink from "../img/main/icons/drink.svg";
import IconsPresonal from "../img/main/icons/personal.svg";
import "./../scss/style.scss";

const Services = () => {

    return (
        <>
        <section className="page__services services">
            <div className="services__container container">
                <div className="services__body anim-items anim-no-hide">
                    <div className="services__column anim-show-top">
                        <div className="services__item item-service">
                            <div className="item-service__icon">
                                <img src={IconsWiFi} alt={"IconsWiFi"} />
                            </div>
                            <h3 className="item-service__title">Wi-fi</h3>
                            <div className="item-service__text">
                                1 Gbit<br />Скорость интернета
                            </div>
                        </div>
                    </div>
                    <div className="services__column anim-show-top">
                        <div className="services__item item-service">
                            <div className="item-service__icon">
                                <img src={IconsPcGames} alt={"IconsPcGames"} />
                            </div>
                            <h3 className="item-service__title">Игры</h3>
                            <div className="item-service__text">
                                Мощные ПК и большое количество игр
                            </div>
                        </div>
                    </div>
                    <div className="services__column anim-show-top">
                        <div className="services__item item-service">
                            <div className="item-service__icon">
                                <img src={IconsDrink} alt={"IconsDrink"} />
                            </div>
                            <h3 className="item-service__title">Напитки</h3>
                            <div className="item-service__text">
                                Обширный список напитков и закусок по доступным ценам
                            </div>
                        </div>
                    </div>
                    <div className="services__column anim-show-top">
                        <div className="services__item item-service">
                            <div className="item-service__icon">
                                <img src={IconsPresonal} alt={"IconsPresonal"} />
                            </div>
                            <h3 className="item-service__title">Админы</h3>
                            <div className="item-service__text">
                                Всегда готовы прийти к вам на помощь
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default Services;