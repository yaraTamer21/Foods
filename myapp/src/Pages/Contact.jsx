import React , {useState} from 'react'
import { toast } from 'react-toastify';

const initalstat={
    name:"",
    email:"",
    message:""

}
const Contact = () => {
    const[Form,setForm]=useState(initalstat);
    const[data,setdata]=useState([]);
    const {name,email,message}=Form

   const  Getdata = (e)=>{
   
    const {name,value}=e.target;
    setForm({...Form,[name]:value})

   }
 
   const sendData=(e)=>{
    e.preventDefault();

    
    if(name==="" || email==="" ||message==="")
    {
        toast.error("pleas Fill All fields")
    }
    else{
        setdata([...data, Form])
        setForm(initalstat)
        toast.success("Thank you for your message. It has been sent.")
      
        
    
    }
   
   }
   console.log(data)
    return (
        <>
            <div className="contact py-5 mt=5">
                <div className="container-fluid px-5 py-5 mt-5">
                    <div className="row mb-4 px-lg-5">
                        <div className="col-lg-6 col-md-9 ">
                            <div className="items">
                                <h2 className='fw-bolder fs-1 mt-5'>Get in Touch</h2>
                                <p className='fw-bolder text-black-50'>FoodMood is an ambitious multimedia effort founded in 2011 to examine how technology will change life in the future for a massive mainstream audience.Contact us today to find out how we can help you.</p>
                                <ul className='m-0 p-0'>
                                    <li className='d-flex  mt-5'>
                                        <i style={{ color: "#f7b035" }} class="fa-solid fa-location-dot fs-2 mt-1 me-3"></i>
                                        <div >
                                            <h3 className='fw-bolder'>We Are Here :  </h3>
                                            <p className='fw-bolder fs-5 text-muted'>27 Division St, New York, NY 10002, USA</p>
                                        </div>
                                    </li>


                                    <li className='d-flex  mt-3 '>
                                        <i style={{ color: "#f7b035" }} class="fa-solid fa-envelope  fs-2 mt-1 me-3"></i>
                                        <div >


                                            <h3 className='fw-bolder'>Mail Us : </h3>
                                            <p className='fw-bolder fs-5 text-muted'>foodmood@mail.com.</p>
                                        </div>
                                    </li>
                                    <li className='d-flex  mt-3 '>
                                        <i style={{ color: "#f7b035" }} class="fa-solid fa-phone  fs-2 mt-1 me-3"></i>
                                        <div >
                                            <h3 className='fw-bolder'>Phone Us  </h3>
                                            <p className='fw-bolder fs-5 text-muted'>+204213871523.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>


                        <div className="col-lg-5 m-auto col-md-9">
                            <div className="bg-contact d-flex flex-column align-items-center py-5  ">
                                <h1 className='mt-5 fw-bolder text-white fs-1'>Leave a Reply</h1>
                                <div className='input-contact'>
                                    <input value={name} onChange={Getdata} name='name' type="text" placeholder='Enter Your Name......' required/>
                                </div>
                                <div className='input-contact'>
                                    <input value={email}  onChange={Getdata} name='email' type="email" placeholder='example@gmail.com' required/>
                                </div>

                                <div className='mt-3 mm'>
                                    <textarea value={message} onChange={Getdata} name='message' className='border rounded-4 p-3' rows={7} cols={40} placeholder="Message..." required/>
                                </div>

                                <button  onClick={sendData} type='submit' className='border-0 btn btn-warning  mt-3 px-4 py-2 text-white fw-bold fs-4 '>Send Message</button>

                            </div>
                        </div>
                    </div>


               {data.length >0 &&  <div className="commenst border-1 px-3  border-solid py-3">
                    <h2>Comments</h2>
                   
                    {data.map((i)=> <>
                     <div className='px-4 py-3 mb-4 container-commensts'>
                     <h3 className='fw-bolder  fs-3 '>{i.name} </h3> <span className='e-mail'>{`< ${i.email}>`}</span>
                    <p>{i.message}</p>
                  
                     </div>
                  
                    
                    </>)}
                   
                   
                </div>}

                </div>
            </div>

        </>
    )
}

export default Contact