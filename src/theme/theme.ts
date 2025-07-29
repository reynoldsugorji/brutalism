import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { Button } from "./button";
import { fontConfig } from "./text";
import { colors } from "./color";

const config: ThemeConfig = {
  useSystemColorMode: true,
  cssVarPrefix: "exstacck",
};

export const theme = extendTheme({
  config,
  components: {
    ...fontConfig,
    Button,
  },
  colors,
});
