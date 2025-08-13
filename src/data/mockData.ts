import { 
  KPIData, 
  TimeSeriesData, 
  ProductData, 
  HeatmapData, 
  WarrantyCase, 
  EndCustomerRegistration,
  ReplenishmentSuggestion,
  SparepartsRecommendation,
  RiskFlag,
  SalesEvent,
  Connector,
  CampaignTemplate
} from '../types';

// Product catalog
const PRODUCTS = [
  { sku: 'AM-450X', name: 'Automower 450X', category: 'Robotic Mowers', price: 3490 },
  { sku: 'AM-435X', name: 'Automower 435X AWD', category: 'Robotic Mowers', price: 3990 },
  { sku: 'AM-315X', name: 'Automower 315X', category: 'Robotic Mowers', price: 2490 },
  { sku: 'CS-460', name: 'Chainsaw 460 Rancher', category: 'Chainsaws', price: 899 },
  { sku: 'CS-372XP', name: 'Chainsaw 372XP', category: 'Chainsaws', price: 1299 },
  { sku: 'BL-580BTS', name: 'Blower 580BTS', category: 'Blowers', price: 649 },
  { sku: 'TR-115iL', name: 'Trimmer 115iL', category: 'Trimmers', price: 299 },
  { sku: 'HH-226HS', name: 'Hedge Trimmer 226HS', category: 'Hedge Trimmers', price: 449 }
];

const CITIES = [
  { name: 'Stockholm', postal: '11122', lat: 59.3293, lng: 18.0686 },
  { name: 'Göteborg', postal: '41118', lat: 57.7089, lng: 11.9746 },
  { name: 'Malmö', postal: '21115', lat: 55.6050, lng: 13.0038 },
  { name: 'Uppsala', postal: '75323', lat: 59.8586, lng: 17.6389 },
  { name: 'Västerås', postal: '72213', lat: 59.6099, lng: 16.5448 },
  { name: 'Örebro', postal: '70362', lat: 59.2753, lng: 15.2134 },
  { name: 'Linköping', postal: '58330', lat: 58.4108, lng: 15.6214 },
  { name: 'Helsingborg', postal: '25467', lat: 56.0465, lng: 12.6945 }
];

// Utility functions
const randomBetween = (min: number, max: number): number => 
  Math.floor(Math.random() * (max - min + 1)) + min;

const randomDate = (start: Date, end: Date): Date => 
  new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

const generateSerial = (): string => 
  'SN' + Math.random().toString(36).substr(2, 8).toUpperCase();

// KPI Data Generator
export const generateKPIData = (): KPIData => ({
  totalSales: {
    amount: randomBetween(450000, 850000),
    delta: randomBetween(-50000, 100000),
    deltaPercent: randomBetween(-15, 25)
  },
  unitsSold: {
    count: randomBetween(180, 350),
    delta: randomBetween(-30, 60),
    deltaPercent: randomBetween(-20, 30)
  },
  productsRegistered: {
    count: randomBetween(120, 280),
    delta: randomBetween(-20, 50),
    deltaPercent: randomBetween(-15, 35)
  },
  warrantyCases: {
    open: randomBetween(8, 25),
    created30d: randomBetween(15, 40),
    delta: randomBetween(-5, 8)
  },
  registrationCoverage: {
    percentage: randomBetween(65, 85),
    delta: randomBetween(-10, 15)
  }
});

// Time Series Data Generator
export const generateTimeSeriesData = (days: number = 30): TimeSeriesData[] => {
  const data: TimeSeriesData[] = [];
  const today = new Date();
  
  for (let i = days; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    
    data.push({
      date: date.toISOString().split('T')[0],
      sales: randomBetween(8000, 35000),
      units: randomBetween(3, 15)
    });
  }
  
  return data;
};

// Product Performance Data
export const generateProductData = (): ProductData[] => 
  PRODUCTS.map(product => ({
    sku: product.sku,
    name: product.name,
    units: randomBetween(5, 45),
    revenue: randomBetween(15000, 120000),
    category: product.category
  })).sort((a, b) => b.units - a.units);

