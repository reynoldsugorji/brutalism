import { HStack, Icon, Progress, Stack, Text } from "@chakra-ui/react";
import type { IconType } from "react-icons";

type ProgressBarProps = {
  progItem: {
    value: number;
    percentage: number;
    icon: IconType;
    progressBarColors: {
      filledColor: string;
      unfilledColor: string;
    };
  };
};

export const ProgressBar = ({ progItem }: ProgressBarProps) => {
  const formatCurrency = (amount: number): string => {
    return `$${amount.toLocaleString("en-US")}`;
  };
  return (
    <HStack w="full" spacing={4}>
      <Icon as={progItem.icon} boxSize={6} />
      <Stack w="full" spacing={1}>
        <HStack justifyContent="space-between" w="full">
          <Text
            fontSize="0.65rem"
            variant="text-body"
          >{`Remaining: ${formatCurrency(progItem.value)}`}</Text>
          <Text variant="text-body" fontSize="0.65rem">
            {`${progItem.percentage}%`}
          </Text>
        </HStack>
        <Progress
          h="6px"
          borderLeftRadius="4px"
          sx={{
            "& > div:first-of-type": {
              backgroundColor: progItem.progressBarColors.filledColor,
            },
            backgroundColor: progItem.progressBarColors.unfilledColor,
          }}
          value={progItem.percentage}
        />
      </Stack>
    </HStack>
  );
};
