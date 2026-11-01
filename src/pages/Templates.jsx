import { useState } from 'react';
import { templates } from '../data/templates.js';
import TemplateGrid from '../components/TemplateGrid.jsx';

const tabs = [['all', 'All'], ['fresher', 'Freshers'], ['experienced', 'Experienced']];

export default function Templates() {
  const [cat, setCat] = useState('all');
  const items = templates.filter((t) => t.available && (cat === 'all' || t.category === cat))
    .sort((a, b) => a.order - b.order);
  return (
    <section className="section">
      <div className="container">
        <h1 className="h1-sm">Resume Templates</h1>
        <div className="tabs" role="group" aria-label="Filter by category">
          {tabs.map(([k, label]) => (
            <button key={k} className="btn btn-ghost" aria-pressed={cat === k} onClick={() => setCat(k)}>{label}</button>
          ))}
        </div>
        <TemplateGrid items={items} />
      </div>
    </section>
  );
}
