import { useState } from 'react';
import { ArrowLeft, Users, Package, TrendingUp, MapPin, Mail, Target } from 'lucide-react';

interface ProductRegistrationDashboardProps {
  onBack: () => void;
}

export function ProductRegistrationDashboard({ onBack }: ProductRegistrationDashboardProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'marketing'>('overview');

  const registrationStats = {
    totalRegistrations: 1247,
    thisMonth: 89,
    growthRate: 12.5,
    topProducts: [
      { name: 'Automower 450X', registrations: 324, percentage: 26 },
      { name: 'Automower 315X', registrations: 298, percentage: 24 },
      { name: 'Chainsaw 550 XP', registrations: 189, percentage: 15 },
      { name: 'Blower 525iB', registrations: 156, percentage: 12.5 }
    ],
    recentRegistrations: [
      { customer: 'Anna Svensson', product: 'Automower 450X', date: '2025-08-12', area: 'Värmdö' },
      { customer: 'Erik Johansson', product: 'Automower 315X', date: '2025-08-11', area: 'Nacka' },
      { customer: 'Maria Lindberg', product: 'Chainsaw 550 XP', date: '2025-08-11', area: 'Värmdö' },
      { customer: 'Lars Andersson', product: 'Automower 450X', date: '2025-08-10', area: 'Gustavsberg' }
    ]
  };

  const marketingOpportunities = [
    {
      title: 'Värmdö Automower Cluster',
      description: '12 new Automower registrations in Värmdö area this month',
      action: 'Send referral campaign',
      potential: 'High',
      customers: 24
    },
    {
      title: 'Service Reminder Campaign',
      description: 'Customers with products 6+ months old without service',
      action: 'Send maintenance reminder',
      potential: 'Medium',
      customers: 156
    },
    {
      title: 'Upgrade Opportunity',
      description: 'Customers with older models, potential for upgrades',
      action: 'Send upgrade offers',
      potential: 'High',
      customers: 89
    }
  ];

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={onBack}
          className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Sales Registration
        </button>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Product Registration Dashboard</h1>
          <p className="text-gray-600 text-lg">Monitor registrations and identify marketing opportunities</p>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 bg-gray-100 rounded-lg p-1 mb-8 max-w-md mx-auto">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'overview'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('marketing')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'marketing'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Marketing
          </button>
        </div>

        {activeTab === 'overview' && (
          <>
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Total Registrations</p>
                    <p className="text-2xl font-bold text-gray-900">{registrationStats.totalRegistrations.toLocaleString()}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center">
                  <div className="p-2 bg-green-50 rounded-lg">
                    <Package className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">This Month</p>
                    <p className="text-2xl font-bold text-gray-900">{registrationStats.thisMonth}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center">
                  <div className="p-2 bg-purple-50 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Growth Rate</p>
                    <p className="text-2xl font-bold text-gray-900">+{registrationStats.growthRate}%</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Top Products */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Top Registered Products</h3>
                <div className="space-y-4">
                  {registrationStats.topProducts.map((product, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">{product.name}</p>
                        <p className="text-sm text-gray-600">{product.registrations} registrations</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-900">{product.percentage}%</p>
                        <div className="w-16 bg-gray-200 rounded-full h-2 mt-1">
                          <div 
                            className="bg-blue-600 h-2 rounded-full" 
                            style={{ width: `${product.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Registrations */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Registrations</h3>
                <div className="space-y-4">
                  {registrationStats.recentRegistrations.map((reg, index) => (
                    <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                      <div>
                        <p className="font-medium text-gray-900">{reg.customer}</p>
                        <p className="text-sm text-gray-600">{reg.product}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-sm text-gray-600">
                          <MapPin className="w-3 h-3 mr-1" />
                          {reg.area}
                        </div>
                        <p className="text-xs text-gray-500">{reg.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === 'marketing' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Marketing Opportunities</h2>
              <p className="text-gray-600">
                Leverage registration data to create targeted marketing campaigns and referral programs
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {marketingOpportunities.map((opportunity, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-semibold text-gray-900">{opportunity.title}</h3>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      opportunity.potential === 'High' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {opportunity.potential} Potential
                    </span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4">{opportunity.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-1" />
                      {opportunity.customers} customers
                    </div>
                  </div>
                  
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                    {opportunity.action}
                  </button>
                </div>
              ))}
            </div>

            {/* Marketing Tools */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Marketing Tools</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button className="flex items-center justify-center p-4 border-2 border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all">
                  <Mail className="w-5 h-5 mr-2 text-gray-600" />
                  <span className="font-medium text-gray-900">Email Campaigns</span>
                </button>
                
                <button className="flex items-center justify-center p-4 border-2 border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all">
                  <Target className="w-5 h-5 mr-2 text-gray-600" />
                  <span className="font-medium text-gray-900">Referral Programs</span>
                </button>
                
                <button className="flex items-center justify-center p-4 border-2 border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all">
                  <MapPin className="w-5 h-5 mr-2 text-gray-600" />
                  <span className="font-medium text-gray-900">Geographic Targeting</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
