import React from 'react'
import TradeMenu from '../components/TradeMenu'
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
                        <TradeMenu />
                    </div>
                </div>
                <Request />
            </div>
        </div>
    )
}

export default Blister