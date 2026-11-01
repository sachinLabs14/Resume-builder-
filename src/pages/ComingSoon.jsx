import { Link, useLocation } from 'react-router-dom';

export default function ComingSoon() {
  const name = useLocation().pathname.replace('/', '').replace(/-/g, ' ') || 'page';
  return (
    <section className="section">
      <div className="container narrow center">
        <h1 className="h1-sm">This page is not built yet</h1>
        <p className="lead">The “{name}” page will be added in a later phase.</p>
        <Link to="/" className="btn btn-primary">Back to home</Link>
      </div>
    </section>
  );
}
