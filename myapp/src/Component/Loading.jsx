import React from 'react'


const Loading = () => {
    


  return (
   <>
    <div className="loading  ">
      <div className="container py-5 mt-5">
      <div className="row">
            <div className=" col-lg-6 col-md-12">
               <div className="items1 ">
                <img src='./images/burger-1.png' className='w-100 images-loading'/>

               </div>
            </div>
            <div className="col-lg-6 col-md-12">
                <div className="items2">
                    <div className="conatin-items2">
                        <img src='./images/food_bg.png'/>
                        <div className="position-conatin">
                            <p d className='fw-bolder text-white fs-3'>BURGER TIMES</p>
                        </div>

                    </div>
                
                   <h1>Your  Bacon  CheeseBurger</h1>
                   
                    <ul>
              <li>Only Fresh Beef</li>
              <li>Best Quality Vegetables</li>
              <li> mozerella Cheese</li>


                    </ul>


                </div>

            </div>
        </div>
        
      </div>
      
    </div>
 
   
   </>
  )
}

export default Loading