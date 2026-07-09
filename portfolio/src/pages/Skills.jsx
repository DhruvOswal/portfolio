import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import SkillOrb from '../components/SkillOrb';
import { skills } from '../data/content';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6 },
};

export default function Skills() {
  const categories = useMemo(() => ['ALL', ...new Set(skills.map((s) => s.cat))], []);
  const [active, setActive] = useState('ALL');

  const filtered = active === 'ALL' ? skills : skills.filter((s) => s.cat === active);

  return (
    <div className="page">
      <div className="wrap">
        <motion.div {...fadeUp} className="eyebrow">03 / SKILLS</motion.div>
        <motion.h1 {...fadeUp} className="page-title">The stack, orbiting in 3D.</motion.h1>
        <motion.p {...fadeUp} className="page-lede">
          Every skill lives on a rotating sphere below — filter by category to highlight a cluster, or leave it on
          "ALL" and watch the whole stack drift.
        </motion.p>

        <motion.div className="skills-filter" {...fadeUp}>
          {categories.map((c) => (
            <button
              key={c}
              className={'filter-btn' + (active === c ? ' active' : '')}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </motion.div>

        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
          <SkillOrb items={skills} activeCat={active} />
        </motion.div>

        <motion.div className="skills-grid" {...fadeUp}>
          {filtered.map((s) => (
            <div className="skill-tag" key={s.name}>
              <span>{s.name}</span>
              <span className="cat mono">{s.cat}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
