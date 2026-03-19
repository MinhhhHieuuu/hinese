import { useNavigate } from 'react-router-dom'

export default function SearchBar({ onSearch, searchValue = '' }) {
  const navigate = useNavigate()

  function handleKey(e) {
    if (e.key === 'Enter') {
      const q = e.currentTarget.value.trim()
      if (q) {
        onSearch?.(q)
        navigate(`/search?q=${encodeURIComponent(q)}`)
      }
    }
  }

  return (
    <div className="flex justify-center mt-5 mb-2 px-4">
      <div className="relative w-full max-w-xl">
        {/* Search icon */}
        <span
          className="absolute left-4 top-1/2 -translate-y-1/2 text-muted pointer-events-none"
          aria-hidden="true"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </span>
        <input
          type="search"
          role="searchbox"
          aria-label="Search Chinese characters or meanings"
          placeholder="Search characters, pinyin, or meaning…"
          defaultValue={searchValue}
          onKeyDown={handleKey}
          className="w-full pl-11 pr-5 py-3 rounded-full bg-[#EBEBEB] text-sm text-ink
                     placeholder:text-muted outline-none border-2 border-transparent
                     focus:border-red transition-colors"
        />
      </div>
    </div>
  )
}