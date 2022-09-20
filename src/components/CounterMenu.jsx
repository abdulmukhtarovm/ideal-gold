import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
// import { Link } from 'react-router-dom';
import { getText } from '../locales'

const Classic55Menu = () => {
    return (
        <div className='Classic55Menu'>
            <div className="about-plintus">
                <h3>{getText("plinCounter")}</h3>
                <div className="row">
                    <div className="col-md-4 d-md-block d-flex justify-content-md-between justify-content-center">
                        <img src="./img/counterD.png" alt="" />
                    </div>
                    <div className="col-md-8 main-table">
                        <table className="table w-100 table-striped">
                            <thead>
                                <tr>
                                    <th>
                                        {getText("codeProduct")}
                                    </th>
                                    <th>К-П55п</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        {getText("width")}
                                    </td>
                                    <td>
                                        2,5 {getText("m")}; 3,6 {getText("m")}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        {getText("height")}
                                    </td>
                                    <td>
                                        25-25 {getText("mm")}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        {getText("inthebox")}
                                    </td>
                                    <td>
                                        30 {getText("sht")}.
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        {getText("box")}
                                    </td>
                                    <td>
                                        22x8x263 {getText("sm")}, 22x8x373 {getText("sm")}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        {getText("weight")}
                                    </td>
                                    <td>
                                        19,5; 26,5 {getText("kg")}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        {getText("package")}
                                    </td>
                                    <td>
                                        75, 108 {getText("m")}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-12 plin-desc d-flex">
                        <div className="icon">
                            <FontAwesomeIcon icon={faTriangleExclamation} />
                        </div>
                        <div className="desc">
                            <p>{getText("counterDesc")}</p>
                        </div>
                    </div>
                    <div className="col-12">
                        <Accordion defaultActiveKey="0">
                            {/* <Accordion.Item eventKey="0">
                                <Accordion.Header>{getText("complect")} </Accordion.Header>
                                <Accordion.Body>
                                    <img width="100%" src="./img/classic55_complect.png" alt="" />
                                </Accordion.Body>
                            </Accordion.Item> */}
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>{getText("montaj")}</Accordion.Header>
                                <Accordion.Body>
                                    <div className="row">
                                        <div className="col-md-4 col-6 mb-3">
                                            <img className='w-100' src="img/st1.jpg" alt="" />
                                        </div>
                                        <div className="col-md-4 col-6 mb-3">
                                            <img className='w-100' src="img/st2.jpg" alt="" />
                                        </div>
                                        <div className="col-md-4 col-6 mb-3">
                                            <img className='w-100' src="img/st3.jpg" alt="" />
                                        </div>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                               <Accordion.Header>{getText("decors")}</Accordion.Header>
                                <Accordion.Body>
                                    <div className="row">
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/van4.png" alt=""/>
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/van1.png" alt=""/>
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/van2.png" alt=""/>
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/van3.png" alt=""/>
                                        </div>
                                        
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Classic55Menu