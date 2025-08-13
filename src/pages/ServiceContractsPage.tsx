import React, { useState } from 'react';
import { 
  ArrowLeftIcon,
  UserIcon,
  PhoneIcon,
  BuildingOfficeIcon,
  InformationCircleIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';

interface ServiceContractsPageProps {
  onBack?: () => void;
}

interface ServicePackage {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  features: string[];
  popular?: boolean;
}

export const ServiceContractsPage: React.FC<ServiceContractsPageProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'service' | 'leasing'>('service');
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    pncNumber: '',
    serialNumber: '',
    duration: '12',
    paymentMethod: 'invoice',
    leasingAmount: '',
    interestRate: ''
  });

  const servicePackages: ServicePackage[] = [
    {
      id: 'basic',
      name: 'Basic Service',
      description: 'Essential maintenance and support',
      price: '2,890 SEK/year',
      duration: '12 months',
      features: [
        'Annual maintenance inspection',
        'Phone and email support',
        'Basic troubleshooting',
        'Warranty extension (1 year)',
        'Software updates'
      ]
    },
    {
      id: 'premium',
      name: 'Premium Service',
      description: 'Comprehensive care package',
      price: '4,590 SEK/year',
      duration: '12 months',
      popular: true,
      features: [
        'Bi-annual maintenance visits',
        'Priority phone support',
        'On-site troubleshooting',
        'Warranty extension (2 years)',
        'Software updates & upgrades',
        'Replacement parts discount (20%)',
        'Seasonal preparation service'
      ]
    },
    {
      id: 'enterprise',
      name: 'Enterprise Service',
      description: 'Complete fleet management',
      price: 'Custom pricing',
      duration: '12-36 months',
      features: [
        'Dedicated service technician',
        '24/7 priority support',
        'Preventive maintenance program',
        'Full warranty coverage',
        'Software & hardware upgrades',
        'Replacement parts included',
        'Fleet monitoring dashboard',
        'Custom SLA agreements'
      ]
    }
  ];

  const customerInfo = {
    name: 'Söderqvist AB',
    orgNumber: '556789-1234',
    address: 'Industrivägen 22, 123 45 Stockholm',
    contact: 'Lars Söderqvist',
    phone: '+46 8 123 456 78',
    email: 'lars@soderqvist.se'
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
                  <h1 className="text-lg font-semibold text-gray-900">Service Contracts & Leasing</h1>
                  <p className="text-sm text-gray-600">Activate services and configure financing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Customer Info Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Customer Information</h2>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              Verified Customer
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-center space-x-3">
              <BuildingOfficeIcon className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Company</p>
                <p className="font-medium text-gray-900">{customerInfo.name}</p>
                <p className="text-sm text-gray-600">{customerInfo.orgNumber}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <UserIcon className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Contact Person</p>
                <p className="font-medium text-gray-900">{customerInfo.contact}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <PhoneIcon className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-medium text-gray-900">{customerInfo.phone}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('service')}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'service'
                    ? 'border-[#273A60] text-[#273A60]'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Service Contracts
              </button>
              <button
                onClick={() => setActiveTab('leasing')}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'leasing'
                    ? 'border-[#273A60] text-[#273A60]'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Leasing & Financing
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'service' && (
              <div className="space-y-6">
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Service Contract Registration</h3>
                  
                  <form className="space-y-6">
                    {/* Step 1: Product Information */}
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-4">1. Product Information</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            PNC Number *
                          </label>
                          <input
                            type="text"
                            value={formData.pncNumber}
                            onChange={(e) => setFormData({...formData, pncNumber: e.target.value})}
                            placeholder="e.g. 967 62 37-01"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#273A60] focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Serial Number *
                          </label>
                          <input
                            type="text"
                            value={formData.serialNumber}
                            onChange={(e) => setFormData({...formData, serialNumber: e.target.value})}
                            placeholder="e.g. AM450X-2024-001234"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#273A60] focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Step 2: Service Package */}
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-4">2. Choose Service Package</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {servicePackages.map((pkg) => (
                          <button
                            key={pkg.id}
                            type="button"
                            onClick={() => setSelectedPackage(pkg.id)}
                            className={`p-3 rounded-lg border-2 text-left transition-all ${
                              selectedPackage === pkg.id
                                ? 'border-[#273A60] bg-[#273A60]/10'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <div className="font-semibold text-gray-900">{pkg.name}</div>
                            <div className="text-lg font-bold text-[#273A60]">{pkg.price}</div>
                            <div className="text-sm text-gray-600 mt-1">{pkg.description}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Step 3: Contract Terms */}
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-4">3. Contract Terms</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Contract Period
                          </label>
                          <select 
                            value={formData.duration}
                            onChange={(e) => setFormData({...formData, duration: e.target.value})}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#273A60] focus:border-transparent"
                          >
                            <option value="12">12 months</option>
                            <option value="24">24 months (10% discount)</option>
                            <option value="36">36 months (15% discount)</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Payment Method
                          </label>
                          <select 
                            value={formData.paymentMethod}
                            onChange={(e) => setFormData({...formData, paymentMethod: e.target.value})}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#273A60] focus:border-transparent"
                          >
                            <option value="invoice">Monthly Invoice</option>
                            <option value="autogiro">Autogiro (5% discount)</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Summary & Activation */}
                    {selectedPackage && formData.pncNumber && formData.serialNumber && (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <h4 className="font-medium text-gray-900 mb-3">Contract Summary</h4>
                        <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                          <div><span className="text-gray-600">Product:</span> <span className="font-medium">{formData.pncNumber}</span></div>
                          <div><span className="text-gray-600">Serial:</span> <span className="font-medium">{formData.serialNumber}</span></div>
                          <div><span className="text-gray-600">Package:</span> <span className="font-medium">{servicePackages.find(p => p.id === selectedPackage)?.name}</span></div>
                          <div><span className="text-gray-600">Monthly Cost:</span> <span className="font-medium text-[#273A60]">{servicePackages.find(p => p.id === selectedPackage)?.price}</span></div>
                          <div><span className="text-gray-600">Duration:</span> <span className="font-medium">{formData.duration} months</span></div>
                          <div><span className="text-gray-600">Payment:</span> <span className="font-medium">{formData.paymentMethod === 'invoice' ? 'Monthly Invoice' : 'Autogiro'}</span></div>
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            alert(`Service contract activated!\n\nPNC: ${formData.pncNumber}\nSerial: ${formData.serialNumber}\nPackage: ${servicePackages.find(p => p.id === selectedPackage)?.name}\n\nMonthly billing starts immediately.`);
                            // Reset form
                            setFormData({pncNumber: '', serialNumber: '', duration: '12', paymentMethod: 'invoice', leasingAmount: '', interestRate: ''});
                            setSelectedPackage(null);
                          }}
                          className="w-full bg-[#273A60] text-white px-6 py-3 rounded-lg hover:bg-[#1f2937] transition-colors font-semibold text-lg"
                        >
                          ✓ Next - Activate Service Contract
                        </button>
                      </div>
                    )}
                  </form>
                </div>
              </div>
            )}

            {activeTab === 'leasing' && (
              <div className="space-y-6">
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Leasing Registration</h3>
                  
                  <form className="space-y-6">
                    {/* Step 1: Product Information */}
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-4">1. Product Information</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            PNC Number *
                          </label>
                          <input
                            type="text"
                            value={formData.pncNumber}
                            onChange={(e) => setFormData({...formData, pncNumber: e.target.value})}
                            placeholder="e.g. 967 62 37-01"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#273A60] focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Serial Number *
                          </label>
                          <input
                            type="text"
                            value={formData.serialNumber}
                            onChange={(e) => setFormData({...formData, serialNumber: e.target.value})}
                            placeholder="e.g. AM450X-2024-001234"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#273A60] focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Step 2: Leasing Terms */}
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-4">2. Leasing Agreement</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Leasing Period
                          </label>
                          <select 
                            value={formData.duration}
                            onChange={(e) => setFormData({...formData, duration: e.target.value})}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#273A60] focus:border-transparent"
                          >
                            <option value="12">12 months</option>
                            <option value="24">24 months</option>
                            <option value="36">36 months</option>
                            <option value="48">48 months</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Monthly Leasing Amount (SEK)
                          </label>
                          <input
                            type="number"
                            value={formData.leasingAmount}
                            onChange={(e) => setFormData({...formData, leasingAmount: e.target.value})}
                            placeholder="e.g. 899"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#273A60] focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Interest Rate (%)
                          </label>
                          <input
                            type="number"
                            step="0.1"
                            value={formData.interestRate}
                            onChange={(e) => setFormData({...formData, interestRate: e.target.value})}
                            placeholder="e.g. 3.5"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#273A60] focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Leasing Partner
                          </label>
                          <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#273A60] focus:border-transparent">
                            <option value="amplio">Amplio Finance</option>
                            <option value="nordea">Nordea Leasing</option>
                            <option value="santander">Santander Consumer</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Summary & Activation */}
                    {formData.pncNumber && formData.serialNumber && formData.leasingAmount && formData.interestRate && (
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <h4 className="font-medium text-gray-900 mb-3">Leasing Summary</h4>
                        <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                          <div><span className="text-gray-600">Product:</span> <span className="font-medium">{formData.pncNumber}</span></div>
                          <div><span className="text-gray-600">Serial:</span> <span className="font-medium">{formData.serialNumber}</span></div>
                          <div><span className="text-gray-600">Monthly Payment:</span> <span className="font-medium text-[#273A60]">{formData.leasingAmount} SEK</span></div>
                          <div><span className="text-gray-600">Interest Rate:</span> <span className="font-medium">{formData.interestRate}%</span></div>
                          <div><span className="text-gray-600">Duration:</span> <span className="font-medium">{formData.duration} months</span></div>
                          <div><span className="text-gray-600">Total Cost:</span> <span className="font-medium">{(parseFloat(formData.leasingAmount || '0') * parseInt(formData.duration)).toLocaleString()} SEK</span></div>
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            alert(`Leasing activated!\n\nPNC: ${formData.pncNumber}\nSerial: ${formData.serialNumber}\nMonthly: ${formData.leasingAmount} SEK\nDuration: ${formData.duration} months\n\nLeasing agreement sent to partner for processing.`);
                            // Reset form
                            setFormData({pncNumber: '', serialNumber: '', duration: '12', paymentMethod: 'invoice', leasingAmount: '', interestRate: ''});
                          }}
                          className="w-full bg-[#273A60] text-white px-6 py-3 rounded-lg hover:bg-[#1f2937] transition-colors font-semibold text-lg"
                        >
                          ✓ Next - Activate Leasing
                        </button>
                      </div>
                    )}
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Information Box */}
        <div className="bg-blue-50 rounded-lg border border-blue-200 p-6">
          <div className="flex items-start space-x-3">
            <InformationCircleIcon className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-blue-900 mb-2">Important Information</h4>
              <ul className="text-blue-800 text-sm space-y-1">
                <li>• Service contracts can be activated immediately for verified customers</li>
                <li>• Leasing applications require credit approval and may take 2-5 business days</li>
                <li>• All pricing includes VAT and standard terms apply</li>
                <li>• Contact support for custom enterprise solutions or bulk orders</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
