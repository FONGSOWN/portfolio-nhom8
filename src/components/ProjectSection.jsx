import React from 'react';
import { ExternalLink, Database, Server, ShieldCheck, Calendar, Activity, CheckCircle2 } from 'lucide-react';

export default function ProjectSection() {
  const features = [
    {
      title: 'ĐẶT LỊCH HẸN TRỰC TUYẾN',
      desc: 'Quy trình đặt lịch khám thông minh cho thú cưng theo khung giờ, bác sĩ phụ trách và loại hình dịch vụ chuyên sâu.',
      icon: Calendar,
    },
    {
      title: 'HỒ SƠ BỆNH ÁN SỐ HÓA',
      desc: 'Lưu trữ toàn diện lịch sử tiêm chủng, liệu trình dùng thuốc và theo dõi tiến trình hồi phục của từng bệnh nhân bốn chân.',
      icon: Activity,
    },
    {
      title: 'DASHBOARD QUẢN TRỊ BẢO MẬT',
      desc: 'Bảng điều khiển cho phép bác sĩ và lễ tân kiểm soát lịch hẹn, thống kê dịch vụ và quản trị danh mục thuốc an toàn.',
      icon: ShieldCheck,
    },
    {
      title: 'HẠ TẦNG CLOUD RENDER',
      desc: 'Được đóng gói và triển khai trực tuyến trên hạ tầng đám mây Render với khả năng hoạt động ổn định và sẵn sàng cao.',
      icon: Server,
    },
  ];

  return (
    <section id="project" className="section-wrap border-t border-[rgba(255,255,255,0.05)]">
      {/* Background spotlight */}
      <div className="red-spotlight w-[450px] h-[450px] bg-[#8B0000] -left-32 top-1/2 opacity-20" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-3 h-3 bg-[#FF1E44]" />
            <span className="badge-gang">FLAGSHIP INITIATIVE // CO-OP PROJECT</span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
            OUR <span className="text-[#FF1E44]">PROJECT</span>
          </h2>
          <p className="font-mono text-xs sm:text-sm text-[#888] tracking-widest mt-2 uppercase">
            HỆ THỐNG QUẢN LÝ PHÒNG KHÁM THÚ Y // PETCARE CLINIC
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-[#FF5A73] bg-[#1a080b] px-3 py-1.5 rounded border border-[rgba(192,0,36,0.3)]">
            STATUS: DEPLOYED LIVE ON RENDER
          </span>
        </div>
      </div>

      {/* Main Project Card Showpiece */}
      <div className="hud-corner bg-[#0c0c0c] border border-[rgba(192,0,36,0.5)] rounded-xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
          {/* Visual Preview Left Side */}
          <div className="lg:col-span-7 relative min-h-[340px] sm:min-h-[440px] overflow-hidden bg-[#100708]">
            <img
              src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1200&q=85"
              alt="Hệ thống Quản lý Phòng khám Thú y PetCare"
              className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
            />
            {/* Dark gradient fade */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0c0c0c] hidden lg:block opacity-70" />

            {/* Tactical Live Badge Overlay */}
            <div className="absolute top-5 left-5 z-20 flex items-center gap-2 bg-[#0a0a0a]/90 backdrop-blur-md px-3.5 py-1.5 rounded border border-[rgba(255,30,68,0.5)]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF1E44] animate-pulse" />
              <span className="font-mono text-xs font-bold text-white tracking-widest uppercase">
                PRODUCTION SYSTEM
              </span>
            </div>

            {/* Bottom Caption */}
            <div className="absolute bottom-5 left-5 right-5 z-20">
              <span className="font-mono text-[11px] text-[#FF5A73] tracking-widest uppercase block">
                UTH FULL-STACK TEAM PROJECT // 2025–2026
              </span>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white uppercase mt-1">
                PETCARE VET MANAGEMENT
              </h3>
            </div>
          </div>

          {/* Architecture & Details Right Side */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-[#0e0e0e]">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="badge-gang">FULL-STACK SOLUTION</span>
                <span className="font-mono text-[10px] text-[#777]">UTH IT DEPT</span>
              </div>

              <h4 className="font-display font-bold text-xl text-white uppercase tracking-wide">
                NỀN TẢNG SỐ HÓA PHÒNG KHÁM THÚ Y
              </h4>

              <p className="font-body text-sm text-[#999] leading-relaxed mt-3">
                Đồ án được kiến tạo bởi sự kết hợp của ba thành viên trong nhóm: Kết nối mô hình cơ sở
                dữ liệu quan hệ chặt chẽ, API Python Flask gọn nhẹ và giao diện người dùng trực quan,
                giúp phòng khám vận hành không độ trễ.
              </p>

              {/* Tech Stack Pills */}
              <div className="mt-5">
                <span className="font-mono text-[11px] text-[#666] uppercase tracking-wider block mb-2">
                  CÔNG NGHỆ CHỦ LỰC
                </span>
                <div className="flex flex-wrap gap-2">
                  {['Python Flask', 'SQLite / MySQL', 'HTML5 / CSS3', 'JavaScript ES6', 'Render Cloud'].map(
                    (tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="font-mono text-xs px-2.5 py-1 rounded bg-[#16080a] border border-[rgba(192,0,36,0.35)] text-[#FF8596]"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Functional Highlights */}
              <div className="mt-6 space-y-2.5">
                {[
                  'Quản lý tiếp nhận và đặt lịch hẹn khám tự động',
                  'Hồ sơ điều trị, phác đồ tiêm ngừa và tiền sử bệnh',
                  'Phân quyền quản trị viên, bảo mật danh mục điều trị',
                ].map((item, iIdx) => (
                  <div key={iIdx} className="flex items-center gap-2 text-xs sm:text-sm text-[#bbb]">
                    <CheckCircle2 size={15} className="text-[#FF1E44] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Launch CTA */}
            <div className="mt-8 pt-6 border-t border-[rgba(255,255,255,0.08)]">
              <a
                href="https://website-quan-li-thu-y.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gang w-full text-xs sm:text-sm py-4 shadow-[0_0_25px_rgba(255,30,68,0.5)]"
              >
                <span>OPEN PETCARE LIVE APPLICATION</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Deep-Dive Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {features.map((f, fIdx) => {
          const Icon = f.icon;
          return (
            <div
              key={fIdx}
              className="bg-[#0b0b0b] border border-[rgba(255,255,255,0.06)] p-6 rounded-lg hover:border-[rgba(192,0,36,0.5)] transition duration-300"
            >
              <div className="w-10 h-10 rounded bg-[#160608] border border-[rgba(192,0,36,0.4)] flex items-center justify-center text-[#FF1E44] mb-4">
                <Icon size={20} />
              </div>
              <h5 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-2">
                {f.title}
              </h5>
              <p className="font-body text-xs text-[#888] leading-relaxed">
                {f.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
