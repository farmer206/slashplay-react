import React from "react";
import { CustomLink } from "./UI/links/CustomLink";
import IconTime from "../img/icons/price/time.svg";
import IconNight from "../img/icons/price/night.svg";
import IconBox from "../img/icons/price/box.svg";
import IconSale from "../img/icons/price/sale.svg";
import "./../scss/style.scss";

const Price = () => {

    return (
        <>
        <section id="price" className="page__price price">
            <div className="price__container container">
                <div className="price__content">
                    <div className="price__header header-block anim-items anim-no-hide">
                        <h2 className="price__title anim-show-left">Стоимость аренды</h2>
                    </div>
                    <div className="price__text anim-items anim-no-hide">
                        <p className="anim-show-left">
                            Здесь ты сможешь прикоснуться к закрытому и уникальному сообществу
                            единомышленников, где тебя ждёт океан эмоций, огромное количество
                            новых знакомств, ценные призы, приглашения на закрытые мероприятия и
                            скидки. Ты станешь одним из вдохновителей и творцов киберспорта в
                            России!
                        </p>
                    </div>
                    <div className="price__button anim-items anim-no-hide">
                        <CustomLink className="btn btn__transparent anim-show-left" to="/price-page">Price list</CustomLink>
                    </div>
                </div>
                <div className="price__table">
                    <div className="price__row">
                        <div className="price__cell">
                            <div className="price__item item-price">
                                <div className="item-price__icon">
                                    <img src={IconTime} alt={"IconTime"} />
                                </div>
                                <h3 className="item-price__title">Час</h3>
                                <div className="item-price__text">60-80 рублей</div>
                            </div>
                        </div>
                        <div className="price__cell">
                            <div className="price__item item-price">
                                <div className="item-price__icon">
                                    <img src={IconNight} alt={"IconNight"} />
                                </div>
                                <h3 className="item-price__title">Ночь</h3>
                                <div className="item-price__text">299-399 рублей</div>
                            </div>
                        </div>
                    </div>
                    <div className="price__row">
                        <div className="price__cell">
                            <div className="price__item item-price">
                                <div className="item-price__icon">
                                    <img src={IconBox} alt={"IconBox"} />
                                </div>
                                <h3 className="item-price__title">Пакетные предложения</h3>
                                <div className="item-price__text">от 100 рублей</div>
                            </div>
                        </div>
                        <div className="price__cell">
                            <div className="price__item item-price">
                                <div className="item-price__icon">
                                    <img src={IconSale} alt={"IconSale"} />
                                </div>
                                <h3 className="item-price__title">Скидки и бонусы</h3>
                                <div className="item-price__text">постоянным клиентам</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default Price;