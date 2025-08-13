import React from 'react';
import { 
  DocumentTextIcon,
  InformationCircleIcon,
  ArrowLeftIcon,
  PrinterIcon,
  ShareIcon
} from '@heroicons/react/24/outline';

interface ServiceBulletinPageProps {
  onBack?: () => void;
}

export const ServiceBulletinPage: React.FC<ServiceBulletinPageProps> = ({ onBack }) => {
  const bulletinData = {
    number: 'SB2500012',
    version: 'English 1 (1B)',
    title: 'Automower® 450X Battery Optimization Guide, Husqvarna Automower® 450X, 2024-08',
    affectedModels: ['Husqvarna Automower® 450X'],
    serialNumbers: 'All serial numbers manufactured after 2024-01',
    description: 'Enhanced battery management system has been released - a performance optimization for Husqvarna Automower® 450X. This update provides improved functionality for extended operation periods.',
    features: [
      'Enhanced Performance – Improved cutting efficiency and extended operating time during peak season.',
      'Smart Scheduling – Advanced weather adaptation and automatic schedule optimization based on grass growth patterns.',
      'Maintenance Alerts – Proactive notifications for blade replacement and seasonal maintenance requirements.'
    ],
    additionalInfo: 'For technical support, contact your local Husqvarna service center. Additional documentation and troubleshooting guides are available through the partner portal.',
    kitContents: [
      'Updated firmware installation guide',
      'Battery optimization manual',
      'Performance monitoring checklist',
      'Customer communication template'
    ],
    dateIssued: '2024-08-15',
    priority: 'Medium'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              {onBack && (
                <button
                  onClick={onBack}
                  className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <ArrowLeftIcon className="w-5 h-5" />
                </button>
              )}
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#273A60] rounded-lg flex items-center justify-center">
                  <DocumentTextIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-lg font-semibold text-gray-900">Service Bulletin</h1>
                  <p className="text-sm text-gray-600">{bulletinData.number}</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                <ShareIcon className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                <PrinterIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          {/* Document Header */}
          <div className="border-b border-gray-200 p-6">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="text-3xl font-bold text-[#0066CC]">Husqvarna</div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-gray-900">{bulletinData.number}</div>
                <div className="text-sm text-gray-600">{bulletinData.version}</div>
              </div>
            </div>
            
            <div className="border-t border-gray-300 pt-4">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                {bulletinData.title}
              </h2>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Affected Models */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Affected Models</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <ul className="space-y-1">
                  {bulletinData.affectedModels.map((model, index) => (
                    <li key={index} className="text-gray-700">• {model}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Serial Numbers */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Serial Numbers Affected</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700">{bulletinData.serialNumbers}</p>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed">{bulletinData.description}</p>
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
              <div className="space-y-3">
                {bulletinData.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#273A60] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Illustration Placeholder */}
            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <div className="w-32 h-32 mx-auto bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                <DocumentTextIcon className="w-16 h-16 text-gray-400" />
              </div>
              <p className="text-gray-500 text-sm">Technical illustration would be displayed here</p>
            </div>

            {/* Additional Information */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Additional Information</h3>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <InformationCircleIcon className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <p className="text-blue-800 text-sm leading-relaxed">{bulletinData.additionalInfo}</p>
                </div>
              </div>
            </div>

            {/* Service Kit Contents */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Kit Contents</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <ul className="space-y-2">
                  {bulletinData.kitContents.map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-gray-200 pt-6 mt-8">
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div>
                  <p>Document issued: {bulletinData.dateIssued}</p>
                  <p>© 2024 Husqvarna AB. All rights reserved.</p>
                </div>
                <div className="text-right">
                  <p>For service support contact:</p>
                  <p className="font-medium text-gray-700">support@husqvarna.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
