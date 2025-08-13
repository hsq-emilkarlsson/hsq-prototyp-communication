import { useState } from 'react';
// Force rebuild for GitHub Pages
import { PortalLayout } from './components/PortalLayout';
import { OverviewPage } from './pages/OverviewPage';
import { NotificationsPage } from './pages/NotificationsPage';
import { SearchPage } from './pages/SearchPage';
import { OrdersPage } from './pages/OrdersPage';
import CatalogPage from './pages/CatalogPage';
import ContractsPage from './pages/ContractsPage';
import { RepairsPage } from './pages/RepairsPage';
import { FleetServicesPage } from './pages/FleetServicesPage';
import { TrainingPage } from './pages/TrainingPage';
import { SalesPage } from './pages/SalesPage';
import { SettingsPage } from './pages/SettingsPage';
import { MarketingPage } from './pages/MarketingPage';
import { IntegrationsPage } from './pages/IntegrationsPage';
import { SupportPage } from './pages/SupportPage';
import { ServiceBulletinPage } from './pages/ServiceBulletinPage';
import { ServiceContractsPage } from './pages/ServiceContractsPage';
import { SalesTab } from './components/SalesTab';
import { ProductRegistrationDashboard } from './components/ProductRegistrationDashboard';
import { useAuth, useFilters, useDashboardData } from './hooks';

function App() {
  const [activeSection, setActiveSection] = useState('overview');
  const { user, isAuthenticated } = useAuth();
  const { filters } = useFilters();
  const { data, isLoading } = useDashboardData(filters);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Husqvarna Partner Portal
          </h1>
          <p className="text-gray-600">Please log in to continue</p>
        </div>
      </div>
    );
  }

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return <OverviewPage onNavigate={setActiveSection} />;
      case 'sales':
        return <SalesPage 
          onNavigateToDashboard={() => setActiveSection('registration-dashboard')} 
          onNavigateToServiceContracts={() => setActiveSection('service-contracts')}
        />;
      case 'sales-dashboard':
        return <SalesTab data={data} isLoading={isLoading} filters={filters} onBack={() => setActiveSection('sales')} />;
      case 'registration-dashboard':
        return <ProductRegistrationDashboard onBack={() => setActiveSection('sales')} />;
      case 'marketing':
        return <MarketingPage />;
      case 'marketing-referrals':
        return <MarketingPage initialCategory="referrals" />;
      case 'integrations':
        return <IntegrationsPage />;
      case 'notifications':
        return <NotificationsPage 
          onNavigateToMarketing={() => setActiveSection('marketing-referrals')}
          onNavigateToSettings={() => setActiveSection('settings')}
          onNavigateToServiceBulletin={() => setActiveSection('service-bulletin')}
        />;
      case 'search':
        return <SearchPage />;
      case 'orders':
        return <OrdersPage />;
      case 'catalog':
        return <CatalogPage />;
      case 'contracts':
        return <ContractsPage />;
      case 'repairs':
        return <RepairsPage />;
      case 'fleet-services':
        return <FleetServicesPage />;
      case 'support':
      case 'support-cases':
      case 'create-case':
        return <SupportPage />;
      case 'service-bulletin':
        return <ServiceBulletinPage onBack={() => setActiveSection('notifications')} />;
      case 'service-contracts':
        return <ServiceContractsPage onBack={() => setActiveSection('sales')} />;
      case 'settings':
        return <SettingsPage />;
      case 'system-status':
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">System Status</h1>
            <div className="bg-white rounded-lg shadow p-6">
              <p className="text-gray-600">System status monitoring interface will be implemented here.</p>
            </div>
          </div>
        );
      case 'training':
        return <TrainingPage />;
      default:
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Coming Soon</h1>
            <div className="bg-white rounded-lg shadow p-6">
              <p className="text-gray-600">This feature is under development.</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PortalLayout
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        user={user}
      >
        {renderContent()}
      </PortalLayout>
    </div>
  );
}

export default App;
