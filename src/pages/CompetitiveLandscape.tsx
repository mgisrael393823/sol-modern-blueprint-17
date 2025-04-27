
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { ChartBarIcon, TrendingUpIcon, ChartPieIcon } from "lucide-react";

const CompetitiveLandscape = () => {
  const competitors = [
    {
      property: "The Madison",
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
      property: "The Reserve",
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
      property: "Nexus Apartments",
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
      title: "Average Occupancy",
      value: "94%",
      trend: "+2.1% YoY",
      icon: <ChartBarIcon className="h-6 w-6 text-purple-600" />
    },
    {
      title: "Absorption Rate",
      value: "45 units/month",
      trend: "Stable",
      icon: <TrendingUpIcon className="h-6 w-6 text-purple-600" />
    },
    {
      title: "Market Share",
      value: "12%",
      trend: "Growing",
      icon: <ChartPieIcon className="h-6 w-6 text-purple-600" />
    }
  ];

  const competitiveAdvantages = [
    {
      category: "Unit Features",
      advantages: [
        "Larger average unit sizes (1,050 sq ft vs. market avg 925 sq ft)",
        "Premium Bosch appliance package ($2,000 above competitor standard)",
        "Smart home technology in all units (nest, ring, smart locks)",
        "Custom California Closets storage systems ($1,500 value per unit)",
        "Floor-to-ceiling windows with upgraded soundproofing"
      ]
    },
    {
      category: "Amenities",
      advantages: [
        "3,500 sq ft co-working space with private offices",
        "Rooftop infinity pool with panoramic city views",
        "2,200 sq ft fitness center with Peloton bikes",
        "Pet spa with grooming stations and dog run",
        "24/7 package room with refrigerated storage"
      ]
    },
    {
      category: "Services",
      advantages: [
        "24/7 concierge with hospitality training",
        "Dedicated resident experience coordinator",
        "On-site maintenance with 2-hour response time",
        "Weekly resident events and programming",
        "Complimentary bike share program"
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn">
      <h1 className="text-3xl font-semibold mb-6">Competitive Landscape Analysis</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {marketMetrics.map((metric) => (
          <Card key={metric.title} className="hover:shadow-md transition-shadow">
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
        <h2 className="text-2xl font-medium mb-4">Direct Competitors Analysis</h2>
        <div className="rounded-lg border shadow-sm overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-purple-50">
                <TableHead>Property</TableHead>
                <TableHead>Studio</TableHead>
                <TableHead>1 Bed</TableHead>
                <TableHead>2 Bed</TableHead>
                <TableHead>Occupancy</TableHead>
                <TableHead>Amenities</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {competitors.map((comp) => (
                <TableRow key={comp.property} className="hover:bg-purple-50/30">
                  <TableCell className="font-medium">{comp.property}</TableCell>
                  <TableCell>{comp.studioRent}</TableCell>
                  <TableCell>{comp.oneBedroomRent}</TableCell>
                  <TableCell>{comp.twoBedroomRent}</TableCell>
                  <TableCell>{comp.occupancy}</TableCell>
                  <TableCell>{comp.amenityScore}</TableCell>
                </TableRow>
              ))}
              <TableRow className="bg-purple-50/50 font-medium">
                <TableCell>SOL Modern (Projected)</TableCell>
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
            <Card key={category.category} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-3 text-purple-900">{category.category}</h3>
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

      <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-white rounded-lg border border-purple-100">
        <h2 className="text-2xl font-medium mb-4">Market Position</h2>
        <p className="text-gray-700 leading-relaxed">
          SOL Modern is positioned as the premium option in the market, commanding a 10-15% 
          price premium justified by superior unit specifications, comprehensive amenities, 
          and enhanced service levels. Our pricing strategy reflects this premium positioning 
          while maintaining competitive value through larger units and elevated features.
        </p>
      </div>

      <div className="p-6 bg-purple-50 rounded-lg border border-purple-100">
        <h2 className="text-2xl font-medium mb-4">Strategic Differentiators</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-lg mb-2">Product Excellence</h3>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              <li>Largest average unit sizes in competitive set</li>
              <li>Most comprehensive technology integration</li>
              <li>Premium finishes package value $12k/unit above market</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-lg mb-2">Service Leadership</h3>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              <li>Only property with 24/7 concierge staffing</li>
              <li>Dedicated resident experience team</li>
              <li>Most extensive amenity programming calendar</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompetitiveLandscape;

