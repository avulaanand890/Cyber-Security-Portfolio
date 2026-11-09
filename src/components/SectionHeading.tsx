import React from 'react';

interface SectionHeadingProps {
  label: string;
  subtitle?: string;
}

/** Terminal-style heading: "> label" followed by a blinking cursor. */
const SectionHeading: React.FC<SectionHeadingProps> = ({ label, subtitle }) => (
  <div className="text-center mb-12">
    <h2 className="term-heading mb-3">
      <span className="prompt" aria-hidden="true">{'>'}</span>
      {label}
      <span className="term-cursor" aria-hidden="true"></span>
    </h2>
    {subtitle && <p className="text-gray-300 max-w-2xl mx-auto text-lg">{subtitle}</p>}
  </div>
);

export default SectionHeading;
