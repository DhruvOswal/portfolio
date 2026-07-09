import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { leadership, languages } from '../data/content';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6 },
};

const tabNames = Object.keys(leadership);

export default function Leadership() {
  const [active, setActive] = useState(tabNames[0]);

  return (
    <div className="page">
      <div className="wrap">
        <motion.div {...fadeUp} className="eyebrow">06 / LEADERSHIP</motion.div>
        <motion.h1 {...fadeUp} className="page-title">
          Running the other kind of system: people, logistics, events.
        </motion.h1>

        <motion.div className="tabs" {...fadeUp}>
          {tabNames.map((name) => (
            <button
              key={name}
              className={'tab-btn' + (active === name ? ' active' : '')}
              onClick={() => setActive(name)}
            >
              {name}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="tab-panel"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
          >
            {leadership[active].map((item, i) => (
              <motion.div
                className="lead-card"
                key={item.t}
                initial={{ opacity: 0, y: 16, rotateX: -6 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                style={{ transformPerspective: 800 }}
              >
                <h4>{item.t}</h4>
                <p>{item.d}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div className="lang-strip" {...fadeUp}>
          {languages.map((l) => (
            <div className="lang-pill" key={l.n}>
              <b>{l.n}</b> · {l.l}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
