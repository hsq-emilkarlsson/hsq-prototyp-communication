import { useState } from 'react';
import {
  MapPinIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ClockIcon,
  BoltIcon,
  SignalIcon,
  ChartBarIcon,
  AdjustmentsHorizontalIcon,
  LinkIcon,
  PlayIcon,
  PauseIcon,
  XCircleIcon,
  BellIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline';

interface AutomowerData {
  id: string;
  name: string;
  model: string;
  status: 'working' | 'charging' | 'error' | 'maintenance' | 'offline';
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  battery: number;
  lastSeen: string;
  workTime: string;
  nextMaintenance: string;
  errorCode?: string;
  errorDescription?: string;
}

interface FleetIntegration {
  id: string;
  name: string;
  status: 'connected' | 'disconnected' | 'error';
  description: string;
  logo?: string;
  devices: number;
  lastSync: string;
}

export function FleetServicesPage() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const automowers: AutomowerData[] = [
    {
      id: 'auto-001',
      name: 'Automower Villa Nord',
      model: 'Automower 315X',
      status: 'working',
      location: {
        lat: 59.3293,
        lng: 18.0686,
        address: 'Storgatan 15, Stockholm'
      },
      battery: 85,
      lastSeen: '2 min sedan',
      workTime: '2h 15min',
      nextMaintenance: '15 dagar'
    },
    {
      id: 'auto-002',
      name: 'Automower Park Syd',
      model: 'Automower 430X',
      status: 'charging',
      location: {
        lat: 59.3265,
        lng: 18.0649,
        address: 'Parkgatan 8, Stockholm'
      },
      battery: 45,
      lastSeen: '5 min sedan',
      workTime: '4h 32min',
      nextMaintenance: '8 dagar'
    },
    {
      id: 'auto-003',
      name: 'Automower Company AB',
      model: 'Automower 450X',
      status: 'error',
      location: {
        lat: 59.3321,
        lng: 18.0710,
        address: 'Industrivägen 22, Stockholm'
      },
      battery: 15,
      lastSeen: '1h 23min sedan',
      workTime: '0h 45min',
      nextMaintenance: '3 dagar',
      errorCode: 'E001',
      errorDescription: 'Klipper fastnar - kontrollera området'
    },
    {
      id: 'auto-004',
      name: 'Automower Kontor Center',
      model: 'Automower 305',
      status: 'maintenance',
      location: {
        lat: 59.3344,
        lng: 18.0632,
        address: 'Kontorstorget 5, Stockholm'
      },
      battery: 0,
      lastSeen: '2 days ago',
      workTime: '0h 0min',
      nextMaintenance: 'Pågår'
    }
  ];

  const fleetIntegrations: FleetIntegration[] = [
    {
      id: 'husqvarna-fleet',
      name: 'Husqvarna Fleet Services',
      status: 'connected',
      description: 'Officiell Husqvarna fleethantering',
      devices: 12,
      lastSync: '2 min sedan'
    },
    {
      id: 'azuga-fleet',
      name: 'Azuga Fleet',
      status: 'disconnected',
      description: 'GPS-spårning och fleetanalys',
      devices: 0,
      lastSync: 'Aldrig'
    },
    {
      id: 'fleetio',
      name: 'Fleetio',
      status: 'connected',
      description: 'Underhållshantering och rapportering',
      devices: 8,
      lastSync: '15 min sedan'
    },
    {
      id: 'geotab',
      name: 'Geotab',
      status: 'error',
      description: 'Avancerad telematik och analytics',
      devices: 3,
      lastSync: '2h 15min sedan'
    },
    {
      id: 'samsara',
      name: 'Samsara',
      status: 'disconnected',
      description: 'IoT-plattform för fleethantering',
      devices: 0,
      lastSync: 'Aldrig'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'working': return 'text-green-600 bg-green-100';
      case 'charging': return 'text-blue-600 bg-blue-100';
      case 'error': return 'text-red-600 bg-red-100';
      case 'maintenance': return 'text-yellow-600 bg-yellow-100';
      case 'offline': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'working': return <PlayIcon className="w-4 h-4" />;
      case 'charging': return <BoltIcon className="w-4 h-4" />;
      case 'error': return <ExclamationTriangleIcon className="w-4 h-4" />;
      case 'maintenance': return <AdjustmentsHorizontalIcon className="w-4 h-4" />;
      case 'offline': return <XCircleIcon className="w-4 h-4" />;
      default: return <PauseIcon className="w-4 h-4" />;
    }
  };

  const getIntegrationStatusColor = (status: string) => {
    switch (status) {
      case 'connected': return 'text-green-600 bg-green-100';
      case 'disconnected': return 'text-gray-600 bg-gray-100';
      case 'error': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Fleet Services</h1>
        <p className="text-gray-600">
          Monitor and manage your Automower fleet with integrated fleet tools
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center">
            <CheckCircleIcon className="w-8 h-8 text-green-600 mr-3" />
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                {automowers.filter(a => a.status === 'working').length}
              </h3>
              <p className="text-gray-600 text-sm">Aktiva maskiner</p>
            </div>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center">
            <BoltIcon className="w-8 h-8 text-blue-600 mr-3" />
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                {automowers.filter(a => a.status === 'charging').length}
              </h3>
              <p className="text-gray-600 text-sm">Laddning</p>
            </div>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center">
            <ExclamationTriangleIcon className="w-8 h-8 text-red-600 mr-3" />
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                {automowers.filter(a => a.status === 'error').length}
              </h3>
              <p className="text-gray-600 text-sm">Fel och varningar</p>
            </div>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center">
            <ChartBarIcon className="w-8 h-8 text-[#273A60] mr-3" />
            <div>
              <h3 className="text-2xl font-bold text-gray-900">{automowers.length}</h3>
              <p className="text-gray-600 text-sm">Totalt maskiner</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTab === 'dashboard'
                ? 'border-[#273A60] text-[#273A60]'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <ChartBarIcon className="w-4 h-4 inline mr-2" />
            Dashboard
          </button>
          <button
            onClick={() => setActiveTab('map')}
            className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTab === 'map'
                ? 'border-[#273A60] text-[#273A60]'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <MapPinIcon className="w-4 h-4 inline mr-2" />
            Karta
          </button>
          <button
            onClick={() => setActiveTab('logs')}
            className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTab === 'logs'
                ? 'border-[#273A60] text-[#273A60]'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <BellIcon className="w-4 h-4 inline mr-2" />
            Fel & Loggar
          </button>
          <button
            onClick={() => setActiveTab('integrations')}
            className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTab === 'integrations'
                ? 'border-[#273A60] text-[#273A60]'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <LinkIcon className="w-4 h-4 inline mr-2" />
            Integrations
          </button>
        </nav>
      </div>

      {/* Dashboard Tab */}
      {activeTab === 'dashboard' && (
        <div className="space-y-6">
          {/* Fleet Overview */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Fleet Overview</h2>
            <div className="space-y-4">
              {automowers.map((automower) => (
                <div key={automower.id} className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-full ${getStatusColor(automower.status)}`}>
                      {getStatusIcon(automower.status)}
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{automower.name}</h3>
                      <p className="text-sm text-gray-600">{automower.model} • {automower.location.address}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6 text-sm">
                    <div className="text-center">
                      <p className="text-gray-500">Batteri</p>
                      <p className="font-medium">{automower.battery}%</p>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-500">Arbetstid</p>
                      <p className="font-medium">{automower.workTime}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-500">Senast sedd</p>
                      <p className="font-medium">{automower.lastSeen}</p>
                    </div>
                    <button
                      onClick={() => setActiveTab('map')}
                      className="text-[#273A60] hover:text-blue-700 font-medium"
                    >
                      Detaljer
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Alerts */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Senaste Varningar</h2>
            <div className="space-y-3">
              <div className="flex items-center p-3 bg-red-50 border border-red-200 rounded-lg">
                <ExclamationTriangleIcon className="w-5 h-5 text-red-600 mr-3" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-red-900">Automower Company AB - Fel E001</p>
                  <p className="text-sm text-red-700">Klipper fastnar - kontrollera området</p>
                </div>
                <span className="text-xs text-red-600">1h 23min sedan</span>
              </div>
              <div className="flex items-center p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <ClockIcon className="w-5 h-5 text-yellow-600 mr-3" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-yellow-900">Automower Kontor Center - Underhåll</p>
                  <p className="text-sm text-yellow-700">Schemalagd underhåll pågår</p>
                </div>
                <span className="text-xs text-yellow-600">2 days ago</span>
              </div>
              <div className="flex items-center p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <SignalIcon className="w-5 h-5 text-blue-600 mr-3" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-blue-900">Geotab Integration - Connection Error</p>
                  <p className="text-sm text-blue-700">Misslyckad synkronisering, kontrollera API-nyckel</p>
                </div>
                <span className="text-xs text-blue-600">2h 15min sedan</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Map Tab */}
      {activeTab === 'map' && (
        <div className="space-y-6">
          {/* Map Container */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Fleet Karta</h2>
              <button className="flex items-center px-3 py-2 bg-[#273A60] text-white rounded-lg text-sm hover:bg-blue-700 transition-colors">
                <ArrowPathIcon className="w-4 h-4 mr-2" />
                Update
              </button>
            </div>
            
            {/* Mock Map Display */}
            <div className="w-full h-96 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center relative">
              <div className="text-center">
                <MapPinIcon className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-600 font-medium">Stockholm Fleet Karta</p>
                <p className="text-sm text-gray-500">Showing {automowers.length} Automowers</p>
              </div>
              
              {/* Mock Map Pins */}
              <div className="absolute top-20 left-32">
                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold">1</div>
                <div className="text-xs text-center mt-1 font-medium">Villa Nord</div>
              </div>
              <div className="absolute top-40 left-48">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold">2</div>
                <div className="text-xs text-center mt-1 font-medium">Park Syd</div>
              </div>
              <div className="absolute top-32 right-40">
                <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold">3</div>
                <div className="text-xs text-center mt-1 font-medium">Company AB</div>
              </div>
              <div className="absolute bottom-32 left-40">
                <div className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold">4</div>
                <div className="text-xs text-center mt-1 font-medium">Kontor</div>
              </div>
            </div>
          </div>

          {/* Map Legend */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Kartförklaring</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600">Arbetar</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600">Laddar</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-red-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600">Fel</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600">Underhåll</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Logs Tab */}
      {activeTab === 'logs' && (
        <div className="space-y-6">
          {/* Error Log */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Fel & Händelselogg</h2>
            <div className="space-y-4">
              <div className="border border-red-200 rounded-lg p-4 bg-red-50">
                <div className="flex items-start justify-between">
                  <div className="flex items-start">
                    <ExclamationTriangleIcon className="w-5 h-5 text-red-600 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-red-900">Critical error - Automower Company AB</h4>
                      <p className="text-sm text-red-700 mt-1">Felkod: E001 - Klipper fastnar</p>
                      <p className="text-sm text-red-600 mt-2">
                        Maskinen har fastnat vid position 59.3321, 18.0710. Kontrollera området för hinder.
                      </p>
                    </div>
                  </div>
                  <span className="text-xs text-red-600 whitespace-nowrap">1h 23min sedan</span>
                </div>
              </div>

              <div className="border border-yellow-200 rounded-lg p-4 bg-yellow-50">
                <div className="flex items-start justify-between">
                  <div className="flex items-start">
                    <ClockIcon className="w-5 h-5 text-yellow-600 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-yellow-900">Underhåll påbörjat - Automower Kontor Center</h4>
                      <p className="text-sm text-yellow-700 mt-1">Schemalagd service</p>
                      <p className="text-sm text-yellow-600 mt-2">
                        Årlig service påbörjad. Beräknad tid: 2-3 dagar.
                      </p>
                    </div>
                  </div>
                  <span className="text-xs text-yellow-600 whitespace-nowrap">2 days ago</span>
                </div>
              </div>

              <div className="border border-blue-200 rounded-lg p-4 bg-blue-50">
                <div className="flex items-start justify-between">
                  <div className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-blue-900">Arbete slutfört - Automower Villa Nord</h4>
                      <p className="text-sm text-blue-700 mt-1">Klippning avslutad</p>
                      <p className="text-sm text-blue-600 mt-2">
                        Arbetstid: 2h 15min. Område: 450 m². Återgår till laddstation.
                      </p>
                    </div>
                  </div>
                  <span className="text-xs text-blue-600 whitespace-nowrap">3h 45min sedan</span>
                </div>
              </div>

              <div className="border border-green-200 rounded-lg p-4 bg-green-50">
                <div className="flex items-start justify-between">
                  <div className="flex items-start">
                    <BoltIcon className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-green-900">Laddning klar - Automower Park Syd</h4>
                      <p className="text-sm text-green-700 mt-1">Batteri 100%</p>
                      <p className="text-sm text-green-600 mt-2">
                        Laddningstid: 1h 32min. Redo för nästa arbetspass.
                      </p>
                    </div>
                  </div>
                  <span className="text-xs text-green-600 whitespace-nowrap">5h 12min sedan</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Integrations Tab */}
      {activeTab === 'integrations' && (
        <div className="space-y-6">
          {/* Integration Status */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Fleet Integrations</h2>
                <p className="text-gray-600 text-sm mt-1">
                  Anslut till externa fleet-verktyg för utökad funktionalitet
                </p>
              </div>
              <button className="inline-flex items-center px-4 py-2 bg-[#273A60] hover:bg-blue-700 text-white rounded-lg transition-colors">
                <LinkIcon className="w-4 h-4 mr-2" />
                Add Integration
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {fleetIntegrations.map((integration) => (
                <div key={integration.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                        <LinkIcon className="w-5 h-5 text-gray-500" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{integration.name}</h3>
                        <p className="text-sm text-gray-600">{integration.description}</p>
                      </div>
                    </div>
                    <span className={`px-2 py-1 text-xs rounded-full ${getIntegrationStatusColor(integration.status)}`}>
                      {integration.status === 'connected' ? 'Ansluten' : 
                       integration.status === 'error' ? 'Fel' : 'Frånkopplad'}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">Enheter</p>
                      <p className="font-medium">{integration.devices}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Senaste synk</p>
                      <p className="font-medium">{integration.lastSync}</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex space-x-2">
                    {integration.status === 'connected' ? (
                      <>
                        <button className="flex-1 px-3 py-2 bg-green-100 text-green-700 rounded-lg text-sm font-medium hover:bg-green-200 transition-colors">
                          Configure
                        </button>
                        <button className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                          Koppla från
                        </button>
                      </>
                    ) : (
                      <button className="flex-1 px-3 py-2 bg-[#273A60] text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                        Anslut
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Available Integrations */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Tillgängliga Integrationer</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                'Fleet Chaser', 'Simply Fleet', 'GPSWOX', 'GPSTrackit', 
                'NexTraq', 'iWave Telematics', 'Microsoft Dynamics 365 Field Service', 'ServiceNow'
              ].map((name) => (
                <div key={name} className="border border-gray-200 rounded-lg p-4 text-center">
                  <div className="w-8 h-8 bg-gray-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <LinkIcon className="w-4 h-4 text-gray-500" />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-1">{name}</h4>
                  <button className="text-sm text-[#273A60] hover:text-blue-700 font-medium">
                    Läs mer
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
