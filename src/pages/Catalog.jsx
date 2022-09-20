import React, { useEffect } from 'react'
import Products from '../components/Products'
import Request from '../components/Request'
// import AccordionMenu from '../components/AccordionMenu'
import Aos from 'aos'

const Catalog = () => {

  useEffect(() => {
    Aos.init({
      once: true,
      duration: 1700,
    })
  }, [])

  return (
    <div className='Catalog'>
        <Products/>
        <Request/>
        {/* <AccordionMenu/> */}
    </div>
  )
}

export default Catalog