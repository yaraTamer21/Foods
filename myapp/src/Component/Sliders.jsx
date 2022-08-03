import React, { useEffect } from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from 'react-router-dom'
import Slider from "react-slick";
import Data from '../Data';


const NextArrow = (props) => {
  const { onClick } = props;
  return (<>
    <div className='control' onClick={onClick} >

      <img className='bottons-control-next next-images' src='./images/send.png' />


    </div>


  </>)


}
const PrevArrow = (props) => {
  const { onClick } = props;
  return (<>
    <div className='control' onClick={onClick} >

      <img className='bottons-control-prev prev-images' src='./images/back.png' />


    </div>


  </>)


}
const Sliders = () => {



  const settings = {
    dots: false,
    infinite: true,
    speed: 500,

    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,

    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    responsive: [
      
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          

          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,

          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,

          infinite: true,
          dots: false
        }
      },


    ]



  };

  const expeties = (str) => {
    if (str.length > 50) {
      str = str.substring(0, 70) + "..............."
    }
    return str

  }


  return (
    <>
      <div className="slider">
        <div className="container">
          <div className="titles">
            <h4>always quality</h4>
            <h3 className='fw-bolder'>... or Choose One of Our Perfect Burgers</h3>
          </div>


          <div className='w-100 px-md-5'>

            <Slider className=' w-100 mt-5 py-3 slid-contain' {...settings}>
              {Data.filter((i) => i.category === "Burger").map((i) => (<>
                <div className="items">
                  <div className="images">
                    <NavLink to={`/details/${i.id}`}>
                      <img className='w-100' src={i.images[0]} />
                    </NavLink>
                    <NavLink to={`/details/${i.id}`}>
                      <img className='w-100 first-images' src={i.images[1]} />
                    </NavLink>


                  </div>
                  <h2 className='text-center fw-bolder px-4'>{i.title}</h2>
                  <p className='px-4 text-muted'> {expeties(i.description)}</p>
                  <h3 className='text-center'>${i.price}</h3>
                </div>



              </>))}


            </Slider>
          </div>







        </div>



      </div>

    </>
  )
}

export default Sliders