import { Logo, Promo, SearchBox } from "@/components/common";
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
import { SubItems } from "./SubItem";

export type SidebarItemProps = {
  name: string;
  icon: IconType;
  moreItems?: [{ name: string }];
};

export const SidebarContent = () => {
  const mainItems = sidebarItems.slice(0, sidebarItems.length - 6);
  const collapsibleItems = sidebarItems.slice(8);
  return (
    <Box as="aside" px={{ base: 2, lg: 4 }} py={6}>
      <Stack>
        <Box px={3} pb={3}>
          <Logo />
        </Box>
        <Box display={{ base: "block", lg: "none" }}>
          <SearchBox />
        </Box>
        {mainItems.map((item) => (
          <HStack
            key={item.name}
            px={3}
            py={2}
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
        {collapsibleItems.map((item) => (
          <SubItems item={item} />
        ))}
        <Box pt={6}>
          <Promo />
        </Box>
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
    moreItems: [
      {
        name: "Comp 1",
      },
    ],
  },
  {
    name: "Pages",
    icon: BsFileEarmarkTextFill,
    moreItems: [
      {
        name: "Page 1",
      },
    ],
  },
  {
    name: "Apps",
    icon: BsFillPuzzleFill,
    moreItems: [
      {
        name: "App 1",
      },
    ],
  },
  {
    name: "Content",
    icon: BsFileEarmarkFontFill,
    moreItems: [
      {
        name: "Content 1",
      },
    ],
  },
  {
    name: "Users",
    icon: BsPersonFill,
    moreItems: [
      {
        name: "User 1",
      },
    ],
  },
  {
    name: "Documentation",
    icon: BsFileTextFill,
    moreItems: [
      {
        name: "Doc 1",
      },
    ],
  },
];
