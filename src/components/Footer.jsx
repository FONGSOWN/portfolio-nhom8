import React from 'react';
import { Skull, ExternalLink, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[rgba(255,255,255,0.06)] bg-[#070707] text-[#888] pt-16 pb-28 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[rgba(255,255,255,0.05)]">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-[#140608] border border-[rgba(192,0,36,0.5)] flex items-center justify-center text-[#FF1E44]">
                <Skull size={20} />
              </div>
              <div>
                <h3 className="font-display font-black text-lg text-white uppercase tracking-wider">
                  THE SYNDICATE
                </h3>
                <span className="font-mono text-[10px] text-[#FF5A73] tracking-widest uppercase">
                  DARK GANG • UNDERGROUND • NO MERCY
                </span>
              </div>
            </div>

            <p className="font-body text-xs text-[#777] max-w-sm leading-relaxed">
              Thiết kế dành cho màn đêm. Lập trình cho sự trường tồn. Không gian đại diện chính thức
              của nhóm sinh viên Công nghệ thông tin — Trường Đại học Giao thông vận tải TP.HCM.
            </p>

            <div className="pt-1">
              <span className="badge-gang">UTH IT // COHORT 2024–2028</span>
            </div>
          </div>

          {/* Member Portfolios Quick Directory */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-mono text-xs font-bold text-white uppercase tracking-widest">
              OFFICIAL MEMBER SITES
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a
                  href="https://trung047.github.io/Portfolio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-[#aaa] hover:text-[#FF1E44] transition py-1 group"
                >
                  <span>NGUYỄN VĂN TRUNG</span>
                  <ExternalLink size={13} className="text-[#555] group-hover:text-[#FF1E44]" />
                </a>
              </li>
              <li>
                <a
                  href="https://nguyen-vu-duy-portfolio.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-[#aaa] hover:text-[#FF1E44] transition py-1 group"
                >
                  <span>NGUYỄN VŨ DUY</span>
                  <ExternalLink size={13} className="text-[#555] group-hover:text-[#FF1E44]" />
                </a>
              </li>
              <li>
                <a
                  href="https://portfolio-ca-nhan.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-[#aaa] hover:text-[#FF1E44] transition py-1 group"
                >
                  <span>DƯƠNG NHƯ PHONG SƠN</span>
                  <ExternalLink size={13} className="text-[#555] group-hover:text-[#FF1E44]" />
                </a>
              </li>
              <li>
                <a
                  href="https://website-quan-li-thu-y.onrender.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-[#FF5A73] hover:text-white transition py-1 group"
                >
                  <span>PETCARE GROUP SYSTEM ↗</span>
                  <ExternalLink size={13} />
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Jump / Scroll to top */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end">
            <button
              onClick={scrollToTop}
              className="btn-gang btn-gang-outline text-xs py-3 px-5 flex items-center gap-2"
              aria-label="Scroll to top of page"
            >
              <span>RETURN TO APEX</span>
              <ArrowUp size={14} />
            </button>

            <div className="font-mono text-[10px] text-[#555] mt-6 md:mt-0 text-left md:text-right">
              <div>SYS // LATENCY &lt; 20MS</div>
              <div>ENCRYPTION // ACTIVE</div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#666] gap-4">
          <p>© 2026 THE SYNDICATE • ĐẠI HỌC GIAO THÔNG VẬN TẢI TP.HCM (UTH)</p>
          <p className="text-[11px] text-[#FF5A73]">
            TRACK: OBITO — ĐẦU ĐƯỜNG XÓ CHỢ FT. LĂNG LD
          </p>
        </div>
      </div>
    </footer>
  );
}
