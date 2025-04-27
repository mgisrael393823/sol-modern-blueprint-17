
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";

const CompetitiveLandscape = () => {
  const competitors = [
    {
      property: "The Madison",
      distance: "0.5",
      occupancy: "94%",
      rentRange: "$2,200-3,500",
      yearBuilt: "2021"
    },
    {
      property: "The Reserve",
      distance: "0.8",
      occupancy: "96%",
      rentRange: "$2,300-3,600",
      yearBuilt: "2020"
    },
    {
      property: "Nexus Apartments",
      distance: "1.2",
      occupancy: "92%",
      rentRange: "$2,100-3,300",
      yearBuilt: "2019"
    }
  ];

  const competitiveAdvantages = [
    {
      category: "Unit Features",
      advantages: [
        "Larger average unit sizes",
        "Premium appliance package",
        "Smart home technology integration"
      ]
    },
    {
      category: "Amenities",
      advantages: [
        "Expanded co-working spaces",
        "Resort-style pool deck",
        "Premium fitness center"
      ]
    },
    {
      category: "Services",
      advantages: [
        "24/7 concierge",
        "Package lockers with refrigeration",
        "On-site car charging"
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-3xl font-semibold mb-6">Competitive Landscape Analysis</h1>

      <div className="space-y-6">
        <h2 className="text-2xl font-medium mb-4">Direct Competitors</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Property</TableHead>
              <TableHead>Distance (miles)</TableHead>
              <TableHead>Occupancy</TableHead>
              <TableHead>Rent Range</TableHead>
              <TableHead>Year Built</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {competitors.map((comp) => (
              <TableRow key={comp.property}>
                <TableCell className="font-medium">{comp.property}</TableCell>
                <TableCell>{comp.distance}</TableCell>
                <TableCell>{comp.occupancy}</TableCell>
                <TableCell>{comp.rentRange}</TableCell>
                <TableCell>{comp.yearBuilt}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-medium mb-4">Competitive Advantages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {competitiveAdvantages.map((category) => (
            <Card key={category.category}>
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-3">{category.category}</h3>
                <ul className="list-disc list-inside space-y-2">
                  {category.advantages.map((advantage) => (
                    <li key={advantage} className="text-gray-600">{advantage}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-8 p-6 bg-purple-50 rounded-lg">
        <h2 className="text-2xl font-medium mb-4">Market Position</h2>
        <p className="text-gray-700">
          SOL Modern is positioned as the premium option in the market, with a unique 
          blend of luxury finishes, comprehensive amenities, and superior service levels. 
          Our pricing strategy reflects this premium positioning while maintaining 
          competitive value proposition through larger units and enhanced features.
        </p>
      </div>
    </div>
  );
};

export default CompetitiveLandscape;
