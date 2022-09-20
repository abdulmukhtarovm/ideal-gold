import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
// import { Link } from 'react-router-dom';
import { getText } from '../locales'

const TradeMenu = () => {
    return (
        <div className='Classic55Menu'>
            <div className="about-plintus">
                <h3>{getText("trade")}</h3>
                <div className="row">
                    <div className="col-md-4 d-md-block d-flex justify-content-md-between justify-content-center">
                        <img className='w-100' src="./img/torg.png" alt="" />
                    </div>
                    <div className="col-md-8 main-table">
                        <table className="table w-100 table-striped">
                            {/* <thead>
                                <tr>
                                    <th>
                                        {getText("codeProduct")}
                                    </th>
                                    <th>К-П55п</th>
                                </tr>
                            </thead> */}
                            <tbody>
                                <tr>
                                    <td>
                                        {getText("box")}
                                    </td>
                                    <td>
                                        68x13,5x124,5 {getText("sm")}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        {getText("weight")}
                                    </td>
                                    <td>
                                        41 {getText("kg")}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TradeMenu