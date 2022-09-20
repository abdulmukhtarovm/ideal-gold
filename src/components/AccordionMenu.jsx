import React from 'react';

import Accordion from 'react-bootstrap/Accordion';
import { getText } from '../locales';
import { Link, useLocation } from 'react-router-dom'

export default function Example() {
    const location = useLocation()

    return (
       <div className="AccordionMenu">
         <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header><Link to="/plintus">{getText("plinths")} </Link></Accordion.Header>
                <Accordion.Body>
                    <ul className='plin-main'>
                        <li><Link className={`${location.pathname === '/classic' ? 'active-link' : ''}`} to="/classic">{getText("classic")}</Link>
                            <ul className='plin-razmer'>
                                <li><Link className={`${location.pathname === '/classic55' ? 'active-link' : ''}`} to="/classic55">55 {getText("mm")}</Link></li>
                                <li><Link className={`${location.pathname === '/classic60' ? 'active-link' : ''}`} to="/classic60">60 {getText("mm")}</Link></li>
                                <li><Link className={`${location.pathname === '/classic70' ? 'active-link' : ''}`} to="/classic70">70 {getText("mm")}</Link></li>
                            </ul>
                        </li>
                        <li><Link className={`${location.pathname === '/plinpart' ? 'active-link' : ''}`} to="/plinpart">{getText("plinPart")}</Link>
                            <ul className='plin-razmer'>
                                <li><Link className={`${location.pathname === '/plinpart70' ? 'active-link' : ''}`} to="/plinpart70">70 {getText("mm")}</Link></li>
                                <li><Link className={`${location.pathname === '/plinpart80' ? 'active-link' : ''}`} to="/plinpart80">80 {getText("mm")}</Link></li>
                            </ul>
                        </li>
                        <li><Link className={`${location.pathname === '/counter' ? 'active-link' : ''}`} to="/counter">{getText("plinCounter")}</Link></li>
                    </ul>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Link to=""><Accordion.Header>{getText("wallCorners")}</Accordion.Header></Link>
                <Accordion.Body>
                    <ul className='plin-main'>
                        {/* <li><Link className={`${location.pathname === '/profiles' ? 'active-link' : ''}`} to="">{getText("profiles")}</Link></li> */}
                        <li><Link className={`${location.pathname === '/corners' ? 'active-link' : ''}`} to="/corners">{getText("corners")}</Link></li>
                        <li><Link className={`${location.pathname === '/outer' ? 'active-link' : ''}`} to="/outer">{getText("outer")}</Link></li>
                    </ul>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Link className={`${location.pathname === '/rapids' ? 'active-link' : ''}`} to="/rapids"><Accordion.Header>{getText("rapids")}</Accordion.Header></Link>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Link className={`${location.pathname === '/nalichnik' ? 'active-link' : ''}`} to="/nalichnik"><Accordion.Header>{getText("plastCase")}</Accordion.Header></Link>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
                <Link className={`${location.pathname === '/blister' ? 'active-link' : ''}`} to="/blister"><Accordion.Header>{getText("blister")}</Accordion.Header></Link>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
                <Link className={`${location.pathname === '/trade' ? 'active-link' : ''}`} to="/trade"><Accordion.Header>{getText("trade")}</Accordion.Header></Link>
            </Accordion.Item>
        </Accordion>
       </div>
    );
}