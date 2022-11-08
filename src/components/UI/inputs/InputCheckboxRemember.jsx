import React from "react";
import "../../../scss/style.scss";

const InputCheckboxRemember = (props) => {
    return (
        <input
            className="checkbox__input"
            id="formRemember"
            type="checkbox"
            name="agreement"
            defaultChecked=""
            require=""
        />
        // <input className={classes.myInput} {...props}/>
    );
};

export default InputCheckboxRemember;