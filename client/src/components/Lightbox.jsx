import { useEffect } from 'react'

/**
 * Lightbox — full-screen overlay with the mnemonic image and the character
 * ghosted on top at reduced opacity so both are visible together.
 * Closes on backdrop click, close button, or Escape key.
 */
export default function Lightbox({ src, alt, char, pinyin, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Full size view of ${char ?? alt}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm
                 animate-[fadeUp_0.25s_ease_both]"
      onClick={onClose}
    >
      <div
        className="relative max-w-lg w-full mx-4 bg-cream rounded-2xl p-6 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close lightbox"
          className="absolute top-3 right-4 z-10 text-2xl text-muted hover:text-ink transition-colors"
        >
          ×
        </button>

        {/* Image + character overlay stack */}
        <div className="relative flex items-center justify-center h-80">

          {/* Mnemonic image (or fallback blank area) */}
          {src
            ? <img
                src={src}
                alt={`Mnemonic illustration for ${char ?? alt}`}
                className="max-h-full max-w-full object-contain"
              />
            : /* No image yet — show a soft placeholder background */
              <div className="w-full h-full rounded-xl bg-panel" aria-hidden="true" />
          }

          {/* Character ghosted on top — faded so the image shows through */}
          <span
            className="char-cjk absolute inset-0 flex items-center justify-center
                       text-[11rem] leading-none font-bold select-none pointer-events-none
                       text-ink opacity-20"
            aria-hidden="true"
          >
            {char ?? alt}
          </span>
        </div>

        {/* Pinyin + meaning label below */}
        {(char || pinyin) && (
          <div className="text-center mt-4">
            {char   && <p className="char-cjk text-3xl font-bold text-ink">{char}</p>}
            {pinyin && <p className="text-muted text-sm mt-1">{pinyin}</p>}
          </div>
        )}
      </div>
    </div>
  )
}