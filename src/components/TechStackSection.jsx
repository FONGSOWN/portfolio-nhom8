import React from 'react';
import { Terminal, Code2, Database, Cloud, ShieldAlert, Cpu } from 'lucide-react';

export default function TechStackSection() {
  const categories = [
    {
      category: 'TACTICAL BACKEND',
      icon: Terminal,
      items: [
        { name: 'Python Flask', level: 'ADVANCED', role: 'API Microservices & Backend Logic' },
        { name: 'Java & Socket', level: 'EXPERT', role: 'High-Concurrency Network Systems' },
        { name: 'C / C++', level: 'CORE', role: 'Algorithm Optimization & Memory Control' },
        { name: 'RESTful API', level: 'ADVANCED', role: 'Stateless Service Architecture' },
      ],
    },
    {
      category: 'VISUAL INTERFACE',
      icon: Code2,
      items: [
        { name: 'React JS', level: 'ADVANCED', role: 'Stateful Dynamic Web Applications' },
        { name: 'Tailwind CSS', level: 'EXPERT', role: 'Atomic Responsive Dark UI' },
        { name: 'WebGL & Three.js', level: 'SPECIAL', role: '3D Spatial Modeling & Canvas Shaders' },
        { name: 'JavaScript ES6+', level: 'EXPERT', role: 'Asynchronous Event-Driven Architecture' },
      ],
    },
    {
      category: 'TACTICAL DATA',
      icon: Database,
      items: [
        { name: 'MySQL', level: 'ADVANCED', role: 'ACID Relational Storage & Stored Proc' },
        { name: 'SQLite DB', level: 'ADVANCED', role: 'Lightweight Embedded Data Layer' },
        { name: 'DB Modeling', level: 'ADVANCED', role: 'Schema Normalization & Query Tuning' },
        { name: 'Data Security', level: 'CORE', role: 'Sanitization & Access Control' },
      ],
    },
    {
      category: 'CLOUD & DEVOPS',
      icon: Cloud,
      items: [
        { name: 'Render Cloud', level: 'OPERATIONAL', role: 'Automated Containerized Hosting' },
        { name: 'Vercel Platform', level: 'OPERATIONAL', role: 'Edge Network Static CDN' },
        { name: 'Git & GitHub', level: 'EXPERT', role: 'Version Control & Collaborative CI/CD' },
        { name: 'Vite Build Engine', level: 'EXPERT', role: 'Lightning-fast Rollup Bundling' },
      ],
    },
  ];

  return (
    <section id="tech" className="section-wrap border-t border-[rgba(255,255,255,0.05)]">
      {/* Background ambient spotlight */}
      <div className="red-spotlight w-[400px] h-[400px] bg-[#C00024] -right-20 top-1/3 opacity-15" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-3 h-3 bg-[#FF1E44]" />
            <span className="badge-gang">ARSENAL // UNDERGROUND WEAPONRY</span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
            TECH <span className="text-[#FF1E44]">STACK</span>
          </h2>
          <p className="font-mono text-xs sm:text-sm text-[#888] tracking-widest mt-2 uppercase">
            CÔNG CỤ THỰC CHIẾN ĐÃ ĐƯỢC CHỨNG MINH QUA DỰ ÁN
          </p>
        </div>

        <div className="font-mono text-xs text-[#777] border-l border-[rgba(192,0,36,0.4)] pl-4">
          STANDARDIZED // ZERO BLOAT // OPTIMIZED RUNTIME
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <div
              key={idx}
              className="hud-corner bg-[#0c0c0c] border border-[rgba(255,255,255,0.07)] p-6 rounded-lg hover:border-[rgba(192,0,36,0.6)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-8 h-8 rounded bg-[#160608] border border-[rgba(192,0,36,0.4)] flex items-center justify-center text-[#FF1E44]">
                    <Icon size={16} />
                  </div>
                  <h3 className="font-mono text-xs font-bold text-white tracking-widest uppercase">
                    {cat.category}
                  </h3>
                </div>

                <div className="space-y-4">
                  {cat.items.map((item, iIdx) => (
                    <div
                      key={iIdx}
                      className="bg-[#121212] p-3 rounded border border-[rgba(255,255,255,0.04)] hover:border-[rgba(192,0,36,0.3)] transition"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold text-white">
                          {item.name}
                        </span>
                        <span className="font-mono text-[9px] bg-[#200609] text-[#FF5A73] px-1.5 py-0.5 rounded border border-[rgba(255,30,68,0.3)]">
                          {item.level}
                        </span>
                      </div>
                      <p className="font-body text-[11px] text-[#777] mt-1">
                        {item.role}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[rgba(255,255,255,0.05)] text-right">
                <span className="font-mono text-[10px] text-[#555] uppercase tracking-widest">
                  MODULE // {String(idx + 1).padStart(2, '0')} READY
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
