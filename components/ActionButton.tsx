
import React from 'react';

interface ActionButtonProps {
  label: string;
  icon: React.ReactNode;
  href: string;
  variant?: 'primary' | 'secondary';
}

const ActionButton: React.FC<ActionButtonProps> = ({ label, icon, href, variant = 'primary' }) => {
  const baseStyles = "flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 w-full sm:w-auto";
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/20",
    secondary: "bg-white/5 hover:bg-white/10 text-white border border-white/10 backdrop-blur-sm"
  };

  return (
    <a href={href} className={`${baseStyles} ${variants[variant]}`}>
      {icon}
      {label}
    </a>
  );
};

export default ActionButton;
