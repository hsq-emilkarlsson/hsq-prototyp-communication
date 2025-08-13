import { useState } from 'react';
import { 
  ClipboardDocumentListIcon,
  PlusIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ClockIcon,
  ComputerDesktopIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';

interface SupportCase {
  id: string;
  title: string;
  description: string;
  status: 'open' | 'in-progress' | 'waiting' | 'resolved';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  category: string;
  createdDate: string;
  lastUpdated: string;
  assignedTo?: string;
  caseNumber: string;
}

interface SystemService {
  name: string;
  status: 'operational' | 'degraded' | 'outage';
  uptime: string;
  lastUpdate: string;
}

export function SupportPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'create' | 'system'>('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedPriority, setSelectedPriority] = useState<string>('all');

  // Sample support cases
  const supportCases: SupportCase[] = [
    {
      id: '1',
      title: 'Automower GPS connectivity issues',
      description: 'Customer reports intermittent GPS connectivity on Automower 450X',
      status: 'in-progress',
      priority: 'high',
      category: 'Technical Support',
      createdDate: '2025-08-10',
      lastUpdated: '2025-08-12',
      assignedTo: 'Johan Andersson',
      caseNumber: 'HSQ-2025-0156'
    },
    {
      id: '2',
      title: 'Warranty claim for Chainsaw 550 XP',
      description: 'Defective carburetor after 6 months of use',
      status: 'waiting',
      priority: 'medium',
      category: 'Warranty',
      createdDate: '2025-08-08',
      lastUpdated: '2025-08-11',
      assignedTo: 'Maria Lindström',
      caseNumber: 'HSQ-2025-0142'
    },
    {
      id: '3',
      title: 'Product registration assistance',
      description: 'Help needed with bulk product registration for fleet order',
      status: 'open',
      priority: 'low',
      category: 'General Support',
      createdDate: '2025-08-12',
      lastUpdated: '2025-08-12',
      caseNumber: 'HSQ-2025-0167'
    },
    {
      id: '4',
      title: 'Training material access issue',
      description: 'Cannot access advanced service training videos',
      status: 'resolved',
      priority: 'medium',
      category: 'Training',
      createdDate: '2025-08-05',
      lastUpdated: '2025-08-09',
      assignedTo: 'Erik Johansson',
      caseNumber: 'HSQ-2025-0134'
    }
  ];

  // System status data
  const systemServices: SystemService[] = [
    {
      name: 'Customer Portal',
      status: 'operational',
      uptime: '99.9%',
      lastUpdate: '2025-08-12 14:30'
    },
    {
      name: 'Product Registration API',
      status: 'operational',
      uptime: '99.8%',
      lastUpdate: '2025-08-12 14:25'
    },
    {
      name: 'Training Platform',
      status: 'degraded',
      uptime: '95.2%',
      lastUpdate: '2025-08-12 13:45'
    },
    {
      name: 'Support Portal',
      status: 'operational',
      uptime: '100%',
      lastUpdate: '2025-08-12 14:30'
    },
    {
      name: 'Parts Ordering System',
      status: 'operational',
      uptime: '99.7%',
      lastUpdate: '2025-08-12 14:20'
    }
  ];

  const getStatusColor = (status: SupportCase['status']) => {
    switch (status) {
      case 'open': return 'bg-red-100 text-red-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      case 'waiting': return 'bg-yellow-100 text-yellow-800';
      case 'resolved': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: SupportCase['priority']) => {
    switch (priority) {
      case 'urgent': return 'bg-red-600 text-white';
      case 'high': return 'bg-orange-100 text-orange-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getSystemStatusColor = (status: SystemService['status']) => {
    switch (status) {
      case 'operational': return 'text-green-600';
      case 'degraded': return 'text-yellow-600';
      case 'outage': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getSystemStatusIcon = (status: SystemService['status']) => {
    switch (status) {
      case 'operational': return CheckCircleIcon;
      case 'degraded': return ExclamationTriangleIcon;
      case 'outage': return ExclamationTriangleIcon;
      default: return ClockIcon;
    }
  };

  const filteredCases = supportCases.filter(case_ => {
    const matchesSearch = case_.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         case_.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         case_.caseNumber.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || case_.status === selectedStatus;
    const matchesPriority = selectedPriority === 'all' || case_.priority === selectedPriority;
    
    return matchesSearch && matchesStatus && matchesPriority;
  });

  const openCases = supportCases.filter(c => c.status !== 'resolved').length;
  const urgentCases = supportCases.filter(c => c.priority === 'urgent').length;
  const avgResponseTime = '2.4 hours';

  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Support Center</h1>
          <p className="text-gray-600">Manage support cases, create new tickets, and monitor system status</p>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            {[
              { id: 'overview', label: 'Overview', icon: ClipboardDocumentListIcon },
              { id: 'create', label: 'Create Case', icon: PlusIcon },
              { id: 'system', label: 'System Status', icon: ComputerDesktopIcon }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-2 px-1 border-b-2 font-medium text-sm flex items-center ${
                  activeTab === tab.id
                    ? 'border-[#273A60] text-[#273A60]'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon className="w-4 h-4 inline mr-2" />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center">
                  <div className="p-2 bg-[#273A60]/10 rounded-lg">
                    <ClipboardDocumentListIcon className="w-6 h-6 text-[#273A60]" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Open Cases</p>
                    <p className="text-2xl font-bold text-gray-900">{openCases}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center">
                  <div className="p-2 bg-[#273A60]/10 rounded-lg">
                    <ExclamationTriangleIcon className="w-6 h-6 text-[#273A60]" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Urgent Cases</p>
                    <p className="text-2xl font-bold text-gray-900">{urgentCases}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center">
                  <div className="p-2 bg-[#273A60]/10 rounded-lg">
                    <ClockIcon className="w-6 h-6 text-[#273A60]" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Avg Response Time</p>
                    <p className="text-2xl font-bold text-gray-900">{avgResponseTime}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Search and Filters */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                  <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search cases by title, description, or case number..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#273A60] focus:border-transparent"
                  />
                </div>
                <div className="flex gap-2">
                  <select
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#273A60] focus:border-transparent"
                  >
                    <option value="all">All Status</option>
                    <option value="open">Open</option>
                    <option value="in-progress">In Progress</option>
                    <option value="waiting">Waiting</option>
                    <option value="resolved">Resolved</option>
                  </select>
                  <select
                    value={selectedPriority}
                    onChange={(e) => setSelectedPriority(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#273A60] focus:border-transparent"
                  >
                    <option value="all">All Priority</option>
                    <option value="urgent">Urgent</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                </div>
              </div>

              {/* Cases List */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Your Support Cases</h3>
                {filteredCases.length === 0 ? (
                  <div className="text-center py-8">
                    <ClipboardDocumentListIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">No cases found matching your filters</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {filteredCases.map((case_) => (
                      <div key={case_.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h4 className="font-medium text-gray-900">{case_.title}</h4>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(case_.status)}`}>
                                {case_.status.replace('-', ' ')}
                              </span>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(case_.priority)}`}>
                                {case_.priority}
                              </span>
                            </div>
                            <p className="text-gray-600 text-sm mb-2">{case_.description}</p>
                            <div className="flex items-center gap-4 text-xs text-gray-500">
                              <span>Case: {case_.caseNumber}</span>
                              <span>Category: {case_.category}</span>
                              <span>Created: {case_.createdDate}</span>
                              {case_.assignedTo && <span>Assigned: {case_.assignedTo}</span>}
                            </div>
                          </div>
                          <div className="ml-4">
                            <button className="bg-[#273A60] text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors">
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Create Case Tab */}
        {activeTab === 'create' && (
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Create New Support Case</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Case Title *
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#273A60] focus:border-transparent"
                    placeholder="Brief description of the issue"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#273A60] focus:border-transparent">
                    <option value="">Select category</option>
                    <option value="technical">Technical Support</option>
                    <option value="warranty">Warranty</option>
                    <option value="general">General Support</option>
                    <option value="training">Training</option>
                    <option value="billing">Billing</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Priority *
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#273A60] focus:border-transparent">
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                    <option value="urgent">Urgent</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Product Model
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#273A60] focus:border-transparent"
                    placeholder="e.g., Automower 450X"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description *
                </label>
                <textarea
                  rows={5}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#273A60] focus:border-transparent"
                  placeholder="Detailed description of the issue or request"
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Attachments
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <p className="text-gray-500">Drag and drop files here, or click to select</p>
                  <p className="text-sm text-gray-400 mt-2">Supported formats: PDF, DOCX, PNG, JPG (max 10MB)</p>
                </div>
              </div>
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Save as Draft
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#273A60] text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Submit Case
                </button>
              </div>
            </form>
          </div>
        )}

        {/* System Status Tab */}
        {activeTab === 'system' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">System Status Overview</h2>
              <div className="space-y-4">
                {systemServices.map((service, index) => {
                  const StatusIcon = getSystemStatusIcon(service.status);
                  return (
                    <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center">
                        <StatusIcon className={`w-5 h-5 mr-3 ${getSystemStatusColor(service.status)}`} />
                        <div>
                          <h3 className="font-medium text-gray-900">{service.name}</h3>
                          <p className="text-sm text-gray-500">Last updated: {service.lastUpdate}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`font-medium capitalize ${getSystemStatusColor(service.status)}`}>
                          {service.status}
                        </p>
                        <p className="text-sm text-gray-500">Uptime: {service.uptime}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Incidents</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-yellow-400 pl-4">
                  <p className="font-medium text-gray-900">Training Platform Performance Issues</p>
                  <p className="text-sm text-gray-600">Investigating slow loading times for video content</p>
                  <p className="text-xs text-gray-500">Started: Aug 12, 2025 at 13:45 CET</p>
                </div>
                <div className="border-l-4 border-green-400 pl-4">
                  <p className="font-medium text-gray-900">Scheduled Maintenance Complete</p>
                  <p className="text-sm text-gray-600">Product Registration API maintenance completed successfully</p>
                  <p className="text-xs text-gray-500">Completed: Aug 10, 2025 at 06:00 CET</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
