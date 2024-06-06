import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  return (
    <Box as="footer" bg="#ffffff" color="#949490" py="6" marginTop="4em">
      <Flex justify="space-between" mx="auto" maxW="1200px" px="4">
        {/* Section 1 */}
        <Box>
          <Heading as="h4" size="md" mb="4" color="#F2833E">Company</Heading>
          <Flex direction="column" gap="2">
            <Link href="#">About Us</Link>
            <Link href="#">Blog</Link>
            <Link href="#">Careers</Link>
            <Link href="#">Contact Us</Link>
          </Flex>
        </Box>

        {/* Section 2 */}
        <Box>
          <Heading as="h4" size="md" mb="4" color="#F2833E">Property Centre</Heading>
          <Flex direction="column" gap="2">
            <Link href="#">Commercial Property For Investment</Link>
            <Link href="#">Commercial Property For Leasing</Link>
            <Link href="#">Commercial Property For Outright</Link>
            <Link href="#">Why Commercial Real Estate</Link>
          </Flex>
        </Box>

        {/* Section 3 */}
        <Box>
          <Heading as="h4" size="md" mb="4" color="#F2833E">Quick Links</Heading>
          <Flex direction="column" gap="2">
            <Link href="#">Commercial Property</Link>
            <Link href="#">Residential Property</Link>
            <Link href="#">Management Services</Link>
          </Flex>
        </Box>

        {/* Section 4 */}
        <Box>
          <Heading as="h4" size="md" mb="4" color="#F2833E">Legal</Heading>
          <Flex direction="column" gap="2">
            <Link href="#">Privacy Policy</Link>
          </Flex>
        </Box>
      </Flex>
      <Text textAlign="center" mt="6">
        © {new Date().getFullYear()} Copyright Brickfolio Pvt. Ltd... All Rights Reserved.
      </Text>
    </Box>
  );
};

export default Footer;
