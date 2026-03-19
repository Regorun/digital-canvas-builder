import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { title } from 'process';

const urls: Record<string, string> = {
  'Arista': 'https://www.arista.com',
  'Cisco': 'https://www.cisco.com',
  'Juniper': 'https://www.juniper.net',
  'Fortinet': 'https://www.fortinet.com',
  'Mist': 'https://www.mist.com',
  'Aruba': 'https://www.arubanetworks.com',
  'Palo Alto Networks': 'https://www.paloaltonetworks.com',
  'Algosec': 'https://www.algosec.com',
  'Zscaler': 'https://www.zscaler.com',
  'Skybox': 'https://www.skyboxsecurity.com',
  'Azure': 'https://azure.microsoft.com',
  'AWS': 'https://aws.amazon.com',
  'Akamai': 'https://www.akamai.com',
  'UltraDNS': 'https://vercara.com/ultradns',
  'Mark Monitor': 'https://www.markmonitor.com',
  'OpenAI': 'https://www.openai.com',
  'Copilot': 'https://copilot.microsoft.com',
  'Ollama': 'https://ollama.com',
  'MCP': 'https://modelcontextprotocol.io',
  'Paessler PRTG': 'https://www.paessler.com/prtg',
  'IP Fabric': 'https://ipfabric.io',
  'Splunk': 'https://www.splunk.com',
  'DX NetOps Spectrum': 'https://www.broadcom.com/products/software/network-management/dx-netops',
  'Grafana': 'https://grafana.com',
  'Prometheus': 'https://prometheus.io',
  'SolarWinds': 'https://www.solarwinds.com',
  'Nagios': 'https://www.nagios.org',
  'Cisco Prime': 'https://www.cisco.com/c/en/us/products/cloud-systems-management/prime-infrastructure/index.html',
  'NetBrain': 'https://www.netbraintech.com',
  'WireShark': 'https://www.wireshark.org',
  'Python': 'https://www.python.org',
  'Bash': 'https://www.gnu.org/software/bash',
  'Powershell': 'https://learn.microsoft.com/powershell',
  'Ansible': 'https://www.ansible.com',
  'Terraform': 'https://www.terraform.io',
  'Git': 'https://git-scm.com',
  'Github': 'https://github.com',
  'Swagger': 'https://swagger.io',
  'API': 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction',
  'Docker': 'https://www.docker.com',
  'Podman': 'https://podman.io',
  'Node js': 'https://nodejs.org',
  'React js': 'https://react.dev',
  'Hostinger': 'https://www.hostinger.com',
  'Atlassian JIRA': 'https://www.atlassian.com/software/jira',
  'M365': 'https://www.microsoft.com/microsoft-365',
  'Zendesk': 'https://www.zendesk.com',
  'Atlassian Confluence': 'https://www.atlassian.com/software/confluence',
  'Service Now': 'https://www.servicenow.com',
  'Windows': 'https://www.microsoft.com/windows',
  'RHEL': 'https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux',
  'Ubuntu': 'https://ubuntu.com',
  'Kali': 'https://www.kali.org',
  'Raspbian': 'https://www.raspberrypi.com/software/'
};

const sections = [
  {
    title: 'Networking',
    items: ['Arista', 'Cisco', 'Juniper', 'Fortinet', 'Mist', 'Aruba'],
  },
  {
    title: 'Security',
    items: ['Palo Alto Networks','Algosec','Zscaler','Skybox']
  },
  {
    title: 'Cloud & CDN',
    items: ['Azure', 'AWS', 'Akamai', 'UltraDNS', 'Mark Monitor']
  },
  {
    title: 'AI Engineering',
    items: ['OpenAI', 'Copilot', 'Ollama', 'MCP']
  },
  {
    title: 'Monitoring & Observability',
    items: ['Paessler PRTG','IP Fabric', 'Splunk', 'DX NetOps Spectrum', 'Grafana', 'Prometheus', 'SolarWinds', 'Nagios', 'Cisco Prime', 'NetBrain', 'Wireshark'],
  },
  {
    title: 'Coding & Automation',
    items: ['Python', 'Bash', 'Powershell', 'Ansible', 'Terraform', 'Git', 'Github', 'Swagger', 'API'],
  },
  {
    title: 'DevOps',
    items: ['Docker', 'Podman', 'Node js', 'Reactjs', 'Hostinger'],
  },
  {
    title: 'ITSM & Collaboration',
    items: ['Atlassian JIRA', 'M365', 'Copilot','Zendesk','Atlassian Confluence', 'Service Now'],
  },
  {
    title: 'Operating Systems',
    items: ['Windows', 'RHEL', 'Ubuntu', 'Kali', 'Raspbian'],
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
