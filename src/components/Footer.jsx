import React from 'react';
import { ArrowUpRight, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[rgba(255,255,255,0.06)] bg-[#050505] text-[#777] pt-10 pb-20 relative z-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-8 border-b border-[rgba(255,255,255,0.05)] gap-6">
          {/* Brand */}
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#E50914] rounded-full" />
              <h3 className="font-display font-black text-sm text-white uppercase tracking-wider">
                THE SYNDICATE
              </h3>
            </div>
            <p className="font-mono text-[10px] text-[#555] uppercase">
              UTH IT // COHORT 2024–2028
            </p>
          </div>

          {/* Quick Member Links */}
          <div className="flex items-center gap-5 text-xs font-mono">
            <a
              href="https://trung047.github.io/Portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#888] hover:text-[#E50914] transition"
            >
              Trung ↗
            </a>
            <a
              href="https://nguyen-vu-duy-portfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#888] hover:text-[#E50914] transition"
            >
              Duy ↗
            </a>
            <a
              href="https://portfolio-ca-nhan.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#888] hover:text-[#E50914] transition"
            >
              Sơn ↗
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="btn-syndicate text-[10px] py-1.5 px-3 flex items-center gap-1.5"
            aria-label="Scroll back to top"
          >
            <span>TOP</span>
            <ArrowUp size={12} />
          </button>
        </div>

        {/* Bottom line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#555] gap-2">
          <p>© 2026 THE SYNDICATE • ĐẠI HỌC GIAO THÔNG VẬN TẢI TP.HCM (UTH)</p>
          <p className="text-[#777]">OBITO FT. LĂNG LD — ĐẦU ĐƯỜNG XÓ CHỢ</p>
        </div>
      </div>
    </footer>
  );
}
