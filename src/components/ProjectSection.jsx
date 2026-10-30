import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function ProjectSection() {
  const highlights = [
    {
      label: 'ĐẶT LỊCH HẸN TRỰC TUYẾN',
      detail: 'Hệ thống điều phối lịch khám thông minh theo bác sĩ phụ trách và loại hình thú cưng.',
    },
    {
      label: 'HỒ SƠ BỆNH ÁN SỐ HÓA',
      detail: 'Lưu trữ trọn vẹn tiền sử khám, phác đồ điều trị và cảnh báo định kỳ tiêm chủng.',
    },
    {
      label: 'DASHBOARD QUẢN TRỊ VIÊN',
      detail: 'Kiểm soát doanh thu, thống kê ca khám và phân quyền tài khoản bác sĩ / nhân viên.',
    },
    {
      label: 'HẠ TẦNG CLOUD RENDER',
      detail: 'Đóng gói toàn diện trên nền tảng đám mây Render, đảm bảo vận hành ổn định 24/7.',
    },
  ];

  return (
    <section id="project" className="editorial-wrap border-t border-[rgba(255,255,255,0.06)]">
      {/* Background ambient spotlight */}
      <div
        className="red-ambient-light w-[500px] h-[500px] bg-[#B8001F] -left-36 top-1/3 opacity-15"
        aria-hidden="true"
      />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="font-mono text-xs text-[#FF5A73] tracking-[0.35em] uppercase font-bold block mb-2">
            [ 02 // GROUP MASTERWORK ]
          </span>
          <h2 className="editorial-title text-5xl sm:text-7xl text-white">
            OUR <span className="text-[#FF1E44]">PROJECT</span>
          </h2>
        </div>

        <div className="font-mono text-xs text-[#777] border-l border-[#B8001F] pl-4 uppercase">
          PETCARE // VETERINARY CLINIC MANAGEMENT SYSTEM
        </div>
      </div>

      {/* Asymmetric Editorial Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch bg-[#080808] border border-[rgba(255,255,255,0.07)] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.9)]">
        {/* Project Image Frame (7 columns) */}
        <div className="lg:col-span-7 relative min-h-[380px] sm:min-h-[480px] overflow-hidden bg-[#0c0c0c]">
          <img
            src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1200&q=85"
            alt="PetCare Clinic System"
            loading="lazy"
            className="w-full h-full object-cover grayscale contrast-125 brightness-90 hover:grayscale-0 hover:scale-105 transition-all duration-700"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-80 pointer-events-none"
            aria-hidden="true"
          />

          {/* Minimalist Live Tag */}
          <div className="absolute top-6 left-6 z-20 flex items-center gap-2 bg-[#050505]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[rgba(255,30,68,0.4)]">
            <span className="w-2 h-2 rounded-full bg-[#FF1E44] animate-pulse" />
            <span className="font-mono text-[10px] font-bold text-white tracking-widest uppercase">
              DEPLOYED LIVE // RENDER
            </span>
          </div>
        </div>

        {/* Project Architecture & Details (5 columns) */}
        <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between bg-[#080808]">
          <div>
            <span className="font-mono text-xs text-[#FF5A73] font-bold tracking-widest uppercase">
              ĐỒ ÁN NHÓM CHÍNH QUY — UTH
            </span>

            <h3 className="font-display font-black text-2xl sm:text-4xl text-white uppercase mt-2 tracking-tight">
              HỆ THỐNG QUẢN LÝ PHÒNG KHÁM THÚ Y
            </h3>

            <p className="font-body text-xs sm:text-sm text-[#888] leading-relaxed mt-4">
              Nền tảng kỹ thuật số hoàn chỉnh được xây dựng dựa trên sự phối hợp của ba thành viên:
              Tối ưu hóa luồng dữ liệu bệnh án, kết nối API Flask tinh gọn và mang đến giao diện
              vận hành trực quan, chuẩn xác.
            </p>

            {/* Core Tech Pills */}
            <div className="mt-6 flex flex-wrap gap-2">
              {['Python Flask', 'SQLite / MySQL', 'HTML5 / CSS3', 'JavaScript ES6', 'Render Cloud'].map(
                (tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 bg-[#121212] text-[#bbb] border border-[rgba(255,255,255,0.06)]"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>

            {/* Feature Highlights */}
            <div className="mt-8 space-y-3">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-[#FF1E44] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                      {item.label}
                    </h4>
                    <p className="font-body text-xs text-[#777] mt-0.5">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Launch CTA */}
          <div className="mt-10 pt-6 border-t border-[rgba(255,255,255,0.06)]">
            <a
              href="https://website-quan-li-thu-y.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cinema btn-cinema-red w-full group/btn text-xs py-4"
            >
              <span>EXPERIENCE LIVE PETCARE SYSTEM</span>
              <ArrowUpRight
                size={16}
                className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
