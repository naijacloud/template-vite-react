import { Link } from 'react-router';

export default function NotFound() {
  return (
    <main className="hero small">
      <h1>Page not found</h1>
      <p className="lead">
        <Link to="/">Back home</Link>
      </p>
    </main>
  );
}
