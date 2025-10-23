import Header from './Header';
import NavBar from './NavBar';

const Layout = ({ children }) => (
  <div>
    <Header />
    <NavBar />
    <main>{children}</main>
  </div>
);

export default Layout;
