
import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ children }) => {
  return (
    <span className="group relative px-5 py-2 rounded-xl text-sm font-semibold bg-white/[0.03] border border-white/10 text-blue-200/70 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-500 cursor-default overflow-hidden">
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
    </span>
  );
};

export default Badge;
