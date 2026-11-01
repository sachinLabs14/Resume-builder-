import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { brand } from '../config/brand.js';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/templates', label: 'Resume Templates' },
  { to: '/#how-it-works', label: 'How It Works' },
  { to: '/#features', label: 'Features' },
  { to: '/#faqs', label: 'FAQs' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="nav">
      <div className="container nav-row">
        <Link to="/" className="wordmark" onClick={close}>{brand.name}</Link>
        <button className="menu-btn" aria-expanded={open} aria-controls="nav-menu" onClick={() => setOpen(!open)}>
          {open ? 'Close' : 'Menu'}
        </button>
        <nav id="nav-menu" className={open ? 'nav-menu open' : 'nav-menu'} aria-label="Main">
          {links.map((l) =>
            l.to.includes('#') ? (
              <Link key={l.to} to={l.to} onClick={close}>{l.label}</Link>
            ) : (
              <NavLink key={l.to} to={l.to} end={l.end} onClick={close}>{l.label}</NavLink>
            )
          )}
          <Link to="/login" className="btn btn-ghost" onClick={close}>Log In</Link>
          <Link to="/get-started" className="btn btn-primary" onClick={close}>Get Started</Link>
        </nav>
      </div>
    </header>
  );
}
