import React from 'react'
import { Link } from 'react-router-dom'
import { getText } from '../locales'

const Products = () => {
   
    return (
        <div className='Products'>
            <div className="container">
                <div data-aos="fade-right" className="main-title">
                    <h2>{getText("productsT")}</h2>
                </div>
                <div className="row">
                    <div data-aos='fade-up' className="col-lg-3 col-md-6 col-sm-6">
                        <div className="wrap">
                            <Link to='/plintus' className='d-flex align-items-center'>
                                <div className="img">
                                    <img src="../img/catalog4.png" alt="" />
                                </div>
                                <div className="text">
                                    <p> {getText("plintus")} </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div data-aos='fade-up' className="col-lg-3 col-md-6 col-sm-6">
                        <div className="wrap">
                            <Link to='/corners' className='d-flex align-items-center'>
                                <div className="img">
                                    <img src="../img/catalog1.png" alt="" />
                                </div>
                                <div className="text">
                                    <p> {getText("wallCorners")} </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div data-aos='fade-up' className="col-lg-3 col-md-6 col-sm-6">
                        <div className="wrap">
                            <Link to='/rapids' className='d-flex align-items-center'>
                                <div className="img">
                                    <img src="../img/catalog3.png" alt="" />
                                </div>
                                <div className="text">
                                    <p> {getText("rapids")} </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div data-aos='fade-up' className="col-lg-3 col-md-6 col-sm-6">
                        <div className="wrap">
                            <Link to='/nalichnik' className='d-flex align-items-center'>
                                <div className="img">
                                    <img src="../img/catalog2.png" alt="" />
                                </div>
                                <div className="text">
                                    <p> {getText("plastCase")} </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div data-aos='fade-up' className="col-lg-3 col-md-6 col-sm-6">
                        <div className="wrap">
                            <Link to='/blister' className='d-flex align-items-center'>
                                <div className="img">
                                    <img src="../img/catalog6.png" alt="" />
                                </div>
                                <div className="text">
                                    <p> {getText("blister")} </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div data-aos='fade-up' className="col-lg-3 col-md-6 col-sm-6">
                        <div className="wrap">
                            <Link to='/' className='d-flex align-items-center'>
                                <div className="img">
                                    <img src="../img/catalog7.png" alt="" />
                                </div>
                                <div className="text">
                                    <p> {getText("plinCounter")} </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div data-aos='fade-up' className="col-lg-3 col-md-6 col-sm-6">
                        <div className="wrap">
                            <Link to='/trade' className='d-flex align-items-center'>
                                <div className="img">
                                    <img src="../img/catalog5.png" alt="" />
                                </div>
                                <div className="text">
                                    <p> {getText("trade")} </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div data-aos='fade-up' className="col-lg-3 col-md-6 col-sm-6">
                        <div className="wrap">
                            <Link to='/arxiv' className='d-flex align-items-center'>
                                <div className="img">
                                    <img src="../img/catalog8.png" alt="" />
                                </div>
                                <div className="text">
                                    <p> {getText("archive")} </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products