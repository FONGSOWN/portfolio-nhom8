import React, { useState } from 'react';
import { ExternalLink, ShieldAlert, Crosshair, Terminal, Sparkles, Eye } from 'lucide-react';
import MemberModal from './MemberModal';

export default function MembersSection() {
  const [activeModalMember, setActiveModalMember] = useState(null);

  const members = [
    {
      id: 'trung',
      name: 'NGUYỄN VĂN TRUNG',
      codename: 'OPERATIVE // OVERLORD',
      role: 'Core Systems & Backend Architect',
      school: 'Đại học Giao thông vận tải TP.HCM (UTH)',
      url: 'https://trung047.github.io/Portfolio/',
      image: './assets/images/trung-avatar.png',
      badge: 'BACKEND SUPREME',
      skills: ['Java Socket', 'MySQL Stored Proc', 'Python AI', 'Network Protocols', 'IDS Systems'],
      bio: 'Bắt đầu từ sự tò mò, lớn dần thành đam mê. Lập trình viên hệ thống chuyên sâu tại UTH, kiến tạo giải pháp truyền thông mạng và quản trị dữ liệu vững chãi dưới tải lớn.',
      fullBio: 'Sinh viên Công nghệ thông tin tại Trường Đại học Giao thông vận tải TP.HCM. Chuyên sâu về lập trình mạng, giao thức Socket, tối ưu truy vấn cơ sở dữ liệu và ứng dụng trí tuệ nhân tạo giải quyết bài toán ràng buộc CSP & an toàn thông tin.',
      highlights: 'Chủ trì kiến trúc NetChat Client-Server Socket, hệ thống Quản lý Cửa hàng Tiện lợi trên MySQL với Stored Procedures phức tạp, và mô hình IDS phát hiện xâm nhập mạng bằng Machine Learning.',
    },
    {
      id: 'duy',
      name: 'NGUYỄN VŨ DUY',
      codename: 'OPERATIVE // VIRTUOSO',
      role: 'Frontend Lead & UI/UX Specialist',
      school: 'Đại học Giao thông vận tải TP.HCM (UTH)',
      url: 'https://nguyen-vu-duy-portfolio.vercel.app/',
      image: './assets/images/duy-avatar.jpg',
      badge: 'FRONTEND MAESTRO',
      skills: ['React JS', 'Tailwind CSS', 'JavaScript ES6+', 'C++', 'Motion Design', 'Figma'],
      bio: 'Tập trung phát triển những sản phẩm công nghệ vừa hoạt động tối ưu, vừa mang lại trải nghiệm số mãn nhãn, hấp dẫn và để lại ấn tượng mạnh mẽ cho người dùng.',
      fullBio: 'Sinh viên Công nghệ thông tin UTH, phụ trách định hình phong cách giao diện và linh hồn tương tác. Thành thạo hệ sinh thái React, CSS modern architecture, và chuyển đổi mượt mà giữa thiết kế đồ họa sang mã nguồn thực chiến.',
      highlights: 'Thiết kế hệ sinh thái kết nối y tế RujukCepat, giao diện nền tảng số RisetIn tích hợp AI thương mại hóa, và đảm nhiệm toàn bộ giao diện quản trị người dùng cho đồ án Quản lý Thú y PetCare.',
    },
    {
      id: 'son',
      name: 'DƯƠNG NHƯ PHONG SƠN',
      codename: 'OPERATIVE // WARLORD',
      role: 'Full-Stack Engineer & Cloud Infrastructure',
      school: 'Đại học Giao thông vận tải TP.HCM (UTH)',
      mssv: '045206003326',
      url: 'https://portfolio-ca-nhan.onrender.com/',
      image: './assets/images/son-avatar.jpg',
      badge: 'FULL-STACK CLOUD',
      skills: ['Python Flask', 'SQLite / MySQL', 'Cloud Render', 'C / C++', 'Java', 'Full-Stack Architecture'],
      bio: 'Kỹ sư CNTT tương lai tại UTH TP.HCM. Kiến tạo phần mềm với tư duy chuẩn mực, cấu trúc dữ liệu tối ưu, dẫn dắt triển khai ứng dụng thực chiến trên môi trường Cloud.',
      fullBio: 'Sinh viên Công nghệ thông tin khóa 2024–2028 tại UTH TP.HCM (MSSV: 045206003326). Dẫn dắt xây dựng giải pháp phần mềm toàn diện từ cơ sở dữ liệu, API Flask, logic nghiệp vụ đến triển khai hạ tầng tự động hóa trên nền tảng Cloud Render.',
      highlights: 'Tổng công trình sư đồ án Hệ Thống Quản Lý Phòng Khám Thú Y (Flask + SQLite + Cloud Deploy), ứng dụng IoT nông nghiệp thông minh, cùng kiệt tác Royal Black Diamond 3D WebGL Three.js cá nhân.',
    },
  ];

  // 3D Card tilt logic
  const handleMouseMove = (e, index) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
  };

  return (
    <section id="members" className="section-wrap border-t border-[rgba(255,255,255,0.05)]">
      {/* Background ambient crimson spot */}
      <div className="red-spotlight w-[500px] h-[500px] bg-[#C00024] -right-40 top-1/2 opacity-20" />

      {/* Section Title */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF1E44] animate-ping" />
          <span className="badge-gang">ELITE SYNDICATE SQUAD // 03 OPERATIVES</span>
        </div>
        <h2 className="font-display font-black text-4xl sm:text-6xl text-white uppercase tracking-tight">
          OUR <span className="text-[#FF1E44]">MEMBERS</span>
        </h2>
        <p className="font-mono text-xs sm:text-sm text-[#888] tracking-widest uppercase mt-3">
          BA BỘ ÓC — MỘT Ý CHÍ — KHÔNG THỎA HIỆP // UTH TP.HCM
        </p>
      </div>

      {/* 3 Members Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 perspective-container">
        {members.map((member, index) => (
          <article
            key={member.id}
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseLeave={handleMouseLeave}
            className="tilt-card hud-corner bg-[#0c0c0c] border border-[rgba(192,0,36,0.4)] rounded-xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.85)] hover:border-[#FF1E44] hover:shadow-[0_0_35px_rgba(255,30,68,0.35)] transition-all flex flex-col group cursor-pointer"
            onClick={() => setActiveModalMember(member)}
          >
            {/* Top Tactical Status Bar */}
            <div className="bg-[#140608] px-4 py-2.5 border-b border-[rgba(192,0,36,0.3)] flex items-center justify-between">
              <span className="font-mono text-[10px] text-[#FF5A73] font-bold tracking-widest uppercase">
                {member.codename}
              </span>
              <span className="font-mono text-[10px] bg-[#22070b] text-[#FF1E44] px-2 py-0.5 rounded border border-[rgba(255,30,68,0.3)] font-bold">
                {member.badge}
              </span>
            </div>

            {/* Cinematic Portrait Card Area */}
            <div className="relative h-80 sm:h-96 w-full overflow-hidden bg-[#100608]">
              {/* Background red neon backlight */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent z-10" />
              <div className="absolute -inset-1 bg-gradient-to-r from-[#8B0000]/20 via-[#C00024]/10 to-[#8B0000]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />

              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                loading="lazy"
              />

              {/* Tactical Crosshair watermark */}
              <div className="absolute top-4 right-4 z-20 text-[#FF1E44] opacity-50 group-hover:opacity-100 transition-opacity">
                <Crosshair size={28} />
              </div>

              {/* Floating Dossier Preview Pill */}
              <div className="absolute bottom-4 left-4 z-20 flex items-center gap-1.5 bg-[#0a0a0a]/90 backdrop-blur-md px-3 py-1.5 rounded border border-[rgba(255,255,255,0.1)] text-xs text-[#bbb] group-hover:border-[#FF1E44] group-hover:text-white transition">
                <Eye size={13} className="text-[#FF1E44]" />
                <span className="font-mono text-[11px] uppercase tracking-wider">CLICK FOR DOSSIER</span>
              </div>
            </div>

            {/* Member Details */}
            <div className="p-6 flex-1 flex flex-col justify-between bg-gradient-to-b from-[#0c0c0c] to-[#070707]">
              <div>
                <h3 className="font-display font-extrabold text-2xl text-white uppercase tracking-wide group-hover:text-[#FF1E44] transition-colors">
                  {member.name}
                </h3>
                <p className="font-mono text-xs text-[#FF5A73] font-bold tracking-wider uppercase mt-1">
                  {member.role}
                </p>
                <p className="font-body text-xs text-[#777] mt-0.5">
                  {member.school}
                </p>

                {member.mssv && (
                  <p className="font-mono text-xs text-[#aaa] mt-1">
                    MSSV: <span className="text-[#FF5A73] font-bold">{member.mssv}</span>
                  </p>
                )}

                <p className="font-body text-xs sm:text-sm text-[#999] leading-relaxed mt-4 line-clamp-3">
                  {member.bio}
                </p>

                {/* Skills Badges */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {member.skills.slice(0, 4).map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="font-mono text-[10px] tracking-wider uppercase px-2 py-0.5 rounded bg-[#16080a] border border-[rgba(192,0,36,0.35)] text-[#FF8596]"
                    >
                      {skill}
                    </span>
                  ))}
                  {member.skills.length > 4 && (
                    <span className="font-mono text-[10px] px-1.5 py-0.5 text-[#666]">
                      +{member.skills.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-5 border-t border-[rgba(255,255,255,0.06)] flex items-center gap-3">
                <a
                  href={member.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="btn-gang flex-1 text-xs py-3.5 px-4 shadow-[0_0_20px_rgba(192,0,36,0.5)] group/btn"
                >
                  <span>VIEW PORTFOLIO</span>
                  <ExternalLink size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
                </a>

                <button
                  type="button"
                  onClick={() => setActiveModalMember(member)}
                  className="w-11 h-11 rounded bg-[#170a0c] border border-[rgba(192,0,36,0.4)] text-[#FF5A73] hover:bg-[#FF1E44] hover:text-white flex items-center justify-center transition"
                  title="Open Operative Dossier"
                  aria-label={`Open Dossier for ${member.name}`}
                >
                  <Terminal size={17} />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Confidential Dossier Modal */}
      <MemberModal
        member={activeModalMember}
        onClose={() => setActiveModalMember(null)}
      />
    </section>
  );
}
