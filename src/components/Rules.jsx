import React from "react";
import "./../scss/style.scss";

const Stats = () => {

    return (
        <>
        <section id="rules" className="page__rules rules">
            <div className="rules__container container">
                <div className="rules__header header-block">
                    <h2 className="header-block__title">Правила посещения клуба</h2>
                </div>
                <div className="rules__body">
                    <div className="rules__content">
                        <ul className="rules__items anim-items anim-no-hide">
                            <li className="rules__item">Посещение с 22:00 строго с 18 лет</li>
                            <li className="rules__item">Нельзя приходить с алкоголными напитками</li>
                            <li className="rules__item">Нельзя приходить со своей едой и напитками (можно приобрести внутри клуба)</li>
                            <li className="rules__item">Нельзя курить на территории клуба (сигареты, icos и др.)</li>
                            <li className="rules__item">Просим вести себя культурно и с уважением относиться друг к другу!</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default Stats;