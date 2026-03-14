import { motion } from 'framer-motion';

const brands = [
  { name: 'Arista', logo: '/logos/arista.png' },
  { name: 'Cisco', logo: '/logos/cisco.png' },
  { name: 'Palo Alto Networks', logo: '/logos/paloalto.png' },
  { name: 'Juniper', logo: '/logos/akamai.png' },
  { name: 'Fortinet', logo: '/logos/akamai.png' },
  { name: 'Paessler', logo: '/logos/paessler.png' },
  { name: 'Zscaler', logo: '/logos/zscaler.png' },
  { name: 'Akamai', logo: '/logos/akamai.png' },
  { name: 'Atlassian', logo: '/logos/akamai.png' },
  { name: 'vmware', logo: '/logos/akamai.png' },
  { name: 'Akamai', logo: '/logos/akamai.png' },
  { name: 'Akamai', logo: '/logos/akamai.png' },
  { name: 'Python', logo: '/logos/akamai.png' },
  { name: 'Git', logo: '/logos/akamai.png' },
  { name: 'reactjs', logo: '/logos/akamai.png' },
  { name: 'Node js', logo: '/logos/akamai.png' },
  { name: 'Grafana', logo: '/logos/akamai.png' },
  { name: 'Prometheus', logo: '/logos/akamai.png' },
  { name: 'Docker', logo: '/logos/akamai.png' },
  { name: 'Microsoft', logo: '/logos/akamai.png' },
  { name: 'RedHat', logo: '/logos/akamai.png' },
  { name: 'Ubuntu', logo: '/logos/akamai.png' },
  { name: 'Kali', logo: '/logos/akamai.png' },
  { name: 'Github', logo: '/logos/akamai.png' },
  { name: 'SolarWinds', logo: '/logos/akamai.png' },
  { name: 'Algosec', logo: '/logos/akamai.png' },
  { name: 'Wireshark', logo: '/logos/akamai.png' },
  { name: 'Nagios', logo: '/logos/akamai.png' },
  { name: 'Cisco Prime', logo: '/logos/akamai.png' },
  { name: 'NSX', logo: '/logos/akamai.png' },
  { name: 'NetBrain', logo: '/logos/akamai.png' },
  { name: 'Podman', logo: '/logos/akamai.png' },
  { name: 'Ansible', logo: '/logos/akamai.png' },
  { name: 'Terraform', logo: '/logos/akamai.png' },
  { name: 'Bash', logo: '/logos/akamai.png' },
  { name: 'Powershell', logo: '/logos/akamai.png' },
  { name: 'M365', logo: '/logos/akamai.png' },
  { name: 'Copilot', logo: '/logos/akamai.png' },
];

const Technology = () => (
  <div className="content-section">
    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
      <p className="text-primary font-display font-medium mb-4 tracking-wider uppercase text-sm">Tech Stack</p>
      <h1 className="page-title">Technology</h1>
      <p className="page-subtitle mb-16">Platforms and vendors I work with daily.</p>
    </motion.div>

    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {brands.map((brand, i) => (
        <motion.div
          key={brand.name}
          className="tech-card"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
        >
          <div className="w-20 h-20 flex items-center justify-center">
            <img
              src={brand.logo}
              alt={brand.name}
              className="max-w-full max-h-full object-contain dark:brightness-0 dark:invert dark:opacity-80"
            />
          </div>
          <span className="font-display font-medium text-sm text-center">{brand.name}</span>
        </motion.div>
      ))}
    </div>
  </div>
);

export default Technology;
