import {
  Lock,
  FileSignature,
  EyeOff,
  ShieldCheck,
  KeyRound,
  Trash2,
} from 'lucide-react'

export const securityPractices = [
  {
    icon: Lock,
    title: 'Encrypted end to end',
    desc: 'All data is encrypted in transit with TLS and at rest with AES-256, so feedback stays protected at every step.',
  },
  {
    icon: FileSignature,
    title: 'Data protection agreement at signup',
    desc: 'Every account signs our Data Processing Agreement during signup — your compliance paperwork is handled from day one.',
  },
  {
    icon: EyeOff,
    title: 'We never share your data',
    desc: 'Your client data is yours. We never sell, rent, or share it with third parties for advertising or any other purpose.',
  },
  {
    icon: KeyRound,
    title: 'Least-privilege access',
    desc: 'Strict role-based access controls and audited internal permissions mean only the right people can ever touch data.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure, isolated infrastructure',
    desc: 'Hosted on hardened cloud infrastructure with isolated tenants, continuous monitoring, and regular backups.',
  },
  {
    icon: Trash2,
    title: 'Deletion on request',
    desc: 'Request export or permanent deletion of your data at any time. When an account closes, its data is removed.',
  },
]

export const securityPledge = {
  title: 'A data protection agreement signed at signup',
  body: 'When you create your account, you sign our Data Processing Agreement before any feedback is collected. We act solely as a processor on your behalf, and we never share, sell, or repurpose your client data.',
  points: [
    'DPA signed during signup, not buried in fine print',
    'You remain the sole owner of your client data',
    'Zero third-party data sharing or resale',
  ],
}
