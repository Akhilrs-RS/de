import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMedia } from '../../context/MediaContext';
import marvicLogo from '../../assets/marvic.png';
import TransformationImageSlider from '../TransformationImageSlider';
import crownsBefore from '../../assets/transformations/crowns_before.jpg';
import crownsAfter from '../../assets/transformations/crowns_after.jpg';
import alignersBefore from '../../assets/transformations/aligners_before.jpg';
import alignersAfter from '../../assets/transformations/aligners_after.jpg';
import whiteningBefore from '../../assets/transformations/whitening_before.jpg';
import whiteningAfter from '../../assets/transformations/whitening_after.jpg';

const TRANSFORMATION_PAIRS = [
  {
    id: 'crowns',
    title: 'Dental Crowns',
    category: 'Dental Crowns',
    description: 'Precision-crafted crowns restoring damaged or fractured enamel.',
    beforeKey: 'card-crowns-before',
    afterKey: 'card-crowns-after',
    defaultBefore: crownsBefore,
    defaultAfter: crownsAfter
  },
  {
    id: 'aligners',
    title: 'Clear Aligners',
    category: 'Clear Aligners',
    description: 'Discreet, removable orthodontic aligners for teeth alignment.',
    beforeKey: 'card-aligners-before',
    afterKey: 'card-aligners-after',
    defaultBefore: alignersBefore,
    defaultAfter: alignersAfter
  },
  {
    id: 'whitening',
    title: 'Teeth Whitening',
    category: 'Teeth Whitening',
    description: 'Professional in-clinic whitening for radiant enamel luminosity.',
    beforeKey: 'card-whitening-before',
    afterKey: 'card-whitening-after',
    defaultBefore: whiteningBefore,
    defaultAfter: whiteningAfter
  }
];

