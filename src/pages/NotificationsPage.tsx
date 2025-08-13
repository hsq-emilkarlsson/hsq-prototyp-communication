import React, { useState } from 'react';
import { 
  BellIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  CheckCircleIcon,
  ClockIcon,
  MegaphoneIcon,
  ArrowRightIcon,
  CogIcon
} from '@heroicons/react/24/outline';

interface Notification {
  id: string;
  type: 'warning' | 'info' | 'success' | 'urgent' | 'marketing';
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  actionLabel?: string;
  onAction?: () => void;
}

interface NotificationsPageProps {
  onNavigateToMarketing?: () => void;
  onNavigateToSettings?: () => void;
  onNavigateToServiceBulletin?: () => void;
}

export const NotificationsPage: React.FC<NotificationsPageProps> = ({ 
  onNavigateToMarketing, 
  onNavigateToSettings,
  onNavigateToServiceBulletin
}) => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      type: 'urgent',
      title: 'Service Bulletin SB2500012 - Automower® 450X Battery Optimization',
      message: 'New service bulletin available: Battery Optimization Guide for Husqvarna Automower® 450X models manufactured after 2024-01.',
      timestamp: '2025-08-12T07:23:00Z',
      read: false,
      actionLabel: 'Read Service Bulletin',
      onAction: () => onNavigateToServiceBulletin?.()
    },
    {
      id: '2',
      type: 'urgent',
      title: 'Automower Error Alert - Company AB',
      message: 'Critical error E001 detected on Automower at Industrivägen 22. Machine stuck - immediate attention required.',
      timestamp: '2025-08-12T07:20:00Z',
      read: false,
      actionLabel: 'Read Service Bulletin',
      onAction: () => onNavigateToServiceBulletin?.()
    },
    {
      id: '3',
      type: 'marketing',
      title: 'High Automower Registration Density Detected',
      message: 'Multiple Automower registrations detected in Värmdö area. Perfect opportunity for a targeted referral campaign.',
      timestamp: '2025-08-12T08:00:00Z',
      read: false,
      actionLabel: 'Start Referral Campaign',
      onAction: () => onNavigateToMarketing?.()
    },
    {
      id: '3',
      type: 'warning',
      title: 'Fleet Integration Issue',
      message: 'Geotab Fleet integration has lost connection. Some Automower data may not be syncing properly.',
      timestamp: '2025-08-12T06:15:00Z',
      read: false,
      actionLabel: 'Check Fleet Settings',
      onAction: () => onNavigateToSettings?.()
    },
    {
      id: '4',
      type: 'urgent',
      title: 'Product Recall - Automower 315X',
      message: 'Important safety recall notice for Automower 315X manufactured between January-March 2025.',
      timestamp: '2025-08-11T10:30:00Z',
      read: false
    },
    {
      id: '3',
      type: 'warning',
      title: 'Delivery delays expected',
      message: 'Due to logistics issues, delays in spare parts deliveries are expected during week 33.',
      timestamp: '2025-08-10T14:15:00Z',
      read: false
    },
    {
      id: '5',
      type: 'info',
      title: 'New product catalog available',
      message: 'The new product catalog for Fall 2025 is now available in the portal.',
      timestamp: '2025-08-09T09:00:00Z',
      read: true
    },
    {
      id: '4',
      type: 'success',
      title: 'Support case resolved - TICKET-2025-1199',
      message: 'Your support case regarding warranty for Chainsaw 550 XP has been resolved.',
      timestamp: '2025-08-08T16:45:00Z',
      read: true
    }
  ]);

  const [filter, setFilter] = useState<'all' | 'unread' | 'urgent'>('all');

  const getIcon = (type: Notification['type']) => {
    switch (type) {
      case 'marketing':
        return (
          <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center shadow-sm">
            <MegaphoneIcon className="w-5 h-5 text-orange-600" />
          </div>
        );
      case 'urgent':
        return (
          <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center shadow-sm">
            <ExclamationTriangleIcon className="w-5 h-5 text-gray-600" />
          </div>
        );
      case 'warning':
        return (
          <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center shadow-sm">
            <ExclamationTriangleIcon className="w-5 h-5 text-gray-600" />
          </div>
        );
      case 'info':
        return (
          <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center shadow-sm">
            <InformationCircleIcon className="w-5 h-5 text-gray-600" />
          </div>
        );
      case 'success':
        return (
          <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center shadow-sm">
            <CheckCircleIcon className="w-5 h-5 text-gray-600" />
          </div>
        );
    }
  };

  const getBgColor = (type: Notification['type']) => {
    switch (type) {
      case 'urgent':
        return 'bg-white';
      case 'warning':
        return 'bg-white';
      case 'info':
        return 'bg-white';
      case 'success':
        return 'bg-white';
    }
  };

  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notif => ({ ...notif, read: true }))
    );
  };

  const filteredNotifications = notifications.filter(notif => {
    switch (filter) {
      case 'unread':
        return !notif.read;
      case 'urgent':
        return notif.type === 'urgent';
      default:
        return true;
    }
  });

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center shadow-sm">
              <BellIcon className="w-6 h-6 text-gray-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Notifications</h1>
              <p className="text-gray-600 text-lg">
                <span className="text-gray-800 font-semibold">{unreadCount}</span> unread notifications
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => onNavigateToSettings?.()}
              className="bg-gray-100 text-gray-700 px-4 py-3 rounded-xl font-medium hover:bg-gray-200 transition-all duration-300 shadow-sm flex items-center space-x-2"
            >
              <CogIcon className="w-5 h-5" />
              <span>Notification Settings</span>
            </button>
            <button
              onClick={() => markAllAsRead()}
              className="bg-[#273A60] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#1e2b4f] transition-all duration-300 shadow-sm"
            >
                            Mark all as read
            </button>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <div className="flex space-x-4">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-3 rounded-xl transition-all duration-300 font-semibold ${
              filter === 'all'
                ? 'bg-gray-800 text-white shadow-sm'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All ({notifications.length})
          </button>
          <button
            onClick={() => setFilter('unread')}
            className={`px-6 py-3 rounded-xl transition-all duration-300 font-semibold ${
              filter === 'unread'
                ? 'bg-gray-800 text-white shadow-sm'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Unread ({unreadCount})
          </button>
          <button
            onClick={() => setFilter('urgent')}
            className={`px-6 py-3 rounded-xl transition-all duration-300 font-semibold ${
              filter === 'urgent'
                ? 'bg-gray-800 text-white shadow-sm'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Urgent ({notifications.filter(n => n.type === 'urgent').length})
          </button>
        </div>
      </div>

      {/* Notifications List */}
      <div className="space-y-4">
        {filteredNotifications.map((notification) => (
          <div
            key={notification.id}
            className={`rounded-xl p-6 cursor-pointer transition-all duration-300 hover:shadow-md ${
              getBgColor(notification.type)
            } ${!notification.read ? 'border-l-4 border-l-gray-400 shadow-sm' : 'border border-gray-200'}`}
            onClick={() => markAsRead(notification.id)}
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1">
                {getIcon(notification.type)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className={`text-lg font-semibold ${
                    !notification.read ? 'text-gray-900' : 'text-gray-700'
                  }`}>
                    {notification.title}
                    {!notification.read && (
                      <span className="ml-2 w-2 h-2 bg-husqvarna-orange rounded-full inline-block animate-pulse"></span>
                    )}
                  </h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    <ClockIcon className="w-4 h-4" />
                    <span>
                      {new Date(notification.timestamp).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </span>
                  </div>
                </div>
                <p className={`mt-3 text-base leading-relaxed ${
                  !notification.read ? 'text-gray-800 font-medium' : 'text-gray-600'
                }`}>
                  {notification.message}
                </p>
                
                {/* Action Button för marketing notifications */}
                {notification.actionLabel && notification.onAction && (
                  <div className="mt-4">
                    <button
                      onClick={notification.onAction}
                      className="inline-flex items-center px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-sm font-medium"
                    >
                      <MegaphoneIcon className="w-4 h-4 mr-2" />
                      {notification.actionLabel}
                      <ArrowRightIcon className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredNotifications.length === 0 && (
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-12 text-center border border-gray-100">
          <div className="w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-500 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <BellIcon className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">No notifications</h3>
          <p className="text-gray-600 text-lg">
            {filter === 'unread' 
              ? 'All notifications have been read'
              : 'No notifications match the current filter'
            }
          </p>
        </div>
      )}
    </div>
  );
};
