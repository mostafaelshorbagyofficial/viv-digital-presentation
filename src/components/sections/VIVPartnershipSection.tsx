import React, { useState } from 'react';
import { vivData } from '../../data/vivData';
import { promediaData } from '../../data/promediaData';
import { Building2, Sparkles, CheckCircle2, ArrowRight, Play, Globe, Mail, Phone, MapPin, Send } from 'lucide-react';
import { MediaItem } from '../../types/presentation';

interface VIVPartnershipSectionProps {
  onOpenVideo: (media: MediaItem) => void;
}

export const VIVPartnershipSection: React.FC<VIVPartnershipSectionProps> = ({
  onOpenVideo
}) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    entity: 'VIV Croissants Mall Placement / Franchise',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="partnership" className="py-24 sm:py-36 px-4 sm:px-8 lg:px-16 bg-viv-cream text-viv-chocolate relative">
      <div className="max-w-7xl mx-auto space-y-28">
        {/* 01 Partnership Proposition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-viv-burgundy font-bold block">
              Commercial Alliances
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-viv-burgundy font-normal leading-tight">
              {vivData.partnership.headline}
            </h2>
            <p className="text-lg text-viv-chocolate/80 font-light leading-relaxed">
              {vivData.partnership.whyViv}
            </p>

            <div className="p-8 rounded-3xl bg-white border border-viv-burgundy/10 shadow-sm space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-viv-burgundy font-bold block">
                Mall Location Specifications
              </span>
              <ul className="space-y-3">
                {vivData.partnership.locationRequirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-viv-chocolate/80 font-light">
                    <CheckCircle2 className="w-4 h-4 text-viv-burgundy shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {vivData.partnership.mallValue.map((val) => (
              <div
                key={val.title}
                className="p-6 rounded-2xl bg-white border border-viv-burgundy/10 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <h4 className="font-serif text-lg text-viv-burgundy mb-2 font-medium">
                    {val.title}
                  </h4>
                  <p className="text-xs sm:text-sm font-light text-viv-chocolate/70 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 02 VIV Climax Statement */}
        <div className="p-12 sm:p-20 rounded-3xl bg-viv-burgundy text-viv-cream border-2 border-viv-yellow/40 text-center max-w-4xl mx-auto space-y-6 shadow-2xl">
          <div className="space-y-1">
            <p className="text-2xl sm:text-4xl font-serif text-viv-cream font-light tracking-wide">{vivData.closing.line1}</p>
            <p className="text-2xl sm:text-4xl font-serif text-viv-cream font-light tracking-wide">{vivData.closing.line2}</p>
            <p className="text-3xl sm:text-5xl font-serif text-viv-yellow font-bold tracking-wider">{vivData.closing.line3}</p>
          </div>

          <p className="text-base sm:text-xl font-serif text-viv-cream-soft font-light max-w-2xl mx-auto leading-relaxed pt-4">
            {vivData.closing.paragraph}
          </p>

          <div className="pt-6">
            <span className="text-xs font-mono tracking-[0.3em] text-viv-yellow uppercase font-bold">
              {vivData.closing.promise}
            </span>
          </div>
        </div>

        {/* 03 Executive Partnership Inquiry Form */}
        <div className="pt-8 border-t border-viv-burgundy/15">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-viv-burgundy font-bold block">
                Direct Contact
              </span>
              <h3 className="text-3xl sm:text-4xl font-serif text-viv-burgundy font-normal">
                Let's Build What's Next
              </h3>
              <p className="text-sm sm:text-base text-viv-chocolate/80 font-light leading-relaxed">
                Connect directly with our executive expansion committee for prime mall leases, master franchise rights, and culinary partnerships.
              </p>

              <div className="p-6 rounded-2xl bg-white border border-viv-burgundy/10 space-y-3 text-xs font-mono text-viv-chocolate/80">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-viv-burgundy" />
                  <span>promedia.eg.official@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-viv-burgundy" />
                  <span>Egypt: 00201061119700 · France: 0033751309179 · USA: 19179246520</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 p-8 rounded-3xl bg-white border border-viv-burgundy/15 shadow-xl">
              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-viv-yellow/20 border border-viv-yellow text-center space-y-4">
                  <CheckCircle2 className="w-10 h-10 text-viv-burgundy mx-auto" />
                  <h4 className="font-serif text-xl text-viv-burgundy font-semibold">Inquiry Transmitted Successfully</h4>
                  <p className="text-xs text-viv-chocolate/80 font-light">
                    Our team will get back to you shortly regarding the VIV Croissants partnership.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-viv-burgundy text-viv-cream font-mono text-xs font-bold uppercase"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-viv-burgundy uppercase mb-1 font-bold">
                      Your Name & Title
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Karim Mansour — Asset Manager"
                      className="w-full px-4 py-3 rounded-xl bg-viv-cream-soft border border-viv-burgundy/20 text-viv-chocolate text-sm focus:outline-none focus:border-viv-burgundy"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-viv-burgundy uppercase mb-1 font-bold">
                      Official Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-viv-cream-soft border border-viv-burgundy/20 text-viv-chocolate text-sm focus:outline-none focus:border-viv-burgundy"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-viv-burgundy uppercase mb-1 font-bold">
                      Message / Location Parameter
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please share details about your mall or proposed location..."
                      className="w-full px-4 py-3 rounded-xl bg-viv-cream-soft border border-viv-burgundy/20 text-viv-chocolate text-sm focus:outline-none focus:border-viv-burgundy"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-viv-burgundy hover:bg-viv-burgundy-light text-viv-cream font-mono text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-lg"
                  >
                    <span>Transmit Partnership Inquiry</span>
                    <Send className="w-3.5 h-3.5 text-viv-yellow" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Footer Signature */}
        <div className="pt-12 border-t border-viv-burgundy/15 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-viv-chocolate/60 gap-4">
          <div className="flex items-center gap-3">
            <span className="font-serif font-bold text-viv-burgundy text-sm">VIV CROISSANTS</span>
            <span>© 2026 GOOD FOOD BRIGHTER DAYS</span>
          </div>
          <span>MIDDLE EAST · EUROPE · USA</span>
        </div>
      </div>
    </section>
  );
};
