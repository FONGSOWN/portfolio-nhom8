import React from 'react';
import { ShieldCheck, Zap, Terminal, Server, Cpu, Globe2 } from 'lucide-react';

export default function CrewSection() {
  const pillars = [
    {
      code: 'PILLAR // 01',
      title: 'BACKEND SUPREMACY',
      desc: 'Xây dựng kết cấu chịu tải cực hạn, xử lý luồng dữ liệu socket thời gian thực và quản trị cơ sở dữ liệu bất khả xâm phạm.',
      icon: Server,
      stat: '99.9% UPTIME',
    },
    {
      code: 'PILLAR // 02',
      title: 'FRONTEND MASTERY',
      desc: 'Thiết kế giao diện dark cinematic, hiệu ứng 3D sâu sắc và trải nghiệm thị giác cuốn hút lay động mọi giác quan.',
      icon: Cpu,
      stat: '60 FPS MOTION',
    },
    {
      code: 'PILLAR // 03',
      title: 'CLOUD & DEVOPS COMMAND',
      desc: 'Tự động hóa luồng triển khai, container hóa ứng dụng trên nền tảng đám mây và bảo toàn tính toàn vẹn hệ thống 24/7.',
      icon: Globe2,
      stat: 'ZERO DOWNTIME',
    },
  ];

  return (
    <section id="crew" className="section-wrap border-t border-[rgba(255,255,255,0.05)]">
      {/* Background ambient crimson spot */}
      <div className="red-spotlight w-[400px] h-[400px] bg-[#8B0000] -left-48 top-1/3 opacity-15" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-3 h-3 bg-[#C00024]" />
            <span className="badge-gang">DOSSIER // SECTION 01</span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
            ABOUT THE <span className="text-[#FF1E44]">CREW</span>
          </h2>
          <p className="font-mono text-xs sm:text-sm text-[#888] tracking-widest mt-2 uppercase">
            THE SYNDICATE MANIFESTO // STREET DISCIPLINE • CODE SUPREMACY
          </p>
        </div>

        <div className="max-w-md text-sm text-[#999] font-body leading-relaxed border-l-2 border-[#C00024] pl-4">
          Chúng tôi không viết code để qua môn. Chúng tôi tạo dựng những sản phẩm số mang đậm dấu ấn
          dưới ánh đèn đường thành phố — lạnh lùng, chuẩn xác và không khoan nhượng.
        </div>
      </div>

      {/* 3 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pillars.map((p, idx) => {
          const Icon = p.icon;
          return (
            <div
              key={idx}
              className="hud-corner bg-[#0d0d0d] border border-[rgba(255,255,255,0.08)] p-8 hover:border-[rgba(192,0,36,0.6)] transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(192,0,36,0.2)]"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs tracking-widest text-[#FF1E44] font-bold">
                  {p.code}
                </span>
                <span className="font-mono text-[11px] bg-[#1a0a0c] text-[#FF5A73] px-2.5 py-1 rounded border border-[rgba(192,0,36,0.3)]">
                  {p.stat}
                </span>
              </div>

              <div className="w-14 h-14 rounded-lg bg-[#140608] border border-[rgba(192,0,36,0.4)] flex items-center justify-center text-[#FF1E44] mb-6 group-hover:bg-[#FF1E44] group-hover:text-black group-hover:shadow-[0_0_20px_#FF1E44] transition-all duration-300">
                <Icon size={26} />
              </div>

              <h3 className="font-display font-extrabold text-xl text-white tracking-wide uppercase mb-3 group-hover:text-[#FF1E44] transition-colors">
                {p.title}
              </h3>

              <p className="text-[#888] text-sm leading-relaxed font-body">
                {p.desc}
              </p>

              <div className="mt-6 pt-4 border-t border-[rgba(255,255,255,0.06)] flex items-center justify-between text-[11px] font-mono text-[#666]">
                <span>TACTICAL ASSET</span>
                <span className="text-[#999] group-hover:text-white transition-colors">ARMED // READY</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Crew Stats Bar */}
      <div className="mt-12 bg-[#090909] border border-[rgba(255,255,255,0.06)] p-6 rounded-lg grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div>
          <div className="font-display font-black text-3xl sm:text-4xl text-white">03</div>
          <div className="font-mono text-xs text-[#777] uppercase tracking-wider mt-1">
            CORE OPERATIVES
          </div>
        </div>
        <div>
          <div className="font-display font-black text-3xl sm:text-4xl text-[#FF1E44]">UTH</div>
          <div className="font-mono text-xs text-[#777] uppercase tracking-wider mt-1">
            ACADEMIC BASE
          </div>
        </div>
        <div>
          <div className="font-display font-black text-3xl sm:text-4xl text-white">100%</div>
          <div className="font-mono text-xs text-[#777] uppercase tracking-wider mt-1">
            PRODUCTION READY
          </div>
        </div>
        <div>
          <div className="font-display font-black text-3xl sm:text-4xl text-[#FF1E44]">24/7</div>
          <div className="font-mono text-xs text-[#777] uppercase tracking-wider mt-1">
            UNDERGROUND DEV
          </div>
        </div>
      </div>
    </section>
  );
}
