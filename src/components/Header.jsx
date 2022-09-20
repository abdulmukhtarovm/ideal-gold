import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { getText } from '../locales';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className='Header'>
            <Swiper
                spaceBetween={0}
                loop={true}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                }}
                navigation={true} modules={[Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 img">
                            <img className='w-100' src="../img/header-slider1.png" alt="" />
                        </div>
                        <div className="col-lg-4 text">
                            <h5>{getText("headSlideT1")} </h5>
                            <p>
                                {getText("headSlide1")}
                            </p>
                            <Link className='btn' to="/plintus">{getText("more")}</Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 img">
                            <img className='w-100' src="../img/header-slider2.png" alt="" />
                        </div>
                        <div className="col-lg-4 text">
                            <h5>{getText("headSlideT2")} </h5>
                            <p>
                                {getText("headSlide2")}
                            </p>
                            <Link className='btn' to="/rapids">{getText("more")}</Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 img">
                            <img className='w-100' src="../img/header-slider3.png" alt="" />
                        </div>
                        <div className="col-lg-4 text">
                            <h5>{getText("headSlideT3")} </h5>
                            <p>
                                {getText("headSlide3")}
                            </p>
                            <Link className='btn' to="/corners">{getText("more")}</Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 img">
                            <img className='w-100' src="../img/header-slider4.png" alt="" />
                        </div>
                        <div className="col-lg-4 text">
                            <h5>{getText("headSlideT4")} </h5>
                            <p>
                                {getText("headSlide4")}
                            </p>
                            <Link className='btn' to="/plinpart">{getText("more")}</Link>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className="benefists">
                <div className="container">
                    <div className="row justify-content-around">
                        <div className="col-md-2 col-6">
                            <div className="item">
                               <Link to="/catalog">
                               <img src="../img/header-item1.png" alt="" />
                                <p>{getText("headItem1")}</p>
                               </Link>
                            </div>
                        </div>
                        <div className="col-md-2 col-6">
                            <div className="item">
                               <Link to="/distr">
                               <img src="../img/header-item2.png" alt="" />
                                <p>{getText("headItem2")}</p>
                               </Link>
                            </div>
                        </div>
                        <div className="col-md-2 col-6">
                            <div className="item">
                               <Link to="certificates">
                               <img src="../img/header-item3.png" alt="" />
                                <p>{getText("headItem3")}</p>
                               </Link>
                            </div>
                        </div>
                        <div className="col-md-2 col-6">
                            <div className="item">
                               <Link to="contacts">
                               <img src="../img/header-item4.png" alt="" />
                                <p>{getText("headItem4")}</p>
                               </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header