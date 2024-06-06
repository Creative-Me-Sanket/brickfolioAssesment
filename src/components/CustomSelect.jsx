import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton
} from '@chakra-ui/react';

const CustomSelect = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('Residential');

  const handleSelect = (value) => {
    localStorage.setItem("SELECTED_OPTION",value)
    setSelectedValue(value);
    setIsPopoverOpen(false);
  };

  return (
    <ChakraProvider>
      <Box>
        <Menu>
          <MenuButton as={Button} background="transparent" _hover={{background:"transparent"}}>
            {selectedValue}
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => handleSelect('Residential')}>Residential</MenuItem>
            <MenuItem
              onMouseEnter={() => setIsPopoverOpen(true)}
              onMouseLeave={() => setIsPopoverOpen(false)}
            >
              <Box position="relative">
                Commercial
                {isPopoverOpen && (
                  <Popover
                    isOpen={isPopoverOpen}
                    onClose={() => setIsPopoverOpen(false)}
                    placement="right-start"
                  >
                    <PopoverTrigger>
                      <Box display="inline-block" width="0" height="0" />
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverBody>
                        <MenuItem onClick={() => handleSelect('Leasing')}>Leasing</MenuItem>
                        <MenuItem onClick={() => handleSelect('Preleasing')}>Preleasing</MenuItem>
                        <MenuItem onClick={() => handleSelect('Outright')}>Outright</MenuItem>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                )}
              </Box>
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </ChakraProvider>
  );
};

export default CustomSelect;
