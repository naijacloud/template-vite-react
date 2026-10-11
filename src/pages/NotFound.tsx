import { Link } from 'react-router';

export default function NotFound() {
  return (
    <main className="hero small">
      <h1>Nothing here.</h1>
      <p className="lead">
        This path is not one of the app's routes. <Link to="/">Back home</Link>
      </p>
    </main>
  );
}
