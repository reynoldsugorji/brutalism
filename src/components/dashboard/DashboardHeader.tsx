import { Button, ButtonGroup, HStack, Text } from "@chakra-ui/react";

export const DashboardHeader = () => {
  return (
    <HStack justifyContent="space-between">
      <Text variant="text-header-2">Marketing</Text>
      <ButtonGroup
        size="sm"
        isAttached
        boxShadow="3px 3px 0px black"
        borderRadius="4px"
      >
        <Button borderLeft="2px solid" borderTop="2px solid">
          7 Days
        </Button>
        <Button borderTop="2px solid">14 Days</Button>
        <Button borderTop="2px solid" borderRight="none">
          1 Month
        </Button>
      </ButtonGroup>
    </HStack>
  );
};
