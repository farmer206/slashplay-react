import React from "react";
import SimpleHeader from "../components/SimpleHeader";
import FormRegister from "../components/FormRegister";
import "../scss/style.scss";


const Register = () => {

    return (
    <>
    <SimpleHeader />
    <section className="page__register register">
        <div className="register__container container">
            <div className="register__header header-block">
                <h2 className="header-block__title">Регистрация</h2>
                <div className="header-block__sub-title"></div>
            </div>
            <div className="register__body">
                <div className="register__content">
                    <FormRegister />
                </div>
            </div>
        </div>
    </section>
    </>
    );
};

export default Register;