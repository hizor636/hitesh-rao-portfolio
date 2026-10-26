import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { PERSONAL_INFO as DEFAULT_PERSONAL_INFO } from '../data/portfolioData';
import { HIGHLIGHTS as DEFAULT_HIGHLIGHTS } from '../components/StoryHighlights';
import { getAssetUrl } from '../utils/assetPath';

const STORAGE_KEY = 'hitesh_portfolio_content_v1';
const AUTH_KEY = 'hitesh_portfolio_admin_auth';

// Initial default gallery photos
const DEFAULT_PHOTOS = [
  {
    id: 'photo-1',
    url: getAssetUrl('/images/hitesh-profile.jpg'),
    caption: 'Hitesh Rao M — Official Portrait',
    alt: 'Portrait of Hitesh Rao M — Tech Marketer & Data Builder',
    category: 'Portrait',
    visible: true
  },
  {
    id: 'photo-2',
    url: getAssetUrl('/images/highlight-professional.jpg'),
    caption: 'Presto & Namma MUG Summit Coordination',
    alt: 'Build with Presto & Namma MUG Developer Conference in Bengaluru',
    category: 'Professional',
    visible: true
  },
  {
    id: 'photo-3',
    url: getAssetUrl('/images/highlight-college.jpg'),
    caption: 'NCET Bengaluru Campus & Hackathons',
    alt: 'Campus grounds and collegiate hackathon pitching',
    category: 'College',
    visible: true
  },
  {
    id: 'photo-4',
    url: getAssetUrl('/images/highlight-life.jpg'),
    caption: 'Western Ghats Trekking & Outdoors',
    alt: 'Scenic mountain trail through lush Western Ghats',
    category: 'Lifestyle',
    visible: true
  }
];

const DEFAULT_PROTECTION = {
  disableRightClick: true,
  disableDrag: true,
  disableShortcuts: true,
  blurOnScreenCapture: true
};

const DEFAULT_WATERMARK = {
  enabled: false,
  text: '© Hitesh Rao M • Verified Portfolio',
  opacity: 0.35,
  position: 'diagonal' // 'diagonal' | 'bottom-right' | 'center'
};

const ContentContext = createContext(null);

