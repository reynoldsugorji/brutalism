import { Card, Stack, Text } from "@chakra-ui/react";
import { ResponsiveContainer } from "recharts";

type ChartCardProps = {
  title: string;
  children: React.ReactElement;
};
export const ChartCard = ({ title, children }: ChartCardProps) => {
  return (
    <Card
      borderRadius="4px"
      border="2px solid"
      bgColor="white"
      as={Stack}
      spacing={4}
      p={2}
      py={4}
    >
      <Text variant="text-body" fontWeight="bold" px={3}>
        {title}
      </Text>
      <ResponsiveContainer width="100%" height={300}>
        {children}
      </ResponsiveContainer>
    </Card>
  );
};
