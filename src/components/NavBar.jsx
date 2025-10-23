import { NavLink } from 'react-router-dom';

const linkStyle = {
  padding: '0.75rem 1rem',
  borderRadius: '9999px',
  fontWeight: 600,
  color: '#0f172a'
};

const NavBar = () => (
  <nav
    style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '0.75rem',
      paddingBottom: '1.25rem'
    }}
  >
    <NavLink
      to="/"
      style={({ isActive }) => ({
        ...linkStyle,
        background: isActive ? 'linear-gradient(135deg, #38bdf8, #14b8a6)' : 'transparent',
        color: isActive ? '#fff' : '#0f172a',
        boxShadow: isActive ? '0 12px 24px rgba(20, 184, 166, 0.25)' : 'none'
      })}
    >
      Dashboard
    </NavLink>
    <NavLink
      to="/library"
      style={({ isActive }) => ({
        ...linkStyle,
        background: isActive ? 'linear-gradient(135deg, #38bdf8, #14b8a6)' : 'transparent',
        color: isActive ? '#fff' : '#0f172a',
        boxShadow: isActive ? '0 12px 24px rgba(20, 184, 166, 0.25)' : 'none'
      })}
    >
      Library
    </NavLink>
    <NavLink
      to="/settings"
      style={({ isActive }) => ({
        ...linkStyle,
        background: isActive ? 'linear-gradient(135deg, #38bdf8, #14b8a6)' : 'transparent',
        color: isActive ? '#fff' : '#0f172a',
        boxShadow: isActive ? '0 12px 24px rgba(20, 184, 166, 0.25)' : 'none'
      })}
    >
      Settings
    </NavLink>
  </nav>
);

export default NavBar;
