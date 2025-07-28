import { Icon, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

export const SearchBox = () => {
  return (
    <InputGroup>
      <Input
        borderRadius="4px"
        variant="none"
        w="full"
        placeholder="Search..."
        fontFamily="lato"
        size="sm"
        bgColor="white"
        h={{ base: "30px", lg: "48px" }}
        border="2px solid"
        _focus={{ border: "2px solid" }}
      />
      <InputRightElement h="full">
        <Icon as={BsSearch} />
      </InputRightElement>
    </InputGroup>
  );
};
