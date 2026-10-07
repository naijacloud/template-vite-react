import { NavLink, Outlet } from 'react-router';

export const title = import.meta.env.VITE_APP_TITLE || 'My app';

export default function Layout() {
  return (
    <div className="wrap">
      <header className="bar">
        <NavLink to="/" className="brand">
          <span className="logo" aria-hidden="true" />
          {title}
        </NavLink>
        <nav>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}
