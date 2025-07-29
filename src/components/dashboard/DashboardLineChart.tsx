import { chartData } from "@/data";
import {
  Area,
  CartesianGrid,
  ComposedChart,
  Line,
  XAxis,
  YAxis,
} from "recharts";
import { ChartCard } from "../common";

export const DashboardLineAxis = () => {
  const formatLeftYAxis = (value: number) => {
    return value.toString();
  };
  const formatRightYAxis = (value: number) => {
    return `${value}$`;
  };

  return (
    <ChartCard title='Acquisition vs Cost'>
      <ComposedChart
        data={chartData}
        margin={{
          left: -20,
          right: -10,
        }}
      >
        <CartesianGrid stroke="#C7C7C7" horizontal={true} vertical={false} />

        <XAxis
          dataKey="date"
          axisLine={{ stroke: "#C7C7C7" }}
          tickLine={false}
          tick={{ fontSize: "0.6rem", fontWeight: 500, fill: "#4f4e4eff" }}
          dy={6}
        />

        <YAxis
          yAxisId="left"
          orientation="left"
          dataKey="acquisition"
          domain={[0, 800]}
          tickCount={9}
          axisLine={{ stroke: "#C7C7C7" }}
          tickFormatter={formatLeftYAxis}
          tickLine={false}
          tick={{ fontSize: "0.6rem", fontWeight: 500, fill: "#4f4e4eff" }}
        />

        <YAxis
          yAxisId="right"
          orientation="right"
          dataKey="cost"
          domain={[0, 6000]}
          tickCount={7}
          axisLine={{ stroke: "#C7C7C7" }}
          tickFormatter={formatRightYAxis}
          tickLine={false}
          tick={{
            fontSize: "0.6rem",
            fontWeight: 500,
            fill: "#4f4e4eff",
          }}
        />

        <Area
          yAxisId="left"
          type="monotone"
          dataKey="acquisition"
          stroke="#6597e8ff"
          strokeWidth={2}
          fill="#adcbfcff"
          fillOpacity={0.3}
          name="Active Users"
          dot={false}
          activeDot={false}
        />

        <Line
          yAxisId="right"
          type="monotone"
          dataKey="cost"
          stroke="#02ac3aff"
          strokeWidth={3}
          name="Revenue"
          dot={false}
          activeDot={false}
        />
      </ComposedChart>
    </ChartCard>
  );
};
