import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import mainPicture from "../img/main/main_dark.jpg";
import IconClose from "../img/icons/popup/close.svg";
import Modal from "./Modal";
import "./../scss/style.scss";


const MainBlock = () => {
    const [modalActive, setModalActive] = useState(false);
    return (
        <>
        <Modal active={modalActive} setActive={setModalActive}>
            <button onClick={() => setModalActive(false)} className="modal__close close-modal">
                <img src={IconClose} alt={"IconClose"} />
            </button>
            <div className="modal__tel">
                <Link to="tel:+79114073668" className="modal__tel">+7(911)407-36-68</Link>
            </div>
            <div className="modal__title">Забронировать ПК</div>
        </Modal>
        <section className="page__main-block main-block">
            <div className="main-block__container container">
                <div className="main-block__body">
                    <h1 className="main-block__title">Добро пожаловать!</h1>
                    <div className="main-block__text">
                        Нажми на кнопку <span>START</span>, если хочешь начать игру.
                    </div>
                    <div className="main-block__buttons">
                        <button onClick={() => setModalActive(true)} className="main-block__button main-block__button-start">START</button>
                        <button className="main-block__button main-block__button-more">Learn more</button>
                    </div>
                </div>
            </div>
            <div className="main-block__image ibg">
                <img src={mainPicture} alt={"mainPicture"} />
            </div>
        </section>
        </>
    );
};

export default MainBlock;