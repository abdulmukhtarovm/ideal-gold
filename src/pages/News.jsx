import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay} from "swiper";
import "swiper/css";
import { getText } from '../locales';
import Request from '../components/Request';

const News = () => {
    return (
        <div className='News'>

            <div className="container">
                <div className="main-title">
                    <h2>{getText("news")}</h2>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="top-news">
                            <div href="#" className="big-news mb-4 d-flex align-items-center">
                                <div className="img">
                                    <img className='w-100' src="./img/news1.png" alt=""/>
                                </div>
                                <div className="info">
                                    <h2>Lorem ipsum dolor sit amet.</h2>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, facere. </p>


                                </div>
                            </div>

                            <div className="small-news d-flex mb-3 flex-wrap">
                                <div className="small-news__item align-items-center mb-3 d-flex">
                                    <div className="img">
                                        <img className='w-100' src="./img/news1.png" alt="" />
                                    </div>
                                    <div className="info">
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, facere.</p>

                                    </div>
                                </div>
                                <div className="small-news__item align-items-center mb-3 d-flex">
                                    <div className="img">
                                        <img className='w-100' src="./img/news1.png" alt=""/>
                                    </div>
                                    <div className="info">
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, facere.</p>

                                    </div>
                                </div>
                                <div className="small-news__item align-items-center mb-3 d-flex">
                                    <div className="img">
                                        <img className='w-100' src="./img/news1.png" alt=""/>
                                    </div>
                                    <div className="info">
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, facere.</p>

                                    </div>
                                </div>
                                <div className="small-news__item align-items-center mb-3 d-flex">
                                    <div className="img">
                                        <img className='w-100' src="./img/news1.png" alt=""/>
                                    </div>
                                    <div className="info">
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, facere.</p>

                                    </div>
                                </div>
                            </div>

                            <Swiper
                                slidesPerView={4}

                                spaceBetween={30}
                                pagination={{
                                    clickable: true,
                                }}
                                loop={true}
                                autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false,
                                  }}
                                  breakpoints={{
                                    0: {
                                      slidesPerView: 2,
                                      spaceBetween: 10,
                                    },
                                    576: {
                                      slidesPerView: 3,
                                      spaceBetween: 20,
                                    },
                                    768: {
                                      slidesPerView: 4,
                                      spaceBetween: 40,
                                    },
                                    1024: {
                                      slidesPerView: 5,
                                      spaceBetween: 50,
                                    },
                                  }}
                                  modules={[Autoplay]}
                                className=" news-swiper"
                            >
                                <SwiperSlide>
                                    <div className="img"><img className='w-100' src="./img/news1.png" alt="" /></div>
                                    <div className="info">
                                        <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                                            minima?
                                        </h6>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="img"><img className='w-100' src="./img/news1.png" alt="" /></div>
                                    <div className="info">
                                        <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                                            minima?
                                        </h6>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="img"><img className='w-100' src="./img/news1.png" alt="" /></div>
                                    <div className="info">
                                        <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                                            minima?
                                        </h6>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="img"><img className='w-100' src="./img/news1.png" alt="" /></div>
                                    <div className="info">
                                        <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                                            minima?
                                        </h6>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="img"><img className='w-100' src="./img/news1.png" alt="" /></div>
                                    <div className="info">
                                        <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                                            minima?
                                        </h6>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="img"><img className='w-100' src="./img/news1.png" alt="" /></div>
                                    <div className="info">
                                        <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                                            minima?
                                        </h6>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="img"><img className='w-100' src="./img/news1.png" alt="" /></div>
                                    <div className="info">
                                        <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                                            minima?
                                        </h6>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="img"><img className='w-100' src="./img/news1.png" alt="" /></div>
                                    <div className="info">
                                        <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                                            minima?
                                        </h6>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="img"><img className='w-100' src="./img/news1.png" alt="" /></div>
                                    <div className="info">
                                        <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                                            minima?
                                        </h6>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>

                </div>
            </div>
            <Request/>
        </div>
    )
}

export default News