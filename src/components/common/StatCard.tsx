import { Box, Card, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import type { IconType } from "react-icons";

type StatCardProps = {
  statsProps: {
    name: string;
    value: string;
    prevValue: string;
    progressValue: string;
    icon: IconType;
    trend: boolean;
  };
};

const getColor = (value: string) => {
  return value.startsWith("-") ? "red.500" : "green.100";
};

export const StatCard = ({ statsProps }: StatCardProps) => {
  return (
    <Card borderRadius="4px" border="2px solid" bgColor="white" p={4} pb='3.5em'>
      <HStack justifyContent="space-between">
        <Stack h="full" alignItems="start">
          <Text variant="text-body" fontWeight="bold">
            {statsProps.name}
          </Text>
          <Text variant="text-header-1">{statsProps.value}</Text>
          <Box>
            <Text variant="text-sm">Previous</Text>
            <Text variant="text-sm">{statsProps.prevValue}</Text>
          </Box>
        </Stack>
        <Stack h="full" justifyContent="end" alignItems="end">
          <Icon as={statsProps.icon} boxSize={6} color="green.100" />
          <Box>
            <Text variant="text-sm">Progress</Text>
            <Text variant="text-sm" color={getColor(statsProps.progressValue)}>
              {statsProps.progressValue}
            </Text>
          </Box>
        </Stack>
      </HStack>
    </Card>
  );
};
