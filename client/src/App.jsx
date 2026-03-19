import { Routes, Route, useSearchParams, useNavigate } from 'react-router-dom'
import Navbar       from './components/Navbar'
import SearchBar    from './components/SearchBar'
import Landing      from './pages/Landing'
import SearchPage   from './pages/SearchPage'
import ProgressPage from './pages/ProgressPage'
import AboutPage    from './pages/AboutPage'

export default function App() {
  const navigate = useNavigate()
  const [params] = useSearchParams()

  function handleSearch(q) {
    navigate(`/search?q=${encodeURIComponent(q)}`)
  }

  return (
    <div className="min-h-screen bg-cream flex flex-col">
      <Navbar />
      <SearchBar onSearch={handleSearch} searchValue={params.get('q') || ''} />

      <Routes>
        <Route path="/"         element={<Landing />}      />
        <Route path="/search"   element={<SearchPage />}   />
        <Route path="/progress" element={<ProgressPage />} />
        <Route path="/about"    element={<AboutPage />}    />
        {/* 404 fallback */}
        <Route path="*" element={
          <main className="page-enter flex flex-col items-center justify-center min-h-[50vh] gap-3">
            <p className="font-display text-5xl font-extrabold text-red">404</p>
            <p className="text-muted">Page not found.</p>
          </main>
        } />
      </Routes>
    </div>
  )
}