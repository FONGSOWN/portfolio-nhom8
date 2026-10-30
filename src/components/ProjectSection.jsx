import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current.querySelector('.project-card'),
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
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

  const features = [
    'Đặt lịch hẹn khám và theo dõi lịch trình điều trị tự động',
    'Số hóa hồ sơ sức khỏe và tiền sử tiêm chủng thú cưng',
    'Dashboard phân quyền quản trị cho bác sĩ và nhân viên phòng khám',
  ];

  return (
    <section
      ref={sectionRef}
      id="project"
      className="section-container border-t border-[rgba(255,255,255,0.06)]"
    >
      {/* Background ambient spotlight */}
      <div
        className="red-ambient-spot w-[400px] h-[400px] bg-[#C00024] -left-20 top-1/2 opacity-10"
        aria-hidden="true"
      />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
        <div>
          <span className="font-mono text-[10px] text-[#FF5A73] tracking-[0.3em] uppercase font-bold block mb-1.5">
            // GROUP PROJECT
          </span>
          <h2 className="section-headline text-3xl sm:text-4xl md:text-5xl">
            OUR <span className="text-[#E50914]">PROJECT</span>
          </h2>
        </div>

        <p className="font-mono text-xs text-[#777] max-w-sm sm:text-right uppercase">
          PETCARE // VETERINARY CLINIC MANAGEMENT
        </p>
      </div>

      {/* Compact Asymmetric Showcase Card */}
      <div className="project-card bg-[#0a0a0a] border border-[rgba(255,255,255,0.07)] rounded overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
        {/* Left: Compact Image (5 cols) */}
        <div className="lg:col-span-5 relative h-64 sm:h-72 lg:h-full min-h-[280px] overflow-hidden bg-[#101010]">
          <img
            src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=900&q=85"
            alt="Hệ Thống Quản Lý Thú Y PetCare"
            loading="lazy"
            className="w-full h-full object-cover grayscale contrast-125 brightness-95 hover:grayscale-0 hover:scale-105 transition-all duration-700"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-75 pointer-events-none"
            aria-hidden="true"
          />

          <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-[#050505]/90 px-3 py-1 rounded-full border border-[rgba(229,9,20,0.4)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E50914] animate-pulse" />
            <span className="font-mono text-[9px] font-bold text-white tracking-widest uppercase">
              LIVE ON RENDER
            </span>
          </div>
        </div>

        {/* Right: Architecture & Details (7 cols) */}
        <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <span className="font-mono text-[10px] text-[#FF5A73] uppercase tracking-wider block">
              ĐỒ ÁN NHÓM CHÍNH QUY — UTH
            </span>

            <h3 className="font-display font-black text-xl sm:text-2xl text-white uppercase mt-1">
              HỆ THỐNG QUẢN LÝ PHÒNG KHÁM THÚ Y
            </h3>

            <p className="font-body text-xs sm:text-sm text-[#888] leading-relaxed mt-3">
              Đồ án phát triển nền tảng kỹ thuật số toàn diện dành cho phòng khám thú y. Sự kết hợp
              giữa backend Python Flask tinh gọn, cơ sở dữ liệu quan hệ chặt chẽ và giao diện phản
              hồi tức thì mang lại hiệu quả vận hành phòng khám chuẩn xác.
            </p>

            {/* Tech Badges */}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {['Python Flask', 'SQLite / MySQL', 'HTML5 / CSS3', 'JavaScript ES6', 'Render Cloud'].map(
                (tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="font-mono text-[10px] uppercase px-2.5 py-0.5 bg-[#121212] text-[#aaa] border border-[rgba(255,255,255,0.06)] rounded"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>

            {/* Feature Checklist */}
            <div className="mt-5 space-y-2">
              {features.map((feat, fIdx) => (
                <div key={fIdx} className="flex items-center gap-2 text-xs text-[#bbb]">
                  <CheckCircle2 size={14} className="text-[#E50914] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Button */}
          <div className="mt-6 pt-4 border-t border-[rgba(255,255,255,0.06)]">
            <a
              href="https://website-quan-li-thu-y.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-syndicate btn-syndicate-red group/btn text-[11px] py-3"
            >
              <span>EXPERIENCE LIVE PETCARE SYSTEM</span>
              <ArrowUpRight
                size={14}
                className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
