import { useState, useEffect, useMemo } from 'react';
import { FilterState, TimeFrame } from '../types';
import { mockData } from '../data/mockData';

// Global filter state hook
export const useFilters = () => {
  const [filters, setFilters] = useState<FilterState>({
    timeFrame: '30d' as TimeFrame,
    retailerIds: [],
    productCategories: [],
    customDateRange: null
  });

  // Persist filters to URL
  useEffect(() => {
    const params = new URLSearchParams();
    params.set('timeFrame', filters.timeFrame);
    if (filters.retailerIds.length) params.set('retailers', filters.retailerIds.join(','));
    if (filters.productCategories.length) params.set('categories', filters.productCategories.join(','));
    
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState({}, '', newUrl);
  }, [filters]);

  // Load filters from URL on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const timeFrame = params.get('timeFrame') as TimeFrame || '30d';
    const retailers = params.get('retailers')?.split(',').filter(Boolean) || [];
    const categories = params.get('categories')?.split(',').filter(Boolean) || [];
    
    setFilters({
      timeFrame,
      retailerIds: retailers,
      productCategories: categories,
      customDateRange: null
    });
  }, []);

  return { filters, setFilters };
};

// Dashboard data hook with filtering
export const useDashboardData = (filters: FilterState) => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate API loading
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, [filters]);

  const data = useMemo(() => {
    // Calculate days based on timeframe
    const getDays = () => {
      switch (filters.timeFrame) {
        case '7d': return 7;
        case '30d': return 30;
        case '90d': return 90;
        case '365d': return 365;
        case 'custom': return 30; // fallback
        default: return 30;
      }
    };

    return {
      kpis: mockData.kpiData(),
      timeSeries: mockData.timeSeriesData(getDays()),
      productPerformance: mockData.productData(),
      heatmap: mockData.heatmapData(),
      salesEvents: mockData.salesEvents(50),
      warrantyCases: mockData.warrantyCases(20),
      registrations: mockData.endCustomerRegistrations(30),
      replenishment: mockData.replenishmentSuggestions(),
      spareparts: mockData.sparepartsRecommendations(),
      riskFlags: mockData.riskFlags()
    };
  }, [filters]);

  return { data, isLoading };
};

// User role and permissions hook
export const useAuth = () => {
  // Mock user data - in real app this would come from authentication
  const user = {
    id: 'user123',
    name: 'Lisa Andersson',
    email: 'lisa@soderqvist.se',
    retailer: 'Södersqvist',
    role: 'admin' as const,
    permissions: {
      viewSales: true,
      viewMarketing: true,
      editCampaigns: true,
      manageConnectors: true,
      exportData: true
    }
  };

  return { user, isAuthenticated: true };
};

// Marketing campaigns hook
// Marketing hook
export const useMarketing = () => {
  const [campaigns] = useState(() => mockData.campaignTemplates());
  const [activeCampaign, setActiveCampaign] = useState<string | null>(null);

  const createCampaign = (template: any) => {
    // Mock campaign creation
    console.log('Creating campaign:', template);
    setActiveCampaign(template.id);
  };

  return {
    campaigns,
    activeCampaign,
    createCampaign,
    templates: mockData.campaignTemplates()
  };
};

// Connectors management hook
export const useConnectors = () => {
  const [connectors, setConnectors] = useState(() => mockData.connectors());

  const testConnection = async (connectorId: string) => {
    setConnectors(prev => prev.map(c => 
      c.id === connectorId 
        ? { ...c, status: 'testing' as const }
        : c
    ));

    // Simulate API test
    await new Promise(resolve => setTimeout(resolve, 2000));

    setConnectors(prev => prev.map(c => 
      c.id === connectorId 
        ? { 
            ...c, 
            status: Math.random() > 0.3 ? 'connected' : 'error',
            lastSync: new Date().toISOString()
          }
        : c
    ));
  };

  const updateConnector = (connectorId: string, config: any) => {
    setConnectors(prev => prev.map(c => 
      c.id === connectorId 
        ? { ...c, config: { ...c.config, ...config } }
        : c
    ));
  };

  const disconnectConnector = (connectorId: string) => {
    setConnectors(prev => prev.map(c => 
      c.id === connectorId 
        ? { ...c, status: 'disconnected' as const }
        : c
    ));
  };

  return {
    connectors,
    testConnection,
    updateConnector,
    disconnectConnector
  };
};

// Local storage hook for user preferences
export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue] as const;
};
