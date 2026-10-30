import React, { useState } from 'react';
import { Mail, Send, ShieldCheck, Terminal, CheckCircle2 } from 'lucide-react';

const GithubIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.929.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const FacebookIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', target: 'all', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const operatives = [
    {
      name: 'NGUYỄN VĂN TRUNG',
      role: 'Core Systems & Backend',
      github: 'https://github.com/Trung047',
      facebook: 'https://www.facebook.com/nguyen.van.trung.240525',
      email: 'trunggn123@gmail.com',
      portfolio: 'https://trung047.github.io/Portfolio/',
    },
    {
      name: 'NGUYỄN VŨ DUY',
      role: 'Frontend & UI/UX Lead',
      instagram: 'https://www.instagram.com/duy.nguyenvu.794',
      facebook: 'https://www.facebook.com/share/1KBrSvwPtr/?mibextid=wwXIfr',
      email: 'nguyenvuduy64310@gmail.com',
      portfolio: 'https://nguyen-vu-duy-portfolio.vercel.app/',
    },
    {
      name: 'DƯƠNG NHƯ PHONG SƠN',
      role: 'Full-Stack & Cloud Dev',
      github: 'https://github.com/FONGSOWN',
      portfolio: 'https://portfolio-ca-nhan.onrender.com/',
      email: 'son.duong@uth.edu.vn',
      school: 'UTH TP.HCM',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', target: 'all', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="section-wrap border-t border-[rgba(255,255,255,0.05)]">
      {/* Background ambient spotlight */}
      <div className="red-spotlight w-[400px] h-[400px] bg-[#C00024] -right-20 top-1/2 opacity-15" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF1E44] animate-ping" />
          <span className="badge-gang">SECURE DISPATCH // THE SYNDICATE HOTLINE</span>
        </div>
        <h2 className="font-display font-black text-4xl sm:text-6xl text-white uppercase tracking-tight">
          DIRECT <span className="text-[#FF1E44]">CONTACT</span>
        </h2>
        <p className="font-mono text-xs sm:text-sm text-[#888] tracking-widest uppercase mt-3">
          KẾT NỐI TRỰC TIẾP VỚI CÁC THÀNH VIÊN HOẶC TOÀN ĐỘI NGŨ
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Side: Three Operatives Channels */}
        <div className="lg:col-span-5 space-y-4">
          <h3 className="font-mono text-xs font-bold text-[#bbb] uppercase tracking-widest mb-4 flex items-center gap-2">
            <Terminal size={15} className="text-[#FF1E44]" />
            KÊNH LIÊN HỆ ĐỘC LẬP TỪNG THÀNH VIÊN
          </h3>

          {operatives.map((op, idx) => (
            <div
              key={idx}
              className="bg-[#0c0c0c] border border-[rgba(255,255,255,0.07)] p-5 rounded-lg hover:border-[rgba(192,0,36,0.6)] transition duration-300"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-display font-extrabold text-base text-white uppercase tracking-wide">
                    {op.name}
                  </h4>
                  <p className="font-mono text-xs text-[#FF5A73]">{op.role}</p>
                </div>
                <span className="font-mono text-[10px] text-[#555] bg-[#140608] px-2 py-0.5 rounded border border-[rgba(192,0,36,0.3)]">
                  ACTIVE
                </span>
              </div>

              {/* Action Links */}
              <div className="mt-4 pt-3 border-t border-[rgba(255,255,255,0.05)] flex items-center gap-3">
                {op.github && (
                  <a
                    href={op.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#999] hover:text-white transition p-1"
                    title="GitHub"
                    aria-label={`${op.name} GitHub`}
                  >
                    <GithubIcon size={16} />
                  </a>
                )}
                {op.facebook && (
                  <a
                    href={op.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#999] hover:text-[#FF1E44] transition p-1"
                    title="Facebook"
                    aria-label={`${op.name} Facebook`}
                  >
                    <FacebookIcon size={16} />
                  </a>
                )}
                {op.instagram && (
                  <a
                    href={op.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#999] hover:text-[#FF1E44] transition p-1"
                    title="Instagram"
                    aria-label={`${op.name} Instagram`}
                  >
                    <InstagramIcon size={16} />
                  </a>
                )}
                {op.email && (
                  <a
                    href={`mailto:${op.email}`}
                    className="text-[#999] hover:text-white transition p-1"
                    title="Direct Mail"
                    aria-label={`${op.name} Email`}
                  >
                    <Mail size={16} />
                  </a>
                )}
                <a
                  href={op.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto font-mono text-[11px] text-[#FF5A73] hover:text-white uppercase tracking-wider underline underline-offset-4 transition"
                >
                  Portfolio ↗
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side: Transmission Terminal */}
        <div className="lg:col-span-7">
          <div className="hud-corner bg-[#0c0c0c] border border-[rgba(192,0,36,0.5)] p-6 sm:p-8 rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.85)]">
            <div className="flex items-center justify-between pb-4 border-b border-[rgba(255,255,255,0.06)] mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF1E44]" />
                <span className="font-mono text-xs font-bold text-white tracking-widest uppercase">
                  DISPATCH TERMINAL // GANG PROTOCOL
                </span>
              </div>
              <span className="font-mono text-[10px] text-[#666]">ENCRYPTED 256-BIT</span>
            </div>

            {submitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center">
                <CheckCircle2 size={48} className="text-[#FF1E44] animate-bounce mb-4" />
                <h4 className="font-display font-extrabold text-2xl text-white uppercase">
                  TÍN HIỆU ĐÃ ĐƯỢC CHUYỂN TIẾP!
                </h4>
                <p className="font-mono text-xs text-[#888] mt-2 max-w-md">
                  Thông điệp của bạn đã được ghi nhận vào hàng đợi của The Syndicate. Chúng tôi sẽ
                  phản hồi trong thời gian sớm nhất.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-mono text-xs text-[#888] uppercase tracking-wider mb-2">
                      DANH TÍNH CỦA BẠN (NAME)
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Mercer"
                      className="w-full bg-[#141414] border border-[rgba(255,255,255,0.08)] rounded px-4 py-3 text-sm text-white placeholder-[#555] focus:outline-none focus:border-[#FF1E44] font-body"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-[#888] uppercase tracking-wider mb-2">
                      ĐỊA CHỈ TRUYỀN TIN (EMAIL)
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="email@domain.com"
                      className="w-full bg-[#141414] border border-[rgba(255,255,255,0.08)] rounded px-4 py-3 text-sm text-white placeholder-[#555] focus:outline-none focus:border-[#FF1E44] font-body"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs text-[#888] uppercase tracking-wider mb-2">
                    ĐÍCH ĐẾN (RECIPIENT)
                  </label>
                  <select
                    value={formData.target}
                    onChange={(e) => setFormData({ ...formData, target: e.target.value })}
                    className="w-full bg-[#141414] border border-[rgba(255,255,255,0.08)] rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FF1E44] font-mono"
                  >
                    <option value="all">TOÀN BỘ THE SYNDICATE (ALL 3 MEMBERS)</option>
                    <option value="trung">NGUYỄN VĂN TRUNG (CORE SYSTEMS)</option>
                    <option value="duy">NGUYỄN VŨ DUY (FRONTEND LEAD)</option>
                    <option value="son">DƯƠNG NHƯ PHONG SƠN (FULL-STACK CLOUD)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-xs text-[#888] uppercase tracking-wider mb-2">
                    NỘI DUNG TRAO ĐỔI (MESSAGE)
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Nhập thông điệp, lời mời hợp tác hoặc trao đổi kỹ thuật..."
                    className="w-full bg-[#141414] border border-[rgba(255,255,255,0.08)] rounded px-4 py-3 text-sm text-white placeholder-[#555] focus:outline-none focus:border-[#FF1E44] font-body resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-gang w-full text-xs sm:text-sm py-4 shadow-[0_0_20px_rgba(255,30,68,0.5)]"
                >
                  <Send size={15} />
                  <span>TRANSMIT SECURE MESSAGE</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
