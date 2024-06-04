import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  RadioGroup,
  Radio,
  Text,
} from "@chakra-ui/react";

const CustomSelect = () => {
  const [selectedOption, setSelectedOption] = useState("Residential");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCommercialOption, setSelectedCommercialOption] = useState("");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    if (option === "Commercial") {
      setModalOpen(true);
    } else {
      setModalOpen(false);
    }
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleCommercialOptionChange = (event) => {
    setSelectedCommercialOption(event);
    setSelectedOption(event);
    setModalOpen(false);
  };
  

  return (
    <Flex alignItems="center">
      <Menu>
        <MenuButton as={Button} mr={4} bg="transparent" _hover={{bg:"transparent"}} _active={{bg:"transparent"}}>
          {selectedOption}
        </MenuButton>
        <MenuList>
          <MenuItem onClick={() => handleOptionChange("Residential")}>Residential</MenuItem>
          <MenuItem onClick={() => handleOptionChange("Commercial")}>Commercial</MenuItem>
        </MenuList>
      </Menu>
      <Modal isOpen={modalOpen} onClose={handleModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">Choose Commercial Option</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <RadioGroup onChange={(e) => handleCommercialOptionChange(e)}>
                <Flex direction="column">
                <Radio value="Leasing">Leasing</Radio>
              <Radio value="Preleasing">Preleasing</Radio>
              <Radio value="Outright">Outright</Radio>
                </Flex>
            </RadioGroup>
          </ModalBody>
          <ModalFooter>
            <Button bg="#F2833E" color="#ffffff" onClick={handleModalClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default CustomSelect;
