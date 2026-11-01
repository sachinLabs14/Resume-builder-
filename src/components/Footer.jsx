import { Link } from 'react-router-dom';
import { brand } from '../config/brand.js';

const links = [
  ['/about', 'About'], ['/contact', 'Contact'], ['/privacy', 'Privacy Policy'],
  ['/terms', 'Terms and Conditions'], ['/subscription', 'Subscription and cancellation'],
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-row">
        <div>
          <strong className="wordmark">{brand.name}</strong>
          <p>{brand.tagline}</p>
        </div>
        <nav aria-label="Footer">
          {links.map(([to, label]) => <Link key={to} to={to}>{label}</Link>)}
        </nav>
      </div>
    </footer>
  );
}
