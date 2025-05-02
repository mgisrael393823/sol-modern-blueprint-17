
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { ChartBarIcon, TrendingUpIcon, ChartPieIcon } from "lucide-react";

const CompetitiveLandscape = () => {
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
      title: "Market Metric 1",
      value: "94%",
      trend: "+2.1% YoY",
      icon: <ChartBarIcon className="h-6 w-6 text-purple-600" />
    },
    {
      title: "Market Metric 2",
      value: "45 units",
      trend: "Stable",
      icon: <TrendingUpIcon className="h-6 w-6 text-purple-600" />
    },
    {
      title: "Market Metric 3",
      value: "12%",
      trend: "Growing",
      icon: <ChartPieIcon className="h-6 w-6 text-purple-600" />
    }
  ];

  const competitiveAdvantages = [
    {
      category: "Category 1",
      advantages: [
        "Competitive advantage description 1",
        "Competitive advantage description 2",
        "Competitive advantage description 3",
        "Competitive advantage description 4",
        "Competitive advantage description 5"
      ]
    },
    {
      category: "Category 2",
      advantages: [
        "Competitive advantage description 1",
        "Competitive advantage description 2",
        "Competitive advantage description 3",
        "Competitive advantage description 4",
        "Competitive advantage description 5"
      ]
    },
    {
      category: "Category 3",
      advantages: [
        "Competitive advantage description 1",
        "Competitive advantage description 2",
        "Competitive advantage description 3",
        "Competitive advantage description 4",
        "Competitive advantage description 5"
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn">
      <h1 className="text-3xl font-semibold mb-6">Competitive Landscape Analysis</h1>

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
                <span className="text-sm text-gray-500 ml-2">{metric.trend}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-medium mb-4">Competitors Analysis</h2>
        <div className="rounded-lg border shadow-sm overflow-hidden bg-gradient-to-br from-white to-blue-50/30">
          <Table>
            <TableHeader>
              <TableRow className="bg-blue-50/50">
                <TableHead>Name</TableHead>
                <TableHead>Option 1</TableHead>
                <TableHead>Option 2</TableHead>
                <TableHead>Option 3</TableHead>
                <TableHead>Metric 1</TableHead>
                <TableHead>Metric 2</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {competitors.map((comp) => (
                <TableRow key={comp.property} className="hover:bg-blue-50/20">
                  <TableCell className="font-medium">{comp.property}</TableCell>
                  <TableCell>{comp.studioRent}</TableCell>
                  <TableCell>{comp.oneBedroomRent}</TableCell>
                  <TableCell>{comp.twoBedroomRent}</TableCell>
                  <TableCell>{comp.occupancy}</TableCell>
                  <TableCell>{comp.amenityScore}</TableCell>
                </TableRow>
              ))}
              <TableRow className="bg-purple-50/50 font-medium">
                <TableCell>Your Product (Projected)</TableCell>
                <TableCell>$2,400</TableCell>
                <TableCell>$3,100</TableCell>
                <TableCell>$3,800</TableCell>
                <TableCell>95%*</TableCell>
                <TableCell>10/10</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-medium mb-4">Competitive Advantages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {competitiveAdvantages.map((category) => (
            <Card key={category.category} className="hover:shadow-md transition-shadow bg-gradient-to-br from-white to-green-50/30">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-3 text-green-800">{category.category}</h3>
                <ul className="list-disc list-inside space-y-2">
                  {category.advantages.map((advantage) => (
                    <li key={advantage} className="text-gray-600 text-sm">{advantage}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-8 p-6 bg-gradient-to-br from-purple-50/50 to-white rounded-lg border border-purple-100">
        <h2 className="text-2xl font-medium mb-4">Market Position</h2>
        <p className="text-gray-700 leading-relaxed">
          This section describes your market positioning strategy and highlights your unique value proposition in the competitive landscape.
        </p>
      </div>

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
