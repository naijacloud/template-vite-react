const facts = [
  ['Build', 'npm run build type-checks and writes the site to dist/.'],
  ['Serve', 'dist/ is served as static files, and any unknown path gets index.html.'],
  ['Config', 'The app name lives in src/config.ts. No environment variables needed.'],
];

export default function About() {
  return (
    <main>
      <section className="hero small">
        <p className="eyebrow">
          <span className="live">Route two</span>
        </p>
        <h1>About this starter</h1>
        <p className="lead">
          This page is rendered by the client router. Refresh it: the server
          sends <code>index.html</code> and React picks the route, so deep
          links work.
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
