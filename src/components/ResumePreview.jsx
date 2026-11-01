// A small drawn resume. Real templates arrive in Phase 6; this stands in for them.
const Bar = ({ w = 100, strong }) => <i className={strong ? 'bar strong' : 'bar'} style={{ width: `${w}%` }} />;
const Block = ({ lines }) => (
  <div className="rp-block">
    <Bar w={34} strong />
    {lines.map((w, i) => <Bar key={i} w={w} />)}
  </div>
);
const Photo = () => <span className="rp-photo" aria-hidden="true" />;

export default function ResumePreview({ template }) {
  const { layout, photo, accent } = template;
  const head = (
    <div className="rp-head">
      <div>
        <b className="rp-name">Ananya Rao</b>
        <span className="rp-title">Sample professional title</span>
      </div>
      {photo && layout !== 'two-col' && <Photo />}
    </div>
  );
  return (
    <div className={`rp rp-${layout}`} style={{ '--accent': accent }} role="img"
      aria-label={`${template.name} preview${photo ? ' with photo' : ''}`}>
      {layout === 'two-col' ? (
        <>
          <aside className="rp-side">
            {photo && <Photo />}
            <Bar w={80} /><Bar w={60} /><Block lines={[90, 70, 80]} />
          </aside>
          <div className="rp-main">{head}<Block lines={[100, 92, 70]} /><Block lines={[96, 88, 100, 60]} /></div>
        </>
      ) : (
        <>
          <div className={layout === 'banner' ? 'rp-banner' : 'rp-plain'}>{head}</div>
          <div className="rp-main"><Block lines={[100, 90]} /><Block lines={[96, 88, 100, 60]} /><Block lines={[90, 70, 84]} /></div>
        </>
      )}
    </div>
  );
}
