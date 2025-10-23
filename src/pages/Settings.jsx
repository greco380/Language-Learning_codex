import LoadingState from '../components/LoadingState';
import { useLearningContext } from '../context/LearningContext';
import { useVocabularyCapture } from '../hooks/useVocabularyCapture';

const fieldStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.35rem'
};

const inputStyle = {
  padding: '0.75rem 1rem',
  borderRadius: '0.75rem',
  border: '1px solid #cbd5f5',
  fontSize: '1rem'
};

const Settings = () => {
  const { isLoading } = useLearningContext();
  const { form, submit, updateField } = useVocabularyCapture();

  if (isLoading) {
    return <LoadingState message="Loading tools" />;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    submit();
  };

  return (
    <section className="card" aria-label="Vocabulary capture">
      <h2 style={{ marginTop: 0 }}>Capture vocabulary from conversations</h2>
      <p style={{ color: '#475569' }}>
        Quickly jot down a new word, phrase, or scenario you encountered today. The Codex will create follow-up
        lessons that reinforce it within 24 hours.
      </p>
      <form onSubmit={handleSubmit} className="grid" style={{ gap: '1rem' }}>
        <label style={fieldStyle}>
          Term
          <input
            required
            value={form.term}
            onChange={(event) => updateField('term', event.target.value)}
            style={inputStyle}
            placeholder="e.g. seguimiento"
          />
        </label>
        <label style={fieldStyle}>
          Translation
          <input
            required
            value={form.translation}
            onChange={(event) => updateField('translation', event.target.value)}
            style={inputStyle}
            placeholder="e.g. follow-up"
          />
        </label>
        <label style={fieldStyle}>
          Conversation context
          <textarea
            required
            value={form.context}
            onChange={(event) => updateField('context', event.target.value)}
            style={{ ...inputStyle, minHeight: '96px', resize: 'vertical' }}
            placeholder="Describe where you heard or want to use the term"
          />
        </label>
        <button type="submit" style={{ alignSelf: 'flex-start' }}>
          Save to Codex
        </button>
      </form>
    </section>
  );
};

export default Settings;
