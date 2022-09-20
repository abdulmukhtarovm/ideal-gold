import React from 'react'
import BlisterMenu from '../components/BlisterMenu'
import AccordionMenu from '../components/AccordionMenu'
import Request from '../components/Request'

const Blister = () => {
    return (
        <div className='Classic55'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <AccordionMenu />
                    </div>
                    <div className="col-lg-8">
                        <BlisterMenu />
                    </div>
                </div>
                <Request />
            </div>
        </div>
    )
}

export default Blister