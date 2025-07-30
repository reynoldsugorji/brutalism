import { createContext, useContext, useState } from "react";
import type { ChartRange, LineChartData, StackedChartData } from "./types";
import {
  lineChart14days,
  lineChartData7Days,
  stackedChart14Days,
  stackedChart7Days,
} from "@/data";

type DashboardProviderProps = {
  children: React.ReactNode;
};

interface DashboardContextType {
  lineChartData: LineChartData[];
  stackedChartData: StackedChartData[];
  selectedRange: ChartRange;
  setSelectedRange: (range: ChartRange) => void;
}

const DashboardContext = createContext<DashboardContextType | undefined>(
  undefined
);
// eslint-disable-next-line react-refresh/only-export-components
export const useChartData = () => {
  const context = useContext(DashboardContext);
  if (!context)
    throw new Error("useChartData must be used within DashboardProvider");
  return context;
};

export const DashboardProvider = ({ children }: DashboardProviderProps) => {
  const [selectedRange, setSelectedRange] = useState<ChartRange>("7days");

  const lineChartData =
    selectedRange === "7days" ? lineChartData7Days : lineChart14days;
  const stackedChartData =
    selectedRange === "7days" ? stackedChart7Days : stackedChart14Days;
  return (
    <DashboardContext.Provider
      value={{
        lineChartData,
        stackedChartData,
        selectedRange,
        setSelectedRange,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
