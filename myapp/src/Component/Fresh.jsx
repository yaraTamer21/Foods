import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Fresh = () => {
    AOS.init({
        duration: 2000,
        once: false
       
    });

    return (
        <>
            <div className="fresh py-5">
                <div className="container">
                    <div className="row">
                        <div className=" col-lg-6 col-md-12">
                            <div className="item position-relative">
                                <img data-aos="zoom-in"  src="./images/portfolio_single_01-3-removebg-preview.png" className='w-100' alt="" />
                                <div  className='fresh-img'>
                                    <img src="./images/image_layers_1-3.png" className='w-100' alt="" />
                                </div>
                            </div>
                        </div>
                        <div className=" col-lg-6 col-md-12 p-5">
                            <div className="item">
                                <h3 className='fw-bold' style={{color:"#f7b035"}}>always Fresh</h3>
                                <h1 className='text-dark'>From Texas with American Love</h1>
                                <p className='text-muted fs-4'>FoodMood is an international chain of fast food restaurants, which has an experience of opening more than 170 restaurants in 10 countries of the world. Thus the restaurants of the new generation had emerged in 2017.</p>
                                <button >Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Fresh