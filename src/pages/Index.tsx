import { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';

const cards = [
  {
    title: 'AI Engineering',
    desc: 'Enterprise-grade architectures built for scale, resilience, and performance.',
    expanded: 'Leveraging large language models, ML pipelines, and intelligent automation to transform network operations. Building AI-driven solutions for predictive analytics, anomaly detection, and self-healing infrastructure.',
  },
  {
    title: 'Automations',
    desc: 'Enterprise-grade architectures built for scale, resilience, and performance.',
    expanded: 'End-to-end automation using Ansible, Terraform, Python, and CI/CD pipelines. Automating provisioning, configuration management, compliance checks, and incident response workflows across multi-vendor environments.',
  },
  {
    title: 'Monitoring & Observability',
    desc: 'Enterprise-grade architectures built for scale, resilience, and performance.',
    expanded: 'Implementing full-stack observability with Grafana, Prometheus, and PRTG. Building dashboards, alerting frameworks, and SRE practices that provide real-time visibility into network health and application performance.',
  },
  {
    title: 'Network Operations',
    desc: 'Enterprise-grade architectures built for scale, resilience, and performance.',
    expanded: 'Managing large-scale campus and data center networks with zero-downtime deployments. Expertise in routing protocols, switching fabrics, SD-WAN, and network lifecycle management across enterprise environments.',
  },
  {
    title: 'Network Design',
    desc: 'Enterprise-grade architectures built for scale, resilience, and performance.',
    expanded: 'Designing resilient, scalable network architectures including spine-leaf fabrics, VXLAN overlays, and segmented security zones. Creating high-level and low-level designs aligned with business requirements and industry best practices.',
  },
  {
    title: 'Security',
    desc: 'Frameworks, threat detection, and compliance-driven security posture.',
    expanded: 'Deploying next-gen firewalls, zero-trust architectures, and micro-segmentation strategies. Implementing threat detection, vulnerability management, and compliance frameworks across cloud and on-premises environments.',
  },
];

const highlightKeywords = (text: string, isExpanded: boolean) => {
  if (!isExpanded) return text;
  const keywords = ['networking', 'security', 'cloud', 'automation'];
  const regex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'gi');
  const parts = text.split(regex);
  return parts.map((part, i) =>
    keywords.some(k => k.toLowerCase() === part.toLowerCase()) ? (
      <span key={i} className="text-primary font-semibold">{part}</span>
    ) : (
      part
    )
  );
};

const Index = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="content-section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-primary font-display font-medium mb-4 tracking-wider uppercase text-sm">
          Hello!
        </p>
        <h1 className="page-title">
          Jeevan Rego
          <br />
          <span className="text-primary">Infrastructure & Network Automation Lead</span>
        </h1>
        <p className="page-subtitle mb-12">
          with 10+ years of experience driving large-scale enterprise modernization 
          across campus and data center environments. Proven track record of building and leading teams, 
          executing transformational projects with zero downtime, and institutionalizing SRE and observability frameworks. Strong 
          in stakeholder management, risk governance, and delivering automation-first reliability strategies aligned with business goals. 
          Designing, building, and securing enterprise networks with precision and passion.
          Specialized in next-gen firewalls, SD-WAN, cloud security, and network automation.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="grid md:grid-cols-3 gap-6 mt-8"
      >
        {cards.map((item, i) => {
          const isExpanded = expandedIndex === i;
          return (
            <motion.div
              key={item.title}
              className="glass-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
              layout
            >
              <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="text-muted-foreground text-sm mt-3 pt-3 border-t border-border">
                      {highlightKeywords(item.expanded, true)}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
              <button
                onClick={() => setExpandedIndex(isExpanded ? null : i)}
                className="text-primary text-xs font-medium mt-3 hover:underline cursor-pointer"
              >
                {isExpanded ? 'Show less' : 'Read more'}
              </button>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Index;
