// Edit project content here; Projects.tsx just maps over this array.
// Anything marked TODO is a placeholder for you to fill in.

export interface Project {
  title: string;
  summary: string;
  problem: string;
  built: string;
  tech: string[];
  outcome: string;
  link?: string;
  personal?: boolean;
}

export const projects: Project[] = [
  {
    title: 'Retiree Authentication and Self-Service (Phase 1 and 2)',
    summary: 'Secure registration, login and self-service journeys for retired users.',
    problem:
      'Retired users needed a secure way to register and log in, and manual service desk requests were high.',
    built:
      'Built an authentication journey from scratch with email domain validation, personal email and mobile number registration, OTP verification and secure login. In Phase 2, which I led: registration, login, forgot-password and profile-update journeys, integrating REST APIs for identity verification, with support for legacy user migration and re-registration.',
    tech: ['PingAM', 'Authentication trees', 'JavaScript/Groovy scripting', 'REST APIs', 'OTP'],
    outcome: 'Reduced manual service desk requests. TODO: add a real number if available.',
  },
  {
    title: 'IAM Realm Consolidation',
    summary: 'Consolidated 8 realms into 3 across the identity platform.',
    problem: 'Too many realms made the platform hard to maintain.',
    built:
      'Consolidated 8 realms into 3 by migrating applications, authentication trees and scripts across PingAM, PingIDM and PingDS, and decommissioned unused realms, applications and obsolete configuration.',
    tech: ['PingAM', 'PingIDM', 'PingDS', 'LDAP'],
    outcome: '8 realms down to 3, easier to maintain.',
  },
  {
    title: 'Unique Email Restriction Enhancement',
    summary: 'Let one email address work across multiple applications.',
    problem: 'The same email address needed to work across multiple applications.',
    built:
      'Led the enhancement by updating PingAM authentication trees, reworking LDAP search and decision logic, adding feature flags for a controlled rollout, writing custom JavaScript for portal-based access validation, and modifying PingIDM scripts for email update and delete actions.',
    tech: ['PingAM', 'PingIDM', 'LDAP', 'JavaScript', 'Feature flags'],
    outcome: 'One email can be used across multiple applications with a controlled rollout.',
  },
  {
    title: 'AM Cleanup Automation (7.3.2 to 7.5.2 upgrade)',
    summary: 'Automated removal of unused scripts and nodes during the AM upgrade.',
    problem:
      'AM held many unused scripts and nodes (for example redundant LDAP query nodes), and the GitHub repository held unused code too.',
    built:
      'Automation scripts that audit authentication trees and find scripts and nodes not referenced by any tree. A dry run reports the counts first; the actual run then removes the unused items from both AM and the GitHub repository.',
    tech: ['PingAM', 'Authentication trees', 'Scripting', 'GitHub'],
    outcome:
      'Cleaner AM and repository during the upgrade. TODO: add how many items were removed if known.',
  },
  {
    title: 'ForgeOps Lab on minikube (personal lab)',
    summary: "Personal ForgeOps lab with a custom React login page replacing AM's default UI.",
    problem: 'TODO: add the problem this lab solves, in one line.',
    built:
      "Built a personal ForgeOps lab on minikube with PingAM, PingIDM and PingDS 8.1, custom authentication journeys, and a custom React login page that replaces AM's default login UI. Config is kept in GitHub, the custom AM image is built with GitHub Actions and published to Docker Hub, then pulled on minikube so the config survives pod restarts and fixes the crash-loop issues.",
    tech: ['ForgeOps', 'Kubernetes (minikube)', 'Docker', 'GitHub Actions', 'React'],
    outcome: 'Config survives pod restarts and the crash-loop issues are fixed.',
    // TODO: add the GitHub repo URL here only if the repo is public.
    link: undefined,
    personal: true,
  },
];
