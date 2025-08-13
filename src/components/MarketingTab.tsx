import React from 'react';
import { 
  MegaphoneIcon, 
  EnvelopeIcon, 
  DevicePhoneMobileIcon,
  BuildingStorefrontIcon,
  PlayIcon,
  PlusIcon,
  EyeIcon
} from '@heroicons/react/24/outline';
import { useMarketing } from '../hooks';

export const MarketingTab: React.FC = () => {
  const { templates, createCampaign, activeCampaign } = useMarketing();
  const [selectedTemplate, setSelectedTemplate] = React.useState<string | null>(null);
  const [campaignData, setCampaignData] = React.useState({
    targetArea: '',
    productFilter: '',
    customerSegment: 'all',
    message: ''
  });

  const campaignTypes = [
    { 
      id: 'email', 
      name: 'Email Campaign', 
      icon: EnvelopeIcon,
      description: 'Reach customers via email with product updates and offers'
    },
    { 
      id: 'sms', 
      name: 'SMS Campaign', 
      icon: DevicePhoneMobileIcon,
      description: 'Send timely reminders and notifications via SMS'
    },
    { 
      id: 'in_store', 
      name: 'In-Store Promotion', 
      icon: BuildingStorefrontIcon,
      description: 'Create promotional materials for retail locations'
    }
  ];

  const handleCreateCampaign = () => {
    if (selectedTemplate) {
      const template = templates.find(t => t.id === selectedTemplate);
      if (template) {
        createCampaign({
          ...template,
          ...campaignData,
          createdAt: new Date().toISOString()
        });
      }
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Marketing Campaign Builder</h2>
            <p className="text-gray-600 mt-2">
              Create targeted campaigns based on sales data and customer registrations
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-md hover:border-gray-400">
              <EyeIcon className="w-5 h-5" />
              <span>Preview</span>
            </button>
            <button 
              onClick={handleCreateCampaign}
              disabled={!selectedTemplate}
              className="flex items-center space-x-2 bg-husqvarna-orange text-white px-4 py-2 rounded-md hover:bg-husqvarna-orange/90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <PlayIcon className="w-5 h-5" />
              <span>Launch Campaign</span>
            </button>
          </div>
        </div>
      </div>

      {/* Campaign Builder */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Campaign Type Selection */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">1. Choose Campaign Type</h3>
          <div className="space-y-3">
            {campaignTypes.map((type) => {
              const Icon = type.icon;
              const availableTemplates = templates.filter(t => t.type === type.id);
              
              return (
                <div key={type.id} className="border rounded-lg p-4 hover:border-husqvarna-orange/50 cursor-pointer">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <Icon className="w-6 h-6 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{type.name}</h4>
                      <p className="text-sm text-gray-500 mt-1">{type.description}</p>
                      <div className="mt-2">
                        <span className="text-xs text-gray-400">
                          {availableTemplates.length} templates available
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {availableTemplates.length > 0 && (
                    <div className="mt-3 space-y-2">
                      {availableTemplates.map((template) => (
                        <button
                          key={template.id}
                          onClick={() => setSelectedTemplate(template.id)}
                          className={`w-full text-left p-2 rounded text-sm ${
                            selectedTemplate === template.id
                              ? 'bg-husqvarna-orange text-white'
                              : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          {template.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Target Audience */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">2. Target Audience</h3>
          
          <div className="space-y-4">
            {/* Geographic Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Geographic Area
              </label>
              <select
                value={campaignData.targetArea}
                onChange={(e) => setCampaignData({...campaignData, targetArea: e.target.value})}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-husqvarna-orange"
              >
                <option value="">All areas</option>
                <option value="stockholm">Stockholm region</option>
                <option value="goteborg">Göteborg region</option>
                <option value="malmo">Malmö region</option>
                <option value="other">Other regions</option>
              </select>
            </div>

            {/* Product Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Product Category
              </label>
              <select
                value={campaignData.productFilter}
                onChange={(e) => setCampaignData({...campaignData, productFilter: e.target.value})}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-husqvarna-orange"
              >
                <option value="">All products</option>
                <option value="robotic-mowers">Robotic Mowers</option>
                <option value="chainsaws">Chainsaws</option>
                <option value="blowers">Blowers</option>
                <option value="trimmers">Trimmers</option>
              </select>
            </div>

            {/* Customer Segment */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Customer Segment
              </label>
              <div className="space-y-2">
                {[
                  { id: 'all', label: 'All customers' },
                  { id: 'registered', label: 'Registered customers only' },
                  { id: 'unregistered', label: 'Unregistered customers' },
                  { id: 'repeat', label: 'Repeat customers' }
                ].map((segment) => (
                  <label key={segment.id} className="flex items-center">
                    <input
                      type="radio"
                      name="customerSegment"
                      value={segment.id}
                      checked={campaignData.customerSegment === segment.id}
                      onChange={(e) => setCampaignData({...campaignData, customerSegment: e.target.value})}
                      className="h-4 w-4 text-husqvarna-orange focus:ring-husqvarna-orange border-gray-300"
                    />
                    <span className="ml-2 text-sm text-gray-700">{segment.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Estimated Reach */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="text-sm font-medium text-gray-900 mb-2">Estimated Reach</h4>
              <div className="text-2xl font-bold text-husqvarna-orange">
                {Math.floor(Math.random() * 500 + 150)} customers
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Based on current filters and registration data
              </p>
            </div>
          </div>
        </div>

        {/* Message Customization */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">3. Customize Message</h3>
          
          {selectedTemplate ? (
            <div className="space-y-4">
              {/* Template Preview */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Template Preview</h4>
                <div className="text-sm text-gray-900 font-mono bg-white p-3 rounded border">
                  {templates.find(t => t.id === selectedTemplate)?.template}
                </div>
              </div>

              {/* Available Variables */}
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Available Variables</h4>
                <div className="flex flex-wrap gap-2">
                  {templates.find(t => t.id === selectedTemplate)?.variables.map((variable) => (
                    <span
                      key={variable}
                      className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                    >
                      {`{{${variable}}}`}
                    </span>
                  ))}
                </div>
              </div>

              {/* Custom Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Custom Message (Optional)
                </label>
                <textarea
                  value={campaignData.message}
                  onChange={(e) => setCampaignData({...campaignData, message: e.target.value})}
                  placeholder="Add custom content or override the template..."
                  rows={4}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-husqvarna-orange"
                />
              </div>

              {/* Campaign Stats */}
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="text-sm font-medium text-blue-900 mb-2">Campaign Insights</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-blue-600">Best time:</span>
                    <div className="font-medium">10:00 - 14:00</div>
                  </div>
                  <div>
                    <span className="text-blue-600">Expected CTR:</span>
                    <div className="font-medium">12-18%</div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <MegaphoneIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">Select a campaign type to customize your message</p>
            </div>
          )}
        </div>
      </div>

      {/* Recent Campaigns */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Recent Campaigns</h3>
        </div>
        <div className="p-6">
          {activeCampaign ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-800 font-medium">Campaign Active</span>
              </div>
              <p className="text-green-700 text-sm mt-1">
                Your campaign is now running and reaching customers.
              </p>
            </div>
          ) : (
            <div className="text-center py-8">
              <PlusIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No campaigns created yet</p>
              <p className="text-sm text-gray-400">Create your first campaign using the builder above</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