const PAGE_TABS = [
  { id: 'all', label: 'All Pages' },
  { id: 'global', label: 'Global / Logos' },
  { id: 'home', label: 'Home Page' },
  { id: 'mobile-home', label: 'Mobile Home' },
  { id: 'about', label: 'About Us' },
  { id: 'our-story', label: 'Our Story' },
  { id: 'services', label: 'Services' },
  { id: 'clinic-tour', label: 'Clinic Tour' },
  { id: 'treatments', label: 'Treatments' },
  { id: 'general-checkup', label: 'General Checkup' },
  { id: 'smile-makeover', label: 'Smile Makeover' },
  { id: 'invisible-aligners', label: 'Invisible Aligners' },
  { id: 'cosmetic-dentistry', label: 'Cosmetic Dentistry' },
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

  const fetchAppointments = async () => {
    try {
      const res = await fetch('/api/appointments');
      const data = await res.json();
      if (Array.isArray(data)) setAppointments(data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchMessages = async () => {
    try {
      const res = await fetch('/api/contact');
      const data = await res.json();
      if (Array.isArray(data)) setMessages(data);
    } catch (err) {
      console.error(err);
    }
  };

  // Pre-load appointments & messages counts on mount
  useEffect(() => {
    fetchAppointments();
    fetchMessages();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoadingData(true);
      try {
        if (mainView === 'appointments') {
          await fetchAppointments();
        } else if (mainView === 'messages') {
          await fetchMessages();
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

  const updateAppointmentStatus = async (id, newStatus) => {
    try {
      const res = await fetch(`/api/appointments/${id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
      if (res.ok) {
        setAppointments(prev => prev.map(a => a.id === id ? { ...a, status: newStatus } : a));
        showToast(`Appointment status updated to ${newStatus}`);
      }
    } catch (err) {
      showToast('Failed to update status', 'error');
    }
  };

  const deleteAppointment = async (id, name) => {
    if (!window.confirm(`Are you sure you want to delete the appointment for ${name}?`)) return;
    try {
      const res = await fetch(`/api/appointments/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setAppointments(prev => prev.filter(a => a.id !== id));
        showToast('Appointment deleted successfully');
      }
    } catch (err) {
      showToast('Failed to delete appointment', 'error');
    }
  };

  const markMessageAsRead = async (id) => {
    try {
      const res = await fetch(`/api/contact/${id}/read`, { method: 'PATCH' });
      if (res.ok) {
        setMessages(prev => prev.map(m => m.id === id ? { ...m, isRead: true } : m));
        showToast('Message marked as read');
      }
    } catch (err) {
      showToast('Failed to mark message as read', 'error');
    }
  };

  const unreadMessagesCount = useMemo(() => {
    return messages.filter(m => !m.isRead).length;
  }, [messages]);

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
      await resetImage(item.id, item.pageKey, item.sectionKey);
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-4">
            <Link to="/" className="flex items-center">
              <img src={marvicLogo} alt="Manick Dental" className="h-10 sm:h-14 lg:h-16 w-auto object-contain py-1" />
            </Link>
            <div className="border-l border-gray-200 pl-3 hidden sm:block">
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-[#C4A47C]/15 text-[#8f7149]">
                  Admin CMS
                </span>
              </div>
            </div>

            {/* Main Tabs (Desktop) */}
            <div className="ml-6 hidden md:flex items-center space-x-6 h-full">
              <button 
                onClick={() => setMainView('media')}
                className={`font-semibold text-sm h-full flex items-center gap-2 border-b-2 transition-colors ${
                  mainView === 'media' ? 'text-[#2D1E40] border-[#C4A47C]' : 'text-gray-500 border-transparent hover:text-gray-900'
                }`}>
                <span>Media Manager</span>
              </button>
              <button 
                onClick={() => setMainView('appointments')}
                className={`font-semibold text-sm h-full flex items-center gap-2 border-b-2 transition-colors ${
                  mainView === 'appointments' ? 'text-[#2D1E40] border-[#C4A47C]' : 'text-gray-500 border-transparent hover:text-gray-900'
                }`}>
                <span>Appointments</span>
                {appointments.length > 0 && (
                  <span className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${
                    mainView === 'appointments' ? 'bg-[#2D1E40] text-white' : 'bg-gray-100 text-gray-700'
                  }`}>
                    {appointments.length}
                  </span>
                )}
              </button>
              <button 
                onClick={() => setMainView('messages')}
                className={`font-semibold text-sm h-full flex items-center gap-2 border-b-2 transition-colors ${
                  mainView === 'messages' ? 'text-[#2D1E40] border-[#C4A47C]' : 'text-gray-500 border-transparent hover:text-gray-900'
                }`}>
                <span>Messages</span>
                {messages.length > 0 && (
                  <span className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${
                    unreadMessagesCount > 0 
                      ? 'bg-amber-500 text-white' 
                      : (mainView === 'messages' ? 'bg-[#2D1E40] text-white' : 'bg-gray-100 text-gray-700')
                  }`}>
                    {messages.length}
                  </span>
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <Link
              to="/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-700 hover:text-[#2D1E40] px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
              title="View live website"
            >
              <span className="hidden sm:inline">View Live Website</span>
              <span className="sm:hidden text-[11px]">Site</span>
              <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>

            <div className="h-6 w-px bg-gray-200 hidden sm:block" />

            <div className="flex items-center gap-2 sm:gap-3">
              <div className="text-right hidden md:block">
                <div className="text-xs font-bold text-gray-800">{user?.username || 'Administrator'}</div>
                <div className="text-[11px] text-gray-500">{user?.email || 'admin@manickdental.com'}</div>
              </div>

              <button
                onClick={onLogout}
                className="inline-flex items-center gap-1 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-xs font-semibold text-red-700 bg-red-50 hover:bg-red-100 transition-colors"
                title="Sign out"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                <span className="hidden xs:inline sm:inline">Logout</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Sub-bar */}
        <div className="md:hidden bg-white/95 backdrop-blur border-t border-gray-100 px-2.5 py-2">
          <div className="flex bg-gray-100/90 p-1 rounded-xl gap-1">
            <button
              onClick={() => setMainView('media')}
              className={`flex-1 py-2 px-1 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                mainView === 'media'
                  ? 'bg-white text-[#2D1E40] shadow-sm font-bold'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <svg className="w-3.5 h-3.5 shrink-0 text-[#C4A47C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Media</span>
            </button>

            <button
              onClick={() => setMainView('appointments')}
              className={`flex-1 py-2 px-1 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                mainView === 'appointments'
                  ? 'bg-white text-[#2D1E40] shadow-sm font-bold'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <svg className="w-3.5 h-3.5 shrink-0 text-[#2D1E40]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Appointments</span>
              {appointments.length > 0 && (
                <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                  mainView === 'appointments' ? 'bg-[#2D1E40] text-white' : 'bg-gray-200 text-gray-700'
                }`}>
                  {appointments.length}
                </span>
              )}
            </button>

            <button
              onClick={() => setMainView('messages')}
              className={`flex-1 py-2 px-1 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                mainView === 'messages'
                  ? 'bg-white text-[#2D1E40] shadow-sm font-bold'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <svg className="w-3.5 h-3.5 shrink-0 text-[#2D1E40]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Messages</span>
              {messages.length > 0 && (
                <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                  unreadMessagesCount > 0 
                    ? 'bg-amber-500 text-white' 
                    : (mainView === 'messages' ? 'bg-[#2D1E40] text-white' : 'bg-gray-200 text-gray-700')
                }`}>
                  {messages.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8">
        
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

        {/* SPECIAL SECTION: OUR STORY SMILE TRANSFORMATIONS (BEFORE & AFTER PAIRS) */}
        {(activeTab === 'our-story' || activeTab === 'all') && (
          <div className="mb-10 bg-white p-6 sm:p-8 rounded-3xl border border-purple-200/80 shadow-md">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-gray-100">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-[#75558F] text-[11px] font-bold tracking-wider uppercase mb-2">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-4 3 4 3m8-6l4 3-4 3" />
                  </svg>
                  Unified Desktop & Mobile Sync
                </div>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-900">
                  Smile Transformations (Before & After Management)
                </h2>
                <p className="text-xs sm:text-sm text-gray-500 mt-1 max-w-2xl">
                  Upload custom Before and After photos for patient transformations. Changes save directly to the central database and immediately update both desktop and mobile views with real-time interactive sliders.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              {TRANSFORMATION_PAIRS.map((pair) => {
                const beforeItem = mediaList.find(m => m.pageKey === 'our-story' && m.sectionKey === pair.beforeKey) || {
                  id: `our-story-${pair.beforeKey}`,
                  pageKey: 'our-story',
                  sectionKey: pair.beforeKey,
                  label: `${pair.title} (Before)`,
                  defaultAssetUrl: pair.defaultBefore
                };
                const afterItem = mediaList.find(m => m.pageKey === 'our-story' && m.sectionKey === pair.afterKey) || {
                  id: `our-story-${pair.afterKey}`,
                  pageKey: 'our-story',
                  sectionKey: pair.afterKey,
                  label: `${pair.title} (After)`,
                  defaultAssetUrl: pair.defaultAfter
                };

                const beforeUrl = previewUrls[beforeItem.id] || beforeItem.customImageUrl || beforeItem.defaultAssetUrl || pair.defaultBefore;
                const afterUrl = previewUrls[afterItem.id] || afterItem.customImageUrl || afterItem.defaultAssetUrl || pair.defaultAfter;

                return (
                  <div key={pair.id} className="bg-gray-50/70 rounded-2xl border border-gray-200 p-5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold text-base text-gray-900">{pair.title}</h3>
                        <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full bg-purple-100 text-purple-800">
                          {pair.category}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mb-4">{pair.description}</p>

                      {/* Live Interactive Test Slider Preview */}
                      <div className="mb-5 rounded-xl overflow-hidden border border-gray-200 shadow-xs">
                        <div className="bg-gray-100 px-3 py-1.5 border-b border-gray-200 flex items-center justify-between text-[11px] font-medium text-gray-600">
                          <span>Live Slider Preview</span>
                          <span className="text-[10px] text-gray-400">Test by sliding</span>
                        </div>
                        <TransformationImageSlider
                          beforeImage={beforeUrl}
                          transformedImage={afterUrl}
                          title={pair.title}
                        />
                      </div>

                      {/* Side-by-Side Upload Controls */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Before Upload Slot */}
                        <div className="bg-white p-3.5 rounded-xl border border-gray-200 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between mb-1.5">
                              <span className="text-xs font-bold text-gray-800">Before Photo</span>
                              {beforeItem.customImageUrl ? (
                                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 flex items-center gap-1">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                  Database Stored
                                </span>
                              ) : (
                                <span className="text-[9px] font-medium px-1.5 py-0.5 rounded bg-gray-100 text-gray-500">Default</span>
                              )}
                            </div>
                            <input
                              type="file"
                              accept="image/*"
                              id={`file-${beforeItem.id}`}
                              className="hidden"
                              onChange={(e) => handleFileSelect(beforeItem.id, e.target.files?.[0])}
                            />
                            <label
                              htmlFor={`file-${beforeItem.id}`}
                              className="w-full block py-2 px-3 text-center text-xs font-medium rounded-lg border border-dashed border-gray-300 hover:border-purple-400 hover:bg-purple-50/50 cursor-pointer transition-colors text-gray-700 mb-2 truncate"
                            >
                              {selectedFiles[beforeItem.id] ? selectedFiles[beforeItem.id].name : 'Choose Before...'}
                            </label>
                          </div>
                          <div className="flex gap-1.5 mt-2">
                            {selectedFiles[beforeItem.id] && (
                              <button
                                onClick={() => handleUpload(beforeItem)}
                                disabled={uploadingId === beforeItem.id}
                                className="flex-1 py-1.5 px-2 bg-[#2D1E40] text-white text-[11px] font-semibold rounded-md shadow-xs hover:bg-[#3D2956] transition-colors"
                              >
                                {uploadingId === beforeItem.id ? 'Saving to DB...' : 'Upload & Save'}
                              </button>
                            )}
                            {beforeItem.customImageUrl && (
                              <button
                                onClick={() => handleReset(beforeItem)}
                                disabled={resettingId === beforeItem.id}
                                className="py-1.5 px-2 border border-gray-200 text-gray-600 text-[11px] font-medium rounded-md hover:bg-gray-50 transition-colors"
                                title="Reset Before Image"
                              >
                                Reset
                              </button>
                            )}
                          </div>
                        </div>

                        {/* After Upload Slot */}
                        <div className="bg-white p-3.5 rounded-xl border border-gray-200 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between mb-1.5">
                              <span className="text-xs font-bold text-gray-800">After Photo</span>
                              {afterItem.customImageUrl ? (
                                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 flex items-center gap-1">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                  Database Stored
                                </span>
                              ) : (
                                <span className="text-[9px] font-medium px-1.5 py-0.5 rounded bg-gray-100 text-gray-500">Default</span>
                              )}
                            </div>
                            <input
                              type="file"
                              accept="image/*"
                              id={`file-${afterItem.id}`}
                              className="hidden"
                              onChange={(e) => handleFileSelect(afterItem.id, e.target.files?.[0])}
                            />
                            <label
                              htmlFor={`file-${afterItem.id}`}
                              className="w-full block py-2 px-3 text-center text-xs font-medium rounded-lg border border-dashed border-gray-300 hover:border-purple-400 hover:bg-purple-50/50 cursor-pointer transition-colors text-gray-700 mb-2 truncate"
                            >
                              {selectedFiles[afterItem.id] ? selectedFiles[afterItem.id].name : 'Choose After...'}
                            </label>
                          </div>
                          <div className="flex gap-1.5 mt-2">
                            {selectedFiles[afterItem.id] && (
                              <button
                                onClick={() => handleUpload(afterItem)}
                                disabled={uploadingId === afterItem.id}
                                className="flex-1 py-1.5 px-2 bg-[#2D1E40] text-white text-[11px] font-semibold rounded-md shadow-xs hover:bg-[#3D2956] transition-colors"
                              >
                                {uploadingId === afterItem.id ? 'Saving to DB...' : 'Upload & Save'}
                              </button>
                            )}
                            {afterItem.customImageUrl && (
                              <button
                                onClick={() => handleReset(afterItem)}
                                disabled={resettingId === afterItem.id}
                                className="py-1.5 px-2 border border-gray-200 text-gray-600 text-[11px] font-medium rounded-md hover:bg-gray-50 transition-colors"
                                title="Reset After Image"
                              >
                                Reset
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

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
                  ? `${item.customImageUrl}`
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
                      <span className="shrink-0 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        Database Stored
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
            <div className="p-4 sm:p-6 border-b border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-[#2D1E40] font-serif">Patient Appointments</h2>
                <p className="text-xs text-gray-500 mt-0.5">Manage patient bookings and schedule requests</p>
              </div>
              <div className="flex items-center gap-2.5 w-full sm:w-auto justify-between sm:justify-end">
                <span className="text-xs font-semibold px-3 py-1 bg-purple-50 text-purple-700 rounded-full border border-purple-100">
                  {appointments.length} Total Bookings
                </span>
                <button
                  onClick={() => {
                    setLoadingData(true);
                    fetchAppointments().finally(() => setLoadingData(false));
                  }}
                  disabled={loadingData}
                  className="p-2 text-gray-500 hover:text-gray-800 rounded-xl hover:bg-gray-100 border border-gray-200 transition-colors"
                  title="Refresh Appointments"
                >
                  <svg className={`w-4 h-4 ${loadingData ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </button>
              </div>
            </div>
            
            {loadingData ? (
              <div className="p-12 text-center text-gray-500">
                <svg className="animate-spin h-8 w-8 mx-auto text-[#C4A47C] mb-3" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                </svg>
                <p className="text-sm font-medium">Loading appointments...</p>
              </div>
            ) : appointments.length === 0 ? (
              <div className="p-12 text-center text-gray-500">
                <div className="w-12 h-12 rounded-2xl bg-gray-100 text-gray-400 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-gray-700">No appointments booked yet.</p>
                <p className="text-xs text-gray-400 mt-1">New appointment requests from the website will appear here.</p>
              </div>
            ) : (
              <>
                {/* Mobile Cards View (md and below) */}
                <div className="md:hidden divide-y divide-gray-100">
                  {appointments.map(app => (
                    <div key={app.id} className="p-4 hover:bg-gray-50/80 transition-colors space-y-3">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="font-bold text-gray-900 text-base">{app.fullName}</h3>
                          <div className="inline-block mt-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#FAF6F0] text-[#8f7149] border border-[#C4A47C]/30">
                            {app.service || 'General Consultation'}
                          </div>
                        </div>
                        <span className={`px-2.5 py-1 text-[11px] font-bold uppercase rounded-full shrink-0 ${
                          app.status === 'Confirmed' 
                            ? 'bg-green-100 text-green-700 border border-green-200' 
                            : 'bg-amber-100 text-amber-700 border border-amber-200'
                        }`}>
                          {app.status || 'Pending'}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-xs bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                        <div>
                          <span className="text-gray-400 block text-[10px] uppercase font-semibold">Date & Time</span>
                          <span className="font-medium text-gray-800">{app.preferredDate || 'Flexible'}</span>
                          <span className="block text-[11px] text-gray-500">{app.preferredTime || 'Any time'}</span>
                        </div>
                        <div>
                          <span className="text-gray-400 block text-[10px] uppercase font-semibold">Contact</span>
                          <a 
                            href={`tel:${app.phoneNumber}`}
                            className="font-bold text-[#2D1E40] hover:underline flex items-center gap-1 mt-0.5"
                          >
                            <svg className="w-3.5 h-3.5 text-[#C4A47C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span>{app.phoneNumber}</span>
                          </a>
                        </div>
                      </div>

                      {app.notes && (
                        <div className="text-xs bg-[#FAF9F5] p-2.5 rounded-xl text-gray-600 border border-[#EBE6DC]">
                          <span className="font-semibold text-gray-700 block text-[10px] uppercase mb-0.5">Notes:</span>
                          {app.notes}
                        </div>
                      )}

                      {/* Status / Delete actions */}
                      <div className="flex items-center gap-2 pt-1">
                        {app.status !== 'Confirmed' ? (
                          <button
                            onClick={() => updateAppointmentStatus(app.id, 'Confirmed')}
                            className="flex-1 py-1.5 px-3 text-xs font-semibold rounded-xl bg-green-600 hover:bg-green-700 text-white transition-colors flex items-center justify-center gap-1"
                          >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Confirm</span>
                          </button>
                        ) : (
                          <button
                            onClick={() => updateAppointmentStatus(app.id, 'Pending')}
                            className="flex-1 py-1.5 px-3 text-xs font-semibold rounded-xl bg-amber-50 text-amber-800 hover:bg-amber-100 transition-colors flex items-center justify-center gap-1 border border-amber-200"
                          >
                            <span>Mark Pending</span>
                          </button>
                        )}
                        <a
                          href={`tel:${app.phoneNumber}`}
                          className="py-1.5 px-3 text-xs font-semibold rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors flex items-center gap-1"
                        >
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          <span>Call</span>
                        </a>
                        <button
                          onClick={() => deleteAppointment(app.id, app.fullName)}
                          className="p-1.5 text-xs text-red-500 hover:text-red-700 hover:bg-red-50 rounded-xl transition-colors"
                          title="Delete appointment"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Desktop Table View (md and above) */}
                <div className="hidden md:block overflow-x-auto">
                  <table className="w-full text-left text-sm whitespace-nowrap">
                    <thead className="bg-gray-50 text-gray-500 font-semibold uppercase text-xs border-b border-gray-100">
                      <tr>
                        <th className="px-6 py-4">Date / Time</th>
                        <th className="px-6 py-4">Patient Name</th>
                        <th className="px-6 py-4">Phone</th>
                        <th className="px-6 py-4">Service</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4">Notes</th>
                        <th className="px-6 py-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {appointments.map(app => (
                        <tr key={app.id} className="hover:bg-gray-50/80 transition-colors">
                          <td className="px-6 py-4 font-medium text-gray-900">
                            {app.preferredDate || 'Flexible'}<br/>
                            <span className="text-xs text-gray-500 font-normal">{app.preferredTime || 'Any Time'}</span>
                          </td>
                          <td className="px-6 py-4 font-semibold text-gray-900">{app.fullName}</td>
                          <td className="px-6 py-4">
                            <a href={`tel:${app.phoneNumber}`} className="text-[#2D1E40] hover:text-[#C4A47C] font-medium flex items-center gap-1">
                              <span>{app.phoneNumber}</span>
                            </a>
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-block px-2.5 py-1 rounded-lg text-xs bg-gray-100 text-gray-700 font-medium">
                              {app.service}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`px-2.5 py-1 text-[10px] font-bold uppercase rounded-full ${
                              app.status === 'Confirmed' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                            }`}>
                              {app.status || 'Pending'}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-xs text-gray-500 max-w-xs truncate" title={app.notes}>
                            {app.notes || '-'}
                          </td>
                          <td className="px-6 py-4 text-right space-x-2">
                            {app.status !== 'Confirmed' ? (
                              <button
                                onClick={() => updateAppointmentStatus(app.id, 'Confirmed')}
                                className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-green-50 text-green-700 hover:bg-green-100 border border-green-200 transition-colors"
                              >
                                Confirm
                              </button>
                            ) : (
                              <button
                                onClick={() => updateAppointmentStatus(app.id, 'Pending')}
                                className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                              >
                                Pending
                              </button>
                            )}
                            <button
                              onClick={() => deleteAppointment(app.id, app.fullName)}
                              className="px-2.5 py-1 text-xs font-semibold rounded-lg text-red-600 hover:bg-red-50 transition-colors"
                              title="Delete appointment"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}
          </div>
        )}

        {/* Messages View */}
        {mainView === 'messages' && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-4 sm:p-6 border-b border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-[#2D1E40] font-serif">Contact Inquiries</h2>
                <p className="text-xs text-gray-500 mt-0.5">Patient messages and questions from website contact forms</p>
              </div>
              <div className="flex items-center gap-2.5 w-full sm:w-auto justify-between sm:justify-end">
                <span className="text-xs font-semibold px-3 py-1 bg-purple-50 text-purple-700 rounded-full border border-purple-100">
                  {messages.length} Total Messages
                </span>
                <button
                  onClick={() => {
                    setLoadingData(true);
                    fetchMessages().finally(() => setLoadingData(false));
                  }}
                  disabled={loadingData}
                  className="p-2 text-gray-500 hover:text-gray-800 rounded-xl hover:bg-gray-100 border border-gray-200 transition-colors"
                  title="Refresh Messages"
                >
                  <svg className={`w-4 h-4 ${loadingData ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </button>
              </div>
            </div>
            
            {loadingData ? (
              <div className="p-12 text-center text-gray-500">
                <svg className="animate-spin h-8 w-8 mx-auto text-[#C4A47C] mb-3" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                </svg>
                <p className="text-sm font-medium">Loading messages...</p>
              </div>
            ) : messages.length === 0 ? (
              <div className="p-12 text-center text-gray-500">
                <div className="w-12 h-12 rounded-2xl bg-gray-100 text-gray-400 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-gray-700">No contact messages received yet.</p>
                <p className="text-xs text-gray-400 mt-1">Inquiries submitted on the contact page will appear here.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 p-4 sm:p-6">
                {messages.map(msg => (
                  <div 
                    key={msg.id} 
                    className={`p-5 rounded-2xl flex flex-col h-full shadow-sm transition-all border ${
                      !msg.isRead 
                        ? 'bg-amber-50/40 border-amber-200' 
                        : 'bg-white border-gray-200 hover:shadow-md'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold text-gray-900 text-base">{msg.name}</h3>
                          {!msg.isRead && (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500 text-white uppercase">
                              New
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-gray-500 mt-0.5">
                          {new Date(msg.createdAt).toLocaleDateString(undefined, {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </p>
                      </div>
                    </div>
                    
                    {msg.subject && (
                      <div className="mb-2">
                        <span className="text-[10px] uppercase font-bold text-gray-400 block tracking-wider">Subject</span>
                        <h4 className="text-xs font-bold text-[#2D1E40]">{msg.subject}</h4>
                      </div>
                    )}

                    <div className="flex-grow mb-4">
                      <span className="text-[10px] uppercase font-bold text-gray-400 block tracking-wider mb-1">Message</span>
                      <p className="text-xs sm:text-sm text-gray-700 bg-gray-50/90 p-3 rounded-xl border border-gray-100 whitespace-pre-wrap leading-relaxed">
                        {msg.message}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-gray-100 flex flex-wrap items-center justify-between gap-2 mt-auto">
                      <div className="flex items-center gap-2 flex-wrap">
                        {msg.email && (
                          <a 
                            href={`mailto:${msg.email}`}
                            className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1.5 rounded-xl bg-purple-50 text-[#2D1E40] hover:bg-purple-100 transition-colors"
                          >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span>Email</span>
                          </a>
                        )}
                        {msg.phone && (
                          <a 
                            href={`tel:${msg.phone}`}
                            className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1.5 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors"
                          >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span>Call</span>
                          </a>
                        )}
                      </div>

                      {!msg.isRead && (
                        <button
                          onClick={() => markMessageAsRead(msg.id)}
                          className="text-xs font-semibold text-gray-500 hover:text-gray-900 py-1 px-2 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          Mark read
                        </button>
                      )}
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
