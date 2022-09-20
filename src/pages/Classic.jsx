import React from 'react'
import ClassicMenu from '../components/ClassicMenu'
import AccordionMenu from '../components/AccordionMenu'
import Request from '../components/Request'
import { getText } from '../locales'

const Classic = () => {
    return (
        <div className='Classic'>
            <div className="main-title text-center">
                <h2>{getText("plintus")} {getText("classic")}</h2>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <AccordionMenu />
                    </div>
                    <div className="col-lg-8">
                        <ClassicMenu />
                    </div>
                </div>
                <Request />
            </div>
        </div>
    )
}

export default Classic