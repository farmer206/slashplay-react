import React from "react";
import "../../../scss/style.scss";

const InputForPassword = (props) => {
    return (
        <input 
            className="form-block__input"
            title="Must be at least 8 characters"
            pattern="[a-zA-Z0-9]{8,}"
            minLength={8}
            maxLength={32}
            id="formPass"
            type="password"
            name="password"
            require=""
        />
        // <input className={classes.myInput} {...props}/>
    );
};

export default InputForPassword;