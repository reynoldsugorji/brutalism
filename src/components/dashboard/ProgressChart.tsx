import { Stack } from "@chakra-ui/react";
import { ChartCard, ProgressBar } from "../common";
import {
  BsFacebook,
  BsTwitterX,
  BsGoogle,
  BsTiktok,
  BsBing,
} from "react-icons/bs";

const colors = [
  {
    filledColor: "success.500",
    unfilledColor: "success.100",
  },
  {
    filledColor: "success.500",
    unfilledColor: "success.100",
  },
  {
    filledColor: "success.500",
    unfilledColor: "success.100",
  },
  {
    filledColor: "red.400",
    unfilledColor: "red.100",
  },
  {
    filledColor: "orange.300",
    unfilledColor: "orange.100",
  },
];

export const ProgressChart = () => {
  return (
    <ChartCard title="Budget by Platform">
      <Stack px={3}>
        {items.map((item, index) => (
          <ProgressBar
            key={item.value}
            progItem={{ ...item, progressBarColors: colors[index] }}
          />
        ))}
      </Stack>
    </ChartCard>
  );
};

const items = [
  {
    value: 12345,
    percentage: 60,
    icon: BsFacebook,
  },
  {
    value: 1543,
    percentage: 86,
    icon: BsTwitterX,
  },
  {
    value: 5678,
    percentage: 67,
    icon: BsGoogle,
  },
  {
    value: 3456,
    percentage: 21,
    icon: BsTiktok,
  },
  {
    value: 2099,
    percentage: 35,
    icon: BsBing,
  },
];
