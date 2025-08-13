import React, { useState } from 'react';
import { ChevronRightIcon, FolderIcon, DocumentIcon } from '@heroicons/react/24/outline';

interface CatalogItem {
  id: string;
  name: string;
  type: 'category' | 'subcategory' | 'product';
  partNumber?: string;
  price?: number;
  children?: CatalogItem[];
}

// Husqvarna katalogdata med verkliga produkter
const catalogData: CatalogItem[] = [
  {
    id: 'products',
    name: 'Products',
    type: 'category',
    children: [
      {
        id: 'robotic-mowers',
        name: 'Robotic Mowers',
        type: 'subcategory',
        children: [
          { id: 'am105', name: 'Automower® 105', type: 'product', partNumber: '967623405', price: 12995 },
          { id: 'am115h', name: 'Automower® 115H', type: 'product', partNumber: '967623406', price: 14995 },
          { id: 'am305', name: 'Automower® 305', type: 'product', partNumber: '967673405', price: 17995 },
          { id: 'am310', name: 'Automower® 310', type: 'product', partNumber: '967673406', price: 19995 },
          { id: 'am315x', name: 'Automower® 315X', type: 'product', partNumber: '967673407', price: 24995 },
          { id: 'am430x', name: 'Automower® 430X', type: 'product', partNumber: '967673408', price: 29995 },
          { id: 'am450x', name: 'Automower® 450X', type: 'product', partNumber: '967673409', price: 39995 }
        ]
      },
      {
        id: 'chainsaws',
        name: 'Chainsaws',
        type: 'subcategory',
        children: [
          { id: '120i', name: '120i Battery Chainsaw', type: 'product', partNumber: '967098101', price: 2295 },
          { id: '135', name: '135 Petrol Chainsaw', type: 'product', partNumber: '940000212', price: 2595 },
          { id: '236e', name: '236e Electric Chainsaw', type: 'product', partNumber: '967098102', price: 1895 },
          { id: '240e', name: '240e Electric Chainsaw', type: 'product', partNumber: '967098103', price: 2195 },
          { id: '350', name: '350 Petrol Chainsaw', type: 'product', partNumber: '966532602', price: 3595 },
          { id: '365', name: '365 Professional', type: 'product', partNumber: '966532603', price: 8995 },
          { id: '445e', name: '445e Electric Chainsaw', type: 'product', partNumber: '967098104', price: 2695 },
          { id: '450e', name: '450e Electric Chainsaw', type: 'product', partNumber: '967098105', price: 3195 },
          { id: '550xp', name: '550 XP® Mark II', type: 'product', partNumber: '966733101', price: 9995 },
          { id: '555', name: '555 Petrol Chainsaw', type: 'product', partNumber: '966733102', price: 7495 },
          { id: '565', name: '565 Professional', type: 'product', partNumber: '966733103', price: 10995 },
          { id: '572xp', name: '572 XP® Professional', type: 'product', partNumber: '966733201', price: 12995 },
          { id: '585', name: '585 Professional', type: 'product', partNumber: '966733202', price: 14995 },
          { id: '592xp', name: '592 XP® Professional', type: 'product', partNumber: '966733203', price: 17995 }
        ]
      },
      {
        id: 'trimmers',
        name: 'Trimmers & Brushcutters',
        type: 'subcategory',
        children: [
          { id: '115il', name: '115iL Battery Trimmer', type: 'product', partNumber: '967098201', price: 1795 },
          { id: '115pt4', name: '115iPT4 Pole Saw', type: 'product', partNumber: '967098202', price: 2195 },
          { id: '122c', name: '122C Petrol Trimmer', type: 'product', partNumber: '952715631', price: 1895 },
          { id: '129l', name: '129L Petrol Trimmer', type: 'product', partNumber: '952715634', price: 2195 },
          { id: '129r', name: '129R Petrol Trimmer', type: 'product', partNumber: '952715635', price: 2395 },
          { id: '323l', name: '323L Professional Trimmer', type: 'product', partNumber: '966627101', price: 3295 },
          { id: '325l', name: '325L Professional Trimmer', type: 'product', partNumber: '966627102', price: 3695 },
          { id: '327pt5s', name: '327PT5S Pole Saw', type: 'product', partNumber: '966627103', price: 4195 },
          { id: '535ls', name: '535LS Professional Trimmer', type: 'product', partNumber: '966627201', price: 4695 },
          { id: '535rx', name: '535RX Brushcutter', type: 'product', partNumber: '966627301', price: 4995 },
          { id: '545rx', name: '545RX Brushcutter', type: 'product', partNumber: '966627302', price: 5495 },
          { id: '555fx', name: '555FX Brushcutter', type: 'product', partNumber: '966627303', price: 5995 }
        ]
      },
      {
        id: 'blowers',
        name: 'Leaf Blowers',
        type: 'subcategory',
        children: [
          { id: '120ib', name: '120iB Battery Blower', type: 'product', partNumber: '967098301', price: 1695 },
          { id: '125b', name: '125B Handheld Blower', type: 'product', partNumber: '952711925', price: 1395 },
          { id: '125bvx', name: '125BVx Handheld Blower/Vacuum', type: 'product', partNumber: '952711926', price: 1695 },
          { id: '150bt', name: '150BT Backpack Blower', type: 'product', partNumber: '965877501', price: 2995 },
          { id: '350bt', name: '350BT Backpack Blower', type: 'product', partNumber: '965877502', price: 4295 },
          { id: '570bts', name: '570BTS Backpack Blower', type: 'product', partNumber: '965877503', price: 5995 },
          { id: '580bts', name: '580BTS Professional Backpack', type: 'product', partNumber: '965877504', price: 6995 }
        ]
      },
      {
        id: 'hedge-trimmers',
        name: 'Hedge Trimmers',
        type: 'subcategory',
        children: [
          { id: '115ihd45', name: '115iHD45 Battery Hedge Trimmer', type: 'product', partNumber: '967098401', price: 1995 },
          { id: '122hd45', name: '122HD45 Petrol Hedge Trimmer', type: 'product', partNumber: '952711801', price: 2295 },
          { id: '226hd60s', name: '226HD60S Professional', type: 'product', partNumber: '966627401', price: 3595 },
          { id: '325he3', name: '325HE3 Electric Hedge Trimmer', type: 'product', partNumber: '966627402', price: 2795 },
          { id: '325he4', name: '325HE4 Electric Hedge Trimmer', type: 'product', partNumber: '966627403', price: 3095 }
        ]
      },
      {
        id: 'lawn-mowers',
        name: 'Lawn Mowers',
        type: 'subcategory',
        children: [
          { id: 'lc141i', name: 'LC 141i Battery Mower', type: 'product', partNumber: '967098501', price: 2995 },
          { id: 'lc347v', name: 'LC 347V Self-Propelled', type: 'product', partNumber: '961430015', price: 4295 },
          { id: 'lc353v', name: 'LC 353V Self-Propelled', type: 'product', partNumber: '961430016', price: 4795 },
          { id: 'lc356p', name: 'LC 356P Professional', type: 'product', partNumber: '961430017', price: 5995 }
        ]
      }
    ]
  },
  {
    id: 'parts',
    name: 'Parts',
    type: 'category',
    children: [
      {
        id: 'batteries',
        name: 'Batteries',
        type: 'subcategory',
        children: [
          { id: 'bli10', name: 'BLi10 Battery 36V 2.0Ah', type: 'product', partNumber: '967071601', price: 895 },
          { id: 'bli20', name: 'BLi20 Battery 36V 4.0Ah', type: 'product', partNumber: '967071602', price: 1395 },
          { id: 'bli30', name: 'BLi30 Battery 36V 7.5Ah', type: 'product', partNumber: '967071603', price: 1995 },
          { id: 'bat-am', name: 'Automower® Battery Li-Ion', type: 'product', partNumber: '574471701', price: 1295 }
        ]
      },
      {
        id: 'chains',
        name: 'Chains & Bars',
        type: 'subcategory',
        children: [
          { id: 'x-cut-c85', name: 'X-Cut C85 Chain 3/8" 1.5mm', type: 'product', partNumber: '585404272', price: 295 },
          { id: 'x-cut-s93g', name: 'X-Cut S93G Chain .325" 1.5mm', type: 'product', partNumber: '585404280', price: 345 },
          { id: 'guide-bar-15', name: 'Guide Bar 15" X-Force', type: 'product', partNumber: '585404415', price: 495 },
          { id: 'guide-bar-18', name: 'Guide Bar 18" X-Force', type: 'product', partNumber: '585404418', price: 595 }
        ]
      },
      {
        id: 'filters',
        name: 'Air Filters',
        type: 'subcategory',
        children: [
          { id: 'filter-365', name: 'Air Filter 365/372', type: 'product', partNumber: '537009301', price: 125 },
          { id: 'filter-572', name: 'Air Filter 572XP', type: 'product', partNumber: '537009401', price: 145 },
          { id: 'filter-129', name: 'Air Filter 129L/R', type: 'product', partNumber: '537009501', price: 95 }
        ]
      },
      {
        id: 'charging',
        name: 'Charging Stations',
        type: 'subcategory',
        children: [
          { id: 'charging-basic', name: 'Basic Charging Station', type: 'product', partNumber: '588190301', price: 895 },
          { id: 'charging-weather', name: 'Weather-Protected Station', type: 'product', partNumber: '588190401', price: 1195 },
          { id: 'qc80', name: 'QC80 Quick Charger 36V', type: 'product', partNumber: '967091701', price: 695 }
        ]
      }
    ]
  },
  {
    id: 'accessories',
    name: 'Accessories',
    type: 'category',
    children: [
      {
        id: 'protective',
        name: 'Protective Equipment',
        type: 'subcategory',
        children: [
          { id: 'helmet-classic', name: 'Classic Helmet with Visor', type: 'product', partNumber: '577764401', price: 895 },
          { id: 'helmet-tech', name: 'Technical Helmet System', type: 'product', partNumber: '592752601', price: 1495 },
          { id: 'chaps', name: 'Protective Chaps Class 1', type: 'product', partNumber: '587160704', price: 795 },
          { id: 'gloves-classic', name: 'Classic Work Gloves', type: 'product', partNumber: '579380210', price: 295 },
          { id: 'gloves-chain', name: 'Chainsaw Gloves Technical', type: 'product', partNumber: '579380310', price: 695 }
        ]
      },
      {
        id: 'maintenance',
        name: 'Maintenance Tools',
        type: 'subcategory',
        children: [
          { id: 'file-kit', name: 'Filing Kit Round File', type: 'product', partNumber: '585434401', price: 195 },
          { id: 'stump-grease', name: 'Stump Grease Bio', type: 'product', partNumber: '593802401', price: 145 },
          { id: 'chain-oil', name: 'Chain Oil Bio X-Guard', type: 'product', partNumber: '593152601', price: 165 },
          { id: 'fuel-mix', name: 'XP® 2-Stroke Oil', type: 'product', partNumber: '593152701', price: 125 }
        ]
      },
      {
        id: 'installation',
        name: 'Installation Kits',
        type: 'subcategory',
        children: [
          { id: 'install-small', name: 'Small Installation Kit', type: 'product', partNumber: '588190101', price: 395 },
          { id: 'install-medium', name: 'Medium Installation Kit', type: 'product', partNumber: '588190201', price: 595 },
          { id: 'install-large', name: 'Large Installation Kit', type: 'product', partNumber: '588190301', price: 795 },
          { id: 'boundary-wire', name: 'Boundary Wire 150m', type: 'product', partNumber: '588190501', price: 495 },
          { id: 'guide-wire', name: 'Guide Wire 150m', type: 'product', partNumber: '588190601', price: 395 }
        ]
      },
      {
        id: 'storage',
        name: 'Storage & Transport',
        type: 'subcategory',
        children: [
          { id: 'carry-case', name: 'Chainsaw Carry Case', type: 'product', partNumber: '576846301', price: 695 },
          { id: 'garage', name: 'Automower® Garage', type: 'product', partNumber: '588190701', price: 1295 },
          { id: 'wall-hanger', name: 'Wall Hanger for Trimmers', type: 'product', partNumber: '588190801', price: 195 }
        ]
      }
    ]
  }
];

