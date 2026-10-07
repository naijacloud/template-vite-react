import { useState } from 'react';
import { Link } from 'react-router';

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <main>
      <section className="hero">
        <p className="eyebrow">React 19 · Vite · TypeScript</p>
        <h1>A fast single-page app, served as static files.</h1>
        <p className="lead">
          Edit <code>src/pages/Home.tsx</code>. Routes live in{' '}
          <code>src/main.tsx</code>, and any unknown path falls back to{' '}
          <code>index.html</code> so client routing works on refresh.
        </p>
        <div className="actions">
          <button type="button" onClick={() => setCount((c) => c + 1)}>
            Clicked {count} {count === 1 ? 'time' : 'times'}
          </button>
          <Link to="/about" className="ghost">
            Go to the second route →
          </Link>
        </div>
      </section>
    </main>
  );
}
