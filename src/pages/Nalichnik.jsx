import React from 'react'
import NalichnikMenu from '../components/NalichnikMenu'
import AccordionMenu from '../components/AccordionMenu'
import Request from '../components/Request'

const Nalichnik = () => {
    return (
        <div className='Classic55'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <AccordionMenu />
                    </div>
                    <div className="col-lg-8">
                        <NalichnikMenu />
                    </div>
                </div>
                <Request />
            </div>
        </div>
    )
}

export default Nalichnik