// import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { getText } from '../locales'

const NalichnikMenu = () => {
    return (
        <div className='Classic55Menu'>
            <div className="about-plintus">
                <h3>{getText("plastCase")}</h3>
                <div className="row">
                    <div className="col-md-4 d-md-block d-flex justify-content-md-between justify-content-center">
                        <img src="./img/nalichnikD.png" alt="" />
                    </div>
                    <div className="col-md-8 main-table">
                        <table className="table w-100 table-striped">
                            <thead>
                                <tr>
                                    <th>
                                        {getText("codeProduct")}
                                    </th>
                                    <th>Нк70</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        {getText("width")}
                                    </td>
                                    <td>
                                        2,2 {getText("m")}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        {getText("height")}
                                    </td>
                                    <td>
                                        44 {getText("mm")}
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
                                    21x15x222 {getText("sm")}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        {getText("weight")}
                                    </td>
                                    <td>
                                    26,5  {getText("kg")}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        {getText("package")}
                                    </td>
                                    <td>
                                        66 {getText("m")}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* <div className="col-12 plin-desc d-flex">
                        <div className="icon">
                            <FontAwesomeIcon icon={faTriangleExclamation} />
                        </div>
                        <div className="desc">
                            <p>{getText("plinDesc")}</p>
                        </div>
                    </div> */}
                    <div className="col-12">
                        <Accordion defaultActiveKey="0">
                            {/* <Accordion.Item eventKey="0">
                                <Accordion.Header>{getText("complect")} </Accordion.Header>
                                <Accordion.Body>
                                    <img width="100%" src="./img/classic60_complect.png" alt="" />
                                </Accordion.Body>
                            </Accordion.Item> */}
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>{getText("montaj")}</Accordion.Header>
                                <Accordion.Body>
                                    <div className="row">
                                        <div className="col-md-4 col-6 mb-3">
                                            <img className='w-100' src="img/nalichnikmontaj1.jpg" alt="" />
                                        </div>
                                        <div className="col-md-4 col-6 mb-3">
                                            <img className='w-100' src="img/nalichnikmontaj2.jpg" alt="" />
                                        </div>
                                        <div className="col-md-4 col-6 mb-3">
                                            <img className='w-100' src="img/nalichnikmontaj3.jpg" alt="" />
                                        </div>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>{getText("decors")}</Accordion.Header>
                                <Accordion.Body>
                                    <div className="row">
                                    <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/nalichnikDekor.jpg" alt=""/>
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/nalichnikDekor (1).jpg" alt=""/>
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/nalichnikDekor (2).jpg" alt=""/>
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/nalichnikDekor (3).jpg" alt=""/>
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/nalichnikDekor (4).jpg" alt=""/>
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/nalichnikDekor (5).jpg" alt=""/>
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/nalichnikDekor (6).jpg" alt=""/>
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/nalichnikDekor (7).jpg" alt=""/>
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/nalichnikDekor (8).jpg" alt=""/>
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/nalichnikDekor (9).jpg" alt=""/>
                                        </div>
                                        <div className="col-md-4 col-6 img mb-4" >
                                            <img className='w-100' src="./img/nalichnikDekor (10).jpg" alt=""/>
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

export default NalichnikMenu