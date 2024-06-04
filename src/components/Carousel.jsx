import React, { useRef, useState, useEffect } from "react";
import "./css/Carousel.css";
import { Box, Flex, Text } from "@chakra-ui/react";

const Carousel = ({ children }) => {
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isHovered, setIsHovered] = useState(false);


  
  useEffect(() => {
    const handleScroll = () => {
      if (!isHovered) {
        setScrollPosition(containerRef.current.scrollLeft);
      }
    };
    const interval = setInterval(() => {
      if (!isHovered) {
        containerRef.current.scrollLeft += 1;
      }
    }, 50);
    containerRef.current.addEventListener("scroll", handleScroll);
    return () => {
      containerRef.current.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, [isHovered]);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <Flex direction="column" alignItems="center" gap="2em" height="380px" padding="1em 1em" justifyContent="space-evenly">
    <Flex> 
    <Text fontSize="36px" color="#766F6F" >
    Elevate Your Lifestyle with{" "}
      </Text>
    <Text fontSize="36px">
    Trending Projects{" "}
      </Text>
    </Flex>
    <div
      className="carousel-container"
      ref={containerRef}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className="carousel-content">{children}</div>
    </div>
    </Flex>
  );
};

export default Carousel;