// Heatmap Data Generator
export const generateHeatmapData = (): HeatmapData[] => 
  CITIES.map(city => ({
    area: city.name,
    postalCode: city.postal,
    city: city.name,
    newRegistrations: randomBetween(2, 25),
    lat: city.lat,
    lng: city.lng
  }));

// Sales Events Generator
export const generateSalesEvents = (count: number = 50): SalesEvent[] => {
  const events: SalesEvent[] = [];
  const now = new Date();
  
  for (let i = 0; i < count; i++) {
    const product = PRODUCTS[randomBetween(0, PRODUCTS.length - 1)];
    const eventDate = randomDate(new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000), now);
    
    events.push({
      retailer_id: `SE-${randomBetween(10000, 99999)}`,
      pos_txn_id: `TXN-${randomBetween(100000, 999999)}`,
      ts: eventDate.toISOString(),
      items: [{
        sku: product.sku,
        gtin: `073500012345${randomBetween(10, 99)}`,
        serial: generateSerial(),
        qty: randomBetween(1, 3),
        price_inc_vat: product.price + randomBetween(-100, 200),
        product_name: product.name,
        category: product.category
      }]
    });
  }
  
  return events.sort((a, b) => new Date(b.ts).getTime() - new Date(a.ts).getTime());
};

// Warranty Cases Generator
export const generateWarrantyCases = (count: number = 20): WarrantyCase[] => {
  const statuses: WarrantyCase['status'][] = ['open', 'in_progress', 'resolved', 'closed'];
  const cases: WarrantyCase[] = [];
  
  for (let i = 0; i < count; i++) {
    const product = PRODUCTS[randomBetween(0, PRODUCTS.length - 1)];
    const createdDate = randomDate(new Date(Date.now() - 90 * 24 * 60 * 60 * 1000), new Date());
    const slaDate = new Date(createdDate.getTime() + randomBetween(7, 21) * 24 * 60 * 60 * 1000);
    
    cases.push({
      id: `WC-${randomBetween(10000, 99999)}`,
      product: product.name,
      sku: product.sku,
      serial: generateSerial(),
      age: Math.floor((Date.now() - createdDate.getTime()) / (1000 * 60 * 60 * 24)),
      status: statuses[randomBetween(0, statuses.length - 1)],
      expectedSLA: slaDate.toISOString().split('T')[0],
      createdAt: createdDate.toISOString()
    });
  }
  
  return cases.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
};

