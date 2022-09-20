import React from 'react'
import Request from '../components/Request'
import AccordionMenu from '../components/AccordionMenu'
import Classic70Menu from '../components/Classic70Menu'

const Classic70 = () => {
    return (
        <div className='Classic55'>
     
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <AccordionMenu />
                    </div>
                    <div className="col-lg-8">
                    <Classic70Menu/>
                    </div>
                </div>
                <Request />
            </div>
        </div>
    )
}

export default Classic70