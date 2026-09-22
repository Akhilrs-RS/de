import React, { createContext, useContext, useState, useEffect } from 'react';

const MediaContext = createContext(null);

const API_BASE_URL = '';

export function MediaProvider({ children }) {
  const [mediaList, setMediaList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMedia = async () => {
    try {
      let res = await fetch('/api/media').catch(() => null);
      if (!res || !res.ok) {
        res = await fetch('/api/media').catch(() => null);
      }
      if (res && res.ok) {
        const data = await res.json();
        setMediaList(data);
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
      if (item.customImageUrl.startsWith('/uploads') || item.customImageUrl.startsWith('/api')) {
        return item.customImageUrl;
      }
      return item.customImageUrl;
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

    const data = await res.json();
    if (!res.ok || !data.success) {
      throw new Error(data.message || 'Image upload failed.');
    }

    await fetchMedia();
    return data;
  };

  const resetImage = async (id) => {
    const res = await fetch(`${API_BASE_URL}/api/media/reset/${id}`, {
      method: 'POST'
    });

    const data = await res.json();
    if (!res.ok || !data.success) {
      throw new Error(data.message || 'Image reset failed.');
    }

    await fetchMedia();
    return data;
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
      mediaList: [],
      loading: false,
      getImage: (_pageKey, _sectionKey, fallbackAsset) => fallbackAsset,
      uploadImage: async () => {},
      resetImage: async () => {},
      refreshMedia: async () => {}
    };
  }
  return context;
}
