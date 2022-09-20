import React from 'react'
import Request from '../components/Request'
import AccordionMenu from '../components/AccordionMenu'
import Classic55Menu from '../components/Classic55Menu'

const Classic55 = () => {
    return (
        <div className='Classic55'>
     
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <AccordionMenu />
                    </div>
                    <div className="col-lg-8">
                    <Classic55Menu/>
                    </div>
                </div>
                <Request />
            </div>
        </div>
    )
}

export default Classic55