import React, { useState } from "react";
import "./../scss/style.scss";

const Stats = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <>
        <section id="stats" className="page__stats stats">
            <div className="stats__container container">
                <div className="stats__header header-block">
                    <h2 className="header-block__title">Техничекие характеристики</h2>
                    <div className="header-block__sub-title"></div>
                </div>
                <div className="stats__body">
                    <div className="tabs">
                        <nav className="tabs__nav">
                            <div className={toggleState === 1 
                                ? "tabs__btn tabs__btn-active" 
                                : "tabs__btn"}
                                onClick={() => toggleTab(1)}><span>System</span>
                            </div>
                            <div className={toggleState === 2
                                ? "tabs__btn tabs__btn-active" 
                                : "tabs__btn"}
                                onClick={() => toggleTab(2)}><span>Периферия</span>
                            </div>
                            <div className={toggleState === 3
                                ? "tabs__btn tabs__btn-active" 
                                : "tabs__btn"}
                                onClick={() => toggleTab(3)}><span>VIP ПК</span>
                            </div>
                        </nav>
                        <div className="tabs__body">
                            <div className={toggleState === 1
                                ? "tabs__pane tabs__pane-show"
                                : "tabs__pane"
                                }>
                                <div className="tabs__content">
                                    <ul className="tabs__list">
                                        <li className="tabs__list-item"><span>OS:</span> Windows 10</li>
                                        <li className="tabs__list-item"><span>Processor:</span> Intel Core i5-9400F</li>
                                        <li className="tabs__list-item"><span>Memory:</span> 16 GB RAM</li>
                                        <li className="tabs__list-item"><span>Graphics:</span> NVIDEA RTX 2070</li>
                                        <li className="tabs__list-item"><span>DirectX:</span> Version 12</li>
                                        <li className="tabs__list-item"><span>(SSD)</span> Твердотелые диски</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={toggleState === 2
                                ? "tabs__pane tabs__pane-show"
                                : "tabs__pane"
                                }>
                            <div className="tabs__content">
                                <ul className="tabs__list">
                                    <li className="tabs__list-item"><span>Клавиатура:</span> Logitach G413</li>
                                    <li className="tabs__list-item"><span>Наушники:</span> HYPERX CLOUD 1, 2</li>
                                    <li className="tabs__list-item"><span>Мышь:</span> Logitach G403 HERO</li>
                                    <li className="tabs__list-item"><span>Монитор:</span> SAMSUNG 27` 144 ГЦ 2К</li>
                                    <li className="tabs__list-item"><span>Крела:</span> AOS 24` &amp; DX-RACER</li>
                                </ul>
                            </div>
                        </div>
                        <div className={toggleState === 3
                                ? "tabs__pane tabs__pane-show"
                                : "tabs__pane"
                                }>
                            <div className="tabs__content">
                                <ul className="tabs__list">
                                    <li className="tabs__list-item"><span>Клавиатура:</span> Logitach</li>
                                    <li className="tabs__list-item"><span>Наушники:</span> HYPERX CLOUD</li>
                                    <li className="tabs__list-item"><span>Мышь:</span> Logitach G403 HERO</li>
                                    <li className="tabs__list-item"><span>Монитор:</span> AOC</li>
                                    <li className="tabs__list-item"><span>Крела:</span> DX-RACER</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="stats__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quis
                        perspiciatis iste ipsum ullam recusandae totam et expedita illum
                        suscipit sed corrupti commodi id optio eius, soluta, pariatur esse enim
                        tempore, distinctio cumque doloremque fuga. Delectus iure facere
                        inventore sapiente.
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default Stats;