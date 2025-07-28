import type { ComponentDefaultProps } from "@chakra-ui/react";

const fonts = {
  lato: `'Lato', sans-serif`,
};

const Text: ComponentDefaultProps = {
  variants: {
    "logo-text": {
      fontSize: "2xl",
      fontWeight: "bold",
      letterSpacing: "tight",
    },
    "text-header-1": {
      fontSize: ["2xl", "3xl", "4xl"],
      fontWeight: "extrabold",
      lineHeight: "110%",
      fontFamily: "lato",
    },
    "text-header-2": {
      fontSize: ["xl", "2xl", "3xl"],
      fontWeight: "semibold",
      lineHeight: "110%",
      fontFamily: "lato",
    },
    "text-body": {
      fontSize: "sm",
      fontWeight: "semibold",
      fontFamily: "lato",
    },
    "text-card-title": {
      fontSize: "md",
      fontWeight: "semibold",
      color: "gray.700",
      fontFamily: "lato",
    },
    "text-stat": {
      fontSize: "2xl",
      fontWeight: "bold",
      color: "gray.900",
      fontFamily: "lato",
    },
  },
};

export const fontConfig = {
  fonts,
  components: {
    Text,
  },
};
