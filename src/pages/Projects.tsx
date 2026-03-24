import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  { title: 'NetAutomate', desc: 'Python-based network automation toolkit for multi-vendor environments. Supports Cisco, Arista, and Juniper.', tags: ['Python', 'Netmiko', 'NAPALM'] },
  { title: 'InfraMonitor', desc: 'Real-time infrastructure monitoring dashboard with alerting, built on PRTG and custom APIs.', tags: ['React', 'API', 'Monitoring'] },
  { title: 'SecPolicy Generator', desc: 'Automated security policy generator for Palo Alto and Zscaler firewalls from YAML definitions.', tags: ['Automation', 'Security', 'YAML'] },
  { title: 'Route Count', desc: '', tags: ['PaloAlto', 'Python', 'API', 'PRTG'] },
];

const Projects = () => (
  <div className="content-section">
    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
      <p className="text-primary font-display font-medium mb-4 tracking-wider uppercase text-sm">Work</p>
      <h1 className="page-title">Projects</h1>
      <p className="page-subtitle mb-16">Open source and personal engineering projects.</p>
    </motion.div>

    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((p, i) => (
        <motion.div
          key={i}
          className="glass-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
        >
          <h3 className="font-display font-semibold text-lg mb-2">{p.title}</h3>
          <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {p.tags.map(t => (
              <span key={t} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-md font-medium">{t}</span>
            ))}
          </div>
          <div className="flex gap-3">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Github className="w-4 h-4" /></a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><ExternalLink className="w-4 h-4" /></a>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default Projects;
