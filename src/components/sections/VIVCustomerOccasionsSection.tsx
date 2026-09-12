import React from 'react';
import { vivData } from '../../data/vivData';
import { Users, Clock, Sparkles } from 'lucide-react';

export const VIVCustomerOccasionsSection: React.FC = () => {
  return (
    <section id="menu-architecture" className="py-24 sm:py-36 px-4 sm:px-8 lg:px-16 bg-viv-cream text-viv-chocolate relative">
      <div className="max-w-7xl mx-auto space-y-28">
        {/* Customer Groups */}
        <div>
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-viv-burgundy font-bold block mb-3">
              Audience Demographics
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-viv-burgundy font-normal leading-tight">
              Built for Modern Consumers
            </h2>
            <p className="mt-4 text-lg text-viv-chocolate/80 font-light">
              VIV is meticulously calibrated for diverse contemporary lifestyles and high-frequency purchasing habits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vivData.customers.map((cust) => (
              <div
                key={cust.group}
                className="p-8 rounded-2xl bg-white border border-viv-burgundy/10 shadow-sm hover:shadow-md hover:border-viv-burgundy/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-viv-yellow/20 text-viv-burgundy flex items-center justify-center mb-4">
                    <Users className="w-5 h-5" />
                  </div>
                  <h4 className="text-xl font-serif text-viv-burgundy mb-2 font-medium">
                    {cust.group}
                  </h4>
                  <p className="text-sm font-light text-viv-chocolate/80 leading-relaxed">
                    {cust.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Daypart Occasions Frequency Engine */}
        <div className="pt-16 border-t border-viv-burgundy/15">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-viv-burgundy font-bold block mb-3">
              All-Day Consumption Architecture
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-viv-burgundy font-normal leading-tight">
              Multiple Occasions. Infinite Visits.
            </h2>
            <p className="mt-4 text-lg text-viv-chocolate/80 font-light">
              VIV captures continuous revenue velocity across 8 key daily dayparts, transforming occasional consumers into habitual weekly patrons.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {vivData.occasions.map((occ) => (
              <div
                key={occ.title}
                className="p-6 rounded-2xl bg-white border border-viv-burgundy/10 hover:border-viv-burgundy/30 transition-colors shadow-sm"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-viv-burgundy font-bold">
                    {occ.time}
                  </span>
                  <Clock className="w-3.5 h-3.5 text-viv-chocolate/40" />
                </div>
                <h4 className="font-serif text-lg text-viv-burgundy mb-1">
                  {occ.title}
                </h4>
                <p className="text-xs text-viv-chocolate/70 font-light">
                  {occ.note}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-viv-burgundy text-viv-cream border border-viv-yellow/30 text-center max-w-2xl mx-auto shadow-lg">
            <p className="text-sm sm:text-base font-serif italic text-viv-yellow">
              “The concept is engineered to maximize visit frequency rather than relying on one-off novelty.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
