import React, { useState } from 'react';

/**
 * ImageWithFallback
 * Resilient image renderer with loaded state, smooth fade-in,
 * and high-fidelity styled CSS/SVG fallback container if image fails to load.
 */
export default function ImageWithFallback({
  src,
  alt,
  className = '',
  aspectRatio = 'aspect-[4/3]',
  fallbackIcon = 'spice',
  fallbackText = ''
}) {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-[#F4EFEA] ${aspectRatio} ${className}`}>
      {!error && src && (
        <img
          src={src}
          alt={alt || 'Indian Spices'}
          referrerPolicy="no-referrer"
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={`w-full h-full object-cover transition-all duration-500 ${
            loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        />
      )}

      {/* Loading Skeleton */}
      {!loaded && !error && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#F4EFEA] via-[#EBE3DA] to-[#F4EFEA] animate-pulse" />
      )}

      {/* Styled Fallback Container when image errors or is missing */}
      {error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#FAF5EF] via-[#F4ECE1] to-[#EAE0D2]">
          <div className="w-12 h-12 rounded-full bg-[#B91C1C]/10 border border-[#B91C1C]/20 flex items-center justify-center mb-3 text-[#B91C1C]">
            {fallbackIcon === 'flame' ? (
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 2c1.1 0 2 .9 2 2 0 1.5-1 3.5-2 5-1-1.5-2-3.5-2-5 0-1.1.9-2 2-2zm0 6c2.5 0 5 2.5 5 6a5 5 0 01-10 0c0-3.5 2.5-6 5-6z" />
              </svg>
            ) : fallbackIcon === 'recipe' ? (
              <svg className="w-6 h-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            ) : (
              <svg className="w-6 h-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="8" />
                <path strokeLinecap="round" d="M12 8v8M8 12h8" />
              </svg>
            )}
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#7A5B49] mb-1 font-sans">
            Veda Artisanal
          </span>
          <p className="text-sm font-serif font-medium text-[#2A1D17] line-clamp-2">
            {fallbackText || alt || 'Pure Heritage Indian Spice'}
          </p>
        </div>
      )}
    </div>
  );
}
