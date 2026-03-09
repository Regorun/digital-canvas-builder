import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experience = [
  { period: '2023 – Present', role: 'Senior Network Engineer', company: 'Enterprise Corp', desc: 'Leading network transformation initiatives across multi-site deployments. Architecting SD-WAN solutions and zero-trust security frameworks.' },
  { period: '2020 – 2023', role: 'Network Security Engineer', company: 'CyberShield Inc', desc: 'Designed and implemented next-gen firewall policies, SIEM integrations, and incident response procedures for Fortune 500 clients.' },
  { period: '2018 – 2020', role: 'Network Engineer', company: 'TechConnect Solutions', desc: 'Managed enterprise switching and routing infrastructure. Automated network provisioning using Python and Ansible.' },
  { period: '2016 – 2018', role: 'IT Support Engineer', company: 'StartUp Hub', desc: 'Provided L2/L3 support, managed cloud infrastructure, and built monitoring dashboards.' },
];

const Career = () => (
  <div className="content-section">
    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
      <p className="text-primary font-display font-medium mb-4 tracking-wider uppercase text-sm">Experience</p>
      <h1 className="page-title">Career</h1>
      <p className="page-subtitle mb-16">A timeline of professional growth and impact.</p>
    </motion.div>

    <div className="space-y-8">
      {experience.map((item, i) => (
        <motion.div
          key={i}
          className="glass-card flex gap-6"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
        >
          <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <Briefcase className="w-6 h-6 text-primary" />
          </div>
          <div>
            <p className="text-xs text-primary font-medium mb-1">{item.period}</p>
            <h3 className="font-display font-semibold text-lg">{item.role}</h3>
            <p className="text-sm text-accent font-medium mb-2">{item.company}</p>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default Career;
