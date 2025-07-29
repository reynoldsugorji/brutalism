import { Logo } from "@/components/common";
import { Box, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import type { IconType } from "react-icons";
import {
  BsBarChartFill,
  BsBriefcaseFill,
  BsFillClipboardDataFill,
  BsMegaphoneFill,
  BsCircleSquare,
  BsFillRocketTakeoffFill,
  BsFillPuzzleFill,
  BsFileEarmarkFontFill,
  BsDiagram3Fill,
  BsFileEarmarkTextFill,
  BsFileTextFill,
  BsFillLayersFill,
  BsPersonFill,
} from "react-icons/bs";

type SidebarItemProps = {
  name: string;
  icon: IconType;
};

export const SidebarContent = () => {
  return (
    <Box as="aside" px={{ base: 2, lg: 4 }} py={6}>
      <Stack>
        <Box px={3} pb={3}>
          <Logo />
        </Box>
        {sidebarItems.map((item) => (
          <HStack
            key={item.name}
            px={3} py={2}
            _hover={{
              px: 3,
              py: 2,
              bgColor: "white",
              border: "2px solid",
              cursor: "pointer",
              borderRadius: "4px",
            }}
          >
            <Icon as={item.icon} />
            <Text variant="text-body">{item.name}</Text>
          </HStack>
        ))}
      </Stack>
    </Box>
  );
};

const sidebarItems: SidebarItemProps[] = [
  {
    name: "Marketing",
    icon: BsMegaphoneFill,
  },
  {
    name: "Analytics",
    icon: BsBarChartFill,
  },
  {
    name: "Business",
    icon: BsBriefcaseFill,
  },
  {
    name: "Project",
    icon: BsFillClipboardDataFill,
  },
  {
    name: "HRM",
    icon: BsDiagram3Fill,
  },
  {
    name: "Mobile App",
    icon: BsCircleSquare,
  },
  {
    name: "Landing Page",
    icon: BsFillRocketTakeoffFill,
  },
  {
    name: "Components",
    icon: BsFillLayersFill,
  },
  {
    name: "Pages",
    icon: BsFileEarmarkTextFill,
  },
  {
    name: "Apps",
    icon: BsFillPuzzleFill,
  },
  {
    name: "Content",
    icon: BsFileEarmarkFontFill,
  },
  {
    name: "Users",
    icon: BsPersonFill,
  },
  {
    name: "Documentation",
    icon: BsFileTextFill,
  },
];
