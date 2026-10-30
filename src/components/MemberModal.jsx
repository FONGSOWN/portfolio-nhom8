import React from 'react';
import { X, ExternalLink, Shield, Terminal, Award, BookOpen, User, Hash } from 'lucide-react';

export default function MemberModal({ member, onClose }) {
  if (!member) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-member-name"
    >
      <div
        className="modal-window relative w-full max-w-3xl bg-[#0c0c0c] border border-[rgba(192,0,36,0.7)] p-6 sm:p-8 rounded-xl shadow-[0_0_50px_rgba(192,0,36,0.35)] overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top laser scan line in modal */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF1E44] to-transparent shadow-[0_0_10px_#FF1E44]" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-lg bg-[#18080a] border border-[rgba(192,0,36,0.4)] text-[#FF5A73] hover:bg-[#FF1E44] hover:text-white flex items-center justify-center transition"
          aria-label="Close dossier modal"
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF1E44] animate-pulse" />
          <span className="font-mono text-xs text-[#FF5A73] uppercase tracking-widest">
            CONFIDENTIAL OPERATIVE DOSSIER // CLASSIFIED
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {/* Portrait Column */}
          <div className="flex flex-col items-center text-center">
            <div className="relative w-44 h-52 sm:w-48 sm:h-56 rounded-lg overflow-hidden border-2 border-[rgba(192,0,36,0.6)] shadow-[0_0_25px_rgba(192,0,36,0.4)] bg-[#120608]">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent opacity-60" />
            </div>

            <div className="mt-3 font-mono text-[11px] text-[#FF5A73] bg-[#1a080b] px-3 py-1 rounded border border-[rgba(192,0,36,0.3)]">
              {member.codename}
            </div>
            {member.mssv && (
              <div className="mt-1 font-mono text-[11px] text-[#aaa]">
                MSSV: <span className="text-white font-bold">{member.mssv}</span>
              </div>
            )}
          </div>

          {/* Details Column */}
          <div className="md:col-span-2 space-y-4">
            <div>
              <h3 id="modal-member-name" className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-wide">
                {member.name}
              </h3>
              <p className="font-mono text-sm text-[#FF1E44] font-bold tracking-wider uppercase mt-1">
                {member.role}
              </p>
              <p className="font-body text-xs text-[#777] mt-0.5">
                {member.school}
              </p>
            </div>

            <div className="bg-[#121212] border border-[rgba(255,255,255,0.06)] p-4 rounded-lg">
              <h4 className="font-mono text-xs text-[#bbb] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <User size={14} className="text-[#FF1E44]" />
                TIỂU SỬ VÀ PHONG CÁCH
              </h4>
              <p className="font-body text-sm text-[#999] leading-relaxed">
                {member.fullBio || member.bio}
              </p>
            </div>

            <div>
              <h4 className="font-mono text-xs text-[#bbb] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Terminal size={14} className="text-[#FF1E44]" />
                KHO VŨ KHÍ KỸ NĂNG (ARSENAL)
              </h4>
              <div className="flex flex-wrap gap-2">
                {member.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="font-mono text-xs px-2.5 py-1 rounded bg-[#170a0d] border border-[rgba(192,0,36,0.4)] text-[#FF5A73]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {member.highlights && (
              <div>
                <h4 className="font-mono text-xs text-[#bbb] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Award size={14} className="text-[#FF1E44]" />
                  DỰ ÁN & ĐIỂM SÁNG KỸ THUẬT
                </h4>
                <p className="font-body text-xs sm:text-sm text-[#888] leading-relaxed">
                  {member.highlights}
                </p>
              </div>
            )}

            {/* Direct Link Action */}
            <div className="pt-3 border-t border-[rgba(255,255,255,0.08)] flex justify-end gap-3">
              <a
                href={member.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gang text-xs py-3 px-6 shadow-[0_0_20px_rgba(255,30,68,0.5)]"
              >
                <span>OPEN OFFICIAL PORTFOLIO</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
