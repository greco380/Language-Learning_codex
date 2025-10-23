import { formatRelativeDate } from '../utils/formatters';

const rowStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: '0.75rem',
  padding: '0.75rem 1rem',
  borderRadius: '0.75rem',
  background: '#f8fafc'
};

const headerStyle = {
  ...rowStyle,
  fontWeight: 700,
  color: '#0f172a',
  background: 'transparent'
};

const VocabularyList = ({ entries }) => (
  <section className="card" aria-label="Recent vocabulary">
    <h2 style={{ marginTop: 0 }}>Recent vocabulary captures</h2>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <div style={headerStyle}>
        <span>Word</span>
        <span>Context</span>
        <span>Added</span>
      </div>
      {entries.map((entry) => (
        <div key={entry.id} style={rowStyle}>
          <span style={{ fontWeight: 600 }}>{entry.term}</span>
          <span style={{ color: '#475569' }}>{entry.context}</span>
          <span style={{ color: '#64748b' }}>{formatRelativeDate(entry.createdAt)}</span>
        </div>
      ))}
      {entries.length === 0 && <p style={{ color: '#64748b' }}>No vocabulary captured yet.</p>}
    </div>
  </section>
);

export default VocabularyList;
