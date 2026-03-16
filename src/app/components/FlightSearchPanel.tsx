import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Card } from "./ui/card";

const airports = [
  { code: "JFK", name: "New York (JFK)" },
  { code: "LAX", name: "Los Angeles (LAX)" },
  { code: "SFO", name: "San Francisco (SFO)" },
  { code: "ORD", name: "Chicago (ORD)" },
  { code: "SEA", name: "Seattle (SEA)" },
  { code: "ATL", name: "Atlanta (ATL)" },
];

interface FlightSearchPanelProps {
  onSearch: (params: {
    origin: string;
    destination: string;
    maxStops: string;
    strategy: string;
  }) => void;
}

export function FlightSearchPanel({ onSearch }: FlightSearchPanelProps) {
  const [origin, setOrigin] = useState("JFK");
  const [destination, setDestination] = useState("LAX");
  const [maxStops, setMaxStops] = useState("2");
  const [strategy, setStrategy] = useState("shortest");

  const handleSearch = () => {
    onSearch({ origin, destination, maxStops, strategy });
  };

  return (
    <Card className="p-6 shadow-lg">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Flight Route Search
      </h3>
      
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="space-y-2">
          <Label htmlFor="origin">Origin</Label>
          <Select value={origin} onValueChange={setOrigin}>
            <SelectTrigger id="origin">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {airports.map((airport) => (
                <SelectItem key={airport.code} value={airport.code}>
                  {airport.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="destination">Destination</Label>
          <Select value={destination} onValueChange={setDestination}>
            <SelectTrigger id="destination">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {airports.map((airport) => (
                <SelectItem key={airport.code} value={airport.code}>
                  {airport.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="maxStops">Max Stops</Label>
          <Select value={maxStops} onValueChange={setMaxStops}>
            <SelectTrigger id="maxStops">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">Non-stop</SelectItem>
              <SelectItem value="1">1 Stop</SelectItem>
              <SelectItem value="2">2 Stops</SelectItem>
              <SelectItem value="3">3 Stops</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="strategy">Routing Strategy</Label>
          <Select value={strategy} onValueChange={setStrategy}>
            <SelectTrigger id="strategy">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="shortest">Shortest Path</SelectItem>
              <SelectItem value="maxstops">Max Stops Constraint</SelectItem>
              <SelectItem value="kalternative">K-Shortest Alternative Routes</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button onClick={handleSearch} className="w-full gap-2">
        <Search className="w-4 h-4" />
        Find Optimal Routes
      </Button>
    </Card>
  );
}
