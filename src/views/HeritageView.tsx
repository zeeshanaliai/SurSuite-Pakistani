import React, { useState } from 'react';
import {
  PublicIcon,
  FactCheck,
  LocationOnIcon,
  Chat,
} from '../components/Icons';
import { CheckCircle2, Send } from 'lucide-react';

export const HeritageView: React.FC = () => {
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent("Hello SurSite Surgical Headquarters in Sialkot, I would like to connect regarding an international distributor partnership.");
    window.open(`https://wa.me/923000000000?text=${text}`, '_blank');
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-12 lg:px-20 py-12">
      {/* Hero Section */}
      <section className="mb-16 flex flex-col md:flex-row gap-10 items-center">
        <div className="flex-1 space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#003358] tracking-tight">
            The Sialkot Heritage
          </h1>
          <p className="text-base sm:text-lg text-[#42474f] leading-relaxed">
            Forging precision from tradition. For over a century, Sialkot has been the silent engine behind global healthcare, providing uncompromising surgical instruments meticulously crafted by master artisans and validated by modern engineering.
          </p>
        </div>

        <div className="flex-1 w-full h-[360px] md:h-[400px] border border-[#c1c7d0] rounded-lg overflow-hidden relative shadow-sm">
          <div
            className="bg-cover bg-center w-full h-full"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBj6pMWu6SO5_TU3OLuEmgEARb3wDcYx9d3xG413Kd3a32_iG37zBVT2q8myg83GrpNIimrAdZCUz2LVoP1vUw92lHZ9iUXHawGrnrX8cStHyUQco2fisNPwmQ3VororbNquNds_0_naXqjaXzu3F8gc6QzkFZWACjmxvkBwqIdx4aiHaNuIu7Ma_eEaopmEfpHjDf1EXQaKPieOLpujyuoU0r7BbKv9BoTtX5wHXjwvUNKzMu36mg')`,
            }}
          />
        </div>
      </section>

      {/* Bento Grid: Story & Quality */}
      <section className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#003358] mb-6">Precision Engineered</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Story Card (Spans 2 cols on desktop) */}
          <div className="md:col-span-2 bg-white border border-[#c1c7d0] p-6 rounded-lg flex flex-col justify-between shadow-xs">
            <div>
              <h3 className="text-xl font-bold text-[#003358] mb-2">A Legacy of Craftsmanship</h3>
              <p className="text-sm text-[#42474f] leading-relaxed mb-4">
                What began in the late 19th century as a modest endeavor has evolved into a global powerhouse. Sialkot&apos;s artisans combine generational knowledge with cutting-edge metallurgy to produce instruments that perform flawlessly in the most critical environments. Every cut, every clamp, every retraction relies on a legacy built on sweat, skill, and steel.
              </p>
            </div>
            <div
              className="bg-cover bg-center w-full h-48 rounded mt-4 border border-[#c1c7d0] shadow-2xs"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAGY6hWajE6Mk-MH_7OXlfwdit-an6cCDMKg7zk9HQjPNJJYNnVKRo8iLp3IQB4uPZ4WVKGh-r9rJvQZNvOoG1KeFRuW8w_2rjFRU0fYZkuo6fg2jdSTzGzSeL3w9bwk34gNN_N4pYJL-gbq5gVdimP4tv9O2qy2YQNL0tJQx5qJiSl5PGv_QxcoFGt6W4U9MLH4bu8OeOGwce4m9VJf4XFPWU-zRKgfZZddPTkbbJorSVy4Aola1g')`,
              }}
            />
          </div>

          {/* Global Exports */}
          <div className="bg-[#e5eeff] border border-[#c1c7d0] p-6 rounded-lg flex flex-col justify-center items-center text-center shadow-xs">
            <PublicIcon className="text-[64px] text-[#003358] mb-4" />
            <h3 className="text-lg font-bold text-[#003358] mb-1">Global Exports</h3>
            <p className="text-xs text-[#42474f] leading-relaxed">
              Supplying over 80 countries worldwide. Our logistics network ensures sterile, secure, and prompt delivery to top-tier medical facilities across continents.
            </p>
          </div>

          {/* Stringent QC */}
          <div className="bg-[#e5eeff] border border-[#c1c7d0] p-6 rounded-lg shadow-xs">
            <div className="flex items-center gap-2 mb-3">
              <FactCheck className="text-[#006a6a]" />
              <h3 className="text-lg font-bold text-[#003358]">Stringent QC</h3>
            </div>
            <ul className="space-y-2 text-xs text-[#42474f]">
              <li className="flex justify-between border-b border-[#c1c7d0] pb-2">
                <span>Metallurgical Analysis</span>
                <span className="font-semibold text-[#003358]">Pass</span>
              </li>
              <li className="flex justify-between border-b border-[#c1c7d0] pb-2">
                <span>Tensile Strength Test</span>
                <span className="font-semibold text-[#003358]">Pass</span>
              </li>
              <li className="flex justify-between border-b border-[#c1c7d0] pb-2">
                <span>Corrosion Resistance</span>
                <span className="font-semibold text-[#003358]">ISO 7153-1</span>
              </li>
              <li className="flex justify-between pt-1">
                <span>Microscopic Inspection</span>
                <span className="font-semibold text-[#003358]">100%</span>
              </li>
            </ul>
          </div>

          {/* Certifications (Spans 2 cols on desktop) */}
          <div className="md:col-span-2 bg-white border border-[#c1c7d0] p-6 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
            <div>
              <h3 className="text-xl font-bold text-[#003358] mb-1">Certified Excellence</h3>
              <p className="text-sm text-[#42474f]">Meeting and exceeding international medical device standards.</p>
            </div>
            <div className="flex gap-4">
              <div className="w-16 h-16 border border-[#727780] rounded-full flex items-center justify-center text-xs font-bold text-[#003358] bg-[#f8f9ff]">
                ISO 13485
              </div>
              <div className="w-16 h-16 border border-[#727780] rounded-full flex items-center justify-center text-xs font-bold text-[#003358] bg-[#f8f9ff]">
                CE
              </div>
              <div className="w-16 h-16 border border-[#727780] rounded-full flex items-center justify-center text-xs font-bold text-[#003358] bg-[#f8f9ff]">
                FDA
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Inquiry Section */}
      <section className="border-t border-[#c1c7d0] pt-12 flex flex-col md:flex-row gap-10">
        {/* Contact Info */}
        <div className="flex-1 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#003358]">Connect with SurSite</h2>

          <div className="bg-[#e5eeff] p-5 rounded-lg border border-[#c1c7d0]">
            <h3 className="text-base font-bold text-[#003358] mb-1">Headquarters</h3>
            <p className="text-xs sm:text-sm text-[#42474f] mb-4 leading-relaxed">
              SurSite Surgical Estate<br />
              Defense Road, Sialkot 51310<br />
              Pakistan
            </p>

            <div className="h-48 w-full bg-[#d3e4fe] border border-[#c1c7d0] rounded flex items-center justify-center relative overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfVL0Ee2YUTw5lrRzLWE_lT3WMhkizwt3P9vMotlys7F6P7jc51gKtfb4XVqZOztm0w4fBBUxunw94ujBUD_Y91-kticuAVEezgBMXGZgj2EHYo0E6-jYHf9aRIM-G-jBfqk0ObkrzLmvxESJ70VHYwzhP1zVQof1Ebl_GcV0PMx5iVwgpJayQNyICrh4-WhLfxBHiA3zMFq7CgEXtJkYtj0cT_cqpqUURDFFb4BA_wG7njkSfIJU"
                alt="Map of Sialkot Defense Road Industrial Estate"
                className="object-cover w-full h-full opacity-60 grayscale"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <LocationOnIcon className="text-[#003358] text-[36px]" fill={true} />
              </div>
            </div>
          </div>

          <button
            onClick={handleWhatsApp}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#003358] hover:text-[#004a7c] transition-colors mt-2"
          >
            <Chat className="text-[18px] text-[#25D366]" />
            <span>WhatsApp Support</span>
          </button>
        </div>

        {/* Inquiry Form */}
        <div className="flex-1 bg-white border border-[#c1c7d0] p-6 rounded-lg shadow-xs">
          <h3 className="text-xl font-bold text-[#003358] mb-4">Distributor Inquiry</h3>

          {submitted ? (
            <div className="py-10 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-[#008B8B] mx-auto" />
              <h4 className="text-lg font-bold text-[#003358]">Inquiry Transmitted</h4>
              <p className="text-xs sm:text-sm text-[#42474f] max-w-sm mx-auto">
                Thank you for reaching out, {contactName || 'Partner'}. Our Global Partnerships desk at Sialkot will contact you shortly with catalog dossiers and dealer terms.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 text-xs font-semibold text-[#003358] underline"
              >
                Submit another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 flex flex-col">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-[#42474f]" htmlFor="companyName">
                  Company Name
                </label>
                <input
                  required
                  id="companyName"
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="e.g. MedTech Global Supplies"
                  className="border border-[#c1c7d0] bg-white p-2.5 text-xs sm:text-sm focus:border-[#003358] focus:ring-1 focus:ring-[#003358] outline-none transition-colors rounded"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex flex-col gap-1 flex-1">
                  <label className="text-xs font-semibold text-[#42474f]" htmlFor="contactName">
                    Contact Name
                  </label>
                  <input
                    required
                    id="contactName"
                    type="text"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="Full Name"
                    className="border border-[#c1c7d0] bg-white p-2.5 text-xs sm:text-sm focus:border-[#003358] focus:ring-1 focus:ring-[#003358] outline-none transition-colors rounded"
                  />
                </div>

                <div className="flex flex-col gap-1 flex-1">
                  <label className="text-xs font-semibold text-[#42474f]" htmlFor="email">
                    Corporate Email
                  </label>
                  <input
                    required
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="border border-[#c1c7d0] bg-white p-2.5 text-xs sm:text-sm focus:border-[#003358] focus:ring-1 focus:ring-[#003358] outline-none transition-colors rounded"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-[#42474f]" htmlFor="country">
                  Country of Operation
                </label>
                <select
                  required
                  id="country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="border border-[#c1c7d0] bg-white p-2.5 text-xs sm:text-sm focus:border-[#003358] focus:ring-1 focus:ring-[#003358] outline-none transition-colors rounded"
                >
                  <option value="">Select a Country</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="United States">United States</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Germany">Germany</option>
                  <option value="United Arab Emirates">United Arab Emirates</option>
                  <option value="Saudi Arabia">Saudi Arabia</option>
                  <option value="Other">Other Global Market</option>
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-[#42474f]" htmlFor="message">
                  Inquiry Details
                </label>
                <textarea
                  required
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your distribution channels, hospital network, or targeted surgical instruments volume..."
                  className="border border-[#c1c7d0] bg-white p-2.5 text-xs sm:text-sm focus:border-[#003358] focus:ring-1 focus:ring-[#003358] outline-none transition-colors resize-none rounded"
                />
              </div>

              <button
                type="submit"
                className="bg-[#006a6a] hover:bg-[#004f4f] text-white text-xs font-bold py-2.5 px-5 rounded self-start mt-2 transition-colors flex items-center gap-2 shadow-xs"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Inquiry</span>
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