// End Customer Registrations Generator
export const generateEndCustomerRegistrations = (count: number = 30): EndCustomerRegistration[] => {
  const channels: EndCustomerRegistration['channel'][] = ['online', 'app', 'qr_code', 'manual'];
  const registrations: EndCustomerRegistration[] = [];
  
  for (let i = 0; i < count; i++) {
    const product = PRODUCTS[randomBetween(0, PRODUCTS.length - 1)];
    const regDate = randomDate(new Date(Date.now() - 60 * 24 * 60 * 60 * 1000), new Date());
    
    registrations.push({
      id: `REG-${randomBetween(100000, 999999)}`,
      product: product.name,
      sku: product.sku,
      serial: generateSerial(),
      date: regDate.toISOString(),
      channel: channels[randomBetween(0, channels.length - 1)],
      consent: Math.random() > 0.2, // 80% consent rate
      customerEmail: Math.random() > 0.3 ? `customer${randomBetween(1000, 9999)}@email.com` : undefined
    });
  }
  
  return registrations.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

// Replenishment Suggestions Generator
export const generateReplenishmentSuggestions = (): ReplenishmentSuggestion[] => 
  PRODUCTS.slice(0, 6).map(product => ({
    sku: product.sku,
    productName: product.name,
    currentStock: randomBetween(2, 15),
    recommendedQty: randomBetween(8, 25),
    rationale: `Based on sales velocity (${randomBetween(2, 8)} units/week) and lead time (${randomBetween(7, 14)} days)`,
    velocity: randomBetween(2, 8),
    leadTime: randomBetween(7, 14)
  }));

// Spareparts Recommendations Generator
export const generateSparepartsRecommendations = (): SparepartsRecommendation[] => 
  PRODUCTS.slice(0, 5).map(product => ({
    parentSku: product.sku,
    parentName: product.name,
    spareparts: [
      {
        sku: `${product.sku}-BLADE`,
        name: `${product.name} Blade Set`,
        recommendedQty: randomBetween(3, 8),
        reason: 'High wear item, replace every 6 months'
      },
      {
        sku: `${product.sku}-FILTER`,
        name: `${product.name} Air Filter`,
        recommendedQty: randomBetween(2, 5),
        reason: 'Seasonal replacement recommended'
      }
    ]
  }));

// Risk Flags Generator
export const generateRiskFlags = (): RiskFlag[] => {
  const types: RiskFlag['type'][] = ['high_returns', 'high_warranty', 'low_registration', 'stock_out'];
  const severities: RiskFlag['severity'][] = ['low', 'medium', 'high'];
  
  return Array.from({ length: randomBetween(2, 6) }, () => {
    const product = PRODUCTS[randomBetween(0, PRODUCTS.length - 1)];
    const type = types[randomBetween(0, types.length - 1)];
    
    return {
      type,
      severity: severities[randomBetween(0, severities.length - 1)],
      product: product.name,
      sku: product.sku,
      message: `${type.replace('_', ' ')} detected for ${product.name}`,
      actionRequired: Math.random() > 0.4
    };
  });
};

// Connectors Generator
export const generateConnectors = (): Connector[] => [
  {
    id: 'fortnox',
    name: 'Fortnox',
    type: 'fortnox',
    status: 'connected',
    lastSync: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    config: {
      apiKey: 'fx_****_****_****_1234',
      webhookUrl: 'https://api.husqvarna.com/webhooks/fortnox',
      hmacSecret: 'hmac_****_****_5678'
    }
  },
  {
    id: 'visma',
    name: 'Visma eAccounting',
    type: 'visma',
    status: 'disconnected',
    config: {}
  },
  {
    id: 'business_central',
    name: 'Microsoft Business Central',
    type: 'business_central',
    status: 'error',
    lastSync: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    errorLogs: ['Authentication failed', 'Invalid API endpoint'],
    config: {
      apiKey: 'bc_****_****_****_9999'
    }
  },
  {
    id: 'zettle',
    name: 'Zettle by PayPal',
    type: 'zettle',
    status: 'connected',
    lastSync: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
    config: {
      apiKey: 'zt_****_****_****_5555',
      webhookUrl: 'https://api.husqvarna.com/webhooks/zettle'
    }
  }
];

// Campaign Templates Generator
export const generateCampaignTemplates = (): CampaignTemplate[] => [
  {
    id: 'email_new_product',
    name: 'New Product Launch Email',
    type: 'email',
    template: 'Discover the new {{product_name}} - now available at {{retailer_name}}!',
    variables: ['product_name', 'retailer_name', 'special_offer']
  },
  {
    id: 'sms_maintenance',
    name: 'Maintenance Reminder SMS',
    type: 'sms',
    template: 'Time for {{product_name}} maintenance! Book service at {{retailer_name}}.',
    variables: ['product_name', 'retailer_name', 'phone_number']
  },
  {
    id: 'instore_promo',
    name: 'In-Store Promotion',
    type: 'in_store',
    template: '{{discount}}% OFF {{product_category}} - Limited time offer!',
    variables: ['discount', 'product_category', 'valid_until']
  }
];

// Unified mock data export
export const mockData = {
  kpiData: generateKPIData,
  timeSeriesData: generateTimeSeriesData,
  productData: generateProductData,
  heatmapData: generateHeatmapData,
  salesEvents: generateSalesEvents,
  warrantyCases: generateWarrantyCases,
  endCustomerRegistrations: generateEndCustomerRegistrations,
  replenishmentSuggestions: generateReplenishmentSuggestions,
  sparepartsRecommendations: generateSparepartsRecommendations,
  riskFlags: generateRiskFlags,
  connectors: generateConnectors,
  campaignTemplates: generateCampaignTemplates
};
