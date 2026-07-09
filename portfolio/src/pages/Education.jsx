import { motion } from 'framer-motion';
import { education } from '../data/content';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6 },
};

export default function Education() {
  return (
    <div className="page">
      <div className="wrap">
        <motion.div {...fadeUp} className="eyebrow">05 / EDUCATION</motion.div>
        <motion.h1 {...fadeUp} className="page-title">Academic timeline.</motion.h1>

        <div className="edu-timeline" style={{ marginTop: 40 }}>
          {education.map((e, i) => (
            <motion.div
              className="edu-item"
              key={e.name}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="edu-year">{e.year}</div>
              <div>
                <div className="edu-name">{e.name}</div>
                <div className="edu-meta">{e.meta}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
