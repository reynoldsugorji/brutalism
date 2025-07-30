import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { ChartCard } from "../common";
import { useTheme } from "@chakra-ui/react";
import { useChartData } from "@/providers";
import { formatXAxis } from "@/utils";

export const DashboardStackedChart = () => {
  const theme = useTheme();
  const successShades = theme.colors.success;
  const grayShades = theme.colors.gray;

  const { stackedChartData, selectedRange } = useChartData();

  return (
    <ChartCard title="Traffic Source">
      <BarChart
        barCategoryGap={8}
        data={stackedChartData}
        margin={{
          left: -23,
          right: 5,
        }}
      >
        <XAxis
          tickLine={false}
          tick={{ fontSize: "0.6rem", fontWeight: 500, fill: grayShades[400] }}
          dy={6}
          dataKey="date"
          tickFormatter={(value) => formatXAxis(value, selectedRange)}
        />
        <YAxis
          domain={[0, 200]}
          tickCount={11}
          axisLine={{ stroke: grayShades[100] }}
          tickLine={false}
          tick={{ fontSize: "0.6rem", fontWeight: 500, fill: grayShades[400] }}
        />
        <Bar dataKey="pointA" stackId="date" fill={successShades[500]} />
        <Bar dataKey="pointB" stackId="date" fill={successShades[400]} />
        <Bar dataKey="pointC" stackId="date" fill={successShades[300]} />
        <Bar dataKey="pointD" stackId="date" fill={successShades[200]} />
        <Bar dataKey="pointE" stackId="date" fill={successShades[100]} />
      </BarChart>
    </ChartCard>
  );
};
