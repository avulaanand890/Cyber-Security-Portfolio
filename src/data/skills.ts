// Edit skills here; Skills.tsx just maps over this array.
// `usedFor` is shown under the tag. Skills without it are tags only.
// `personalLab` adds a [ personal lab ] marker.

export interface Skill {
  name: string;
  usedFor?: string;
  personalLab?: boolean;
}

export interface SkillPanel {
  path: string; // shown as "> skills/<path>"
  title: string;
  skills: Skill[];
}

export const skillPanels: SkillPanel[] = [
  {
    path: 'platform',
    title: 'Ping Identity / ForgeRock Platform',
    skills: [
      {
        name: 'PingAM (ForgeRock AM)',
        usedFor:
          'authentication journeys, OAuth 2.0 provider configuration, the 7.3.2 to 7.5.2 upgrade and the realm consolidation',
      },
      {
        name: 'PingIDM',
        usedFor: 'IDM scripts (email update and delete), user migration and the platform upgrades',
      },
      {
        name: 'PingDS',
        usedFor:
          'LDAP searches and updates on user entries, and monitoring replication on the CTS and ID repository directories',
      },
      {
        name: 'PingGateway (IG)',
        usedFor: 'owning the IG part of the 7.5.2 to 8.1.1 upgrade',
      },
      { name: 'ForgeOps' },
      { name: 'Authentication Trees' },
      { name: 'Realms' },
      { name: 'Adaptive Authentication' },
    ],
  },
  {
    path: 'protocols',
    title: 'Identity Protocols and Standards',
    skills: [
      { name: 'SAML 2.0', usedFor: 'certificate renewal and replacement across environments' },
      {
        name: 'OAuth 2.0',
        usedFor: 'OAuth 2.0 provider configuration and post-upgrade fixes',
      },
      { name: 'OTP Verification', usedFor: 'the retiree registration and login journeys' },
      { name: 'LDAP', usedFor: 'search and decision logic in authentication trees' },
      { name: 'REST APIs', usedFor: 'identity verification integrations in the self-service journeys' },
      { name: 'OpenID Connect (OIDC)' },
      { name: 'SSO' },
      { name: 'MFA' },
      { name: 'Identity Federation' },
    ],
  },
  {
    path: 'programming-devops',
    title: 'Programming and DevOps',
    skills: [
      {
        name: 'Groovy and JavaScript',
        usedFor: 'authentication scripts and portal-based access validation',
      },
      { name: 'Java' },
      { name: 'JSON' },
      { name: 'Jenkins (CI/CD)' },
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'Postman' },
      { name: 'Kubernetes' },
      { name: 'Docker' },
      { name: 'minikube', personalLab: true },
      { name: 'Helm', personalLab: true },
      { name: 'GitHub Actions', personalLab: true },
      { name: 'Docker Hub', personalLab: true },
      { name: 'React', personalLab: true },
    ],
  },
  {
    path: 'monitoring-itsm',
    title: 'Monitoring and ITSM',
    skills: [
      {
        name: 'Splunk',
        usedFor: 'monitoring application health and root cause analysis during incidents',
      },
      {
        name: 'Dynatrace',
        usedFor: 'monitoring application health and root cause analysis during incidents',
      },
      {
        name: 'Grafana',
        usedFor: 'monitoring application health and root cause analysis during incidents',
      },
      {
        name: 'Prometheus',
        usedFor: 'monitoring application health and root cause analysis during incidents',
      },
      { name: 'ServiceNow', usedFor: 'resolving IAM incidents by priority' },
      { name: 'Incident Management' },
      { name: 'Change Management' },
    ],
  },
  {
    path: 'delivery',
    title: 'IAM Capabilities and Delivery',
    skills: [
      {
        name: 'Technical and Design Documents',
        usedFor: 'the documentation I write for each project delivered',
      },
      {
        name: 'Requirements Analysis',
        usedFor: 'the documentation I write for each project delivered',
      },
      { name: 'Self-Service Journeys' },
      { name: 'Identity Lifecycle Management' },
      { name: 'User Migration' },
      { name: 'Platform Upgrades' },
      { name: 'Disaster Recovery' },
      { name: 'Certificate Management' },
      { name: 'PingDS Replication Monitoring and Troubleshooting' },
      { name: 'Agile' },
      { name: 'Scrum' },
    ],
  },
];

// Shown as a small line under the panels; not a skill I have used.
export const learning = ['PingOne Verify'];
