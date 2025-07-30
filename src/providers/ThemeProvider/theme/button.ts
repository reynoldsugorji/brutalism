import type { ComponentDefaultProps } from "@chakra-ui/react";

export const Button: ComponentDefaultProps = {
  defaultProps: {
    fontFamily: "inter",
    variant: "primary",
    borderRadius: "4px",
  },
  variants: {
    primary: {
      px: 6,
      bgColor: "white",
      borderRight: "2px solid",
      fontWeight: "semibold",
      borderColor: "black",
      _focus: {
        borderColor: "black",
      },
      _selected: {
        borderColor: "black",
      },
      _hover: {
        color: "success.400",
        bgColor: "white",
        borderColor: "black",
      },
    },
    secondary: {
      bgColor: "success.200",
      border: "2px solid",
      fontWeight: "bold",
      fontSize: "xs",
    },
  },
};
