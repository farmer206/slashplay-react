import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Preloader from "./Preloader";
import Footer from "./Footer";
import UpButton from "./UI/buttons/UpButton";

const Layout = () => {
    const [preloader, setPreloader] = useState(false);

    useEffect(() => {
        setPreloader(true)
        setTimeout(() => {
            setPreloader(false)
        }, 2000)
    }, [])

    return (
        <>
        {
            preloader 
            ? (<Preloader />)       
            : (
            <div className="wrapper">
                <Outlet />
                <Footer />
                <UpButton />
            </div>
            )
        }
        </>
    );
};

export { Layout };