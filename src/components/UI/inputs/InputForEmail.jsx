import React from "react";
import "../../../scss/style.scss";

const InputForEmail = (props) => {
    return (
        <input 
            className="form-block__input"
            pattern="[A-Za-z0-9._+-]+@[A-Za-z0-9 -]+\.[a-z]{2,4}"
            title="must be a valid email address"
            id="formEmail"
            type="email"
            name="email"
            require=""
        />
        // <input className={classes.myInput} {...props}/>
    );
};

export default InputForEmail;