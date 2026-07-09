import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Leadership from './pages/Leadership';
import Contact from './pages/Contact';
import Gateway from './components/Gateway';

function CustomCursor() {
  const dotRef = useRef(null);
  useEffect(() => {
    const dot = dotRef.current;
    function move(e) {
      dot.style.left = e.clientX + 'px';
      dot.style.top = e.clientY + 'px';
    }
    function onEnter() { dot.classList.add('hover'); }
    function onLeave() { dot.classList.remove('hover'); }
    window.addEventListener('mousemove', move);
    const interactive = document.querySelectorAll('a, button, .proj-card, .skill-tag, .contact-tile');
    interactive.forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });
    return () => {
      window.removeEventListener('mousemove', move);
      interactive.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  });
  return <div id="cursor-dot" ref={dotRef} />;
}

function AnimatedRoutes({ unlocked, onUnlock }) {
  const location = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [location.pathname]);

  const renderLocked = (element) => {
    return unlocked ? element : <Gateway onUnlock={onUnlock} />;
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={renderLocked(<Experience />)} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={renderLocked(<Education />)} />
          <Route path="/leadership" element={renderLocked(<Leadership />)} />
          <Route path="/contact" element={renderLocked(<Contact />)} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  const [unlocked, setUnlocked] = useState(
    () => localStorage.getItem('portfolio_unlocked') === 'true'
  );

  const handleUnlock = (email) => {
    localStorage.setItem('portfolio_unlocked', 'true');
    localStorage.setItem('portfolio_email', email);
    setUnlocked(true);
  };

  return (
    <BrowserRouter>
      <div className="grid-bg" />
      <CustomCursor />
      <Navbar unlocked={unlocked} />
      <AnimatedRoutes unlocked={unlocked} onUnlock={handleUnlock} />
      <Footer />
    </BrowserRouter>
  );
}
