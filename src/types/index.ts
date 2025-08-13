// Core types for the Husqvarna Retailer Dashboard

// Time frame options for filtering
export type TimeFrame = '7d' | '30d' | '90d' | '365d' | 'custom';

// User roles and permissions
export type UserRole = 'retailer_admin' | 'retailer_user' | 'internal_admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  retailerId: string;
  permissions: string[];
}

// Sales data types
export interface SalesEvent {
  retailer_id: string;
  pos_txn_id: string;
  ts: string;
  items: SalesItem[];
}

export interface SalesItem {
  sku: string;
  gtin: string;
  serial?: string;
  qty: number;
  price_inc_vat: number;
  product_name?: string;
  category?: string;
}

// KPI data
export interface KPIData {
  totalSales: {
    amount: number;
    delta: number;
    deltaPercent: number;
  };
  unitsSold: {
    count: number;
    delta: number;
    deltaPercent: number;
  };
  productsRegistered: {
    count: number;
    delta: number;
    deltaPercent: number;
  };
  warrantyCases: {
    open: number;
    created30d: number;
    delta: number;
  };
  registrationCoverage: {
    percentage: number;
    delta: number;
  };
}

// Chart data types
export interface TimeSeriesData {
  date: string;
  sales: number;
  units: number;
}

export interface ProductData {
  sku: string;
  name: string;
  units: number;
  revenue: number;
  category: string;
}

export interface HeatmapData {
  area: string;
  postalCode: string;
  city: string;
  newRegistrations: number;
  lat: number;
  lng: number;
}

// Warranty and registration types
export interface WarrantyCase {
  id: string;
  product: string;
  sku: string;
  serial: string;
  age: number;
  status: 'open' | 'in_progress' | 'resolved' | 'closed';
  expectedSLA: string;
  createdAt: string;
}

export interface EndCustomerRegistration {
  id: string;
  product: string;
  sku: string;
  serial: string;
  date: string;
  channel: 'online' | 'app' | 'qr_code' | 'manual';
  consent: boolean;
  customerEmail?: string;
}

// Insights and recommendations
export interface ReplenishmentSuggestion {
  sku: string;
  productName: string;
  currentStock: number;
  recommendedQty: number;
  rationale: string;
  velocity: number;
  leadTime: number;
}

export interface SparepartsRecommendation {
  parentSku: string;
  parentName: string;
  spareparts: {
    sku: string;
    name: string;
    recommendedQty: number;
    reason: string;
  }[];
}

export interface RiskFlag {
  type: 'high_returns' | 'high_warranty' | 'low_registration' | 'stock_out';
  severity: 'low' | 'medium' | 'high';
  product: string;
  sku: string;
  message: string;
  actionRequired: boolean;
}

// Filter types
export interface DateRange {
  start: Date;
  end: Date;
  preset?: 'last7' | 'last30' | 'last90' | 'custom';
}

export interface FilterState {
  timeFrame: TimeFrame;
  retailerIds: string[];
  productCategories: string[];
  customDateRange: DateRange | null;
}

// Connector types for Settings
// POS/ERP Connector configuration
export interface Connector {
  id: string;
  name: string;
  type: string;
  status: 'connected' | 'disconnected' | 'error' | 'testing';
  lastSync?: string;
  errorLogs?: string[];
  config: Record<string, any>;
}

// Marketing campaign types
export interface CampaignTemplate {
  id: string;
  name: string;
  type: 'email' | 'sms' | 'in_store';
  template: string;
  variables: string[];
}

export interface CampaignAudience {
  size: number;
  criteria: {
    area?: string[];
    product?: string[];
    registrationDate?: DateRange;
  };
}

// API response wrapper
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  timestamp: string;
}
