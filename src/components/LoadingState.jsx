const spinnerStyle = {
  width: '48px',
  height: '48px',
  borderRadius: '50%',
  border: '4px solid rgba(14, 165, 233, 0.2)',
  borderTopColor: '#0ea5e9',
  animation: 'spin 0.9s linear infinite'
};

const LoadingState = ({ message = 'Loading' }) => (
  <div style={{ textAlign: 'center', padding: '3rem 0', color: '#0f172a' }}>
    <div style={spinnerStyle} role="status" aria-label={message} />
    <p style={{ marginTop: '1rem', fontWeight: 600 }}>{message}…</p>
  </div>
);

export default LoadingState;
