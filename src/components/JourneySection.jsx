import React from 'react';
import { Flag, Terminal, Flame, ShieldAlert, CheckCircle } from 'lucide-react';

export default function JourneySection() {
  const steps = [
    {
      year: '2024',
      badge: 'PHASE 01 // KHỞI NGUYÊN',
      title: 'HỘI QUÂN TẠI UTH TP.HCM',
      desc: 'Trúng tuyển chuyên ngành Công nghệ thông tin tại Trường Đại học Giao thông vận tải TP.HCM. Rèn luyện tư duy thuật toán cốt lõi, kiến trúc máy tính và cấu trúc dữ liệu nền tảng.',
      tag: 'FOUNDATION PHASE',
    },
    {
      year: '2025',
      badge: 'PHASE 02 // CHUYÊN BIỆT HÓA',
      title: 'RÈN VŨ KHÍ RIÊNG BIỆT',
      desc: 'Mỗi thành viên làm chủ một mặt trận: Trung khai phá lập trình mạng Socket & MySQL; Duy tinh chỉnh trải nghiệm giao diện React & UI/UX; Sơn tối ưu hóa kiến trúc Flask & Cloud Deploy.',
      tag: 'SPECIALIZATION',
    },
    {
      year: '2025 – 2026',
      badge: 'PHASE 03 // LIÊN MINH THỰC CHIẾN',
      title: 'ĐỒ ÁN NHÓM PHÒNG KHÁM THÚ Y PETCARE',
      desc: 'Hợp nhất sức mạnh ba bộ óc trong đồ án thực tế: Xây dựng hệ thống quản lý phòng khám thú y toàn diện, tích hợp cơ sở dữ liệu và triển khai thành công lên nền tảng đám mây Render.',
      tag: 'CORE MILESTONE',
    },
    {
      year: '2026',
      badge: 'PHASE 04 // ĐỈNH CAO THỊ GIÁC',
      title: 'DARK GANG CINEMATIC PORTFOLIO',
      desc: 'Khẳng định cá tính mạnh mẽ bằng website nhóm phong cách Dark Underground Mafia — nơi âm nhạc Obito, hiệu ứng khói sương, ánh sáng đỏ và code chuẩn mực hòa quyện thành kiệt tác.',
      tag: 'PRESENT SUPREMACY',
    },
  ];

  return (
    <section id="journey" className="section-wrap border-t border-[rgba(255,255,255,0.05)]">
      {/* Background ambient spotlight */}
      <div className="red-spotlight w-[450px] h-[450px] bg-[#8B0000] -left-36 top-1/2 opacity-15" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF1E44]" />
          <span className="badge-gang">CHRONICLE // ROADMAP TO SUPREMACY</span>
        </div>
        <h2 className="font-display font-black text-4xl sm:text-6xl text-white uppercase tracking-tight">
          DEVELOPMENT <span className="text-[#FF1E44]">JOURNEY</span>
        </h2>
        <p className="font-mono text-xs sm:text-sm text-[#888] tracking-widest uppercase mt-3">
          TIẾN TRÌNH RÈN LUYỆN VÀ TRƯỞNG THÀNH TẠI ĐẠI HỌC GIAO THÔNG VẬN TẢI TP.HCM
        </p>
      </div>

      {/* Timeline Steps */}
      <div className="relative max-w-4xl mx-auto">
        {/* Central Vertical Red Line */}
        <div className="absolute top-0 bottom-0 left-4 sm:left-1/2 w-[2px] bg-gradient-to-b from-[#FF1E44] via-[#8B0000] to-transparent transform sm:-translate-x-1/2 shadow-[0_0_12px_#FF1E44]" />

        <div className="space-y-12">
          {steps.map((step, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={idx}
                className={`relative flex flex-col sm:flex-row items-start ${
                  isEven ? 'sm:flex-row-reverse' : ''
                }`}
              >
                {/* Central Dot */}
                <div className="absolute left-4 sm:left-1/2 w-6 h-6 rounded-full bg-[#080808] border-2 border-[#FF1E44] transform -translate-x-1/2 flex items-center justify-center shadow-[0_0_15px_#FF1E44] z-20 top-2">
                  <span className="w-2 h-2 rounded-full bg-[#FF1E44] animate-ping" />
                </div>

                {/* Timeline Content Card */}
                <div
                  className={`ml-10 sm:ml-0 sm:w-1/2 ${
                    isEven ? 'sm:pl-12' : 'sm:pr-12'
                  }`}
                >
                  <div className="hud-corner bg-[#0c0c0c] border border-[rgba(255,255,255,0.07)] p-6 rounded-xl hover:border-[rgba(192,0,36,0.6)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(192,0,36,0.25)]">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-xs font-bold text-[#FF5A73] tracking-widest">
                        {step.badge}
                      </span>
                      <span className="font-mono text-xs text-[#777] bg-[#160608] px-2 py-0.5 rounded border border-[rgba(192,0,36,0.3)]">
                        {step.year}
                      </span>
                    </div>

                    <h3 className="font-display font-extrabold text-xl text-white uppercase tracking-wide mb-2">
                      {step.title}
                    </h3>

                    <p className="font-body text-xs sm:text-sm text-[#999] leading-relaxed">
                      {step.desc}
                    </p>

                    <div className="mt-4 pt-3 border-t border-[rgba(255,255,255,0.05)] flex items-center justify-between text-[10px] font-mono text-[#666]">
                      <span>STATUS: RECORDED</span>
                      <span className="text-[#FF5A73]">{step.tag}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
