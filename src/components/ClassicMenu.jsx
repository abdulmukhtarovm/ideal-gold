import React from 'react'
import { Link } from 'react-router-dom'
import { getText } from '../locales'

const ClassicMenu = () => {
    return (
        <div className='ClassicMenu'>
            <div className="row align-items-center">
                <div className="col-5">
                    <Link to="/classic55" className="item__link">
                        <div className="item d-flex align-items-center">
                            <div className="img">
                                <img src="./img/classic55.png" alt="" />
                            </div>
                            <div className="info">
                                <p>{getText("classic")} 55 {getText("mm")}</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-5">
                    <Link to="/classic60" className="item__link">
                        <div className="item d-flex align-items-center">
                            <div className="img">
                                <img src="./img/classic55.png" alt="" />
                            </div>
                            <div className="info">
                                <p>{getText("classic")} 60 {getText("mm")}</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-5">
                    <Link to="/classic70" className="item__link">
                        <div className="item d-flex align-items-center">
                            <div className="img">
                                <img src="./img/classic55.png" alt="" />
                            </div>
                            <div className="info">
                                <p>{getText("classic")} 70 {getText("mm")}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ClassicMenu