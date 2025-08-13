import React, { useState } from 'react';
import { 
  HomeIcon,
  BellIcon,
  LifebuoyIcon,
  AcademicCapIcon,
  CogIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ShoppingCartIcon,
  MegaphoneIcon,
  MagnifyingGlassIcon,
  ClipboardDocumentCheckIcon,
  FolderIcon,
  DocumentCheckIcon,
  WrenchScrewdriverIcon,
  TruckIcon,
  PuzzlePieceIcon
} from '@heroicons/react/24/outline';

// Portal Layout Component
interface SidebarItem {
  id: string;
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  children?: SidebarItem[];
  badge?: number;
}

const sidebarItems: SidebarItem[] = [
  {
    id: 'overview',
    label: 'Overview',
    icon: HomeIcon
  },
  {
    id: 'notifications',
    label: 'Notifications',
    icon: BellIcon,
    badge: 3
  },
  {
    id: 'search',
    label: 'Search',
    icon: MagnifyingGlassIcon
  },
  {
    id: 'sales',
    label: 'Sales',
    icon: ShoppingCartIcon
  },
  {
    id: 'orders',
    label: 'Orders',
    icon: ClipboardDocumentCheckIcon
  },
  {
    id: 'catalog',
    label: 'Catalog',
    icon: FolderIcon
  },
  {
    id: 'repairs',
    label: 'Repairs',
    icon: WrenchScrewdriverIcon
  },
  {
    id: 'fleet-services',
    label: 'Fleet Services',
    icon: TruckIcon
  },
  {
    id: 'marketing',
    label: 'Marketing',
    icon: MegaphoneIcon
  },
  {
    id: 'integrations',
    label: 'Integrations',
    icon: PuzzlePieceIcon
  },
  {
    id: 'support',
    label: 'Support',
    icon: LifebuoyIcon
  },
  {
    id: 'training',
    label: 'Training',
    icon: AcademicCapIcon
  },
  {
    id: 'contracts',
    label: 'Contracts',
    icon: DocumentCheckIcon
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: CogIcon
  }
];

interface PortalLayoutProps {
  children: React.ReactNode;
  activeSection: string;
  onSectionChange: (section: string) => void;
  user: {
    name: string;
    email: string;
    retailer: string;
    role: string;
  };
}

export const PortalLayout: React.FC<PortalLayoutProps> = ({ 
  children, 
  activeSection, 
  onSectionChange,
  user 
}) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>(['support']);

  const toggleExpanded = (itemId: string) => {
    setExpandedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const renderSidebarItem = (item: SidebarItem, level: number = 0) => {
    const Icon = item.icon;
    const isActive = activeSection === item.id;
    const isExpanded = expandedItems.includes(item.id);
    const hasChildren = item.children && item.children.length > 0;

    return (
      <div key={item.id}>
        <button
          onClick={() => {
            if (hasChildren) {
              toggleExpanded(item.id);
            } else {
              onSectionChange(item.id);
            }
          }}
          className={`
            w-full flex items-center justify-between px-3 py-3 text-left rounded-lg transition-all duration-200 group
            ${level > 0 ? 'ml-4 text-sm' : 'text-sm font-medium'}
            ${isActive 
              ? 'bg-[#273A60] text-white shadow-sm' 
              : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
            }
          `}
        >
          <div className="flex items-center space-x-3">
            <Icon className={`w-5 h-5 transition-transform duration-200 ${isActive ? 'scale-110' : 'group-hover:scale-105'}`} />
            {!sidebarCollapsed && (
              <>
                <span className="font-medium">{item.label}</span>
                {item.badge && (
                  <span className="bg-red-500 text-white text-xs rounded-full px-2 py-0.5 min-w-[20px] text-center font-semibold shadow-sm">
                    {item.badge}
                  </span>
                )}
              </>
            )}
          </div>
          {hasChildren && !sidebarCollapsed && (
            <ChevronRightIcon className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''} ${isActive ? 'text-gray-600' : 'text-gray-400'}`} />
          )}
        </button>

        {hasChildren && isExpanded && !sidebarCollapsed && (
          <div className="mt-1 space-y-1">
            {item.children!.map(child => renderSidebarItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Concept Banner */}
      <div className="fixed top-0 left-0 right-0 bg-[#273A60] text-white text-center py-2 text-sm font-medium z-50">
        This is a concept version and is not fully functional or in production.
      </div>

      {/* Sidebar */}
      <aside className={`
        fixed top-12 left-0 h-full bg-white shadow-xl transition-all duration-300 z-40 border-r border-gray-200
        ${sidebarCollapsed ? 'w-16' : 'w-64'}
      `}>
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
          {!sidebarCollapsed && (
            <div className="flex items-center space-x-3">
              <img 
                src="https://portal.husqvarnagroup.com/static/b2b/assets/with-name.4d5589ae.svg" 
                alt="Husqvarna"
                className="h-12 w-auto"
              />
            </div>
          )}
          {sidebarCollapsed && (
            <div className="flex items-center justify-center w-full">
              <div className="w-10 h-10 bg-[#273A60] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">H</span>
              </div>
            </div>
          )}
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="p-1.5 rounded-md hover:bg-gray-100 text-gray-600 transition-colors"
          >
            {sidebarCollapsed ? (
              <ChevronRightIcon className="w-5 h-5" />
            ) : (
              <ChevronLeftIcon className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* User Info */}
        {!sidebarCollapsed && (
          <div className="p-4 border-b border-gray-200 bg-gray-50">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center border border-gray-300">
                <span className="text-sm font-bold text-gray-700">
                  {user.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 truncate">{user.name}</p>
                <p className="text-xs text-gray-600 font-medium truncate">{user.retailer}</p>
                <p className="text-xs text-gray-500 capitalize">{user.role}</p>
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <nav className="p-4 space-y-2 overflow-y-auto" style={{ height: 'calc(100vh - 200px)' }}>
          {sidebarItems.map(item => renderSidebarItem(item))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className={`
        flex-1 transition-all duration-300
        ${sidebarCollapsed ? 'ml-16' : 'ml-64'}
        mt-12
      `}>
        <div className="h-full overflow-auto">
          {children}
        </div>
      </main>
    </div>
  );
};
