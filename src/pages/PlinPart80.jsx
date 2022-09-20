import React from 'react'
import Request from '../components/Request'
import AccordionMenu from '../components/AccordionMenu'
import PlinPart80Menu from '../components/PlinPart80Menu'

const Classic80 = () => {
    return (
        <div className='Classic55'>
     
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <AccordionMenu />
                    </div>
                    <div className="col-lg-8">
                    <PlinPart80Menu/>
                    </div>
                </div>
                <Request />
            </div>
        </div>
    )
}

export default Classic80