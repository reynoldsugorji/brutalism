import { Box, Flex, HStack } from "@chakra-ui/react";
import { SidebarContent } from "./SidebarContent";
import { MobileSidebar } from "./MobileSidebar";
import { Navbar } from "./Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Flex minH="100vh" bg="#f4f4f4" overflow="hidden">
      <Box
        w="220px"
        minH="100vh"
        display={{ base: "none", lg: "block" }}
        borderRight="2px solid"
        overflowY="auto"
      >
        <SidebarContent />
      </Box>

      <Flex direction="column" flex="1">
        <HStack
          borderBottom="2px solid"
          p={{ base: 2, lg: 4 }}
          h={{ base: "60px", lg: "80px" }}
          justifyContent={{ base: "space-between" }}
        >
          <Box display={{ base: "block", lg: "none" }}>
            <MobileSidebar />
          </Box>
          <Box as="nav" w="full">
            <Navbar />
          </Box>
        </HStack>

        <Box
          as="main"
          p={6}
          flex="1"
          overflowY="auto"
          maxH={{ base: "calc(100vh - 60px)", lg: "calc(100vh - 80px)" }}
        >
          {children}
        </Box>
      </Flex>
    </Flex>
  );
};
