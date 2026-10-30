import React, { useState } from 'react';
import { ArrowUpRight, Send, CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', target: 'all', message: '' });
  const [sent, setSent] = useState(false);

  const contacts = [
    {
      name: 'NGUYỄN VĂN TRUNG',
      role: 'Core Systems & Backend',
      portfolio: 'https://trung047.github.io/Portfolio/',
      links: [
        { label: 'GitHub', url: 'https://github.com/Trung047' },
        { label: 'Facebook', url: 'https://www.facebook.com/nguyen.van.trung.240525' },
        { label: 'Email', url: 'mailto:trunggn123@gmail.com' },
      ],
    },
    {
      name: 'NGUYỄN VŨ DUY',
      role: 'Frontend & UI/UX Lead',
      portfolio: 'https://nguyen-vu-duy-portfolio.vercel.app/',
      links: [
        { label: 'Instagram', url: 'https://www.instagram.com/duy.nguyenvu.794' },
        { label: 'Facebook', url: 'https://www.facebook.com/share/1KBrSvwPtr/?mibextid=wwXIfr' },
        { label: 'Email', url: 'mailto:nguyenvuduy64310@gmail.com' },
      ],
    },
    {
      name: 'DƯƠNG NHƯ PHONG SƠN',
      role: 'Full-Stack & Cloud Dev',
      portfolio: 'https://portfolio-ca-nhan.onrender.com/',
      links: [
        { label: 'GitHub', url: 'https://github.com/FONGSOWN' },
        { label: 'Portfolio Live', url: 'https://portfolio-ca-nhan.onrender.com/' },
        { label: 'Email', url: 'mailto:son.duong@uth.edu.vn' },
      ],
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setFormData({ name: '', email: '', target: 'all', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="editorial-wrap border-t border-[rgba(255,255,255,0.06)]">
      {/* Background ambient spotlight */}
      <div
        className="red-ambient-light w-[500px] h-[500px] bg-[#B8001F] -left-28 top-1/2 opacity-15"
        aria-hidden="true"
      />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="font-mono text-xs text-[#FF5A73] tracking-[0.35em] uppercase font-bold block mb-2">
            [ 04 // DIRECT DISPATCH ]
          </span>
          <h2 className="editorial-title text-5xl sm:text-7xl text-white">
            CON<span className="text-[#FF1E44]">TACT</span>
          </h2>
        </div>

        <div className="font-mono text-xs text-[#777] border-l border-[#B8001F] pl-4 uppercase">
          KẾT NỐI TRỰC TIẾP VỚI CÁC THÀNH VIÊN THE SYNDICATE
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Side: Three Operatives Channels (6 cols) */}
        <div className="lg:col-span-6 space-y-6">
          {contacts.map((op, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#080808] border border-[rgba(255,255,255,0.07)] hover:border-[rgba(255,30,68,0.4)] transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-display font-black text-xl text-white uppercase tracking-tight">
                    {op.name}
                  </h3>
                  <p className="font-mono text-xs text-[#FF5A73] mt-0.5">{op.role}</p>
                </div>

                <a
                  href={op.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cinema text-[10px] py-2 px-3 group/link"
                >
                  <span>PORTFOLIO</span>
                  <ArrowUpRight size={12} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              <div className="mt-5 pt-4 border-t border-[rgba(255,255,255,0.05)] flex items-center gap-4 text-xs font-mono">
                {op.links.map((link, lIdx) => (
                  <a
                    key={lIdx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#888] hover:text-[#FF1E44] transition uppercase tracking-wider"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right Side: Clean Dispatch Transmission (6 cols) */}
        <div className="lg:col-span-6">
          <div className="p-8 sm:p-10 bg-[#080808] border border-[rgba(255,255,255,0.07)]">
            <h3 className="font-display font-black text-2xl text-white uppercase tracking-tight mb-2">
              GỬI THÔNG ĐIỆP
            </h3>
            <p className="font-body text-xs text-[#777] mb-8 leading-relaxed">
              Bạn có dự án hoặc muốn trao đổi chuyên môn? Gửi tin nhắn trực tiếp đến toàn đội ngũ.
            </p>

            {sent ? (
              <div className="py-14 text-center">
                <CheckCircle2 size={40} className="text-[#FF1E44] mx-auto mb-3 animate-bounce" />
                <h4 className="font-display font-bold text-xl text-white uppercase">
                  TÍN HIỆU ĐÃ ĐƯỢC CHUYỂN TIẾP!
                </h4>
                <p className="font-mono text-xs text-[#888] mt-2">
                  The Syndicate sẽ phản hồi lại bạn qua email trong thời gian sớm nhất.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block font-mono text-[11px] text-[#777] uppercase tracking-wider mb-2">
                    DANH TÍNH CỦA BẠN
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Họ và tên..."
                    className="w-full bg-[#111111] border border-[rgba(255,255,255,0.08)] px-4 py-3 text-sm text-white placeholder-[#555] focus:outline-none focus:border-[#FF1E44] font-body transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[11px] text-[#777] uppercase tracking-wider mb-2">
                    ĐỊA CHỈ EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@domain.com"
                    className="w-full bg-[#111111] border border-[rgba(255,255,255,0.08)] px-4 py-3 text-sm text-white placeholder-[#555] focus:outline-none focus:border-[#FF1E44] font-body transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[11px] text-[#777] uppercase tracking-wider mb-2">
                    NỘI DUNG TRAO ĐỔI
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Nội dung thông điệp..."
                    className="w-full bg-[#111111] border border-[rgba(255,255,255,0.08)] px-4 py-3 text-sm text-white placeholder-[#555] focus:outline-none focus:border-[#FF1E44] font-body resize-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-cinema btn-cinema-red w-full text-xs py-4"
                >
                  <Send size={14} />
                  <span>TRANSMIT DISPATCH</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
