import {
  Area,
  CartesianGrid,
  ComposedChart,
  Line,
  XAxis,
  YAxis,
} from "recharts";
import { ChartCard } from "../common";
import { useTheme } from "@chakra-ui/react";
import { useChartData } from "@/providers";
import { formatXAxis } from "@/utils";

export const DashboardLineAxis = () => {
  const theme = useTheme();
  const grayShades = theme.colors.gray;
  const greenShades = theme.colors.green;
  const infoShades = theme.colors.info;

  const { lineChartData, selectedRange } = useChartData();

  const formatLeftYAxis = (value: number) => {
    return value.toString();
  };
  const formatRightYAxis = (value: number) => {
    return `${value}$`;
  };

  return (
    <ChartCard title="Acquisition vs Cost">
      <ComposedChart
        data={lineChartData}
        margin={{
          left: -23,
          right: -10,
        }}
      >
        <CartesianGrid
          stroke={grayShades[100]}
          horizontal={true}
          vertical={false}
        />

        <XAxis
          dataKey="date"
          axisLine={{ stroke: grayShades[100] }}
          tickLine={false}
          tick={{ fontSize: "0.6rem", fontWeight: 500, fill: grayShades[400] }}
          dy={6}
          tickFormatter={(value) => formatXAxis(value, selectedRange )}
        />

        <YAxis
          yAxisId="left"
          orientation="left"
          dataKey="acquisition"
          domain={[0, 800]}
          tickCount={9}
          axisLine={{ stroke: grayShades[100] }}
          tickFormatter={formatLeftYAxis}
          tickLine={false}
          tick={{ fontSize: "0.6rem", fontWeight: 500, fill: grayShades[400] }}
        />

        <YAxis
          yAxisId="right"
          orientation="right"
          dataKey="cost"
          domain={[0, 6000]}
          tickCount={7}
          axisLine={{ stroke: grayShades[100] }}
          tickFormatter={formatRightYAxis}
          tickLine={false}
          tick={{
            fontSize: "0.6rem",
            fontWeight: 500,
            fill: grayShades[400],
          }}
        />

        <Area
          yAxisId="left"
          type="monotone"
          dataKey="acquisition"
          stroke={infoShades[300]}
          strokeWidth={2}
          fill={infoShades[100]}
          fillOpacity={0.3}
          name="Active Users"
          dot={false}
          activeDot={false}
        />

        <Line
          yAxisId="right"
          type="monotone"
          dataKey="cost"
          stroke={greenShades[300]}
          strokeWidth={3}
          name="Revenue"
          dot={false}
          activeDot={false}
        />
      </ComposedChart>
    </ChartCard>
  );
};
