import React, { useState, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    const [Check, setCheck] = useState(false)
    const [Check1, setCheck1] = useState(false)
    const [Check2, setCheck2] = useState(false)
    const [Check3, setCheck3] = useState(false)
    const [Position, setPosition] = useState(false)
    const [back, setback] = useState("#f7b035")
    const [back1, setback1] = useState("white")
    const [back2, setback2] = useState("lightgray")
    const [shopping, setShopping] = useState(false)
    const [Shadow, setShadow] = useState("")

    const [Price, setPrice] = useState(0)
    const [qty, setqty] = useState(0)

    let data = useSelector((x) => x.HandleCart)


    // const [back1, setback1] = useState("blue")



    AOS.init({
        duration: 1500,
        once: false
    });


    // const [navSize, setnavSize] = useState("unset");
    // const [navColor, setnavColor] = useState("");
    const listenScrollEvent = () => {
        window.scrollY > 30 ? setback("white") : setback("#f7b035");
        window.scrollY > 30 ? setback1("black") : setback1("white");
        window.scrollY > 30 ? setback2("#f7b035") : setback2("lightgray");
        window.scrollY > 30 ? setShadow("0px 0px 10px lightgray") : setShadow("");

    };
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, [])

    useEffect(() => {
        getPrice()

    }, [data])
    const getPrice = () => {
        let total = 0;
        let quantity = 0
        data.map((i) => {
            total += i.price * i.qty
            quantity += i.qty

        })
        setPrice(total)
        setqty(quantity)
    }






    const Checks = (name) => {
        if (name === "checks0") {
            setCheck3(true)
            setCheck(false)
            setCheck1(false)
            setCheck2(false)
        }
        if (name === "checks1") {
            setCheck(true)
            setCheck1(false)
            setCheck2(false)
            setCheck3(false)


        }
        if (name === "checks2") {
            setCheck(false)
            setCheck1(true)
            setCheck2(false)
            setCheck3(false)

        }
        if (name === "checks3") {
            setCheck(false)
            setCheck1(false)
            setCheck2(true)
            setCheck3(false)

        }


    }
    return (
        <>
            <div className="parent ">
                <nav style={{ backgroundColor: `${back}`, boxShadow: `${Shadow}` }} className="navbar navbar-expand-lg">
                    <div className="container ">
                        <a className="navbar-brand" href="#">

                            <img className=' images-navbar' src='https://res.cloudinary.com/blogins/image/upload/v1658446695/foods/logo_homepage1_baytgt.png' />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                                <li onClick={() => Checks("checks0")} className={Check3 ? "nav-item nav-container fitst-link " : "nav-item nav-container"}>
                                    <NavLink style={{ color: `${back1}` }} className="nav-link active  " aria-current="page" to="/">Home</NavLink>
                                </li>
                                <li onClick={() => Checks("checks1")} className={Check ? "nav-item nav-container fitst-link " : "nav-item nav-container"} >
                                    <NavLink style={{ color: `${back1}` }} className="nav-link" to="/shops">Shops</NavLink>
                                </li>

                                <li onClick={() => Checks("checks2")} className={Check1 ? "nav-item nav-container fitst-link " : "nav-item nav-container"} >
                                    <NavLink style={{ color: `${back1}` }} className="nav-link" to="/about">About</NavLink>
                                </li>

                                <li onClick={() => Checks("checks3")} className={Check2 ? "nav-item nav-container fitst-link " : "nav-item nav-container"} >
                                    <NavLink style={{ color: `${back1}` }} className="nav-link" to="/contact">Contact</NavLink>
                                </li>



                            </ul>


                            <div className="icons me-auto d-flex">
                            <i style={{ backgroundColor: `${back2}` }} onClick={() => setPosition(!Position)} className={Position ? "fa fa-times close-icons" : "fa fa-search "} aria-hidden="true"></i>



                            <div className="shopping">
                                <i onClick={() => setShopping(!shopping)} style={{ backgroundColor: `${back2}` }} class="fa fa-shopping-cart" aria-hidden="true"></i>
                                <div className={shopping ? "action1-position parent-position " : "  text-center ms-4 parent-position"}  >
                                    {data.length > 0 ? <>
                                        <div className="row  align-items-center p-3">
                                            <div className="content ">
                                                {data.map((i) => <>


                                                    <div className='d-flex align-items-center'>
                                                        <div className="col-5 mb-3 ">
                                                            <img src={i.images[0]} className='w-100' />
                                                        </div>
                                                        <div className="col-7 mb-3 ">
                                                            <h3>{i.title}</h3>
                                                            <h4 >{i.qty}x<span>${i.price}</span></h4>
                                                        </div>
                                                    </div>




                                                </>)}
                                            </div>


                                            <h1 className='py-4'>SubTotal :<span>${Price}</span></h1>
                                            <NavLink to='/cart'>
                                                <button className='navbar-buttons'>View Cart</button>
                                            </NavLink>

                                        </div>

                                    </> :

                                        <div className='text-center'>
                                            <img className='w-75 my-5' src='https://res.cloudinary.com/blogins/image/upload/v1658620482/cart_qhq5oi.png' />

                                        </div>
                                    }
                                </div>

                                <div className="icons-length d-flex justify-content-center ">
                                    <h4>{qty}</h4>
                                </div>

                            </div>

                            {Position ? <>
                                <div data-aos="zoom-in" className={Position ? "search" : ""}>
                                    <div className="row container-serach justify-content-between align-items-center">
                                        <div className="col-7">
                                            <input type='text' />
                                        </div>
                                        <div className="col-3">
                                            <i style={{ color: "lightgray" }} className="fa fa-search icon-icosn" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>
                            </> : ""}


                            </div>
                        </div>
                       
                    </div>

                </nav>
            </div>


        </>
    )
}

export default Navbar