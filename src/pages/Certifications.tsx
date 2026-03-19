import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Shield, BookOpen, GraduationCap } from 'lucide-react';

const studies = [
  { title: 'Algosec ASMS Foundations Technical', tag: 'ASMS', icon: BookOpen, desc: '', expanded: 'Issued: March 2025' },
  { title: 'VMware Certified Professional – Network Virtualization', tag: 'VCP-NV', icon: Shield, desc: '', expanded: 'Issued: Jun-2024\nVerification: BDCM00911434' },
  { title: 'Microsoft Certified Azure Fundamentals', tag: 'AZ-900', icon: Shield, desc: '', expanded: 'Issued: May-2021\nVerification: 991411924' },
  { title: 'Palo Alto Certified Network Security Administrator', tag: 'PCNSA', icon: Shield, desc: '', expanded: 'Issued: Jan-2021\nVerification: HJPH5GS2LNBQQLGT' },
  { title: 'Juniper Networks Certified Associate', tag: 'JNCIA-DevOps', icon: Shield, desc: '', expanded: 'Issued: Sep-2020\nVerification: F0VDWB8Q92QE1T5Z' },
  { title: 'Cisco Certified Network Associate', tag: 'CCNA 200-301', icon: Shield, desc: '', expanded: 'Issued: Aug-2020\nVerification: CSCO13616482 ' },
  { title: 'Palo Alto Certified Cyber Security Associate', tag: 'PCCSA', icon: Shield, desc: '', expanded: 'Issued: Aug-2020\nVerification: 7RGH5SC2JE44QDGX' },
  { title: 'Palo Alto Certified Cybersecurity Entry-Level Technician', tag: 'PCCET', icon: Shield, desc: '', expanded: 'Issued: Aug-2020\nVerification: 7RGH5SC2JE44QDGX' },
  { title: 'Bachelor of Computer Applications', tag: 'BCA', icon: GraduationCap, desc: '', expanded: '2012-2015\nSt. Aloysius College(Autonomous)\nMangalore' },
  { title: 'Pre-University College', tag: 'PCME', icon: GraduationCap, desc: '', expanded: '2010-2012\nSt. Aloysius College\nMangalore' },
  { title: 'High School', tag: 'SSLC', icon: GraduationCap, desc: '', expanded: '2008-2010\nMilagres Higher Primary School\nMangalore'}, 
];

const Certifications = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="content-section">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p className="text-primary font-display font-medium mb-4 tracking-wider uppercase text-sm">Badges of honour</p>
        <h1 className="page-title">Certifications</h1>
        <p className="page-subtitle mb-16">Depth of knowledge</p>
      </motion.div>

      <div className="space-y-8">
        {studies.map((s, i) => {
          const isExpanded = expandedIndex === i;
          const Icon = s.icon;
          return (
            <motion.div
              key={i}
              className="glass-card flex gap-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <span className="inline-block text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full mb-2">
                  {s.tag}
                </span>
                <h3 className="font-display font-semibold text-lg">{s.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm text-muted-foreground pt-3 mt-3 border-t border-border">
                        {s.expanded.split('\n').map((line, index) => (
                            <span key={index}>
                            {line}
                            <br />
                            </span>
                        ))}
                        </p>
                    </motion.div>
                  )}
                </AnimatePresence>
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : i)}
                  className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:gap-2 transition-all mt-3 cursor-pointer"
                >
                  {isExpanded ? 'Show less' : 'See more'} <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Certifications;
