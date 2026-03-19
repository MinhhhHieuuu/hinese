import { useState, useEffect } from 'react'
import Sparkline from '../components/Sparkline'
import defaultProgress from '../data/mockProgress.json'

export default function ProgressPage() {
  const [progressData, setProgressData] = useState(defaultProgress)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) return  // not logged in — keep showing mock data

    fetch('http://localhost:5000/api/progress', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(r => r.json())
      .then(data => {
        if (!data.error) setProgressData(data)
      })
      .catch(console.error)
  }, [])

  // ← moved inside the single function, after the useEffect
  const { streak, wordsSearched, mostSearched, months, sparkline } = progressData
  const monthKeys = Object.keys(months)

  return (
    <main className="page-enter px-8 py-8" aria-label="Your learning progress">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_280px] gap-8 items-start">

        {/* ── LEFT: month grid ─────────────────────── */}
        <section aria-label="Monthly activity grid">
          <div className="bg-panel rounded-xl2 shadow-card p-6">
            <h2 className="font-display font-bold text-xl text-ink mb-5">
              {progressData.year} Activity
            </h2>

            <div
              className="grid grid-cols-4 gap-4"
              role="list"
              aria-label="Month tiles — red means you studied that month"
            >
              {monthKeys.map((key) => {
                const month = months[key]
                return (
                  <div
                    key={key}
                    role="listitem"
                    aria-label={`${month.label}: ${month.searches} searches${month.active ? '' : ' (future)'}`}
                    className={`
                      relative rounded-xl2 flex flex-col items-center justify-center
                      py-6 cursor-default select-none transition-transform hover:scale-105
                      ${month.active
                        ? 'bg-red text-white shadow-md'
                        : 'bg-[#DCCFC2] text-[#A08878]'}
                    `}
                  >
                    <span className="text-sm font-semibold tracking-wide">{month.label}</span>
                    {month.active && (
                      <span className="text-[10px] mt-1 opacity-70">{month.searches}</span>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── RIGHT: stats panel ───────────────────── */}
        <aside aria-label="Your statistics">
          <div className="bg-panel rounded-xl2 shadow-card p-6 flex flex-col gap-6">
            <h2 className="font-display font-bold text-xl text-ink">
              Progress in {progressData.year}
            </h2>

            <dl className="flex flex-col gap-4">
              <StatRow label="Streak" value={`${streak} days 🔥`} />
              <StatRow label="Words searched" value={wordsSearched.toLocaleString()} />
              <div>
                <dt className="text-muted text-sm mb-1">Most searched</dt>
                <dd className="flex gap-2 flex-wrap">
                  {mostSearched.map((ch) => (
                    <span
                      key={ch}
                      className="char-cjk text-2xl font-bold text-red"
                      aria-label={`Character ${ch}`}
                    >
                      {ch}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>

            <div>
              <p className="text-muted text-xs mb-2">Last 30 days activity</p>
              <Sparkline data={sparkline} width={220} height={50} />
            </div>
          </div>
        </aside>
      </div>
    </main>
  )
}

function StatRow({ label, value }) {
  return (
    <div>
      <dt className="text-muted text-sm">{label}</dt>
      <dd className="font-display font-bold text-2xl text-ink mt-0.5">{value}</dd>
    </div>
  )
}