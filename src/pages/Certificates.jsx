import React, { useEffect } from 'react'
import { getText } from '../locales'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";

// import required modules
import { EffectCards, Navigation } from "swiper";
import Request from '../components/Request';
import Aos from 'aos';


const Certificates = () => {
    useEffect(() => {
        Aos.init({
          once: true,
          duration: 1700,
        })
      }, [])
    return (
        <div className='Certificates'>
            <div className="container">
                <div className="main-title">
                    <h2>{getText("certificates")}</h2>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-10 col-8">
                        <Swiper 
                            effect={"cards"}
                            grabCursor={true}
                            modules={[EffectCards, Navigation]}
                            navigation={true}
                            loop={true}
                            className="mySwiper"
                        >
                            <SwiperSlide><img className='w-100' src="./img/certificate1.jpg" alt="" /></SwiperSlide>
                            {/* <SwiperSlide><img className='w-100' src="./img/certificate2.jpg" alt="" /></SwiperSlide> */}
                            {/* <SwiperSlide><img className='w-100' src="./img/certificate3.jpg" alt="" /></SwiperSlide> */}
                            <SwiperSlide><img className='w-100' src="./img/certificate4.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide><img className='w-100' src="./img/certificate5.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide><img className='w-100' src="./img/certificate6.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide><img className='w-100' src="./img/certificate7.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide><img className='w-100' src="./img/certificate8.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide><img className='w-100' src="./img/certificate9.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide><img className='w-100' src="./img/certificate10.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide><img className='w-100' src="./img/certificate11.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide><img className='w-100' src="./img/certificate12.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide><img className='w-100' src="./img/certificate13.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide><img className='w-100' src="./img/certificate14.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide><img className='w-100' src="./img/certificate15.jpg" alt="" /></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
            <Request/>
        </div>
    )
}

export default Certificates