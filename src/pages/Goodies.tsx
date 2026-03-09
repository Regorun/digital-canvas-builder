import { motion } from 'framer-motion';
import { Download, FileText, Link as LinkIcon } from 'lucide-react';

const goodies = [
  { icon: FileText, title: 'Network Design Templates', desc: 'Visio and draw.io templates for common network topologies.', type: 'Template' },
  { icon: Download, title: 'Ansible Playbooks', desc: 'Ready-to-use Ansible playbooks for network device configuration.', type: 'Code' },
  { icon: LinkIcon, title: 'Useful Links Collection', desc: 'Curated list of networking tools, RFCs, and learning resources.', type: 'Resource' },
  { icon: FileText, title: 'Security Checklist', desc: 'Comprehensive security hardening checklist for enterprise networks.', type: 'Guide' },
];

const Goodies = () => (
  <div className="content-section">
    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
      <p className="text-primary font-display font-medium mb-4 tracking-wider uppercase text-sm">Resources</p>
      <h1 className="page-title">Goodies</h1>
      <p className="page-subtitle mb-16">Free resources, tools, and downloads for the community.</p>
    </motion.div>

    <div className="grid md:grid-cols-2 gap-6">
      {goodies.map((g, i) => (
        <motion.div
          key={i}
          className="glass-card group cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <g.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <span className="text-xs font-medium text-accent">{g.type}</span>
              <h3 className="font-display font-semibold text-lg mb-1">{g.title}</h3>
              <p className="text-sm text-muted-foreground">{g.desc}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default Goodies;
