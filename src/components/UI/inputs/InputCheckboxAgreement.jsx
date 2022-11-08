import React from "react";
import "../../../scss/style.scss";

const InputCheckboxAgreement = (props) => {
    return (
        <input
            className="checkbox__input"
            id="formAgreement"
            type="checkbox"
            name="agreement"
            defaultChecked=""
            require=""
        />
        // <input className={classes.myInput} {...props}/>
    );
};

export default InputCheckboxAgreement;