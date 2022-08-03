import React from 'react'

const ComboMenu = () => {
    return (
        <>
            <div className="combo py-5 text-white ">
                <div className="container py-5 mt-5">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-6 p-0 m-0 ">

                        </div>
                        <div className="col-lg-6 col-md-9 p-0 mt-5">
                            <div className="item m-auto py-5">
                                <h1 className='text-center'>Combo Menu</h1>
                                <div className="  mt-5 text-center row w-100 align-items-center justify-content-center">
                                    <div className="col-2">
                                        <img src='./images/menu-img-1.png' className='w-100' />
                                    </div>
                                    <div className="col-9 ">
                                        <h3>Burger + French Fries  <span>$30</span></h3>
                                    </div>
                                </div>

                                <div className="row w-100  mt-5 text-center align-items-center justify-content-center">
                                    <div className="col-2">
                                        <img src='./images/menu-img-2.png' className='w-100' />
                                    </div>
                                    <div className="col-9 ">
                                        <h3>Double Burger .. <span>$25</span></h3>
                                    </div>
                                </div>


                                <div className="row  w-100 mt-5 text-center align-items-center justify-content-center">
                                    <div className="col-2">
                                        <img src='./images/menu-img-3.png' className='w-100' />
                                    </div>
                                    <div className="col-9 ">
                                        <h3>Burgers + Fries + Cola  <span>$15</span></h3>
                                    </div>
                                </div> 

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ComboMenu