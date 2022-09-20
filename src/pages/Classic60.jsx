import React from 'react'
import Request from '../components/Request'
import AccordionMenu from '../components/AccordionMenu'
import Classic60Menu from '../components/Classic60Menu'

const Classic60 = () => {
    return (
        <div className='Classic55'>
     
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <AccordionMenu />
                    </div>
                    <div className="col-lg-8">
                    <Classic60Menu/>
                    </div>
                </div>
                <Request />
            </div>
        </div>
    )
}

export default Classic60