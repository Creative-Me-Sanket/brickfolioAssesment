import {  Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Banner = () => {
  return (
    <Flex alignItems="center" height="309px" justifyContent="center" bg="#F1F0F0" >
      <Text fontSize="36px" color="#F2833E">
        0% &nbsp;{" "}
      </Text>
      <Text fontSize="36px" color="#766F6F" >
      Brokerage,&nbsp;{" "}
      </Text>
      <Text fontSize="36px" color="#F2833E">
        100%,&nbsp;{" "}
      </Text>
      <Text fontSize="36px" color="#766F6F" >
      Dream Home,&nbsp;{" "}
      </Text>
      <Text fontSize="36px" color="#766F6F" fontWeight="100" fontFamily="Poppins" >Your Journey, Our Priority.</Text>
    </Flex>
  )
}

export default Banner