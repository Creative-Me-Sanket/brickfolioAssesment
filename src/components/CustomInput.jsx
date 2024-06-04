import React from 'react';
import { InputGroup, Input, Select, Box, Flex, border } from '@chakra-ui/react';
import CustomSelect from './CustomSelect';

const CustomInput = () => {
  return (
    <Flex minW="670px" maxWidth="700px" align="center" className='inputFlex' background="#ffffff" borderRadius="1em">
      <InputGroup size="md" className='group' border="none">
        <Input
        className='inputOri'
          placeholder="Search By     City, Location, Project, Developer"
          border="none"
          _focus={{
            border:"none",
            outline:"none",
            boxShadow:"none"
        }}
        _active={{
            border:"none",
            outline:"none",
            boxShadow:"none"
        }}
        />
      </InputGroup>
      <Box
        height="2rem"
        width="1.5px"
        background="
        #F2833E"
        mx={2}
      />
      <CustomSelect />
      {/* <Select
        placeholder="Residential"
        width="50%"
        size="md"
        border="none"
        _focus={{
            border:"none",
            outline:"none",
            boxShadow:"none"
        }}
        _active={{
            border:"none",
            outline:"none",
            boxShadow:"none"
        }}
      >
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select> */}
    </Flex>
  );
};

export default CustomInput;
