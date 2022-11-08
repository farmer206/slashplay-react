import React from "react";
import SimpleHeader from "../components/SimpleHeader";
import { CustomLink } from "../components/UI/links/CustomLink";
import "../scss/style.scss";

const NotFoundPage = () => {
    return (
        <>
        <SimpleHeader />
        <main className="page">
            <section className="page__non-existent">
                <div className="non-existent__container container">
                    <h1 className="header-block__title">Вы перешли на несуществующую страницу!</h1>
                    <div className="header-block__text">Вы можете <CustomLink to="/">нажать здесь</CustomLink>, чтобы прейти на главную</div>
                </div>
            </section>
        </main>
        </>
    );
};

export default NotFoundPage;