import { motion } from 'framer-motion';

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
              <motion.div
                key={`${section.title}-${name}`}
                className="glass-card flex items-center justify-center p-5 hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
              >
                <span className="font-display font-medium text-sm text-center">{name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default Technology;
