import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { IChartData } from "@/types";

interface StackedAreaChartProps {
  data: IChartData[];
  width: number;
}

export const StackedAreaChart = ({ data, width }: StackedAreaChartProps) => {
  return (
    <AreaChart
      width={width}
      height={250}
      data={data}
      margin={{
        top: 0,
        right: 30,
        left: -16,
        bottom: 0,
      }}
    >
      <defs>
        <linearGradient id="colorBlue" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(15, 129, 206, 0.2)" />
          <stop offset="100%" stopColor="rgba(15, 129, 206, 0)" />
        </linearGradient>
        <linearGradient id="colorRed" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(197, 45, 129, 0.2)" />
          <stop offset="100%" stopColor="rgba(197, 45, 129, 0)" />
        </linearGradient>
        <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(27, 186, 100, 0.2)" />
          <stop offset="100%" stopColor="rgba(27, 186, 100, 0)" />
        </linearGradient>
      </defs>
      <CartesianGrid
        stroke="rgba(255, 255, 255, 0.04)"
        strokeDasharray={undefined}
      />
      <XAxis
        height={32}
        tickLine={false}
        dataKey="date"
        tick={{
          fontSize: 11,
          fill: "rgba(255, 255, 255, 0.6)",
          dy: 16,
        }}
      />
      <YAxis
        tickLine={false}
        tick={{
          fontSize: 11,
          fill: "rgba(255, 255, 255, 0.6)",
          dx: -21,
        }}
      />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="blue"
        stackId="1"
        stroke="#0F81CE"
        fill="url(#colorBlue)"
        strokeWidth={2}
        dot={{ fill: "#0F81CE", radius: 4 }}
      />
      <Area
        type="monotone"
        dataKey="red"
        stackId="1"
        stroke="#C52D81"
        fill="url(#colorRed)"
        strokeWidth={2}
        dot={{ fill: "#C52D81", radius: 4 }}
      />
      <Area
        type="monotone"
        dataKey="green"
        stackId="1"
        stroke="#3CDC86"
        fill="url(#colorGreen)"
        strokeWidth={2}
        dot={{ fill: "#3CDC86", radius: 4 }}
      />
    </AreaChart>
  );
};
