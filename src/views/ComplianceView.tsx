import React from 'react';
import { Verified, FactCheck, ScienceIcon, LocalHospitalIcon } from '../components/Icons';
import { ShieldCheck, Download, Award, CheckCircle2, FileCheck } from 'lucide-react';

interface ComplianceViewProps {
  onOpenQuote: () => void;
}

export const ComplianceView: React.FC<ComplianceViewProps> = ({ onOpenQuote }) => {
  const handleDownload = (certName: string) => {
    alert(`Downloading verified official compliance dossier: ${certName}. In production, this supplies the encrypted PDF signed by SurSite QA Lab Sialkot.`);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-12 lg:px-20 py-12">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 bg-[#eff4ff] border border-[#c1c7d0] rounded px-3 py-1 text-[#003358] text-xs font-semibold mb-3">
          <ShieldCheck className="w-4 h-4 text-[#008B8B]" />
          <span>International Regulatory Standards</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#003358] tracking-tight">
          Certified Medical Excellence
        </h1>
        <p className="text-sm sm:text-base text-[#42474f] mt-3 leading-relaxed">
          Operating room trust is earned with microscopic precision. Every scalpel, forcep, and scissors forged in our Sialkot facility adheres strictly to European CE, US FDA, and ISO standards with complete heat-lot traceability.
        </p>
      </div>

      {/* 4 Pillars of Certification */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {/* ISO 13485 */}
        <div className="bg-white border border-[#B0C4DE] p-6 rounded-lg shadow-xs flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 bg-[#eff4ff] text-[#003358] rounded-full flex items-center justify-center font-bold text-xs mb-4 border border-[#B0C4DE]">
              ISO
            </div>
            <h3 className="text-lg font-bold text-[#003358] mb-1">ISO 13485:2016</h3>
            <p className="text-xs text-[#42474f] leading-relaxed mb-4">
              Comprehensive Quality Management System certified for design, manufacturing, and global export of invasive & non-invasive surgical instruments.
            </p>
          </div>
          <button
            onClick={() => handleDownload('ISO-13485-2016-Certificate.pdf')}
            className="w-full bg-[#f8f9ff] hover:bg-[#eff4ff] border border-[#B0C4DE] text-[#003358] text-xs font-semibold py-2 px-3 rounded flex items-center justify-center gap-1.5 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Verify Certificate</span>
          </button>
        </div>

        {/* CE Marking */}
        <div className="bg-white border border-[#B0C4DE] p-6 rounded-lg shadow-xs flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 bg-[#eff4ff] text-[#003358] rounded-full flex items-center justify-center font-bold text-sm mb-4 border border-[#B0C4DE]">
              CE
            </div>
            <h3 className="text-lg font-bold text-[#003358] mb-1">CE Mark (MDR)</h3>
            <p className="text-xs text-[#42474f] leading-relaxed mb-4">
              Compliant with European Medical Device Regulation (EU 2017/745) Annex IX for Class I reusable surgical devices and Class IIa micro-instruments.
            </p>
          </div>
          <button
            onClick={() => handleDownload('CE-MDR-Declaration-of-Conformity.pdf')}
            className="w-full bg-[#f8f9ff] hover:bg-[#eff4ff] border border-[#B0C4DE] text-[#003358] text-xs font-semibold py-2 px-3 rounded flex items-center justify-center gap-1.5 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Declaration of Conformity</span>
          </button>
        </div>

        {/* FDA */}
        <div className="bg-white border border-[#B0C4DE] p-6 rounded-lg shadow-xs flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 bg-[#eff4ff] text-[#003358] rounded-full flex items-center justify-center font-bold text-xs mb-4 border border-[#B0C4DE]">
              FDA
            </div>
            <h3 className="text-lg font-bold text-[#003358] mb-1">FDA 21 CFR 820</h3>
            <p className="text-xs text-[#42474f] leading-relaxed mb-4">
              US FDA Establishment Registration and Device Listing with full compliance to Current Good Manufacturing Practices (cGMP).
            </p>
          </div>
          <button
            onClick={() => handleDownload('FDA-Registration-Listing.pdf')}
            className="w-full bg-[#f8f9ff] hover:bg-[#eff4ff] border border-[#B0C4DE] text-[#003358] text-xs font-semibold py-2 px-3 rounded flex items-center justify-center gap-1.5 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>FDA Listing Sheet</span>
          </button>
        </div>

        {/* ISO 7153-1 Metallurgy */}
        <div className="bg-white border border-[#B0C4DE] p-6 rounded-lg shadow-xs flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 bg-[#eff4ff] text-[#003358] rounded-full flex items-center justify-center font-bold text-xs mb-4 border border-[#B0C4DE]">
              MTR
            </div>
            <h3 className="text-lg font-bold text-[#003358] mb-1">ISO 7153-1 Metallurgy</h3>
            <p className="text-xs text-[#42474f] leading-relaxed mb-4">
              Strict chemical spectrometry testing ensuring premium Martensitic (AISI 420) and Austenitic (AISI 316L) surgical steel compositions.
            </p>
          </div>
          <button
            onClick={() => handleDownload('Metallurgical-Test-Report-Batch.pdf')}
            className="w-full bg-[#f8f9ff] hover:bg-[#eff4ff] border border-[#B0C4DE] text-[#003358] text-xs font-semibold py-2 px-3 rounded flex items-center justify-center gap-1.5 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Material Test Report</span>
          </button>
        </div>
      </div>

      {/* 6-Stage Quality Assurance Protocol */}
      <div className="bg-white border border-[#B0C4DE] rounded-lg p-6 md:p-8 mb-16 shadow-xs">
        <h2 className="text-2xl font-bold text-[#003358] mb-2">
          The 6-Stage Sialkot QC Protocol
        </h2>
        <p className="text-sm text-[#42474f] mb-8 max-w-2xl">
          Every individual surgical tool undergoes an exhaustive 6-stage physical and chemical inspection before sterile batch release.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 border border-[#c1c7d0] rounded bg-[#f8f9ff] space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-[#004a7c]">STAGE 01</span>
              <FactCheck className="text-[#008B8B] text-[20px]" />
            </div>
            <h4 className="text-sm font-bold text-[#003358]">Raw Steel Spectrometry</h4>
            <p className="text-xs text-[#42474f] leading-relaxed">
              Optical emission spectroscopy confirms carbon, chromium (13-18%), and molybdenum balance before forgings commence.
            </p>
          </div>

          <div className="p-4 border border-[#c1c7d0] rounded bg-[#f8f9ff] space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-[#004a7c]">STAGE 02</span>
              <Award className="w-5 h-5 text-[#008B8B]" />
            </div>
            <h4 className="text-sm font-bold text-[#003358]">Drop Forging & Heat Treat</h4>
            <p className="text-xs text-[#42474f] leading-relaxed">
              Precision die-drop forging followed by computer-controlled vacuum furnace hardening yielding 50–54 HRC Rockwell hardness.
            </p>
          </div>

          <div className="p-4 border border-[#c1c7d0] rounded bg-[#f8f9ff] space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-[#004a7c]">STAGE 03</span>
              <ScienceIcon className="text-[#008B8B] text-[20px]" />
            </div>
            <h4 className="text-sm font-bold text-[#003358]">Box Lock & Jaw Alignment</h4>
            <p className="text-xs text-[#42474f] leading-relaxed">
              Master craftsmen hand-file and align box lock joints ensuring zero play, silky glide, and precise tip interlock.
            </p>
          </div>

          <div className="p-4 border border-[#c1c7d0] rounded bg-[#f8f9ff] space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-[#004a7c]">STAGE 04</span>
              <LocalHospitalIcon className="text-[#008B8B] text-[20px]" />
            </div>
            <h4 className="text-sm font-bold text-[#003358]">ASTM A967 Passivation</h4>
            <p className="text-xs text-[#42474f] leading-relaxed">
              Ultrasonic cleaning in citric / nitric baths creates a uniform chromium-oxide barrier, tested via copper sulfate immersion.
            </p>
          </div>

          <div className="p-4 border border-[#c1c7d0] rounded bg-[#f8f9ff] space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-[#004a7c]">STAGE 05</span>
              <Verified className="text-[#008B8B] text-[20px]" />
            </div>
            <h4 className="text-sm font-bold text-[#003358]">100% Microscopic Edge Audit</h4>
            <p className="text-xs text-[#42474f] leading-relaxed">
              High-magnification optical inspection ensures burr-free razor cutting edges and uniform tungsten carbide insert bonding.
            </p>
          </div>

          <div className="p-4 border border-[#c1c7d0] rounded bg-[#f8f9ff] space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-[#004a7c]">STAGE 06</span>
              <FileCheck className="w-5 h-5 text-[#008B8B]" />
            </div>
            <h4 className="text-sm font-bold text-[#003358]">Laser UDI Serialization</h4>
            <p className="text-xs text-[#42474f] leading-relaxed">
              Permanent laser etching of CE mark, LOT number, and Unique Device Identifier (UDI) for lifelong clinical tracking.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Box */}
      <div className="bg-[#eff4ff] border border-[#B0C4DE] rounded-lg p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold text-[#003358] mb-1">
            Need Audit Documentation for Your Hospital Board?
          </h3>
          <p className="text-xs sm:text-sm text-[#42474f] max-w-xl">
            We provide full technical files, sterilizer validation protocols, bio-compatibility certifications, and mill test certificates for institutional tenders.
          </p>
        </div>
        <button
          onClick={onOpenQuote}
          className="bg-[#003358] hover:bg-[#004a7c] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded transition-colors whitespace-nowrap shadow-xs"
        >
          Request Regulatory Dossier
        </button>
      </div>
    </div>
  );
};
