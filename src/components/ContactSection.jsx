import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Send, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current.querySelectorAll('.contact-panel'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
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

  const members = [
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
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="section-container border-t border-[rgba(255,255,255,0.06)]"
    >
      {/* Background ambient spotlight */}
      <div
        className="red-ambient-spot w-[450px] h-[450px] bg-[#C00024] -left-20 top-1/2 opacity-10"
        aria-hidden="true"
      />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
        <div>
          <span className="font-mono text-[10px] text-[#FF5A73] tracking-[0.3em] uppercase font-bold block mb-1.5">
            // DISPATCH
          </span>
          <h2 className="section-headline text-3xl sm:text-4xl md:text-5xl">
            CON<span className="text-[#E50914]">TACT</span>
          </h2>
        </div>

        <p className="font-mono text-xs text-[#777] max-w-sm sm:text-right uppercase">
          KẾT NỐI TRỰC TIẾP VỚI CÁC THÀNH VIÊN
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-7">
        {/* Left: 3 Member Direct Channels (6 cols) */}
        <div className="contact-panel lg:col-span-6 space-y-4">
          {members.map((m, idx) => (
            <div
              key={idx}
              className="p-5 bg-[#0a0a0a] border border-[rgba(255,255,255,0.07)] hover:border-[rgba(229,9,20,0.4)] transition-colors duration-300 rounded"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-display font-black text-base text-white uppercase tracking-tight">
                    {m.name}
                  </h3>
                  <p className="font-mono text-xs text-[#FF5A73]">{m.role}</p>
                </div>

                <a
                  href={m.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-syndicate text-[10px] py-1.5 px-2.5 group/btn"
                >
                  <span>PORTFOLIO</span>
                  <ArrowUpRight size={11} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              <div className="mt-4 pt-3 border-t border-[rgba(255,255,255,0.05)] flex items-center gap-4 text-xs font-mono">
                {m.links.map((link, lIdx) => (
                  <a
                    key={lIdx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#777] hover:text-[#E50914] transition uppercase tracking-wider"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right: Message Form (6 cols) */}
        <div className="contact-panel lg:col-span-6">
          <div className="p-6 sm:p-7 bg-[#0a0a0a] border border-[rgba(255,255,255,0.07)] rounded h-full flex flex-col justify-between">
            <div>
              <h3 className="font-display font-black text-lg text-white uppercase tracking-tight mb-1">
                GỬI THÔNG ĐIỆP
              </h3>
              <p className="font-body text-xs text-[#777] mb-5">
                Gửi tin nhắn hoặc lời mời hợp tác trực tiếp đến toàn đội ngũ The Syndicate.
              </p>

              {submitted ? (
                <div className="py-10 text-center">
                  <CheckCircle2 size={32} className="text-[#E50914] mx-auto mb-2 animate-bounce" />
                  <h4 className="font-display font-bold text-base text-white uppercase">
                    TÍN HIỆU ĐÃ ĐƯỢC GHI NHẬN!
                  </h4>
                  <p className="font-mono text-xs text-[#777] mt-1">
                    Chúng tôi sẽ phản hồi lại bạn qua email trong thời gian sớm nhất.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block font-mono text-[10px] text-[#777] uppercase tracking-wider mb-1.5">
                      DANH TÍNH CỦA BẠN
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Họ và tên..."
                      className="w-full bg-[#111111] border border-[rgba(255,255,255,0.08)] px-3.5 py-2.5 text-xs text-white placeholder-[#555] focus:outline-none focus:border-[#E50914] font-body rounded transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] text-[#777] uppercase tracking-wider mb-1.5">
                      ĐỊA CHỈ EMAIL
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@domain.com"
                      className="w-full bg-[#111111] border border-[rgba(255,255,255,0.08)] px-3.5 py-2.5 text-xs text-white placeholder-[#555] focus:outline-none focus:border-[#E50914] font-body rounded transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] text-[#777] uppercase tracking-wider mb-1.5">
                      NỘI DUNG TRAO ĐỔI
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Nội dung thông điệp..."
                      className="w-full bg-[#111111] border border-[rgba(255,255,255,0.08)] px-3.5 py-2.5 text-xs text-white placeholder-[#555] focus:outline-none focus:border-[#E50914] font-body rounded resize-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-syndicate btn-syndicate-red w-full text-xs py-3"
                  >
                    <Send size={13} />
                    <span>TRANSMIT DISPATCH</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
