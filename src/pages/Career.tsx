import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experience = [
  { period: '2024 – Present', role: 'Systems Engineer 2', company: 'Tesco Technology', desc: 'Working as a lead in NWT (New World Tech) Team with current focus on implementing AI solution to deliver real measurable output.' },
  { period: '2021 – 2024', role: 'Systems Engineer 1', company: 'Tesco Technology', desc: 'Served as an SME (Subject Matter Expert) for Infrastructure Automations. Also handling high priority major incidents related to the network infrastructure in the business.' },
  { period: '2020 – 2021', role: 'Senior Systems Engineer', company: 'Infosys Ltd', desc: 'Transformation of remote site infrastructure to SD-WAN solutions for enhanced scalability, resilience, and operational efficiencies.' },
  { period: '2018 – 2020', role: 'Systems Engineer', company: 'Infosys Ltd', desc: 'Collaborated with Engineering Teams and facilitated user acceptance testing (UAT), System Integration Testing (SIT), Quality assurance (QA) for SD-WAN migrations at a global sports retail client.' },
  { period: '2017 – 2018', role: 'Senior Operations Executive', company: 'Infosys Ltd', desc: 'Designed and deployed Python-based automation to network BAU (Business-As-Usual) activities and enhance operational productivity.' },
  { period: '2015 – 2017', role: 'Operations Executive', company: 'Infosys Ltd', desc: 'Served as a NOC (Network Operations Center) Engineer for global telecom clients.' },
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
            <p className="text-sm text-primary font-medium mb-2">{item.company}</p>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default Career;
