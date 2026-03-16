import { Plane, Github, FileText } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
          <Plane className="w-4 h-4" />
          <span className="text-sm font-medium">Portfolio Project</span>
        </div>

        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Airport Route Optimization System
        </h1>

        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
          A high-performance graph algorithm implementation for optimizing flight routes.
          Built with custom data structures achieving 60% lower memory footprint and 35% higher throughput.
        </p>

        <div className="flex items-center justify-center gap-4">
          <Button
            size="lg"
            className="gap-2"
            onClick={() =>
              window.open("https://github.com/emilywwyx/airport-route-system", "_blank")
            }
          >
            <Github className="w-5 h-5" />
            View on GitHub
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="gap-2"
            onClick={() => window.open("/airport-route-writeup.pdf", "_blank")}
          >
            <FileText className="w-5 h-5" />
            Technical Write-Up
          </Button>
        </div>
      </div>
    </div>
  );
}