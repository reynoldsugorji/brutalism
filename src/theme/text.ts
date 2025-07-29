import type { ComponentDefaultProps } from "@chakra-ui/react";

const fonts = {
  inter: "Inter",
};

const Text: ComponentDefaultProps = {
  variants: {
    "logo-text": {
      fontSize: "2xl",
      fontWeight: "bold",
      letterSpacing: "tight",
    },
    "text-header-1": {
      fontSize: ["xl", "2xl", "2xl"],
      fontWeight: "extrabold",
      lineHeight: "110%",
      fontFamily: "inter",
    },
    "text-header-2": {
      fontSize: "md",
      fontWeight: "extrabold",
      lineHeight: "110%",
      fontFamily: "inter",
    },
    "text-body-1": {
      fontSize: "sm",
      fontWeight: "semibold",
      fontFamily: "inter",
    },
    "text-body": {
      fontSize: "xs",
      fontWeight: "semibold",
      fontFamily: "inter",
    },
    "text-stat": {
      fontSize: "2xl",
      fontWeight: "bold",
      color: "gray.900",
      fontFamily: "inter",
    },
    "text-sm": {
      fontSize: "0.65rem",
      fontWeight: "bold",
      lineHeight: "0.8rem",
    },
  },
};

export const fontConfig = {
  fonts,
  Text,
};
