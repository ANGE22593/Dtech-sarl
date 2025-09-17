
import React from "react";
import {
  ChartContainer,
} from "@/components/ui/chart";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  TooltipProps,
} from "recharts";

interface ChartData {
  name: string;
  value: number;
  [key: string]: any;
}

interface PieChartProps {
  data: ChartData[];
  colors: string[];
  dataKey?: string;
}

interface BarChartProps {
  data: any[];
  keys: { key: string; color: string; name: string }[];
  xAxisKey: string;
}

export const StatsBarChart: React.FC<BarChartProps> = ({ data, keys, xAxisKey }) => {
  return (
    <div className="h-60 w-full">
      <ChartContainer
        config={{
          visitors: { color: "#2563eb" },
          pageviews: { color: "#16a34a" },
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={xAxisKey} />
            <YAxis />
            <Tooltip />
            <Legend />
            {keys.map((item) => (
              <Bar
                key={item.key}
                dataKey={item.key}
                fill={item.color}
                name={item.name}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
};

export const StatsPieChart: React.FC<PieChartProps> = ({
  data,
  colors,
  dataKey = "value",
}) => {
  return (
    <div className="h-60 w-full">
      <ChartContainer
        config={{
          value: { theme: { light: "#2563eb", dark: "#3b82f6" } },
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              dataKey={dataKey}
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
};
