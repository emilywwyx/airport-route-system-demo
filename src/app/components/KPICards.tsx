import { TrendingDown, TrendingUp, Zap, Network } from "lucide-react";
import { Card } from "./ui/card";

const kpis = [
  {
    label: "Airports in Network",
    value: "500",
    icon: Network,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    label: "Active Routes",
    value: "15,000",
    icon: Network,
    color: "text-indigo-600",
    bgColor: "bg-indigo-100",
  },
  {
    label: "Avg Query Latency",
    value: "<200ms",
    icon: Zap,
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    label: "Memory Footprint",
    value: "60% Lower",
    icon: TrendingDown,
    color: "text-emerald-600",
    bgColor: "bg-emerald-100",
    change: "vs baseline",
  },
  {
    label: "Query Throughput",
    value: "35% Higher",
    icon: TrendingUp,
    color: "text-violet-600",
    bgColor: "bg-violet-100",
    change: "vs baseline",
  },
];

export function KPICards() {
  return (
    <div className="py-12 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            System Performance & Scale
          </h2>
          <p className="text-lg text-gray-600">
            Production-grade metrics demonstrating optimization impact
          </p>
        </div>

        <div className="grid grid-cols-5 gap-6">
          {kpis.map((kpi, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className={`inline-flex p-3 rounded-lg ${kpi.bgColor} mb-4`}>
                <kpi.icon className={`w-6 h-6 ${kpi.color}`} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {kpi.value}
              </div>
              <div className="text-sm text-gray-600 mb-1">{kpi.label}</div>
              {kpi.change && (
                <div className="text-xs text-gray-500">{kpi.change}</div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
