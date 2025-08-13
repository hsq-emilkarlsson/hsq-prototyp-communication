import React from 'react';
import { CalendarIcon, FunnelIcon } from '@heroicons/react/24/outline';
import { FilterState, TimeFrame } from '../types';

interface GlobalFiltersProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
}

const timeFrameOptions = [
  { value: '7d' as TimeFrame, label: 'Last 7 days' },
  { value: '30d' as TimeFrame, label: 'Last 30 days' },
  { value: '90d' as TimeFrame, label: 'Last 90 days' },
  { value: '1y' as TimeFrame, label: 'Last year' },
  { value: 'custom' as TimeFrame, label: 'Custom range' }
];

const productCategories = [
  'Robotic Mowers',
  'Chainsaws', 
  'Blowers',
  'Trimmers',
  'Hedge Trimmers'
];

export const GlobalFilters: React.FC<GlobalFiltersProps> = ({ 
  filters, 
  onFiltersChange 
}) => {
  const [showAdvanced, setShowAdvanced] = React.useState(false);

  const updateTimeFrame = (timeFrame: TimeFrame) => {
    onFiltersChange({ ...filters, timeFrame });
  };

  const toggleCategory = (category: string) => {
    const categories = filters.productCategories || [];
    const newCategories = categories.includes(category)
      ? categories.filter(c => c !== category)
      : [...categories, category];
    
    onFiltersChange({ 
      ...filters, 
      productCategories: newCategories 
    });
  };

  return (
    <div className="space-y-4">
      {/* Primary Filters */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* Time Frame Selector */}
          <div className="flex items-center space-x-2">
            <CalendarIcon className="w-5 h-5 text-gray-400" />
            <select
              value={filters.timeFrame}
              onChange={(e) => updateTimeFrame(e.target.value as TimeFrame)}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-husqvarna-orange focus:border-husqvarna-orange"
            >
              {timeFrameOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Quick Stats */}
          <div className="text-sm text-gray-500">
            Showing data for {filters.timeFrame === '7d' ? '7' : filters.timeFrame === '30d' ? '30' : filters.timeFrame === '90d' ? '90' : '365'} days
            {(filters.productCategories?.length || 0) > 0 && (
              <span> • {filters.productCategories?.length} categories filtered</span>
            )}
          </div>
        </div>

        {/* Advanced Filters Toggle */}
        <button
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 border border-gray-300 rounded-md hover:border-gray-400"
        >
          <FunnelIcon className="w-4 h-4" />
          <span>Filters</span>
          {((filters.productCategories?.length || 0) > 0) && (
            <span className="bg-husqvarna-orange text-white rounded-full px-2 py-0.5 text-xs">
              {filters.productCategories?.length}
            </span>
          )}
        </button>
      </div>

      {/* Advanced Filters Panel */}
      {showAdvanced && (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-4">
          {/* Product Categories */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Product Categories
            </label>
            <div className="flex flex-wrap gap-2">
              {productCategories.map(category => {
                const isSelected = filters.productCategories?.includes(category) || false;
                
                return (
                  <button
                    key={category}
                    onClick={() => toggleCategory(category)}
                    className={`
                      px-3 py-1 rounded-full text-sm font-medium transition-colors
                      ${isSelected 
                        ? 'bg-husqvarna-orange text-white' 
                        : 'bg-white text-gray-700 border border-gray-300 hover:border-gray-400'
                      }
                    `}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Clear Filters */}
          {((filters.productCategories?.length || 0) > 0) && (
            <div className="flex justify-end pt-2 border-t border-gray-200">
              <button
                onClick={() => onFiltersChange({ 
                  ...filters, 
                  productCategories: [],
                  retailerIds: []
                })}
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
