import React from 'react'
import Hero from './Hero'
import Banner from './Banner'
import Carousel from './Carousel'
import Card from './Card'

import cardOne from "../assets/cardOne.png"
import cardTwo from "../assets/cardTwo.png"
import cardThree from "../assets/cardThree.png"
import Showcase from './Showcase'
import Footer from './Footer'
import { Branding } from './Branding'
import Achievements from './Achievements'

const Home = () => {
    const imageUrls = [
        {
          src : cardOne,
          title : "2,3 & 4 BHK with",
          subTitle : "2 Ground Floors",
          content : "1.26 Cr Onwards"
        },
        {
          src: cardTwo,
          title : "Premium 2 & 3",
          subTitle : "Bedroom Homes",
          content : "Next To yoo Villas"
        },
        {
          src: cardThree,
          title : "2,3 & 4 BHK with",
          subTitle : "2 Ground Floors",
          content : "1.26 Cr Onwards"
        },
        {
          src : cardOne,
          title : "2,3 & 4 BHK with",
          subTitle : "2 Ground Floors",
          content : "1.26 Cr Onwards"
        },
        {
          src: cardTwo,
          title : "Premium 2 & 3",
          subTitle : "Bedroom Homes",
          content : "Next To yoo Villas"
        },
        {
          src: cardThree,
          title : "2,3 & 4 BHK with",
          subTitle : "2 Ground Floors",
          content : "1.26 Cr Onwards"
        },

      ];
  return (
    <>
    <Hero />
    <Banner />
    <Carousel>
      {imageUrls.map((item, index) => (
        <Card key={index} index={index} src={item?.src} heading={item?.title} subHeading={item?.subTitle} content = {item?.content}/>
      ))}
    </Carousel>
    <Showcase />
    <Branding />
    <Achievements />
    <Footer />
    </>
  )
}

export default Home