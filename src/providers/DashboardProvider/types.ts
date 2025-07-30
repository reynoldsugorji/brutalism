export type ChartRange = "7days" | "14days";

export interface LineChartData {
  date: string;
  acquisition: number;
  cost: number;
}

export interface StackedChartData {
  date: string;
  pointA: number;
  pointB: number;
  pointC: number;
  pointD: number;
  pointE: number;
}
