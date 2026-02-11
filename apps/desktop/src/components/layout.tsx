import { Outlet } from 'react-router';

import { Footer } from './footer';
import { Header } from './header';

const Layout = () => (
  <>
    <Header title="header" />
    <main className="content">
      <Outlet />
    </main>
    <Footer text="footer" />
  </>
);

export default Layout;
