import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import { Card } from "./ui/card";

const latencyData = [
  { operation: "Single Route", baseline: 450, optimized: 180 },
  { operation: "K-Shortest", baseline: 890, optimized: 320 },
  { operation: "Max Stops", baseline: 520, optimized: 195 },
  { operation: "Batch Query", baseline: 1200, optimized: 480 },
];

const throughputData = [
  { load: "100 req/s", baseline: 98, optimized: 100 },
  { load: "500 req/s", baseline: 92, optimized: 100 },
  { load: "1000 req/s", baseline: 78, optimized: 99 },
  { load: "2000 req/s", baseline: 54, optimized: 95 },
  { load: "5000 req/s", baseline: 28, optimized: 88 },
];

const memoryData = [
  { nodes: "100", baseline: 45, optimized: 18 },
  { nodes: "250", baseline: 112, optimized: 45 },
  { nodes: "500", baseline: 225, optimized: 90 },
  { nodes: "1000", baseline: 450, optimized: 180 },
  { nodes: "2000", baseline: 900, optimized: 360 },
];

export function PerformanceCharts() {
  return (
    <div className="py-12 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Performance Analysis
          </h2>
          <p className="text-lg text-gray-600">
            Baseline vs Optimized Graph Implementation
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-8">
          {/* Latency Comparison */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Query Latency (ms)
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={latencyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="operation" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Legend />
                <Bar dataKey="baseline" fill="#94a3b8" name="Baseline" />
                <Bar dataKey="optimized" fill="#3b82f6" name="Optimized" />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          {/* Throughput Comparison */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Throughput (% Success Rate)
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={throughputData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="load" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} domain={[0, 100]} />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="baseline"
                  stroke="#94a3b8"
                  strokeWidth={2}
                  name="Baseline"
                  dot={{ r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="optimized"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  name="Optimized"
                  dot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Memory Usage */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Memory Usage (MB) - Scalability Test
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={memoryData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis
                dataKey="nodes"
                label={{ value: "Number of Airports", position: "insideBottom", offset: -5 }}
                tick={{ fontSize: 12 }}
              />
              <YAxis
                label={{ value: "Memory (MB)", angle: -90, position: "insideLeft" }}
                tick={{ fontSize: 12 }}
              />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="baseline"
                stroke="#94a3b8"
                strokeWidth={2}
                name="Baseline"
                dot={{ r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="optimized"
                stroke="#10b981"
                strokeWidth={2}
                name="Optimized"
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </div>
  );
}
