import React from 'react'
import { Link } from 'react-router-dom'
import { getText } from '../locales'

const ClassicMenu = () => {
    return (
        <div className='ClassicMenu'>
            <div className="row align-items-center">
                <div className="col-5">
                    <Link to="/plinpart70" className="item__link">
                        <div className="item d-flex align-items-center">
                            <div className="img">
                                <img src="./img/hitech.png" alt="" />
                            </div>
                            <div className="info">
                                <p>{getText("hitech")} 70 {getText("mm")}</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-5">
                    <Link to="/plinpart80" className="item__link">
                        <div className="item d-flex align-items-center">
                            <div className="img">
                                <img src="./img/hitech.png" alt="" />
                            </div>
                            <div className="info">
                                <p>{getText("hitech")} 80 {getText("mm")}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ClassicMenu