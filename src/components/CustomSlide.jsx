import ImageClientOne from "../img/photo/client_1.jpg";
// import ImageClientTwo from "../img/photo/client_2.jpg";
// import ImageClientThree from "../img/photo/client_3.jpg";
// import ImageClientFour from "../img/photo/client_4.jpg";
import Slider from "react-slick";
import { dataSliderCardsInfo } from "../scripts/data";
import "./../scss/style.scss";


const CustomSlide = () => {
    return (
        <>
        {dataSliderCardsInfo.map((item) => {
            <div className="slider__card">
                <div className="slider__content">
                    <img
                        className="slider__content-image"
                        src={item.imageClient}
                        alt={item.title}
                    />
                    <div className="slider__header">
                        <h2 className="slider__header_title">{item.title}</h2>
                        <p className="slider__header_text">{item.text}</p>
                    </div>
                </div>
            </div>
        })}
        </>
        // <div className="slider__item">
        //     <div className="slider__content">
        //         <img
        //             className="slider__content-image"
        //             src={ImageClientOne}
        //             alt={"ImageClientOne"}
        //         />
        //         <div className="slider__header">
        //             <h2 className="slider__header_title">Расслабься</h2>
        //             <p className="slider__header_text">
        //                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
        //                 dicta!
        //             </p>
        //         </div>
        //     </div>
        // </div>
    );
};

export default CustomSlide;