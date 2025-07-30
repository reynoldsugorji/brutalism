import { Button, Stack, Text } from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";

export const Promo = () => {
  return (
    <Stack
      p={4}
      border="2px solid"
      spacing={3}
      bgColor="white"
      borderRadius="4px"
    >
      <Text variant="text-header-2" fontSize='sm'>Upgrade to Pro</Text>
      <Text variant="text-body">
        Are you looking for more features?Check out our pro version
      </Text>
      <Button leftIcon={<BsArrowRight />} variant="secondary">
        Upgrade Now
      </Button>
    </Stack>
  );
};
