import React from 'react';
import SectionHeading from './SectionHeading';
import { skillPanels, learning } from '../data/skills';

const Skills: React.FC = () => (
  <section id="skills" className="py-20 bg-black relative">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeading label="skills" subtitle="Skills Snapshot" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillPanels.map((panel) => (
            <section
              key={panel.path}
              tabIndex={0}
              aria-label={panel.title}
              className="term-card flex flex-col"
            >
              <div className="term-bar">
                <span className="term-dot"></span>
                <span className="term-dot"></span>
                <span className="term-dot"></span>
                <span className="ml-2 truncate">{'>'} skills/{panel.path}</span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-green-400 mb-4">{panel.title}</h3>
                <ul className="flex flex-wrap gap-x-3 gap-y-4">
                  {panel.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className={skill.usedFor ? 'basis-full' : undefined}
                    >
                      <span className="term-tag">[ {skill.name} ]</span>
                      {skill.personalLab && (
                        <span className="term-tag ml-1 !text-green-600">[ personal lab ]</span>
                      )}
                      {skill.usedFor && (
                        <p className="text-sm text-gray-300 mt-1 leading-relaxed">
                          <span className="text-green-600" aria-hidden="true">↳ </span>
                          used for {skill.usedFor}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>

        <p className="mt-8 text-sm text-gray-300 text-center">
          {learning.map((item) => (
            <span key={item} className="term-tag mr-2">[ learning ] {item}</span>
          ))}
        </p>
      </div>
    </div>
  </section>
);

export default Skills;
