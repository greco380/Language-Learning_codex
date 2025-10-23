import { formatPercent } from '../utils/formatters';

const metricStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1.25rem',
  background: '#f1f5f9',
  borderRadius: '1rem'
};

const ProgressSummary = ({ progress }) => (
  <section className="card" aria-label="Learning progress summary">
    <h2 style={{ marginTop: 0 }}>Weekly progress</h2>
    <div className="grid columns-2">
      <div style={metricStyle}>
        <span style={{ fontSize: '2rem', fontWeight: 700 }}>{progress.wordsLearnt}</span>
        <span style={{ color: '#475569' }}>Words mastered</span>
      </div>
      <div style={metricStyle}>
        <span style={{ fontSize: '2rem', fontWeight: 700 }}>{progress.lessonsCompleted}</span>
        <span style={{ color: '#475569' }}>Lessons completed</span>
      </div>
      <div style={metricStyle}>
        <span style={{ fontSize: '2rem', fontWeight: 700 }}>{formatPercent(progress.reviewAccuracy)}</span>
        <span style={{ color: '#475569' }}>Review accuracy</span>
      </div>
      <div style={metricStyle}>
        <span style={{ fontSize: '2rem', fontWeight: 700 }}>{progress.activeMinutes}</span>
        <span style={{ color: '#475569' }}>Active minutes</span>
      </div>
    </div>
  </section>
);

export default ProgressSummary;
