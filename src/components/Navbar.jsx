import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { getLanguage, getText } from '../locales/index'
import { LANGUAGE } from '../tools/constants';
import { Link, useLocation } from 'react-router-dom'



const Navbar = () => {

    const [navbar, setNavbar] = useState(false)
    const [burger, setBurger] = useState(false)

    const changeNavbar = () => {
        if (window.scrollY >= 30) {
            setNavbar(true);
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeNavbar);

    const changeLanguage = (e) => {
        localStorage.setItem(LANGUAGE, e.target.value)
        document.location.reload(true)
    }
    const location = useLocation()

    return (
        <>
            <div className={`Navbar ${navbar ? 'active' : ''}`}>
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-2 col-md-4 col-sm-4 col-5">
                            <div className="logo">
                                <Link to="/"><img width="100%" src="./img/logo.png" alt="" /></Link>
                            </div>
                        </div>
                        <div className={`col-9 mobileWrap ${burger ? '' : 'burgered'}`}>
                            <div className="navbar-menu">
                                <ul className="nav-menu d-flex justify-content-between align-items-center">
                                    <li className="drop-item">
                                        <Link to='#'> {getText("company")} <FontAwesomeIcon icon={faAngleDown} /> </Link>
                                        <ul className="drop-menu">
                                            <li>
                                                <Link onClick={() => setBurger(!burger)} className={`${location.pathname === '/aboutcompany' ? 'active-link' : ''}`}
                                                    to='/aboutcompany'>{getText("aboutcompany")}</Link>
                                            </li>

                                            <li>
                                                <Link onClick={() => setBurger(!burger)} className={`${location.pathname === '/certificates' ? 'active-link' : ''}`}
                                                    to='/certificates'>{getText("certificates")}</Link>
                                            </li>
                                            <li>
                                                <Link onClick={() => setBurger(!burger)} className={`${location.pathname === '/partner' ? 'active-link' : ''}`}
                                                    to='/partner'>{getText("partners")}</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="drop-item">
                                        <Link onClick={() => setBurger(!burger)} className={`${location.pathname === '/catalog' ? 'active-link' : ''}`}
                                            to='/catalog'>{getText("katalog")} <FontAwesomeIcon icon={faAngleDown} /> </Link>
                                        <ul className="drop-menu w-own">
                                            <li>
                                                <Link onClick={() => setBurger(!burger)} className={`${location.pathname === '/plintus' ? 'active-link' : ''}`}
                                                    to='/plintus'>{getText("plintus")}</Link>
                                            </li>
                                            <li>
                                                <Link onClick={() => setBurger(!burger)} to='/corners'>{getText("wallCorners")}</Link>
                                            </li>
                                            <li><Link onClick={() => setBurger(!burger)} className={`${location.pathname === '/rapids' ? 'active-link' : ''}`}
                                                to='/rapids'>{getText("rapids")}</Link></li>
                                            <li>
                                                <Link onClick={() => setBurger(!burger)} to='/nalichnik'>{getText("plastCase")}</Link>
                                            </li>
                                            <li><Link onClick={() => setBurger(!burger)} to='/blister'>{getText("blister")}</Link></li>
                                            <li>
                                                <Link onClick={() => setBurger(!burger)} to='/counter'>{getText("plinCounter")}</Link>
                                            </li>
                                            <li>
                                                <Link onClick={() => setBurger(!burger)} to='/trade'>{getText("trade")}</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><Link onClick={() => setBurger(!burger)} className={`${location.pathname === '/news' ? 'active-link' : ''}`}
                                        to='/news'>{getText("news")}</Link></li>
                                    <li><Link onClick={() => setBurger(!burger)} className={`${location.pathname === '/contacts' ? 'active-link' : ''}`}
                                        to="/contacts">{getText("contacts")}</Link></li>
                                    <li><Link onClick={() => setBurger(!burger)} className={`${location.pathname === '/question' ? 'active-link' : ''}`}
                                        to='question'>{getText("question")}</Link></li>
                                    <li>
                                        <select className='siteLang' onChange={changeLanguage}>
                                            <option value="ru" selected={getLanguage() === "ru"} >Ру</option>
                                            <option value="uz" selected={getLanguage() === "uz"} >Uz</option>
                                            <option value="en" selected={getLanguage() === "en"} >Eng</option>
                                        </select>
                                    </li>
                                </ul>

                            </div>
                        </div>

                        <div onClick={() => setBurger(!burger)} className={`burger pr-4 ml-auto d-flex d-lg-none ${burger ? 'burgered' : ''}`}>
                            <div className="burger1"></div>
                            <div className="burger2"></div>
                            <div className="burger3"></div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="navbarLine"></div>

        </>
    )
}

export default Navbar