import React, { useState } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import Magnifier from 'react-magnifier';

import Data from '../Data'
import { useDispatch, useSelector } from 'react-redux';
import { AddTOCart } from '../Redux/Action';
import { toast } from 'react-toastify';


const Details = () => {
  const [num, setnum] = useState(0)
  const [qty, setqty] = useState(1)
  let dispatch = useDispatch()

  let informations = useSelector((x) => x.HandleCart)
  const { id } = useParams()
  let products = Data.filter((i) => i.id == id)
  let product = products[0]
  const related = Data.filter((i) => i.category == product.category)
  let posts = related.filter((i) => i.id !== product.id)



  const expeties = (str) => {
    if (str.length > 50) {
      str = str.substring(0, 70) + "..............."
    }
    return str

  }
  const sendData = (x) => {
    const data = { ...x, qty: qty }
   if (qty ==0) {
    toast.error("pleas select your  quantity ")
   }
   else{
    dispatch(AddTOCart(data))
    toast.success("product Added in Cart  :)")
   }

  }
  console.log(informations)

  const changeQty = (x) => {
    if (x === "add") {
      setqty(qty + 1)
    }
    if (x === "minus") {
      if (qty === 0) {
        setqty(0)
      }
      else {
        setqty(qty - 1)
      }
    }

  }

  return (
    <>
      <div className="Details py-5 mt-5">
        <div className="container-fluid py-5 mt-5">
          <div className="row  w-100">
            <div className="col-lg-6 col-md-12">
              <div className="items images-details">
                <Magnifier src={product.images[num]} width={"100%"} />

                <div className="childes mt-3  ">
                  <div className="row">
                    {product.images.map((i, index) => <>
                      <div className="col-3">
                        <img onClick={() => setnum(index)} src={i} className="w-100" />
                      </div>
                    </>)}
                  </div>
                </div>


              </div>
            </div>
            <div className=" d-flex flex-column justify-content-center col-lg-6 col-md-12 ps-5 py-4">
              <h1>{product.title}</h1>
              <p>£ {product.price}</p>
              <p className='text-muted fs-4 fw-light'>{product.description} </p>
              <hr />
              <ul>
                <li><b>Portion Size</b> – 400 g</li>
                <li><b>Calories:</b> 650 kj </li>
                <li><b>Availability in Food Mood</b></li>
              </ul>
              <hr />


              <div className="row align-items-center mt-4">
                <div className=" col-4 col-lg-3 col-md-4  col-sm-4">
                  <div className="count px-3">
                    <i onClick={() => changeQty("minus")} class="fa fa-minus" aria-hidden="true"></i>

                    <span>{qty}</span>
                    <i onClick={() => changeQty("add")} class="fa fa-plus" aria-hidden="true"></i>

                  </div>


                </div>
                <div className=" col-8 col-md-6   col-sm-8">

                  <button onClick={() => sendData(product)}>ADD TO CART</button>
                </div>
              </div>
            </div>
          </div>

          <div className="relatedpsts py-5 mt-5 text-center">
            <h1 >
              Related Posts
            </h1>
            <div className="row">
              {posts.map((i) => <>
                <div className="col-lg-6 col-xl-4  mt-4 mt-sm-5 col-md-6 mt-md-5">
                  <div className="itemss mb-4  px-4">
                    <div className="imagess text-center m-auto">
                      <NavLink to={`/details/${i.id}`}>
                        <img className='w-100' src={i.images[0]} />
                      </NavLink>
                      <NavLink to={`/details/${i.id}`}>
                        <img className='w-100 first-images' src={i.images[1]} />
                      </NavLink>


                    </div>
                    <h2 className='text-center fw-bolder mt-xs-3 mt-sm-3 mt-md-3 px-4 mt-3'>{i.title}</h2>
                    <p className='px-4 fs-5 text-muted'> {expeties(i.description)}</p>
                    <h3 className='text-center'>${i.price}</h3>

                    <h2 onClick={()=>dispatch(AddTOCart({...i,qty:1}))} className='fitst-link details-cart'>Add To Cart</h2>

                  </div>

                </div>


              </>)}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Details