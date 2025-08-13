import { useState } from 'react';
import { ArrowLeft, Send, Mail, MessageSquare, Calculator, Package } from 'lucide-react';

interface ProductConfiguratorProps {
  onBack: () => void;
}

export function ProductConfigurator({ onBack }: ProductConfiguratorProps) {
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    preferredContact: 'email'
  });
  const [configuration, setConfiguration] = useState({
    model: 'automower-315x',
    area: '1500',
    slope: '25',
    serviceContract: false,
    installation: false
  });

  const products = [
    {
      id: 'automower-315x',
      name: 'Husqvarna Automower 315X',
      basePrice: 45900,
      image: '/api/placeholder/200/150',
      description: 'For lawns up to 1,500 m²'
    },
    {
      id: 'automower-430x',
      name: 'Husqvarna Automower 430X',
      basePrice: 67900,
      image: '/api/placeholder/200/150',
      description: 'For lawns up to 3,200 m²'
    }
  ];

  const calculatePrice = () => {
    const baseProduct = products.find(p => p.id === configuration.model);
    let totalPrice = baseProduct?.basePrice || 0;
    
    if (configuration.serviceContract) {
      totalPrice += 3500; // 3-year service contract
    }
    
    if (configuration.installation) {
      totalPrice += 4500; // Installation and setup
    }
    
    return totalPrice;
  };

  const handleSendProposal = () => {
    const proposal = {
      customer: customerInfo,
      product: products.find(p => p.id === configuration.model),
      configuration,
      totalPrice: calculatePrice(),
      timestamp: new Date().toISOString()
    };

    console.log('Sending proposal:', proposal);
    alert(`Proposal sent to ${customerInfo.name} via ${customerInfo.preferredContact === 'email' ? 'email' : 'SMS'}!`);
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center mb-6">
        <button
          onClick={onBack}
          className="mr-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Product Configurator</h1>
          <p className="text-gray-600">Create customized product proposals for your customers</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Configuration Panel */}
        <div className="space-y-6">
          {/* Product Selection */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
              <Package className="w-5 h-5 mr-2" />
              Select Product
            </h2>
            
            <div className="space-y-3">
              {products.map((product) => (
                <div
                  key={product.id}
                  className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                    configuration.model === product.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:bg-gray-50'
                  }`}
                  onClick={() => setConfiguration({ ...configuration, model: product.id })}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-gray-900">{product.name}</h3>
                      <p className="text-sm text-gray-600">{product.description}</p>
                    </div>
                    <span className="font-bold text-gray-900">{product.basePrice.toLocaleString()} kr</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Configuration Options */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
              <Calculator className="w-5 h-5 mr-2" />
              Configuration
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Lawn Area (m²)
                </label>
                <input
                  type="number"
                  value={configuration.area}
                  onChange={(e) => setConfiguration({ ...configuration, area: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="1500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Slope (%)
                </label>
                <input
                  type="number"
                  value={configuration.slope}
                  onChange={(e) => setConfiguration({ ...configuration, slope: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="25"
                />
              </div>

              <div className="space-y-3">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={configuration.serviceContract}
                    onChange={(e) => setConfiguration({ ...configuration, serviceContract: e.target.checked })}
                    className="mr-3"
                  />
                  <span className="text-sm text-gray-700">
                    3-year service contract (+3,500 kr)
                  </span>
                </label>

                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={configuration.installation}
                    onChange={(e) => setConfiguration({ ...configuration, installation: e.target.checked })}
                    className="mr-3"
                  />
                  <span className="text-sm text-gray-700">
                    Installation and setup (+4,500 kr)
                  </span>
                </label>
              </div>
            </div>
          </div>

          {/* Customer Information */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Customer Information
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Customer Name
                </label>
                <input
                  type="text"
                  value={customerInfo.name}
                  onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="First Last"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={customerInfo.email}
                  onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={customerInfo.phone}
                  onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="070-123 45 67"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Contact Method
                </label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="email"
                      checked={customerInfo.preferredContact === 'email'}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, preferredContact: e.target.value })}
                      className="mr-2"
                    />
                    <Mail className="w-4 h-4 mr-1" />
                    Email
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="sms"
                      checked={customerInfo.preferredContact === 'sms'}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, preferredContact: e.target.value })}
                      className="mr-2"
                    />
                    <MessageSquare className="w-4 h-4 mr-1" />
                    SMS
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Preview Panel */}
        <div className="space-y-6">
          {/* Price Summary */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Price Summary
            </h2>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">
                  {products.find(p => p.id === configuration.model)?.name}
                </span>
                <span className="font-medium">
                  {products.find(p => p.id === configuration.model)?.basePrice.toLocaleString()} kr
                </span>
              </div>
              
              {configuration.serviceContract && (
                <div className="flex justify-between">
                  <span className="text-gray-600">3-year service contract</span>
                  <span className="font-medium">3,500 kr</span>
                </div>
              )}
              
              {configuration.installation && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Installation and setup</span>
                  <span className="font-medium">4,500 kr</span>
                </div>
              )}
              
              <div className="border-t pt-3">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>{calculatePrice().toLocaleString()} kr</span>
                </div>
              </div>
            </div>
          </div>

          {/* Send Proposal */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Send Proposal
            </h2>
            
            <p className="text-gray-600 text-sm mb-4">
              The proposal will be sent to the customer with all configuration information and prices.
            </p>
            
            <button
              onClick={handleSendProposal}
              disabled={!customerInfo.name || !customerInfo.email}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-4 py-3 rounded-lg font-medium transition-colors flex items-center justify-center"
            >
              <Send className="w-4 h-4 mr-2" />
              Send Proposal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
