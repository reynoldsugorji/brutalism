import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { MdClose } from "react-icons/md";
import { CiMenuFries } from "react-icons/ci";
import { SidebarContent } from "./SidebarContent";

export const MobileSidebar = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Box>
      <IconButton
        icon={<CiMenuFries size={20} />}
        variant="unstyled"
        aria-label="menu"
        onClick={onOpen}
      />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton
            as={MdClose}
            size="sm"
            _hover={{ cursor: "pointer" }}
          />
          <DrawerBody>
            <SidebarContent />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
