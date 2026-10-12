import { NavLink, Outlet } from 'react-router';

import { APP_TITLE as title } from './config';
import { NC } from './naijacloud';

export default function Layout() {
  return (
    <div className="wrap">
      <header className="bar">
        <NavLink to="/" className="brand">
          <span className="mark" aria-hidden="true">
            NC
          </span>
          {title}
        </NavLink>
        <nav>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <span className="live">
            <span className="dot" aria-hidden="true" />
            <span className="label">Live</span>
          </span>
        </nav>
      </header>
      <Outlet />
      <footer className="foot">
        <a className="by" href={NC.home}>
          <span className="mark small" aria-hidden="true">
            NC
          </span>
          <span>
            Deployed on <strong>Naijacloud</strong>
          </span>
        </a>
        <nav aria-label="Naijacloud">
          <a href={NC.dashboard}>Dashboard</a>
          <a href={NC.docs}>Docs</a>
          <a href={NC.templates}>Templates</a>
          <a href={NC.guides}>Guides</a>
        </nav>
      </footer>
    </div>
  );
}
