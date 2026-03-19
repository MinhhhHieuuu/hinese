
export default function AboutPage() {
  return (
    <main className="page-enter px-8 py-12 max-w-2xl mx-auto" aria-label="About Hinese">
      <h1 className="font-display font-extrabold text-4xl text-ink mb-6">About Hinese</h1>
      <p className="text-ink/80 text-lg leading-relaxed mb-4">
        Đây là một dự án cá nhân được thực hiện bởi một sinh viên ngành Thương mại điện tử,
        không phải chuyên gia trong lĩnh vực phát triển web hay giảng dạy tiếng Trung. 
        Nội dung trên website được xây dựng với mục đích hỗ trợ ghi nhớ chữ Hán thông qua hình vẽ và liên tưởng,
         nhằm giúp việc học trở nên dễ dàng và thú vị hơn.
      Để có quá trình học đầy đủ và hiệu quả
       người học nên kết hợp sử dụng Hinese với các nguồn tài liệu khác như sách giáo khoa hoặc giáo viên hướng dẫn.
        
      </p>
      <p className="text-muted text-base leading-relaxed">
       Nếu bạn có bất kỳ câu hỏi, góp ý hoặc muốn đóng góp vào dự án, 
       đừng ngần ngại liên hệ với tôi qua email hoặc các kênh mạng xã hội được liệt kê bên dưới.
        Tôi rất mong nhận được phản hồi từ cộng đồng để có thể cải thiện và phát triển Hinese ngày càng tốt hơn.
      </p>
      <section>
        <h2 className="font-display font-bold text-2xl text-ink mb-4">Contact</h2>
        <ul className="list-disc list-inside text-ink/80">
          <li>Email: <a href="mailto:contact@hinese.com" className="text-blue-500 hover:underline">contact@hinese.com</a></li>
          
          <li>Facebook: <a href="https://www.facebook.com/hieu.pham.136402" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">facebook.com/hinese</a></li>
          <li>Instagram: <a href="https://www.instagram.com/__hrime/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">instagram.com/hinese</a></li>
        </ul>
      </section>
    </main>
  )
}
