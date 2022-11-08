import React from "react";
import SimpleHeader from "../components/SimpleHeader";
import FormLogin from "../components/FormLogin";
import "../scss/style.scss";


const LoginPage = () => {

    return (
    <>
    <SimpleHeader />
    <section className="page__login login">
        <div className="login__container container">
            <div className="login__header header-block">
                <h2 className="header-block__title">Войти в аккаунт</h2>
                <div className="header-block__sub-title"></div>
            </div>
            <div className="login__body">
                <div className="login__content">
                    <FormLogin />
                </div>
            </div>
        </div>
    </section>
    </>
    );
};

export default LoginPage;
