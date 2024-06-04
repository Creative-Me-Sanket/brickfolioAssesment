import { Box, Button, Flex, IconButton, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <Box>
      <Flex
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
        <Box maxWidth="150px" maxHeight="100px" minHeight="80px">
            <img src={logo} style={{height:"100%" , width:"100%"}} />
        </Box>
        </Flex>

        <Stack
          flex={{ base: 2, md: 2 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={8}>
        <Link><Text>Home</Text></Link>
        <Link><Text>About Us</Text></Link>
        <Link><Text>Services</Text></Link>
        <Link><Text>Managed Offices</Text></Link>
        <Link><Text>Blog</Text></Link>
        <Link><Text>Contact</Text></Link>
        </Stack>
      </Flex>

    </Box>
  )
}

export default Navbar