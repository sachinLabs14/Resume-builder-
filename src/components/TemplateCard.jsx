import { Link } from 'react-router-dom';
import ResumePreview from './ResumePreview.jsx';

export default function TemplateCard({ template, onPreview }) {
  return (
    <article className="card">
      <ResumePreview template={template} />
      <div className="card-body">
        <h3>{template.name}</h3>
        <p>{template.description}</p>
        <p className="meta">
          {template.category === 'fresher' ? 'Fresher' : 'Experienced'}
          {template.photo ? ', photo supported' : ', no photo'}
        </p>
        <div className="card-actions">
          <button className="btn btn-ghost" onClick={() => onPreview(template)}>Preview</button>
          <Link className="btn btn-primary" to="/get-started">Choose Template</Link>
        </div>
      </div>
    </article>
  );
}
