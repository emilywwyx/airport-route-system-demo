import { useState } from "react";
import { Hero } from "./components/Hero";
import { FlightSearchPanel } from "./components/FlightSearchPanel";
import { RouteMap } from "./components/RouteMap";
import { RouteCard } from "./components/RouteCard";
import { KPICards } from "./components/KPICards";
import { PerformanceCharts } from "./components/PerformanceCharts";
import { ArchitectureDiagram } from "./components/ArchitectureDiagram";
import { HowItWorks } from "./components/HowItWorks";
import { Footer } from "./components/Footer";

// Sample route data for different search queries
const sampleRoutes = {
  "JFK-LAX": {
    primary: ["JFK", "ORD", "DEN", "LAX"],
    alternatives: [
      { route: ["JFK", "ATL", "DFW", "LAX"], distance: 2789, duration: "6h 45m", stops: 2 },
      { route: ["JFK", "ORD", "LAX"], distance: 2475, duration: "5h 30m", stops: 1 },
      { route: ["JFK", "DEN", "LAX"], distance: 2550, duration: "5h 50m", stops: 1 },
    ],
  },
  "JFK-SFO": {
    primary: ["JFK", "ORD", "SFO"],
    alternatives: [
      { route: ["JFK", "ORD", "SFO"], distance: 2586, duration: "6h 15m", stops: 1 },
      { route: ["JFK", "DEN", "SFO"], distance: 2650, duration: "6h 30m", stops: 1 },
      { route: ["JFK", "SEA", "SFO"], distance: 2890, duration: "7h 10m", stops: 1 },
    ],
  },
  "JFK-ATL": {
    primary: ["JFK", "ATL"],
    alternatives: [
      { route: ["JFK", "ATL"], distance: 760, duration: "2h 30m", stops: 0 },
      { route: ["JFK", "ORD", "ATL"], distance: 1150, duration: "4h 15m", stops: 1 },
    ],
  },
  default: {
    primary: ["JFK", "ORD", "LAX"],
    alternatives: [
      { route: ["JFK", "ORD", "LAX"], distance: 2475, duration: "5h 30m", stops: 1 },
      { route: ["JFK", "ATL", "LAX"], distance: 2620, duration: "6h 00m", stops: 1 },
      { route: ["JFK", "DEN", "LAX"], distance: 2550, duration: "5h 50m", stops: 1 },
    ],
  },
};

export default function App() {
  const [searchParams, setSearchParams] = useState({
    origin: "JFK",
    destination: "LAX",
    maxStops: "2",
    strategy: "shortest",
  });
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (params: {
    origin: string;
    destination: string;
    maxStops: string;
    strategy: string;
  }) => {
    setSearchParams(params);
    setHasSearched(true);
    // Smooth scroll to results
    setTimeout(() => {
      document.getElementById("results")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  // Get route data based on search
  const routeKey = `${searchParams.origin}-${searchParams.destination}`;
  const routeData = sampleRoutes[routeKey as keyof typeof sampleRoutes] || sampleRoutes.default;

  return (
    <div className="min-h-screen bg-white">
      <Hero />

      {/* Main Demo Section */}
      <div className="py-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <FlightSearchPanel onSearch={handleSearch} />
          </div>

          {hasSearched && (
            <div id="results" className="space-y-8">
              {/* Route Map */}
              <RouteMap highlightedRoute={routeData.primary} />

              {/* Alternative Routes */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Alternative Routes
                  <span className="ml-2 text-sm font-normal text-gray-500">
                    ({routeData.alternatives.length} options found)
                  </span>
                </h3>
                <div className="grid gap-4">
                  {routeData.alternatives.map((alt, index) => (
                    <RouteCard
                      key={index}
                      route={alt.route}
                      distance={alt.distance}
                      duration={alt.duration}
                      stops={alt.stops}
                      recommended={index === 0}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* KPI Cards */}
      <KPICards />

      {/* Performance Charts */}
      <PerformanceCharts />

      {/* Architecture Diagram */}
      <ArchitectureDiagram />

      {/* How It Works */}
      <HowItWorks />

      {/* Footer */}
      <Footer />
    </div>
  );
}
