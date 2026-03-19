import { useEffect, useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import Lightbox from '../components/Lightbox'
import { useSearch } from '../hooks/useSearch'

/**
 * SearchPage — shows character detail cards matching the second mockup.
 * Left card: large character + pinyin label + mnemonic image (when available).
 * Right cards: explain card + example card.
 *
 * TODO: replace useSearch hook with a real API call to your backend.
 */
export default function SearchPage() {
  const [params]             = useSearchParams()
  const q                    = params.get('q') || ''
  const { result, loading, search } = useSearch()
  const [lightboxOpen, setLightboxOpen] = useState(false)

  useEffect(() => { if (q) search(q) }, [q, search])

  /* ── Loading ─────────────────────────────────────── */
  if (loading) {
    return (
      <main className="page-enter flex justify-center items-center min-h-[50vh]">
        <span className="char-cjk text-6xl animate-pulse2 text-red">…</span>
      </main>
    )
  }

  /* ── No result ───────────────────────────────────── */
  if (!result) {
    return (
      <main className="page-enter flex flex-col items-center justify-center min-h-[50vh] gap-4">
        <p className="text-2xl font-display font-bold text-ink">
          No results for <span className="char-cjk text-red">「{q}」</span>
        </p>
        <p className="text-muted">Try searching a Chinese character, pinyin, or English meaning.</p>
        <Link to="/" className="mt-2 text-red underline underline-offset-4 text-sm font-medium">
          ← Back to home
        </Link>
      </main>
    )
  }

  return (
    <main className="page-enter px-8 py-8" aria-label={`Search results for ${q}`}>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* ── LEFT: character card ─────────────────── */}
        <section
          aria-label="Character visual"
          className="bg-panel rounded-xl2 shadow-card flex flex-col items-center justify-center
                     gap-4 py-10 px-6"
        >
          {/* Clickable image card — hover reveals the character on top */}
          <button
            onClick={() => setLightboxOpen(true)}
            aria-label={`View full-size image of ${result.char} (${result.meaning}). Press Enter to open.`}
            className="relative w-full rounded-xl overflow-hidden group
                       focus-visible:outline-none focus-visible:ring-2 ring-red"
          >
            {/* Mnemonic / character image */}
            {result.mnemonicImage
              ? <img
                  src={result.mnemonicImage}
                  alt={`Mnemonic illustration for ${result.char}`}
                  className="w-full h-64 object-contain transition-transform duration-500
                             group-hover:scale-105"
                />
              : /* Fallback: large rendered character when no image asset exists yet */
                <div className="w-full h-64 flex items-center justify-center">
                  <span
                    className="char-cjk text-[9rem] leading-none font-bold text-ink
                               transition-all duration-500 group-hover:opacity-20 group-hover:scale-110"
                    aria-hidden="true"
                  >
                    {result.char}
                  </span>
                </div>
            }

            {/* Hover overlay — character fades in over the image */}
            <div
              className="absolute inset-0 flex items-center justify-center
                         bg-black/0 group-hover:bg-black/20
                         transition-all duration-400"
              aria-hidden="true"
            >
              <span
                className="char-cjk font-bold text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]
                           text-[8rem] leading-none
                           opacity-0 scale-75
                           group-hover:opacity-100 group-hover:scale-100
                           transition-all duration-400 ease-out"
              >
                {result.char}
              </span>
            </div>

            {/* Bottom label bar */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-between items-end
                            px-4 py-3 bg-gradient-to-t from-black/30 to-transparent">
              <div>
                <p className="char-cjk text-white text-base font-bold leading-none drop-shadow">
                  {result.char}
                </p>
                <p className="text-white/80 text-xs mt-0.5 drop-shadow">{result.pinyin}</p>
              </div>
              <p className="text-white/60 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Click to enlarge
              </p>
            </div>
          </button>

          {/* Pinyin + meaning label */}
          <div className="text-center">
            <p className="text-2xl font-display font-bold text-ink">{result.pinyin}</p>
            <p className="text-muted text-sm mt-1">{result.meaning}</p>
          </div>

          {/* Metadata pills */}
          <div className="flex gap-2 flex-wrap justify-center">
            <span className="px-3 py-1 bg-red/10 text-red text-xs rounded-full font-medium">
              {result.level}
            </span>
            <span className="px-3 py-1 bg-ink/8 text-muted text-xs rounded-full font-medium">
              {result.strokes} strokes
            </span>
            {result.radicals.length > 0 && (
              <span className="px-3 py-1 bg-ink/8 text-muted text-xs rounded-full font-medium char-cjk">
                Radicals: {result.radicals.join(' + ')}
              </span>
            )}
          </div>
        </section>

        {/* ── RIGHT: info cards ────────────────────── */}
        <div className="flex flex-col gap-6">

          {/* Explanation card */}
          <section
            aria-label="Character explanation"
            className="bg-panel rounded-xl2 shadow-card px-6 py-6 flex-1"
          >
            <p className="text-ink leading-relaxed text-[0.95rem]">{result.mnemonic}</p>
          </section>

          {/* Examples card */}
          <section
            aria-label="Example sentences"
            className="bg-panel rounded-xl2 shadow-card px-6 py-6 flex-1"
          >
            <h2 className="font-display font-bold text-lg text-ink mb-4">Examples</h2>
            <ul className="space-y-4" role="list">
              {result.examples.map((ex, i) => (
                <li key={i} className="border-l-2 border-red pl-3">
                  <p className="char-cjk text-xl font-bold text-ink">{ex.zh}</p>
                  <p className="text-muted text-xs mt-0.5">{ex.pinyin}</p>
                  <p className="text-ink/80 text-sm mt-0.5">{ex.en}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      {/* ── Lightbox ─────────────────────────────────── */}
      {lightboxOpen && (
        <Lightbox
          src={result.mnemonicImage}
          alt={result.char}
          char={result.char}
          pinyin={result.pinyin}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </main>
  )
}