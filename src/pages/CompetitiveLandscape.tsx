import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";

const CompetitiveLandscape = () => {
  const competitors = [
    {
      property: "The Madison",
      distance: "0.5",
      occupancy: "94%",
      rentRange: "$2,200-3,500",
      yearBuilt: "2021",
      avgUnitSize: "950 sq ft"
    },
    {
      property: "The Reserve",
      distance: "0.8",
      occupancy: "96%",
      rentRange: "$2,300-3,600",
      yearBuilt: "2020",
      avgUnitSize: "925 sq ft"
    },
    {
      property: "Nexus Apartments",
      distance: "1.2",
      occupancy: "92%",
      rentRange: "$2,100-3,300",
      yearBuilt: "2019",
      avgUnitSize: "875 sq ft"
    }
  ];

  const competitiveAdvantages = [
    {
      category: "Unit Features",
      advantages: [
        "Larger average unit sizes (1,050 sq ft)",
        "Premium appliance package",
        "Smart home technology integration",
        "Custom closet systems"
      ]
    },
    {
      category: "Amenities",
      advantages: [
        "Expanded co-working spaces",
        "Resort-style pool deck",
        "Premium fitness center",
        "Pet spa and dog park"
      ]
    },
    {
      category: "Services",
      advantages: [
        "24/7 concierge",
        "Package lockers with refrigeration",
        "On-site car charging",
        "Resident events program"
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn">
      <h1 className="text-3xl font-semibold mb-6">Competitive Landscape Analysis</h1>

      <div className="space-y-6">
        <h2 className="text-2xl font-medium mb-4">Direct Competitors</h2>
        <div className="rounded-lg border shadow-sm overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-purple-50">
                <TableHead>Property</TableHead>
                <TableHead>Distance (miles)</TableHead>
                <TableHead>Occupancy</TableHead>
                <TableHead>Rent Range</TableHead>
                <TableHead>Year Built</TableHead>
                <TableHead>Avg Unit Size</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {competitors.map((comp) => (
                <TableRow key={comp.property} className="hover:bg-purple-50/30">
                  <TableCell className="font-medium">{comp.property}</TableCell>
                  <TableCell>{comp.distance}</TableCell>
                  <TableCell>{comp.occupancy}</TableCell>
                  <TableCell>{comp.rentRange}</TableCell>
                  <TableCell>{comp.yearBuilt}</TableCell>
                  <TableCell>{comp.avgUnitSize}</TableCell>
                </TableRow>
              ))}
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
          SOL Modern is positioned as the premium option in the market, with a unique 
          blend of luxury finishes, comprehensive amenities, and superior service levels. 
          Our pricing strategy reflects this premium positioning while maintaining 
          competitive value proposition through larger units and enhanced features.
        </p>
      </div>

      <div className="p-6 bg-purple-50 rounded-lg border border-purple-100">
        <h2 className="text-2xl font-medium mb-4">Strategic Differentiators</h2>
        <ul className="space-y-3 list-disc list-inside text-gray-700">
          <li>Largest average unit sizes in competitive set</li>
          <li>Most comprehensive technology integration</li>
          <li>Superior amenity package with unique offerings</li>
          <li>Enhanced service platform with 24/7 staffing</li>
        </ul>
      </div>
    </div>
  );
};

export default CompetitiveLandscape;
