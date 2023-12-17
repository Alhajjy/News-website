import Slider from "react-slick";
import slider1 from "../assets/sliders/tourism.jpg";
import slider2 from "../assets/sliders/tourism2.jpg";
import slider3 from "../assets/sliders/tourism2.jpg";
export default function PostSlider() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div>
            <Slider {...settings}>
                <div className="image">
                    <img src={slider1} alt="i" />
                </div>
                <div className="image">
                    <img src={slider2} alt="i" />
                </div>
                <div className="image">
                    <img src={slider3} alt="i" />
                </div>
            </Slider>
        </div>
    );
}
