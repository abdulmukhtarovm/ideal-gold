import React from 'react'
import { getText } from '../locales'

const About = () => {
  return (
    <div className='About'>
        <div className="container">
            <div data-aos="fade-right" className="main-title">
                <h2>{getText("aboutUsT")}</h2>
            </div>
            <div className="row align-items-center">
                <div data-aos="fade-right" className="col-lg-6">
                    <div className="info">
                    <h4>{getText("aboutUsT1")}</h4>
                    <p>{getText("aboutUsP1")}</p>
                    <h4>{getText("aboutUsT2")}</h4>
                    <p>{getText("aboutUsP2")}</p>
                    </div>
                </div>
                <div data-aos="fade-left" className="col-lg-6">
                    <div className="img">
                        <img className='w-100' src="../img/about-blog.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About