import logo from '../assets/logo.svg';

const Header = () => (
  <header
    style={{
      padding: '1.5rem 1rem 1rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.75rem'
    }}
  >
    <img src={logo} alt="Language Learning Codex" style={{ width: '88px', height: '88px' }} />
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ margin: '0', fontSize: '2rem', color: '#0f172a' }}>Language Learning Codex</h1>
      <p style={{ margin: '0.25rem 0 0', color: '#475569' }}>
        Build a personalised curriculum from the words that matter in your everyday conversations.
      </p>
    </div>
  </header>
);

export default Header;
