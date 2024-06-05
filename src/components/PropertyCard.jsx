import {
    Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import cardBg from "../assets/cardBg.jpeg";
import building from "../assets/building.png";
import location from "../assets/location.png";
import rupee from "../assets/rupee.png";
import settings from "../assets/settings.png";

const PropertyCard = () => {
  return (
    <Card maxW="360px" minW="350px">
      <CardBody>
        <Image src={cardBg} alt="property background" borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">VTP Pegusus</Heading>

          <Text
            as="span"
            style={{ display: "inline-flex", alignItems: "center" }}
          >
            <img
              src={building}
              style={{ height: "20px", width: "20px", marginRight: "5px" }}
            />
            VTP Reality
          </Text>
          <Text
            as="span"
            style={{ display: "inline-flex", alignItems: "center" }}
          >
            <img
              src={location}
              style={{ height: "20px", width: "20px", marginRight: "5px" }}
            />
            Kharadi, Pune
          </Text>
          <Text
            as="span"
            style={{ display: "inline-flex", alignItems: "center" }}
          >
            <img
              src={settings}
              style={{ height: "20px", width: "20px", marginRight: "5px" }}
            />
            1 BHK | 428 - 447 SQ.FT.
          </Text>

          <Flex justifyContent="space-between">
          <Box>
            <Text
            as="span"
            style={{ display: "inline-flex", alignItems: "center" }}
          >
            <img
              src={rupee}
              style={{ height: "20px", width: "20px", marginRight: "5px" }}
            />
            60 Lacks
          </Text>
            </Box>

            <Button
            borderRadius="2em"
            color="#ff5821"
            >
                Know More
            </Button>

          </Flex>
           
        
        </Stack>
      </CardBody>
    </Card>
  );
};

export default PropertyCard;
