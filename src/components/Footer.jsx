import React from "react";
import IconTelegram from "../img/icons/footer/telegram.svg";
import IconYoutube from "../img/icons/footer/youtube.svg";
import IconVk from "../img/icons/footer/vk.svg";
import { CustomLink } from "./UI/links/CustomLink";
import "./../scss/style.scss";

const Footer = () => {

    return (
        <>
        <footer className="footer">
            <div className="footer__top">
                <div className="footer__main container">
                    <div className="footer__row">
                        <div className="footer__column">
                            <div className="footer__label">Company Info</div>
                            <nav className="footer__menu menu-footer">
                                <ul className="menu-footer__list">
                                    <li className="menu-footer__item"><CustomLink to={"#"} className="menu-footer__link">About us</CustomLink></li>
                                    <li className="menu-footer__item"><CustomLink to={"#"} className="menu-footer__link">Carrier</CustomLink></li>
                                    <li className="menu-footer__item"><CustomLink to={"#"} className="menu-footer__link">We are hiring</CustomLink></li>
                                    <li className="menu-footer__item"><CustomLink to={"#"} className="menu-footer__link">Blog</CustomLink></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="footer__column">
                            <div className="footer__label">Legal</div>
                            <nav className="footer__menu menu-footer">
                                <ul className="menu-footer__list">
                                    <li className="menu-footer__item"><CustomLink to={"#"} className="menu-footer__link">About us</CustomLink></li>
                                    <li className="menu-footer__item"><CustomLink to={"#"} className="menu-footer__link">Carrier</CustomLink></li>
                                    <li className="menu-footer__item"><CustomLink to={"#"} className="menu-footer__link">We are hiring</CustomLink></li>
                                    <li className="menu-footer__item"><CustomLink to={"#"} className="menu-footer__link">Blog</CustomLink></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="footer__column">
                            <div className="footer__label">Features</div>
                            <nav className="footer__menu menu-footer">
                                <ul className="menu-footer__list">
                                    <li className="menu-footer__item"><CustomLink to={"#"} className="menu-footer__link">Business Marketing</CustomLink></li>
                                    <li className="menu-footer__item"><CustomLink to={"#"} className="menu-footer__link">User Analytic</CustomLink></li>
                                    <li className="menu-footer__item"><CustomLink to={"#"} className="menu-footer__link">Live Chat</CustomLink></li>
                                    <li className="menu-footer__item"><CustomLink to={"#"} className="menu-footer__link">Unlimited Support</CustomLink></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="footer__column">
                            <div className="footer__label">Resourses</div>
                            <nav className="footer__menu menu-footer">
                                <ul className="menu-footer__list">
                                    <li className="menu-footer__item"><CustomLink to={"#"} className="menu-footer__link">ISO &amp; Android</CustomLink></li>
                                    <li className="menu-footer__item"><CustomLink to={"#"} className="menu-footer__link">Watch a Demo</CustomLink></li>
                                    <li className="menu-footer__item"><CustomLink to={"#"} className="menu-footer__link">Customers</CustomLink></li>
                                    <li className="menu-footer__item"><CustomLink to={"#"} className="menu-footer__link">API</CustomLink></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="footer__column">
                            <div className="footer__label">Get in Touch</div>
                            <div className="footer__contacts contacts-footer">
                                <CustomLink to={"tel:+79114073668"} className="contacts-footer__item contacts-footer__item_phone">+7(911)407-36-68</CustomLink>
                                <CustomLink to={"#"} className="contacts-footer__item contacts-footer__item_map">г.Петрозаводск, ул.Максима Горького 25, 4 этаж</CustomLink>
                                <CustomLink to={"#"} className="contacts-footer__item contacts-footer__item_email">test@test.com</CustomLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="footer__container container">
                    <div className="footer__copy">© 2022 Все права защищены</div>
                    <div className="footer__social social">
                        <CustomLink className="social__item" to={"#"}><img src={IconTelegram} alt={"IconTelegram"} /></CustomLink>
                        <CustomLink className="social__item" target="_blank" to="#"><img src={IconYoutube} alt={"IconYoutube"} /></CustomLink>
                        <CustomLink className="social__item" target="_blank" to="#"><img src={IconVk} alt={"IconVk"} /></CustomLink>
                    </div>
                </div>
            </div>
        </footer>
        </>
    );
};

export default Footer;
