import { useChartData } from "@/providers";
import { Button, ButtonGroup, Stack, Text } from "@chakra-ui/react";

export const DashboardHeader = () => {
  const { selectedRange, setSelectedRange } = useChartData();

  return (
    <Stack
      justifyContent="space-between"
      direction={{ base: "column", md: "row" }}
      spacing={{ base: 4, md: 2 }}
    >
      <Text variant="text-header-2">Marketing</Text>
      <ButtonGroup
        size="sm"
        isAttached
        boxShadow="3px 3px 0px black"
        borderRadius="4px"
        w={{ base: "full", md: "30%", xl: "20%" }}
      >
        <Button
          w="full"
          borderTop="2px solid"
          borderLeft="2px solid"
          color={selectedRange === "7days" ? "success.500" : "#000"}
          borderColor="black"
          onClick={() => setSelectedRange("7days")}
        >
          7 Days
        </Button>
        <Button
          w="full"
          borderTop="2px solid"
          color={selectedRange === "14days" ? "success.500" : "#000"}
          onClick={() => setSelectedRange("14days")}
        >
          14 Days
        </Button>
        <Button w="full" borderTop="2px solid" borderRight="none">
          1 Month
        </Button>
      </ButtonGroup>
    </Stack>
  );
};