export function ContentProvider({ children }) {
  // Load initial content from localStorage or fallback to defaults
  const [content, setContent] = useState(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          const parsed = JSON.parse(saved);
          return {
            personalInfo: parsed.personalInfo || DEFAULT_PERSONAL_INFO,
            highlights: parsed.highlights || DEFAULT_HIGHLIGHTS,
            photos: parsed.photos || DEFAULT_PHOTOS,
            protectionSettings: { ...DEFAULT_PROTECTION, ...(parsed.protectionSettings || {}) },
            watermarkSettings: { ...DEFAULT_WATERMARK, ...(parsed.watermarkSettings || {}) },
            adminPin: parsed.adminPin || 'admin123'
          };
        }
      } catch (err) {
        console.error('Failed to parse saved content from localStorage:', err);
      }
    }
    return {
      personalInfo: DEFAULT_PERSONAL_INFO,
      highlights: DEFAULT_HIGHLIGHTS,
      photos: DEFAULT_PHOTOS,
      protectionSettings: DEFAULT_PROTECTION,
      watermarkSettings: DEFAULT_WATERMARK,
      adminPin: 'admin123'
    };
  });

  // Admin authentication state
  const [isAdmin, setIsAdmin] = useState(() => {
    if (typeof window !== 'undefined') {
      try {
        return sessionStorage.getItem(AUTH_KEY) === 'true' || localStorage.getItem(AUTH_KEY) === 'true';
      } catch {
        return false;
      }
    }
    return false;
  });

  // Toast feedback state
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = useCallback((msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 3200);
  }, []);

  // Save changes to localStorage whenever content updates
  const saveContent = useCallback((updater) => {
    setContent((prev) => {
      const next = typeof updater === 'function' ? updater(prev) : updater;
      if (typeof window !== 'undefined') {
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        } catch (err) {
          console.error('Failed to save content to localStorage:', err);
        }
      }
      return next;
    });
  }, []);

  // Authentication methods
  const login = useCallback((pin, remember = false) => {
    if (pin === content.adminPin) {
      setIsAdmin(true);
      if (remember) {
        localStorage.setItem(AUTH_KEY, 'true');
      } else {
        sessionStorage.setItem(AUTH_KEY, 'true');
      }
      return true;
    }
    return false;
  }, [content.adminPin]);

  const logout = useCallback(() => {
    setIsAdmin(false);
    sessionStorage.removeItem(AUTH_KEY);
    localStorage.removeItem(AUTH_KEY);
  }, []);

  const updatePin = useCallback((newPin) => {
    saveContent((prev) => ({ ...prev, adminPin: newPin }));
    showToast('Admin password updated successfully');
  }, [saveContent, showToast]);

  // General content update
  const updatePersonalInfo = useCallback((partial) => {
    saveContent((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        ...partial
      }
    }));
    showToast('Site copy updated and saved');
  }, [saveContent, showToast]);

  // Highlights management
  const addHighlight = useCallback((newHighlight) => {
    saveContent((prev) => ({
      ...prev,
      highlights: [...prev.highlights, newHighlight]
    }));
    showToast(`Highlight "${newHighlight.title}" created`);
  }, [saveContent, showToast]);

  const updateHighlight = useCallback((id, updated) => {
    saveContent((prev) => ({
      ...prev,
      highlights: prev.highlights.map((h) => (h.id === id ? { ...h, ...updated } : h))
    }));
    showToast('Highlight updated');
  }, [saveContent, showToast]);

  const deleteHighlight = useCallback((id) => {
    saveContent((prev) => ({
      ...prev,
      highlights: prev.highlights.filter((h) => h.id !== id)
    }));
    showToast('Highlight deleted');
  }, [saveContent, showToast]);

  const reorderHighlight = useCallback((fromIndex, toIndex) => {
    saveContent((prev) => {
      const list = [...prev.highlights];
      if (toIndex < 0 || toIndex >= list.length) return prev;
      const [item] = list.splice(fromIndex, 1);
      list.splice(toIndex, 0, item);
      return { ...prev, highlights: list };
    });
    showToast('Highlight order updated');
  }, [saveContent, showToast]);

  // Stories management
  const addStory = useCallback((highlightId, newSlide) => {
    saveContent((prev) => ({
      ...prev,
      highlights: prev.highlights.map((h) => {
        if (h.id === highlightId) {
          return { ...h, slides: [...h.slides, newSlide] };
        }
        return h;
      })
    }));
    showToast('New Story slide added');
  }, [saveContent, showToast]);

  const updateStory = useCallback((highlightId, slideIndex, updatedSlide) => {
    saveContent((prev) => ({
      ...prev,
      highlights: prev.highlights.map((h) => {
        if (h.id === highlightId) {
          const newSlides = [...h.slides];
          newSlides[slideIndex] = { ...newSlides[slideIndex], ...updatedSlide };
          return { ...h, slides: newSlides };
        }
        return h;
      })
    }));
    showToast('Story slide updated');
  }, [saveContent, showToast]);

  const deleteStory = useCallback((highlightId, slideIndex) => {
    saveContent((prev) => ({
      ...prev,
      highlights: prev.highlights.map((h) => {
        if (h.id === highlightId) {
          const newSlides = h.slides.filter((_, idx) => idx !== slideIndex);
          return { ...h, slides: newSlides };
        }
        return h;
      })
    }));
    showToast('Story slide removed');
  }, [saveContent, showToast]);

  const reorderStory = useCallback((highlightId, fromIndex, toIndex) => {
    saveContent((prev) => ({
      ...prev,
      highlights: prev.highlights.map((h) => {
        if (h.id === highlightId) {
          const newSlides = [...h.slides];
          if (toIndex < 0 || toIndex >= newSlides.length) return h;
          const [moved] = newSlides.splice(fromIndex, 1);
          newSlides.splice(toIndex, 0, moved);
          return { ...h, slides: newSlides };
        }
        return h;
      })
    }));
    showToast('Story slide order updated');
  }, [saveContent, showToast]);

  const moveStoryToHighlight = useCallback((fromHighlightId, toHighlightId, slideIndex) => {
    if (fromHighlightId === toHighlightId) return;
    saveContent((prev) => {
      const fromHighlight = prev.highlights.find((h) => h.id === fromHighlightId);
      if (!fromHighlight || !fromHighlight.slides[slideIndex]) return prev;
      const slideToMove = fromHighlight.slides[slideIndex];

      return {
        ...prev,
        highlights: prev.highlights.map((h) => {
          if (h.id === fromHighlightId) {
            return { ...h, slides: h.slides.filter((_, idx) => idx !== slideIndex) };
          }
          if (h.id === toHighlightId) {
            return { ...h, slides: [...h.slides, slideToMove] };
          }
          return h;
        })
      };
    });
    showToast('Story transferred to new Highlight');
  }, [saveContent, showToast]);

  // Photos management
  const addPhoto = useCallback((photo) => {
    const newPhoto = {
      id: `photo-${Date.now()}`,
      visible: true,
      category: 'Gallery',
      ...photo
    };
    saveContent((prev) => ({
      ...prev,
      photos: [...prev.photos, newPhoto]
    }));
    showToast('New photo added');
  }, [saveContent, showToast]);

  const updatePhoto = useCallback((id, updated) => {
    saveContent((prev) => ({
      ...prev,
      photos: prev.photos.map((p) => (p.id === id ? { ...p, ...updated } : p))
    }));
    showToast('Photo details updated');
  }, [saveContent, showToast]);

  const deletePhoto = useCallback((id) => {
    saveContent((prev) => ({
      ...prev,
      photos: prev.photos.filter((p) => p.id !== id)
    }));
    showToast('Photo removed');
  }, [saveContent, showToast]);

  const reorderPhoto = useCallback((fromIndex, toIndex) => {
    saveContent((prev) => {
      const list = [...prev.photos];
      if (toIndex < 0 || toIndex >= list.length) return prev;
      const [item] = list.splice(fromIndex, 1);
      list.splice(toIndex, 0, item);
      return { ...prev, photos: list };
    });
    showToast('Photo order changed');
  }, [saveContent, showToast]);

  const togglePhotoVisibility = useCallback((id) => {
    saveContent((prev) => ({
      ...prev,
      photos: prev.photos.map((p) => (p.id === id ? { ...p, visible: !p.visible } : p))
    }));
    showToast('Photo visibility toggled');
  }, [saveContent, showToast]);

  // Protection and watermark settings
  const updateProtectionSettings = useCallback((partial) => {
    saveContent((prev) => ({
      ...prev,
      protectionSettings: { ...prev.protectionSettings, ...partial }
    }));
    showToast('Security & protection settings updated');
  }, [saveContent, showToast]);

  const updateWatermarkSettings = useCallback((partial) => {
    saveContent((prev) => ({
      ...prev,
      watermarkSettings: { ...prev.watermarkSettings, ...partial }
    }));
    showToast('Watermark settings updated');
  }, [saveContent, showToast]);

  // Reset to original defaults
  const resetToDefaults = useCallback(() => {
    const defaults = {
      personalInfo: DEFAULT_PERSONAL_INFO,
      highlights: DEFAULT_HIGHLIGHTS,
      photos: DEFAULT_PHOTOS,
      protectionSettings: DEFAULT_PROTECTION,
      watermarkSettings: DEFAULT_WATERMARK,
      adminPin: 'admin123'
    };
    saveContent(defaults);
    showToast('Reset all content to original defaults');
  }, [saveContent, showToast]);

  // Data import / export
  const exportData = useCallback(() => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(content, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `hitesh-portfolio-backup-${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast('Backup JSON exported successfully');
  }, [content, showToast]);

  const importData = useCallback((jsonString) => {
    try {
      const parsed = JSON.parse(jsonString);
      if (!parsed.personalInfo || !parsed.highlights) {
        throw new Error('Invalid JSON structure');
      }
      saveContent((prev) => ({
        ...prev,
        ...parsed
      }));
      showToast('Data imported successfully');
      return true;
    } catch (err) {
      console.error(err);
      showToast('Error importing file: invalid JSON format');
      return false;
    }
  }, [saveContent, showToast]);

  // Global browser protection listeners
  useEffect(() => {
    const { disableRightClick, disableDrag, disableShortcuts } = content.protectionSettings;

    // Right-click protection
    const handleContextMenu = (e) => {
      if (disableRightClick) {
        // Allow right click if interacting with admin inputs
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        e.preventDefault();
        showToast('Right-click is protected on this portfolio');
      }
    };

    // Keyboard shortcut protection (Ctrl+S, Ctrl+P, Ctrl+U)
    const handleKeyDown = (e) => {
      if (!disableShortcuts) return;
      if (
        (e.ctrlKey || e.metaKey) &&
        (e.key === 's' || e.key === 'S' || e.key === 'u' || e.key === 'U' || e.key === 'p' || e.key === 'P')
      ) {
        e.preventDefault();
        showToast(`Save & view source shortcuts are disabled`);
      }
      if (e.key === 'PrintScreen') {
        showToast('Screen capture detected — content protected');
      }
    };

    // Drag-to-save protection on images
    const handleDragStart = (e) => {
      if (disableDrag && e.target.tagName === 'IMG') {
        e.preventDefault();
      }
    };

    window.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('dragstart', handleDragStart);

    return () => {
      window.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('dragstart', handleDragStart);
    };
  }, [content.protectionSettings, showToast]);

  const value = {
    personalInfo: content.personalInfo,
    highlights: content.highlights,
    photos: content.photos,
    protectionSettings: content.protectionSettings,
    watermarkSettings: content.watermarkSettings,
    isAdmin,
    login,
    logout,
    updatePin,
    updatePersonalInfo,
    addHighlight,
    updateHighlight,
    deleteHighlight,
    reorderHighlight,
    addStory,
    updateStory,
    deleteStory,
    reorderStory,
    moveStoryToHighlight,
    addPhoto,
    updatePhoto,
    deletePhoto,
    reorderPhoto,
    togglePhotoVisibility,
    updateProtectionSettings,
    updateWatermarkSettings,
    resetToDefaults,
    exportData,
    importData,
    showToast
  };

  return (
    <ContentContext.Provider value={value}>
      {children}
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-full bg-neutral-900/95 text-neutral-100 text-xs font-mono border border-white/20 shadow-2xl flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <span className="w-2 h-2 rounded-full bg-[#d4ff4f] animate-pulse" />
          <span>{toastMessage}</span>
        </div>
      )}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
}
