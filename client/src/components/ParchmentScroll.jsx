/**
 * ParchmentScroll — SVG illustration that matches the mockup's golden scroll.
 * The text inside is configurable via the `lines` prop.
 */
export default function ParchmentScroll({ lines = [] }) {
  return (
    <div
      className="relative w-64 h-80 animate-sway origin-top"
      aria-hidden="true"   /* decorative — screen readers skip */
    >
      <svg viewBox="0 0 220 290" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-scroll">
        {/* Scroll body */}
        <rect x="10" y="22" width="200" height="246" rx="4" fill="#D4922A" />
        <rect x="18" y="30" width="184" height="230" rx="3" fill="#E8A832" />
        {/* Top curl */}
        <ellipse cx="110" cy="22" rx="100" ry="16" fill="#C07A1A" />
        <ellipse cx="110" cy="22" rx="90"  ry="10" fill="#E8A832" />
        {/* Bottom curl */}
        <ellipse cx="110" cy="268" rx="100" ry="16" fill="#C07A1A" />
        <ellipse cx="110" cy="268" rx="90"  ry="10" fill="#E8A832" />
        {/* Left rod knobs */}
        <ellipse cx="10"  cy="22"  rx="10" ry="10" fill="#B9231F" />
        <ellipse cx="10"  cy="268" rx="10" ry="10" fill="#B9231F" />
        {/* Right rod knobs */}
        <ellipse cx="210" cy="22"  rx="10" ry="10" fill="#B9231F" />
        <ellipse cx="210" cy="268" rx="10" ry="10" fill="#B9231F" />
        {/* Subtle texture lines */}
        {[50, 80, 110, 140, 170, 200, 230].map((y) => (
          <line key={y} x1="30" y1={y} x2="190" y2={y} stroke="#C07A1A" strokeOpacity="0.3" strokeWidth="1" />
        ))}
      </svg>

      {/* Text overlay — positioned absolutely over the SVG */}
      <div className="absolute inset-0 flex flex-col justify-center items-start pl-10 pr-8 gap-2">
        {lines.map((line, i) => (
          <p
            key={i}
            className="char-cjk text-ink text-base font-semibold leading-snug
                       [text-shadow:0_1px_2px_rgba(255,255,255,0.4)]"
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  )
}
