import React from 'react'
import OuterMenu from '../components/OuterMenu'
import AccordionMenu from '../components/AccordionMenu'
import Request from '../components/Request'

const Outer = () => {
    return (
        <div className='Classic55'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <AccordionMenu />
                    </div>
                    <div className="col-lg-8">
                        <OuterMenu />
                    </div>
                </div>
                <Request />
            </div>
        </div>
    )
}

export default Outer