const CatalogPage: React.FC = () => {
  const [selectedPath, setSelectedPath] = useState<string[]>(['products']);
  const [searchTerm, setSearchTerm] = useState('');

  // Hitta aktuell nivå baserat på vald path
  const getCurrentLevel = (): CatalogItem[] => {
    let current = catalogData;
    
    for (const pathItem of selectedPath) {
      const found = current.find(item => item.id === pathItem);
      if (found && found.children) {
        current = found.children;
      } else {
        return [];
      }
    }
    
    return current;
  };

  // Navigera till nästa nivå
  const navigateTo = (itemId: string, itemType: string) => {
    if (itemType === 'product') return; // Produkter har inga barn
    
    setSelectedPath([...selectedPath, itemId]);
  };

  // Navigera tillbaka till specifik nivå
  const navigateToLevel = (levelIndex: number) => {
    setSelectedPath(selectedPath.slice(0, levelIndex + 1));
  };

  // Få breadcrumbs
  const getBreadcrumbs = () => {
    const breadcrumbs: { id: string; name: string }[] = [];
    let current = catalogData;
    
    for (const pathItem of selectedPath) {
      const found = current.find(item => item.id === pathItem);
      if (found) {
        breadcrumbs.push({ id: found.id, name: found.name });
        if (found.children) {
          current = found.children;
        }
      }
    }
    
    return breadcrumbs;
  };

  // Filtrera baserat på sökning
  const filteredItems = getCurrentLevel().filter(item =>
    searchTerm ? item.name.toLowerCase().includes(searchTerm.toLowerCase()) : true
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Husqvarna Catalog</h1>
              
              {/* Breadcrumbs - Finder style */}
              <nav className="flex items-center space-x-1 text-sm text-gray-600 mt-1">
                <button 
                  onClick={() => setSelectedPath(['products'])}
                  className="hover:text-[#273A60]"
                >
                  Catalog
                </button>
                {getBreadcrumbs().map((crumb, index) => (
                  <React.Fragment key={crumb.id}>
                    <ChevronRightIcon className="h-4 w-4" />
                    <button
                      onClick={() => navigateToLevel(index)}
                      className="hover:text-[#273A60]"
                    >
                      {crumb.name}
                    </button>
                  </React.Fragment>
                ))}
              </nav>
            </div>
            
            {/* Search */}
            <div className="w-80">
              <input
                type="text"
                placeholder="Search catalog..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Finder kolumn layout */}
      <div className="max-w-7xl mx-auto p-6">
        {/* Huvudkategorier (alltid synliga) */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Kolumn 1: Huvudkategorier */}
          <div className="bg-white rounded-lg border border-gray-200 h-96">
            <div className="border-b border-gray-200 px-4 py-3">
              <h3 className="font-medium text-gray-900">Categories</h3>
            </div>
            <div className="overflow-y-auto h-80">
              {catalogData.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedPath([category.id])}
                  className={`w-full flex items-center px-4 py-2 text-left hover:bg-gray-50 border-b border-gray-100 ${
                    selectedPath[0] === category.id ? 'bg-[#273A60] text-white' : 'text-gray-700'
                  }`}
                >
                  <FolderIcon className="h-4 w-4 mr-3 text-gray-400" />
                  <span className="text-sm">{category.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Kolumn 2: Underkategorier (om det finns) */}
          {selectedPath.length >= 1 && (
            <div className="bg-white rounded-lg border border-gray-200 h-96">
              <div className="border-b border-gray-200 px-4 py-3">
                <h3 className="font-medium text-gray-900">Subcategories</h3>
              </div>
              <div className="overflow-y-auto h-80">
                {catalogData.find(cat => cat.id === selectedPath[0])?.children?.map((subcategory) => (
                  <button
                    key={subcategory.id}
                    onClick={() => navigateTo(subcategory.id, subcategory.type)}
                    className={`w-full flex items-center px-4 py-2 text-left hover:bg-gray-50 border-b border-gray-100 ${
                      selectedPath[1] === subcategory.id ? 'bg-[#273A60] text-white' : 'text-gray-700'
                    }`}
                  >
                    <FolderIcon className="h-4 w-4 mr-3 text-gray-400" />
                    <span className="text-sm">{subcategory.name}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Kolumn 3: Produktlista */}
          {selectedPath.length >= 2 && (
            <div className="bg-white rounded-lg border border-gray-200 h-96 lg:col-span-2">
              <div className="border-b border-gray-200 px-4 py-3">
                <h3 className="font-medium text-gray-900">
                  Products ({filteredItems.length})
                </h3>
              </div>
              <div className="overflow-y-auto h-80">
                {filteredItems.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 border-b border-gray-100"
                  >
                    <div className="flex items-center">
                      <DocumentIcon className="h-4 w-4 mr-3 text-gray-400" />
                      <div>
                        <div className="text-sm font-medium text-gray-900">{product.name}</div>
                        {product.partNumber && (
                          <div className="text-xs text-gray-500">{product.partNumber}</div>
                        )}
                      </div>
                    </div>
                    {product.price && (
                      <div className="text-sm font-medium text-gray-900">
                        {product.price.toLocaleString()} SEK
                      </div>
                    )}
                  </div>
                ))}
                
                {filteredItems.length === 0 && (
                  <div className="p-8 text-center text-gray-500">
                    <DocumentIcon className="h-8 w-8 mx-auto mb-2 text-gray-300" />
                    <p>No products found</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Välkomstmeddelande när ingen kategori är vald */}
          {selectedPath.length < 2 && (
            <div className="lg:col-span-2 bg-white rounded-lg border border-gray-200 h-96 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <FolderIcon className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Select a category</h3>
                <p>Navigate through the catalog to see products</p>
              </div>
            </div>
          )}
        </div>

        {/* Snabb översikt - om man är på första nivån */}
        {selectedPath.length === 1 && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {catalogData.find(cat => cat.id === selectedPath[0])?.children?.map((subcategory) => (
              <button
                key={subcategory.id}
                onClick={() => navigateTo(subcategory.id, subcategory.type)}
                className="bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all text-left"
              >
                <div className="flex items-center mb-3">
                  <FolderIcon className="h-6 w-6 mr-3 text-blue-500" />
                  <h3 className="font-semibold text-gray-900">{subcategory.name}</h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  {subcategory.children?.length || 0} products
                </p>
                <div className="text-xs text-gray-500">
                  {subcategory.children?.slice(0, 3).map(product => product.name).join(', ')}
                  {(subcategory.children?.length || 0) > 3 && '...'}
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CatalogPage;
