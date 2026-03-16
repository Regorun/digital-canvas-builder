import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Network, Shield, Cloud, Cpu } from 'lucide-react';

const studies = [
  { title: 'Enterprise SD-WAN Migration', tag: 'Networking', icon: Network, desc: 'Migrated 120+ branch offices from legacy MPLS to a modern SD-WAN architecture, reducing costs by 40% while improving application performance.', expanded: 'Led the end-to-end migration strategy including vendor selection, pilot rollouts, and phased deployments. Implemented application-aware routing policies, centralized orchestration, and automated failover mechanisms across all branch locations.' },
  { title: 'Zero Trust Security Implementation', tag: 'Security', icon: Shield, desc: 'Designed and deployed a zero-trust framework across a global organization, integrating identity-aware proxies and micro-segmentation.', expanded: 'Architected a comprehensive zero-trust model incorporating continuous verification, least-privilege access controls, and micro-segmentation using next-gen firewalls. Integrated with IAM platforms for context-aware policy enforcement across cloud and on-premises environments.' },
  { title: 'Cloud-First Network Redesign', tag: 'Cloud', icon: Cloud, desc: 'Re-architected the network for a cloud-first strategy, implementing hybrid connectivity and automated failover.', expanded: 'Designed hybrid connectivity leveraging SD-WAN and direct cloud interconnects to AWS and Azure. Built automated failover and traffic engineering policies, reducing cloud application latency by 55% and ensuring 99.99% uptime for critical workloads.' },
  { title: 'SOC Automation Pipeline', tag: 'Automation', icon: Cpu, desc: 'Built an automated threat detection and response pipeline, reducing mean time to respond (MTTR) by 65%.', expanded: 'Developed an end-to-end automation pipeline integrating SIEM, SOAR, and threat intelligence feeds. Created custom playbooks for automated triage, enrichment, and containment, enabling the SOC team to focus on advanced threat hunting and strategic initiatives.' },
];

const CaseStudies = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="content-section">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p className="text-primary font-display font-medium mb-4 tracking-wider uppercase text-sm">Portfolio</p>
        <h1 className="page-title">Case Studies</h1>
        <p className="page-subtitle mb-16">Real-world problems solved with engineering excellence.</p>
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
                        {s.expanded}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : i)}
                  className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:gap-2 transition-all mt-3 cursor-pointer"
                >
                  {isExpanded ? 'Show less' : 'Read more'} <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default CaseStudies;
