import React, { useState } from 'react';
import { 
  DocumentTextIcon, 
  PencilSquareIcon, 
  CheckCircleIcon, 
  ClockIcon,
  ExclamationTriangleIcon,
  EyeIcon,
  ArrowDownTrayIcon
} from '@heroicons/react/24/outline';

interface Contract {
  id: string;
  title: string;
  type: 'dealer_agreement' | 'service_contract' | 'warranty_extension' | 'training_agreement';
  status: 'active' | 'pending_signature' | 'expired' | 'draft';
  startDate: string;
  endDate: string;
  lastUpdated: string;
  signedDate?: string;
  requiresUpdate?: boolean;
  description: string;
  value?: number;
}

// Mock data for contracts
const mockContracts: Contract[] = [
  {
    id: 'DA-2024-001',
    title: 'Husqvarna Dealer License 2024',
    type: 'dealer_agreement',
    status: 'active',
    startDate: '2024-01-01',
    endDate: '2024-12-31',
    lastUpdated: '2024-01-15',
    signedDate: '2024-01-15',
    description: 'Main agreement for Husqvarna dealership with updated terms for 2024'
  },
  {
    id: 'SC-2024-002',
    title: 'Service & Support Agreement Premium',
    type: 'service_contract',
    status: 'active',
    startDate: '2024-03-01',
    endDate: '2025-02-28',
    lastUpdated: '2024-03-01',
    signedDate: '2024-03-01',
    description: 'Premium service and support for all Husqvarna products',
    value: 25000
  },
  {
    id: 'DA-2025-001',
    title: 'Husqvarna Dealer License 2025',
    type: 'dealer_agreement',
    status: 'pending_signature',
    startDate: '2025-01-01',
    endDate: '2025-12-31',
    lastUpdated: '2024-12-01',
    requiresUpdate: true,
    description: 'Updated dealer agreement with new terms for 2025 - Requires digital signature'
  },
  {
    id: 'TA-2024-003',
    title: 'Training Agreement Automower',
    type: 'training_agreement',
    status: 'active',
    startDate: '2024-06-01',
    endDate: '2025-05-31',
    lastUpdated: '2024-06-01',
    signedDate: '2024-06-01',
    description: 'Certification and training for Automower products'
  },
  {
    id: 'WE-2024-004',
    title: 'Garantiförlängning Paket',
    type: 'warranty_extension',
    status: 'expired',
    startDate: '2023-01-01',
    endDate: '2024-01-01',
    lastUpdated: '2023-01-01',
    signedDate: '2023-01-01',
    description: 'Extended warranty for selected product categories'
  }
];

const ContractsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'active' | 'pending' | 'all'>('active');
  const [selectedContract, setSelectedContract] = useState<Contract | null>(null);
  const [showSigningModal, setShowSigningModal] = useState(false);

  // Filter contracts based on active tab
  const filteredContracts = mockContracts.filter(contract => {
    switch (activeTab) {
      case 'active':
        return contract.status === 'active';
      case 'pending':
        return contract.status === 'pending_signature' || contract.requiresUpdate;
      case 'all':
      default:
        return true;
    }
  });

  const getStatusColor = (status: Contract['status']) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'pending_signature':
        return 'bg-yellow-100 text-yellow-800';
      case 'expired':
        return 'bg-red-100 text-red-800';
      case 'draft':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: Contract['status']) => {
    switch (status) {
      case 'active':
        return <CheckCircleIcon className="h-4 w-4" />;
      case 'pending_signature':
        return <ClockIcon className="h-4 w-4" />;
      case 'expired':
        return <ExclamationTriangleIcon className="h-4 w-4" />;
      case 'draft':
        return <PencilSquareIcon className="h-4 w-4" />;
      default:
        return <DocumentTextIcon className="h-4 w-4" />;
    }
  };

  const getTypeLabel = (type: Contract['type']) => {
    switch (type) {
      case 'dealer_agreement':
        return 'Dealer Agreement';
      case 'service_contract':
        return 'Service Contract';
      case 'warranty_extension':
        return 'Warranty Extension';
      case 'training_agreement':
        return 'Training Agreement';
      default:
        return 'Contract';
    }
  };

  const handleSignContract = (contract: Contract) => {
    setSelectedContract(contract);
    setShowSigningModal(true);
  };

  const handleDigitalSignature = () => {
    // Simulate digital signing
    setTimeout(() => {
      setShowSigningModal(false);
      setSelectedContract(null);
      // Here we would update the contract in backend
      alert('Contract has been digitally signed!');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Contracts</h1>
              <p className="text-gray-600 mt-1">Manage your contracts and agreements with Husqvarna</p>
            </div>
            
            {/* Notification for pending signatures */}
            {mockContracts.some(c => c.status === 'pending_signature' || c.requiresUpdate) && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-center">
                  <ExclamationTriangleIcon className="h-5 w-5 text-yellow-400 mr-2" />
                  <span className="text-sm font-medium text-yellow-800">
                    {mockContracts.filter(c => c.status === 'pending_signature' || c.requiresUpdate).length} contracts waiting for signature
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Tabs */}
          <div className="mt-6">
            <nav className="flex space-x-8">
              {[
                { key: 'active', label: 'Active Contracts', count: mockContracts.filter(c => c.status === 'active').length },
                { key: 'pending', label: 'Pending Signature', count: mockContracts.filter(c => c.status === 'pending_signature' || c.requiresUpdate).length },
                { key: 'all', label: 'All Contracts', count: mockContracts.length }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as any)}
                  className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.key
                      ? 'border-[#273A60] text-[#273A60]'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                  <span className="ml-2 bg-gray-100 text-gray-600 py-0.5 px-2 rounded-full text-xs">
                    {tab.count}
                  </span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="space-y-6">
          {filteredContracts.map((contract) => (
            <div key={contract.id} className="bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{contract.title}</h3>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(contract.status)}`}>
                        {getStatusIcon(contract.status)}
                        <span className="ml-1">
                          {contract.status === 'active' ? 'Aktivt' :
                           contract.status === 'pending_signature' ? 'Väntar signatur' :
                           contract.status === 'expired' ? 'Utgånget' : 'Utkast'}
                        </span>
                      </span>
                      {contract.requiresUpdate && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                          <ExclamationTriangleIcon className="h-3 w-3 mr-1" />
                          Kräver uppdatering
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-6 text-sm text-gray-600 mb-3">
                      <span>
                        <strong>Type:</strong> {getTypeLabel(contract.type)}
                      </span>
                      <span>
                        <strong>Contract ID:</strong> {contract.id}
                      </span>
                      <span>
                        <strong>Valid:</strong> {new Date(contract.startDate).toLocaleDateString('en-US')} - {new Date(contract.endDate).toLocaleDateString('en-US')}
                      </span>
                      {contract.value && (
                        <span>
                          <strong>Value:</strong> {contract.value.toLocaleString('en-US')} SEK
                        </span>
                      )}
                    </div>

                    <p className="text-gray-700 mb-4">{contract.description}</p>

                    <div className="text-xs text-gray-500">
                      Last updated: {new Date(contract.lastUpdated).toLocaleDateString('en-US')}
                      {contract.signedDate && (
                        <> • Signed: {new Date(contract.signedDate).toLocaleDateString('en-US')}</>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 ml-6">
                    <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                      <EyeIcon className="h-4 w-4 mr-1" />
                      View
                    </button>
                    
                    <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                      <ArrowDownTrayIcon className="h-4 w-4 mr-1" />
                      Ladda ner
                    </button>

                    {(contract.status === 'pending_signature' || contract.requiresUpdate) && (
                      <button
                        onClick={() => handleSignContract(contract)}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#273A60] hover:bg-[#1e2b4f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#273A60]"
                      >
                        <PencilSquareIcon className="h-4 w-4 mr-1" />
                        Signera Digitalt
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {filteredContracts.length === 0 && (
            <div className="text-center py-12">
              <DocumentTextIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No contracts found</h3>
              <p className="text-gray-600">
                {activeTab === 'active' ? 'You have no active contracts at the moment.' :
                 activeTab === 'pending' ? 'No contracts are waiting for signature.' :
                 'No contracts are registered.'}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Digital Signering Modal */}
      {showSigningModal && selectedContract && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <div className="flex items-center justify-center w-12 h-12 mx-auto bg-orange-100 rounded-full mb-4">
                <PencilSquareIcon className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 text-center mb-4">
                Digital Signering
              </h3>
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Avtal:</strong> {selectedContract.title}
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  Du kommer att signera detta avtal digitalt med BankID.
                </p>
                <div className="bg-yellow-50 border border-yellow-200 rounded-md p-3">
                  <div className="flex">
                    <ExclamationTriangleIcon className="h-5 w-5 text-yellow-400 mr-2 mt-0.5" />
                    <div className="text-sm text-yellow-800">
                      Genom att signera detta avtal accepterar du alla villkor och bestämmelser.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowSigningModal(false)}
                  className="flex-1 px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
                >
                  Avbryt
                </button>
                <button
                  onClick={handleDigitalSignature}
                  className="flex-1 px-4 py-2 bg-[#273A60] text-white rounded-md hover:bg-[#1e2b4f] focus:outline-none focus:ring-2 focus:ring-[#273A60]"
                >
                  Signera med BankID
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContractsPage;
