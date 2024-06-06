import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

import brandOne from "../assets/brandOne.png"
import brandTwo from "../assets/brandTwo.png"
import brandThree from "../assets/brandThree.png"

export const Branding = () => {
  return (
    <Flex width="100%" alignItems="center" justifyContent="center" padding="1em 1em" marginTop="4em">
        <Box bg="#eeeeee" width="426px" height="182px" display="flex" alignItems="flex-end" justifyContent="center" flexDirection="column" padding="1em">
        <Text>Our Brand</Text>
        <Text color="#F2833E">Partnerships</Text>
        </Box>

        <Flex width="100%" alignItems="center" justifyContent="space-evenly">
            <img src={brandOne} style={{height:"131px" , width:"149px"}}/>
            <img src={brandTwo} style={{height:"131px" , width:"149px"}}/>
            <img src={brandThree} style={{height:"131px" , width:"149px"}}/>
        </Flex>
    </Flex>
  )
}
