import React from 'react'
import Request from '../components/Request'
import AccordionMenu from '../components/AccordionMenu'
import PlintusMenu from '../components/PlintusMenu'
import { getText } from '../locales'

const Plintus = () => {
  return (
    <div className='Plintus'>
      <div className="main-title text-center">
        <h2>{getText("plinths")}</h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <AccordionMenu />
          </div>
          <div className="col-lg-8">
            <PlintusMenu />
          </div>
        </div>
        <Request />
      </div>

    </div>
  )
}

export default Plintus