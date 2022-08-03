import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import AOS from 'aos';

import 'aos/dist/aos.css';


import Data from '../Data'
import { useDispatch, useSelector } from 'react-redux';
import { AddTOCart } from '../Redux/Action';

const Shops = () => {

    const [word, setword] = useState("Burger")
    const [data, setdata] = useState([])

    const [filters, setfilters] = useState([])
    let dispatch = useDispatch()
    let info = useSelector((x) => x.Handleshops)

    AOS.init({
        duration: 7000,
        once: false
    });

    useEffect(() => {

        changes()


    }, [info])
    useEffect(() => {

        GetProducts()


    }, [word])

    const changes = () => {
        setword(info)
    }
    const GetProducts = () => {

        const filtering = Data.filter((i) => i.category == word)

        setdata(filtering)


    }

    const selectings = (z) => {

        if (z == "high") {
            let sorting =
                filters.length > 0 ? filters.filter((i) => i.category == word).sort((a, b) => b.price - a.price) : Data.filter((i) => i.category == word).sort((a, b) => b.price - a.price);


            setdata(sorting);
        }
        else if (z == "low") {
            let sorting =
                filters.length > 0 ? filters.filter((i) => i.category == word).sort((a, b) => a.price - b.price) : Data.filter((i) => i.category == word).sort((a, b) => a.price - b.price);

            setdata(sorting);
        }
        else if (z = "alpha") {
            let sorting =
                filters.length > 0 ? filters.filter((i) => i.category == word).sort((a, b) => a.title.localeCompare(b.title)) : Data.filter((i) => i.category == word).sort((a, b) => a.title.localeCompare(b.title))
            setdata(sorting)
        }

    }
    const expeties = (str) => {
        if (str.length > 50) {
            str = str.substring(0, 70) + "..............."
        }
        return str

    }
    const Search = (z) => {
        let filtering = Data.filter((i) => i.category == word).filter((i) => i.title.toLowerCase().includes(z.toLowerCase()));
        setfilters(filtering)

        setdata(filtering)

    }
    return (
        <>
            <div className="shops py-5 mt-5">
                <div className="container-fluid px-md-5 py-5 mt-5">
                    <div className="row">
                        <div className="col-md-3 mt-lg-4 mt-md-5 m-md-0 mt-4 col-sm-8 m-sm-auto">
                            <div className="items">
                                <div className="d-flex align-items-center search-shops row">
                                    <div className="col-10">
                                        <input onChange={(e) => Search(e.target.value)} type='text' placeholder='search....' />

                                    </div>
                                    <div className="col-2">
                                        <i className="fa fa-search " aria-hidden="true"></i>

                                    </div>

                                </div>

                                <div className="Categories mt-3">
                                    <h2 className=' text-center my-4' >Categories</h2>
                                    <div className="links">
                                        <h4 onClick={() => setword("Burger")}>Burgers <span>(9)</span></h4>
                                        <hr />
                                        <h4 onClick={() => setword("Drink")}>Drinks <span>(4)</span></h4>
                                        <hr />
                                        <h4 onClick={() => setword("Pizza")}>Pizza <span>(9)</span></h4>


                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-8">
                            <div className="row px-3">
                                <div className="col-lg-6 mt-sm-4  col-sm-4 col-md-6" >
                                    <h5 className='mt-2 d-lg-flex d-md-none d-sm-none   fw-bolder text-muted'>Showing 1–9 of 22 results</h5>
                                </div>
                                <div class="col-lg-4 m-sm-auto  mt-sm-4 col-sm-12 d-flex justify-content-center col-md-8 m-sm-auto col-lg-6 selcting">
                                    <select onChange={(e) => selectings(e.target.value)}>
                                        <option value="high">
                                            price:high to low
                                        </option>
                                        <option value="low">
                                            price:low to high
                                        </option>

                                        <option value="alpha">
                                            A-Z
                                        </option>
                                    </select>

                                </div>
                            </div>

                            <div className="row  mt-5">
                                {data.length > 0 ? data.map((i) => <>
                                    <div
                                        data-aos="flip-left"
                                        data-aos-easing="ease-out-cubic"
                                        data-aos-duration="2000" className="col-lg-6 col-md-12 item1-shop">
                                        <div className="item-shop">
                                            <div className="image-shop">
                                                <NavLink to={`/details/${i.id}`}>
                                                    <img src={i.images[0]} alt="" />

                                                </NavLink>
                                                <NavLink to={`/details/${i.id}`}>
                                                    <img src={i.images[1]} className='img2' alt="" />

                                                </NavLink>

                                            </div>

                                            <h2 className='text-center '>{i.title}</h2>

                                            <p className='text-center  fw-bolder text-muted'>{expeties(i.description)}</p>


                                            <h3 className='text-center fw-bolder mb-4'>price: <span>${i.price}</span></h3>

                                            <h2 onClick={() => dispatch(AddTOCart({ ...i, qty: 1 }))} className='fitst-link shops-cart text-center'>Add To Cart</h2>


                                        </div>


                                    </div>

                                </>) :
                                    <img src='https://res.cloudinary.com/blogins/image/upload/v1658931243/foods/no_product_83-removebg-preview_c4s85t.png' className='w-100' />}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Shops