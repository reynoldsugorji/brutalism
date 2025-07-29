import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { ChartCard } from "../common";
import { stackedChartData } from "@/data";

export const DashboardStackedChart = () => {
  return (
    <ChartCard title="Traffic Source">
      <BarChart
        barCategoryGap={15}
        data={stackedChartData}
        margin={{
          left: -20,
          right: -10,
        }}
      >
        <XAxis
          dataKey="date"
          axisLine={{ stroke: "#C7C7C7" }}
          tickLine={false}
          tick={{ fontSize: "0.6rem", fontWeight: 500, fill: "#4f4e4eff" }}
          dy={6}
        />
        <YAxis
          domain={[0, 200]}
          tickCount={11}
          axisLine={{ stroke: "#C7C7C7" }}
          tickLine={false}
          tick={{ fontSize: "0.6rem", fontWeight: 500, fill: "#4f4e4eff" }}
        />
        <Bar dataKey="pointA" stackId="date" fill="#A5D000" />
        <Bar dataKey="pointB" stackId="date" fill="#B4DB33" />
        <Bar dataKey="pointC" stackId="date" fill="#C3E666" />
        <Bar dataKey="pointD" stackId="date" fill="#D2F199" />
        <Bar dataKey="pointE" stackId="date" fill="#E1FCCC" />
      </BarChart>
    </ChartCard>
  );
};
