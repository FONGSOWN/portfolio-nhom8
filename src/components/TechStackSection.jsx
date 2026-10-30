import React from 'react';

export default function TechStackSection() {
  const stacks = [
    {
      num: '01',
      domain: 'BACKEND ARCHITECTURE',
      technologies: 'Python Flask • Java • Socket Programming • C/C++ • RESTful API',
      focus: 'Xây dựng kết cấu xử lý logic chịu tải, giao thức truyền tin socket thời gian thực và API tinh gọn.',
    },
    {
      num: '02',
      domain: 'INTERFACE ENGINEERING',
      technologies: 'React JS • Tailwind CSS • Modern JavaScript ES6+ • Motion Interaction',
      focus: 'Thiết kế giao diện dark cinematic, tối ưu hóa tốc độ tải và trải nghiệm tương tác số trực quan.',
    },
    {
      num: '03',
      domain: 'DATA ARCHITECTURE',
      technologies: 'MySQL • SQLite • Stored Procedures • Relational Modeling',
      focus: 'Bảo toàn tính nhất quán dữ liệu ACID, thiết kế lược đồ quan hệ và tối ưu hóa truy vấn cơ sở dữ liệu.',
    },
    {
      num: '04',
      domain: 'CLOUD & OPERATIONS',
      technologies: 'Render Cloud • Vercel • Git & GitHub • Vite Build Engine',
      focus: 'Tự động hóa luồng triển khai, kiểm soát mã nguồn liên tục và đóng gói ứng dụng production tối ưu.',
    },
  ];

  return (
    <section id="tech" className="editorial-wrap border-t border-[rgba(255,255,255,0.06)]">
      {/* Background ambient spotlight */}
      <div
        className="red-ambient-light w-[450px] h-[450px] bg-[#B8001F] -right-24 top-1/2 opacity-15"
        aria-hidden="true"
      />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="font-mono text-xs text-[#FF5A73] tracking-[0.35em] uppercase font-bold block mb-2">
            [ 03 // ARCHITECTURAL STACK ]
          </span>
          <h2 className="editorial-title text-5xl sm:text-7xl text-white">
            TECH<span className="text-[#FF1E44]">NOLOGY</span>
          </h2>
        </div>

        <div className="font-mono text-xs text-[#777] border-l border-[#B8001F] pl-4 uppercase">
          THỰC CHIẾN TRÊN CÁC DỰ ÁN TẠI UTH TP.HCM
        </div>
      </div>

      {/* Minimalist Editorial Row Matrix (Awwwards Style) */}
      <div className="divide-y divide-[rgba(255,255,255,0.07)] border-y border-[rgba(255,255,255,0.07)]">
        {stacks.map((s) => (
          <div
            key={s.num}
            className="py-10 sm:py-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-start group hover:bg-[#080808] transition-colors duration-400 px-4 -mx-4"
          >
            {/* Index */}
            <div className="md:col-span-2">
              <span className="font-title text-3xl sm:text-4xl text-[#FF1E44] tracking-widest block">
                {s.num}
              </span>
            </div>

            {/* Domain */}
            <div className="md:col-span-4">
              <h3 className="font-display font-black text-xl sm:text-2xl text-white uppercase tracking-tight group-hover:text-[#FF1E44] transition-colors">
                {s.domain}
              </h3>
              <p className="font-body text-xs text-[#777] leading-relaxed mt-2">
                {s.focus}
              </p>
            </div>

            {/* Technologies */}
            <div className="md:col-span-6 flex items-center md:justify-end">
              <span className="font-mono text-xs sm:text-sm text-[#ccc] tracking-wider uppercase bg-[#0e0e0e] border border-[rgba(255,255,255,0.06)] px-4 py-2.5 rounded-lg">
                {s.technologies}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
