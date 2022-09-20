import React from 'react'
import { getText } from '../locales'
import CountUp from 'react-countup';

const InNum = () => {
    return (
        <div className='InNum'>
            <div className="container">
                <div data-aos="fade-right" className="main-title">
                    <h2>{getText("inNumT")}</h2>
                </div>
                <div data-aos="fade-up" className="row justify-content-center">
                    <div className="col-lg-3 col-sm-12">
                        <div className="wrap">
                            <span> <CountUp end={250} />+ </span>
                            <p> {getText("inNum1")} </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-12">
                        <div className="wrap">
                            <span> <CountUp end={1110} />+</span>
                            <p> {getText("inNum2")} </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-12">
                        <div className="wrap">
                            <span> <CountUp end={14} />+</span>
                            <p> {getText("inNum3")} </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default InNum