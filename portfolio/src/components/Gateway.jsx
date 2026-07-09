import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Gateway({ onUnlock }) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success'

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }

    setStatus('loading');

    // Simulate secure verification and email trigger
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => {
        onUnlock(email.trim());
      }, 1000);
    }, 1500);
  };

  return (
    <div className="gateway-container">
      <motion.div
        className="gateway-card"
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -30, scale: 0.95 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {/* Glow Effects */}
        <div className="gateway-glow violet" />
        <div className="gateway-glow lime" />

        <div className="gateway-header">
          <div className="gateway-icon-wrap">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.svg
                  key="check"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--teal)"
                  strokeWidth="2.5"
                  className="gateway-icon success"
                  initial={{ rotate: -90, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  <polyline points="20 6 9 17 4 12" />
                </motion.svg>
              ) : (
                <motion.svg
                  key="lock"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--amber)"
                  strokeWidth="2"
                  className={`gateway-icon ${status === 'loading' ? 'pulse' : ''}`}
                  exit={{ scale: 0, rotate: 45 }}
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </motion.svg>
              )}
            </AnimatePresence>
          </div>
          
          <h2 className="display">SECURE ACCESS REQUIRED</h2>
          <p className="gateway-subtitle">
            Experience, Education, Leadership, and Contact details are locked. Enter your email to get the details on your mail and unlock instant access.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="gateway-form">
          <div className="input-group">
            <input
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError('');
              }}
              disabled={status !== 'idle'}
              required
              className="gateway-input mono"
            />
            <span className="input-border" />
          </div>

          <AnimatePresence>
            {error && (
              <motion.p
                className="gateway-error mono"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                {error}
              </motion.p>
            )}
          </AnimatePresence>

          <button
            type="submit"
            disabled={status !== 'idle'}
            className={`btn gateway-btn ${status === 'success' ? 'success' : ''}`}
          >
            {status === 'idle' && (
              <>
                UNLOCK PORTFOLIO
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </>
            )}
            {status === 'loading' && 'VERIFYING CREDENTIALS...'}
            {status === 'success' && 'ACCESS GRANTED'}
          </button>
        </form>

        <div className="gateway-footer mono">
          <span>PORTFOLIO GATEWAY V2.0</span>
          <span>STATUS: SECURED</span>
        </div>
      </motion.div>
    </div>
  );
}
