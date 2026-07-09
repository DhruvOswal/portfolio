import { motion } from 'framer-motion';
import TiltCard from '../components/TiltCard';
import Scene3D from '../components/Scene3D';
import { profile } from '../data/content';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6 },
};

export default function Contact() {
  return (
    <div className="page" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="contact-scene-wrap">
        <Scene3D variant="centered" />
      </div>
      <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
        <motion.div {...fadeUp} className="eyebrow">07 / CONTACT</motion.div>
        <motion.h1 {...fadeUp} className="page-title">Let's build something.</motion.h1>

        <div className="contact-grid" style={{ marginTop: 40 }}>
          {[
            { href: `mailto:${profile.email}`, k: 'Email', v: profile.email },
            { href: `tel:${profile.phone.replace(/\s/g, '')}`, k: 'Phone', v: profile.phone },
            { href: profile.linkedin, k: 'LinkedIn', v: profile.linkedinHandle, ext: true },
            { href: profile.github, k: 'GitHub', v: profile.githubHandle, ext: true },
          ].map((c, i) => (
            <motion.div
              key={c.k}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <TiltCard maxTilt={8}>
                <a
                  className="contact-tile"
                  href={c.href}
                  target={c.ext ? '_blank' : undefined}
                  rel={c.ext ? 'noopener noreferrer' : undefined}
                >
                  <span className="ck">{c.k}</span>
                  <span className="cv">{c.v}</span>
                </a>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
