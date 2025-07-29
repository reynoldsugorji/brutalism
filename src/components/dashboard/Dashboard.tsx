import { SimpleGrid, Stack } from "@chakra-ui/react";
import { DashboardHeader } from "./DashboardHeader";
import { MetricOverview } from "./MetricOverview";
import { DashboardLineAxis } from "./DashboardLineChart";
import { DashboardStackedChart } from "./DashboardStackedChart";

export const Dashboard = () => {
  return (
    <Stack spacing={6}>
      <DashboardHeader />
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={5}>
        <MetricOverview />
        <DashboardLineAxis />
        <DashboardStackedChart />
      </SimpleGrid>
    </Stack>
  );
};
