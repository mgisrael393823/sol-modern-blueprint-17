import React from 'react';
import { useBranding } from '@/lib/BrandingProvider';
import { 
  Select, 
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from '@/components/ui/select';
import { brandings } from '@/lib/brandingConfig';

export const BrandingSwitcher: React.FC = () => {
  const { branding, setBranding, availableBrandings } = useBranding();

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm text-textSecondary">Brand:</span>
      <Select
        value={availableBrandings.find(name => 
          JSON.stringify(branding) === JSON.stringify(brandings[name])
        ) || 'default'}
        onValueChange={(value) => setBranding(value)}
      >
        <SelectTrigger className="w-[180px] h-9 text-sm bg-white">
          <SelectValue placeholder="Select branding" />
        </SelectTrigger>
        <SelectContent>
          {availableBrandings.map((brandingName) => (
            <SelectItem key={brandingName} value={brandingName} className="text-sm">
              {brandingName === 'default' 
                ? `${brandings[brandingName].name} (Default)` 
                : brandings[brandingName].name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default BrandingSwitcher;