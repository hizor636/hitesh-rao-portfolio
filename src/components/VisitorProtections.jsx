import React, { useState, useEffect, useRef, useCallback } from 'react';

/**
 * VisitorProtections component:
 * Deterrents against casual copying and saving:
 * - Portfolio images: right-click menu disabled, drag disabled (-webkit-user-drag: none),
 *   toast "Image protection is enabled." displayed.
 * - Long-form written content (About narrative, project case breakdowns, story highlights):
 *   selection, copy, and cut disabled, toast "Content protection is enabled." displayed.
 * - Interactive elements (nav, buttons, form inputs, contact details) remain fully selectable and functional.
 * - Non-blocking custom toast with accessible role="status" and aria-live="polite".
 * - Never uses alert(), confirm(), or prompt().
 */
export default function VisitorProtections() {
  const [toastMessage, setToastMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);
  const toastTimeoutRef = useRef(null);
  const lastToastTimeRef = useRef(0);

  const showToast = useCallback((msg) => {
    const now = Date.now();
    if (now - lastToastTimeRef.current < 400 && toastVisible) return;
    lastToastTimeRef.current = now;

    setToastMessage(msg);
    setToastVisible(true);

    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    toastTimeoutRef.current = setTimeout(() => {
      setToastVisible(false);
    }, 2500);
  }, [toastVisible]);

  useEffect(() => {
    // Expose on window for external / vanilla handlers
    window.__showProtectionToast = showToast;

    // Helper: is element or parent an interactive/contact element that must allow selection & copying
    const isSelectableElement = (node) => {
      if (!node) return false;
      const el = node.nodeType === Node.ELEMENT_NODE ? node : node.parentElement;
      if (!el) return false;
      return !!el.closest(
        'input, textarea, select, button, nav, [data-cms="email"], [data-cms="linkedin"], [data-cms="behance"], [data-cms="instagram"], .contact-detail, .selectable, a[href^="mailto:"], a[href^="tel:"]'
      );
    };

    // Helper: is element protected long-form content
    const isProtectedContent = (node) => {
      if (!node) return false;
      const el = node.nodeType === Node.ELEMENT_NODE ? node : node.parentElement;
      if (!el) return false;
      return !!el.closest('.protected-content, [data-protect-content="true"]');
    };

    // Helper: is element a portfolio image
    const isProtectedImage = (node) => {
      if (!node) return false;
      const el = node.nodeType === Node.ELEMENT_NODE ? node : node.parentElement;
      if (!el) return false;
      return (
        el.tagName === 'IMG' ||
        !!el.closest('img, [data-protect-image="true"], .protect-img, .hl-avatar-box, .hl-modal, .card .cover')
      );
    };

    // 1. Right-click contextmenu handler
    const handleContextMenu = (e) => {
      if (isProtectedImage(e.target)) {
        e.preventDefault();
        showToast('Image protection is enabled.');
      }
    };

    // 2. Dragstart handler (prevent dragging images out)
    const handleDragStart = (e) => {
      if (isProtectedImage(e.target)) {
        e.preventDefault();
        showToast('Image protection is enabled.');
      }
    };

    // 3. Copy handler
    const handleCopy = (e) => {
      const selection = window.getSelection();
      const anchor = selection?.anchorNode;

      // Allow copy if inside nav, inputs, buttons, or contact details
      if (isSelectableElement(e.target) || isSelectableElement(anchor)) {
        return;
      }

      // Block if target or selected text is in protected content
      if (isProtectedContent(e.target) || isProtectedContent(anchor)) {
        e.preventDefault();
        showToast('Content protection is enabled.');
      }
    };

    // 4. Cut handler
    const handleCut = (e) => {
      const selection = window.getSelection();
      const anchor = selection?.anchorNode;

      if (isSelectableElement(e.target) || isSelectableElement(anchor)) {
        return;
      }

      if (isProtectedContent(e.target) || isProtectedContent(anchor)) {
        e.preventDefault();
        showToast('Content protection is enabled.');
      }
    };

    // 5. Selectstart handler
    const handleSelectStart = (e) => {
      if (isSelectableElement(e.target)) {
        return;
      }
      if (isProtectedContent(e.target)) {
        e.preventDefault();
        showToast('Content protection is enabled.');
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('dragstart', handleDragStart);
    document.addEventListener('copy', handleCopy);
    document.addEventListener('cut', handleCut);
    document.addEventListener('selectstart', handleSelectStart);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('dragstart', handleDragStart);
      document.removeEventListener('copy', handleCopy);
      document.removeEventListener('cut', handleCut);
      document.removeEventListener('selectstart', handleSelectStart);
      if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    };
  }, [showToast]);

  return (
    <div
      id="protection-toast"
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className={`protection-toast ${toastVisible ? 'show' : ''}`}
      aria-hidden={!toastVisible}
    >
      <span className="protection-toast-badge" aria-hidden="true">🛡️</span>
      <span id="protection-toast-text">{toastMessage}</span>
    </div>
  );
}
