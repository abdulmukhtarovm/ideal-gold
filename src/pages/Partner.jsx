import React from 'react'
// import { getText } from '../locales'
// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";


// import required modules
// import { EffectCards } from "swiper";
import Request from '../components/Request';
// import Footer from '../components/Footer';
import Partners from '../components/Partners';


const Certificates = () => {
    return (
        <div className='Certificates'>
            <Partners/>
            <Request/>
        </div>
    )
}

export default Certificates