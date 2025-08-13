import React from 'react';
import { 
  DocumentTextIcon,
  WrenchScrewdriverIcon,
  AcademicCapIcon,
  ShoppingCartIcon,
  InformationCircleIcon,
  ChevronRightIcon,
  EyeIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import {
  CheckCircleIcon as CheckCircleIconSolid,
  ExclamationTriangleIcon as ExclamationTriangleIconSolid
} from '@heroicons/react/24/solid';

interface OverviewPageProps {
  onNavigate?: (section: string) => void;
}

export const OverviewPage: React.FC<OverviewPageProps> = ({ onNavigate }) => {
  // Recent activities
  const recentActivities = [
    {
      id: 1,
      type: 'order',
      title: 'New order received',
      description: 'Order #2025-0847 - Automower 450X + accessories',
      time: '12 minutes ago',
      icon: ShoppingCartIcon,
      color: 'text-gray-600',
      bgColor: 'bg-gray-50'
    },
    {
      id: 2,
      type: 'support',
      title: 'Support case updated',
      description: 'Ticket #1234 - Battery replacement inquiry resolved',
      time: '2 hours ago',
      icon: DocumentTextIcon,
      color: 'text-gray-600',
      bgColor: 'bg-gray-50'
    },
    {
      id: 3,
      type: 'notification',
      title: 'System maintenance',
      description: 'Scheduled maintenance completed successfully',
      time: '4 hours ago',
      icon: CheckCircleIconSolid,
      color: 'text-gray-600',
      bgColor: 'bg-gray-50'
    },
    {
      id: 4,
      type: 'training',
      title: 'Course completed',
      description: 'Chainsaw Safety & Technology - 200 credits earned',
      time: '1 day ago',
      icon: AcademicCapIcon,
      color: 'text-gray-600',
      bgColor: 'bg-gray-50'
    }
  ];

  // Quick actions for immediate tasks
  const quickActions = [
    {
      title: 'Create Support Case',
      description: 'Get help with technical issues',
      icon: DocumentTextIcon,
      color: 'bg-gray-700 hover:bg-gray-800',
      action: () => onNavigate && onNavigate('support')
    },
    {
      title: 'Check Orders',
      description: 'View recent and pending orders',
      icon: ShoppingCartIcon,
      color: 'bg-gray-600 hover:bg-gray-700',
      action: () => onNavigate && onNavigate('orders')
    },
    {
      title: 'Repair Guides',
      description: 'Access step-by-step repair instructions',
      icon: WrenchScrewdriverIcon,
      color: 'bg-gray-500 hover:bg-gray-600',
      action: () => onNavigate && onNavigate('repairs')
    },
    {
      title: 'Browse Catalog',
      description: 'Find products and specifications',
      icon: EyeIcon,
      color: 'bg-gray-600 hover:bg-gray-700',
      action: () => onNavigate && onNavigate('catalog')
    }
  ];

  // Critical alerts and notifications
  const criticalAlerts = [
    {
      id: 1,
      type: 'warning',
      title: 'Low inventory alert',
      message: 'Chainsaw chains stock below minimum threshold (8 units remaining)',
      priority: 'high',
      time: '30 minutes ago'
    },
    {
      id: 2,
      type: 'info',
      title: 'New product launch',
      message: 'Automower 535 AWD now available - update your displays',
      priority: 'medium',
      time: '2 hours ago'
    }
  ];

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen max-w-7xl mx-auto">
      {/* Header with Quick Search */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-[#273A60] rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-2xl">S</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Store Overview</h1>
              <p className="text-gray-600 text-lg">
                Good morning, <span className="text-[#273A60] font-semibold">Söderqvist AB</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Critical Alerts */}
      {criticalAlerts.length > 0 && (
        <div className="space-y-3">
          {criticalAlerts.map((alert) => (
            <div
              key={alert.id}
              className={`p-4 rounded-lg border-l-4 ${
                alert.type === 'warning'
                  ? 'bg-gray-50 border-gray-400'
                  : 'bg-gray-50 border-gray-400'
              }`}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  {alert.type === 'warning' ? (
                    <ExclamationTriangleIconSolid className="h-5 w-5 text-gray-500" />
                  ) : (
                    <InformationCircleIcon className="h-5 w-5 text-gray-500" />
                  )}
                </div>
                <div className="ml-3 flex-1">
                  <h3 className="text-sm font-medium text-gray-900">{alert.title}</h3>
                  <p className="text-sm text-gray-700 mt-1">{alert.message}</p>
                  <p className="text-xs text-gray-500 mt-1">{alert.time}</p>
                </div>
                <button className="flex-shrink-0 ml-4">
                  <XMarkIcon className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Quick Actions</h2>
              <p className="text-sm text-gray-600 mt-1">Most common tasks</p>
            </div>
            <div className="p-6 space-y-4">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  onClick={action.action}
                  className={`w-full text-left p-4 rounded-lg transition-colors ${action.color} text-white group hover:scale-105 transform transition-transform`}
                >
                  <div className="flex items-center space-x-3">
                    <action.icon className="w-6 h-6" />
                    <div>
                      <div className="font-medium">{action.title}</div>
                      <div className="text-sm opacity-90">{action.description}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
                  <p className="text-sm text-gray-600 mt-1">Latest updates from your store</p>
                </div>
                <button className="text-sm text-[#273A60] hover:text-[#1e2847] font-medium">
                  View all →
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className={`w-10 h-10 ${activity.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <activity.icon className={`w-5 h-5 ${activity.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900">{activity.title}</p>
                      <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
                      <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <ChevronRightIcon className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* System Status */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">System Status</h2>
          <p className="text-sm text-gray-600 mt-1">All systems operational</p>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Order Management', status: 'operational', uptime: '99.9%' },
              { name: 'Product Catalog', status: 'operational', uptime: '99.8%' },
              { name: 'Support Portal', status: 'operational', uptime: '100%' },
              { name: 'Payment Processing', status: 'operational', uptime: '99.9%' },
              { name: 'Inventory Sync', status: 'maintenance', uptime: '98.5%' },
              { name: 'Training Platform', status: 'operational', uptime: '99.7%' }
            ].map((system, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${
                    system.status === 'operational' ? 'bg-gray-400' : 'bg-gray-500'
                  }`}></div>
                  <span className="font-medium text-gray-900">{system.name}</span>
                </div>
                <span className="text-sm text-gray-600">{system.uptime}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
