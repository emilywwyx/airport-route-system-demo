import { motion } from "motion/react";

interface Airport {
  code: string;
  name: string;
  x: number;
  y: number;
}

interface Route {
  from: string;
  to: string;
  isPrimary?: boolean;
}

const airports: Airport[] = [
  { code: "JFK", name: "New York", x: 720, y: 280 },
  { code: "LAX", name: "Los Angeles", x: 180, y: 380 },
  { code: "SFO", name: "San Francisco", x: 120, y: 220 },
  { code: "ORD", name: "Chicago", x: 550, y: 240 },
  { code: "SEA", name: "Seattle", x: 140, y: 100 },
  { code: "ATL", name: "Atlanta", x: 650, y: 400 },
  { code: "DEN", name: "Denver", x: 340, y: 260 },
  { code: "DFW", name: "Dallas", x: 450, y: 420 },
  { code: "MIA", name: "Miami", x: 720, y: 520 },
  { code: "BOS", name: "Boston", x: 780, y: 200 },
];

interface RouteMapProps {
  highlightedRoute?: string[];
  alternativeRoutes?: string[][];
}

export function RouteMap({ highlightedRoute, alternativeRoutes = [] }: RouteMapProps) {
  // Generate network routes (not all airports connected to avoid clutter)
  const networkRoutes: Route[] = [
    { from: "JFK", to: "LAX" },
    { from: "JFK", to: "ORD" },
    { from: "JFK", to: "ATL" },
    { from: "LAX", to: "SFO" },
    { from: "LAX", to: "DEN" },
    { from: "SFO", to: "SEA" },
    { from: "ORD", to: "DEN" },
    { from: "ORD", to: "ATL" },
    { from: "SEA", to: "DEN" },
    { from: "DEN", to: "DFW" },
    { from: "ATL", to: "MIA" },
    { from: "ATL", to: "DFW" },
    { from: "JFK", to: "BOS" },
    { from: "SFO", to: "ORD" },
    { from: "LAX", to: "DFW" },
  ];

  const getAirport = (code: string) => airports.find((a) => a.code === code);

  const createCurvePath = (from: Airport, to: Airport) => {
    const dx = to.x - from.x;
    const dy = to.y - from.y;
    const curvature = 0.3;
    const controlX = from.x + dx * 0.5 + dy * curvature;
    const controlY = from.y + dy * 0.5 - dx * curvature;
    return `M ${from.x} ${from.y} Q ${controlX} ${controlY} ${to.x} ${to.y}`;
  };

  const isRouteHighlighted = (from: string, to: string) => {
    if (!highlightedRoute || highlightedRoute.length < 2) return false;
    for (let i = 0; i < highlightedRoute.length - 1; i++) {
      if (
        (highlightedRoute[i] === from && highlightedRoute[i + 1] === to) ||
        (highlightedRoute[i] === to && highlightedRoute[i + 1] === from)
      ) {
        return true;
      }
    }
    return false;
  };

  const isAirportHighlighted = (code: string) => {
    return highlightedRoute?.includes(code);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">
        Route Network Visualization
      </h3>
      
      <svg
        viewBox="0 0 900 600"
        className="w-full h-auto"
        style={{ maxHeight: "500px" }}
      >
        {/* Background grid */}
        <defs>
          <pattern
            id="grid"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 50 0 L 0 0 0 50"
              fill="none"
              stroke="#f0f0f0"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="900" height="600" fill="url(#grid)" />

        {/* Network routes (background) */}
        {networkRoutes.map((route, index) => {
          const from = getAirport(route.from);
          const to = getAirport(route.to);
          if (!from || !to) return null;

          const highlighted = isRouteHighlighted(route.from, route.to);

          return (
            <motion.path
              key={`${route.from}-${route.to}-${index}`}
              d={createCurvePath(from, to)}
              fill="none"
              stroke={highlighted ? "#3b82f6" : "#e5e7eb"}
              strokeWidth={highlighted ? "3" : "2"}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.05 }}
            />
          );
        })}

        {/* Highlighted route with animation */}
        {highlightedRoute && highlightedRoute.length > 1 && (
          <>
            {highlightedRoute.slice(0, -1).map((code, index) => {
              const from = getAirport(code);
              const to = getAirport(highlightedRoute[index + 1]);
              if (!from || !to) return null;

              return (
                <g key={`highlighted-${index}`}>
                  <motion.path
                    d={createCurvePath(from, to)}
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="4"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.3 + index * 0.2 }}
                  />
                  <motion.path
                    d={createCurvePath(from, to)}
                    fill="none"
                    stroke="#60a5fa"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="8 4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.6 }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                  />
                </g>
              );
            })}
          </>
        )}

        {/* Airport nodes */}
        {airports.map((airport, index) => {
          const highlighted = isAirportHighlighted(airport.code);
          const isOrigin = highlightedRoute?.[0] === airport.code;
          const isDestination =
            highlightedRoute?.[highlightedRoute.length - 1] === airport.code;

          return (
            <g key={airport.code}>
              <motion.circle
                cx={airport.x}
                cy={airport.y}
                r={highlighted ? 12 : 8}
                fill={
                  isOrigin || isDestination
                    ? "#2563eb"
                    : highlighted
                    ? "#3b82f6"
                    : "#ffffff"
                }
                stroke={highlighted ? "#2563eb" : "#9ca3af"}
                strokeWidth="2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 + index * 0.03 }}
              />
              <motion.text
                x={airport.x}
                y={airport.y - 20}
                textAnchor="middle"
                className="text-xs font-semibold"
                fill={highlighted ? "#1e40af" : "#4b5563"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.03 }}
              >
                {airport.code}
              </motion.text>
              <motion.text
                x={airport.x}
                y={airport.y - 8}
                textAnchor="middle"
                className="text-[10px]"
                fill="#6b7280"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.25 + index * 0.03 }}
              >
                {airport.name}
              </motion.text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
