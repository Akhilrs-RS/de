import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMedia } from '../../context/MediaContext';
import marvicLogo from '../../assets/marvic.png';

const PAGE_TABS = [
  { id: 'all', label: 'All Pages' },
  { id: 'home', label: 'Home Page' },
  { id: 'our-story', label: 'Our Story' },
  { id: 'services', label: 'Services (13)' },
  { id: 'clinic-tour', label: 'Clinic Tour' },
  { id: 'treatments', label: 'Treatments' },
  { id: 'book-appointment', label: 'Book Appointment' },
  { id: 'contact', label: 'Contact' }
];

export default function AdminDashboard({ user, onLogout }) {
  const { mediaList, loading, uploadImage, resetImage, refreshMedia } = useMedia();
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [uploadingId, setUploadingId] = useState(null);
  const [resettingId, setResettingId] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState({}); // slotId -> File
  const [previewUrls, setPreviewUrls] = useState({}); // slotId -> objectURL
  const [toast, setToast] = useState(null); // { type: 'success' | 'error', message: '' }

  const [mainView, setMainView] = useState('media'); // 'media', 'appointments', 'messages'
  const [appointments, setAppointments] = useState([]);
  const [messages, setMessages] = useState([]);
  const [loadingData, setLoadingData] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoadingData(true);
      try {
        if (mainView === 'appointments') {
          const res = await fetch('http://localhost:5055/api/appointments');
          const data = await res.json();
          setAppointments(data);
        } else if (mainView === 'messages') {
          const res = await fetch('http://localhost:5055/api/contact');
          const data = await res.json();
          setMessages(data);
        }
      } catch (err) {
        setToast({ type: 'error', message: 'Failed to load data.' });
      } finally {
        setLoadingData(false);
      }
    };

    if (mainView !== 'media') {
      fetchData();
    }
  }, [mainView]);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  const filteredItems = useMemo(() => {
    if (!mediaList) return [];

    return mediaList.filter((item) => {
      // Tab filter
      let matchesTab = true;
      if (activeTab !== 'all') {
        matchesTab = item.pageKey === activeTab;
      }

      // Search filter
      const matchesSearch =
        !searchQuery ||
        item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.pageKey.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.sectionKey.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesTab && matchesSearch;
    });
  }, [mediaList, activeTab, searchQuery]);

  const handleFileSelect = (slotId, file) => {
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      showToast('Please select a valid image file (JPG, PNG, WebP, etc.)', 'error');
      return;
    }

    // Revoke previous object URL if any
    if (previewUrls[slotId]) {
      URL.revokeObjectURL(previewUrls[slotId]);
    }

    const preview = URL.createObjectURL(file);
    setSelectedFiles((prev) => ({ ...prev, [slotId]: file }));
    setPreviewUrls((prev) => ({ ...prev, [slotId]: preview }));
  };

  const handleCancelPreview = (slotId) => {
    if (previewUrls[slotId]) {
      URL.revokeObjectURL(previewUrls[slotId]);
    }
    setSelectedFiles((prev) => {
      const copy = { ...prev };
      delete copy[slotId];
      return copy;
    });
    setPreviewUrls((prev) => {
      const copy = { ...prev };
      delete copy[slotId];
      return copy;
    });
  };

  const handleUpload = async (item) => {
    const file = selectedFiles[item.id];
    if (!file) {
      showToast('Please choose an image file first.', 'error');
      return;
    }

    setUploadingId(item.id);
    try {
      await uploadImage(item.pageKey, item.sectionKey, file);
      handleCancelPreview(item.id);
      showToast(`Updated image for "${item.label}" successfully!`);
    } catch (err) {
      showToast(err.message || 'Failed to upload image.', 'error');
    } finally {
      setUploadingId(null);
    }
  };

  const handleReset = async (item) => {
    if (!window.confirm(`Reset "${item.label}" back to the default original asset?`)) {
      return;
    }

    setResettingId(item.id);
    try {
      await resetImage(item.id);
      handleCancelPreview(item.id);
      showToast(`Reset "${item.label}" back to default asset.`);
    } catch (err) {
      showToast(err.message || 'Failed to reset image.', 'error');
    } finally {
      setResettingId(null);
    }
  };

  const customCount = useMemo(() => {
    return mediaList ? mediaList.filter((m) => !!m.customImageUrl).length : 0;
  }, [mediaList]);

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-gray-900 flex flex-col font-sans">
      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce">
          <div
            className={`px-5 py-3.5 rounded-2xl shadow-xl flex items-center gap-3 text-sm font-medium ${
              toast.type === 'error'
                ? 'bg-red-600 text-white shadow-red-500/20'
                : 'bg-[#2D1E40] text-white shadow-[#2D1E40]/30 border border-[#C4A47C]/40'
            }`}
          >
            {toast.type === 'error' ? (
              <svg className="w-5 h-5 text-red-200 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-[#C4A47C] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            )}
            <span>{toast.message}</span>
          </div>
        </div>
      )}

      {/* Top Navigation Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center">
              <img src={marvicLogo} alt="Manick Dental" className="h-14 lg:h-16 w-auto object-contain py-1" />
            </Link>
            <div className="border-l border-gray-200 pl-4 hidden sm:block">
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-[#C4A47C]/15 text-[#8f7149]">
                  Admin CMS
                </span>
              </div>
            </div>

            {/* Main Tabs */}
            <div className="ml-6 hidden md:flex items-center space-x-6 h-full">
              <button 
                onClick={() => setMainView('media')}
                className={`font-semibold text-sm h-full flex items-center border-b-2 transition-colors ${mainView === 'media' ? 'text-[#2D1E40] border-[#C4A47C]' : 'text-gray-500 border-transparent hover:text-gray-900'}`}>
                Media Manager
              </button>
              <button 
                onClick={() => setMainView('appointments')}
                className={`font-semibold text-sm h-full flex items-center border-b-2 transition-colors ${mainView === 'appointments' ? 'text-[#2D1E40] border-[#C4A47C]' : 'text-gray-500 border-transparent hover:text-gray-900'}`}>
                Appointments
              </button>
              <button 
                onClick={() => setMainView('messages')}
                className={`font-semibold text-sm h-full flex items-center border-b-2 transition-colors ${mainView === 'messages' ? 'text-[#2D1E40] border-[#C4A47C]' : 'text-gray-500 border-transparent hover:text-gray-900'}`}>
                Messages
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold text-gray-700 hover:text-[#2D1E40] px-3.5 py-2 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <span>View Live Website</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>

            <div className="h-6 w-px bg-gray-200 hidden sm:block" />

            <div className="flex items-center gap-3">
              <div className="text-right hidden md:block">
                <div className="text-xs font-bold text-gray-800">{user?.username || 'Administrator'}</div>
                <div className="text-[11px] text-gray-500">{user?.email || 'admin@manickdental.com'}</div>
              </div>

              <button
                onClick={onLogout}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-red-700 bg-red-50 hover:bg-red-100 transition-colors"
                title="Sign out"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {mainView === 'media' && (
          <>
            {/* Metric Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs uppercase font-semibold text-gray-500 tracking-wider">Total Managed Slots</p>
              <p className="text-2xl font-serif font-bold text-gray-900 mt-1">{mediaList.length}</p>
            </div>
            <div className="w-11 h-11 rounded-xl bg-purple-50 text-[#2D1E40] flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs uppercase font-semibold text-gray-500 tracking-wider">Custom Uploaded</p>
              <p className="text-2xl font-serif font-bold text-[#C4A47C] mt-1">{customCount}</p>
            </div>
            <div className="w-11 h-11 rounded-xl bg-amber-50 text-[#C4A47C] flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs uppercase font-semibold text-gray-500 tracking-wider">Default Assets</p>
              <p className="text-2xl font-serif font-bold text-gray-700 mt-1">{mediaList.length - customCount}</p>
            </div>
            <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Filters & Tabs Section */}
        <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Tab buttons */}
            <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
              {PAGE_TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                    activeTab === tab.id
                      ? 'bg-[#2D1E40] text-white shadow-sm'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Search Input & Refresh Button */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              <div className="relative flex-grow md:w-64">
                <input
                  type="text"
                  placeholder="Search image slot..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C4A47C]"
                />
                <svg className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              <button
                onClick={refreshMedia}
                disabled={loading}
                className="p-2 text-gray-500 hover:text-gray-800 rounded-xl hover:bg-gray-100 border border-gray-200 transition-colors"
                title="Refresh media catalogue"
              >
                <svg className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Media Slots Grid */}
        {loading && mediaList.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-200">
            <div className="animate-spin w-8 h-8 border-4 border-[#2D1E40] border-t-transparent rounded-full mx-auto mb-3" />
            <p className="text-sm text-gray-500 font-medium">Loading media slots from database...</p>
          </div>
        ) : filteredItems.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-200">
            <svg className="w-12 h-12 text-gray-300 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-base font-serif font-bold text-gray-700">No media slots match your filter</p>
            <p className="text-xs text-gray-400 mt-1">Try switching tabs or adjusting your search term.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => {
              const hasPreview = !!previewUrls[item.id];
              const isCustom = !!item.customImageUrl;
              const displayUrl = hasPreview
                ? previewUrls[item.id]
                : isCustom
                ? item.customImageUrl.startsWith('/uploads')
                  ? `http://localhost:5055${item.customImageUrl}`
                  : item.customImageUrl
                : item.defaultAssetUrl;

              const isUploading = uploadingId === item.id;
              const isResetting = resettingId === item.id;

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow"
                >
                  {/* Card Header */}
                  <div className="p-4 border-b border-gray-100 flex items-start justify-between gap-3">
                    <div>
                      <h2 className="text-sm font-semibold text-gray-900 line-clamp-1" title={item.label}>
                        {item.label}
                      </h2>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-gray-100 text-gray-600">
                          {item.pageKey} / {item.sectionKey}
                        </span>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-[#C4A47C]/15 text-[#8f7149]">
                          Ratio {item.aspectRatio}
                        </span>
                      </div>
                    </div>

                    {isCustom ? (
                      <span className="shrink-0 text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
                        Custom
                      </span>
                    ) : (
                      <span className="shrink-0 text-[10px] font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">
                        Default
                      </span>
                    )}
                  </div>

                  {/* Image Display & Preview Area */}
                  <div className="relative aspect-[16/10] bg-gray-900/5 flex items-center justify-center overflow-hidden border-b border-gray-100 group">
                    <img
                      src={displayUrl}
                      alt={item.label}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = item.defaultAssetUrl;
                      }}
                    />

                    {/* Preview Indicator overlay */}
                    {hasPreview && (
                      <div className="absolute top-2 left-2 px-2 py-1 rounded bg-blue-600/90 backdrop-blur-sm text-white text-[10px] font-semibold flex items-center gap-1 shadow">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <span>Unsaved Local Preview</span>
                      </div>
                    )}
                  </div>

                  {/* Card Controls */}
                  <div className="p-4 flex-grow flex flex-col justify-between space-y-4">
                    {/* File Input */}
                    <div>
                      <label className="block text-[11px] font-semibold text-gray-600 mb-1.5">
                        Choose New Image:
                      </label>
                      <input
                        type="file"
                        accept="image/*"
                        id={`file-input-${item.id}`}
                        onChange={(e) => handleFileSelect(item.id, e.target.files[0])}
                        className="block w-full text-xs text-gray-500 file:mr-2.5 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-[11px] file:font-semibold file:bg-[#2D1E40]/10 file:text-[#2D1E40] hover:file:bg-[#2D1E40]/20 cursor-pointer"
                      />
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2 pt-1">
                      {hasPreview ? (
                        <>
                          <button
                            onClick={() => handleUpload(item)}
                            disabled={isUploading}
                            className="flex-1 py-2 px-3 rounded-xl bg-[#2D1E40] text-white text-xs font-semibold hover:bg-[#3d2a57] transition-colors shadow-sm disabled:opacity-50 flex items-center justify-center gap-1.5"
                          >
                            {isUploading ? (
                              <>
                                <svg className="animate-spin h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                                </svg>
                                <span>Saving...</span>
                              </>
                            ) : (
                              <>
                                <svg className="w-3.5 h-3.5 text-[#C4A47C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Save & Apply</span>
                              </>
                            )}
                          </button>
                          <button
                            onClick={() => handleCancelPreview(item.id)}
                            disabled={isUploading}
                            className="py-2 px-3 rounded-xl border border-gray-200 text-gray-600 text-xs font-semibold hover:bg-gray-50 transition-colors"
                          >
                            Cancel
                          </button>
                        </>
                      ) : (
                        <div className="w-full flex items-center justify-between gap-2">
                          <label
                            htmlFor={`file-input-${item.id}`}
                            className="flex-1 py-2 px-3 rounded-xl border border-dashed border-gray-300 hover:border-[#C4A47C] text-gray-700 text-xs font-semibold text-center hover:bg-[#FAF6F0] transition-colors cursor-pointer"
                          >
                            Replace Image
                          </label>

                          {isCustom && (
                            <button
                              onClick={() => handleReset(item)}
                              disabled={isResetting}
                              className="py-2 px-3 rounded-xl text-xs font-semibold text-gray-500 hover:text-red-700 hover:bg-red-50 border border-transparent hover:border-red-100 transition-colors"
                              title="Revert back to original bundle image"
                            >
                              {isResetting ? 'Reverting...' : 'Reset Default'}
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        </>
        )}

        {/* Appointments View */}
        {mainView === 'appointments' && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-lg font-bold text-[#2D1E40]">Appointments List</h2>
              <span className="text-xs font-semibold px-2 py-1 bg-purple-50 text-purple-700 rounded-lg">{appointments.length} Total</span>
            </div>
            
            {loadingData ? (
              <div className="p-8 text-center text-gray-500">Loading appointments...</div>
            ) : appointments.length === 0 ? (
              <div className="p-8 text-center text-gray-500">No appointments booked yet.</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm whitespace-nowrap">
                  <thead className="bg-gray-50 text-gray-500 font-semibold uppercase text-xs">
                    <tr>
                      <th className="px-6 py-4">Date / Time</th>
                      <th className="px-6 py-4">Patient Name</th>
                      <th className="px-6 py-4">Phone</th>
                      <th className="px-6 py-4">Service</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {appointments.map(app => (
                      <tr key={app.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 font-medium text-gray-900">
                          {app.preferredDate || 'N/A'}<br/>
                          <span className="text-xs text-gray-500 font-normal">{app.preferredTime || 'Any Time'}</span>
                        </td>
                        <td className="px-6 py-4">{app.fullName}</td>
                        <td className="px-6 py-4">{app.phoneNumber}</td>
                        <td className="px-6 py-4">{app.service}</td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 text-[10px] font-bold uppercase rounded-full ${
                            app.status === 'Confirmed' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                          }`}>
                            {app.status || 'Pending'}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-xs text-gray-500 max-w-xs truncate" title={app.notes}>
                          {app.notes || '-'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* Messages View */}
        {mainView === 'messages' && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-lg font-bold text-[#2D1E40]">Contact Messages</h2>
              <span className="text-xs font-semibold px-2 py-1 bg-purple-50 text-purple-700 rounded-lg">{messages.length} Total</span>
            </div>
            
            {loadingData ? (
              <div className="p-8 text-center text-gray-500">Loading messages...</div>
            ) : messages.length === 0 ? (
              <div className="p-8 text-center text-gray-500">No contact messages received yet.</div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                {messages.map(msg => (
                  <div key={msg.id} className="bg-gray-50 border border-gray-200 p-5 rounded-2xl flex flex-col h-full shadow-sm">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-bold text-gray-900">{msg.name}</h3>
                        <p className="text-xs text-gray-500">{new Date(msg.createdAt).toLocaleDateString()}</p>
                      </div>
                      {!msg.isRead && (
                        <span className="h-2.5 w-2.5 bg-blue-500 rounded-full" title="Unread"></span>
                      )}
                    </div>
                    
                    <div className="text-sm mb-4">
                      <p><a href={`mailto:${msg.email}`} className="text-[#8f7149] hover:underline">{msg.email}</a></p>
                      {msg.phone && <p><a href={`tel:${msg.phone}`} className="text-[#8f7149] hover:underline">{msg.phone}</a></p>}
                    </div>

                    <div className="flex-grow">
                      {msg.subject && <h4 className="text-sm font-semibold text-gray-800 mb-1">{msg.subject}</h4>}
                      <p className="text-sm text-gray-600 bg-white p-3 rounded-lg border border-gray-100">{msg.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </main>

      {/* Footer info bar */}
      <footer className="mt-auto py-4 bg-white border-t border-gray-200 text-center text-xs text-gray-500">
        Manick Dental Clinic &bull; Admin Content Management Suite &bull; MySQL Persistent Media Storage
      </footer>
    </div>
  );
}
