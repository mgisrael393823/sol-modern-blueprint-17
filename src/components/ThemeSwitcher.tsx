import React from 'react';
import { useTheme } from '@/lib/ThemeProvider';
import { 
  Select, 
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from '@/components/ui/select';
import { themes } from '@/lib/theme-config';

export const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme, availableThemes } = useTheme();

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm text-textSecondary">Theme:</span>
      <Select
        value={Object.keys(themes).find(key => themes[key].name === theme.name) || 'default'}
        onValueChange={(value) => setTheme(value)}
      >
        <SelectTrigger className="w-[180px] h-9 text-sm bg-white">
          <SelectValue placeholder="Select theme" />
        </SelectTrigger>
        <SelectContent>
          {availableThemes.map((themeName) => (
            <SelectItem key={themeName} value={themeName} className="text-sm">
              {themes[themeName].name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default ThemeSwitcher;