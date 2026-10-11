import { NC } from '../naijacloud';

const happened = [
  ['01', 'Built', 'Naijacloud found Vite in package.json, ran the build and kept dist/.'],
  ['02', 'Served', 'The files are served as a static site, so every page loads straight from disk.'],
  ['03', 'Secured', 'Your naijacloud.app address has HTTPS, issued and renewed for you.'],
];

const next = [
  {
    k: 'git push',
    title: 'Connect your own repo',
    body: 'Point this service at your GitHub repository and every push builds and deploys.',
    href: NC.connectRepo,
  },
  {
    k: 'yourname.com',
    title: 'Use your own domain',
    body: 'Add a domain you own. Naijacloud issues its certificate and keeps it renewed.',
    href: NC.domains,
  },
  {
    k: 'postgres://',
    title: 'Add a database',
    body: 'Managed Postgres, MySQL, MongoDB or Redis, joined to your app on a private network.',
    href: NC.databases,
  },
  {
    k: 's3://',
    title: 'Store files',
    body: 'S3-compatible object storage for uploads, images and backups.',
    href: NC.storage,
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <p className="eyebrow">
          <span className="live">
            <span className="dot" aria-hidden="true" />
            Deployed on Naijacloud
          </span>
        </p>
        <h1>
          Your app is live. <em>Now make it yours.</em>
        </h1>
        <p className="lead">
          This is the Vite + React starter, built from its repo and served over
          HTTPS. Open <code>src/pages/Home.tsx</code>, change anything, and
          deploy again.
        </p>
        <div className="actions">
          <a className="btn primary" href={NC.dashboard}>
            Open your dashboard →
          </a>
          <a className="btn quiet" href={NC.staticSites}>
            How static sites work
          </a>
        </div>
      </section>

      <section className="steps" aria-label="What just happened">
        {happened.map(([n, title, body]) => (
          <div className="step" key={n}>
            <span className="n">{n}</span>
            <h3>{title}</h3>
            <p>{body}</p>
          </div>
        ))}
      </section>

      <section className="section">
        <h2>What to do next</h2>
        <p className="sub">Everything your app grows into, in the same place.</p>
        <div className="cards">
          {next.map((c) => (
            <a className="card" href={c.href} key={c.title}>
              <span className="k">{c.k}</span>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
              <span className="go">Read how →</span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
