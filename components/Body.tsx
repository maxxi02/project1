"use client"
import React from 'react'
import Header from './Header'
import Footer from './Footer'
import HomePage from './HomePage'
import FeaturesSection from './FeaturesSection'

// const divStyle = {
//   backgroundImage: 'url("/bg123.png")',
//   backgroundSize: 'cover',
//   backgroundPosition: 'right top',
//   backgroundRepeat: 'no-repeat',
//   width: '100%',
//   height: '100%', 

// };

function Body() {
  return (
    <div >
      <Header/>
      <HomePage/>
      <FeaturesSection/>
      <Footer/>
    </div>
  )
}

export default Body