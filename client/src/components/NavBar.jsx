import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const { pathname } = useLocation()

  // If already on the landing page, smooth-scroll to #about.
  // If on another page, navigate home first and the hash will fire.
  const aboutHref = pathname === '/' ? '#about' : '/#about'

  return (
    <header role="banner" className="bg-gray-200 px-4 py-2 rounded-full">
      <div className="flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="font-display text-6xl font-extrabold text-ink tracking-tight"
          aria-label="Hinese — go to home"
        >
          Hinese
        </Link>

        {/* Nav */}
        <nav aria-label="Primary navigation" className="flex items-center gap-3">
          <Link
            to="/progress"
            className="px-5 py-2 rounded-full bg-panel text-ink text-sm font-medium
                       hover:bg-[#ecdecb] transition-colors focus-visible:ring-2 ring-red"
          >
            Track progress
          </Link>

          {/* About scrolls to the #about section on the landing page */}
          <a
            href={aboutHref}
            className="px-5 py-2 rounded-full bg-panel text-ink text-sm font-medium
                       hover:bg-[#ecdecb] transition-colors focus-visible:ring-2 ring-red"
          >
            About
          </a>

          {/* TODO: wire up real auth */}
          <button
            className="px-5 py-2 rounded-full bg-red text-white text-sm font-semibold
                       hover:bg-redHov transition-colors focus-visible:ring-2 ring-red ring-offset-2"
          >
            Log in
          </button>
        </nav>
      </div>

      
    </header>
  )
}