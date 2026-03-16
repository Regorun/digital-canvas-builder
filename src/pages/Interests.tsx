import { motion } from 'framer-motion';
import { Trophy, Globe, Smartphone, House, Bike, CreditCard  } from 'lucide-react';

const interests = [
  { icon: Bike, title: 'Motorcycling', desc: 'Proud owner of a Suzuki V-Strom 650.' },
  { icon: CreditCard, title: 'Credit Card Enthusiast', desc: 'Maximum benefits from reward programs.' },
  { icon: Globe, title: 'Business', desc: 'Online business owner.' },
  { icon: Trophy, title: 'Cricket', desc: 'Active player in leather ball and box cricket.' },
  { icon: Smartphone, title: 'Meme Jury', desc: 'Netizen that consumes dialy dozage of memes.' },
  { icon: House , title: 'Design', desc: 'Always apperciates a good design.' },
];

const Interests = () => (
  <div className="content-section">
    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
      <p className="text-primary font-display font-medium mb-4 tracking-wider uppercase text-sm">Passions</p>
      <h1 className="page-title">Interests</h1>
      <p className="page-subtitle mb-16">What drives my curiosity and continuous growth.</p>
    </motion.div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {interests.map((item, i) => (
        <motion.div
          key={i}
          className="glass-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
        >
          <item.icon className="w-8 h-8 text-primary mb-4" />
          <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
          <p className="text-sm text-muted-foreground">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

export default Interests;
