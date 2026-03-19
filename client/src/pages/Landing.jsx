import ParchmentScroll from '../components/ParchmentScroll'

export default function Landing() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <main
        className="page-enter relative flex items-center justify-between min-h-[calc(100vh-130px)]
                   px-12 pb-8 overflow-hidden"
        aria-label="Hinese landing page"
      >
        {/* Diagonal light beam */}
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              'conic-gradient(from 30deg at 60% 100%, transparent 0deg, #fff8e8 15deg, transparent 30deg)',
          }}
          aria-hidden="true"
        />

        {/* Left: parchment scroll */}
        <div className="flex-shrink-0 z-10">
          <ParchmentScroll lines={['大家好这是', '明孝的website']} />
        </div>

        {/* Right: giant calligraphy character */}
        <div className="flex-1 flex justify-end items-center z-10 pr-4">
          <span
            className="char-cjk text-[13rem] leading-none select-none font-bold
                       text-ink opacity-90 drop-shadow-[2px_4px_12px_rgba(0,0,0,0.15)]
                       animate-[fadeUp_0.8s_ease_both]"
            aria-label="Chinese character 大 meaning big"
            role="img"
          >
            大
          </span>
        </div>

        {/* Scroll-down hint */}
        <a
          href="#about"
          aria-label="Scroll down to About"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10
                     flex flex-col items-center gap-1 text-muted text-xs
                     hover:text-red transition-colors group"
        >
          <span>About</span>
          <svg
            width="20" height="20" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.2"
            className="animate-bounce group-hover:stroke-red"
            aria-hidden="true"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>

        {/* Bottom vignette */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 opacity-10"
          style={{ background: 'linear-gradient(to top, #8B5A00, transparent)' }}
          aria-hidden="true"
        />
      </main>

      {/* ── About ────────────────────────────────────────── */}
      <section
        id="about"
        aria-labelledby="about-heading"
        className="scroll-mt-24 px-12 py-20 w-full"
      >
        {/* Section label */}
        <p className="text-red text-sm font-semibold tracking-widest uppercase mb-3">
          About
        </p>

        <h2
          id="about-heading"
          className="font-display font-extrabold text-4xl text-ink mb-10 leading-tight"
        >
          Disclaimer
        </h2>

        {/* Three-column layout on wide screens */}
        <div className="grid md:grid-cols-3 gap-10 text-ink/80 text-base leading-relaxed mb-12">
          <p>
             Đây là một dự án cá nhân được thực hiện bởi một sinh viên ngành Thương mại điện tử,
        không phải chuyên gia trong lĩnh vực phát triển web hay giảng dạy tiếng Trung. 
        Nội dung trên website được xây dựng với mục đích hỗ trợ ghi nhớ chữ Hán thông qua hình vẽ và liên tưởng,
         nhằm giúp việc học trở nên dễ dàng và thú vị hơn.
      Để có quá trình học đầy đủ và hiệu quả
       người học nên kết hợp sử dụng Hinese với các nguồn tài liệu khác như sách giáo khoa hoặc giáo viên hướng dẫn.
          </p>
          <p>
            Để có quá trình học đầy đủ và hiệu quả
       người học nên kết hợp sử dụng Hinese với các nguồn tài liệu khác như sách giáo khoa hoặc giáo viên hướng dẫn.
          </p>
          <p>
            Nếu bạn có bất kỳ câu hỏi, góp ý hoặc muốn đóng góp vào dự án, 
       đừng ngần ngại liên hệ với tôi qua email hoặc các kênh mạng xã hội được liệt kê bên dưới.
        Tôi rất mong nhận được phản hồi từ cộng đồng để có thể cải thiện và phát triển Hinese ngày càng tốt hơn.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-bold text-ink mb-5">Contact</h3>
          <div className="flex flex-wrap gap-4">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/hieu.pham.136402"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex items-center gap-3 px-5 py-3 rounded-full bg-panel
                         border border-[#ddd0bf] text-ink text-sm font-medium
                         hover:border-red hover:text-red transition-colors group"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                   className="text-[#1877F2] group-hover:text-red transition-colors">
                <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.514c-1.491 0-1.956.93-1.956 1.886v2.254h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
              </svg>
              Facebook
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/__hrime/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex items-center gap-3 px-5 py-3 rounded-full bg-panel
                         border border-[#ddd0bf] text-ink text-sm font-medium
                         hover:border-red hover:text-red transition-colors group"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                   className="text-[#E1306C] group-hover:text-red transition-colors">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              Instagram
            </a>

            {/* Gmail */}
            <a
              href="mailto:youremail@gmail.com"
              aria-label="Send an email"
              className="flex items-center gap-3 px-5 py-3 rounded-full bg-panel
                         border border-[#ddd0bf] text-ink text-sm font-medium
                         hover:border-red hover:text-red transition-colors group"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                   className="text-[#EA4335] group-hover:text-red transition-colors">
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.910 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
              </svg>
              Gmail
            </a>
          </div>
        </div>
      </section>
    </>
  )
}