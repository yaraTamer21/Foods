import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="footer text-white pt-5 ">
                <div className="px-lg-5 container-fluid py-5 mt-5">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="items">
                                <h2 className='fw-bolder'>Dont Be Shy, Say HI!</h2>
                                <ul>
                                    <li>
                                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                                        <p>27 Division St, NY 10002, USA

                                        </p>
                                    </li>
                                    <li>
                                        <i class="fa fa-phone" aria-hidden="true"></i>

                                        <p>+ 8 (123) 578 987 455

                                        </p>

                                    </li>
                                    <li>
                                        <i class="fa fa-envelope" aria-hidden="true"></i>
                                        <p>foodmood@webgeniuslab.com

                                        </p>

                                    </li>
                                </ul>
                                <div className="mt-5 ">
                                    <img src='https://res.cloudinary.com/blogins/image/upload/v1658881003/foods/footer-burger_fw2msc.png' className='w-75' />

                                </div>
                            </div>

                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="items second">
                                <h2 className='fw-bolder'>Opening Hours</h2>
                                <div>
                                    <h4 className='my-3'>
                                    Satarday  .....................<span>   8.00 - 20.00</span>
                                       
                                      
                                    </h4>
                                    <h4 className='my-3'>
                                    Sunday........................<span>  2.00 - 30.00</span>
                                       
                                      
                                    </h4>
                                    <h4 className='my-3'>
                                    Monday .....................<span>  3.00 - 40.00</span>
                                       
                                      
                                    </h4>
                                    <h4 className='my-3'>
                                    Tuesday  .....................<span>  4.00 - 50.00</span>
                                       
                                      
                                    </h4>
                                    <h4 className='my-3'>
                                    Wensday  ....................<span> 5.00 - 60.00</span>
                                       
                                      
                                    </h4>
                                    <h4 className='my-3'>
                                    Thursday ....................<span>  6.00 - 20.00</span>
                                       
                                      
                                    </h4>
                                    <h4 className='my-3'>
                                    Friday ............................<span> Closed</span>
                                       
                                      
                                    </h4>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-4 col-md-6 m-auto end mt-md-3 mt-sm-3  mt-lg-0">
                            <div className="items">
                                <h2 className='fw-bolder text-md-center'>We are on Insta</h2>

                                <div className="row Gallery pe-3 ">
                                    <div className="col-4">
                                       <div className="items mb-3">
                                        <img src='./images/pizza/img-gal-1.jpg' className='w-100'/>
                                       </div>
                                    </div>


                                    <div className="col-4">
                                       <div className="items mb-3">
                                        <img src='./images/pizza/img-gal-2.jpg' className='w-100'/>
                                       </div>
                                    </div>


                                    <div className="col-4">
                                       <div className="items mb-3">
                                        <img src='./images/pizza/img-gal-3.jpg' className='w-100'/>
                                       </div>
                                    </div>


                                    <div className="col-4">
                                       <div className="items">
                                        <img src='./images/pizza/img-gal-4.jpg' className='w-100'/>
                                       </div>
                                    </div>


                                    <div className="col-4">
                                       <div className="items">
                                        <img src='./images/pizza/img-gal-5.jpg' className='w-100'/>
                                       </div>
                                    </div>

                                    <div className="col-4">
                                       <div className="items">
                                        <img src='./images/pizza/img-gal-6.jpg' className='w-100'/>
                                       </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                   <hr style={{color:"#f7b035"}}/>
                   <div className="row ">
                    <div className="col-10">
                   <p className='fw-bolder text-muted  m-0'> Copyright © 2019 FoodMood by WebGeniusLab. All Rights Reserved.</p>

                    </div>
                    <div className="col-md-2">
                        <div className="icon">
                            <div className='parent-icon'>
                            <i class="fa-brands fa-facebook"></i>  
                            </div>
                                     <div className='parent-icon'>
                                     <i class="fa-brands fa-twitter"></i>    
                                     </div>
                                   <div className='parent-icon'>
                                   <i class="fa-brands fa-instagram"></i>       
                                   </div>
                              <div className='parent-icon'>
                              <i class="fa-brands fa-whatsapp"></i>
                              </div>
                    

                        </div>
                    </div>
                   </div>

                </div>
            </div>
        </>
    )
}

export default Footer