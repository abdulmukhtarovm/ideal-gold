import React from 'react'
import CornersMenu from '../components/CornersMenu'
import AccordionMenu from '../components/AccordionMenu'
import Request from '../components/Request'

const Corners = () => {
    return (
        <div className='Classic55'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <AccordionMenu />
                    </div>
                    <div className="col-lg-8">
                        <CornersMenu />
                    </div>
                </div>
                <Request />
            </div>
        </div>
    )
}

export default Corners