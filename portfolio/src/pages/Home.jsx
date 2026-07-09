import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Scene3D from '../components/Scene3D';
import Mandala from '../components/Mandala';

export default function Home() {
  return (
    <section className="hero-page">
      <Scene3D variant="hero" />
      <div className="wrap hero-grid">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="hero-name display">DHRUV<br />OSWAL</h1>
          <p className="hero-role">
            <strong>Full-Stack Developer</strong>, <strong>Jack of All Trades</strong> <br />currently
            building <strong>Quantro</strong>, an AI-driven fintech platform.
          </p>
          <div className="hero-cta">
            <Link to="/projects" className="btn btn-primary">VIEW PROJECTS →</Link>
            <Link to="/contact" className="btn btn-ghost">GET IN TOUCH</Link>
          </div>
        </motion.div>

        <div style={{ position: 'relative' }}>
          <div className="hero-mandala-wrap">
            <div className="mandala-glow" />
            <Mandala />
          </div>
        </div>
      </div>
    </section>
  );
}
