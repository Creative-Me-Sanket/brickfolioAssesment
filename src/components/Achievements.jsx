import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

import brandFour from "../assets/brandFour.png"
import brandFive from "../assets/brandFive.png"
import brandSix from "../assets/brandSix.png"
const Achievements = () => {
  return (
    <Flex direction="column" padding="2em 2em" marginTop="4em">
    <Flex alignItems="center" height="120px" width="100%" justifyContent="center"  >

    <Text fontSize="36px" color="#766F6F" >
      Unveiling Our,&nbsp;{" "}
      </Text>

      <Text fontSize="36px" color="#F2833E">
        Brick &nbsp;{" "}
      </Text>

      <Text fontSize="36px" color="#766F6F">
        By,&nbsp;{" "}
      </Text>

      <Text fontSize="36px" color="#F2833E">
        Brick &nbsp;{" "}
      </Text>

      <Text fontSize="36px" color="#766F6F" >
      Achievements,&nbsp;{" "}
      </Text>

    </Flex>

<Flex alignItems="center" justifyContent="center" gap="2em">
<Flex width="335px" height="188px" bg="#D9D9D9" borderRadius="2em" direction="column" alignItems="center" justifyContent="center" gap="1em">
    <img src={brandFour} style={{height:"91px" , width:"141px"}}/>
    <Text>Best Performance</Text>
</Flex>
<Flex width="335px" height="188px" bg="#D9D9D9" borderRadius="2em" direction="column" alignItems="center" justifyContent="center" gap="1em">
    <img src={brandFive} style={{height:"91px" , width:"141px"}}/>
    <Text>Best Performance</Text>
</Flex>
<Flex width="335px" height="188px" bg="#D9D9D9" borderRadius="2em" direction="column" alignItems="center" justifyContent="center" gap="1em">
    <img src={brandSix} style={{height:"91px" , width:"141px"}}/>
    <Text>Best Performance</Text>
</Flex>
</Flex>
</Flex>

  )
}

export default Achievements