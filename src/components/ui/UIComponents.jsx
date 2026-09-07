import React from 'react';
import { ArrowLeft, ArrowRight, ChevronRight } from 'lucide-react';

/**
 * Centralized UI Design System Primitives
 * Provides structured, reusable, and human-readable UI components for buttons, input groups, headings, and cards.
 */

// 1. Primary & Secondary Button Component
export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  disabled = false, 
  type = 'button',
  className = '', 
  ...props 
}) {
  const baseStyles = 'inline-flex items-center justify-center font-bold tracking-wide transition-all duration-300 rounded-full cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-[#D90A14] hover:bg-[#C50912] text-white shadow-[0_4px_14px_rgba(217,10,20,0.4)]',
    secondary: 'border-2 border-[#CD4E17] text-[#CD4E17] hover:bg-[#CD4E17]/10',
    outline: 'border border-white/30 text-white hover:border-[#D90A14] hover:text-[#D90A14] bg-transparent',
    pill: 'border border-[#CD4E17]/60 text-white hover:bg-[#D90A14] hover:border-[#D90A14]',
  };

  const sizes = {
    sm: 'px-5 py-2 text-xs',
    md: 'px-8 py-3 text-sm',
    lg: 'px-9 py-3.5 text-base',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

// 2. Navigation Arrow Buttons Component (Left & Right Controls)
export function ArrowNavButtons({ onPrev, onNext, className = '' }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <button 
        onClick={onPrev}
        className="w-10 h-10 rounded-xl border border-white/20 bg-[#141416] hover:bg-[#D90A14] hover:border-[#D90A14] text-white flex items-center justify-center transition-all shadow-md cursor-pointer group"
        aria-label="Previous items"
        title="Previous"
      >
        <ArrowLeft className="w-5 h-5 text-white transition-colors" />
      </button>
      <button 
        onClick={onNext}
        className="w-10 h-10 rounded-xl border border-white/20 bg-[#141416] hover:bg-[#D90A14] hover:border-[#D90A14] text-white flex items-center justify-center transition-all shadow-md cursor-pointer group"
        aria-label="Next items"
        title="Next"
      >
        <ArrowRight className="w-5 h-5 text-white transition-colors" />
      </button>
    </div>
  );
}

// 3. Section Heading Component (Title + Highlight + Subtitle)
export function SectionHeading({ 
  titlePrefix = '', 
  titleHighlight = '', 
  titleSuffix = '', 
  subtitle = '', 
  align = 'center', 
  className = '' 
}) {
  const alignments = {
    center: 'text-center mx-auto',
    left: 'text-left',
    right: 'text-right ml-auto',
  };

  return (
    <div className={`mb-12 ${alignments[align] || alignments.center} ${className}`}>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-sans">
        {titlePrefix} {titleHighlight && <span className="text-[#D90A14]">{titleHighlight}</span>} {titleSuffix}
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-xs sm:text-sm font-medium mt-3 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}

// 4. Card Container Frame Component
export function CardFrame({ children, className = '', hoverable = true, ...props }) {
  const hoverClass = hoverable ? 'hover:-translate-y-1 hover:border-[#D90A14]' : '';

  return (
    <div
      className={`bg-[#18181c] rounded-2xl border border-white/10 shadow-xl transition-all duration-300 ${hoverClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

// 5. Input Field Group Component
export function InputGroup({ 
  id, 
  label, 
  type = 'text', 
  value, 
  onChange, 
  placeholder, 
  icon: Icon, 
  required = false, 
  className = '' 
}) {
  return (
    <div className={`space-y-1.5 ${className}`}>
      {label && (
        <label htmlFor={id} className="block text-xs font-semibold text-white">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && <Icon className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />}
        <input
          id={id}
          type={type}
          required={required}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full bg-[#18181c]/70 border border-white/20 rounded-xl ${Icon ? 'pl-10' : 'px-4'} pr-4 py-3 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-[#D90A14] transition-colors`}
        />
      </div>
    </div>
  );
}

// 6. Pagination Indicators Component
export function PaginationDots({ activeIndex = 1, total = 3 }) {
  return (
    <div className="flex items-center gap-1.5 pr-1">
      {Array.from({ length: total }).map((_, index) => {
        const isActive = index === activeIndex;
        return (
          <span
            key={index}
            className={`block rounded-full transition-all duration-300 ${
              isActive ? 'w-5 h-2 bg-[#D90A14]' : 'w-2 h-2 bg-gray-600'
            }`}
          />
        );
      })}
    </div>
  );
}

// 7. View All Link Button Component
export function ViewAllButton({ href = '#', text = 'View All', onClick }) {
  return (
    <div className="text-center mt-10">
      <a 
        href={href}
        onClick={onClick}
        className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full border border-[#CD4E17]/60 text-white hover:bg-[#D90A14] hover:border-[#D90A14] transition-all text-xs font-semibold shadow-md cursor-pointer group"
      >
        <span>{text}</span>
        <ChevronRight className="w-3.5 h-3.5 text-[#D90A14] group-hover:text-white transition-colors" />
      </a>
    </div>
  );
}
