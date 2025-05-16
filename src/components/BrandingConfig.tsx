import React, { useState } from 'react';
import { useBranding } from '@/lib/BrandingProvider';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

export const BrandingConfig: React.FC = () => {
  const { 
    branding, 
    updateBranding, 
    setBranding,
    exportBranding, 
    importBranding, 
    availableBrandings 
  } = useBranding();
  
  const [name, setName] = useState(branding.name);
  const [description, setDescription] = useState(branding.description);
  const [email, setEmail] = useState(branding.contact?.email || '');
  const [website, setWebsite] = useState(branding.contact?.website || '');
  const [phone, setPhone] = useState(branding.contact?.phone || '');
  
  const handleSaveBasic = () => {
    updateBranding({
      name,
      description,
      contact: {
        ...branding.contact,
        email,
        website,
        phone: phone || undefined
      }
    });
  };
  
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Branding Configuration</CardTitle>
        <CardDescription>
          Customize the branding elements of your project
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="presets" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="presets">Presets</TabsTrigger>
            <TabsTrigger value="basic">Basic Info</TabsTrigger>
            <TabsTrigger value="advanced">Advanced</TabsTrigger>
          </TabsList>
          
          <TabsContent value="presets" className="space-y-4">
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="branding-preset">Branding Preset</Label>
                <Select
                  value={availableBrandings.find(name => 
                    JSON.stringify(branding) === JSON.stringify(brandings[name])
                  ) || ''}
                  onValueChange={(value) => setBranding(value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a branding preset" />
                  </SelectTrigger>
                  <SelectContent>
                    {availableBrandings.map(name => (
                      <SelectItem key={name} value={name}>
                        {name === 'default' ? 'SOL Modern (Default)' : name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="border rounded-md p-4">
                <h3 className="font-medium mb-2">Preview</h3>
                <div className="space-y-2">
                  <p><strong>Name:</strong> {branding.name}</p>
                  <p><strong>Description:</strong> {branding.description}</p>
                  {branding.contact && (
                    <>
                      <p><strong>Email:</strong> {branding.contact.email}</p>
                      <p><strong>Website:</strong> {branding.contact.website}</p>
                      {branding.contact.phone && (
                        <p><strong>Phone:</strong> {branding.contact.phone}</p>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="basic" className="space-y-4">
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  Description
                </Label>
                <Input
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="website" className="text-right">
                  Website
                </Label>
                <Input
                  id="website"
                  type="url"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="phone" className="text-right">
                  Phone
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="col-span-3"
                />
              </div>
            </div>
            <Button onClick={handleSaveBasic}>Save Changes</Button>
          </TabsContent>
          
          <TabsContent value="advanced" className="space-y-4">
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Label>Branding JSON</Label>
                <Textarea 
                  readOnly 
                  value={JSON.stringify(branding, null, 2)}
                  className="font-mono text-sm h-[300px]"
                />
              </div>
              
              <div className="flex gap-2">
                <Button onClick={exportBranding}>Export</Button>
                <Button variant="outline" onClick={() => {
                  const input = document.createElement('input');
                  input.type = 'file';
                  input.accept = '.json';
                  input.onchange = (e) => {
                    const file = (e.target as HTMLInputElement).files?.[0];
                    if (!file) return;
                    
                    const reader = new FileReader();
                    reader.onload = (e) => {
                      try {
                        const config = JSON.parse(e.target?.result as string);
                        importBranding(config);
                        setName(config.name);
                        setDescription(config.description);
                        setEmail(config.contact?.email || '');
                        setWebsite(config.contact?.website || '');
                        setPhone(config.contact?.phone || '');
                      } catch (error) {
                        console.error('Invalid branding file:', error);
                      }
                    };
                    reader.readAsText(file);
                  };
                  input.click();
                }}>Import</Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-between">
        <p className="text-xs text-gray-500">
          Version: {branding.version} • Generated: {new Date(branding.generatedDate).toLocaleDateString()}
        </p>
      </CardFooter>
    </Card>
  );
};

export default BrandingConfig;