import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { getText } from '../locales'

const Classic60Menu = () => {
    return (
        <div className='Classic55Menu'>
            <div className="about-plintus">
                <h3>{getText("plintus")} {getText("classic")} 60 {getText("mm")}</h3>
                <div className="row">
                    <div className="col-md-4 d-md-block d-flex justify-content-md-between justify-content-center">
                        <img src="./img/classic60D.png" alt="" />
                    </div>
                    <div className="col-md-8 main-table">
                        <table className="table w-100 table-striped">
                            <thead>
                                <tr>
                                    <th>
                                        {getText("codeProduct")}
                                    </th>
                                    <th>К-П60п</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        {getText("width")}
                                    </td>
                                    <td>
                                        2,5 {getText("m")}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        {getText("height")}
                                    </td>
                                    <td>
                                        60 {getText("mm")}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        {getText("inthebox")}
                                    </td>
                                    <td>
                                        40 {getText("sht")}.
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        {getText("box")}
                                    </td>
                                    <td>
                                        18x15x253 {getText("sm")}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        {getText("weight")}
                                    </td>
                                    <td>
                                        18 {getText("kg")}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        {getText("package")}
                                    </td>
                                    <td>
                                        100 {getText("m")}
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
                            <p>{getText("plinDesc")}</p>
                        </div>
                    </div>
                    <div className="col-12">
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>{getText("complect")} </Accordion.Header>
                                <Accordion.Body>
                                    <img width="100%" src="./img/classic60_complect.png" alt="" />
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>{getText("montaj")}</Accordion.Header>
                                <Accordion.Body>
                                    <div className="row">
                                    <div className="col-md-4 col-6 mb-3">
                                            <img className='w-100' src="img/classicM.png" alt="" />
                                        </div>
                                        <div className="col-md-4 col-6 mb-3">
                                            <img className='w-100' src="img/classicM1.png" alt="" />
                                        </div>
                                        <div className="col-md-4 col-6 mb-3">
                                            <img className='w-100' src="img/classicM2.png" alt="" />
                                        </div>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                               <Accordion.Header>{getText("decors")}</Accordion.Header>
                                <Accordion.Body>
                                <div className="row">
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/55-01.jpg" alt=""/>
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/55-02.jpg" alt=""/>
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/55-03.jpg" alt=""/>
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/55-04.jpg" alt=""/>
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/55-05.jpg" alt=""/>
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/55-06.jpg" alt=""/>
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/55-07.jpg" alt=""/>
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/55-08.jpg" alt=""/>
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/55-09.jpg" alt=""/>
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/55-10.jpg" alt=""/>
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/55-11.jpg" alt=""/>
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/55-12.jpg" alt=""/>
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/55-13.jpg" alt=""/>
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/55-14.jpg" alt=""/>
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/55-15.jpg" alt=""/>
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/55-16.jpg" alt=""/>
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/55-17.jpg" alt=""/>
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/55-18.jpg" alt=""/>
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/55-19.jpg" alt=""/>
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/55-20.jpg" alt=""/>
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/55-21.jpg" alt=""/>
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/55-22.jpg" alt=""/>
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/55-23.jpg" alt=""/>
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/55-24.jpg" alt=""/>
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/55-25.jpg" alt=""/>
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/55-26.jpg" alt=""/>
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

export default Classic60Menu