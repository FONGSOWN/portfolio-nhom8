import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function MembersSection() {
  const members = [
    {
      index: '01',
      name: 'NGUYỄN VĂN TRUNG',
      role: 'Core Systems & Backend',
      school: 'UTH TP.HCM',
      image: './assets/images/trung-avatar.png',
      objectPosition: 'center 12%',
      url: 'https://trung047.github.io/Portfolio/',
      quote: 'Làm chủ giao thức mạng Socket, cơ sở dữ liệu quan hệ và kiến trúc xử lý dữ liệu chịu tải cao.',
      skills: ['Java Socket', 'MySQL Stored Proc', 'Python AI', 'Network Protocols'],
    },
    {
      index: '02',
      name: 'NGUYỄN VŨ DUY',
      role: 'Frontend & UI/UX Lead',
      school: 'UTH TP.HCM',
      image: './assets/images/duy-avatar.jpg',
      objectPosition: 'center 10%',
      url: 'https://nguyen-vu-duy-portfolio.vercel.app/',
      quote: 'Kiến tạo giao diện dark mode sắc nét, tối ưu hóa chuyển động 60fps và tương tác số giàu cảm xúc.',
      skills: ['React JS', 'Tailwind CSS', 'Modern JavaScript', 'Motion UI'],
    },
    {
      index: '03',
      name: 'DƯƠNG NHƯ PHONG SƠN',
      role: 'Full-Stack & Cloud Dev',
      school: 'UTH TP.HCM',
      image: './assets/images/son-avatar.jpg',
      objectPosition: 'center 20%',
      url: 'https://portfolio-ca-nhan.onrender.com/',
      quote: 'Khai phóng sức mạnh API Python Flask, bảo mật dữ liệu và tự động hóa triển khai trên Render Cloud.',
      skills: ['Python Flask', 'SQLite / MySQL', 'Cloud Render', 'System Architecture'],
    },
  ];

  return (
    <section id="crew" className="editorial-wrap border-t border-[rgba(255,255,255,0.06)]">
      {/* Background ambient red light */}
      <div
        className="red-ambient-light w-[600px] h-[600px] bg-[#B8001F] -right-32 top-1/4 opacity-15"
        aria-hidden="true"
      />

      {/* Editorial Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="font-mono text-xs text-[#FF5A73] tracking-[0.35em] uppercase font-bold block mb-2">
            [ 01 // THE OPERATIVES ]
          </span>
          <h2 className="editorial-title text-5xl sm:text-7xl text-white">
            THE <span className="text-[#FF1E44]">CREW</span>
          </h2>
        </div>

        <p className="font-body text-sm text-[#888] max-w-md leading-relaxed border-l border-[#B8001F] pl-4">
          Ba cá tính độc bản từ Trường Đại học Giao thông vận tải TP.HCM — thống nhất dưới một tiêu
          chuẩn chất lượng: không thừa thãi, không khoan nhượng.
        </p>
      </div>

      {/* Editorial 3-Column Showcase with Uniform Aspect Ratio */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
        {members.map((m) => (
          <article
            key={m.index}
            className="group relative flex flex-col justify-between bg-[#080808] border border-[rgba(255,255,255,0.07)] hover:border-[rgba(255,30,68,0.5)] transition-all duration-500 overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.85)] hover:shadow-[0_0_35px_rgba(184,0,31,0.35)]"
          >
            {/* Top Index & Role Tag */}
            <div className="p-6 pb-4 flex items-center justify-between border-b border-[rgba(255,255,255,0.05)] bg-[#0c0c0c]">
              <span className="font-title text-2xl text-[#FF1E44] tracking-widest">
                {m.index}
              </span>
              <span className="font-mono text-[11px] text-[#aaa] tracking-wider uppercase">
                {m.role}
              </span>
            </div>

            {/* Strict Aspect-Ratio Image Frame (Identical 3:4 ratio for all 3 members) */}
            <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#0e0e0e]">
              <img
                src={m.image}
                alt={m.name}
                loading="lazy"
                className="w-full h-full object-cover grayscale contrast-125 brightness-90 group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700"
                style={{ objectPosition: m.objectPosition }}
              />

              {/* Dark chiaroscuro gradient mask */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-85 pointer-events-none"
                aria-hidden="true"
              />

              {/* Red glow edge on hover */}
              <div
                className="absolute inset-0 border border-[#FF1E44]/0 group-hover:border-[#FF1E44]/40 transition-colors duration-500 pointer-events-none"
                aria-hidden="true"
              />
            </div>

            {/* Member Information & Direct Portfolio Action */}
            <div className="p-6 pt-4 flex-1 flex flex-col justify-between bg-[#080808]">
              <div>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight group-hover:text-[#FF1E44] transition-colors duration-300">
                  {m.name}
                </h3>
                <span className="font-mono text-[11px] text-[#777] uppercase tracking-wider block mt-1">
                  {m.school}
                </span>

                <p className="font-body text-xs sm:text-sm text-[#999] leading-relaxed mt-4 line-clamp-3">
                  {m.quote}
                </p>

                {/* Minimalist Skills Row */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {m.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="font-mono text-[10px] tracking-wider uppercase px-2 py-0.5 bg-[#121212] text-[#bbb] border border-[rgba(255,255,255,0.06)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct Portfolio Link Button */}
              <div className="mt-8 pt-5 border-t border-[rgba(255,255,255,0.06)]">
                <a
                  href={m.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cinema w-full group/btn text-xs py-3.5"
                >
                  <span>VIEW PORTFOLIO</span>
                  <ArrowUpRight
                    size={15}
                    className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"
                  />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
