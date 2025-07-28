import { SearchBox } from "@/components";
import { Avatar, Box, Center, HStack, Icon, Text } from "@chakra-ui/react";
import type { IconType } from "react-icons";
import {
  BsGearFill,
  BsTranslate,
  BsEnvelopeFill,
  BsFillBellFill,
} from "react-icons/bs";

import profilePhoto from "@/assets/images/contact1.jpg";

export const Navbar = () => {
  return (
    <HStack justifyContent="space-between">
      <Box>
        <SearchBox />
      </Box>
      <HStack>
        {navItems.map((item, index) => (
          <Center
            borderRadius="full"
            border="1px solid"
            key={index}
            bgColor="white"
            position="relative"
            p={3}
          >
            <Center
              borderRadius="full"
              bgColor="red.300"
              pos="absolute"
              top={0}
              right="-5px"
              boxSize={5}
              p={1}
              display={item.notificationCount > 0 ? "flex" : "none"}
            >
              <Text fontFamily="lato" fontSize="0.75rem">
                {item.notificationCount}
              </Text>
            </Center>
            <Icon as={item.icon} />
          </Center>
        ))}
        <Avatar boxSize="40px" src={profilePhoto} />
      </HStack>
    </HStack>
  );
};

type NavItemProps = {
  icon: IconType;
  notificationCount: number;
};

const navItems: NavItemProps[] = [
  {
    icon: BsGearFill,
    notificationCount: 0,
  },
  {
    icon: BsTranslate,
    notificationCount: 0,
  },
  {
    icon: BsEnvelopeFill,
    notificationCount: 4,
  },
  {
    icon: BsFillBellFill,
    notificationCount: 1,
  },
];
