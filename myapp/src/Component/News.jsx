import React from 'react'

const News = () => {
    return (
        <>
            <div className="news py-5 mt-5">
                <div className="container-fluid py-5">
                    <h2 className='text-center fw-bolder fs-1 mb-5'>Read Burger News
                    </h2>
                    <div className="row">
                        <div className="col-md-6 col-lg-4 ">
                            <div className="item">
                                <div className="images">
                                    <img src='https://res.cloudinary.com/blogins/image/upload/v1658876082/foods/blog_02-840x650-840x720_akxxqi.jpg' className='w-100' />
                                    <div className="header-news">
                                        <h5 className='fw-bolder text-white mt-1 py-2'>Semptember 10 , 2019</h5>
                                    </div>

                                </div>
                                <div className='container-news'>
                                    <h4 className='mt-2'>Fast Foods</h4>
                                    <h1>Only Quality Products </h1>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid laboriosam consectetur quae modi. </p>
                                    <div className='plus'>
                                        <i class="fa fa-plus" aria-hidden="true"></i>

                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-6 col-lg-4">
                            <div className="item">
                                <div className="images">
                                    <img src='https://res.cloudinary.com/blogins/image/upload/v1658876082/foods/blog_12-840x650-840x720_a69tnk.jpg' className='w-100' />
                                    <div className="header-news">
                                        <h5 className='fw-bolder text-white mt-1 py-2'>Semptember 10 , 2019</h5>
                                    </div>

                                </div>
                                <div className='container-news'>
                                    <h4 className='mt-2'>Dinner</h4>
                                    <h1>Need a Salad ?</h1>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid laboriosam consectetur quae modi. </p>
                                    <div className='plus'>
                                        <i class="fa fa-plus" aria-hidden="true"></i>

                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="col-md-6 col-lg-4 mt-lg-0 mt-md-4">
                            <div className="item">
                                <div className="images">
                                    <img src='https://res.cloudinary.com/blogins/image/upload/v1658876080/foods/blog_03-840x650-840x720_k0umw1.jpg' className='w-100' />
                                    <div className="header-news">
                                        <h5 className='fw-bolder text-white mt-1 py-2'>Semptember 10 , 2019</h5>
                                    </div>

                                </div>
                                <div className='container-news'>
                                    <h4 className='mt-2'>Fast Foods</h4>
                                    <h1>SeaFood Burger </h1>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid laboriosam consectetur quae modi. </p>
                                    <div className='plus'>
                                        <i class="fa fa-plus" aria-hidden="true"></i>

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

export default News