import './reactCarusel.css';
import Slider from "react-slick";

// import images
import img from '../../images/carusel/img.png';

// fake data
const data  = [
    {
        id: 1,
        img: img,
        nomi: "Kelin gul",
        price: "200 000 so'm",
        discount: "175 000 so'm"
    },
    {
        id: 2,
        img: img,
        nomi: "Kelin gul",
        price: "200 000 so'm",
        discount: "175 000 so'm"
    },
    {
        id: 3,
        img: img,
        nomi: "Kelin gul",
        price: "200 000 so'm",
        discount: "175 000 so'm"
    },
    {
        id: 4,
        img: img,
        nomi: "Kelin gul",
        price: "200 000 so'm",
        discount: "175 000 so'm"
    },
]

const ReactCarusel = () => {

    // carusel nastroyka
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1
      };

  return (
    <div className='container carusel-me'>
         <Slider {...settings}>
            {
                data.map(item=>(
                    <div className="carusel-slide" key={item.id}>
                        <div className="carusel-img">
                            <img src={item.img} alt={item.nomi} />
                        </div>
                    </div>
                ))
            }
         </Slider>
    </div>
  )
}

export default ReactCarusel;