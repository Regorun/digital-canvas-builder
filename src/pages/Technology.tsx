import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const urls: Record<string, string> = {
  'Arista': 'https://www.arista.com',
  'Cisco': 'https://www.cisco.com',
  'Palo Alto Networks': 'https://www.paloaltonetworks.com',
  'Juniper': 'https://www.juniper.net',
  'Fortinet': 'https://www.fortinet.com',
  'Zscaler': 'https://www.zscaler.com',
  'NSX': 'https://www.vmware.com/products/nsx',
  'Algosec': 'https://www.algosec.com',
  'Paessler': 'https://www.paessler.com',
  'Grafana': 'https://grafana.com',
  'Prometheus': 'https://prometheus.io',
  'SolarWinds': 'https://www.solarwinds.com',
  'Nagios': 'https://www.nagios.org',
  'Cisco Prime': 'https://www.cisco.com/c/en/us/products/cloud-systems-management/prime-infrastructure/index.html',
  'NetBrain': 'https://www.netbraintech.com',
  'Wireshark': 'https://www.wireshark.org',
  'Python': 'https://www.python.org',
  'Bash': 'https://www.gnu.org/software/bash/',
  'Powershell': 'https://learn.microsoft.com/en-us/powershell/',
  'Ansible': 'https://www.ansible.com',
  'Terraform': 'https://www.terraform.io',
  'Git': 'https://git-scm.com',
  'Github': 'https://github.com',
  'Docker': 'https://www.docker.com',
  'Podman': 'https://podman.io',
  'Node js': 'https://nodejs.org',
  'reactjs': 'https://react.dev',
  'Atlassian': 'https://www.atlassian.com',
  'M365': 'https://www.microsoft.com/en-us/microsoft-365',
  'Copilot': 'https://copilot.microsoft.com',
  'Microsoft': 'https://www.microsoft.com',
  'RedHat': 'https://www.redhat.com',
  'Ubuntu': 'https://ubuntu.com',
  'Kali': 'https://www.kali.org',
  'vmware': 'https://www.vmware.com',
};

const sections = [
  {
    title: 'Network & Security',
    items: ['Arista', 'Cisco', 'Palo Alto Networks', 'Juniper', 'Fortinet', 'Zscaler', 'NSX', 'Algosec'],
  },
  {
    title: 'Monitoring & Observability',
    items: ['Paessler', 'Grafana', 'Prometheus', 'SolarWinds', 'Nagios', 'Cisco Prime', 'NetBrain', 'Wireshark'],
  },
  {
    title: 'Coding & Automation',
    items: ['Python', 'Bash', 'Powershell', 'Ansible', 'Terraform', 'Git', 'Github'],
  },
  {
    title: 'DevOps & Containers',
    items: ['Docker', 'Podman', 'Node js', 'reactjs'],
  },
  {
    title: 'ITSM & Collaboration',
    items: ['Atlassian', 'M365', 'Copilot'],
  },
  {
    title: 'Operating Systems',
    items: ['Microsoft', 'RedHat', 'Ubuntu', 'Kali', 'vmware'],
  },
];

const Technology = () => (
  <div className="content-section">
    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
      <p className="text-primary font-display font-medium mb-4 tracking-wider uppercase text-sm">Tech Stack</p>
      <h1 className="page-title">Technology</h1>
      <p className="page-subtitle mb-16">Platforms and vendors I work with daily.</p>
    </motion.div>

    <div className="space-y-12">
      {sections.map((section, si) => (
        <motion.div
          key={section.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 + si * 0.1 }}
        >
          <h2 className="text-xl font-display font-semibold text-primary mb-6 border-b border-border pb-3">
            {section.title}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {section.items.map((name, i) => (
              <motion.a
                key={`${section.title}-${name}`}
                href={urls[name] || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card flex items-center justify-center p-5 hover:scale-105 transition-transform duration-300 cursor-pointer group relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
              >
                <span className="font-display font-medium text-sm text-center">{name}</span>
                <ExternalLink className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity absolute top-2 right-2" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default Technology;
