import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const services = [
  {
    title: 'Reparații Acoperișuri Orice Tip',
    description: 'Intervenim rapid pentru reparații la orice tip de acoperiș — ceramică, metal, bitum sau tablă. Diagnosticăm problemele și oferim soluții durabile care previn deteriorarea ulterioară.',
  },
  {
    title: 'Montaj Acoperișuri',
    description: 'Montaj complet al acoperișurilor noi, de la structura de lemn până la învelitoarea finală. Lucrăm cu materiale certificate și respectăm toate normele tehnice în vigoare.',
  },
  {
    title: 'Dulgherie',
    description: 'Execuție și reparație șarpante din lemn masiv. Meșteri calificați cu experiență în structuri complexe — căpriori, pane, cosoroabe și ferme de acoperiș.',
  },
  {
    title: 'Mansardări',
    description: 'Transformăm spațiul podului într-o mansardă funcțională și estetică. Planificare, structură, izolație, ferestre Velux și finisaje complete.',
  },
  {
    title: 'Terase & Foișoare',
    description: 'Construim și acoperim terase și foișoare cu soluții rezistente la intemperii. Structuri din lemn sau metal, cu învelitori adaptate stilului casei tale.',
  },
  {
    title: 'Montaj Orice Tip de Tablă',
    description: 'Montaj profesional tablă falțuită, tablă cutată, tablă tip țiglă sau tablă lindab. Soluții moderne pentru acoperișuri rezidențiale și industriale.',
  },
  {
    title: 'Montaj Țiglă Ceramică',
    description: 'Montaj țiglă ceramică de calitate superioară — aspect tradițional, rezistență maximă la UV, îngheț și intemperii. Garanție extinsă pe lucrare.',
  },
  {
    title: 'Montaj Șindrilă Bituminoasă',
    description: 'Șindrilă bituminoasă — soluție ușoară, flexibilă și estetică pentru acoperișuri cu forme complexe. Rezistentă la vânt și precipitații, disponibilă în mai multe culori.',
  },
  {
    title: 'Montaj Panouri Sandwich',
    description: 'Panouri sandwich termoizolante pentru hale, depozite și construcții industriale sau rezidențiale. Montaj rapid, eficiență energetică ridicată.',
  },
  {
    title: 'Hidroizolații',
    description: 'Sisteme complete de hidroizolație pentru acoperișuri plate, terase și fundații. Membrane bituminoase, membrane EPDM și soluții lichide certificate.',
  },
  {
    title: 'Izolații Interioare & Exterioare',
    description: 'Izolație termică și fonică pentru mansarde, poduri și pereți. Vată minerală, polistiren sau spumă poliuretanică — reducere semnificativă a facturilor la energie.',
  },
  {
    title: 'Vopsire Acoperișuri',
    description: 'Revigorăm acoperișurile vechi prin vopsire specializată cu vopsele anticorozive și UV. Prelungim durata de viață a învelitorii și redăm aspectul original.',
  },
  {
    title: 'Montaj & Reparații Sistem Pluvial',
    description: 'Montaj și reparații jgheaburi și burlane din zinc, aluminiu sau PVC. Sistem pluvial corect dimensionat pentru protecția fundației și a fațadei.',
  },
  {
    title: 'Montaj Parazăpezi',
    description: 'Montaj sisteme parazăpezi pentru prevenirea avalanșelor de zăpadă de pe acoperiș. Protejăm persoanele, vehiculele și elementele arhitecturale de sub streașină.',
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
