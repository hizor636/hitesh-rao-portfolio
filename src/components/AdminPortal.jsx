import React, { useState, useRef } from 'react';
import { useContent } from '../context/ContentContext';
import {
  Shield,
  Lock,
  LogOut,
  Image as ImageIcon,
  Sparkles,
  FileText,
  Eye,
  EyeOff,
  Trash2,
  Edit2,
  Plus,
  ArrowUp,
  ArrowDown,
  ArrowRight,
  Download,
  Upload,
  RefreshCw,
  Check,
  X,
  ExternalLink,
  ChevronRight,
  MoveHorizontal
} from 'lucide-react';

export default function AdminPortal({ onClose }) {
  const {
    personalInfo,
    highlights,
    photos,
    protectionSettings,
    watermarkSettings,
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
  } = useContent();

  const [pinInput, setPinInput] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [loginError, setLoginError] = useState(false);

  // Active Tab: 'stories' | 'photos' | 'content' | 'protection' | 'backup'
  const [activeTab, setActiveTab] = useState('stories');

  // Highlights state for modals/forms
  const [editingHighlight, setEditingHighlight] = useState(null);
  const [isAddHighlightOpen, setIsAddHighlightOpen] = useState(false);
  const [selectedHighlightId, setSelectedHighlightId] = useState(highlights[0]?.id || '');

  // Story state for modals/forms
  const [editingStoryIndex, setEditingStoryIndex] = useState(null);
  const [isAddStoryOpen, setIsAddStoryOpen] = useState(false);

  // Photos state for modals/forms
  const [isAddPhotoOpen, setIsAddPhotoOpen] = useState(false);
  const [editingPhoto, setEditingPhoto] = useState(null);

  // General content form state
  const [generalForm, setGeneralForm] = useState({ ...personalInfo });

  // PIN change state
  const [newPin, setNewPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');

  // File import ref
  const fileImportRef = useRef(null);

  // Handle Login submission
  const handleLogin = (e) => {
    e.preventDefault();
    const success = login(pinInput, rememberMe);
    if (!success) {
      setLoginError(true);
      setTimeout(() => setLoginError(false), 2000);
    } else {
      setPinInput('');
    }
  };

  // Helper: Convert File to base64 data URL with optional client-side optimization
  const processImageFile = (file, callback) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        // Resize if larger than 1400px to preserve localStorage quota
        const maxDim = 1400;
        let width = img.width;
        let height = img.height;
        if (width > maxDim || height > maxDim) {
          if (width > height) {
            height = Math.round((height * maxDim) / width);
            width = maxDim;
          } else {
            width = Math.round((width * maxDim) / height);
            height = maxDim;
          }
        }
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        const optimizedDataUrl = canvas.toDataURL('image/jpeg', 0.85);
        callback(optimizedDataUrl);
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  };

  // If not logged in, render the secure authentication gate
  if (!isAdmin) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#080808]/95 backdrop-blur-2xl text-neutral-100 font-sans">
        <div className="w-full max-w-md p-6 sm:p-8 rounded-3xl bg-[#111216] border border-white/10 shadow-2xl relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
            title="Return to website"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-2xl bg-[#d4ff4f]/10 border border-[#d4ff4f]/30 text-[#d4ff4f]">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-tight text-white">Admin Management Portal</h2>
              <p className="text-xs font-mono text-neutral-400">Hitesh Rao M Portfolio</p>
            </div>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-mono text-neutral-300 uppercase tracking-wider mb-2">
                Administrator PIN / Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value)}
                  placeholder="Enter PIN (Default: admin123)"
                  autoFocus
                  className={`w-full px-4 py-3 rounded-xl bg-black/50 border font-mono text-sm text-white placeholder-neutral-500 focus:outline-hidden transition-all ${
                    loginError
                      ? 'border-red-500 bg-red-950/20 animate-shake'
                      : 'border-white/15 focus:border-[#d4ff4f] focus:ring-1 focus:ring-[#d4ff4f]'
                  }`}
                />
                <Lock className="w-4 h-4 text-neutral-400 absolute right-3.5 top-3.5" />
              </div>
              {loginError && (
                <p className="mt-1.5 text-xs text-red-400 font-mono">Incorrect PIN. Default is admin123</p>
              )}
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="rounded border-white/20 bg-black/40 text-[#d4ff4f] focus:ring-0"
                />
                <span>Remember me on this browser</span>
              </label>
              <span className="text-[11px] text-neutral-500">PIN: admin123</span>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-[#d4ff4f] hover:bg-[#bceb3b] text-black font-semibold text-xs font-mono uppercase tracking-wider transition-all hover:scale-[1.01] active:scale-[0.99] shadow-[0_4px_20px_rgba(212,255,79,0.25)] cursor-pointer"
            >
              Unlock Dashboard
            </button>
          </form>

          <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between text-xs font-mono text-neutral-400">
            <span>Zero-Cost Serverless Storage</span>
            <button
              onClick={onClose}
              className="hover:text-white transition-colors"
            >
              ← Back to Portfolio
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Active Highlight object for Story management
  const currentHighlight = highlights.find((h) => h.id === selectedHighlightId) || highlights[0];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#090a0d] text-neutral-100 font-sans">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-30 px-4 sm:px-8 py-3.5 bg-[#101116]/90 backdrop-blur-md border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-[#d4ff4f]/15 text-[#d4ff4f] border border-[#d4ff4f]/30">
            <Shield className="w-4 h-4" />
          </div>
          <div>
            <h1 className="text-sm font-bold text-white tracking-tight flex items-center gap-2">
              <span>Admin Management Portal</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-[#d4ff4f]/20 text-[#d4ff4f] border border-[#d4ff4f]/30">
                Live Sync Enabled
              </span>
            </h1>
            <p className="text-[11px] font-mono text-neutral-400">Changes persist across browser refreshes</p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onClose}
            className="px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-mono text-white flex items-center gap-1.5 transition-colors cursor-pointer"
            title="View website with applied changes"
          >
            <span>View Live Site</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={logout}
            className="p-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 text-xs font-mono transition-colors cursor-pointer"
            title="Sign out of Admin"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Main Admin Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 border-b border-white/10 no-scrollbar">
          <button
            onClick={() => setActiveTab('stories')}
            className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'stories'
                ? 'bg-[#d4ff4f] text-black font-semibold shadow-md'
                : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Highlights &amp; Stories ({highlights.reduce((acc, h) => acc + h.slides.length, 0)})</span>
          </button>

          <button
            onClick={() => setActiveTab('photos')}
            className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'photos'
                ? 'bg-[#d4ff4f] text-black font-semibold shadow-md'
                : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10'
            }`}
          >
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Photos &amp; Gallery ({photos.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('content')}
            className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'content'
                ? 'bg-[#d4ff4f] text-black font-semibold shadow-md'
                : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>General Content</span>
          </button>

          <button
            onClick={() => setActiveTab('protection')}
            className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'protection'
                ? 'bg-[#d4ff4f] text-black font-semibold shadow-md'
                : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10'
            }`}
          >
            <Shield className="w-3.5 h-3.5" />
            <span>Protection &amp; Watermarks</span>
          </button>

          <button
            onClick={() => setActiveTab('backup')}
            className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'backup'
                ? 'bg-[#d4ff4f] text-black font-semibold shadow-md'
                : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10'
            }`}
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Backup &amp; Reset</span>
          </button>
        </div>

        {/* TAB 1: HIGHLIGHTS & STORIES */}
        {activeTab === 'stories' && (
          <div className="space-y-8">
            {/* Top Toolbar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/10">
              <div>
                <h2 className="text-base font-semibold text-white">Story Highlights &amp; Slides</h2>
                <p className="text-xs font-mono text-neutral-400">
                  Manage Instagram-style circular highlights and the individual story slides inside each.
                </p>
              </div>
              <button
                onClick={() => setIsAddHighlightOpen(true)}
                className="px-4 py-2.5 rounded-xl bg-[#d4ff4f] hover:bg-[#bceb3b] text-black font-mono text-xs uppercase font-semibold tracking-wider flex items-center gap-2 transition-transform active:scale-95 cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>New Highlight Circle</span>
              </button>
            </div>

            {/* Highlights List (Circles Row Preview & Order) */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                Highlight Categories ({highlights.length}) — Click to view stories
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {highlights.map((hl, index) => {
                  const isSelected = hl.id === (currentHighlight?.id || '');
                  return (
                    <div
                      key={hl.id}
                      onClick={() => setSelectedHighlightId(hl.id)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-white/[0.06] border-[#d4ff4f] shadow-[0_0_20px_rgba(212,255,79,0.15)]'
                          : 'bg-white/[0.02] border-white/10 hover:border-white/30'
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/20 shrink-0">
                          <img
                            src={hl.coverImg}
                            alt={hl.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <span className="block text-sm font-semibold text-white truncate">{hl.title}</span>
                          <span className="block text-[11px] font-mono text-[#d4ff4f]">{hl.badge}</span>
                          <span className="block text-[10px] font-mono text-neutral-400">{hl.slides.length} slides</span>
                        </div>
                      </div>

                      {/* Highlight Control Actions */}
                      <div className="flex items-center justify-between pt-2.5 border-t border-white/10 text-xs font-mono">
                        <div className="flex items-center gap-1">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              reorderHighlight(index, index - 1);
                            }}
                            disabled={index === 0}
                            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 disabled:opacity-30 disabled:cursor-not-allowed"
                            title="Move left/up"
                          >
                            <ArrowUp className="w-3 h-3" />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              reorderHighlight(index, index + 1);
                            }}
                            disabled={index === highlights.length - 1}
                            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 disabled:opacity-30 disabled:cursor-not-allowed"
                            title="Move right/down"
                          >
                            <ArrowDown className="w-3 h-3" />
                          </button>
                        </div>

                        <div className="flex items-center gap-1">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setEditingHighlight(hl);
                            }}
                            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-neutral-300 hover:text-white"
                            title="Edit highlight category"
                          >
                            <Edit2 className="w-3 h-3" />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              if (confirm(`Delete highlight "${hl.title}" and all its slides?`)) {
                                deleteHighlight(hl.id);
                              }
                            }}
                            className="p-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400"
                            title="Delete highlight"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Selected Highlight's Story Slides */}
            {currentHighlight && (
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
                  <div>
                    <span className="text-[11px] font-mono text-[#d4ff4f] uppercase tracking-wider block">
                      Currently Selected Highlight
                    </span>
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <span>{currentHighlight.title}</span>
                      <span className="text-xs font-mono text-neutral-400">({currentHighlight.slides.length} Stories)</span>
                    </h3>
                  </div>

                  <button
                    onClick={() => setIsAddStoryOpen(true)}
                    className="px-4 py-2 rounded-xl bg-white/10 hover:bg-[#d4ff4f] hover:text-black text-white font-mono text-xs uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add Story to "{currentHighlight.title}"</span>
                  </button>
                </div>

                {/* Slides List */}
                {currentHighlight.slides.length === 0 ? (
                  <div className="py-12 text-center text-neutral-500 font-mono text-xs">
                    No story slides in this highlight yet. Click "Add Story" above to upload photos and slides.
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {currentHighlight.slides.map((slide, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-4 rounded-xl bg-black/40 border border-white/10 flex flex-col justify-between space-y-3 group"
                      >
                        <div className="space-y-3">
                          <div className="relative aspect-4/3 w-full rounded-lg overflow-hidden bg-neutral-900 border border-white/10">
                            <img
                              src={slide.img}
                              alt={slide.alt || slide.tag}
                              className="w-full h-full object-cover"
                            />
                            <span className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-xs text-[10px] font-mono text-[#d4ff4f] border border-white/10">
                              Slide {sIdx + 1}
                            </span>
                            <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-xs text-[10px] font-mono text-neutral-300 border border-white/10 truncate max-w-[90%]">
                              {slide.date}
                            </span>
                          </div>

                          <div>
                            <span className="text-xs font-semibold text-white block truncate">{slide.tag}</span>
                            <p className="text-xs text-neutral-400 line-clamp-3 mt-1 leading-relaxed">
                              {slide.text}
                            </p>
                          </div>
                        </div>

                        {/* Slide actions */}
                        <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => reorderStory(currentHighlight.id, sIdx, sIdx - 1)}
                              disabled={sIdx === 0}
                              className="p-1 rounded bg-white/5 hover:bg-white/15 disabled:opacity-30 disabled:cursor-not-allowed"
                              title="Move slide earlier"
                            >
                              <ArrowUp className="w-3 h-3" />
                            </button>
                            <button
                              onClick={() => reorderStory(currentHighlight.id, sIdx, sIdx + 1)}
                              disabled={sIdx === currentHighlight.slides.length - 1}
                              className="p-1 rounded bg-white/5 hover:bg-white/15 disabled:opacity-30 disabled:cursor-not-allowed"
                              title="Move slide later"
                            >
                              <ArrowDown className="w-3 h-3" />
                            </button>

                            {/* Move to another Highlight selector */}
                            {highlights.length > 1 && (
                              <select
                                onChange={(e) => {
                                  if (e.target.value) {
                                    moveStoryToHighlight(currentHighlight.id, e.target.value, sIdx);
                                  }
                                }}
                                defaultValue=""
                                className="ml-1 px-1.5 py-0.5 rounded bg-white/5 hover:bg-white/10 border border-white/10 text-[10px] text-neutral-300 focus:outline-hidden"
                                title="Move story to another highlight category"
                              >
                                <option value="" disabled>Move to...</option>
                                {highlights
                                  .filter((h) => h.id !== currentHighlight.id)
                                  .map((h) => (
                                    <option key={h.id} value={h.id} className="bg-neutral-900 text-white">
                                      {h.title}
                                    </option>
                                  ))}
                              </select>
                            )}
                          </div>

                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => setEditingStoryIndex(sIdx)}
                              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-neutral-300 hover:text-white"
                              title="Edit slide"
                            >
                              <Edit2 className="w-3 h-3" />
                            </button>
                            <button
                              onClick={() => {
                                if (confirm(`Remove slide ${sIdx + 1}?`)) {
                                  deleteStory(currentHighlight.id, sIdx);
                                }
                              }}
                              className="p-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400"
                              title="Delete slide"
                            >
                              <Trash2 className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* TAB 2: PHOTOS & GALLERY */}
        {activeTab === 'photos' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/10">
              <div>
                <h2 className="text-base font-semibold text-white">Portfolio Photos &amp; Visuals</h2>
                <p className="text-xs font-mono text-neutral-400">
                  Upload, caption, reorder, and toggle visibility for all visual assets.
                </p>
              </div>
              <button
                onClick={() => setIsAddPhotoOpen(true)}
                className="px-4 py-2.5 rounded-xl bg-[#d4ff4f] hover:bg-[#bceb3b] text-black font-mono text-xs uppercase font-semibold tracking-wider flex items-center gap-2 transition-transform active:scale-95 cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Upload New Photo</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {photos.map((photo, index) => (
                <div
                  key={photo.id}
                  className={`p-3.5 rounded-2xl border transition-all ${
                    photo.visible
                      ? 'bg-black/40 border-white/10'
                      : 'bg-black/20 border-white/5 opacity-60'
                  }`}
                >
                  <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-neutral-900 border border-white/10 mb-3">
                    <img
                      src={photo.url}
                      alt={photo.alt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2 flex items-center gap-1.5">
                      <span className="px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-xs text-[10px] font-mono text-neutral-300 border border-white/10">
                        {photo.category}
                      </span>
                    </div>

                    <div className="absolute top-2 right-2">
                      <button
                        onClick={() => togglePhotoVisibility(photo.id)}
                        className={`p-1.5 rounded-full backdrop-blur-md border ${
                          photo.visible
                            ? 'bg-[#d4ff4f]/20 border-[#d4ff4f]/40 text-[#d4ff4f]'
                            : 'bg-black/60 border-white/20 text-neutral-400'
                        }`}
                        title={photo.visible ? 'Visible on site — Click to hide' : 'Hidden from site — Click to show'}
                      >
                        {photo.visible ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-1 mb-3">
                    <span className="block text-xs font-semibold text-white truncate">{photo.caption}</span>
                    <span className="block text-[11px] font-mono text-neutral-400 truncate">{photo.alt}</span>
                  </div>

                  {/* Controls */}
                  <div className="flex items-center justify-between pt-2.5 border-t border-white/10 text-xs font-mono">
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => reorderPhoto(index, index - 1)}
                        disabled={index === 0}
                        className="p-1 rounded bg-white/5 hover:bg-white/15 disabled:opacity-30 disabled:cursor-not-allowed"
                        title="Move photo earlier"
                      >
                        <ArrowUp className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => reorderPhoto(index, index + 1)}
                        disabled={index === photos.length - 1}
                        className="p-1 rounded bg-white/5 hover:bg-white/15 disabled:opacity-30 disabled:cursor-not-allowed"
                        title="Move photo later"
                      >
                        <ArrowDown className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => setEditingPhoto(photo)}
                        className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-neutral-300 hover:text-white"
                        title="Edit caption/alt"
                      >
                        <Edit2 className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => {
                          if (confirm('Delete this photo?')) {
                            deletePhoto(photo.id);
                          }
                        }}
                        className="p-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400"
                        title="Delete photo"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: GENERAL CONTENT */}
        {activeTab === 'content' && (
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center justify-between">
              <div>
                <h2 className="text-base font-semibold text-white">General Portfolio Text &amp; Copy</h2>
                <p className="text-xs font-mono text-neutral-400">
                  Update headline, bio, contact details, CGPA, and career availability.
                </p>
              </div>
              <button
                onClick={() => {
                  updatePersonalInfo(generalForm);
                }}
                className="px-5 py-2.5 rounded-xl bg-[#d4ff4f] hover:bg-[#bceb3b] text-black font-mono text-xs uppercase font-semibold tracking-wider transition-all active:scale-95 cursor-pointer"
              >
                Save All Changes
              </button>
            </div>

            <div className="p-6 rounded-2xl bg-black/40 border border-white/10 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={generalForm.name || ''}
                    onChange={(e) => setGeneralForm({ ...generalForm, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-sm text-white font-mono focus:border-[#d4ff4f] focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-1.5">
                    Professional Role / Title
                  </label>
                  <input
                    type="text"
                    value={generalForm.role || ''}
                    onChange={(e) => setGeneralForm({ ...generalForm, role: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-sm text-white font-mono focus:border-[#d4ff4f] focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-1.5">
                    Institution / College
                  </label>
                  <input
                    type="text"
                    value={generalForm.college || ''}
                    onChange={(e) => setGeneralForm({ ...generalForm, college: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-sm text-white font-mono focus:border-[#d4ff4f] focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-1.5">
                    Degree &amp; Class
                  </label>
                  <input
                    type="text"
                    value={generalForm.degree || ''}
                    onChange={(e) => setGeneralForm({ ...generalForm, degree: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-sm text-white font-mono focus:border-[#d4ff4f] focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-1.5">
                    Current Verified CGPA
                  </label>
                  <input
                    type="text"
                    value={generalForm.cgpa || ''}
                    onChange={(e) => setGeneralForm({ ...generalForm, cgpa: e.target.value, currentCgpa: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-sm text-[#d4ff4f] font-mono focus:border-[#d4ff4f] focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-1.5">
                    Location
                  </label>
                  <input
                    type="text"
                    value={generalForm.location || ''}
                    onChange={(e) => setGeneralForm({ ...generalForm, location: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-sm text-white font-mono focus:border-[#d4ff4f] focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-1.5">
                    Primary Email
                  </label>
                  <input
                    type="email"
                    value={generalForm.email || ''}
                    onChange={(e) => setGeneralForm({ ...generalForm, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-sm text-white font-mono focus:border-[#d4ff4f] focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-1.5">
                    LinkedIn Profile URL
                  </label>
                  <input
                    type="text"
                    value={generalForm.linkedin || ''}
                    onChange={(e) => setGeneralForm({ ...generalForm, linkedin: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-sm text-white font-mono focus:border-[#d4ff4f] focus:outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-1.5">
                  Hero Headline
                </label>
                <input
                  type="text"
                  value={generalForm.headline || ''}
                  onChange={(e) => setGeneralForm({ ...generalForm, headline: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-sm text-white font-mono focus:border-[#d4ff4f] focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-1.5">
                  Hero Subheadline Narrative
                </label>
                <textarea
                  rows={4}
                  value={generalForm.subheadline || ''}
                  onChange={(e) => setGeneralForm({ ...generalForm, subheadline: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-sm text-white font-sans leading-relaxed focus:border-[#d4ff4f] focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-1.5">
                  Availability Banner Status
                </label>
                <input
                  type="text"
                  value={generalForm.status || ''}
                  onChange={(e) => setGeneralForm({ ...generalForm, status: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-sm text-white font-mono focus:border-[#d4ff4f] focus:outline-hidden"
                />
              </div>

              <div className="pt-4 border-t border-white/10 flex justify-end">
                <button
                  onClick={() => updatePersonalInfo(generalForm)}
                  className="px-6 py-3 rounded-xl bg-[#d4ff4f] hover:bg-[#bceb3b] text-black font-mono text-xs uppercase font-semibold tracking-wider transition-all active:scale-95 cursor-pointer"
                >
                  Save All Changes
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: PROTECTION & WATERMARKS */}
        {activeTab === 'protection' && (
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Protection Controls */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-6">
              <div>
                <h2 className="text-base font-semibold text-white flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#d4ff4f]" />
                  <span>Content Protection &amp; Anti-Theft Guard</span>
                </h2>
                <p className="text-xs font-mono text-neutral-400 mt-1">
                  Control client-side protections to prevent casual content copying, image scraping, and unauthorized saving.
                </p>
              </div>

              <div className="space-y-4">
                {/* 1. Right Click */}
                <div className="flex items-center justify-between p-4 rounded-xl bg-black/40 border border-white/10">
                  <div>
                    <span className="block text-sm font-medium text-white">Disable Right-Click Context Menu</span>
                    <span className="block text-xs font-mono text-neutral-400 mt-0.5">
                      Prevents visitors from right-clicking to copy text or select "Save Image As..."
                    </span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={protectionSettings.disableRightClick}
                      onChange={(e) => updateProtectionSettings({ disableRightClick: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-white/10 peer-focus:outline-hidden rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#d4ff4f]"></div>
                  </label>
                </div>

                {/* 2. Drag & Drop */}
                <div className="flex items-center justify-between p-4 rounded-xl bg-black/40 border border-white/10">
                  <div>
                    <span className="block text-sm font-medium text-white">Disable Drag-to-Save on Images</span>
                    <span className="block text-xs font-mono text-neutral-400 mt-0.5">
                      Blocks dragging images directly off the webpage to the desktop or browser tabs.
                    </span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={protectionSettings.disableDrag}
                      onChange={(e) => updateProtectionSettings({ disableDrag: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-white/10 peer-focus:outline-hidden rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#d4ff4f]"></div>
                  </label>
                </div>

                {/* 3. Keyboard Shortcuts */}
                <div className="flex items-center justify-between p-4 rounded-xl bg-black/40 border border-white/10">
                  <div>
                    <span className="block text-sm font-medium text-white">Intercept Save &amp; Print Shortcuts</span>
                    <span className="block text-xs font-mono text-neutral-400 mt-0.5">
                      Blocks Ctrl+S (Save webpage), Ctrl+P (Print page), and Ctrl+U (View source).
                    </span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={protectionSettings.disableShortcuts}
                      onChange={(e) => updateProtectionSettings({ disableShortcuts: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-white/10 peer-focus:outline-hidden rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#d4ff4f]"></div>
                  </label>
                </div>
              </div>
            </div>

            {/* Watermark Controls */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-base font-semibold text-white">Dynamic Visual Watermarking</h2>
                  <p className="text-xs font-mono text-neutral-400 mt-1">
                    Render an authentic copyright watermark over all portfolio photos and story slides.
                  </p>
                </div>

                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={watermarkSettings.enabled}
                    onChange={(e) => updateWatermarkSettings({ enabled: e.target.checked })}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-white/10 peer-focus:outline-hidden rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#d4ff4f]"></div>
                </label>
              </div>

              {watermarkSettings.enabled && (
                <div className="p-5 rounded-xl bg-black/40 border border-white/10 space-y-4 animate-in fade-in duration-200">
                  <div>
                    <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-1.5">
                      Watermark Text
                    </label>
                    <input
                      type="text"
                      value={watermarkSettings.text || ''}
                      onChange={(e) => updateWatermarkSettings({ text: e.target.value })}
                      placeholder="e.g. © Hitesh Rao M • Verified Portfolio"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-sm text-white font-mono focus:border-[#d4ff4f] focus:outline-hidden"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-1.5">
                        Watermark Layout / Position
                      </label>
                      <select
                        value={watermarkSettings.position || 'diagonal'}
                        onChange={(e) => updateWatermarkSettings({ position: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-white/15 text-sm text-white font-mono focus:border-[#d4ff4f] focus:outline-hidden"
                      >
                        <option value="diagonal">Diagonal Pattern (Hardest to crop/erase)</option>
                        <option value="bottom-right">Bottom-Right Corner Pill</option>
                        <option value="center">Center Brand Mark</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-1.5">
                        Opacity: {Math.round((watermarkSettings.opacity || 0.35) * 100)}%
                      </label>
                      <input
                        type="range"
                        min="0.1"
                        max="0.8"
                        step="0.05"
                        value={watermarkSettings.opacity || 0.35}
                        onChange={(e) => updateWatermarkSettings({ opacity: parseFloat(e.target.value) })}
                        className="w-full accent-[#d4ff4f] mt-3 cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Change Admin Password / PIN */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
              <h2 className="text-base font-semibold text-white">Change Admin PIN / Password</h2>
              <p className="text-xs font-mono text-neutral-400">
                Update the PIN used to access this admin panel.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="password"
                    placeholder="New PIN (min 4 characters)"
                    value={newPin}
                    onChange={(e) => setNewPin(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-sm text-white font-mono focus:border-[#d4ff4f] focus:outline-hidden"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Confirm New PIN"
                    value={confirmPin}
                    onChange={(e) => setConfirmPin(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-sm text-white font-mono focus:border-[#d4ff4f] focus:outline-hidden"
                  />
                </div>
              </div>

              <button
                onClick={() => {
                  if (newPin.length < 4) {
                    showToast('PIN must be at least 4 characters');
                    return;
                  }
                  if (newPin !== confirmPin) {
                    showToast('PINs do not match');
                    return;
                  }
                  updatePin(newPin);
                  setNewPin('');
                  setConfirmPin('');
                }}
                disabled={!newPin || !confirmPin}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-[#d4ff4f] hover:text-black text-white font-mono text-xs uppercase tracking-wider transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
              >
                Update PIN
              </button>
            </div>
          </div>
        )}

        {/* TAB 5: BACKUP & RESET */}
        {activeTab === 'backup' && (
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-6">
              <div>
                <h2 className="text-base font-semibold text-white">Data Export, Import &amp; Reset</h2>
                <p className="text-xs font-mono text-neutral-400 mt-1">
                  Keep backups of your customized portfolio content, export to a file, or reset to factory defaults.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Export */}
                <div className="p-4 rounded-xl bg-black/40 border border-white/10 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-1">Export JSON Backup</h3>
                    <p className="text-xs text-neutral-400 mb-4">
                      Download a complete backup of all custom text, highlights, stories, photos, and settings.
                    </p>
                  </div>
                  <button
                    onClick={exportData}
                    className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download JSON</span>
                  </button>
                </div>

                {/* Import */}
                <div className="p-4 rounded-xl bg-black/40 border border-white/10 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-1">Import from JSON</h3>
                    <p className="text-xs text-neutral-400 mb-4">
                      Restore content from a previously saved JSON file on your computer.
                    </p>
                  </div>
                  <input
                    type="file"
                    ref={fileImportRef}
                    accept=".json"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onload = (ev) => {
                          importData(ev.target.result);
                        };
                        reader.readAsText(file);
                      }
                      e.target.value = '';
                    }}
                  />
                  <button
                    onClick={() => fileImportRef.current?.click()}
                    className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    <span>Import JSON</span>
                  </button>
                </div>

                {/* Reset */}
                <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/20 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-red-300 mb-1">Reset to Defaults</h3>
                    <p className="text-xs text-neutral-400 mb-4">
                      Reverts all customized copy, photos, and highlights back to the original source defaults.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      if (confirm('Are you sure you want to reset all content to original defaults? Any custom uploaded stories will be cleared.')) {
                        resetToDefaults();
                      }
                    }}
                    className="w-full py-2.5 rounded-xl bg-red-500/20 hover:bg-red-500/30 text-red-300 border border-red-500/30 font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Reset Content</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ========================================================================= */}
      {/* MODAL 1: ADD / EDIT HIGHLIGHT CATEGORY */}
      {/* ========================================================================= */}
      {(isAddHighlightOpen || editingHighlight) && (
        <HighlightModal
          isOpen={true}
          highlight={editingHighlight}
          onClose={() => {
            setIsAddHighlightOpen(false);
            setEditingHighlight(null);
          }}
          onSave={(data) => {
            if (editingHighlight) {
              updateHighlight(editingHighlight.id, data);
            } else {
              addHighlight({
                id: data.id || `hl-${Date.now()}`,
                title: data.title || 'New Highlight',
                badge: data.badge || 'Campus Life',
                icon: data.icon || 'sparkles',
                coverImg: data.coverImg || '/images/highlight-college.jpg',
                color: data.color || '#d4ff4f',
                slides: []
              });
            }
            setIsAddHighlightOpen(false);
            setEditingHighlight(null);
          }}
          processImageFile={processImageFile}
        />
      )}

      {/* ========================================================================= */}
      {/* MODAL 2: ADD / EDIT STORY SLIDE */}
      {/* ========================================================================= */}
      {(isAddStoryOpen || editingStoryIndex !== null) && currentHighlight && (
        <StorySlideModal
          isOpen={true}
          highlightTitle={currentHighlight.title}
          slide={editingStoryIndex !== null ? currentHighlight.slides[editingStoryIndex] : null}
          onClose={() => {
            setIsAddStoryOpen(false);
            setEditingStoryIndex(null);
          }}
          onSave={(slideData) => {
            if (editingStoryIndex !== null) {
              updateStory(currentHighlight.id, editingStoryIndex, slideData);
            } else {
              addStory(currentHighlight.id, slideData);
            }
            setIsAddStoryOpen(false);
            setEditingStoryIndex(null);
          }}
          processImageFile={processImageFile}
        />
      )}

      {/* ========================================================================= */}
      {/* MODAL 3: ADD / EDIT PHOTO */}
      {/* ========================================================================= */}
      {(isAddPhotoOpen || editingPhoto) && (
        <PhotoModal
          isOpen={true}
          photo={editingPhoto}
          onClose={() => {
            setIsAddPhotoOpen(false);
            setEditingPhoto(null);
          }}
          onSave={(photoData) => {
            if (editingPhoto) {
              updatePhoto(editingPhoto.id, photoData);
            } else {
              addPhoto(photoData);
            }
            setIsAddPhotoOpen(false);
            setEditingPhoto(null);
          }}
          processImageFile={processImageFile}
        />
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// SUB-MODAL: Add / Edit Highlight
// ---------------------------------------------------------------------------
function HighlightModal({ isOpen, highlight, onClose, onSave, processImageFile }) {
  const [title, setTitle] = useState(highlight?.title || '');
  const [badge, setBadge] = useState(highlight?.badge || '');
  const [color, setColor] = useState(highlight?.color || '#d4ff4f');
  const [coverImg, setCoverImg] = useState(highlight?.coverImg || '');
  const [icon, setIcon] = useState(highlight?.icon || 'sparkles');

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="w-full max-w-lg p-6 rounded-3xl bg-[#121318] border border-white/10 shadow-2xl space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <h3 className="text-base font-bold text-white">
            {highlight ? `Edit Highlight "${highlight.title}"` : 'Create New Highlight Circle'}
          </h3>
          <button onClick={onClose} className="p-1 rounded-full text-neutral-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4 text-xs font-mono">
          <div>
            <label className="block text-neutral-400 uppercase tracking-wider mb-1">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Professional, NCET College, My Lyfff"
              className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white"
            />
          </div>

          <div>
            <label className="block text-neutral-400 uppercase tracking-wider mb-1">Badge / Tagline</label>
            <input
              type="text"
              value={badge}
              onChange={(e) => setBadge(e.target.value)}
              placeholder="e.g. Events & Ops, Campus Life, Outdoors"
              className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-neutral-400 uppercase tracking-wider mb-1">Accent Color</label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="w-10 h-10 rounded-lg cursor-pointer bg-transparent border-0"
                />
                <input
                  type="text"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="w-full px-2 py-2 rounded-lg bg-black/40 border border-white/15 text-white uppercase text-center"
                />
              </div>
            </div>

            <div>
              <label className="block text-neutral-400 uppercase tracking-wider mb-1">Icon</label>
              <select
                value={icon}
                onChange={(e) => setIcon(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-neutral-900 border border-white/15 text-white"
              >
                <option value="briefcase">Briefcase (Work)</option>
                <option value="graduation">Graduation Cap (College)</option>
                <option value="compass">Compass (Outdoors)</option>
                <option value="award">Award (Certificates)</option>
                <option value="sparkles">Sparkles</option>
              </select>
            </div>
          </div>

          {/* Cover Image Upload / URL */}
          <div>
            <label className="block text-neutral-400 uppercase tracking-wider mb-1">Cover Photo</label>
            <div className="flex items-center gap-3 mb-2">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  processImageFile(e.target.files[0], (dataUrl) => setCoverImg(dataUrl));
                }}
                className="text-xs text-neutral-400 file:mr-3 file:py-1.5 file:px-3 file:rounded-xl file:border-0 file:bg-white/10 file:text-white file:font-mono file:cursor-pointer"
              />
            </div>
            <input
              type="text"
              value={coverImg}
              onChange={(e) => setCoverImg(e.target.value)}
              placeholder="Or enter image URL (/images/..., https://...)"
              className="w-full px-3 py-2 rounded-xl bg-black/40 border border-white/15 text-white"
            />
          </div>
        </div>

        <div className="pt-3 border-t border-white/10 flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-mono text-white"
          >
            Cancel
          </button>
          <button
            onClick={() => onSave({ title, badge, color, coverImg, icon })}
            disabled={!title}
            className="px-5 py-2 rounded-xl bg-[#d4ff4f] hover:bg-[#bceb3b] text-black font-mono text-xs uppercase font-semibold disabled:opacity-40"
          >
            Save Highlight
          </button>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// SUB-MODAL: Add / Edit Story Slide
// ---------------------------------------------------------------------------
function StorySlideModal({ isOpen, highlightTitle, slide, onClose, onSave, processImageFile }) {
  const [tag, setTag] = useState(slide?.tag || '');
  const [date, setDate] = useState(slide?.date || '');
  const [text, setText] = useState(slide?.text || '');
  const [img, setImg] = useState(slide?.img || '');
  const [alt, setAlt] = useState(slide?.alt || '');

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="w-full max-w-lg p-6 rounded-3xl bg-[#121318] border border-white/10 shadow-2xl space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <h3 className="text-base font-bold text-white">
            {slide ? 'Edit Story Slide' : `Add Story Slide to "${highlightTitle}"`}
          </h3>
          <button onClick={onClose} className="p-1 rounded-full text-neutral-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4 text-xs font-mono">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-neutral-400 uppercase tracking-wider mb-1">Tag / Category</label>
              <input
                type="text"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                placeholder="e.g. Paytm, Presto Summit"
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white"
              />
            </div>

            <div>
              <label className="block text-neutral-400 uppercase tracking-wider mb-1">Date / Period</label>
              <input
                type="text"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="e.g. Oct 2026, 2025 – 2026"
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-neutral-400 uppercase tracking-wider mb-1">Story Narrative Text</label>
            <textarea
              rows={3}
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="What happened in this story moment? Metrics, impact, and learnings..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white font-sans text-xs leading-relaxed"
            />
          </div>

          <div>
            <label className="block text-neutral-400 uppercase tracking-wider mb-1">Story Photograph</label>
            <div className="flex items-center gap-3 mb-2">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  processImageFile(e.target.files[0], (dataUrl) => setImg(dataUrl));
                }}
                className="text-xs text-neutral-400 file:mr-3 file:py-1.5 file:px-3 file:rounded-xl file:border-0 file:bg-white/10 file:text-white file:font-mono file:cursor-pointer"
              />
            </div>
            <input
              type="text"
              value={img}
              onChange={(e) => setImg(e.target.value)}
              placeholder="Or enter image URL"
              className="w-full px-3 py-2 rounded-xl bg-black/40 border border-white/15 text-white"
            />
          </div>

          <div>
            <label className="block text-neutral-400 uppercase tracking-wider mb-1">Photo Alt Text</label>
            <input
              type="text"
              value={alt}
              onChange={(e) => setAlt(e.target.value)}
              placeholder="Accessibility description for this photograph"
              className="w-full px-3 py-2 rounded-xl bg-black/40 border border-white/15 text-white"
            />
          </div>
        </div>

        <div className="pt-3 border-t border-white/10 flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-mono text-white"
          >
            Cancel
          </button>
          <button
            onClick={() => onSave({ tag, date, text, img, alt })}
            disabled={!tag || !text}
            className="px-5 py-2 rounded-xl bg-[#d4ff4f] hover:bg-[#bceb3b] text-black font-mono text-xs uppercase font-semibold disabled:opacity-40"
          >
            Save Slide
          </button>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// SUB-MODAL: Add / Edit Gallery Photo
// ---------------------------------------------------------------------------
function PhotoModal({ isOpen, photo, onClose, onSave, processImageFile }) {
  const [caption, setCaption] = useState(photo?.caption || '');
  const [alt, setAlt] = useState(photo?.alt || '');
  const [url, setUrl] = useState(photo?.url || '');
  const [category, setCategory] = useState(photo?.category || 'Gallery');
  const [visible, setVisible] = useState(photo ? photo.visible : true);

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="w-full max-w-lg p-6 rounded-3xl bg-[#121318] border border-white/10 shadow-2xl space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <h3 className="text-base font-bold text-white">
            {photo ? 'Edit Photo' : 'Upload New Photo'}
          </h3>
          <button onClick={onClose} className="p-1 rounded-full text-neutral-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4 text-xs font-mono">
          <div>
            <label className="block text-neutral-400 uppercase tracking-wider mb-1">Select / Upload Image</label>
            <div className="flex items-center gap-3 mb-2">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  processImageFile(e.target.files[0], (dataUrl) => setUrl(dataUrl));
                }}
                className="text-xs text-neutral-400 file:mr-3 file:py-1.5 file:px-3 file:rounded-xl file:border-0 file:bg-white/10 file:text-white file:font-mono file:cursor-pointer"
              />
            </div>
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Or enter image URL"
              className="w-full px-3 py-2 rounded-xl bg-black/40 border border-white/15 text-white"
            />
          </div>

          <div>
            <label className="block text-neutral-400 uppercase tracking-wider mb-1">Caption</label>
            <input
              type="text"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="Caption describing this photograph"
              className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-neutral-400 uppercase tracking-wider mb-1">Category</label>
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="e.g. Portrait, Event, Campus"
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white"
              />
            </div>

            <div>
              <label className="block text-neutral-400 uppercase tracking-wider mb-1">Visibility</label>
              <button
                type="button"
                onClick={() => setVisible(!visible)}
                className={`w-full py-2.5 px-3 rounded-xl border flex items-center justify-center gap-2 ${
                  visible
                    ? 'bg-[#d4ff4f]/20 border-[#d4ff4f]/40 text-[#d4ff4f]'
                    : 'bg-white/5 border-white/10 text-neutral-400'
                }`}
              >
                {visible ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                <span>{visible ? 'Visible on site' : 'Hidden'}</span>
              </button>
            </div>
          </div>

          <div>
            <label className="block text-neutral-400 uppercase tracking-wider mb-1">Alt Text</label>
            <input
              type="text"
              value={alt}
              onChange={(e) => setAlt(e.target.value)}
              placeholder="Accessibility description"
              className="w-full px-3 py-2 rounded-xl bg-black/40 border border-white/15 text-white"
            />
          </div>
        </div>

        <div className="pt-3 border-t border-white/10 flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-mono text-white"
          >
            Cancel
          </button>
          <button
            onClick={() => onSave({ caption, alt, url, category, visible })}
            disabled={!url}
            className="px-5 py-2 rounded-xl bg-[#d4ff4f] hover:bg-[#bceb3b] text-black font-mono text-xs uppercase font-semibold disabled:opacity-40"
          >
            Save Photo
          </button>
        </div>
      </div>
    </div>
  );
}
