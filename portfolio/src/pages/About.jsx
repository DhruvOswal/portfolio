import { motion } from 'framer-motion';
import TiltCard from '../components/TiltCard';
import { aboutFacts, aboutParagraphs, aboutChips } from '../data/content';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6 },
};

export default function About() {
  return (
    <div className="page">
      <div className="wrap">
        <motion.div {...fadeUp} className="eyebrow">01 / ABOUT</motion.div>
        <motion.h1 {...fadeUp} className="page-title"> Learning on the GO,<br /> Building with the Flow. </motion.h1>

        <div className="about-grid" style={{ marginTop: 48 }}>
          <motion.div {...fadeUp}>
            <TiltCard maxTilt={6}>
              <div className="status-panel">
                {aboutFacts.map((f) => (
                  <div className="status-row" key={f.k}>
                    <span className="k">{f.k}</span>
                    <span className="v">{f.v}</span>
                  </div>
                ))}
              </div>
            </TiltCard>
          </motion.div>

          <motion.div className="about-body" {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
            {aboutParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <div className="leadership-inline">
              {aboutChips.map((c) => (
                <span className="chip" key={c}>{c}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
