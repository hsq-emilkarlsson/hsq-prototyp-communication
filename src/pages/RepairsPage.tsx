import { useState } from 'react';
import { 
  WrenchScrewdriverIcon,
  CpuChipIcon,
  BookOpenIcon,
  VideoCameraIcon,
  ClockIcon,
  ChevronRightIcon,
  StarIcon,
  UserIcon,
  MagnifyingGlassIcon,
  PlayIcon,
  CheckIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

export function RepairsPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');

  const repairTools = [
    {
      id: 'pro-tech-toolkit',
      name: 'Pro Tech Toolkit',
      description: 'Complete toolkit for professional repairs',
      price: '1 249 kr',
      rating: 4.9,
      inStock: true,
      image: '/api/placeholder/200/150',
      category: 'Premium Tools'
    },
    {
      id: 'precision-screwdriver-set',
      name: 'Precision Screwdriver Set',
      description: 'Screwdrivers for electronics and small engines',
      price: '449 kr',
      rating: 4.8,
      inStock: true,
      image: '/api/placeholder/200/150',
      category: 'Basic Tools'
    },
    {
      id: 'multimeter',
      name: 'Digital Multimeter',
      description: 'Professional multimeter for electrical measurements',
      price: '899 kr',
      rating: 4.7,
      inStock: false,
      image: '/api/placeholder/200/150',
      category: 'Electronics'
    },
    {
      id: 'torque-wrench',
      name: 'Momentnyckel Set',
      description: 'Olika storlekar för motorservice',
      price: '1 899 kr',
      rating: 4.9,
      inStock: true,
      image: '/api/placeholder/200/150',
      category: 'Motor Tools'
    }
  ];

  const repairGuides = [
    {
      id: 'automower-315x-battery',
      title: 'Automower 315X - Batteribyte',
      category: 'Automower',
      difficulty: 'Lätt',
      duration: '15 min',
      views: 2847,
      rating: 4.8,
      author: 'Husqvarna Service',
      thumbnail: '/api/placeholder/300/200',
      tools: ['Skruvmejsel', 'Handskar'],
      description: 'Lär dig hur du byter batteri i din Automower 315X på ett säkert sätt.'
    },
    {
      id: 'chainsaw-545-chain-replacement',
      title: 'Motorsåg 545 - Kedjebyten',
      category: 'Motorsågar',
      difficulty: 'Medel',
      duration: '8 min',
      views: 1923,
      rating: 4.7,
      author: 'Expert Technician',
      thumbnail: '/api/placeholder/300/200',
      tools: ['Combination Wrenches', 'Protective Gloves'],
      description: 'Step-by-step guide for safe chain replacement on Husqvarna 545.'
    },
    {
      id: 'blower-350bt-maintenance',
      title: 'Leaf Blower 350BT - Basic Service',
      category: 'Leaf Blower',
      difficulty: 'Easy',
      duration: '12 min',
      views: 1456,
      rating: 4.9,
      author: 'Service Team',
      thumbnail: '/api/placeholder/300/200',
      tools: ['Basic Tools'],
      description: 'Utför grundläggande underhåll för optimal prestanda.'
    },
    {
      id: 'rider-battery-diagnostics',
      title: 'Rider - Batteritest och diagnos',
      category: 'Riders',
      difficulty: 'Medel',
      duration: '20 min',
      views: 3104,
      rating: 4.6,
      author: 'Elektrotekniker',
      thumbnail: '/api/placeholder/300/200',
      tools: ['Multimeter', 'Test Tools'],
      description: 'Diagnose battery problems on Husqvarna Riders.'
    }
  ];

  const filteredGuides = repairGuides.filter(guide =>
    guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    guide.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Lätt': return 'bg-green-100 text-green-800';
      case 'Medel': return 'bg-yellow-100 text-yellow-800';
      case 'Svår': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Repairs</h1>
      </div>

      {/* Tabs Navigation */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTab === 'overview'
                ? 'border-[#273A60] text-[#273A60]'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <WrenchScrewdriverIcon className="w-4 h-4 inline mr-2" />
            Overview
          </button>
          <button
            onClick={() => setActiveTab('tools')}
            className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTab === 'tools'
                ? 'border-[#273A60] text-[#273A60]'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <CpuChipIcon className="w-4 h-4 inline mr-2" />
            Tools
          </button>
          <button
            onClick={() => setActiveTab('guides')}
            className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTab === 'guides'
                ? 'border-[#273A60] text-[#273A60]'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <BookOpenIcon className="w-4 h-4 inline mr-2" />
            Repair Guides
          </button>
        </nav>
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div className="space-y-8">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <BookOpenIcon className="w-8 h-8 text-[#273A60] mx-auto mb-2" />
              <h3 className="text-2xl font-bold text-gray-900">158</h3>
              <p className="text-gray-600">Repair Guides</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <VideoCameraIcon className="w-8 h-8 text-[#273A60] mx-auto mb-2" />
              <h3 className="text-2xl font-bold text-gray-900">89</h3>
              <p className="text-gray-600">Video Tutorials</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <UserIcon className="w-8 h-8 text-[#273A60] mx-auto mb-2" />
              <h3 className="text-2xl font-bold text-gray-900">12k+</h3>
              <p className="text-gray-600">Successful Repairs</p>
            </div>
          </div>

          {/* Featured Repair Guides */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Featured Repair Guides</h2>
              <button 
                onClick={() => setActiveTab('guides')}
                className="text-[#273A60] hover:text-blue-700 text-sm font-medium flex items-center"
              >
                View all <ChevronRightIcon className="w-4 h-4 ml-1" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {repairGuides.slice(0, 4).map((guide) => (
                <div key={guide.id} className="flex border border-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="w-24 h-18 bg-gray-200 rounded-lg flex-shrink-0 mr-4 flex items-center justify-center">
                    <PlayIcon className="w-6 h-6 text-gray-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 mb-1">{guide.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{guide.description}</p>
                    <div className="flex items-center text-xs text-gray-500 space-x-4">
                      <span className="flex items-center">
                        <ClockIcon className="w-3 h-3 mr-1" />
                        {guide.duration}
                      </span>
                      <span className={`px-2 py-1 rounded-full ${getDifficultyColor(guide.difficulty)}`}>
                        {guide.difficulty}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tools Tab */}
      {activeTab === 'tools' && (
        <div className="space-y-6">
          {/* Tools Header */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Reparationsverktyg</h2>
              <p className="text-gray-600 text-sm mt-1">
                Professionella verktyg för Husqvarna-reparationer
              </p>
            </div>
            <div className="flex space-x-2">
              <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
                <option>Alla kategorier</option>
                <option>Premium Tools</option>
                <option>Basic Tools</option>
                <option>Electronics</option>
                <option>Motor Tools</option>
              </select>
              <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
                <option>Sortiera efter</option>
                <option>Pris (låg-hög)</option>
                <option>Pris (hög-låg)</option>
                <option>Betyg</option>
                <option>Popularitet</option>
              </select>
            </div>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {repairTools.map((tool) => (
              <div key={tool.id} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow">
                <div className="w-full h-40 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                  <WrenchScrewdriverIcon className="w-12 h-12 text-gray-400" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {tool.category}
                    </span>
                    {tool.inStock ? (
                      <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded flex items-center">
                        <CheckIcon className="w-3 h-3 mr-1" />
                        I lager
                      </span>
                    ) : (
                      <span className="text-xs text-red-600 bg-red-100 px-2 py-1 rounded flex items-center">
                        <ExclamationTriangleIcon className="w-3 h-3 mr-1" />
                        Ej i lager
                      </span>
                    )}
                  </div>
                  <h3 className="font-medium text-gray-900">{tool.name}</h3>
                  <p className="text-sm text-gray-600">{tool.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex text-yellow-400">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <StarIcon
                            key={star}
                            className={`w-4 h-4 ${star <= Math.floor(tool.rating) ? 'fill-current' : ''}`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500 ml-1">({tool.rating})</span>
                    </div>
                    <span className="font-bold text-[#273A60]">{tool.price}</span>
                  </div>
                  <button className="w-full bg-[#273A60] text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                    disabled={!tool.inStock}
                  >
                    {tool.inStock ? 'Lägg i varukorg' : 'Bevaka produkt'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Repair Guides Tab */}
      {activeTab === 'guides' && (
        <div className="space-y-6">
          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search repair guides..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#273A60] focus:border-transparent"
              />
            </div>
            <div className="flex space-x-2">
              <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
                <option>Alla produkter</option>
                <option>Automower</option>
                <option>Motorsågar</option>
                <option>Lövblås</option>
                <option>Riders</option>
              </select>
              <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
                <option>Alla svårighetsgrader</option>
                <option>Lätt</option>
                <option>Medel</option>
                <option>Svår</option>
              </select>
            </div>
          </div>

          {/* Guides Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGuides.map((guide) => (
              <div key={guide.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                  <PlayIcon className="w-12 h-12 text-gray-400" />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {guide.category}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(guide.difficulty)}`}>
                      {guide.difficulty}
                    </span>
                  </div>
                  <h3 className="font-medium text-gray-900 mb-2">{guide.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{guide.description}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <span className="flex items-center">
                      <ClockIcon className="w-3 h-3 mr-1" />
                      {guide.duration}
                    </span>
                    <span>{guide.views.toLocaleString()} visningar</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex text-yellow-400">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <StarIcon
                            key={star}
                            className={`w-3 h-3 ${star <= Math.floor(guide.rating) ? 'fill-current' : ''}`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500 ml-1">({guide.rating})</span>
                    </div>
                    <span className="text-xs text-gray-500">av {guide.author}</span>
                  </div>
                  <button className="w-full bg-[#273A60] text-white py-2 rounded-lg text-sm font-medium mt-3 hover:bg-blue-700 transition-colors">
                    View guide
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
