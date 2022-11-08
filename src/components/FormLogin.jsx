import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { CustomLink } from "./UI/links/CustomLink";
import InputForEmail from "../components/UI/inputs/InputForEmail";
import InputForPassword from "../components/UI/inputs/InputForPassword";
import InputCheckboxRemember from "./UI/inputs/InputCheckboxRemember";
import "../scss/style.scss";


const FormLogin = () => {
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
                    <InputCheckboxRemember />
                    <label htmlFor="formRemember" className="checkbox__label">
                        <span>Запомнить пароль на этом устройстве?</span>
                    </label>
                </div>
            </div>
            <button type="submit" className="form-block__button">
                Sign in
            </button>
            <div className="login__text">
                <CustomLink to="/register">Here you can register</CustomLink>
            </div>
        </form>
        </>
    );
};

export default FormLogin;