import { formatDuration } from '../utils/formatters';

const LessonPlanCard = ({ plan, onStart }) => (
  <article className="card" aria-label={`Lesson ${plan.title}`}>
    <header style={{ marginBottom: '0.75rem' }}>
      <h3 style={{ margin: '0 0 0.25rem', fontSize: '1.25rem' }}>{plan.title}</h3>
      <p style={{ margin: 0, color: '#475569' }}>{plan.topic}</p>
    </header>
    <p style={{ margin: '0 0 0.75rem', color: '#334155' }}>{plan.summary}</p>
    <ul style={{ paddingLeft: '1.25rem', color: '#475569', margin: '0 0 1rem' }}>
      {plan.objectives.map((objective) => (
        <li key={objective}>{objective}</li>
      ))}
    </ul>
    <footer style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span style={{ fontWeight: 600, color: '#0f172a' }}>{formatDuration(plan.estimatedMinutes)}</span>
      <button type="button" onClick={() => onStart?.(plan)}>
        Start lesson
      </button>
    </footer>
  </article>
);

export default LessonPlanCard;
