import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, BrickWall, Eye, Cloud, Cpu } from 'lucide-react';

const studies = [
  { title: 'Route Count', tag: 'Monitoring', icon: BrickWall, desc: 'Overcoming OEM limitations by engineering an alerting framework.', expanded: 'Within Palo Alto Networks firewall platforms, wherein the absence of native telemetry for routing table saturation could result in silent route drops and potential network instability.\nArchitected and deployed a custom telemetry augmentation solution leveraging Python-based automation integrated with PRTG Network Monitor. This solution programmatically interrogates the firewall’s routing information base (RIB) to derive real-time metrics on route table utilization, effectively bridging the gap in native monitoring capabilities.\nAdditionally, designed an advanced visualization layer enabling trend analysis through dynamic mapping of routing table growth patterns, facilitating predictive capacity planning, anomaly detection, and preemptive incident mitigation. This initiative significantly enhanced network reliability, operational visibility, and reduced the risk of undetected routing failures in production environments.' },
  { title: 'One View', tag: 'Observability', icon: Eye, desc: 'Designing a dashboard to consolidate fragmented intellegence.', expanded: 'In large-scale enterprise networks, operational intelligence was significantly fragmented due to the absence of a unified observability layer—critical data points such as internet links, network inventory, streaming telemetry, VPN health, latency metrics, and third-party node performance (e.g., Zscaler, Akamai) were dispersed across multiple siloed tools. This lack of consolidation resulted in limited real-time visibility, delayed incident correlation, and suboptimal decision-making—challenges commonly observed in environments where data integration and visualization are not standardized.\nTo address this, a centralized “One-View” dashboard was engineered by integrating heterogeneous data sources into a Paessler Product using advanced PowerShell and Python scripting, API orchestration, and custom monitoring mechanisms. This solution established a single pane of glass, delivering real-time network state visibility across all critical parameters.\nThe transformation enabled rapid incident correlation, significantly reduced mean time to resolution (MTTR), and enhanced decision-making through data-driven insights. By transitioning from a fragmented monitoring ecosystem to an integrated observability framework, the organization achieved higher operational efficiency, proactive issue detection, and improved network reliability.' },
  { title: 'IaaS Latency', tag: 'IaaS', icon: Cloud, desc: 'How do you detect service disruption before it affects your users?', expanded: 'Within an Infrastructure-as-a-Service environment built on VMware, service delivery dependencies on VMware NSX edge nodes introduced a nuanced performance management challenge. While conventional telemetry such as CPU and memory utilization provided baseline infrastructure indicators, they proved insufficient as leading indicators of service degradation, particularly under conditions of elevated edge node load where data-plane performance exhibited non-linear behavior.\nThe absence of native, application-aware visibility into real-time traffic flow created a gap in accurately assessing end-user impact, thereby constraining proactive decision-making. To bridge this observability deficit, a synthetic transaction framework was architected—leveraging a purpose-built virtual machine hosting an Apache HTTP Server instance, strategically integrated with the NSX load-balancing layer.\nBy continuously simulating HTTPS-based data-path interactions, this approach enabled a proxy measurement of service health at the application layer, effectively translating infrastructure conditions into business-relevant performance signals. The outcome was a more sophisticated, experience-centric monitoring paradigm, enhancing the organization’s ability to detect latent performance bottlenecks, accelerate root-cause correlation, and drive more informed operational interventions.' },
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
