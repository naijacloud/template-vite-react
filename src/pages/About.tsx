const facts = [
  ['Build', 'npm ci && npm run build writes the site to dist/'],
  ['Serve', 'nginx serves dist/ with a fallback to index.html'],
  ['Config', 'The app name lives in src/config.ts'],
];

export default function About() {
  return (
    <main>
      <section className="hero small">
        <p className="eyebrow">Route two</p>
        <h1>About this starter</h1>
        <p className="lead">
          This page is rendered by the client router. Refresh it: the server
          sends <code>index.html</code> and React picks the route.
        </p>
      </section>
      <dl className="facts">
        {facts.map(([k, v]) => (
          <div key={k}>
            <dt>{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>
    </main>
  );
}
