import { motion } from 'framer-motion';

const brands = [
  { name: 'Arista', logo: '/logos/arista.png' },
  { name: 'Cisco', logo: '/logos/cisco.png' },
  { name: 'Palo Alto Networks', logo: '/logos/paloalto.png' },
  { name: 'Paessler', logo: '/logos/paessler.png' },
  { name: 'Zscaler', logo: '/logos/zscaler.png' },
  { name: 'Akamai', logo: '/logos/akamai.png' },
];

const Technology = () => (
  <div className="content-section">
    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
      <p className="text-primary font-display font-medium mb-4 tracking-wider uppercase text-sm">Tech Stack</p>
      <h1 className="page-title">Technology</h1>
      <p className="page-subtitle mb-16">Platforms and vendors I work with daily.</p>
    </motion.div>

    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {brands.map((brand, i) => (
        <motion.div
          key={brand.name}
          className="tech-card"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
        >
          <div className="w-20 h-20 flex items-center justify-center">
            <img
              src={brand.logo}
              alt={brand.name}
              className="max-w-full max-h-full object-contain dark:brightness-0 dark:invert dark:opacity-80"
            />
          </div>
          <span className="font-display font-medium text-sm text-center">{brand.name}</span>
        </motion.div>
      ))}
    </div>
  </div>
);

export default Technology;
