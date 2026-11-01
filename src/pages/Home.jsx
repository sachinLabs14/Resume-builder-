import { Link } from 'react-router-dom';
import { brand } from '../config/brand.js';
import { byCategory, templates } from '../data/templates.js';
import { steps, features, faqs } from '../data/content.js';
import ResumePreview from '../components/ResumePreview.jsx';
import TemplateGrid from '../components/TemplateGrid.jsx';

export default function Home() {
  const hero = [templates[0], templates[6], templates[1]];
  return (
    <>
      <section className="hero">
        <div className="container hero-row">
          <div>
            <h1>Build a Resume That Opens Doors.</h1>
            <p className="lead">
              Create a professional resume with thoughtfully designed templates for freshers and experienced
              professionals. Showcase your skills, highlight your achievements, and prepare for your next career opportunity.
            </p>
            <div className="actions">
              <Link to="/get-started" className="btn btn-primary btn-lg">Create My Resume</Link>
              <Link to="/templates" className="btn btn-ghost btn-lg">Explore Templates</Link>
            </div>
          </div>
          <div className="stack" aria-hidden="true">
            {hero.map((t, i) => <div key={t.id} className={`stack-${i}`}><ResumePreview template={t} /></div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Resume Templates for Freshers</h2>
          <TemplateGrid items={byCategory('fresher')} />
          <h2 className="gap">Professional Resume Templates for Experienced Candidates</h2>
          <TemplateGrid items={byCategory('experienced').slice(0, 5)} />
          <p className="center"><Link to="/templates" className="btn btn-ghost">View all {templates.length} templates</Link></p>
        </div>
      </section>

      <section className="section tint" id="how-it-works">
        <div className="container">
          <h2>How It Works</h2>
          <ol className="steps">
            {steps.map((s) => <li key={s.title}><h3>{s.title}</h3><p>{s.text}</p></li>)}
          </ol>
        </div>
      </section>

      <section className="section" id="features">
        <div className="container">
          <h2>Features</h2>
          <ul className="features">
            {features.map((f) => (
              <li key={f.title}>
                <h3>{f.title}</h3><p>{f.text}</p>
                {f.status === 'planned' && <span className="tag">Coming soon</span>}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section tint">
        <div className="container narrow">
          <h2>{brand.trialMonths}-month trial for every new account</h2>
          <p className="lead">
            Create, edit, save, preview and download during your trial. After it ends your resumes stay safe and
            editable, and PDF downloads need an active subscription.
          </p>
        </div>
      </section>

      <section className="section" id="faqs">
        <div className="container narrow">
          <h2>FAQs</h2>
          {faqs.map((f) => (
            <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>
          ))}
        </div>
      </section>
    </>
  );
}
