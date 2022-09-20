import React from 'react'
import { Link } from 'react-router-dom'
import { getText } from '../locales'

const PlintusMenu = () => {
    return (
        <div className='PlintusMenu'>
            <div className="row align-items-center">
                <div className="col-6">
                    <Link to="/classic" className="item__link">
                        <div className="item d-flex align-items-center">
                            <div className="img">
                                <img src="./img/plintusClassic.png" alt="" />
                            </div>
                            <div className="info">
                                <p>{getText("classic")} {getText("plintus")}</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-6">
                    <Link to="/plinpart" className="item__link">
                        <div className="item d-flex align-items-center">
                            <div className="img">
                                <img src="./img/hitech.png" alt="" />
                            </div>
                            <div className="info">
                                <p>{getText("plinPart")}</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-6">
                    <Link to="/counter" className="item__link">
                        <div className="item d-flex align-items-center">
                            <div className="img">
                                <img src="./img/counter.png" alt="" />
                            </div>
                            <div className="info">
                                <p>{getText("plinCounter")}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PlintusMenu