import { useState } from 'react';
import { ArrowRight, Calculator, FileText, Wrench, Settings } from 'lucide-react';
import { ProductConfigurator } from '../components/ProductConfigurator';
import { SalesRegistration } from '../components/SalesRegistration';

interface SalesPageProps {
  onNavigateToDashboard: () => void;
  onNavigateToServiceContracts?: () => void;
}

export function SalesPage({ onNavigateToDashboard, onNavigateToServiceContracts }: SalesPageProps) {
  const [currentView, setCurrentView] = useState<'main' | 'configurator' | 'registration'>('main');

  if (currentView === 'configurator') {
    return <ProductConfigurator onBack={() => setCurrentView('main')} />;
  }

  if (currentView === 'registration') {
    return <SalesRegistration onBack={() => setCurrentView('main')} onNavigateToDashboard={onNavigateToDashboard} />;
  }

  const salesActions = [
    {
      id: 'registration',
      title: 'Sales Registration',
      description: 'Register customer sales and encourage product registration',
      icon: FileText
    },
    {
      id: 'service-contracts',
      title: 'Service Contract Sales',
      description: 'Sell and manage service contracts for customer equipment',
      icon: Wrench
    },
    {
      id: 'configurator',
      title: 'Product Configurator',
      description: 'Configure products and send proposals via email or SMS to customers',
      icon: Settings
    }
  ];

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Sales</h1>
        </div>
        
        <button
          onClick={onNavigateToDashboard}
          className="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
        >
          <Calculator className="w-4 h-4 mr-2" />
          Dashboard
          <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </div>

      {/* Main Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {salesActions.map((action) => (
          <div
            key={action.id}
            onClick={() => {
              if (action.id === 'configurator') {
                setCurrentView('configurator');
              } else if (action.id === 'registration') {
                setCurrentView('registration');
              } else if (action.id === 'service-contracts') {
                onNavigateToServiceContracts?.();
              } else {
                // Placeholder för andra actions
                alert(`Opening ${action.title} (coming soon)`);
              }
            }}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md hover:border-gray-300 transition-all cursor-pointer group"
          >
            <div className="inline-flex p-3 rounded-lg bg-gray-100 group-hover:bg-gray-200 mb-4 transition-colors">
              <action.icon className="w-6 h-6 text-gray-700" />
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {action.title}
            </h3>
            
            <p className="text-gray-600 mb-4">
              {action.description}
            </p>
            
            <div className="flex items-center text-sm font-medium text-gray-500 group-hover:text-gray-700 transition-colors">
              Open
              <ArrowRight className="w-4 h-4 ml-1" />
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Husqvarna 315X sold to Andersson Garden Center</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>
              <span className="text-sm font-medium text-gray-900">45,900 kr</span>
            </div>
            
            <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Service contract signed - Pettersson AB</p>
                  <p className="text-xs text-gray-500">4 hours ago</p>
                </div>
              </div>
              <span className="text-sm font-medium text-gray-900">12,500 kr</span>
            </div>
            
            <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Product configuration sent to Lundberg Equipment</p>
                  <p className="text-xs text-gray-500">6 hours ago</p>
                </div>
              </div>
              <span className="text-sm font-medium text-gray-600">Quote sent</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
