import { motion } from 'framer-motion';
import { experience } from '../data/content';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6 },
};

export default function Experience() {
  return (
    <div className="page">
      <div className="wrap">
        <motion.div {...fadeUp} className="eyebrow">02 / EXPERIENCE</motion.div>
        <motion.h1 {...fadeUp} className="page-title">Where I've worked.</motion.h1>

        <motion.div
          className="work-card"
          initial={{ opacity: 0, rotateX: -8, y: 30 }}
          whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          style={{ transformPerspective: 900, marginTop: 40 }}
        >
          <div className="work-title-row">
            <span className="work-title">{experience.title}</span>
            <span className="work-date">{experience.date}</span>
          </div>
          <div className="work-org">{experience.org}</div>
          <ul>
            {experience.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
