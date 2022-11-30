import React from "react";
import { CustomLink } from "./UI/links/CustomLink";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import InputForEmail from "../components/UI/inputs/InputForEmail";
import InputForPassword from "../components/UI/inputs/InputForPassword";
import InputCheckboxAgreement from "./UI/inputs/InputCheckboxAgreement";
import "../scss/style.scss";


const FormRegister = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {signin} = useAuth();

    const fromPage = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const user = form.username.value;

        signin(user, () => navigate(fromPage, {replace: true}));
    }

    return (
        <>
        <form
            onSubmit={handleSubmit}
            id="form"
            className="form-block__body"
            >
            <div className="form-block__item">
                <label htmlFor="formEmail" className="form-block__label">E-mail</label>
                <InputForEmail/>
            </div>
            <div className="form-block__item">
                <label htmlFor="formPass" className="form-block__label">Пароль</label>
                <InputForPassword />
                <p className="input-hint">Must be at 8 characters</p>
            </div>
            <div className="form-block__item">
                <div className="checkbox">
                    <InputCheckboxAgreement />
                    <label htmlFor="formAgreement" className="checkbox__label">
                        <span>
                            Я даю свое согласие на обработку персональных данных в
                            соответствии с<CustomLink to="#"> Условиями</CustomLink>
                        </span>
                    </label>
                </div>
            </div>
            <button type="submit" className="form-block__button">
                Send
            </button>
            <div className="register__text">
                <CustomLink to="/login">Is there already an account?</CustomLink>
            </div>
        </form>
        </>
    );
};

export default FormRegister;