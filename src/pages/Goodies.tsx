import { motion } from 'framer-motion';
import { Download, FileText, Link as LinkIcon } from 'lucide-react';

const goodies = [
  {
    icon: Download,
    title: 'AAE cleanup',
    desc: 'Separate .aae files from your iphone-windows transfers',
    type: 'Code',
    link: 'https://github.com/Regorun/iphone_to_windows_file_transfers/tree/main/iphone_to_windows/AAE_files_cleaner'
  },
  {
    icon: Download,
    title: 'Duplicate filename organiser',
    desc: 'Windows .exe to organise duplicate filenames',
    type: 'EXE',
    link: 'https://github.com/Regorun/iphone_to_windows_file_transfers/releases/download/v2/find_duplicates.exe'
  }
];

const Goodies = () => (
  <div className="content-section">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <p className="text-primary font-display font-medium mb-4 tracking-wider uppercase text-sm">
        Resources
      </p>
      <h1 className="page-title">Goodies</h1>
      <p className="page-subtitle mb-16">
        Free resources, tools, and downloads for the community.
      </p>
    </motion.div>

    <div className="grid md:grid-cols-2 gap-6">
      {goodies.map((g, i) => (
        <motion.a
          key={i}
          href={g.link}
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card group block"
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
              <h3 className="font-display font-semibold text-lg mb-1 group-hover:underline">
                {g.title}
              </h3>
              <p className="text-sm text-muted-foreground">{g.desc}</p>
            </div>
          </div>
        </motion.a>
      ))}
    </div>
  </div>
);

export default Goodies;

/*
const goodies = [
  { icon: Download, title: 'AAE cleanup', desc: 'Separate .aae files from your iphone-windows transers', type: 'Template' },
  { icon: Download, title: 'Duplicate filename organiser', desc: 'Windows .exe to organise duplicate filenames', type: 'Code' }
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
*/