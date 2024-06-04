import { Box, Button, Flex, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import brandImage from "../assets/heroBackground.jpg"
import whiteLogo from "../assets/whiteLogo.png"
import CustomInput from './CustomInput'
import { SearchIcon } from '@chakra-ui/icons'

const Hero = () => {
  return (
    <Flex
      w={'full'}
      h={'100vh'}
      backgroundImage={`url(${brandImage})`}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
    >
      <Flex
        width="100%"
        direction="column"
        justifyContent="space-between"
        margin="4em 4em"
        padding="1em 1em"
      >
        <Box maxW="226px" maxH="100px" minH="57px">
          <img src={whiteLogo} style={{ height: "100%", width: "100%" }} alt="Logo" />
        </Box>
        <VStack w={'full'} justify={'center'}>
          <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
            <Stack direction={'row'} alignItems="center">
              <CustomInput />
              <Button
                rounded={'full'}
                background="#F2833E"
                color={'white'}
                width="142px"
                _hover={{ bg: 'whiteAlpha.500' }}
                leftIcon={<SearchIcon />}
              >
                Search
              </Button>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
    </Flex>
  )
}

export default Hero
