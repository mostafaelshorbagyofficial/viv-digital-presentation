import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { promediaData } from '../../data/promediaData';
import { Globe, Mail, Phone, MapPin, Send, CheckCircle2, ArrowUpRight } from 'lucide-react';

export const GlobalContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    entity: 'VIV Croissants Expansion / Mall Placement',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 sm:py-36 px-4 sm:px-8 lg:px-16 bg-noir border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Chapter Header */}
        <SectionHeader
          numeral="08"
          category="Global Offices & Expansion Inquiries"
          title="Direct Inquiries & Partnership"
          subtitle="Connect directly with executive leadership for mall placements, brand licensing, production engagements, and investment dialogue."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Global Hubs List */}
          <div className="lg:col-span-6 space-y-8">
            <div className="p-8 rounded-3xl bg-noir-card border border-white/10 space-y-8">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-400 block">
                Regional Hubs
              </span>

              {promediaData.contact.locations.map((loc) => (
                <div key={loc.country} className="border-b border-white/5 pb-6 last:border-0 last:pb-0 space-y-2">
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-gold-400" />
                    <h4 className="font-serif text-xl text-ivory font-medium">
                      {loc.country} Regional Office
                    </h4>
                  </div>
                  <div className="flex items-start gap-2 text-xs font-sans text-ivory/70">
                    <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <span>{loc.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-gold-300">
                    <Phone className="w-3.5 h-3.5 text-gold-400" />
                    <span>{loc.phone}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Digital Channels */}
            <div className="p-8 rounded-3xl bg-noir-card border border-gold-500/20 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-gold-400 block">
                Direct Communications
              </span>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-ivory/80">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-gold-400" />
                  <span>{promediaData.contact.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-gold-400" />
                  <span>{promediaData.contact.website}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-6 p-8 sm:p-12 rounded-3xl bg-noir-card border border-white/10">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-400 block mb-2">
              Partnership Gateway
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-ivory mb-6">
              Initiate an Executive Dialogue
            </h3>

            {formSubmitted ? (
              <div className="p-8 rounded-2xl bg-gold-500/10 border border-gold-500/30 text-center space-y-4">
                <CheckCircle2 className="w-10 h-10 text-gold-400 mx-auto" />
                <h4 className="font-serif text-xl text-ivory">Inquiry Transmitted Successfully</h4>
                <p className="text-xs sm:text-sm text-ivory-muted/80 font-light">
                  Our executive team has received your communication and will reply promptly.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-gold-500 text-noir font-mono text-xs font-bold uppercase tracking-wider"
                >
                  Submit Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-ivory/70 uppercase mb-2">
                    Your Name & Title
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Karim Mansour — Asset Manager"
                    className="w-full px-4 py-3 rounded-xl bg-noir-elevated border border-white/10 text-ivory text-sm focus:outline-none focus:border-gold-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-ivory/70 uppercase mb-2">
                    Official Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-noir-elevated border border-white/10 text-ivory text-sm focus:outline-none focus:border-gold-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-ivory/70 uppercase mb-2">
                    Area of Interest
                  </label>
                  <select
                    value={formData.entity}
                    onChange={(e) => setFormData({ ...formData, entity: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-noir-elevated border border-white/10 text-ivory text-sm focus:outline-none focus:border-gold-500 transition-colors"
                  >
                    <option value="VIV Croissants Expansion / Mall Placement">VIV Croissants — Mall Placement / Real Estate</option>
                    <option value="ProMedia Production & Creative Direction">ProMedia — Production & Commercial Direction</option>
                    <option value="Creator & Media Collaboration">Elzuzzat / Talent Media Collaboration</option>
                    <option value="5 Roosters Operational Partnerships">5 Roosters — F&B Franchise & Operations</option>
                    <option value="Strategic Ecosystem Investment">General Executive Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-ivory/70 uppercase mb-2">
                    Message / Opportunity Brief
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please outline your venue, project timeline, or collaboration parameters..."
                    className="w-full px-4 py-3 rounded-xl bg-noir-elevated border border-white/10 text-ivory text-sm focus:outline-none focus:border-gold-500 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gold-500 hover:bg-gold-400 text-noir font-mono text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-gold-500/10"
                >
                  <span>Transmit Inquiry</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Closing Signature Footer */}
        <div className="pt-16 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-ivory/40 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded bg-white p-0.5 flex items-center justify-center">
              <img src="/assets/promedia/pro-media-logo.png" alt="ProMedia" className="w-full h-full object-contain" />
            </div>
            <span>© 2026 PROMEDIA × VIV CROISSANTS ECOSYSTEM</span>
          </div>

          <div className="flex items-center gap-6">
            <span>MIDDLE EAST · EUROPE · USA</span>
            <span>ALL RIGHTS RESERVED</span>
          </div>
        </div>
      </div>
    </section>
  );
};
