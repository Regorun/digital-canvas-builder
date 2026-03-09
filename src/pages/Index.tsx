import { motion } from 'framer-motion';

const Index = () => {
  return (
    <div className="content-section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-primary font-display font-medium mb-4 tracking-wider uppercase text-sm">
          Welcome
        </p>
        <h1 className="page-title">
          Network & Security
          <br />
          <span className="text-primary">Engineer</span>
        </h1>
        <p className="page-subtitle mb-12">
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
        {[
          { title: 'Network Design', desc: 'Enterprise-grade architectures built for scale, resilience, and performance.' },
          { title: 'Security Engineering', desc: 'Zero-trust frameworks, threat detection, and compliance-driven security posture.' },
          { title: 'Automation', desc: 'Infrastructure as code, API-driven workflows, and intelligent monitoring.' },
        ].map((item, i) => (
          <motion.div
            key={item.title}
            className="glass-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
          >
            <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-muted-foreground text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Index;
