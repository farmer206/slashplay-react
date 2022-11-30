import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import { dataSliderCardsInfo } from "../scripts/data";
import CustomSlide from "./CustomSlide";
// import ImageClientOne from "../img/photo/client_1.jpg";
// import ImageClientTwo from "../img/photo/client_2.jpg";
// import ImageClientThree from "../img/photo/client_3.jpg";
// import ImageClientFour from "../img/photo/client_4.jpg";
import "./../scss/style.scss";

const SlickSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <Slider {...settings}>
            <CustomSlide index={1} />
            <CustomSlide index={2} />
            <CustomSlide index={3} />
            <CustomSlide index={4} />
            <CustomSlide index={5} />
            <CustomSlide index={6} />
        </Slider>
    );
};

export default SlickSlider;