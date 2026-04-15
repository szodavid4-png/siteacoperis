import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const services = [
  {
    title: 'Învelitori Ceramice',
    description: 'Țigle ceramice premium pentru un acoperiș elegant și durabil. Rezistență garantată la intemperii și îngheț-dezgheț.',
    img: 'https://media.base44.com/images/public/69de30306771a2ccbe5f46cb/76a1ce3b2_generated_0c3bf5a5.png',
  },
  {
    title: 'Învelitori Metalice',
    description: 'Tablă falțuită și țiglă metalică de înaltă calitate. Soluția modernă, ușoară și rezistentă la coroziune.',
    img: 'https://media.base44.com/images/public/69de30306771a2ccbe5f46cb/c18976d65_generated_1425caef.png',
  },
  {
    title: 'Acoperișuri Plate',
    description: 'Sisteme complete de hidroizolație pentru terase și acoperișuri plate. Membrane de ultimă generație.',
    img: 'https://media.base44.com/images/public/69de30306771a2ccbe5f46cb/90cf30cb4_generated_4d69f9a2.png',
  },
  {
    title: 'Jgheaburi & Burlane',
    description: 'Sisteme pluviale din zinc, cupru sau aluminiu. Montaj profesional și protecție completă.',
    img: 'https://media.base44.com/images/public/69de30306771a2ccbe5f46cb/0e383b419_generated_1163dc61.png',
  },
  {
    title: 'Renovare Acoperiș',
    description: 'Refacerea completă a structurii și învelitorii. Consolidare șarpantă, schimbare astereală și izolație.',
    img: 'https://media.base44.com/images/public/69de30306771a2ccbe5f46cb/38caf94b8_generated_83d659a7.png',
  },
  {
    title: 'Izolație & Mansardare',
    description: 'Izolație termică și fonică profesională. Transformăm mansarda într-un spațiu locuibil premium.',
    img: 'https://media.base44.com/images/public/69de30306771a2ccbe5f46cb/d51046e90_generated_4e660e8f.png',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function ServicesSection() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="servicii" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-px bg-primary"
            />
            <span className="text-primary text-sm font-semibold tracking-[0.25em] uppercase">
              Ce oferim
            </span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Soluții de Inginerie
            <br />
            <span className="text-primary">pentru Acoperișul Tău</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Fiecare proiect este tratat cu atenție la detalii și materiale premium,
            pentru un rezultat care durează generații.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <RevealOnScroll key={service.title} delay={index * 0.07}>
            <motion.div
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="group relative overflow-hidden rounded-lg bg-secondary border border-border/50 cursor-pointer"
                onClick={scrollToContact}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <motion.img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/20 to-transparent" />
                  {/* Blueprint reveal */}
                  <motion.div
                    className="absolute inset-0 bg-background/60 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.35 }}
                  >
                    <span className="text-primary font-semibold tracking-wide uppercase text-sm flex items-center gap-2">
                      Solicită Ofertă <ArrowRight className="w-4 h-4" />
                    </span>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <motion.div
                      initial={{ x: 0, opacity: 0.3 }}
                      whileHover={{ x: 4, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowRight className="w-5 h-5 text-primary mt-1" />
                    </motion.div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                    {service.description}
                  </p>
                  {/* Bottom accent line */}
                  <motion.div
                    className="h-px bg-primary mt-4"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </motion.div>
            </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
