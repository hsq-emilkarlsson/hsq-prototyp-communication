import { useState } from 'react';
import { 
  ClipboardDocumentCheckIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ClockIcon,
  TruckIcon,
  ArrowPathIcon,
  XCircleIcon,
  EyeIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';

interface Order {
  id: string;
  orderNumber: string;
  type: 'service-request' | 'placed' | 'received' | 'returned';
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'returned' | 'cancelled';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  customer: string;
  technician?: string;
  items: OrderItem[];
  total: number;
  orderDate: string;
  expectedDelivery?: string;
  deliveryDate?: string;
  returnReason?: string;
  serviceTicket?: string;
  source: 'ServiceHub' | 'Butik' | 'Lager' | 'Medarbetare';
}

interface OrderItem {
  partNumber: string;
  description: string;
  quantity: number;
  unitPrice: number;
  category: string;
}

export function OrdersPage() {
  const [activeTab, setActiveTab] = useState<'suggestions' | 'placed' | 'received' | 'returned'>('suggestions');

  // Sample data for demonstration
  const orderSuggestions: Order[] = [
    {
      id: '1',
      orderNumber: 'SR-2025-0156',
      type: 'service-request',
      status: 'pending',
      priority: 'high',
      customer: 'Swedish Motors AB',
      technician: 'Erik Tekniker',
      serviceTicket: 'TICKET-2025-1199',
      source: 'ServiceHub',
      items: [
        { partNumber: '967623701', description: 'Cutting Disc Assembly', quantity: 2, unitPrice: 890, category: 'Cutting System' },
        { partNumber: '967623702', description: 'Motor Housing', quantity: 1, unitPrice: 2450, category: 'Drive System' }
      ],
      total: 4230,
      orderDate: '2025-08-12T09:15:00Z',
      expectedDelivery: '2025-08-15T12:00:00Z'
    },
    {
      id: '2',
      orderNumber: 'SR-2025-0157',
      type: 'service-request',
      status: 'pending',
      priority: 'medium',
      customer: 'Automower Service Stockholm',
      technician: 'Anna Tekniker',
      serviceTicket: 'TICKET-2025-1203',
      source: 'ServiceHub',
      items: [
        { partNumber: '967623703', description: 'Battery Pack', quantity: 1, unitPrice: 3200, category: 'Power System' },
        { partNumber: '967623704', description: 'Wheel Assembly', quantity: 2, unitPrice: 650, category: 'Drive System' }
      ],
      total: 4500,
      orderDate: '2025-08-12T08:30:00Z',
      expectedDelivery: '2025-08-14T15:00:00Z'
    },
    {
      id: '3',
      orderNumber: 'SR-2025-0158',
      type: 'service-request',
      status: 'pending',
      priority: 'urgent',
      customer: 'Beijer Byggmaterial',
      technician: 'Lars Tekniker',
      serviceTicket: 'TICKET-2025-1205',
      source: 'Medarbetare',
      items: [
        { partNumber: '967623705', description: 'Control Board', quantity: 1, unitPrice: 1890, category: 'Electronics' }
      ],
      total: 1890,
      orderDate: '2025-08-12T10:45:00Z',
      expectedDelivery: '2025-08-13T10:00:00Z'
    }
  ];

  const placedOrders: Order[] = [
    {
      id: '4',
      orderNumber: 'ORD-2025-0234',
      type: 'placed',
      status: 'processing',
      priority: 'medium',
      customer: 'Garden Center Malmö',
      source: 'Butik',
      items: [
        { partNumber: '967623706', description: 'Sensor Kit', quantity: 3, unitPrice: 450, category: 'Electronics' },
        { partNumber: '967623707', description: 'Cable Assembly', quantity: 5, unitPrice: 180, category: 'Electronics' }
      ],
      total: 2250,
      orderDate: '2025-08-10T14:20:00Z',
      expectedDelivery: '2025-08-13T16:00:00Z'
    },
    {
      id: '5',
      orderNumber: 'ORD-2025-0235',
      type: 'placed',
      status: 'shipped',
      priority: 'high',
      customer: 'Service Partner Gothenburg',
      source: 'Lager',
      items: [
        { partNumber: '967623708', description: 'Chassis Assembly', quantity: 1, unitPrice: 4500, category: 'Frame' }
      ],
      total: 4500,
      orderDate: '2025-08-09T11:15:00Z',
      expectedDelivery: '2025-08-12T14:00:00Z'
    }
  ];

  const receivedOrders: Order[] = [
    {
      id: '6',
      orderNumber: 'ORD-2025-0230',
      type: 'received',
      status: 'delivered',
      priority: 'medium',
      customer: 'Husqvarna Store Solna',
      source: 'Butik',
      items: [
        { partNumber: '967623709', description: 'Display Unit', quantity: 2, unitPrice: 890, category: 'Electronics' },
        { partNumber: '967623710', description: 'Button Panel', quantity: 2, unitPrice: 320, category: 'User Interface' }
      ],
      total: 2420,
      orderDate: '2025-08-05T09:30:00Z',
      deliveryDate: '2025-08-08T13:45:00Z'
    },
    {
      id: '7',
      orderNumber: 'ORD-2025-0228',
      type: 'received',
      status: 'delivered',
      priority: 'low',
      customer: 'Garden Pro AB',
      source: 'Lager',
      items: [
        { partNumber: '967623711', description: 'Rubber Bumpers', quantity: 10, unitPrice: 45, category: 'Accessories' }
      ],
      total: 450,
      orderDate: '2025-08-03T16:00:00Z',
      deliveryDate: '2025-08-07T10:20:00Z'
    }
  ];

  const returnedOrders: Order[] = [
    {
      id: '8',
      orderNumber: 'RET-2025-0012',
      type: 'returned',
      status: 'returned',
      priority: 'medium',
      customer: 'Workshop Uppsala',
      source: 'ServiceHub',
      items: [
        { partNumber: '967623712', description: 'Defective Motor', quantity: 1, unitPrice: 2800, category: 'Drive System' }
      ],
      total: 2800,
      orderDate: '2025-07-28T12:00:00Z',
      deliveryDate: '2025-07-31T09:00:00Z',
      returnReason: 'Defective upon arrival - manufacturing fault'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return <ClockIcon className="w-5 h-5 text-yellow-600" />;
      case 'processing': return <ArrowPathIcon className="w-5 h-5 text-blue-600" />;
      case 'shipped': return <TruckIcon className="w-5 h-5 text-purple-600" />;
      case 'delivered': return <CheckCircleIcon className="w-5 h-5 text-green-600" />;
      case 'returned': return <XCircleIcon className="w-5 h-5 text-red-600" />;
      case 'cancelled': return <XCircleIcon className="w-5 h-5 text-gray-600" />;
      default: return <ClockIcon className="w-5 h-5 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'processing': return 'bg-blue-100 text-blue-800';
      case 'shipped': return 'bg-purple-100 text-purple-800';
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'returned': return 'bg-red-100 text-red-800';
      case 'cancelled': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getSourceColor = (source: string) => {
    switch (source) {
      case 'ServiceHub': return 'bg-[#273A60] text-white';
      case 'Butik': return 'bg-orange-100 text-orange-800';
      case 'Lager': return 'bg-blue-100 text-blue-800';
      case 'Medarbetare': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'bg-red-100 text-red-800 border-red-200';
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('sv-SE', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('sv-SE', { style: 'currency', currency: 'SEK' }).format(amount);
  };

  const getCurrentOrders = () => {
    switch (activeTab) {
      case 'suggestions': return orderSuggestions;
      case 'placed': return placedOrders;
      case 'received': return receivedOrders;
      case 'returned': return returnedOrders;
      default: return [];
    }
  };

  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Order Management</h1>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-2 bg-[#273A60]/10 rounded-lg">
                <ExclamationTriangleIcon className="w-6 h-6 text-[#273A60]" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Shopping Cart</p>
                <p className="text-2xl font-bold text-gray-900">{orderSuggestions.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-2 bg-[#273A60]/10 rounded-lg">
                <ArrowPathIcon className="w-6 h-6 text-[#273A60]" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Active Orders</p>
                <p className="text-2xl font-bold text-gray-900">{placedOrders.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-2 bg-green-50 rounded-lg">
                <CheckCircleIcon className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Delivered</p>
                <p className="text-2xl font-bold text-gray-900">{receivedOrders.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-2 bg-red-50 rounded-lg">
                <XCircleIcon className="w-6 h-6 text-red-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Returns</p>
                <p className="text-2xl font-bold text-gray-900">{returnedOrders.length}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'suggestions', label: 'Shopping Cart', count: orderSuggestions.length },
                { id: 'placed', label: 'Placed Orders', count: placedOrders.length },
                { id: 'received', label: 'Received Orders', count: receivedOrders.length },
                { id: 'returned', label: 'Returns', count: returnedOrders.length }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-[#273A60] text-[#273A60]'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label} ({tab.count})
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'suggestions' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Shopping Cart</h3>
                  <div className="text-sm text-gray-600">
                    Items from different sources
                  </div>
                </div>
                <div className="bg-[#273A60]/10 rounded-lg p-4 mb-6">
                  <div className="flex items-start">
                    <WrenchScrewdriverIcon className="w-5 h-5 text-[#273A60] mt-0.5 mr-3" />
                    <div>
                      <h4 className="font-medium text-[#273A60]">Article Requests</h4>
                      <p className="text-gray-800 text-sm mt-1">
                        Items from ServiceHub, store staff, warehouse and employees.
                        Add to order to continue.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {getCurrentOrders().length === 0 ? (
              <div className="text-center py-12">
                <ClipboardDocumentCheckIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No orders found</h3>
                <p className="text-gray-600">No orders in this category at the moment.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {getCurrentOrders().map((order) => (
                  <div key={order.id} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-4">
                        <div className="flex items-center space-x-2">
                          {getStatusIcon(order.status)}
                          <div>
                            <h3 className="font-semibold text-gray-900">{order.orderNumber}</h3>
                            <p className="text-sm text-gray-600">{order.customer}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getSourceColor(order.source)}`}>
                          {order.source}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getPriorityColor(order.priority)}`}>
                          {order.priority.toUpperCase()}
                        </span>
                        {activeTab !== 'placed' && (
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                            {order.status.replace('-', ' ').toUpperCase()}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Order Details */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      {/* Items */}
                      <div className="lg:col-span-2">
                        <h4 className="font-medium text-gray-900 mb-3">Order Items</h4>
                        <div className="space-y-2">
                          {order.items.map((item, index) => (
                            <div key={index} className="flex items-center justify-between py-2 px-3 bg-white rounded-lg">
                              <div>
                                <p className="font-medium text-gray-900">{item.description}</p>
                                <p className="text-sm text-gray-600">Part #{item.partNumber} • {item.category}</p>
                              </div>
                              <div className="text-right">
                                <p className="font-medium text-gray-900">{item.quantity}x {formatCurrency(item.unitPrice)}</p>
                                <p className="text-sm text-gray-600">{formatCurrency(item.quantity * item.unitPrice)}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Order Info */}
                      <div className="space-y-4">
                        <div className="bg-white rounded-lg p-4">
                          <h4 className="font-medium text-gray-900 mb-3">Order Information</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Total:</span>
                              <span className="font-medium text-gray-900">{formatCurrency(order.total)}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Order Date:</span>
                              <span className="text-gray-900">{formatDate(order.orderDate)}</span>
                            </div>
                            {order.expectedDelivery && (
                              <div className="flex justify-between">
                                <span className="text-gray-600">Expected:</span>
                                <span className="text-gray-900">{formatDate(order.expectedDelivery)}</span>
                              </div>
                            )}
                            {order.deliveryDate && (
                              <div className="flex justify-between">
                                <span className="text-gray-600">Delivered:</span>
                                <span className="text-gray-900">{formatDate(order.deliveryDate)}</span>
                              </div>
                            )}
                            {order.technician && (
                              <div className="flex justify-between">
                                <span className="text-gray-600">Technician:</span>
                                <span className="text-gray-900">{order.technician}</span>
                              </div>
                            )}
                            {order.serviceTicket && (
                              <div className="flex justify-between">
                                <span className="text-gray-600">Service Ticket:</span>
                                <span className="text-blue-600">{order.serviceTicket}</span>
                              </div>
                            )}
                            {order.returnReason && (
                              <div className="pt-2 border-t">
                                <span className="text-gray-600 block mb-1">Return Reason:</span>
                                <span className="text-red-700 text-xs">{order.returnReason}</span>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex space-x-2">
                          {order.type === 'service-request' && (
                            <>
                              <button className="flex-1 bg-[#273A60] text-white py-2 px-4 rounded-lg hover:bg-[#1f2937] transition-colors text-sm font-medium">
                                Add to Order
                              </button>
                              <button className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
                                <EyeIcon className="w-4 h-4" />
                              </button>
                            </>
                          )}
                          {order.type === 'placed' && (
                            <button className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium">
                              Track Order
                            </button>
                          )}
                          {order.type === 'received' && (
                            <button className="flex-1 bg-green-100 text-green-700 py-2 px-4 rounded-lg hover:bg-green-200 transition-colors text-sm font-medium">
                              View Receipt
                            </button>
                          )}
                          {order.type === 'returned' && (
                            <button className="flex-1 bg-red-100 text-red-700 py-2 px-4 rounded-lg hover:bg-red-200 transition-colors text-sm font-medium">
                              Process Return
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
