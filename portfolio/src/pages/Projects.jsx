import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TiltCard from '../components/TiltCard';
import { projects } from '../data/content';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.5 },
};

export default function Projects() {
  const allTags = useMemo(() => ['ALL', ...new Set(projects.flatMap((p) => p.tags))], []);
  const [tag, setTag] = useState('ALL');
  const [expanded, setExpanded] = useState(null);

  const filtered = tag === 'ALL' ? projects : projects.filter((p) => p.tags.includes(tag));

  return (
    <div className="page">
      <div className="wrap">
        <motion.div {...fadeUp} className="eyebrow">04 / PROJECTS</motion.div>
        <motion.h1 {...fadeUp} className="page-title">Systems I've shipped.</motion.h1>

        <motion.div className="proj-filter skills-filter" {...fadeUp}>
          {allTags.map((t) => (
            <button
              key={t}
              className={'filter-btn' + (tag === t ? ' active' : '')}
              onClick={() => setTag(t)}
            >
              {t}
            </button>
          ))}
        </motion.div>

        <div className="projects-grid" style={{ marginTop: 24 }}>
          {filtered.map((p, i) => {
            const originalIndex = projects.indexOf(p);
            const isOpen = expanded === p.name;
            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: (i % 6) * 0.05 }}
              >
                <TiltCard maxTilt={7} onClick={() => setExpanded(isOpen ? null : p.name)}>
                  <div className="proj-card">
                    <div className="proj-top">
                      <span className="proj-num mono">{String(originalIndex + 1).padStart(2, '0')}</span>
                      <span className="proj-toggle mono">{isOpen ? 'COLLAPSE −' : 'EXPAND +'}</span>
                    </div>
                    <div className="proj-name">{p.name}</div>
                    <div className="proj-desc">{p.desc}</div>
                    <div className="proj-tags">
                      {p.tags.map((t) => <span key={t}>{t}</span>)}
                    </div>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          className="proj-details"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          style={{ overflow: 'hidden' }}
                        >
                          <ul>
                            {p.details.map((d, di) => <li key={di}>{d}</li>)}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
