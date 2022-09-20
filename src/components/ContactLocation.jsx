import React from 'react'

const Contact = () => {
  return (
    <div className='ContactLoc'>
             <div className="container">
                <div className="row">
                    <div className="row align-items-center ">
                        <div className="col-lg-6 ml-auto">
                        </div>
                    </div>
                </div>
                <div className="map">
                    <iframe className='w-100' title='Location' 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d374.52296040777753!2d69.313471!3d41.326619!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc9260ad328672cb3!2sOASIS%20business%20centre!5e0!3m2!1sru!2sus!4v1655103079223!5m2!1sru!2sus" 
                    loading="lazy"></iframe>
                </div>
            </div>
    </div>
  )
}

export default Contact