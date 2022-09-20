import React from 'react'
import { getText } from '../locales'

const Partners = () => {
    return (
        <div className='Partners'>
            <div className="container">
                <div data-aos="fade-right" className="main-title">
                    <h2>{getText("partnersT")}</h2>
                </div>
                <div className="row justify-content-around">
                    <div data-aos="fade-up" className="col-lg-3 mb-sm-3 col-6">
                        <div className="img">
                            <img className='w-100' src="./img/partner1.png" alt="" />
                        </div>
                    </div>
                    <div data-aos="fade-up" className="col-lg-3 mb-sm-3 col-6">
                        <div className="img">
                            <img className='w-100' src="./img/partner2.svg" alt="" />
                        </div>
                    </div>
                    <div data-aos="fade-up" className="col-lg-3 mb-sm-3 col-6">
                        <div className="img">
                            <img className='w-100' src="./img/alibazar.png" alt="" />
                        </div>
                    </div>
                    <div data-aos="fade-up" className="col-lg-3 mb-sm-3 col-6">
                        <div className="img">
                            <img className='w-100' src="./img/europol.png" alt="" />
                        </div>
                    </div>
      
                </div>
            </div>

        </div>
    )
}

export default Partners