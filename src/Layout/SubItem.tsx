import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  HStack,
  Icon,
  Text,
} from "@chakra-ui/react";
import type { SidebarItemProps } from "./SidebarContent";
import { BsChevronDown } from "react-icons/bs";

interface SidebarAccordionItemProps {
  item: SidebarItemProps;
}

export const SubItems = ({ item }: SidebarAccordionItemProps) => {
  return (
    <Accordion allowToggle>
      <AccordionItem border="none">
        <AccordionButton
          px={3}
          py={2}
          _hover={{
            bgColor: "white",
            border: "2px solid",
            cursor: "pointer",
            borderRadius: "4px",
          }}
        >
          <Box as={HStack} flex="1" textAlign="left">
            <Icon as={item.icon} />
            <Text variant="text-body">{item.name}</Text>
          </Box>
          <AccordionIcon as={BsChevronDown} fontSize="xs" />
        </AccordionButton>
        <AccordionPanel px={0} pb={2}>
          {item.moreItems?.map((item) => (
            <Box key={item.name} px={3} py={2} bgColor='gray.50'>
              <Text variant="text-body">{item.name}</Text>
            </Box>
          ))}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
