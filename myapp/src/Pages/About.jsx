import React from 'react'
import { NavLink } from 'react-router-dom'
import Counter from '../Component/Counter'
import Fresh from '../Component/Fresh'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const NextArrow = (props) => {
    const { onClick } = props;
    return (<>
      <div className='control d-none' onClick={onClick} >
  
        <img className='bottons-control-next next-images' src='./images/send.png' />
  
  
      </div>
  
  
    </>)
  
  
  }
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (<>
      <div className='control d-none' onClick={onClick} >
  
        <img className='bottons-control-prev prev-images' src='./images/back.png' />
  
  
      </div>
  
  
    </>)
  
  
  }
const About = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay:true,
      
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    
      };
    return (
        <>
            <div className="about">
                <div className=" mt-5 py-5">
                    <Fresh />
                </div>
                {/* section 2 */}
                <div className='row w-100 bg-about  align-items-center justify-content-center py-5 px-5'>
                    <div className="col-md-4 mt-sm-4 text-white text-center">
                        <i style={{ color: '#f7b035' }} class="fa-solid fa-5x mb-3 fa-pizza-slice"></i>
                        <div className="contents">
                            <h2 className='fw-bolder '>QUALITY PRODUCTS</h2>
                            <p className='text-white-50 fs-5'>FoodMood is an international chain of family restaurants.</p>
                        </div>
                    </div>
                    <div className="col-md-4 mt-sm-4 text-center">
                        <i style={{ color: '#f7b035' }} class="fa-solid fa-truck mb-3 fa-5x"></i>
                        <div className="contents text-white ">
                            <h2 className='fw-bolder '>FAST DELIVERY</h2>
                            <p className='text-white-50 fs-5'>FoodMood is an international chain of family restaurants.</p>
                        </div>
                    </div>
                    <div className="col-md-4 mt-sm-4 text-white text-center ">
                        <div>
                            <i style={{ color: '#f7b035' }} class="fa-solid fa-utensils fa-5x mb-3"></i>

                        </div>
                        <div className="contents">
                            <h2 className='fw-bolder'>FAMILY RECIPES</h2>
                            <p className='text-white-50 fs-5'>FoodMood is an international chain of family restaurants.</p>
                        </div>
                    </div>
                </div>



                {/* section 3 */}
                <div className="container-fluid py-5">
                    <div className="row">

                        <div className="col-lg-6 col-md-12 p-5">
                            <div className="item">
                                <h3 className='fw-bold' style={{ color: "#f7b035" }}>always Fresh</h3>
                                <h1 className='text-dark fw-bolder w-75 my-3'>From Texas with American Love</h1>
                                <p className='text-black-50 fs-5 fw-bolder my-4 '>FoodMood is an international chain of fast food restaurants, which has an experience of opening more than 170 restaurants in 10 countries of the world. Thus the restaurants of the new generation had emerged in 2017.</p>
                                <NavLink to='/shops'>                                <button
                                    style={{ backgroundColor: "#f7b035", border: "none" }}
                                    className='border-none rounded-4  my-3 text-white px-4 py-2 fs-4 fw-bolder' >Order Now</button>
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-9  m-auto">
                            <div className="item">
                                <img  src="./images/pizza/about_as-02.png" className='w-100' alt="" />

                            </div>
                        </div>

                    </div>
                </div>


                {/* section 4 */}
                <div className='mt-4'>
                    <Counter />

                </div>
          {/* section5 */}
    
         <div className="facts py-5">
         <div className="container-fluid py-5 mt-5">
            <h1 className='fw-bolder fs-1 text-center'>Some Facts About Us</h1>
             <div className="row m-auto justify-content-center">
                <div className="col-lg-4 col-md-6  d-flex justify-content-center">
                    <div className="items">
                         <div className="parent-item-about">
                            <div className=" images1-about first-about">
                                <h3 className='fw-bolder p-0 m-0 text-white'>Foods Comes First</h3>

                            </div>
                            <div className="second-about">
                                <p className='text-white fw-bolder'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores rerum corrupti odio ipsam culpa, cumque officiis sed aperiam ab. Dolorem repellat omnis,</p>

                            </div>
                         </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6  d-flex justify-content-center">
                    <div className="items">
                         <div className="parent-item-about">
                            <div className=" images2-about first-about">
                                <h3 className='fw-bolder p-0 m-0 text-white'>Signature Recipes</h3>

                            </div>
                            <div className="second-about">
                                <p className='text-white fw-bolder'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores rerum corrupti odio ipsam culpa, cumque officiis sed aperiam ab. Dolorem repellat omnis,</p>

                            </div>
                         </div>
                    </div>
                </div>


                <div className="col-lg-4 col-md-6 d-flex justify-content-center">
                    <div className="items">
                         <div className="parent-item-about">
                            <div className="images3-about first-about">
                                <h3 className='fw-bolder p-0 m-0 text-white'>Dining Experience</h3>

                            </div>
                            <div className="second-about">
                                <p className='text-white fw-bolder'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores rerum corrupti odio ipsam culpa, cumque officiis sed aperiam ab. Dolorem repellat omnis,</p>

                            </div>
                         </div>
                    </div>
                </div>
             </div>

             {/* slider  */}
             <div className="sliders ">
             <Slider    {...settings}>
                <img className='w-50' src='https://res.cloudinary.com/blogins/image/upload/v1658950861/foods/partners_09_orange_nljsn4.png'/>

                <img className='w-50' src='https://res.cloudinary.com/blogins/image/upload/v1658950861/foods/partners_08_orange_gd6xl3.png'/>

                <img className='w-50' src='https://res.cloudinary.com/blogins/image/upload/v1658950860/foods/partners_02_orange_z7mk2p.png'/>
            
                <img className='w-50' src='https://res.cloudinary.com/blogins/image/upload/v1658950860/foods/partners_03_orange_kuvzyb.png'/>
                <img className='w-50' src='https://res.cloudinary.com/blogins/image/upload/v1658950860/foods/partners_05_orange_psbpov.png'/>
                <img className='w-50' src='https://res.cloudinary.com/blogins/image/upload/v1658950860/foods/partners_04_orange_oobxth.png'/>
                <img className='w-50' src='https://res.cloudinary.com/blogins/image/upload/v1658950860/foods/partners_07_orange_yw3ybz.png'/>
                <img className='w-50' src='https://res.cloudinary.com/blogins/image/upload/v1658950860/foods/partners_06_orange_jnfbus.png'/>

              </Slider>
             </div>
        
  
        </div>
    
    
         </div>







            </div>


        </>
    )
}

export default About