import React from 'react'
import Category from '../Component/Category'
import ComboMenu from '../Component/ComboMenu'
import Counter from '../Component/Counter'
import FreeDelivary from '../Component/FreeDelivary'
import Fresh from '../Component/Fresh'
import Loading from '../Component/Loading'
import Main from '../Component/Main'
import Navbar from '../Component/Navbar'
import News from '../Component/News'
import Sliders from '../Component/Sliders'

const Home = () => {

    return (
        <>
            <div className='mb-5'>

                <Loading />
                <div className="end-loading">

                    <Category />
                    <div className='position-loading '>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f7b035" fill-opacity="0.99" d="M0,160L60,160C120,160,240,160,360,138.7C480,117,600,75,720,53.3C840,32,960,32,1080,69.3C1200,107,1320,181,1380,218.7L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
                    </div>
                </div>
                <Fresh/>
                 <Counter/>
                <Main/>
                <Sliders/>
                <ComboMenu/>
                <FreeDelivary/>
                 <News/> 
                 

            </div>
        </>
    )
}

export default Home