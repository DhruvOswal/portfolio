import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navLinks } from '../data/content';

export default function Navbar({ unlocked }) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [sendState, setSendState] = useState('idle'); // 'idle' | 'sending' | 'sent'
  
  const lockedTabs = ['/experience', '/education', '/leadership', '/contact'];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    setSendState('sending');
    setTimeout(() => {
      const messages = JSON.parse(localStorage.getItem('portfolio_quick_messages') || '[]');
      messages.push({ text: message.trim(), timestamp: new Date().toISOString() });
      localStorage.setItem('portfolio_quick_messages', JSON.stringify(messages));
      
      setSendState('sent');
      setMessage('');
      setTimeout(() => {
        setSendState('idle');
      }, 2000);
    }, 1000);
  };

  const renderLabel = (l) => {
    const isLocked = lockedTabs.includes(l.to) && !unlocked;
    return (
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
        {l.label.toUpperCase()}
        {isLocked && (
          <svg
            viewBox="0 0 24 24"
            width="10"
            height="10"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            style={{ opacity: 0.7 }}
          >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        )}
      </span>
    );
  };

  const renderQuickMsgForm = (customStyle = {}) => (
    <form onSubmit={handleSendMessage} className="nav-quick-msg" style={customStyle}>
      <input
        type="text"
        placeholder="say hi"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        disabled={sendState !== 'idle'}
        className="nav-quick-input mono"
      />
      <button type="submit" className="nav-quick-send" disabled={sendState !== 'idle' || !message.trim()}>
        {sendState === 'idle' && '→'}
        {sendState === 'sending' && '...'}
        {sendState === 'sent' && '✓'}
      </button>
    </form>
  );

  return (
    <header className="navbar">
      <nav className="wrap navbar-inner">
        {/* Left spacer to keep navlinks centered on desktop */}
        <div className="nav-left-spacer" style={{ width: '200px' }} />

        <div className="navlinks">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => 'navlink' + (isActive ? ' active' : '')}
              end={l.to === '/'}
            >
              {renderLabel(l)}
            </NavLink>
          ))}
        </div>

        {/* Right top area with quick message form */}
        <div className="nav-right-area" style={{ width: '200px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          {renderQuickMsgForm()}
        </div>

        <button className="burger" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
          {open ? '✕' : '☰'}
        </button>
      </nav>

      <div className={'mobile-menu' + (open ? ' open' : '')}>
        {navLinks.map((l) => (
          <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)} end={l.to === '/'}>
            {renderLabel(l)}
          </NavLink>
        ))}
        <div className="mobile-menu-msg-wrap" style={{ padding: '16px 24px' }}>
          {renderQuickMsgForm({ width: '100%' })}
        </div>
      </div>
    </header>
  );
}
