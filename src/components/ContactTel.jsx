import { faFacebookF, faInstagram, faTelegramPlane } from '@fortawesome/free-brands-svg-icons'
import { faLocationDot, faMapLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { getText } from '../locales'

const ContactTel = () => {
    return (
        <div className='ContactTel'>
            <div className="addres">
                <div className="item">
                   <FontAwesomeIcon icon={faLocationDot}/>
                </div>
                <div className="text">
                    <h6>{getText("address")}</h6>
                    <p>{getText("grafik")}</p>
                </div>
            </div>
            <div className="phone">
                <div className="item">
                   <FontAwesomeIcon icon={faPhone}/>
                </div>
                <div className="text">
                    <p>{getText("ourTelNum")}</p>
                    <h6>{getText("tel")}</h6>
                </div>
            </div>
            <div className="orient">
                <div className="item">
                    <FontAwesomeIcon icon={faMapLocationDot}/>
                </div>
                <div className="text">
                    <h6>{getText("orientir")}</h6>
                </div>
            </div>
            <div className="socials d-flex">
                <div className="insta"><a href="https://www.instagram.com/idealgold.uz/"> <FontAwesomeIcon icon={faInstagram}/> </a>
                </div>
                <div className="telegram"><a href="https://t.me/+APdQSdbkQcNlY2Vi"><FontAwesomeIcon icon={faTelegramPlane} /></a></div>
                <div className="facebook"><a href="https://www.facebook.com/profile.php?id=100080669627866"><FontAwesomeIcon icon={faFacebookF}/></a></div>
            </div>
        </div>
    )
}

export default ContactTel