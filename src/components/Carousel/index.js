import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import CarouselItem from '../CarouselItem'
import './index.css'

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black", borderRadius: '50%' }}
        onClick={onClick}
      />
    );
  }
  
function SamplePrevArrow(props) {
const { className, style, onClick } = props;
return (
    <div
    className={className}
    style={{ ...style, display: "block", background: "black", borderRadius: '50%'}}
    onClick={onClick}
    />
);
}

const Carousel = props => {
    
    const {carouselData} = props
  
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return(
        <div className="carousel">
            <Slider {...settings}>
                {carouselData.map(item => 
                    <CarouselItem key={item.id} data={item} />
                )}
            </Slider>
        </div> 
    )
}


export default Carousel