import React from 'react'
import Request from '../components/Request'
import AccordionMenu from '../components/AccordionMenu'
import CounterMenu from '../components/CounterMenu'

const Classic55 = () => {
    return (
        <div className='Classic55'>
     
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <AccordionMenu />
                    </div>
                    <div className="col-lg-8">
                    <CounterMenu/>
                    </div>
                </div>
                <Request />
            </div>
        </div>
    )
}

export default Classic55