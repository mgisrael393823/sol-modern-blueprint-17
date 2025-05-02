
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { ChartBarIcon, TrendingUpIcon, ChartPieIcon, Star, Award, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const competitors = [
  {
    property: "Competitor A",
    distance: "0.5",
    occupancy: "94%",
    rentRange: "$2,200-3,500",
    yearBuilt: "2021",
    avgUnitSize: "950 sq ft",
    studioRent: "$2,200",
    oneBedroomRent: "$2,800",
    twoBedroomRent: "$3,500",
    amenityScore: "8/10"
  },
  {
    property: "Competitor B",
    distance: "0.8",
    occupancy: "96%",
    rentRange: "$2,300-3,600",
    yearBuilt: "2020",
    avgUnitSize: "925 sq ft",
    studioRent: "$2,300",
    oneBedroomRent: "$2,900",
    twoBedroomRent: "$3,600",
    amenityScore: "9/10"
  },
  {
    property: "Competitor C",
    distance: "1.2",
    occupancy: "92%",
    rentRange: "$2,100-3,300",
    yearBuilt: "2019",
    avgUnitSize: "875 sq ft",
    studioRent: "$2,100",
    oneBedroomRent: "$2,700",
    twoBedroomRent: "$3,300",
    amenityScore: "7/10"
  }
];

const marketMetrics = [
  {
    title: "Metric 1",
    value: "94%",
    trend: "+2.1% YoY",
    icon: <ChartBarIcon className="h-6 w-6 text-purple-600" />
  },
  {
    title: "Metric 2",
    value: "45 units/month",
    trend: "Stable",
    icon: <TrendingUpIcon className="h-6 w-6 text-purple-600" />
  },
  {
    title: "Metric 3",
    value: "12%",
    trend: "Growing",
    icon: <ChartPieIcon className="h-6 w-6 text-purple-600" />
  }
];

const strategicHighlights = [
  {
    title: "Strategic Highlight 1",
    description: "Description of first strategic highlight and its benefits",
    icon: <ShieldCheck className="h-6 w-6 text-emerald-600" />
  },
  {
    title: "Strategic Highlight 2",
    description: "Description of second strategic highlight and its benefits",
    icon: <Award className="h-6 w-6 text-emerald-600" />
  },
  {
    title: "Strategic Highlight 3",
    description: "Description of third strategic highlight and its benefits",
    icon: <Star className="h-6 w-6 text-emerald-600" />
  }
];

const competitiveMatrix = [
  {
    property: "Your Product",
    address: "Main Address",
    yearBuilt: "2025 (Projected)",
    studioRent: "$2,400",
    oneBedroomRent: "$3,100",
    twoBedroomRent: "$3,800",
    amenities: "Premium features description",
    concessions: "None",
    premiumFeatures: "Key feature 1, Key feature 2",
    type: "projected"
  },
  {
    property: "Competitor 1",
    address: "Address 1",
    yearBuilt: "2021",
    studioRent: "$2,200",
    oneBedroomRent: "$2,850",
    twoBedroomRent: "$3,450",
    amenities: "Feature list 1",
    concessions: "Discount offer",
    premiumFeatures: "Premium feature",
    type: "competitor"
  },
  {
    property: "Competitor 2",
    address: "Address 2",
    yearBuilt: "2019",
    studioRent: "$2,150",
    oneBedroomRent: "$2,750",
    twoBedroomRent: "$3,600",
    amenities: "Feature list 2",
    concessions: "Discount offer",
    premiumFeatures: "Premium feature",
    type: "competitor"
  },
  {
    property: "Competitor 3",
    address: "Address 3",
    yearBuilt: "2018",
    studioRent: "$1,950",
    oneBedroomRent: "$2,500",
    twoBedroomRent: "$3,200",
    amenities: "Feature list 3",
    concessions: "Discount offer",
    premiumFeatures: "None",
    type: "competitor"
  },
  {
    property: "Competitor 4",
    address: "Address 4",
    yearBuilt: "2020",
    studioRent: "$2,250",
    oneBedroomRent: "$2,900",
    twoBedroomRent: "$3,550",
    amenities: "Feature list 4",
    concessions: "None",
    premiumFeatures: "Premium feature",
    type: "competitor"
  },
  {
    property: "Competitor 5",
    address: "Address 5",
    yearBuilt: "2019",
    studioRent: "$2,100",
    oneBedroomRent: "$2,800",
    twoBedroomRent: "$3,400",
    amenities: "Feature list 5",
    concessions: "Discount offer",
    premiumFeatures: "None",
    type: "competitor"
  }
];

const CompetitiveLandscape = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-fadeIn p-6">
      <h1 className="text-3xl font-semibold mb-6">Competitive Landscape Analysis</h1>

      {/* Key Metrics Highlight Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {marketMetrics.map((metric) => (
          <Card key={metric.title} className="hover:shadow-md transition-shadow bg-gradient-to-br from-white to-purple-50/50">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-3">
                {metric.icon}
                <h3 className="text-lg font-medium">{metric.title}</h3>
              </div>
              <div className="mt-2">
                <span className="text-2xl font-bold text-purple-600">{metric.value}</span>
                <Badge variant="secondary" className="ml-2">
                  {metric.trend}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Strategic Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {strategicHighlights.map((highlight) => (
          <Card 
            key={highlight.title} 
            className="hover:shadow-md transition-shadow bg-gradient-to-br from-emerald-50 to-white"
          >
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-3">
                {highlight.icon}
                <h3 className="text-lg font-medium text-emerald-800">{highlight.title}</h3>
              </div>
              <p className="text-emerald-600">{highlight.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Full Competitive Matrix */}
      <div className="space-y-6">
        <h2 className="text-2xl font-medium mb-4">Complete Competitive Matrix</h2>
        <div className="rounded-lg border shadow-sm overflow-x-auto bg-gradient-to-br from-white to-blue-50/30">
          <Table>
            <TableHeader>
              <TableRow className="bg-blue-50/50">
                <TableHead className="font-semibold">Property</TableHead>
                <TableHead className="font-semibold">Address</TableHead>
                <TableHead className="font-semibold">Year Built</TableHead>
                <TableHead className="font-semibold">Option 1</TableHead>
                <TableHead className="font-semibold">Option 2</TableHead>
                <TableHead className="font-semibold">Option 3</TableHead>
                <TableHead className="font-semibold">Features</TableHead>
                <TableHead className="font-semibold">Incentives</TableHead>
                <TableHead className="font-semibold">Premium Items</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {competitiveMatrix.map((comp) => (
                <TableRow 
                  key={comp.property} 
                  className={`hover:bg-blue-50/20 ${
                    comp.type === "projected" ? "bg-purple-50/50 font-medium" : ""
                  }`}
                >
                  <TableCell className="font-medium whitespace-nowrap">{comp.property}</TableCell>
                  <TableCell className="whitespace-nowrap">{comp.address}</TableCell>
                  <TableCell>{comp.yearBuilt}</TableCell>
                  <TableCell>{comp.studioRent}</TableCell>
                  <TableCell>{comp.oneBedroomRent}</TableCell>
                  <TableCell>{comp.twoBedroomRent}</TableCell>
                  <TableCell className="max-w-[200px]">{comp.amenities}</TableCell>
                  <TableCell>
                    {comp.concessions === "None" ? (
                      <Badge variant="secondary">None</Badge>
                    ) : (
                      <Badge variant="destructive">{comp.concessions}</Badge>
                    )}
                  </TableCell>
                  <TableCell>
                    {comp.premiumFeatures === "None" ? (
                      <Badge variant="secondary">None</Badge>
                    ) : (
                      <span className="text-sm">{comp.premiumFeatures}</span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Market Position Section */}
      <div className="mt-8 p-6 bg-gradient-to-br from-purple-50/50 to-white rounded-lg border border-purple-100">
        <h2 className="text-2xl font-medium mb-4">Market Position</h2>
        <p className="text-gray-700 leading-relaxed">
          This section describes your market positioning strategy and competitive advantage in detail,
          highlighting how your product stands out in the market and delivers superior value to customers.
        </p>
      </div>

      {/* Strategic Differentiators Section */}
      <div className="p-6 bg-gradient-to-br from-white to-purple-50/30 rounded-lg border border-purple-100">
        <h2 className="text-2xl font-medium mb-4">Strategic Differentiators</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-lg mb-2">Category A</h3>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              <li>Differentiator point 1</li>
              <li>Differentiator point 2</li>
              <li>Differentiator point 3</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-lg mb-2">Category B</h3>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              <li>Differentiator point 1</li>
              <li>Differentiator point 2</li>
              <li>Differentiator point 3</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompetitiveLandscape;
