import React from 'react';
import { ArrowUpRight, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[rgba(255,255,255,0.06)] bg-[#030303] text-[#777] pt-16 pb-24 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[rgba(255,255,255,0.05)]">
          {/* Brand */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#FF1E44]" />
              <h3 className="font-display font-black text-lg text-white uppercase tracking-wider">
                THE SYNDICATE
              </h3>
            </div>
            <p className="font-body text-xs text-[#666] max-w-sm leading-relaxed">
              Thiết kế theo chuẩn mực thẩm mỹ điện ảnh noir và văn hóa đường phố gai góc. Đại diện
              cho ba sinh viên Công nghệ thông tin — Trường Đại học Giao thông vận tải TP.HCM.
            </p>
          </div>

          {/* Portfolios Directory */}
          <div className="md:col-span-4 space-y-2.5">
            <span className="font-mono text-xs font-bold text-white uppercase tracking-wider block mb-3">
              MEMBER PORTFOLIOS
            </span>
            <ul className="space-y-1.5 text-xs font-mono">
              <li>
                <a
                  href="https://trung047.github.io/Portfolio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-[#888] hover:text-[#FF1E44] transition py-0.5 group"
                >
                  <span>NGUYỄN VĂN TRUNG</span>
                  <ArrowUpRight size={13} className="text-[#555] group-hover:text-[#FF1E44]" />
                </a>
              </li>
              <li>
                <a
                  href="https://nguyen-vu-duy-portfolio.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-[#888] hover:text-[#FF1E44] transition py-0.5 group"
                >
                  <span>NGUYỄN VŨ DUY</span>
                  <ArrowUpRight size={13} className="text-[#555] group-hover:text-[#FF1E44]" />
                </a>
              </li>
              <li>
                <a
                  href="https://portfolio-ca-nhan.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-[#888] hover:text-[#FF1E44] transition py-0.5 group"
                >
                  <span>DƯƠNG NHƯ PHONG SƠN</span>
                  <ArrowUpRight size={13} className="text-[#555] group-hover:text-[#FF1E44]" />
                </a>
              </li>
            </ul>
          </div>

          {/* Action */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between">
            <button
              onClick={scrollToTop}
              className="btn-cinema text-xs py-3 px-5 flex items-center gap-2"
              aria-label="Scroll back to top"
            >
              <span>BACK TO TOP</span>
              <ArrowUp size={14} />
            </button>

            <span className="font-mono text-[10px] text-[#555] mt-6 md:mt-0">
              UTH IT // COHORT 2024–2028
            </span>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#555] gap-4">
          <p>© 2026 THE SYNDICATE • ĐẠI HỌC GIAO THÔNG VẬN TẢI TP.HCM (UTH)</p>
          <p className="text-[#888]">OBITO FT. LĂNG LD — ĐẦU ĐƯỜNG XÓ CHỢ</p>
        </div>
      </div>
    </footer>
  );
}
