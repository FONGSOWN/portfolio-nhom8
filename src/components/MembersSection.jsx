import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function MembersSection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const members = [
    {
      num: '01',
      name: 'NGUYỄN VĂN TRUNG',
      role: 'Core Systems & Backend',
      school: 'UTH TP.HCM',
      image: './assets/images/trung-avatar.png',
      objectPosition: 'center 12%',
      url: 'https://trung047.github.io/Portfolio/',
      desc: 'Lập trình mạng Socket, tối ưu cơ sở dữ liệu MySQL và giải thuật AI phân tán.',
      skills: ['Java Socket', 'MySQL', 'Python AI'],
    },
    {
      num: '02',
      name: 'NGUYỄN VŨ DUY',
      role: 'Frontend & UI/UX Lead',
      school: 'UTH TP.HCM',
      image: './assets/images/duy-avatar.jpg',
      objectPosition: 'center 10%',
      url: 'https://nguyen-vu-duy-portfolio.vercel.app/',
      desc: 'Thiết kế giao diện dark mode hiện đại, tối ưu hiệu năng và trải nghiệm chuyển động mượt mà.',
      skills: ['React JS', 'Tailwind CSS', 'Motion UI'],
    },
    {
      num: '03',
      name: 'DƯƠNG NHƯ PHONG SƠN',
      role: 'Full-Stack & Cloud Dev',
      school: 'UTH TP.HCM',
      image: './assets/images/son-avatar.jpg',
      objectPosition: 'center 20%',
      url: 'https://portfolio-ca-nhan.onrender.com/',
      desc: 'Phát triển backend API Python Flask, bảo mật hệ thống và triển khai Cloud Render.',
      skills: ['Python Flask', 'SQLite', 'Cloud Render'],
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image mask reveal on scroll
      const curtains = sectionRef.current.querySelectorAll('.member-photo-curtain');
      const cards = sectionRef.current.querySelectorAll('.member-card');

      gsap.fromTo(
        cards,
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

      curtains.forEach((curtain, i) => {
        gsap.to(curtain, {
          yPercent: -100,
          duration: 0.9,
          delay: 0.2 + i * 0.12,
          ease: 'power4.inOut',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Subtle 3D card tilt
  const handleMouseMove = (e, index) => {
    const card = cardsRef.current[index];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotX = (y / (rect.height / 2)) * -6;
    const rotY = (x / (rect.width / 2)) * 6;

    gsap.to(card, {
      rotateX: rotX,
      rotateY: rotY,
      duration: 0.3,
      ease: 'power1.out',
      transformPerspective: 900,
    });
  };

  const handleMouseLeave = (index) => {
    const card = cardsRef.current[index];
    if (!card) return;
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  return (
    <section
      ref={sectionRef}
      id="crew"
      className="section-container border-t border-[rgba(255,255,255,0.06)]"
    >
      {/* Background ambient red light */}
      <div
        className="red-ambient-spot w-[450px] h-[450px] bg-[#C00024] -right-24 top-1/3 opacity-10"
        aria-hidden="true"
      />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
        <div>
          <span className="font-mono text-[10px] text-[#FF5A73] tracking-[0.3em] uppercase font-bold block mb-1.5">
            // OPERATIVES
          </span>
          <h2 className="section-headline text-3xl sm:text-4xl md:text-5xl">
            THE <span className="text-[#E50914]">CREW</span>
          </h2>
        </div>

        <p className="font-mono text-xs text-[#777] max-w-sm sm:text-right uppercase">
          BA THÀNH VIÊN — MỘT BẢN SẮC // UTH TP.HCM
        </p>
      </div>

      {/* 3 Members Grid on Desktop (Uniform aspect ratio 4:5, equal heights) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">
        {members.map((m, idx) => (
          <article
            key={m.num}
            ref={(el) => (cardsRef.current[idx] = el)}
            onMouseMove={(e) => handleMouseMove(e, idx)}
            onMouseLeave={() => handleMouseLeave(idx)}
            className="member-card group bg-[#0a0a0a] border border-[rgba(255,255,255,0.07)] hover:border-[rgba(229,9,20,0.5)] transition-colors duration-400 p-4 rounded flex flex-col justify-between"
          >
            <div>
              {/* Photo Frame (Strict 4:5 aspect ratio, faces framed perfectly) */}
              <div className="member-photo-wrap rounded overflow-hidden">
                <div className="member-photo-curtain" />
                <img
                  src={m.image}
                  alt={m.name}
                  loading="lazy"
                  className="grayscale contrast-125 brightness-95 group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100"
                  style={{ objectPosition: m.objectPosition }}
                />
              </div>

              {/* Info Area */}
              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <span className="font-title text-xl text-[#E50914] tracking-wider">
                    {m.num}
                  </span>
                  <span className="font-mono text-[10px] text-[#666] uppercase">
                    {m.school}
                  </span>
                </div>

                <h3 className="font-display font-black text-lg text-white uppercase mt-1 group-hover:text-[#E50914] transition-colors">
                  {m.name}
                </h3>
                <p className="font-mono text-xs text-[#FF5A73] font-bold mt-0.5">
                  {m.role}
                </p>

                <p className="font-body text-xs text-[#888] leading-relaxed mt-2.5 line-clamp-2">
                  {m.desc}
                </p>

                {/* Minimal Skill Badges */}
                <div className="mt-3.5 flex flex-wrap gap-1.5">
                  {m.skills.map((s, sIdx) => (
                    <span
                      key={sIdx}
                      className="font-mono text-[9px] uppercase px-2 py-0.5 bg-[#121212] text-[#aaa] border border-[rgba(255,255,255,0.06)] rounded"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct Link Action */}
            <div className="mt-5 pt-3.5 border-t border-[rgba(255,255,255,0.06)]">
              <a
                href={m.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-syndicate w-full group/btn text-[11px] py-2.5"
              >
                <span>VIEW PORTFOLIO</span>
                <ArrowUpRight
                  size={14}
                  className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
