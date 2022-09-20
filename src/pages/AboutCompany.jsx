import Aos from 'aos'
import React, { useEffect } from 'react'
import Request from '../components/Request'
import { getText } from '../locales'

const AboutCompany = () => {
    useEffect(() => {
        Aos.init({
          once: true,
          duration: 1700,
        })
      }, [])
    return (
        <div className='AboutCompany'>
            <div className="container">
                <div className="main-title">
                    <h2>{getText("aboutourcompany")}</h2>
                </div>
                <div className="row">
                    <div data-aos="fade-right" className="col-lg-6">
                        <div className="text">
                            <h2>{getText("aboutcompanyT")}</h2>
                            <p>{getText("aboutcompanyP")}</p>
                        </div>
                    </div>
                    <div data-aos="fade-left" className="col-lg-6">
                        <div className="img">
                            <img width="100%" src="./img/about-company.jpg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <Request />
        </div>
    )
}

export default AboutCompany