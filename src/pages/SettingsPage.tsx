import { useState } from 'react';
import { 
  Bell, 
  User,
  Shield,
  CreditCard,
  Database
} from 'lucide-react';

export function SettingsPage() {
  const [activeSection, setActiveSection] = useState('notifications');

  // Navigation menu items
  const menuItems = [
    {
      id: 'notifications',
      label: 'Notifications',
      icon: Bell,
      description: 'Manage notification preferences and channels'
    },
    {
      id: 'account',
      label: 'Account',
      icon: User,
      description: 'Personal account settings and preferences'
    },
    {
      id: 'security',
      label: 'Security',
      icon: Shield,
      description: 'Security settings and access control'
    },
    {
      id: 'billing',
      label: 'Billing',
      icon: CreditCard,
      description: 'Subscription and billing information'
    },
    {
      id: 'api',
      label: 'API & Webhooks',
      icon: Database,
      description: 'API keys and webhook configurations'
    }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar Navigation */}
      <div className="w-80 bg-white border-r border-gray-200 overflow-y-auto">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Settings</h1>
          <p className="text-gray-600 text-sm">Manage your account and integrations</p>
        </div>
        
        <nav className="px-4 pb-6">
          <div className="space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full text-left px-3 py-3 rounded-lg transition-colors ${
                  activeSection === item.id
                    ? 'bg-[#273A60] text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center">
                  <item.icon className="w-5 h-5 mr-3" />
                  <div className="flex-1">
                    <div className="font-medium">{item.label}</div>
                    <div className={`text-sm ${activeSection === item.id ? 'text-blue-100' : 'text-gray-500'}`}>
                      {item.description}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-8">
          {/* Notifications Section */}
          {activeSection === 'notifications' && (
            <div className="max-w-4xl">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Notifications</h2>
                <p className="text-gray-600 mt-2">Manage how and when you receive notifications</p>
              </div>

              {/* Notification Channels */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Notification Channels</h3>
                
                <div className="space-y-4">
                  {/* Email */}
                  <div className="flex items-center justify-between py-4 border-b border-gray-100">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-blue-600 font-semibold">@</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Email Notifications</h4>
                        <p className="text-sm text-gray-500">Receive notifications via email</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#273A60]"></div>
                    </label>
                  </div>

                  {/* SMS */}
                  <div className="flex items-center justify-between py-4 border-b border-gray-100">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-green-600 font-semibold">📱</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">SMS Notifications</h4>
                        <p className="text-sm text-gray-500">Receive urgent notifications via SMS</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#273A60]"></div>
                    </label>
                  </div>

                  {/* Push */}
                  <div className="flex items-center justify-between py-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                        <Bell className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Push Notifications</h4>
                        <p className="text-sm text-gray-500">Browser push notifications</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#273A60]"></div>
                    </label>
                  </div>
                </div>
              </div>

              {/* Notification Types */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Notification Types</h3>
                
                <div className="space-y-3">
                  {[
                    { name: 'Order Updates', description: 'New orders and status changes', enabled: true },
                    { name: 'Inventory Alerts', description: 'Low stock and reorder notifications', enabled: true },
                    { name: 'System Maintenance', description: 'Scheduled maintenance and updates', enabled: true },
                    { name: 'Marketing Updates', description: 'New campaigns and promotions', enabled: false },
                    { name: 'Support Messages', description: 'Support case updates and responses', enabled: true },
                    { name: 'Training Reminders', description: 'Upcoming training sessions', enabled: false }
                  ].map((type, index) => (
                    <div key={index} className="flex items-center justify-between py-3 px-4 rounded-lg hover:bg-gray-50">
                      <div>
                        <h4 className="font-medium text-gray-900">{type.name}</h4>
                        <p className="text-sm text-gray-500">{type.description}</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" defaultChecked={type.enabled} className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#273A60]"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Other sections placeholders */}
          {activeSection === 'account' && (
            <div className="max-w-4xl">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Account Settings</h2>
                <p className="text-gray-600 mt-2">Manage your personal account information</p>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
                <User className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Account Settings</h3>
                <p className="text-gray-600">Personal account settings will be available here.</p>
              </div>
            </div>
          )}

          {activeSection === 'security' && (
            <div className="max-w-4xl">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Security Settings</h2>
                <p className="text-gray-600 mt-2">Manage your security preferences and access controls</p>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
                <Shield className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Security Settings</h3>
                <p className="text-gray-600">Security and access control settings will be available here.</p>
              </div>
            </div>
          )}

          {activeSection === 'billing' && (
            <div className="max-w-4xl">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Billing & Subscription</h2>
                <p className="text-gray-600 mt-2">Manage your subscription and billing information</p>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
                <CreditCard className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Billing Settings</h3>
                <p className="text-gray-600">Subscription and billing management will be available here.</p>
              </div>
            </div>
          )}

          {activeSection === 'api' && (
            <div className="max-w-4xl">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900">API & Webhooks</h2>
                <p className="text-gray-600 mt-2">Manage API keys and webhook configurations</p>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
                <Database className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">API Settings</h3>
                <p className="text-gray-600">API keys and webhook management will be available here.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
