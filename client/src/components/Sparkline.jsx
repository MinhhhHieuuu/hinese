/**
 * Sparkline — a simple inline SVG line chart.
 * data: number[]  (30 data points recommended)
 */
export default function Sparkline({ data = [], width = 240, height = 50 }) {
  if (!data.length) return null

  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min || 1

  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * width
    const y = height - ((v - min) / range) * (height - 4) - 2
    return `${x.toFixed(1)},${y.toFixed(1)}`
  })

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      aria-label="Activity sparkline"
      role="img"
    >
      {/* Area fill */}
      <defs>
        <linearGradient id="spk-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#B9231F" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#B9231F" stopOpacity="0.0"  />
        </linearGradient>
      </defs>
      <polygon
        points={`0,${height} ${pts.join(' ')} ${width},${height}`}
        fill="url(#spk-grad)"
      />
      {/* Line */}
      <polyline
        points={pts.join(' ')}
        fill="none"
        stroke="#B9231F"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  )
}
