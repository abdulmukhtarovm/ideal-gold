import React from 'react'
import ContactLocation from '../components/ContactLocation'
import ContactTel from '../components/ContactTel'
import { getText } from '../locales'
import Request from '../components/Request'

const Contacts = () => {
  return (
    <>
     <div className="container">
      <div className="main-title text-center">
        <h2>{getText("ourContacts")}</h2>
      </div>
      <div className="row">
        <div className="col-md-6">
          <ContactLocation />
        </div>
        <div className="col-md-6">
          <ContactTel />
        </div>
      </div>
      <Request/>
     </div>
    </>
  )
}

export default Contacts