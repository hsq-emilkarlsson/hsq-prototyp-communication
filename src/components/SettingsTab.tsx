import React from 'react';
import { 
  CogIcon, 
  CheckCircleIcon, 
  XCircleIcon, 
  ExclamationTriangleIcon,
  PlayIcon,
  PlusIcon,
  TrashIcon
} from '@heroicons/react/24/outline';
import { useConnectors } from '../hooks';

export const SettingsTab: React.FC = () => {
  const { connectors, testConnection, updateConnector, disconnectConnector } = useConnectors();
  const [showAddConnector, setShowAddConnector] = React.useState(false);
  const [newConnectorType, setNewConnectorType] = React.useState('');

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'connected':
        return <CheckCircleIcon className="w-5 h-5 text-green-500" />;
      case 'disconnected':
        return <XCircleIcon className="w-5 h-5 text-gray-400" />;
      case 'error':
        return <XCircleIcon className="w-5 h-5 text-red-500" />;
      case 'testing':
        return <div className="w-5 h-5 border-2 border-husqvarna-orange border-t-transparent rounded-full animate-spin" />;
      default:
        return <ExclamationTriangleIcon className="w-5 h-5 text-yellow-500" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'connected': return 'Connected';
      case 'disconnected': return 'Disconnected';
      case 'error': return 'Error';
      case 'testing': return 'Testing...';
      default: return 'Unknown';
    }
  };

  const availableConnectorTypes = [
    { id: 'fortnox', name: 'Fortnox', description: 'Swedish accounting software' },
    { id: 'visma', name: 'Visma eAccounting', description: 'Cloud-based accounting' },
    { id: 'business_central', name: 'Microsoft Business Central', description: 'ERP solution' },
    { id: 'zettle', name: 'Zettle by PayPal', description: 'Point of sale system' },
    { id: 'klarna', name: 'Klarna Checkout', description: 'Payment processor' },
    { id: 'swish', name: 'Swish', description: 'Mobile payment system' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">POS & ERP Connectors</h2>
            <p className="text-gray-600 mt-2">
              Manage integrations with your point-of-sale and business systems
            </p>
          </div>
          <button
            onClick={() => setShowAddConnector(!showAddConnector)}
            className="flex items-center space-x-2 bg-husqvarna-orange text-white px-4 py-2 rounded-md hover:bg-husqvarna-orange/90"
          >
            <PlusIcon className="w-5 h-5" />
            <span>Add Connector</span>
          </button>
        </div>
      </div>

      {/* Add New Connector Panel */}
      {showAddConnector && (
        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-husqvarna-orange">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Add New Connector</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {availableConnectorTypes.filter(type => 
              !connectors.some(c => c.type === type.id)
            ).map((type) => (
              <div
                key={type.id}
                onClick={() => setNewConnectorType(type.id)}
                className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                  newConnectorType === type.id
                    ? 'border-husqvarna-orange bg-orange-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <h4 className="font-medium text-gray-900">{type.name}</h4>
                <p className="text-sm text-gray-500 mt-1">{type.description}</p>
              </div>
            ))}
          </div>
          
          {newConnectorType && (
            <div className="mt-4 flex items-center space-x-3">
              <button
                onClick={() => {
                  // Mock adding connector
                  console.log('Adding connector:', newConnectorType);
                  setNewConnectorType('');
                  setShowAddConnector(false);
                }}
                className="bg-husqvarna-orange text-white px-4 py-2 rounded-md hover:bg-husqvarna-orange/90"
              >
                Configure {availableConnectorTypes.find(t => t.id === newConnectorType)?.name}
              </button>
              <button
                onClick={() => {
                  setNewConnectorType('');
                  setShowAddConnector(false);
                }}
                className="text-gray-600 hover:text-gray-900"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      )}

      {/* Existing Connectors */}
      <div className="space-y-4">
        {connectors.map((connector) => (
          <div key={connector.id} className="bg-white rounded-lg shadow">
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gray-100 rounded-lg">
                    <CogIcon className="w-6 h-6 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3">
                      <h3 className="text-lg font-semibold text-gray-900">{connector.name}</h3>
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(connector.status)}
                        <span className={`text-sm font-medium ${
                          connector.status === 'connected' ? 'text-green-600' :
                          connector.status === 'error' ? 'text-red-600' :
                          'text-gray-500'
                        }`}>
                          {getStatusText(connector.status)}
                        </span>
                      </div>
                    </div>
                    
                    {connector.lastSync && (
                      <p className="text-sm text-gray-500 mt-1">
                        Last sync: {new Date(connector.lastSync).toLocaleString('sv-SE')}
                      </p>
                    )}
                    
                    {connector.errorLogs && connector.errorLogs.length > 0 && (
                      <div className="mt-2 p-3 bg-red-50 rounded-lg">
                        <h4 className="text-sm font-medium text-red-800 mb-1">Recent Errors:</h4>
                        <ul className="text-sm text-red-700 space-y-1">
                          {connector.errorLogs.map((error, index) => (
                            <li key={index}>• {error}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => testConnection(connector.id)}
                    disabled={connector.status === 'testing'}
                    className="flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded-md hover:border-gray-400 disabled:opacity-50"
                  >
                    <PlayIcon className="w-4 h-4" />
                    <span>Test</span>
                  </button>
                  
                  {connector.status === 'connected' && (
                    <button
                      onClick={() => disconnectConnector(connector.id)}
                      className="flex items-center space-x-2 px-3 py-2 text-red-600 border border-red-300 rounded-md hover:border-red-400"
                    >
                      <TrashIcon className="w-4 h-4" />
                      <span>Disconnect</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Configuration Details */}
              {connector.status !== 'disconnected' && (
                <div className="mt-6 border-t border-gray-200 pt-6">
                  <h4 className="text-sm font-medium text-gray-900 mb-3">Configuration</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(connector.config).map(([key, value]) => (
                      <div key={key}>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                        </label>
                        <input
                          type={key.toLowerCase().includes('secret') || key.toLowerCase().includes('key') ? 'password' : 'text'}
                          value={value as string}
                          onChange={(e) => updateConnector(connector.id, { [key]: e.target.value })}
                          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-husqvarna-orange focus:border-husqvarna-orange"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Connector-specific features */}
              {connector.type === 'fortnox' && connector.status === 'connected' && (
                <div className="mt-6 border-t border-gray-200 pt-6">
                  <h4 className="text-sm font-medium text-gray-900 mb-3">Fortnox Features</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <label className="flex items-center">
                        <input type="checkbox" defaultChecked className="rounded border-gray-300 text-husqvarna-orange focus:ring-husqvarna-orange" />
                        <span className="ml-2 text-sm text-gray-700">Sync customer data</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" defaultChecked className="rounded border-gray-300 text-husqvarna-orange focus:ring-husqvarna-orange" />
                        <span className="ml-2 text-sm text-gray-700">Auto-create invoices</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-husqvarna-orange focus:ring-husqvarna-orange" />
                        <span className="ml-2 text-sm text-gray-700">Sync inventory levels</span>
                      </label>
                    </div>
                    <div className="space-y-3">
                      <label className="flex items-center">
                        <input type="checkbox" defaultChecked className="rounded border-gray-300 text-husqvarna-orange focus:ring-husqvarna-orange" />
                        <span className="ml-2 text-sm text-gray-700">Real-time webhooks</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-husqvarna-orange focus:ring-husqvarna-orange" />
                        <span className="ml-2 text-sm text-gray-700">Product catalog sync</span>
                      </label>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* System Health */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">System Health</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">
              {connectors.filter(c => c.status === 'connected').length}
            </div>
            <p className="text-sm text-gray-600">Connected Systems</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">24/7</div>
            <p className="text-sm text-gray-600">Uptime</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-husqvarna-orange">
              {Math.floor(Math.random() * 1000 + 500)}
            </div>
            <p className="text-sm text-gray-600">Events/Day</p>
          </div>
        </div>
      </div>
    </div>
  );
};
