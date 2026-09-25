import React, { useState, useRef, useEffect, useCallback } from 'react';

/**
 * TransformationImageSlider
 * 
 * Interactive Before / Transformed image comparison component for mobile & touch devices.
 * - In default state (100% Before), shows the untreated smile with the small circular arrow button at right-3.
 * - Clicking the small arrow button smoothly sweeps between Before (100%) and Transformed (0%).
 * - Swiping / dragging horizontally scrubs the divider line in real time (Before on left, Transformed on right).
 * - Vertical swipes allow normal page scrolling without trapping touch gestures.
 */
export default function TransformationImageSlider({
  beforeImage,
  transformedImage,
  title = 'Smile Transformation',
  className = ''
}) {
  // sliderPosition: 100 = 100% Before, 0 = 100% Transformed
  const [sliderPosition, setSliderPosition] = useState(100);
  const [isDragging, setIsDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const containerRef = useRef(null);
  const touchStartPos = useRef({ x: 0, y: 0, time: 0 });
  const isHorizontalGesture = useRef(null);
  const wasDragged = useRef(false);

  // Preload transformed image to ensure instant, seamless display
  useEffect(() => {
    const img = new Image();
    img.src = transformedImage;
  }, [transformedImage]);

  // Toggle between Before (100%) and Transformed (0%)
  const toggleTransformation = useCallback(() => {
    setHasInteracted(true);
    setSliderPosition((prev) => (prev <= 50 ? 100 : 0));
  }, []);

  // Helper to calculate percentage from clientX
  const updatePositionFromClientX = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clampedX = Math.max(0, Math.min(x, rect.width));
    const percentage = Math.round((clampedX / rect.width) * 100);
    setSliderPosition(percentage);
    setHasInteracted(true);
  }, []);

  // Touch handlers
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    touchStartPos.current = {
      x: touch.clientX,
      y: touch.clientY,
      time: Date.now()
    };
    isHorizontalGesture.current = null;
    wasDragged.current = false;
  };

  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    const dx = touch.clientX - touchStartPos.current.x;
    const dy = touch.clientY - touchStartPos.current.y;

    if (isHorizontalGesture.current === null) {
      if (Math.abs(dx) > 6 || Math.abs(dy) > 6) {
        isHorizontalGesture.current = Math.abs(dx) > Math.abs(dy);
      }
    }

    if (isHorizontalGesture.current === true) {
      if (e.cancelable) e.preventDefault();
      wasDragged.current = true;
      setIsDragging(true);
      updatePositionFromClientX(touch.clientX);
    }
  };

  const handleTouchEnd = (e) => {
    const touch = e.changedTouches[0];
    const dx = touch.clientX - touchStartPos.current.x;
    const elapsed = Date.now() - touchStartPos.current.time;

    if (isHorizontalGesture.current === true) {
      setIsDragging(false);
      // Fast flick gesture detection
      if (elapsed < 300 && Math.abs(dx) > 30) {
        if (dx < 0) {
          // Swiped left -> reveal transformed image (slider to 0%)
          setSliderPosition(0);
        } else {
          // Swiped right -> reveal before image (slider to 100%)
          setSliderPosition(100);
        }
      }
    } else if (!wasDragged.current && elapsed < 300 && Math.abs(dx) < 10) {
      // Clean tap on the image container -> toggle
      toggleTransformation();
    }
    isHorizontalGesture.current = null;
  };

  // Pointer / Mouse drag support
  const handlePointerDown = (e) => {
    if (e.button !== 0) return;
    wasDragged.current = false;
    touchStartPos.current = {
      x: e.clientX,
      y: e.clientY,
      time: Date.now()
    };
    setIsDragging(true);
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    const dx = e.clientX - touchStartPos.current.x;
    if (Math.abs(dx) > 5) {
      wasDragged.current = true;
      updatePositionFromClientX(e.clientX);
    }
  };

  const handlePointerUp = (e) => {
    if (isDragging) {
      setIsDragging(false);
      const elapsed = Date.now() - touchStartPos.current.time;
      const dx = Math.abs(e.clientX - touchStartPos.current.x);
      if (!wasDragged.current && elapsed < 300 && dx < 5) {
        toggleTransformation();
      }
    }
  };

  // Trackpad horizontal scroll support
  const handleWheel = (e) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 10) {
      e.preventDefault();
      setHasInteracted(true);
      setSliderPosition((prev) => Math.max(0, Math.min(100, prev + (e.deltaX > 0 ? -6 : 6))));
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full aspect-[4/3] bg-neutral-900 overflow-hidden select-none touch-pan-y cursor-pointer ${className}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onWheel={handleWheel}
      role="region"
      aria-label={`${title} Before and After slider`}
    >
      {/* 1. BASE IMAGE: BEFORE TREATMENT (Left side) */}
      <img
        src={beforeImage}
        alt={`${title} Before Treatment`}
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
        loading="lazy"
        draggable="false"
      />

      {/* 2. OVERLAY IMAGE: TRANSFORMED / AFTER TREATMENT (Revealed from Right side) */}
      <div
        className={`absolute inset-0 overflow-hidden pointer-events-none select-none ${
          isDragging ? '' : 'transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1)'
        }`}
        style={{
          clipPath: `inset(0 0 0 ${sliderPosition}%)`,
          WebkitClipPath: `inset(0 0 0 ${sliderPosition}%)`
        }}
      >
        <img
          src={transformedImage}
          alt={`${title} After Treatment`}
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
          loading="lazy"
          draggable="false"
        />
      </div>

      {/* 3. FLOATING BADGES */}
      {/* Before Badge */}
      <div
        className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase backdrop-blur-md transition-opacity duration-300 pointer-events-none select-none ${
          sliderPosition < 15 ? 'opacity-25' : 'opacity-90'
        } bg-black/60 text-white border border-white/20 shadow-sm`}
      >
        Before
      </div>

      {/* After Badge */}
      <div
        className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase backdrop-blur-md transition-opacity duration-300 pointer-events-none select-none ${
          sliderPosition > 85 ? 'opacity-30' : 'opacity-95'
        } bg-[#391361]/85 text-white border border-purple-300/30 shadow-sm`}
      >
        After
      </div>

      {/* 4. DIVIDER LINE (Visible when between 1% and 99%) */}
      {sliderPosition > 0 && sliderPosition < 100 && (
        <div
          className={`absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_8px_rgba(0,0,0,0.6)] pointer-events-none z-10 ${
            isDragging ? '' : 'transition-[left] duration-500 cubic-bezier(0.16, 1, 0.3, 1)'
          }`}
          style={{ left: `${sliderPosition}%` }}
        />
      )}

      {/* 5. SMALL CIRCULAR ARROW BUTTON */}
      <button
        type="button"
        onPointerDown={(e) => e.stopPropagation()}
        onTouchStart={(e) => e.stopPropagation()}
        onClick={(e) => {
          e.stopPropagation();
          toggleTransformation();
        }}
        className={`absolute top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-white shadow-md border border-purple-200 flex items-center justify-center text-[#75558F] active:scale-90 transition-all duration-300 cursor-pointer hover:bg-purple-50 hover:shadow-lg focus:outline-hidden ${
          sliderPosition >= 95 || sliderPosition <= 5
            ? 'right-3'
            : '-translate-x-1/2'
        }`}
        style={
          sliderPosition > 5 && sliderPosition < 95
            ? { left: `${sliderPosition}%` }
            : {}
        }
        aria-label={
          sliderPosition <= 50 ? 'View Before smile' : 'View After smile'
        }
        title={
          sliderPosition <= 50 ? 'Click to view Before' : 'Click to view After'
        }
      >
        <svg
          className={`w-3.5 h-3.5 transition-transform duration-300 ${
            sliderPosition <= 50 ? 'rotate-180' : ''
          }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          {sliderPosition > 5 && sliderPosition < 95 ? (
            /* Double arrow while dragging / in between */
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 9l-4 3 4 3m8-6l4 3-4 3"
            />
          ) : (
            /* Rotated chevron exactly matching original screenshot */
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 9l4-4 4 4m0 6l-4 4-4-4"
              transform="rotate(90 12 12)"
            />
          )}
        </svg>

        {/* Pulsing ring indicator if not yet interacted */}
        {!hasInteracted && sliderPosition >= 95 && (
          <span className="absolute -inset-1 rounded-full border border-purple-400 animate-ping opacity-60 pointer-events-none" />
        )}
      </button>

      {/* 6. HINT PILL */}
      {!hasInteracted && (
        <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-xs text-[9.5px] font-medium text-white/90 pointer-events-none tracking-wide animate-pulse">
          Swipe or tap to see after
        </div>
      )}
    </div>
  );
}
