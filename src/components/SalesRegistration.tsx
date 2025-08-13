import { useState } from 'react';
import { ArrowLeft, User, Package, CheckCircle, Gift, Shield, Bell, BarChart3 } from 'lucide-react';

interface SalesRegistrationProps {
  onBack: () => void;
  onNavigateToDashboard: () => void;
}

export function SalesRegistration({ onBack, onNavigateToDashboard }: SalesRegistrationProps) {
  const [registrationMethod, setRegistrationMethod] = useState<'pos' | 'manual' | null>(null);
  const [step, setStep] = useState(1);
  const [customerData, setCustomerData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    postalCode: '',
    city: ''
  });
  const [productData, setProductData] = useState({
    productName: '',
    serialNumber: '',
    purchaseDate: '',
    warrantyRegistration: false
  });

  const resetFlow = () => {
    setRegistrationMethod(null);
    setStep(1);
    setCustomerData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      postalCode: '',
      city: ''
    });
    setProductData({
      productName: '',
      serialNumber: '',
      purchaseDate: '',
      warrantyRegistration: false
    });
  };

  const incentives = [
    {
      icon: Bell,
      title: 'Immediate Recall Notifications',
      description: 'Customer receives instant notifications about any safety recalls or important updates',
      benefit: 'Enhanced customer safety'
    },
    {
      icon: Shield,
      title: 'Extended Warranty Protection',
      description: 'Full warranty coverage with faster claim processing and priority support',
      benefit: '25% faster warranty processing'
    },
    {
      icon: Gift,
      title: 'Exclusive Customer Benefits',
      description: 'Access to seasonal maintenance tips, exclusive offers, and product updates',
      benefit: 'Increased customer loyalty'
    }
  ];

  if (registrationMethod === null) {
    return (
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBack}
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Sales
          </button>
          
          <button
            onClick={onNavigateToDashboard}
            className="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
          >
            <BarChart3 className="w-4 h-4 mr-2" />
            Registration Dashboard
          </button>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Sales Registration</h1>
            <p className="text-gray-600 text-lg">Register customer sales and encourage full product registration</p>
          </div>

          {/* Customer Incentives Section */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              Why Full Registration Benefits Your Customers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {incentives.map((incentive, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <incentive.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{incentive.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{incentive.description}</p>
                  <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                    {incentive.benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Registration Method Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <button
              onClick={() => setRegistrationMethod('pos')}
              className="group p-8 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-md transition-all"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 group-hover:bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors">
                  <Package className="w-8 h-8 text-gray-600 group-hover:text-blue-600 transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">POS Integration</h3>
                <p className="text-gray-600">Import sale directly from your point-of-sale system</p>
              </div>
            </button>

            <button
              onClick={() => setRegistrationMethod('manual')}
              className="group p-8 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-md transition-all"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 group-hover:bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors">
                  <User className="w-8 h-8 text-gray-600 group-hover:text-blue-600 transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Manual Registration</h3>
                <p className="text-gray-600">Enter customer and product information manually</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (registrationMethod === 'pos') {
    return (
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={resetFlow}
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Registration Options
          </button>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">POS Integration</h1>
            <p className="text-gray-600">Connect to your point-of-sale system to import sale data</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Package className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">POS System Integration</h3>
              <p className="text-gray-600 mb-6">
                This feature will automatically import customer and product data from your POS system.
                Integration with common POS systems like:
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="font-medium text-gray-900">Retail Pro</p>
                  <p className="text-sm text-gray-600">API Integration</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="font-medium text-gray-900">Square</p>
                  <p className="text-sm text-gray-600">Webhook Integration</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="font-medium text-gray-900">Shopify POS</p>
                  <p className="text-sm text-gray-600">Direct Integration</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="font-medium text-gray-900">Custom POS</p>
                  <p className="text-sm text-gray-600">CSV Import</p>
                </div>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="text-blue-800 font-medium">Integration Status: Development Phase</p>
                <p className="text-blue-700 text-sm mt-1">Contact technical support to set up POS integration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Manual Registration Flow
  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={step === 1 ? resetFlow : () => setStep(step - 1)}
          className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {step === 1 ? 'Back to Registration Options' : 'Previous Step'}
        </button>
        <div className="text-sm text-gray-500">
          Step {step} of 3
        </div>
      </div>

      <div className="max-w-2xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center">
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  stepNumber <= step ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {stepNumber < step ? <CheckCircle className="w-5 h-5" /> : stepNumber}
                </div>
                {stepNumber < 3 && (
                  <div className={`w-16 h-1 mx-2 ${
                    stepNumber < step ? 'bg-blue-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>Customer Info</span>
            <span>Product Details</span>
            <span>Registration</span>
          </div>
        </div>

        {/* Step Content */}
        {step === 1 && (
          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Customer Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                <input
                  type="text"
                  value={customerData.firstName}
                  onChange={(e) => setCustomerData({...customerData, firstName: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter first name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                <input
                  type="text"
                  value={customerData.lastName}
                  onChange={(e) => setCustomerData({...customerData, lastName: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter last name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                <input
                  type="email"
                  value={customerData.email}
                  onChange={(e) => setCustomerData({...customerData, email: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="customer@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  value={customerData.phone}
                  onChange={(e) => setCustomerData({...customerData, phone: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="+46 70 123 45 67"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                <input
                  type="text"
                  value={customerData.address}
                  onChange={(e) => setCustomerData({...customerData, address: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Street address"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Postal Code</label>
                <input
                  type="text"
                  value={customerData.postalCode}
                  onChange={(e) => setCustomerData({...customerData, postalCode: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="12345"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                <input
                  type="text"
                  value={customerData.city}
                  onChange={(e) => setCustomerData({...customerData, city: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="City"
                />
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setStep(2)}
                disabled={!customerData.firstName || !customerData.lastName || !customerData.email}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
              >
                Continue to Product Details
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Product Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Product Name *</label>
                <input
                  type="text"
                  value={productData.productName}
                  onChange={(e) => setProductData({...productData, productName: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., Husqvarna Automower 450X"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Serial Number</label>
                <input
                  type="text"
                  value={productData.serialNumber}
                  onChange={(e) => setProductData({...productData, serialNumber: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter serial number if available"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Purchase Date *</label>
                <input
                  type="date"
                  value={productData.purchaseDate}
                  onChange={(e) => setProductData({...productData, purchaseDate: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setStep(3)}
                disabled={!productData.productName || !productData.purchaseDate}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
              >
                Continue to Registration
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Complete Registration</h2>
            
            {/* Summary */}
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="font-medium text-gray-900 mb-4">Registration Summary</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600">Customer</p>
                  <p className="font-medium">{customerData.firstName} {customerData.lastName}</p>
                  <p className="text-gray-600">{customerData.email}</p>
                </div>
                <div>
                  <p className="text-gray-600">Product</p>
                  <p className="font-medium">{productData.productName}</p>
                  <p className="text-gray-600">Purchased: {productData.purchaseDate}</p>
                </div>
              </div>
            </div>

            {/* Warranty Registration Option */}
            <div className="border border-blue-200 bg-blue-50 rounded-lg p-6 mb-6">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="warranty"
                  checked={productData.warrantyRegistration}
                  onChange={(e) => setProductData({...productData, warrantyRegistration: e.target.checked})}
                  className="mt-1 mr-3"
                />
                <div>
                  <label htmlFor="warranty" className="font-medium text-blue-900 cursor-pointer">
                    Enable Full Product Registration
                  </label>
                  <p className="text-blue-800 text-sm mt-1">
                    ✓ Immediate recall notifications<br/>
                    ✓ Extended warranty coverage<br/>
                    ✓ Priority customer support<br/>
                    ✓ Seasonal maintenance reminders
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <button
                onClick={() => {
                  // Here you would typically send the data to your backend
                  alert('Registration completed successfully!');
                  resetFlow();
                }}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Complete Registration
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
