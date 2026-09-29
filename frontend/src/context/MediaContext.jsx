import React, { createContext, useContext, useState, useEffect } from 'react';
import crownsBefore from '../assets/transformations/crowns_before.jpg';
import crownsAfter from '../assets/transformations/crowns_after.jpg';
import alignersBefore from '../assets/transformations/aligners_before.jpg';
import alignersAfter from '../assets/transformations/aligners_after.jpg';
import whiteningBefore from '../assets/transformations/whitening_before.jpg';
import whiteningAfter from '../assets/transformations/whitening_after.jpg';

const MediaContext = createContext(null);

const API_BASE_URL = '';

const DEFAULT_MEDIA_SLOTS = [];

export function MediaProvider({ children }) {
  const [mediaList, setMediaList] = useState(DEFAULT_MEDIA_SLOTS);
  const [loading, setLoading] = useState(true);

  const fetchMedia = async () => {
    try {
      let res = await fetch('/api/media').catch(() => null);
      if (res && res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          // Merge fetched data with default slots so all slots remain visible
          setMediaList((prev) => {
            const map = new Map();
            DEFAULT_MEDIA_SLOTS.forEach((slot) => map.set(`${slot.pageKey}::${slot.sectionKey}`, slot));
            data.forEach((item) => map.set(`${item.pageKey.toLowerCase()}::${item.sectionKey.toLowerCase()}`, item));
            return Array.from(map.values());
          });
        }
      }
    } catch (err) {
      console.warn('Backend media service unreachable, falling back to local static assets:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMedia();
  }, []);

  const getImage = (pageKey, sectionKey, fallbackAsset) => {
    if (!mediaList || mediaList.length === 0) return fallbackAsset;

    const item = mediaList.find(
      (m) => m.pageKey.toLowerCase() === pageKey.toLowerCase() && 
             m.sectionKey.toLowerCase() === sectionKey.toLowerCase()
    );

    if (!item) return fallbackAsset;

    if (item.customImageUrl) {
      const cacheBust = item.updatedAt ? `?t=${new Date(item.updatedAt).getTime()}` : '';
      return `${item.customImageUrl}${cacheBust}`;
    }

    return fallbackAsset || item.defaultAssetUrl;
  };

  const uploadImage = async (pageKey, sectionKey, file) => {
    const formData = new FormData();
    formData.append('pageKey', pageKey);
    formData.append('sectionKey', sectionKey);
    formData.append('file', file);

    const res = await fetch(`${API_BASE_URL}/api/media/upload`, {
      method: 'POST',
      body: formData
    });

    if (res.ok) {
      const data = await res.json();
      await fetchMedia();
      return data;
    } else {
      const errJson = await res.json().catch(() => ({}));
      throw new Error(errJson.message || `Upload failed with status ${res.status}. Could not store image in database.`);
    }
  };

  const resetImage = async (id, pageKey, sectionKey) => {
    let res = null;
    if (typeof id === 'number' || (typeof id === 'string' && /^\d+$/.test(id))) {
      res = await fetch(`${API_BASE_URL}/api/media/reset/${id}`, {
        method: 'POST'
      });
    } else if (pageKey && sectionKey) {
      res = await fetch(`${API_BASE_URL}/api/media/reset-by-key?pageKey=${encodeURIComponent(pageKey)}&sectionKey=${encodeURIComponent(sectionKey)}`, {
        method: 'POST'
      });
    }

    if (res && res.ok) {
      const data = await res.json();
      await fetchMedia();
      return data;
    } else if (res) {
      const errJson = await res.json().catch(() => ({}));
      throw new Error(errJson.message || `Reset failed with status ${res.status}.`);
    }

    setMediaList((prev) =>
      prev.map((item) => {
        if (item.id === id || (item.pageKey === pageKey && item.sectionKey === sectionKey)) {
          return { ...item, customImageUrl: null, updatedAt: new Date().toISOString() };
        }
        return item;
      })
    );

    return {
      success: true,
      message: 'Image reset to default asset.'
    };
  };

  return (
    <MediaContext.Provider
      value={{
        mediaList,
        loading,
        getImage,
        uploadImage,
        resetImage,
        refreshMedia: fetchMedia
      }}
    >
      {children}
    </MediaContext.Provider>
  );
}

export function useMedia() {
  const context = useContext(MediaContext);
  if (!context) {
    return {
      mediaList: DEFAULT_MEDIA_SLOTS,
      loading: false,
      getImage: (_pageKey, _sectionKey, fallbackAsset) => fallbackAsset,
      uploadImage: async () => {},
      resetImage: async () => {},
      refreshMedia: async () => {}
    };
  }
  return context;
}
