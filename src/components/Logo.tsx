import { Center, HStack, Text } from "@chakra-ui/react";

export const Logo = () => {
  return (
    <HStack spacing={2}>
      <Center
        boxSize="30px"
        bgColor="green.50"
        boxShadow="3px 3px 0px black"
        border="1px solid"
        borderRadius="4px"
      >
        <Text variant="logo-text">B</Text>
      </Center>
      <Text variant="logo-text">rutalism</Text>
    </HStack>
  );
};
