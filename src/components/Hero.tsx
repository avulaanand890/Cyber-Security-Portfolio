import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, ChevronDown, Shield } from 'lucide-react';
import profileImg from '../assets/IMG_20200105_083735_800.jpg';

const roles = [
  'Identity & Access Management',
  'ForgeRock / Ping Identity',
  'Authentication Journeys',
  'Platform Upgrades & Automation',
];

const stats = [
  { value: '8 → 3', label: 'realms consolidated' },
  { value: '4', label: 'Ping products: AM, IDM, DS, IG' },
  { value: 'Certified', label: 'ForgeRock IAM' },
];

const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

const Hero: React.FC = () => {
  const [typed, setTyped] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Typewriter loop over the roles
  useEffect(() => {
    const full = roles[roleIndex];
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setTyped(full);
      const t = setTimeout(() => setRoleIndex((i) => (i + 1) % roles.length), 3000);
      return () => clearTimeout(t);
    }
    let delay = deleting ? 30 : 70;
    if (!deleting && typed === full) delay = 1800;
    const t = setTimeout(() => {
      if (!deleting && typed === full) setDeleting(true);
      else if (deleting && typed === '') {
        setDeleting(false);
        setRoleIndex((i) => (i + 1) % roles.length);
      } else {
        setTyped(full.slice(0, typed.length + (deleting ? -1 : 1)));
      }
    }, delay);
    return () => clearTimeout(t);
  }, [typed, deleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 bg-black overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 20% 25%, rgba(57,255,20,0.10), transparent 60%)' }}
        aria-hidden="true"
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center max-w-6xl mx-auto">
          {/* Intro */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            <p className="inline-flex items-center gap-2 text-sm text-green-600 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" aria-hidden="true"></span>
              Available for projects
            </p>

            <p className="text-green-600 mb-2">$ whoami</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-white mb-4">
              Anand<span className="text-green-400">.</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-green-400 mb-6" style={{ textShadow: 'var(--glow)' }}>
              Software Engineer – IAM &amp; Security
            </h2>

            <p className="text-lg text-gray-300 mb-2 min-h-[2rem]" aria-live="off">
              <span className="text-green-600">{'> '}</span>
              {typed}
              <span className="term-cursor" aria-hidden="true"></span>
            </p>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl mt-6 mb-8">
              Specialized in <span className="text-green-400 font-semibold">Identity &amp; Access Management</span>,
              building secure, scalable authentication on the ForgeRock / Ping Identity platform. Certified in{' '}
              <span className="text-green-400 font-semibold">ForgeRock IAM</span> with expertise in automation and
              platform upgrades.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <button onClick={() => scrollTo('#projects')} className="btn-term font-semibold">
                View projects <ArrowRight size={16} className="ml-2" />
              </button>
              <a href="/anand-resume.pdf" download className="btn-term font-semibold">
                <Download size={16} className="mr-2" /> Resume
              </a>
            </div>

            <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl">
              {stats.map((s) => (
                <div key={s.label} className="border-l-2 border-green-600 pl-3">
                  <dt className="text-xl font-bold text-green-400">{s.value}</dt>
                  <dd className="text-xs text-gray-300">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Profile terminal window */}
          <div className="lg:col-span-2 order-1 lg:order-2 flex justify-center">
            <div className="term-card w-full max-w-sm">
              <div className="term-bar">
                <span className="term-dot"></span>
                <span className="term-dot"></span>
                <span className="term-dot"></span>
                <span className="ml-2 truncate">anand@iam:~</span>
              </div>
              <img
                src={profileImg}
                alt="Anand - Software Engineer"
                className="w-full aspect-square object-cover"
              />
              <div className="p-4 text-sm border-t border-green-600">
                <p className="flex items-center text-green-400">
                  <Shield size={14} className="mr-2" /> ForgeRock IAM Certified
                </p>
                <p className="text-gray-300 mt-1">PingAM · PingIDM · PingDS · PingGateway</p>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => scrollTo('#about')}
          className="hidden md:flex mx-auto mt-14 nav-link flex-col items-center text-xs"
          aria-label="Scroll to about"
        >
          scroll
          <ChevronDown size={18} className="animate-float" />
        </button>
      </div>

    </section>
  );
};

export default Hero;
