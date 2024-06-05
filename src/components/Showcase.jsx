import { Box, Button, Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import React from 'react';

import vtpBanner from "../assets/vtpBanner.png";
import PropertyCard from './PropertyCard';

const Showcase = () => {
  return (
    <>
      <Flex alignItems="center" justifyContent="center" direction="column" gap="2em">
        <Flex>
          <Text fontSize="36px" color="#766F6F">
            Brickfolio's Showcase of{" "}
          </Text>
          <Text fontSize="36px">
            Dream Homes{" "}
          </Text>
        </Flex>

        <Grid templateColumns="repeat(2, 1fr)" gap="1em" width="100%">
          <GridItem>
            <Box
              position="relative"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="flex-end"
              padding="1em 1em"
              borderRadius="1em"
              height="100%"
            >
              <Flex
                position="absolute"
                direction="column"
                alignItems="center"
                justifyContent="center"
                gap="1em"
                bottom="5em"
              >
                <Text color="#ffffff" fontSize="38px" fontWeight="700">
                  VTP LUXE Flamante
                </Text>
                <Text color="#ffffff">New Property Launch by VTP</Text>
                <Button>Know More</Button>
              </Flex>
              <img
                src={vtpBanner}
                style={{ height: "100%", width: "100%", borderRadius: "1em" }}
              />
            </Box>
          </GridItem>

          <GridItem>
            <Flex flexWrap="wrap" gap="1em">
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
            </Flex>
          </GridItem>
        </Grid>
      </Flex>
    </>
  );
};

export default Showcase;
