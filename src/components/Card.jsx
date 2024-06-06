import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Card = ({ src, heading, subHeading, content }) => {
  return (
    <Flex
      width="400px"
      height="250px"
      backgroundImage={`url(${src})`}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
      flexDirection="column"
      justifyContent="center"
      borderRadius="2em"
      marginRight="20px"
      overflow="hidden"
    >
      <Flex margin="2em 1em" gap="4px" direction="column" padding="1em 1em">
        <Text color="#ffffff">{heading}</Text>
        <Text color="#ffffff">{subHeading}</Text>
        <Text color="#ffffff">{content}</Text>
        <Button width="100px" onClick={() => alert("Welcome To Brickfolio")}>
          Book Now
        </Button>
      </Flex>
    </Flex>
  );
};

export default Card;
