import React from 'react';
import { ExternalLink } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { projects } from '../data/projects';

const Row: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
  <div className="mb-3">
    <p className="text-xs uppercase tracking-wider text-green-600 mb-1">$ {label}</p>
    <p className="text-sm text-gray-100 leading-relaxed">{children}</p>
  </div>
);

const Projects: React.FC = () => (
  <section id="projects" className="py-20 bg-black relative">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeading label="projects" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article key={p.title} tabIndex={0} className="term-card flex flex-col">
              <div className="term-bar">
                <span className="term-dot"></span>
                <span className="term-dot"></span>
                <span className="term-dot"></span>
                <span className="ml-2 truncate">{p.personal ? 'personal-lab' : 'project'}</span>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-green-400 mb-1">{p.title}</h3>
                <p className="text-sm text-gray-300 mb-4">{p.summary}</p>
                <Row label="problem">{p.problem}</Row>
                <Row label="what I built">{p.built}</Row>
                <div className="mb-3">
                  <p className="text-xs uppercase tracking-wider text-green-600 mb-2">$ tech</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span key={t} className="term-tag">[ {t} ]</span>
                    ))}
                  </div>
                </div>
                <Row label="outcome">{p.outcome}</Row>
                {p.personal && (
                  <div className="mt-auto pt-2">
                    {p.link ? (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-term text-sm"
                      >
                        GitHub repo <ExternalLink size={14} className="ml-2" />
                      </a>
                    ) : (
                      <span className="text-xs text-green-600">TODO: add GitHub repo link if public</span>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
