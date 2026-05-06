import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Award, BookOpen, Trophy, GraduationCap } from 'lucide-react';

const studies = [
  { title: 'Algosec Certified ASMS Expert', tag: 'Certification', icon: Award, desc: '', expanded: 'Due in June 2026' },
  { title: 'Algosec Certified ASMS Security Admin', tag: 'Certification', icon: Award, desc: '', expanded: 'Verification: 01VNKWmSSATS' },
  { title: 'Cisco Certified Network Professional (CCNP)', tag: 'Course', icon: BookOpen, desc: '', expanded: 'Pursuing' },
  { title: 'Project Management Professional (PMP)', tag: 'Course', icon: BookOpen, desc: '', expanded: 'Pursuing' },
  { title: 'Algosec Certified Security User', tag: 'Certification', icon: Award, desc: '', expanded: 'Issued: Mar-2025\nVerification: 01VNKWmFOCTA' },
  { title: 'Spotlight Award', tag: 'Award', icon: Trophy, desc: '', expanded:'Feb-2026\n“No one tries harder for our customers” – For bridging the observability gap in incident management.'},
  { title: 'Oustanding Performaner', tag: 'Award', icon: Trophy, desc: '', expanded:'Jun-2024\nCEO recognized letter of honor for excellence in Infrastructure deliverables.'},
  { title: 'VMware Certified Professional – Network Virtualization (VCP-NV)', tag: 'Certification', icon: Award, desc: '', expanded: 'Issued: Jun-2024\nVerification: BDCM00911434' },
  { title: 'Spotlight Award', tag: 'Award', icon: Trophy, desc: '', expanded:'Dec-2023\nIntroduced new effective monitoring on VMware NSX infrastructure & identification and migration of Windows End-Of-Life servers'},
  { title: 'Business Ninja', tag: 'Award', icon: Trophy, desc: '', expanded:'Aug-2021\nDelivered exceptional operational automations in CIS (Cloud Infrastructure Services) domain.'},
  { title: 'AWS - Compute and Network Services', tag: 'Course', icon: BookOpen, desc: '', expanded:'Apr 2021'},
  { title: 'Microsoft Certified Azure Fundamentals (AZ-900)', tag: 'Certification', icon: Award, desc: '', expanded: 'Issued: May-2021\nVerification: 991411924' },
  { title: 'Palo Alto Certified Network Security Administrator (PCNSA)', tag: 'Certification', icon: Award, desc: '', expanded: 'Issued: Jan-2021\nVerification: HJPH5GS2LNBQQLGT' },
  { title: 'Juniper Networks Certified Associate (JNCIA-DevOps)', tag: 'Certification', icon: Award, desc: '', expanded: 'Issued: Sep-2020\nVerification: F0VDWB8Q92QE1T5Z' },
  { title: 'Cisco Certified Network Associate (CCNA 200-301)', tag: 'Certification', icon: Award, desc: '', expanded: 'Issued: Aug-2020\nVerification: CSCO13616482 ' },
  { title: 'Palo Alto Certified Cyber Security Associate (PCCSA)', tag: 'Certification', icon: Award, desc: '', expanded: 'Issued: Aug-2020\nVerification: 7RGH5SC2JE44QDGX' },
  { title: 'Palo Alto Certified Cyber Security Entry-Level Technician (PCCET)', tag: 'Certification', icon: Award, desc: '', expanded: 'Issued: Aug-2020\nVerification: 7RGH5SC2JE44QDGX' },
  { title: 'Agile & Scrum', tag: 'Course', icon: BookOpen, desc: '', expanded:'Dec-2018'},
  { title: 'Best Performer', tag: 'Award', icon: Trophy, desc: '', expanded:'Jul-2017\nStrategic cleanup initiative that delivered cost savings of $1.65M through rationalization of underutilized and redundant network assets.'},
  { title: 'Design Thinking - A Primer', tag: 'Course', icon: BookOpen, desc: '', expanded:'Nov-2015\nEndorsed by Vishal Sikka (CEO, Infosys)'},
  { title: 'Graduation', tag: 'Degree', icon: GraduationCap, desc: 'Bachelor of Computer Applications (BCA)', expanded: '2012-2015\nSt. Aloysius College(Autonomous)\nMangalore' },
  { title: 'Pre-University', tag: 'School', icon: GraduationCap, desc: 'PCME (Physics, Chemistry, Mathematics, Electronics)', expanded: '2010-2012\nSt. Aloysius College - Associated with Mangalore University\nMangalore' },
  { title: 'High School', tag: 'School', icon: GraduationCap, desc: '', expanded: '2008-2010\nMilagres Higher Primary School\nMangalore'}, 
];

const Accolades = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="content-section">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p className="text-primary font-display font-medium mb-4 tracking-wider uppercase text-sm">Badges of honour</p>
        <h1 className="page-title">Certifications, Awards & Courses</h1>
        <p className="page-subtitle mb-16">A display of depth in knowledge.</p>
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

export default Accolades;
