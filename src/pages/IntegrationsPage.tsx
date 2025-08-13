import { 
  CheckCircle, 
  AlertCircle, 
  Plus
} from 'lucide-react';

export function IntegrationsPage() {
  const integrations = [
    // POS Systems
    {
      id: 'retail-pro',
      name: 'Retail Pro',
      description: 'Kassasystem för butiksförsäljning - enables sales registration and inventory management',
      status: 'connected' as const,
      category: 'POS Systems',
      lastSync: '15 minutes ago',
      plan: 'paid' as const,
      efficiency: 92,
      features: ['Real-time sales registration', 'POS integration', 'Sales analytics', 'Customer data sync']
    },
    {
      id: 'zettle',
      name: 'Zettle by PayPal',
      description: 'Mobile POS solution - enables quick sales registration and payment processing',
      status: 'connected' as const,
      category: 'POS Systems',
      lastSync: '5 minutes ago',
      plan: 'free' as const,
      efficiency: 85,
      features: ['Mobile sales registration', 'Payment processing', 'Basic inventory', 'Receipt management']
    },
    {
      id: 'square',
      name: 'Square POS',
      description: 'Complete POS system - enables comprehensive sales registration and customer management',
      status: 'disconnected' as const,
      category: 'POS Systems',
      lastSync: 'Never',
      plan: 'paid' as const,
      efficiency: 88,
      features: ['Full sales registration', 'Customer management', 'Inventory tracking', 'Analytics dashboard']
    },

    // Business Systems
    {
      id: 'fortnox',
      name: 'Fortnox',
      description: 'Ekonomisystem för bokföring och fakturering - comprehensive business management',
      status: 'connected' as const,
      category: 'Business Systems',
      lastSync: '2 timmar sedan',
      plan: 'paid' as const,
      efficiency: 95,
      features: ['Real-time sync', 'Automatic invoicing', 'Tax reporting', 'Multi-currency']
    },
    {
      id: 'visma',
      name: 'Visma Business',
      description: 'Affärssystem för ekonomi och administration - complete business operations',
      status: 'disconnected' as const,
      category: 'Business Systems',
      lastSync: 'Aldrig',
      plan: 'free' as const,
      efficiency: 78,
      features: ['Basic sync', 'Manual invoicing', 'Financial reporting']
    },
    {
      id: 'monitor-erp',
      name: 'Monitor ERP',
      description: 'Enterprise resource planning system - full business process integration',
      status: 'error' as const,
      category: 'Business Systems',
      lastSync: '2 days ago',
      plan: 'paid' as const,
      efficiency: 90,
      features: ['Full ERP integration', 'Advanced reporting', 'Workflow automation', 'Multi-module sync']
    },

    // Fleet Systems
    {
      id: 'automower-connect',
      name: 'Automower® Connect',
      description: 'Husqvarna fleet management system - real-time mower monitoring and control',
      status: 'connected' as const,
      category: 'Fleet Systems',
      lastSync: '1 minute ago',
      plan: 'paid' as const,
      efficiency: 98,
      features: ['Real-time tracking', 'Remote control', 'Maintenance alerts', 'Usage analytics']
    },
    {
      id: 'fleet-complete',
      name: 'Fleet Complete',
      description: 'Comprehensive fleet tracking - vehicle and equipment monitoring',
      status: 'connected' as const,
      category: 'Fleet Systems',
      lastSync: '10 minutes ago',
      plan: 'paid' as const,
      efficiency: 87,
      features: ['GPS tracking', 'Fuel monitoring', 'Driver behavior', 'Maintenance scheduling']
    },
    {
      id: 'telematics-pro',
      name: 'Telematics Pro',
      description: 'Advanced telematics solution - equipment performance and location tracking',
      status: 'disconnected' as const,
      category: 'Fleet Systems',
      lastSync: 'Never',
      plan: 'paid' as const,
      efficiency: 85,
      features: ['Equipment tracking', 'Performance analytics', 'Geofencing', 'Custom reports']
    },

    // Collaboration Tools
    {
      id: 'microsoft-teams',
      name: 'Microsoft Teams',
      description: 'Team collaboration platform - enables seamless communication and file sharing',
      status: 'connected' as const,
      category: 'Collaboration',
      lastSync: '2 minutes ago',
      plan: 'paid' as const,
      efficiency: 91,
      features: ['Chat integration', 'Video meetings', 'File sharing', 'Notification sync']
    },
    {
      id: 'whatsapp-business',
      name: 'WhatsApp Business',
      description: 'Business messaging platform - customer communication and support',
      status: 'connected' as const,
      category: 'Collaboration',
      lastSync: '30 seconds ago',
      plan: 'free' as const,
      efficiency: 82,
      features: ['Customer messaging', 'Automated responses', 'Media sharing', 'Status updates']
    },
    {
      id: 'slack',
      name: 'Slack',
      description: 'Workplace communication hub - team coordination and project updates',
      status: 'disconnected' as const,
      category: 'Collaboration',
      lastSync: 'Never',
      plan: 'paid' as const,
      efficiency: 89,
      features: ['Channel messaging', 'App integrations', 'File sharing', 'Custom notifications']
    },

    // Workshop Planning Tools
    {
      id: 'workshop-planner',
      name: 'Workshop Planner Pro',
      description: 'Comprehensive workshop scheduling - job planning and resource allocation',
      status: 'connected' as const,
      category: 'Workshop Planning',
      lastSync: '1 hour ago',
      plan: 'paid' as const,
      efficiency: 93,
      features: ['Job scheduling', 'Resource planning', 'Technician allocation', 'Time tracking']
    },
    {
      id: 'service-scheduler',
      name: 'Service Scheduler',
      description: 'Service appointment management - customer booking and technician dispatch',
      status: 'connected' as const,
      category: 'Workshop Planning',
      lastSync: '15 minutes ago',
      plan: 'paid' as const,
      efficiency: 86,
      features: ['Appointment booking', 'Technician dispatch', 'Customer notifications', 'Route optimization']
    },
    {
      id: 'maintenance-tracker',
      name: 'Maintenance Tracker',
      description: 'Equipment maintenance planning - preventive maintenance and service history',
      status: 'error' as const,
      category: 'Workshop Planning',
      lastSync: '1 day ago',
      plan: 'paid' as const,
      efficiency: 88,
      features: ['Maintenance scheduling', 'Service history', 'Parts inventory', 'Warranty tracking']
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'connected':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'error':
        return <AlertCircle className="w-5 h-5 text-red-500" />;
      default:
        return <div className="w-5 h-5 rounded-full bg-gray-300" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'connected':
        return 'text-green-600 bg-green-50 border-green-200';
      case 'error':
        return 'text-red-600 bg-red-50 border-red-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getPlanBadge = (plan: 'free' | 'paid') => {
    return plan === 'paid' ? (
      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
        Paid
      </span>
    ) : (
      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
        Free
      </span>
    );
  };

  // Stats calculation
  const totalIntegrations = integrations.length;
  const connectedIntegrations = integrations.filter(i => i.status === 'connected').length;
  const avgEfficiency = Math.round(integrations.reduce((sum, i) => sum + i.efficiency, 0) / totalIntegrations);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Integrations</h1>
          <p className="text-gray-600 mt-2">Connect and manage third-party services to enhance your workflow</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">{totalIntegrations}</span>
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500">Total Integrations</h3>
                <p className="text-2xl font-bold text-gray-900">{totalIntegrations}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500">Connected</h3>
                <p className="text-2xl font-bold text-gray-900">{connectedIntegrations}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <span className="text-lg font-bold text-yellow-600">{avgEfficiency}%</span>
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500">Avg Efficiency</h3>
                <p className="text-2xl font-bold text-gray-900">{avgEfficiency}%</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Plus className="w-6 h-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500">Categories</h3>
                <p className="text-2xl font-bold text-gray-900">5</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Available Integrations</h3>
              <p className="text-gray-500">Connect your favorite tools and services</p>
            </div>
            <button className="bg-[#273A60] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
              <Plus className="w-4 h-4 mr-2" />
              Browse All Integrations
            </button>
          </div>
        </div>

        {/* Integrations by Category */}
        {['POS Systems', 'Business Systems', 'Fleet Systems', 'Collaboration', 'Workshop Planning'].map(category => {
          const categoryIntegrations = integrations.filter(integration => integration.category === category);
          
          return (
            <div key={category} className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{category}</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {categoryIntegrations.map((integration) => (
                  <div key={integration.id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                          <span className="text-lg font-semibold text-gray-600">
                            {integration.name.substring(0, 2).toUpperCase()}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                            {integration.name}
                            {getPlanBadge(integration.plan)}
                          </h4>
                          <p className="text-sm text-gray-500">{integration.category}</p>
                          {/* Efficiency indicator */}
                          <div className="flex items-center mt-1">
                            <span className="text-xs text-gray-500 mr-2">Efficiency:</span>
                            <div className="flex items-center">
                              <div className="w-16 h-2 bg-gray-200 rounded-full mr-2">
                                <div 
                                  className={`h-2 rounded-full ${
                                    integration.efficiency >= 90 ? 'bg-green-500' :
                                    integration.efficiency >= 80 ? 'bg-yellow-500' : 
                                    'bg-red-500'
                                  }`}
                                  style={{ width: `${integration.efficiency}%` }}
                                ></div>
                              </div>
                              <span className="text-xs font-medium text-gray-700">{integration.efficiency}%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {getStatusIcon(integration.status)}
                        <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(integration.status)}`}>
                          {integration.status === 'connected' ? 'Connected' : 
                           integration.status === 'error' ? 'Error' : 'Not Connected'}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4">{integration.description}</p>
                    
                    {/* Features */}
                    <div className="mb-4">
                      <h5 className="text-sm font-medium text-gray-900 mb-2">Features</h5>
                      <div className="flex flex-wrap gap-1">
                        {integration.features?.slice(0, 3).map((feature, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                            {feature}
                          </span>
                        ))}
                        {integration.features && integration.features.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                            +{integration.features.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        Last sync: {integration.lastSync}
                      </span>
                      <div className="flex gap-2">
                        {integration.status === 'connected' ? (
                          <>
                            <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50 transition-colors">
                              Configure
                            </button>
                            <button className="px-3 py-1 text-sm text-red-600 hover:bg-red-50 transition-colors">
                              Disconnect
                            </button>
                          </>
                        ) : (
                          <button className="px-3 py-1 text-sm bg-[#273A60] text-white rounded hover:bg-blue-700 transition-colors">
                            Connect
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
