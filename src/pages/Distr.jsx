import React from 'react'
import { getText } from '../locales'

const Distr = () => {
  return (
    <div className='Distr'>
        <div className="container">
        <div data-aos="fade-right" class="main-title text-center aos-init aos-animate"><h2>{getText("distr")}</h2></div>

        <div className="row">
            <div className="col-md-6 mb-md-3">
                <img className='w-100' src="img/afganistan.png" alt="" />
            </div>
            <div className="col-md-6 mb-md-3">
                <img className='w-100' src="img/kazakhstan.png" alt="" />
            </div>
            <div className="col-md-6 mb-md-3">
                <img className='w-100' src="img/kyrgyzistan.png" alt="" />
            </div>
            <div className="col-md-6 mb-md-3">
                <img className='w-100' src="img/tadjikistan.png" alt="" />
            </div>
            <div className="col-md-6 mb-md-3">
                <img className='w-100' src="img/turkmenistan.png" alt="" />
            </div>
        </div>
        </div>
    </div>
  )
}

export default Distr