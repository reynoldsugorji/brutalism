import type { ComponentDefaultProps } from "@chakra-ui/react";

export const ButtonTheme: ComponentDefaultProps = {
  variant: {
    primary: {
      color: "white",
      bgColor: "primary.500",
      fontWeight: "bold",
      _focus: {
        color: "green.400",
      },
      _hover: {
        color: "green.400",
      },
    },
  },
};
