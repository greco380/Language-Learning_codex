import LessonPlanCard from '../components/LessonPlanCard';
import LoadingState from '../components/LoadingState';
import { useLearningContext } from '../context/LearningContext';
import { useFilteredVocabulary } from '../hooks/useFilteredVocabulary';

const chipStyle = {
  padding: '0.35rem 0.75rem',
  borderRadius: '9999px',
  background: '#e0f2fe',
  color: '#0369a1',
  fontWeight: 600,
  fontSize: '0.75rem'
};

const LessonLibrary = () => {
  const { lessonPlans, vocabulary, isLoading } = useLearningContext();
  const { filteredVocabulary, filter, changeFilter } = useFilteredVocabulary();
  const filterOptions = ['all', 'new', 'learning', 'mastered'];

  if (isLoading) {
    return <LoadingState message="Loading your lesson library" />;
  }

  return (
    <section className="grid" aria-label="Lesson library" style={{ gap: '1rem' }}>
      <div className="card" aria-label="Vocabulary filters" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <div>
          <h2 style={{ margin: '0 0 0.5rem' }}>Focus vocabulary</h2>
          <p style={{ margin: 0, color: '#475569' }}>
            Highlight lessons aligned with the vocabulary you want to revise.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {filterOptions.map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => changeFilter(value)}
              style={{
                ...chipStyle,
                background: filter === value ? 'linear-gradient(135deg, #38bdf8, #14b8a6)' : '#e0f2fe',
                color: filter === value ? '#fff' : '#0369a1'
              }}
            >
              {value === 'all' ? 'All terms' : value.charAt(0).toUpperCase() + value.slice(1)}
            </button>
          ))}
        </div>
        <span style={{ color: '#0f172a', fontWeight: 600 }}>
          {filteredVocabulary.length} terms currently displayed
        </span>
      </div>
      {lessonPlans.map((plan) => {
        const relatedWords = vocabulary.filter((entry) => plan.vocabularyIds.includes(entry.id));
        return (
          <LessonPlanCard
            key={plan.id}
            plan={{ ...plan, summary: `${plan.summary} (${relatedWords.length} focus words)` }}
          />
        );
      })}
      {lessonPlans.length === 0 && <p>You do not have any lesson plans yet. Capture vocabulary to generate one.</p>}
      <div className="card" aria-label="Library hint">
        <h2 style={{ marginTop: 0 }}>Tip</h2>
        <p style={{ color: '#475569' }}>
          Lessons update dynamically based on your captured vocabulary. Add words after real conversations to see
          refreshed drills and listening exercises appear here.
        </p>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <span style={chipStyle}>Role play</span>
          <span style={chipStyle}>Shadowing</span>
          <span style={chipStyle}>Grammar focus</span>
          <span style={chipStyle}>Listening lab</span>
        </div>
      </div>
    </section>
  );
};

export default LessonLibrary;
