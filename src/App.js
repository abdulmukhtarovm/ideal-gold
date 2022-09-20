
import React, { useEffect } from 'react'
import About from './components/About'
import Header from './components/Header'
import InNum from './components/InNum'
import Partners from './components/Partners'
import Products from './components/Products'
import Request from './components/Request'
import "aos/dist/aos.css";
import "aos/dist/aos.js";
import Aos from 'aos'

const App = () => {
  
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 1700,
    })
  }, [])

  useEffect(() => {
    setTimeout(() => {
      console.clear();
      console.log('Instagram: @abdulmukhtarov_m');
    }, 3000);
  });
  return (
    <>
      <Header />
      <Products />
      <About />
      <InNum />
      <Partners />
      <Request />
    </>
  )
}

export default App