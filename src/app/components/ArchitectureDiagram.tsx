import { Database, Cpu, Layers, ArrowRight } from "lucide-react";
import { Card } from "./ui/card";

const components = [
  {
    title: "Graph Data Structure",
    description: "Custom adjacency list with optimized memory layout",
    icon: Database,
    color: "bg-blue-100 text-blue-700",
  },
  {
    title: "Algorithm Layer",
    description: "Dijkstra's, A*, Yen's K-Shortest Paths",
    icon: Cpu,
    color: "bg-purple-100 text-purple-700",
  },
  {
    title: "Query Optimization",
    description: "Caching, pre-computation, and pruning strategies",
    icon: Layers,
    color: "bg-green-100 text-green-700",
  },
];

export function ArchitectureDiagram() {
  return (
    <div className="py-12 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            System Architecture
          </h2>
          <p className="text-lg text-gray-600">
            High-level overview of the optimization pipeline
          </p>
        </div>

        <div className="flex items-center justify-center gap-6">
          {components.map((component, index) => (
            <div key={index} className="flex items-center gap-6">
              <Card className="p-6 w-72 hover:shadow-lg transition-shadow">
                <div className={`inline-flex p-3 rounded-lg ${component.color} mb-4`}>
                  <component.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {component.title}
                </h3>
                <p className="text-sm text-gray-600">{component.description}</p>
              </Card>
              {index < components.length - 1 && (
                <ArrowRight className="w-8 h-8 text-gray-300" />
              )}
            </div>
          ))}
        </div>

        {/* Technical Details */}
        <div className="mt-12 grid grid-cols-3 gap-6">
          <Card className="p-6 bg-gradient-to-br from-blue-50 to-white border-blue-200">
            <h4 className="font-semibold text-gray-900 mb-3">Data Structures</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Compressed adjacency lists</li>
              <li>• Min-heap priority queue</li>
              <li>• Hash-based airport indexing</li>
            </ul>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-purple-50 to-white border-purple-200">
            <h4 className="font-semibold text-gray-900 mb-3">Algorithms</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Dijkstra's shortest path</li>
              <li>• Yen's K-shortest paths</li>
              <li>• Constrained search variants</li>
            </ul>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-green-50 to-white border-green-200">
            <h4 className="font-semibold text-gray-900 mb-3">Optimizations</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• LRU caching layer</li>
              <li>• Bidirectional search</li>
              <li>• Early termination pruning</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}
