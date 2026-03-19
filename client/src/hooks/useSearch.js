import { useState, useCallback } from 'react'

export function useSearch() {
  const [query, setQuery]     = useState('')
  const [result, setResult]   = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError]     = useState(null)

  const search = useCallback(async (q) => {
    const trimmed = q.trim()
    setQuery(trimmed)
    if (!trimmed) { setResult(null); return }

    setLoading(true)
    setError(null)

    try {
      const res = await fetch(`http://localhost:5000/api/words?q=${encodeURIComponent(trimmed)}`)
      if (!res.ok) throw new Error('Not found')
      const found = await res.json()
      setResult(found)
    } catch (err) {
      setResult(null)
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [])

  return { query, result, loading, error, search }
}