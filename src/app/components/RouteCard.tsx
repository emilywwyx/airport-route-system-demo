import { Plane, Clock, TrendingUp } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

interface RouteCardProps {
  route: string[];
  distance: number;
  duration: string;
  stops: number;
  recommended?: boolean;
}

export function RouteCard({
  route,
  distance,
  duration,
  stops,
  recommended = false,
}: RouteCardProps) {
  return (
    <Card
      className={`p-5 transition-all hover:shadow-md ${
        recommended ? "ring-2 ring-blue-500 bg-blue-50" : ""
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2">
          {route.map((airport, index) => (
            <div key={index} className="flex items-center">
              <span className="font-semibold text-gray-900">{airport}</span>
              {index < route.length - 1 && (
                <Plane className="w-4 h-4 mx-2 text-gray-400" />
              )}
            </div>
          ))}
        </div>
        {recommended && (
          <Badge variant="default" className="bg-blue-600">
            Recommended
          </Badge>
        )}
      </div>

      <div className="grid grid-cols-3 gap-4 text-sm">
        <div className="flex items-center gap-2 text-gray-600">
          <TrendingUp className="w-4 h-4" />
          <span>{distance.toLocaleString()} mi</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <Clock className="w-4 h-4" />
          <span>{duration}</span>
        </div>
        <div className="text-gray-600">
          <span className="font-medium">{stops}</span> {stops === 1 ? "stop" : "stops"}
        </div>
      </div>
    </Card>
  );
}
