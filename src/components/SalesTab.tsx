import React from 'react';
import { 
  CurrencyDollarIcon, 
  ShoppingCartIcon, 
  DocumentCheckIcon,
  ExclamationTriangleIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { FilterState } from '../types';

interface SalesTabProps {
  data: any;
  isLoading: boolean;
  filters: FilterState;
  onBack?: () => void;
}

export const SalesTab: React.FC<SalesTabProps> = ({ data, isLoading, onBack }) => {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-2 border-husqvarna-orange border-t-transparent mx-auto mb-4"></div>
          <p className="text-gray-600">Loading sales data...</p>
        </div>
      </div>
    );
  }

  const formatCurrency = (value: number) => 
    new Intl.NumberFormat('sv-SE', { style: 'currency', currency: 'SEK' }).format(value);

  const formatDelta = (delta: number, percent: number) => {
    const isPositive = delta >= 0;
    const Icon = isPositive ? ArrowTrendingUpIcon : ArrowTrendingDownIcon;
    const colorClass = isPositive ? 'text-green-600' : 'text-red-600';
    
    return (
      <div className={`flex items-center space-x-1 ${colorClass}`}>
        <Icon className="w-4 h-4" />
        <span className="text-sm font-medium">
          {isPositive ? '+' : ''}{percent}%
        </span>
      </div>
    );
  };

  return (
    <div className="space-y-6 bg-gray-50 min-h-screen p-6">
      {/* Back Button */}
      {onBack && (
        <div className="mb-6">
          <button
            onClick={onBack}
            className="inline-flex items-center px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            Back to Sales
          </button>
        </div>
      )}
      
      {/* Sales Dashboard Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Sales Dashboard</h1>
        <p className="text-gray-600 mt-2">Monitor your sales performance and key metrics</p>
      </div>

      {/* KPI Header */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {/* Total Sales */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 font-semibold text-sm uppercase tracking-wide mb-1">Total Sales</p>
              <p className="text-3xl font-bold text-gray-900">
                {formatCurrency(data.kpis.totalSales.amount)}
              </p>
            </div>
            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center shadow-sm">
              <CurrencyDollarIcon className="w-6 h-6 text-gray-600" />
            </div>
          </div>
          <div className="mt-4">
            {formatDelta(data.kpis.totalSales.delta, data.kpis.totalSales.deltaPercent)}
          </div>
        </div>

        {/* Units Sold */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 font-semibold text-sm uppercase tracking-wide mb-1">Units Sold</p>
              <p className="text-3xl font-bold text-gray-900">
                {data.kpis.unitsSold.count.toLocaleString()}
              </p>
            </div>
            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center shadow-sm">
              <ShoppingCartIcon className="w-6 h-6 text-gray-600" />
            </div>
          </div>
          <div className="mt-4">
            {formatDelta(data.kpis.unitsSold.delta, data.kpis.unitsSold.deltaPercent)}
          </div>
        </div>

        {/* Products Registered */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 font-semibold text-sm uppercase tracking-wide mb-1">Registered</p>
              <p className="text-3xl font-bold text-gray-900">
                {data.kpis.productsRegistered.count}
              </p>
            </div>
            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center shadow-sm">
              <DocumentCheckIcon className="w-6 h-6 text-gray-600" />
            </div>
          </div>
          <div className="mt-4">
            {formatDelta(data.kpis.productsRegistered.delta, data.kpis.productsRegistered.deltaPercent)}
          </div>
        </div>

        {/* Warranty Cases */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 font-semibold text-sm uppercase tracking-wide mb-1">Open Cases</p>
              <p className="text-3xl font-bold text-gray-900">
                {data.kpis.warrantyCases.open}
              </p>
            </div>
            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center shadow-sm">
              <ExclamationTriangleIcon className="w-6 h-6 text-gray-600" />
            </div>
          </div>
        </div>

        {/* Registration Coverage */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 font-semibold text-sm uppercase tracking-wide mb-1">Coverage</p>
              <p className="text-3xl font-bold text-gray-900">
                {data.kpis.registrationCoverage.percentage}%
              </p>
            </div>
            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center shadow-sm">
              <DocumentCheckIcon className="w-6 h-6 text-gray-600" />
            </div>
          </div>
          <div className="mt-4">
            {formatDelta(data.kpis.registrationCoverage.delta, data.kpis.registrationCoverage.delta)}
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sales Trend */}
        <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
              <ArrowTrendingUpIcon className="w-5 h-5 text-gray-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Sales Trend</h3>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={data.timeSeries}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="date" 
                tickFormatter={(value) => new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              />
              <YAxis tickFormatter={(value) => `${value / 1000}k`} />
              <Tooltip 
                labelFormatter={(value) => new Date(value).toLocaleDateString('en-US')}
                formatter={(value: number) => [formatCurrency(value), 'Sales']}
              />
              <Area 
                dataKey="sales" 
                stroke="#6b7280" 
                fill="#6b7280" 
                fillOpacity={0.1}
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Product Performance */}
        <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
              <ShoppingCartIcon className="w-5 h-5 text-gray-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Top Products</h3>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data.productPerformance.slice(0, 6)}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="name" 
                angle={-45} 
                textAnchor="end" 
                height={80}
                fontSize={12}
                interval={0}
              />
              <YAxis />
              <Tooltip 
                formatter={(value: number, name: string) => [
                  name === 'units' ? value : formatCurrency(value), 
                  name === 'units' ? 'Units' : 'Revenue'
                ]}
              />
              <Bar dataKey="units" fill="#6b7280" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Registration Heatmap and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Registration Heatmap */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-8 border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                <DocumentCheckIcon className="w-5 h-5 text-gray-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Product Registration Heatmap</h3>
            </div>
            <button className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm hover:bg-gray-700 transition-colors">
              Create Campaign
            </button>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data.heatmap}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="area" angle={-45} textAnchor="end" height={60} />
              <YAxis />
              <Tooltip 
                formatter={(value: number) => [value, 'New Registrations']}
              />
              <Bar dataKey="newRegistrations" fill="#6b7280" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Side Panel - Recent Activity */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {data.salesEvents.slice(0, 6).map((event: any, index: number) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {event.type}: {event.product}
                  </p>
                  <p className="text-xs text-gray-500">
                    {new Date(event.ts).toLocaleString('sv-SE')}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Quality Flags Section */}
          {data.qualityFlags && data.qualityFlags.length > 0 && (
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-gray-900 mb-2">Quality Alerts</h4>
              <div className="space-y-2">
                {data.qualityFlags.slice(0, 3).map((flag: any, index: number) => (
                  <div key={index} className={`text-xs p-2 rounded ${
                    flag.severity === 'high' ? 'bg-red-100 text-red-800' :
                    flag.severity === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    <span className="font-medium">{flag.type.replace('_', ' ')}</span>
                    <br />
                    {flag.product}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Recent Sales Table */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Recent Sales</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Units
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Revenue
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Registration
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.salesEvents.slice(0, 10).map((event: any, index: number) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {event.product}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {Math.floor(Math.random() * 10) + 1}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatCurrency(Math.floor(Math.random() * 50000) + 10000)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(event.ts).toLocaleString('sv-SE')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      Math.random() > 0.3 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {Math.random() > 0.3 ? 'Yes' : 'No'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
