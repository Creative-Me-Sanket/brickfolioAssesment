import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Banner from './Banner'
import Carousel from './Carousel'
import Card from './Card'

import cardOne from "../assets/cardOne.png"
import cardTwo from "../assets/cardTwo.png"
import cardThree from "../assets/cardThree.png"

const Home = () => {
    const imageUrls = [
        cardOne,
        cardTwo,
        cardThree,
        cardOne,
        cardTwo,
        cardThree,
      ];
  return (
    <>
    {/* <Navbar /> */}
    <Hero />
    <Banner />
    <Carousel>
      {imageUrls.map((item, index) => (
        <Card key={index} index={index} src={item}/>
      ))}
    </Carousel>
    </>
  )
}

export default Home