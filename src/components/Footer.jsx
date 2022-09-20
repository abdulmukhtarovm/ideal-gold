import { faInstagram, faTelegramPlane, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Aos from 'aos'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getText } from '../locales'

const Footer = () => {
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 1700,
    })
  }, [])
  return (
    <div data-aos='fade-up' className="Footer">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-2 z-1 col-5">
            <div className="logo">
              <Link to="/"><img width="100%" src="./img/logo.png" alt="" /></Link>
            </div>
          </div>
          <div className="col-lg-7 col-4 z-1">
            <div className="navbar-menu">
              <ul className="nav-menu d-flex justify-content-between">
                <li>
                  <Link to="/aboutcompany">{getText("company")}</Link>
                </li>
                <li>
                  <Link to="/catalog">{getText("katalog")}</Link>
                </li>
                {/* <li><Link to="">{getText("news")}</Link></li> */}
                <li>
                  <Link to="/contacts">{getText("contacts")}</Link>
                </li>
                <li>
                  <Link to="/question">{getText("question")}</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-1 z-1">
            <div className="socials d-flex justify-content-around">
              <div className="insta">
                <a href="https://www.instagram.com/idealgold.uz/"><FontAwesomeIcon icon={faInstagram}/></a>
              </div>
              <div className="telegram">
                <a href="https://t.me/+APdQSdbkQcNlY2Vi"><FontAwesomeIcon icon={faTelegramPlane}/></a>
              </div>
              <div className="facebook">
                <a href="https://www.facebook.com/profile.php?id=100080669627866"><FontAwesomeIcon icon={faFacebookF}/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="copyright">
      © 2022 Ideal Gold | Created by <a target='blank' href="https://kokoagency.uz/">kOkO digital agency</a>
      </div> */}
    </div>
  )
}

export default Footer