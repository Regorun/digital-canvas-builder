import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const studies = [
  { title: 'Enterprise SD-WAN Migration', tag: 'Networking', desc: 'Migrated 120+ branch offices from legacy MPLS to a modern SD-WAN architecture, reducing costs by 40% while improving application performance.' },
  { title: 'Zero Trust Security Implementation', tag: 'Security', desc: 'Designed and deployed a zero-trust framework across a global organization, integrating identity-aware proxies and micro-segmentation.' },
  { title: 'Cloud-First Network Redesign', tag: 'Cloud', desc: 'Re-architected the network for a cloud-first strategy, implementing hybrid connectivity and automated failover.' },
  { title: 'SOC Automation Pipeline', tag: 'Automation', desc: 'Built an automated threat detection and response pipeline, reducing mean time to respond (MTTR) by 65%.' },
];

const CaseStudies = () => (
  <div className="content-section">
    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
      <p className="text-primary font-display font-medium mb-4 tracking-wider uppercase text-sm">Portfolio</p>
      <h1 className="page-title">Case Studies</h1>
      <p className="page-subtitle mb-16">Real-world problems solved with engineering excellence.</p>
    </motion.div>

    <div className="grid md:grid-cols-2 gap-6">
      {studies.map((s, i) => (
        <motion.div
          key={i}
          className="glass-card group cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
        >
          <span className="inline-block text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full mb-4">
            {s.tag}
          </span>
          <h3 className="font-display font-semibold text-lg mb-2">{s.title}</h3>
          <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
          <span className="inline-flex items-center gap-1 text-sm text-primary font-medium group-hover:gap-2 transition-all">
            Read more <ArrowRight className="w-4 h-4" />
          </span>
        </motion.div>
      ))}
    </div>
  </div>
);

export default CaseStudies;
