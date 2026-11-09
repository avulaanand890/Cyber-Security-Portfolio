import React from 'react';
import SectionHeading from './SectionHeading';
import { Shield, CheckCircle } from 'lucide-react';

const Certifications: React.FC = () => (
  <section id="certifications" className="py-20 bg-black relative">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <SectionHeading label="certifications" />

        <article tabIndex={0} className="term-card">
          <div className="term-bar">
            <span className="term-dot"></span>
            <span className="term-dot"></span>
            <span className="term-dot"></span>
            <span className="ml-2 truncate">{'>'} certifications/forgerock</span>
          </div>
          <div className="p-6 flex items-start gap-4">
            <Shield size={32} className="text-green-400 shrink-0 mt-1" aria-hidden="true" />
            <div>
              <h3 className="text-lg font-bold text-green-400 mb-1">
                ForgeRock IAM Certified Professional
              </h3>
              <p className="text-sm text-gray-300 mb-3">
                Enterprise Identity &amp; Access Management expertise
              </p>
              <span className="term-tag inline-flex items-center">
                <CheckCircle size={12} className="mr-1" aria-hidden="true" /> Certified
              </span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
);

export default Certifications;
