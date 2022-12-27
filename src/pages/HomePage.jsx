import React from "react";
import Header from "../components/Header";
import MainBlock from "../components/MainBlock";
import Services from "../components/Services";
import Price from "../components/Price";
import Stats from "../components/Stats";
import Rules from "../components/Rules";
import Photo from "../components/Photo";
import Location from "../components/Location";
import  "./../scss/style.scss";


const HomePage = () => {

    return (
        <>
        <Header />
        <main className="page">
            <MainBlock />
            <Services />
            <Price />
            <Stats />
            <Rules />
            <Photo />
            <Location />
        </main>
        </>
    );
};

export default HomePage;