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
                <h3>{getText("blister")}</h3>
                <div className="row">
                    <div className="col-md-4 d-md-block d-flex justify-content-md-between justify-content-center">
                        <img className='w-100' src="./img/blistrD.png" alt="" />
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
                                        {getText("width")}
                                    </td>
                                    <td>
                                        2.8 {getText("m")}
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
                                        50 {getText("sht")}.
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        {getText("box")}
                                    </td>
                                    <td>
                                        11x4x281 {getText("sm")}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        {getText("weight")}
                                    </td>
                                    <td>
                                        13 {getText("kg")}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        {getText("package")}
                                    </td>
                                    <td>
                                        140 {getText("m")}
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
                                            <img className='w-100' src="img/bl1.jpg" alt="" />
                                        </div>
                                        <div className="col-md-4 col-6 mb-3">
                                            <img className='w-100' src="img/bl2.jpg" alt="" />
                                        </div>
                                        <div className="col-md-4 col-6 mb-3">
                                            <img className='w-100' src="img/bl3.png" alt="" />
                                        </div>
                                        <div className="col-md-4 col-6">
                                            <img className='w-100' src="img/bl4.jpg" alt="" />
                                        </div>
                                        <div className="col-md-4 col-6">
                                            <img className='w-100' src="img/bl5.jpg" alt="" />
                                        </div>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>{getText("decors")}</Accordion.Header>
                                <Accordion.Body>
                                    <div className="row">
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/ugol (1).jpg" alt="" />
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/ugol (2).jpg" alt="" />
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/ugol (3).jpg" alt="" />
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/ugol (4).jpg" alt="" />
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/ugol (5).jpg" alt="" />
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/ugol (6).jpg" alt="" />
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/ugol (7).jpg" alt="" />
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/ugol (8).jpg" alt="" />
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/ugol (9).jpg" alt="" />
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/ugol (10).jpg" alt="" />
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/ugol (11).jpg" alt="" />
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/ugol (12).jpg" alt="" />
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/ugol (12).jpg" alt="" />
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/ugol (13).jpg" alt="" />
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/ugol (14).jpg" alt="" />
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/ugol (15).jpg" alt="" />
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/ugol (16).jpg" alt="" />
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/ugol (17).jpg" alt="" />
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/ugol (18).jpg" alt="" />
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/ugol (19).jpg" alt="" />
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/ugol (20).jpg" alt="" />
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/ugol (21).jpg" alt="" />
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/ugol (22).jpg" alt="" />
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/ugol (23).jpg" alt="" />
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/ugol (24).jpg" alt="" />
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/ugol (25).jpg" alt="" />
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/ugol (26).jpg" alt="" />
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/ugol (27).jpg" alt="" />
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/ugol (28).jpg" alt="" />
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/ugol (29).jpg" alt="" />
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/ugol (30).jpg" alt="" />
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/ugol (31).jpg" alt="" />
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/ugol (32).jpg" alt="" />
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/ugol (33).jpg" alt="" />
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/ugol (34).jpg" alt="" />
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/ugol (35).jpg" alt="" />
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/ugol (36).jpg" alt="" />
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/ugol (37).jpg" alt="" />
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/ugol (38).jpg" alt="" />
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/ugol (39).jpg" alt="" />
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/ugol (40).jpg" alt="" />
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