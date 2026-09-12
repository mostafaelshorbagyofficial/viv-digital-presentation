import React from 'react';

interface SectionHeaderProps {
  numeral: string;
  category: string;
  title: string;
  subtitle?: string;
  theme?: 'dark' | 'light';
  centered?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  numeral,
  category,
  title,
  subtitle,
  theme = 'dark',
  centered = false
}) => {
  const isLight = theme === 'light';

  return (
    <div className={`mb-12 sm:mb-20 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-4xl'}`}>
      <div className={`flex items-center gap-4 mb-4 ${centered ? 'justify-center' : ''}`}>
        <span className={`text-xs sm:text-sm font-mono tracking-widest px-3 py-1 rounded-full border ${
          isLight 
            ? 'border-noir/20 bg-noir/5 text-noir/70' 
            : 'border-gold-500/30 bg-gold-500/10 text-gold-300'
        }`}>
          {numeral}
        </span>
        <span className={`text-xs font-mono uppercase tracking-[0.25em] ${
          isLight ? 'text-noir/60' : 'text-ivory/50'
        }`}>
          {category}
        </span>
      </div>

      <h2 className={`text-3xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight leading-[1.1] ${
        isLight ? 'text-noir' : 'text-ivory'
      }`}>
        {title}
      </h2>

      {subtitle && (
        <p className={`mt-4 text-base sm:text-xl font-light leading-relaxed ${
          isLight ? 'text-noir/70' : 'text-ivory-muted/80'
        }`}>
          {subtitle}
        </p>
      )}

      <div className={`h-px w-20 mt-6 ${
        isLight ? 'bg-noir/20' : 'bg-gold-500/40'
      } ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
};
