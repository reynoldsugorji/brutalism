import { SimpleGrid } from "@chakra-ui/react";
import { BsCash, BsPeople, BsCheckCircle, BsCoin } from "react-icons/bs";
import { StatCard } from "../common";

export const MetricOverview = () => {
  return (
    <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={5}>
      {statsItems.map((item) => (
        <StatCard key={item.name} statsProps={item} />
      ))}
    </SimpleGrid>
  );
};

const statsItems = [
  {
    name: "Total Spend",
    value: "$8,765",
    prevValue: "$10,234",
    progressValue: "-14.32%",
    icon: BsCash,
    trend: false,
  },
  {
    name: "Visitor",
    value: "14,321",
    prevValue: "12,543",
    progressValue: "+14.23%",
    icon: BsPeople,
    trend: false,
  },
  {
    name: "Acquisition",
    value: "1,023",
    prevValue: "876",
    progressValue: "+16.73%",
    icon: BsCheckCircle,
    trend: false,
  },
  {
    name: "Revenue",
    value: "$18,765",
    prevValue: "$15,432",
    progressValue: "+21.67%",
    icon: BsCoin,
    trend: false,
  },
];
