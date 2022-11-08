import React from "react";
import "./../scss/style.scss";

const Modal = ({active, setActive, children}) => {

    return (
        <>
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal__body">
                <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                    {children}
                </div>
            </div>
        </div>
        </>
    );
};

export default Modal;