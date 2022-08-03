import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PaypalBtns from '../Component/PaypalBtns'
import { AddTOCart, RemoveCart } from '../Redux/Action'

const Cart = () => {
    const [price, setprice] = useState(0)
    const data = useSelector((x) => x.HandleCart)
    const dispatch = useDispatch()

    useEffect(() => {
        GetPrice()
    }, [data])

    const GetPrice = () => {
        let total = 0
        data.map((i) => {
            total += i.price * i.qty
        })
        setprice(total)
    }

    const increase = (x) => {
        dispatch(AddTOCart(x))



    }

    const decrease = (x) => {
        dispatch(RemoveCart(x))
        console.log(x)

    }
    return (
        <>
            <div className="cart py-5 mt-5">
                <div className="container-fluid px-lg-5 py-5 mt-5">
                    {data.length > 0 ? <div className="row  ">
                        <div className="col-md-8">
                            <div className="row mb-3 bg-dark text-white border rounded-5 py-2 px-3  justify-content-center align-items-center">
                                <div className="col-6">
                                    <h2>Products</h2>
                                </div>
                                <div className="col-6 text-center">
                                    <div className="row ">
                                        <div className="col-4">
                                            <h2>Price</h2>
                                        </div>
                                        <div className="col-4">
                                            <h2> Qty</h2>

                                        </div>
                                        <div className="col-4">
                                            <h2>Total</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row ">
                                {data.map((i) => <>
                                    <div className="col-12">
                                        <div className="items">
                                            <div className="row align-items-center  ">
                                                <div className="col-6">
                                                    <div className="row align-items-center">
                                                        <div className="col-4">
                                                            <img src={i.images[0]} className='w-100' />
                                                        </div>
                                                        <div className="col-8">
                                                            <h4 className='fw-bolder'>{i.title}</h4>

                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="col-6 d-">
                                                    <div className="row  text-center">
                                                        <div className="col-4">
                                                            <h4 className='fw-bolder'> ${i.price}</h4>
                                                        </div>
                                                        <div className="col-4">
                                                            <div className=" item d-flex align-items-center justify-content-center">
                                                                <i onClick={() => decrease(i)} class="fa fa-minus fs-5 " aria-hidden="true"></i>

                                                                <h4 className='mx-1 fw-bolder fs-3'>{i.qty}</h4>
                                                                <i onClick={() => increase(i)} class="fa fa-plus fs-5 fw-bolder " aria-hidden="true"></i>

                                                            </div>
                                                        </div>
                                                        <div className="col-4">
                                                            <h4 className='fw-bolder'>  ${i.price * i.qty}</h4>
                                                        </div>



                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>)}
                            </div>

                        </div>
                        <div className="col-md-4">

                            <div className=" checkout">
                                <h2>
                                    Cart Totals

                                </h2>
                                <hr />
                                <div className="row mb-4 align-items-center pe-3">
                                    <div className="col-lg-10 col-10 col-sm-10 col-md-8">
                                        <h3>Subtotal</h3>
                                    </div>
                                    <div className="col-lg-2 col-2 col-sm-2 col-md-4">
                                        <h4>${price}</h4>

                                    </div>

                                </div>

                                <div className="row align-items-center pe-3">
                                    <div className="col-lg-10 col-10  col-sm-10 col-md-8">
                                        <h3>Total</h3>
                                    </div>
                                    <div className="col-lg-2 col-2 col-sm-2 col-md-4">
                                        <h4>${price}</h4>

                                    </div>

                                </div>

                                <div className='mt-3'>
                                    <PaypalBtns data={data} />
                                </div>

                            </div>

                        </div>
                    </div> : <div className='m-auto text-center'><img src='https://res.cloudinary.com/blogins/image/upload/v1658620482/cart_qhq5oi.png' className='w-50' /></div>}

                </div>
            </div>

        </>
    )
}

export default Cart