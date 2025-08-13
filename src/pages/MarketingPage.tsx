import { useState } from 'react';
import { ArrowRight, FileText, Megaphone, Gift, Users, Circle, Image, Download, Eye, Palette, Check, ShoppingCart, Printer, Truck } from 'lucide-react';

interface MarketingPageProps {
  initialCategory?: 'main' | 'signs' | 'materials' | 'campaigns' | 'referrals' | 'mediabank';
}

interface Product {
  id: string;
  name: string;
  model: string;
  category: string;
  price: number;
  image: string;
  features: string[];
}

export function MarketingPage({ initialCategory = 'main' }: MarketingPageProps) {
  const [activeCategory, setActiveCategory] = useState<'main' | 'signs' | 'materials' | 'campaigns' | 'referrals' | 'mediabank'>(initialCategory);
  const [configStep, setConfigStep] = useState<'products' | 'customize' | 'review' | 'delivery'>('products');
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [selectedTemplate, setSelectedTemplate] = useState<'standard' | 'premium' | 'compact'>('standard');
  const [selectedSize, setSelectedSize] = useState<'small' | 'medium' | 'large'>('medium');

  // Sample data för Värmdö området
  const varmDoAutomowers = [
    { id: 1, lat: 59.3345, lng: 18.3587, owner: 'Anna S.', model: '450X', registered: '2025-07-15' },
    { id: 2, lat: 59.3355, lng: 18.3597, owner: 'Erik J.', model: '315X', registered: '2025-07-20' },
    { id: 3, lat: 59.3335, lng: 18.3577, owner: 'Maria L.', model: '450X', registered: '2025-08-01' },
    { id: 4, lat: 59.3365, lng: 18.3607, owner: 'Lars A.', model: '430X', registered: '2025-08-05' },
    { id: 5, lat: 59.3325, lng: 18.3567, owner: 'Petra K.', model: '450X', registered: '2025-08-10' }
  ];

  // Products available for price signs
  const availableProducts: Product[] = [
    {
      id: '1',
      name: 'Automower 450X',
      model: '450X',
      category: 'Robotic Mowers',
      price: 39995,
      image: '/api/placeholder/200/150',
      features: ['GPS Navigation', 'Theft Protection', 'Weather Timer', 'Connect@Home']
    },
    {
      id: '2',
      name: 'Automower 315X',
      model: '315X', 
      category: 'Robotic Mowers',
      price: 19995,
      image: '/api/placeholder/200/150',
      features: ['Smart Home Integration', 'GPS Navigation', 'Anti-theft alarm']
    },
    {
      id: '3',
      name: 'Chainsaw 545 Mark II',
      model: '545 Mark II',
      category: 'Chainsaws',
      price: 8995,
      image: '/api/placeholder/200/150',
      features: ['AutoTune', 'Air Injection', 'Low Vib', 'Quick Release Air Filter']
    },
    {
      id: '4',
      name: 'Leaf Blower 525BX',
      model: '525BX',
      category: 'Leaf Blowers',
      price: 4995,
      image: '/api/placeholder/200/150',
      features: ['Cruise Control', 'Variable Speed Throttle', 'Ergonomic Handle']
    },
    {
      id: '5',
      name: 'Trimmer 525RJX',
      model: '525RJX',
      category: 'Trimmers',
      price: 5995,
      image: '/api/placeholder/200/150',
      features: ['Tap n Go', 'Efficient Engine', 'Ergonomic Design']
    }
  ];

  const marketingCategories = [
    {
      id: 'signs',
      title: 'Price Signs',
      description: 'Order custom price signs and product displays for your store',
      icon: FileText,
      color: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      id: 'materials',
      title: 'Marketing Materials',
      description: 'Order brochures, catalogs, and promotional materials',
      icon: Megaphone,
      color: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      id: 'mediabank',
      title: 'Media Bank',
      description: 'Access images, style guides, and tone of voice guidelines',
      icon: Image,
      color: 'bg-indigo-50',
      iconColor: 'text-indigo-600'
    },
    {
      id: 'campaigns',
      title: 'Digital Campaigns',
      description: 'Create and manage digital marketing campaigns',
      icon: Users,
      color: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      id: 'referrals',
      title: 'Referral Programs',
      description: 'Geographic referral campaigns based on product registrations',
      icon: Gift,
      color: 'bg-orange-50',
      iconColor: 'text-orange-600'
    }
  ];

  if (activeCategory === 'main') {
    return (
      <div className="p-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Marketing Center</h1>
          </div>

          {/* Marketing Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {marketingCategories.map((category) => (
              <div
                key={category.id}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setActiveCategory(category.id as any)}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg ${category.color} mr-4`}>
                    <category.icon className={`w-6 h-6 ${category.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <button className="w-full bg-[#273A60] text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                  Open Tool
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (activeCategory === 'referrals') {
    return (
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center mb-8">
            <button
              onClick={() => setActiveCategory('main')}
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
              Back to Marketing
            </button>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Geographic Referral Programs</h1>
            <p className="text-gray-600 text-lg">Target neighborhoods with high Automower density for referral campaigns</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Karta över Värmdö */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Värmdö Area - Automower Registrations</h3>
              
              {/* Enkel kart-representation */}
              <div className="relative bg-green-50 rounded-lg p-8 h-96 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-100"></div>
                
                {/* Värmdö "landmassa" */}
                <div className="relative h-full">
                  <div className="absolute top-4 left-4 text-sm font-medium text-gray-700">Värmdö, Sweden</div>
                  
                  {/* Automower registreringar som cirklar */}
                  {varmDoAutomowers.map((automower, index) => (
                    <div
                      key={automower.id}
                      className="absolute group cursor-pointer"
                      style={{
                        left: `${20 + index * 15}%`,
                        top: `${30 + (index % 2) * 20}%`
                      }}
                    >
                      <div className="relative">
                        <Circle className="w-8 h-8 text-orange-500 fill-orange-100 animate-pulse" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                        </div>
                        
                        {/* Tooltip */}
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="bg-black text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                            {automower.owner} - {automower.model}
                            <br />
                            Registered: {automower.registered}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Cluster highlight */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-32 h-32 border-2 border-dashed border-red-400 rounded-full bg-red-50 bg-opacity-50 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-sm font-semibold text-red-700">High Density</div>
                        <div className="text-xs text-red-600">5 Automowers</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 flex items-center justify-between text-sm">
                <div className="flex items-center">
                  <Circle className="w-4 h-4 text-orange-500 fill-orange-100 mr-2" />
                  <span className="text-gray-600">Registered Automower</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 border-2 border-dashed border-red-400 rounded-full mr-2"></div>
                  <span className="text-gray-600">High Density Area</span>
                </div>
              </div>
            </div>

            {/* Referral Campaign Options */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Campaign Options</h3>
                
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Neighborhood Referral Campaign</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Send promotional materials to homes within 500m of registered Automowers
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Estimated reach: 156 homes</span>
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                        Launch Campaign
                      </button>
                    </div>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Existing Customer Referral</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Offer existing customers 600 SEK service discount for successful referrals
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">5 eligible customers</span>
                      <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm">
                        Send Invitations
                      </button>
                    </div>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Digital Ads Campaign</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Target Facebook/Google ads to Värmdö residents based on registrations
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Suggested budget: 2,500 SEK</span>
                      <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm">
                        Create Ads
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* ROI Predictions */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Expected ROI</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Campaign Cost:</span>
                    <span className="font-medium">8,500 SEK</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Expected Sales:</span>
                    <span className="font-medium">3-5 Automowers</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Revenue Potential:</span>
                    <span className="font-medium text-green-600">45,000-75,000 SEK</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between">
                    <span className="font-semibold text-gray-900">Expected ROI:</span>
                    <span className="font-bold text-green-600">430-780%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (activeCategory === 'mediabank') {
    return (
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center mb-8">
            <button
              onClick={() => setActiveCategory('main')}
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
              Back to Marketing
            </button>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Media Bank</h1>
            <p className="text-gray-600 text-lg">Access brand assets, style guides, and marketing materials</p>
          </div>

          {/* Media Bank Tabs */}
          <div className="border-b border-gray-200 mb-6">
            <nav className="-mb-px flex space-x-8">
              <button className="border-transparent text-[#273A60] border-b-2 border-[#273A60] py-2 px-1 text-sm font-medium">
                Product Images
              </button>
              <button className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-b-2 py-2 px-1 text-sm font-medium">
                Style Guide
              </button>
              <button className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-b-2 py-2 px-1 text-sm font-medium">
                Tone of Voice
              </button>
              <button className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-b-2 py-2 px-1 text-sm font-medium">
                Templates
              </button>
            </nav>
          </div>

          {/* Product Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
            {[
              { id: 1, title: 'Automower 450X', category: 'Automower', type: 'Product Shot', size: '2048x1536', format: 'PNG' },
              { id: 2, title: 'Chainsaw 545', category: 'Chainsaw', type: 'Action Shot', size: '1920x1080', format: 'JPG' },
              { id: 3, title: 'Battery BLi200', category: 'Battery', type: 'Studio Shot', size: '2048x1536', format: 'PNG' },
              { id: 4, title: 'Husqvarna Logo', category: 'Logo', type: 'Vector', size: 'Scalable', format: 'SVG' },
              { id: 5, title: 'Automower 315X', category: 'Automower', type: 'Lifestyle', size: '1920x1080', format: 'JPG' },
              { id: 6, title: 'Leaf Blower 350BT', category: 'Leaf Blower', type: 'Product Shot', size: '2048x1536', format: 'PNG' },
              { id: 7, title: 'Trimmer 525LS', category: 'Trimmer', type: 'Action Shot', size: '1920x1080', format: 'JPG' },
              { id: 8, title: 'Rider R420TsX', category: 'Rider', type: 'Lifestyle', size: '2560x1440', format: 'JPG' }
            ].map((image) => (
              <div key={image.id} className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-square bg-gray-100 rounded-t-lg relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image className="w-12 h-12 text-gray-400" />
                  </div>
                  <div className="absolute top-2 right-2">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      image.category === 'Automower' ? 'bg-green-100 text-green-800' :
                      image.category === 'Chainsaw' ? 'bg-red-100 text-red-800' :
                      image.category === 'Battery' ? 'bg-blue-100 text-blue-800' :
                      image.category === 'Logo' ? 'bg-[#273A60] text-white' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {image.category}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">{image.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{image.type}</p>
                  <div className="flex justify-between items-center text-xs text-gray-500 mb-3">
                    <span>{image.size}</span>
                    <span>{image.format}</span>
                  </div>
                  <div className="flex space-x-2">
                    <button className="flex-1 flex items-center justify-center px-3 py-2 text-xs font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors">
                      <Eye className="w-3 h-3 mr-1" />
                      Preview
                    </button>
                    <button className="flex-1 flex items-center justify-center px-3 py-2 text-xs font-medium text-white bg-[#273A60] hover:bg-[#1e2951] rounded-md transition-colors">
                      <Download className="w-3 h-3 mr-1" />
                      Download
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Style Guide Preview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <Palette className="w-5 h-5 text-[#273A60] mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Brand Colors</h3>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-full h-16 bg-[#273A60] rounded-lg mb-2"></div>
                  <p className="text-sm font-medium text-gray-900">Husqvarna Blue</p>
                  <p className="text-xs text-gray-600">#273A60</p>
                </div>
                <div className="text-center">
                  <div className="w-full h-16 bg-[#F97316] rounded-lg mb-2"></div>
                  <p className="text-sm font-medium text-gray-900">Husqvarna Orange</p>
                  <p className="text-xs text-gray-600">#F97316</p>
                </div>
                <div className="text-center">
                  <div className="w-full h-16 bg-gray-800 rounded-lg mb-2"></div>
                  <p className="text-sm font-medium text-gray-900">Dark Gray</p>
                  <p className="text-xs text-gray-600">#1F2937</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tone of Voice Guidelines</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Professional & Reliable</h4>
                  <p className="text-sm text-gray-600">Use clear, authoritative language that builds trust. Focus on quality and expertise.</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Innovation-Focused</h4>
                  <p className="text-sm text-gray-600">Highlight cutting-edge technology and forward-thinking solutions.</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Customer-Centric</h4>
                  <p className="text-sm text-gray-600">Always focus on how products solve customer problems and improve their lives.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Handle price signs configuration
  if (activeCategory === 'signs') {
    return (
      <div className="p-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center mb-8">
            <button
              onClick={() => setActiveCategory('main')}
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
              Back to Marketing
            </button>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Price Signs Configurator</h1>
            <p className="text-gray-600 text-lg">Create custom price signs for your products</p>
          </div>

          {/* Step Navigation */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-4">
              {[
                { id: 'products', label: 'Select Products', icon: FileText },
                { id: 'customize', label: 'Customize', icon: Palette },
                { id: 'review', label: 'Review', icon: Eye },
                { id: 'delivery', label: 'Delivery', icon: Truck }
              ].map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                    configStep === step.id 
                      ? 'border-[#273A60] bg-[#273A60] text-white' 
                      : 'border-gray-300 text-gray-500'
                  }`}>
                    <step.icon className="w-5 h-5" />
                  </div>
                  <span className={`ml-2 text-sm font-medium ${
                    configStep === step.id ? 'text-[#273A60]' : 'text-gray-500'
                  }`}>
                    {step.label}
                  </span>
                  {index < 3 && <ArrowRight className="w-4 h-4 ml-4 text-gray-300" />}
                </div>
              ))}
            </div>
          </div>

          {/* Products Selection Step */}
          {configStep === 'products' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900">Select Products for Price Signs</h2>
                <div className="text-sm text-gray-600">
                  {selectedProducts.length} products selected
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {availableProducts.map((product) => (
                  <div key={product.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <div className="w-full h-40 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                      <Image className="w-12 h-12 text-gray-400" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">{product.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{product.category}</p>
                    <p className="text-lg font-bold text-[#273A60] mb-3">{(product.price/100).toLocaleString('sv-SE')} kr</p>
                    
                    <div className="space-y-2 mb-4">
                      {product.features.slice(0, 2).map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <Check className="w-3 h-3 text-green-500 mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => {
                        if (selectedProducts.find(p => p.id === product.id)) {
                          setSelectedProducts(selectedProducts.filter(p => p.id !== product.id));
                        } else {
                          setSelectedProducts([...selectedProducts, product]);
                        }
                      }}
                      className={`w-full py-2 rounded-lg text-sm font-medium transition-colors ${
                        selectedProducts.find(p => p.id === product.id)
                          ? 'bg-green-600 text-white hover:bg-green-700'
                          : 'bg-[#273A60] text-white hover:bg-blue-700'
                      }`}
                    >
                      {selectedProducts.find(p => p.id === product.id) ? 'Selected' : 'Select Product'}
                    </button>
                  </div>
                ))}
              </div>

              {selectedProducts.length > 0 && (
                <div className="flex justify-end">
                  <button
                    onClick={() => setConfigStep('customize')}
                    className="bg-[#273A60] text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    Continue to Customization
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Customize Step */}
          {configStep === 'customize' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Customization Options */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900">Customize Your Price Signs</h2>
                
                {/* Template Selection */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Select Template</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { id: 'standard', name: 'Standard', price: 25 },
                      { id: 'premium', name: 'Premium', price: 45 },
                      { id: 'compact', name: 'Compact', price: 15 }
                    ].map((template) => (
                      <button
                        key={template.id}
                        onClick={() => setSelectedTemplate(template.id as any)}
                        className={`p-4 border-2 rounded-lg text-center transition-colors ${
                          selectedTemplate === template.id
                            ? 'border-[#273A60] bg-[#273A60]/5'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="w-full h-20 bg-gray-100 rounded mb-2"></div>
                        <h4 className="font-medium text-gray-900">{template.name}</h4>
                        <p className="text-sm text-gray-600">{template.price} kr each</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Size Selection */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Select Size</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { id: 'small', name: 'Small', dimensions: '10x15 cm' },
                      { id: 'medium', name: 'Medium', dimensions: '15x20 cm' },
                      { id: 'large', name: 'Large', dimensions: '20x30 cm' }
                    ].map((size) => (
                      <button
                        key={size.id}
                        onClick={() => setSelectedSize(size.id as any)}
                        className={`p-4 border-2 rounded-lg text-center transition-colors ${
                          selectedSize === size.id
                            ? 'border-[#273A60] bg-[#273A60]/5'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <h4 className="font-medium text-gray-900">{size.name}</h4>
                        <p className="text-sm text-gray-600">{size.dimensions}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Product Price Configuration */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Set Custom Prices</h3>
                  <div className="space-y-4">
                    {selectedProducts.map((product) => (
                      <div key={product.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div>
                          <h4 className="font-medium text-gray-900">{product.name}</h4>
                          <p className="text-sm text-gray-600">Suggested: {(product.price/100).toLocaleString('sv-SE')} kr</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="number"
                            placeholder={(product.price/100).toString()}
                            className="w-24 px-3 py-2 border border-gray-300 rounded-lg text-right"
                          />
                          <span className="text-gray-600">kr</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between">
                  <button
                    onClick={() => setConfigStep('products')}
                    className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setConfigStep('review')}
                    className="bg-[#273A60] text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    Review Order
                  </button>
                </div>
              </div>

              {/* Preview */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900">Preview</h2>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Price Sign Preview</h3>
                  
                  {/* Mock price sign visualization */}
                  <div className="bg-gradient-to-br from-[#273A60] to-blue-700 text-white p-6 rounded-lg shadow-lg">
                    <div className="text-center">
                      <div className="bg-white/10 rounded-lg p-4 mb-4">
                        <Image className="w-16 h-16 mx-auto text-white/60" />
                      </div>
                      <h4 className="text-xl font-bold mb-2">
                        {selectedProducts[0]?.name || 'Select a product'}
                      </h4>
                      <div className="bg-white/20 rounded-lg p-3 mb-4">
                        <p className="text-3xl font-bold">
                          {selectedProducts[0] ? (selectedProducts[0].price/100).toLocaleString('sv-SE') : '0'} kr
                        </p>
                      </div>
                      <div className="text-sm opacity-90">
                        <p>✓ {selectedProducts[0]?.features[0] || 'Feature 1'}</p>
                        <p>✓ {selectedProducts[0]?.features[1] || 'Feature 2'}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 text-sm text-gray-600">
                    <p>Template: {selectedTemplate}</p>
                    <p>Size: {selectedSize}</p>
                    <p>Products: {selectedProducts.length}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Review Step */}
          {configStep === 'review' && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900">Review Your Order</h2>
              
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900">Order Summary</h3>
                </div>
                
                <div className="divide-y divide-gray-200">
                  {selectedProducts.map((product) => {
                    const templatePrice = selectedTemplate === 'premium' ? 45 : selectedTemplate === 'compact' ? 15 : 25;
                    return (
                      <div key={product.id} className="px-6 py-4 flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-gray-900">{product.name} - Price Sign</h4>
                          <p className="text-sm text-gray-600">
                            {selectedTemplate} template, {selectedSize} size
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-gray-900">{templatePrice} kr</p>
                          <p className="text-sm text-gray-600">1 pc</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium text-gray-900">Total</span>
                    <span className="text-lg font-bold text-[#273A60]">
                      {selectedProducts.length * (selectedTemplate === 'premium' ? 45 : selectedTemplate === 'compact' ? 15 : 25)} kr
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  onClick={() => setConfigStep('customize')}
                  className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                >
                  Back to Customize
                </button>
                <button
                  onClick={() => setConfigStep('delivery')}
                  className="bg-[#273A60] text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Choose Delivery
                </button>
              </div>
            </div>
          )}

          {/* Delivery Step */}
          {configStep === 'delivery' && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900">Delivery Options</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Ship to Store */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-[#273A60]/10 rounded-lg mr-4">
                      <ShoppingCart className="w-6 h-6 text-[#273A60]" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Ship to Store</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Receive the printed price signs directly at your store location
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600 mb-4">
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      Free shipping
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      3-5 business days
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      Professional printing quality
                    </li>
                  </ul>
                  <button className="w-full bg-[#273A60] text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Select This Option
                  </button>
                </div>

                {/* Send to Print Shop */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-[#273A60]/10 rounded-lg mr-4">
                      <Printer className="w-6 h-6 text-[#273A60]" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Send to Print Shop</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Order printing and installation through a local print shop
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600 mb-4">
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      Professional installation
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      1-2 business days
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      Local print shop support
                    </li>
                  </ul>
                  <button className="w-full bg-[#273A60] text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Select This Option
                  </button>
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  onClick={() => setConfigStep('review')}
                  className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                >
                  Back to Review
                </button>
                <button
                  onClick={() => {
                    alert('Order placed successfully! You will receive a confirmation email shortly.');
                    setActiveCategory('main');
                    setConfigStep('products');
                    setSelectedProducts([]);
                  }}
                  className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors"
                >
                  Place Order
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Simplified views for other categories
  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-8">
          <button
            onClick={() => setActiveCategory('main')}
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to Marketing
          </button>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {marketingCategories.find(c => c.id === activeCategory)?.title}
          </h1>
          <p className="text-gray-600 text-lg">
            {marketingCategories.find(c => c.id === activeCategory)?.description}
          </p>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText className="w-8 h-8 text-gray-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Coming Soon</h3>
          <p className="text-gray-600">
            This section is under development. Full functionality will be available soon.
          </p>
        </div>
      </div>
    </div>
  );
}
