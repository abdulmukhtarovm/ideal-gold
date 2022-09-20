import React from 'react'
import RapidsMenu from '../components/RapidsMenu'
import AccordionMenu from '../components/AccordionMenu'
import Request from '../components/Request'

const Rapids = () => {
    return (
        <div className='Classic55'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <AccordionMenu />
                    </div>
                    <div className="col-lg-8">
                        <RapidsMenu />
                    </div>
                </div>
                <Request />
            </div>
        </div>
    )
}

export default Rapids