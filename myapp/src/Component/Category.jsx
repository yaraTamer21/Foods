import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Change } from '../Redux/Action'

const Category = () => {
    let dispatch=useDispatch()
    let data= useSelector((x)=>x.Handleshops)
const display=(x)=>{
    dispatch(Change(x))
  

}

    return (
        <>
            <div className="category ">
                <div className="container-fluid ">
                <div className="row category-row   ">
                    <div className="col-md-6 col-lg-4 d-flex justify-content-center align-items-center">
                        <div className="item ">
                            <img src="./images/info-img-1.png" className='w-100' alt="" />
                            <NavLink className='text-dark' to='/shops'>
                            <h1 onClick={()=>display("Burger")} className='fitst-link text-center fw-bolder   p-2'>HumBurGers</h1>

                            </NavLink>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 d-flex justify-content-center  align-items-center">
                        <div className="item ">
                            <img src="./images/info-img-2.png" className='w-100' alt="" />
                            <NavLink  className='text-dark' to='/shops'>
                            <h1  onClick={()=>display("Pizza")} className='fitst-link text-center fw-bolder  p-2'>Craft Pizza</h1>

                            </NavLink>
                        </div>
                    </div>
                    <div className="col-md-5 col-lg-4 m-auto d-flex justify-content-center   align-items-center">
                        <div className="item ">
                            <img src="./images/info-img-3.png" className='w-100' alt="" />
                            <h1 className='fitst-link text-center fw-bolder  p-2'>Yummy Donuts</h1>
                        </div>
                    </div>
                </div>
                </div>
                
            </div>
        </>
    )
}

export default Category