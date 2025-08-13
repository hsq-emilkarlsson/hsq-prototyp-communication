import { useState, useRef } from 'react';
import { 
  MagnifyingGlassIcon, 
  CameraIcon, 
  DocumentMagnifyingGlassIcon,
  SparklesIcon,
  PhotoIcon,
  ClipboardDocumentIcon,
  WrenchScrewdriverIcon,
  ExclamationTriangleIcon,
  ArrowPathIcon,
  CheckCircleIcon,
  EyeIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';

interface SearchResult {
  id: string;
  type: 'part' | 'manual' | 'diagram' | 'video' | 'article';
  title: string;
  description: string;
  partNumber?: string;
  category: string;
  image: string;
  confidence?: number;
  relatedParts?: string[];
  manuals?: string[];
  diagrams?: string[];
}

export function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [searchMode, setSearchMode] = useState<'text' | 'image' | 'ai'>('text');
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Sample search results för demonstration
  const sampleResults: SearchResult[] = [
    {
      id: '1',
      type: 'part',
      title: 'Cutting Disc Assembly',
      description: 'Complete cutting disc assembly for Automower 450X',
      partNumber: '967623701',
      category: 'Cutting System',
      image: '/api/placeholder/200/150',
      confidence: 95,
      relatedParts: ['967623702', '967623703'],
      manuals: ['Installation Guide', 'Maintenance Manual'],
      diagrams: ['Exploded View', 'Assembly Diagram']
    },
    {
      id: '2',
      type: 'diagram',
      title: 'Automower 450X - Cutting System Exploded View',
      description: 'Detailed exploded view showing all cutting system components',
      category: 'Technical Diagrams',
      image: '/api/placeholder/300/200',
      confidence: 92,
      relatedParts: ['967623701', '967623702', '967623703', '967623704']
    },
    {
      id: '3',
      type: 'manual',
      title: 'Cutting Disc Replacement Guide',
      description: 'Step-by-step instructions for replacing cutting discs',
      category: 'Service Manuals',
      image: '/api/placeholder/200/150',
      confidence: 88,
      relatedParts: ['967623701']
    },
    {
      id: '4',
      type: 'part',
      title: 'Motor Housing',
      description: 'Main motor housing unit for Automower 450X cutting system',
      partNumber: '967623702',
      category: 'Drive System',
      image: '/api/placeholder/200/150',
      confidence: 85,
      relatedParts: ['967623701', '967623703'],
      manuals: ['Service Manual', 'Parts Catalog']
    }
  ];

  const handleTextSearch = async () => {
    if (!searchQuery.trim()) return;
    
    setIsSearching(true);
    // Simulate AI search delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Filter results based on search query
    const filtered = sampleResults.filter(result => 
      result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      result.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      result.partNumber?.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    setSearchResults(filtered.length > 0 ? filtered : sampleResults);
    setIsSearching(false);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
        analyzeImage();
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeImage = async () => {
    setIsAnalyzing(true);
    setSearchMode('image');
    
    // Simulate AI image analysis
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Return cutting disc results for demo
    setSearchResults([
      {
        ...sampleResults[0],
        confidence: 96,
        title: 'Cutting Disc Assembly (AI Identified)',
        description: 'AI identified this as a cutting disc assembly with 96% confidence'
      },
      ...sampleResults.slice(1, 3)
    ]);
    
    setIsAnalyzing(false);
  };

  const handleAISearch = async () => {
    setIsSearching(true);
    setSearchMode('ai');
    
    // Simulate advanced AI processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setSearchResults(sampleResults);
    setIsSearching(false);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'part': return <WrenchScrewdriverIcon className="w-5 h-5" />;
      case 'manual': return <DocumentTextIcon className="w-5 h-5" />;
      case 'diagram': return <DocumentMagnifyingGlassIcon className="w-5 h-5" />;
      case 'video': return <EyeIcon className="w-5 h-5" />;
      default: return <ClipboardDocumentIcon className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'part': return 'bg-[#273A60]/10 text-[#273A60]';
      case 'manual': return 'bg-green-100 text-green-800';
      case 'diagram': return 'bg-orange-100 text-orange-800';
      case 'video': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">AI-Powered Search</h1>
        </div>

        {/* Search Interface */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          {/* Search Modes */}
          <div className="flex space-x-2 mb-6">
            <button
              onClick={() => setSearchMode('text')}
              className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                searchMode === 'text' ? 'bg-[#273A60] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <MagnifyingGlassIcon className="w-4 h-4 mr-2" />
              Text Search
            </button>
            <button
              onClick={() => setSearchMode('image')}
              className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                searchMode === 'image' ? 'bg-[#273A60] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <CameraIcon className="w-4 h-4 mr-2" />
              Image Search
            </button>
            <button
              onClick={() => setSearchMode('ai')}
              className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                searchMode === 'ai' ? 'bg-[#273A60] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <SparklesIcon className="w-4 h-4 mr-2" />
              AI Assistant
            </button>
          </div>

          {/* Text Search */}
          {searchMode === 'text' && (
            <div className="space-y-4">
              <div className="flex space-x-4">
                <div className="flex-1">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleTextSearch()}
                    placeholder="Search for parts, manuals, diagrams... (e.g., 'cutting disc', '450X motor', '967623701')"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#273A60] focus:border-transparent text-lg"
                  />
                </div>
                <button
                  onClick={handleTextSearch}
                  disabled={isSearching}
                  className="px-6 py-3 bg-[#273A60] text-white rounded-lg hover:bg-[#1f2937] disabled:bg-gray-400 transition-colors flex items-center"
                >
                  {isSearching ? (
                    <ArrowPathIcon className="w-5 h-5 animate-spin" />
                  ) : (
                    <MagnifyingGlassIcon className="w-5 h-5" />
                  )}
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-gray-500">Quick searches:</span>
                {['cutting disc', 'motor housing', '450X parts', 'sprängskiss'].map((term) => (
                  <button
                    key={term}
                    onClick={() => {setSearchQuery(term); handleTextSearch();}}
                    className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-sm transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Image Search */}
          {searchMode === 'image' && (
            <div className="space-y-4">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  accept="image/*"
                  className="hidden"
                />
                
                {uploadedImage ? (
                  <div className="space-y-4">
                    <img src={uploadedImage} alt="Uploaded" className="max-w-md mx-auto rounded-lg shadow-sm" />
                    {isAnalyzing ? (
                      <div className="flex items-center justify-center space-x-2 text-[#273A60]">
                        <ArrowPathIcon className="w-5 h-5 animate-spin" />
                        <span>AI analyzing image...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center space-x-2 text-green-600">
                        <CheckCircleIcon className="w-5 h-5" />
                        <span>Image analyzed successfully</span>
                      </div>
                    )}
                  </div>
                ) : (
                  <div>
                    <PhotoIcon className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Upload an image of a part</h3>
                    <p className="text-gray-600 mb-4">AI will identify the part and find related documentation</p>
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="px-6 py-2 bg-[#273A60] text-white rounded-lg hover:bg-[#1f2937] transition-colors"
                    >
                      Choose Image
                    </button>
                  </div>
                )}
              </div>
              
              <div className="bg-[#273A60]/10 rounded-lg p-4">
                <div className="flex items-start">
                  <ExclamationTriangleIcon className="w-5 h-5 text-[#273A60] mt-0.5 mr-3" />
                  <div>
                    <h4 className="font-medium text-[#273A60]">AI Image Recognition Tips</h4>
                    <ul className="text-gray-700 text-sm mt-1 space-y-1">
                      <li>• Take clear, well-lit photos</li>
                      <li>• Include part numbers if visible</li>
                      <li>• Multiple angles improve accuracy</li>
                      <li>• Works best with isolated parts</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* AI Assistant */}
          {searchMode === 'ai' && (
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-[#273A60]/10 to-orange-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <SparklesIcon className="w-6 h-6 text-[#273A60] mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900">AI Search Assistant</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Describe what you're looking for in natural language. I can help you find parts, 
                  troubleshoot issues, or locate specific documentation.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button
                    onClick={handleAISearch}
                    className="p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-all text-left"
                  >
                    <h4 className="font-medium text-gray-900 mb-1">Find cutting system parts</h4>
                    <p className="text-sm text-gray-600">Show me all parts related to the cutting system</p>
                  </button>
                  <button
                    onClick={handleAISearch}
                    className="p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-all text-left"
                  >
                    <h4 className="font-medium text-gray-900 mb-1">Motor troubleshooting</h4>
                    <p className="text-sm text-gray-600">Help me diagnose motor-related issues</p>
                  </button>
                  <button
                    onClick={handleAISearch}
                    className="p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-all text-left"
                  >
                    <h4 className="font-medium text-gray-900 mb-1">Automower 450X manual</h4>
                    <p className="text-sm text-gray-600">Find service documentation for 450X</p>
                  </button>
                  <button
                    onClick={handleAISearch}
                    className="p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-all text-left"
                  >
                    <h4 className="font-medium text-gray-900 mb-1">Part compatibility</h4>
                    <p className="text-sm text-gray-600">Check which parts work with my model</p>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Search Results */}
        {searchResults.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">
                Search Results ({searchResults.length})
              </h2>
              {searchMode === 'image' && (
                <div className="text-sm text-gray-600">
                  Sorted by AI confidence
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {searchResults.map((result) => (
                <div key={result.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${getTypeColor(result.type)}`}>
                          {getTypeIcon(result.type)}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{result.title}</h3>
                          {result.partNumber && (
                            <p className="text-sm text-gray-600">Part #: {result.partNumber}</p>
                          )}
                        </div>
                      </div>
                      {result.confidence && (
                        <div className="text-right">
                          <div className="text-sm font-medium text-green-600">{result.confidence}% match</div>
                          <div className="w-16 bg-gray-200 rounded-full h-1.5 mt-1">
                            <div 
                              className="bg-green-600 h-1.5 rounded-full" 
                              style={{ width: `${result.confidence}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                    </div>

                    <p className="text-gray-600 mb-4">{result.description}</p>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Category:</span>
                        <span className="font-medium text-gray-900">{result.category}</span>
                      </div>

                      {result.relatedParts && result.relatedParts.length > 0 && (
                        <div>
                          <span className="text-sm text-gray-500 block mb-1">Related Parts:</span>
                          <div className="flex flex-wrap gap-1">
                            {result.relatedParts.map((part) => (
                              <span key={part} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                                {part}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {(result.manuals || result.diagrams) && (
                        <div className="border-t pt-3">
                          <div className="grid grid-cols-2 gap-4">
                            {result.manuals && (
                              <div>
                                <span className="text-sm font-medium text-gray-700 block mb-1">Manuals:</span>
                                {result.manuals.map((manual) => (
                                  <button
                                    key={manual}
                                    className="block text-sm text-[#273A60] hover:text-[#1f2937] transition-colors"
                                  >
                                    {manual}
                                  </button>
                                ))}
                              </div>
                            )}
                            {result.diagrams && (
                              <div>
                                <span className="text-sm font-medium text-gray-700 block mb-1">Diagrams:</span>
                                {result.diagrams.map((diagram) => (
                                  <button
                                    key={diagram}
                                    className="block text-sm text-[#273A60] hover:text-[#1f2937] transition-colors"
                                  >
                                    {diagram}
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* No Results State */}
        {searchResults.length === 0 && (searchQuery || uploadedImage) && !isSearching && !isAnalyzing && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
            <MagnifyingGlassIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
            <p className="text-gray-600">Try adjusting your search terms or using a different search method.</p>
          </div>
        )}

        {/* Quick Access */}
        {searchResults.length === 0 && !searchQuery && !uploadedImage && (
          <div className="bg-gradient-to-r from-gray-50 to-[#273A60]/10 rounded-xl p-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Searches</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { term: 'Cutting discs', count: '156 parts' },
                { term: 'Motor parts', count: '89 parts' },
                { term: 'Battery system', count: '67 parts' },
                { term: 'Wheel assemblies', count: '45 parts' },
                { term: 'Sensors', count: '78 parts' },
                { term: 'Circuit boards', count: '34 parts' },
                { term: 'Housing parts', count: '123 parts' },
                { term: 'Service manuals', count: '245 docs' }
              ].map((item) => (
                <button
                  key={item.term}
                  onClick={() => {setSearchQuery(item.term); setSearchMode('text'); handleTextSearch();}}
                  className="p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-all text-left"
                >
                  <div className="font-medium text-gray-900">{item.term}</div>
                  <div className="text-sm text-gray-600">{item.count}</div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
