import React from 'react'
import PlinPartMenu from '../components/PlinPartMenu'
import AccordionMenu from '../components/AccordionMenu'
import Request from '../components/Request'
import { getText } from '../locales'

const Classic = () => {
    return (
        <div className='Classic'>
            <div className="main-title text-center">
                <h2>{getText("plintus")} {getText("hitech")}</h2>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <AccordionMenu />
                    </div>
                    <div className="col-lg-8">
                        <PlinPartMenu />
                    </div>
                </div>
                <Request />
            </div>
        </div>
    )
}

export default Classic