import { useRef, useState } from 'react';
import TemplateCard from './TemplateCard.jsx';
import ResumePreview from './ResumePreview.jsx';

export default function TemplateGrid({ items }) {
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const show = (t) => { setActive(t); ref.current?.showModal(); };
  return (
    <>
      <div className="grid">
        {items.map((t) => <TemplateCard key={t.id} template={t} onPreview={show} />)}
      </div>
      <dialog ref={ref} className="modal" onClose={() => setActive(null)}>
        {active && (
          <>
            <h3>{active.name}</h3>
            <ResumePreview template={active} />
            <button className="btn btn-primary" onClick={() => ref.current.close()}>Close</button>
          </>
        )}
      </dialog>
    </>
  );
}
