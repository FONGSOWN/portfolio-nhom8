import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TechStackSection() {
  const sectionRef = useRef(null);

  const pillars = [
    {
      index: '01',
      title: 'BACKEND ARCHITECTURE',
      techs: ['Python Flask', 'Java & Socket', 'C / C++', 'RESTful API'],
      summary: 'Xử lý logic nghiệp vụ, giao thức truyền tin Socket thời gian thực và API microservices.',
    },
    {
      index: '02',
      title: 'INTERFACE ENGINEERING',
      techs: ['React JS', 'Tailwind CSS', 'JavaScript ES6+', 'Motion UI'],
      summary: 'Giao diện dark mode hiện đại, tối ưu hóa tốc độ phản hồi và chuyển động 60fps mượt mà.',
    },
    {
      index: '03',
      title: 'DATA ARCHITECTURE',
      techs: ['MySQL', 'SQLite DB', 'Stored Procedures', 'ACID Modeling'],
      summary: 'Lược đồ cơ sở dữ liệu quan hệ chặt chẽ, tối ưu hóa truy vấn và tính toàn vẹn dữ liệu.',
    },
    {
      index: '04',
      title: 'CLOUD & OPERATIONS',
      techs: ['Render Cloud', 'Vercel', 'Git & GitHub', 'Vite Engine'],
      summary: 'Tự động hóa luồng triển khai, kiểm soát phiên bản liên tục và đóng gói ứng dụng production.',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = sectionRef.current.querySelectorAll('.tech-card');
      gsap.fromTo(
        cards,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="tech"
      className="section-container border-t border-[rgba(255,255,255,0.06)]"
    >
      {/* Background ambient spotlight */}
      <div
        className="red-ambient-spot w-[450px] h-[450px] bg-[#C00024] -right-24 top-1/2 opacity-10"
        aria-hidden="true"
      />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
        <div>
          <span className="font-mono text-[10px] text-[#FF5A73] tracking-[0.3em] uppercase font-bold block mb-1.5">
            // ARSENAL
          </span>
          <h2 className="section-headline text-3xl sm:text-4xl md:text-5xl">
            TECH<span className="text-[#E50914]">NOLOGY</span>
          </h2>
        </div>

        <p className="font-mono text-xs text-[#777] max-w-sm sm:text-right uppercase">
          CÔNG CỤ THỰC CHIẾN ĐÃ ĐƯỢC CHỨNG MINH
        </p>
      </div>

      {/* 4 Pillars Grid (Compact, balanced) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {pillars.map((p) => (
          <div
            key={p.index}
            className="tech-card p-5 bg-[#0a0a0a] border border-[rgba(255,255,255,0.07)] hover:border-[rgba(229,9,20,0.4)] transition-colors duration-300 rounded flex flex-col justify-between"
          >
            <div>
              <span className="font-title text-2xl text-[#E50914] tracking-wider block">
                {p.index}
              </span>
              <h3 className="font-display font-black text-sm text-white uppercase tracking-wide mt-1">
                {p.title}
              </h3>

              <p className="font-body text-xs text-[#777] leading-relaxed mt-2.5">
                {p.summary}
              </p>
            </div>

            <div className="mt-5 pt-3.5 border-t border-[rgba(255,255,255,0.05)] flex flex-wrap gap-1.5">
              {p.techs.map((t, tIdx) => (
                <span
                  key={tIdx}
                  className="font-mono text-[9px] uppercase px-2 py-0.5 bg-[#121212] text-[#bbb] rounded border border-[rgba(255,255,255,0.04)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
