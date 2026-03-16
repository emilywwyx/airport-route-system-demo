import { Search, Cpu, CheckCircle } from "lucide-react";
import { Card } from "./ui/card";

const steps = [
  {
    number: "01",
    title: "Graph Construction",
    description:
      "Build an optimized graph representation from airport and route data using custom adjacency list structure.",
    icon: Search,
    color: "bg-blue-500",
  },
  {
    number: "02",
    title: "Algorithm Execution",
    description:
      "Apply graph traversal algorithms (Dijkstra's, A*, Yen's) with heuristics and constraints to find optimal paths.",
    icon: Cpu,
    color: "bg-purple-500",
  },
  {
    number: "03",
    title: "Result Ranking",
    description:
      "Rank and return multiple route alternatives based on distance, time, and stop constraints with sub-200ms latency.",
    icon: CheckCircle,
    color: "bg-green-500",
  },
];

export function HowItWorks() {
  return (
    <div className="py-12 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">How It Works</h2>
          <p className="text-lg text-gray-600">
            Three-step pipeline for optimal route computation
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className={`inline-flex p-4 rounded-full ${step.color} text-white mb-6`}>
                <step.icon className="w-8 h-8" />
              </div>
              <div className="text-sm font-bold text-gray-400 mb-2">
                STEP {step.number}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
