import * as React from "react";

type AppData = {
  id: string;
  title: string;
  description: string;
  iconSrc: string;
  iconAlt: string;
  iosAppLink?: string;
  webLink?: string;
  xLink?: string;
  instagramLink?: string;
  tiktokLink?: string;
};

const apps: AppData[] = [
  {
    id: "lofi",
    title: "Lofi",
    description: "Focus Buddy",
    iconSrc: "/lofi.jpg",
    iconAlt: "Lofi Icon",
    webLink: "https://lofi.ai",
    xLink: "https://x.com/lofidotai",
    instagramLink: "http://instagram.com/lofidotai",
    tiktokLink: "http://tiktok.com/@lofidotai",
  },
  {
    id: "hadi",
    title: "Hadi",
    description: "Muslim Buddy",
    iconSrc: "/hadi-icon.jpg",
    iconAlt: "Hadi Icon",
    iosAppLink: "https://apps.apple.com/us/app/hadi-spiritual-muslim-pet/id6749086324",
    webLink: "https://hadi.coralsourcing.com",
    xLink: "https://x.com/hadicamel",
    instagramLink: "https://instagram.com/hadicamel",
    tiktokLink: "https://www.tiktok.com/@hadistudy",
  },
  {
    id: "roadtrip",
    title: "Roadtrip",
    description: "Driving Buddy",
    iconSrc: "/roadtrip.png",
    iconAlt: "Roadtrip Icon",
  },
];

function navigate(path: string) {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

function NavLogo({ size = 28 }: { size?: number }) {
  return (
    <button className="logo-link" onClick={() => navigate("/")} aria-label="Go to home">
      <svg
        className="nav-logo"
        width={size}
        height={size}
        viewBox="0 0 80 80"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Coral logo"
      >
        <rect width="80" height="80" fill="#F5F5F5" />
        <g className="nav-logo-eye nav-logo-eye--wink">
          <rect x="49" y="34" width="9" height="12" rx="4.5" fill="black" />
          <rect x="49" y="34" width="9" height="12" rx="4.5" fill="url(#right-gloss-a)" fillOpacity="0.24" />
          <rect x="49" y="34" width="9" height="12" rx="4.5" fill="url(#right-gloss-b)" fillOpacity="0.8" />
        </g>
        <g className="nav-logo-eye">
          <rect x="22" y="34" width="9" height="12" rx="4.5" fill="black" />
          <rect x="22" y="34" width="9" height="12" rx="4.5" fill="url(#left-gloss-a)" fillOpacity="0.24" />
          <rect x="22" y="34" width="9" height="12" rx="4.5" fill="url(#left-gloss-b)" fillOpacity="0.8" />
        </g>
        <defs>
          <radialGradient id="right-gloss-a" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(55 36) rotate(114) scale(2.1 1.7)">
            <stop stopColor="white" />
            <stop offset="1" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="right-gloss-b" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(50 45) rotate(-25) scale(5 17)">
            <stop stopColor="white" />
            <stop offset="1" stopOpacity="0.5" />
          </radialGradient>
          <radialGradient id="left-gloss-a" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(28 36) rotate(114) scale(2.1 1.7)">
            <stop stopColor="white" />
            <stop offset="1" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="left-gloss-b" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(23 45) rotate(-25) scale(5 17)">
            <stop stopColor="white" />
            <stop offset="1" stopOpacity="0.5" />
          </radialGradient>
        </defs>
      </svg>
    </button>
  );
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="app-shell">
      <header className="site-header">
        <NavLogo />
      </header>
      {children}
      <footer className="site-footer">
        <button onClick={() => navigate("/terms")}>Terms</button>
        <span>and</span>
        <button onClick={() => navigate("/privacy")}>Privacy</button>
      </footer>
    </div>
  );
}

function AppCard({ app }: { app: AppData }) {
  return (
    <button className="app-card" onClick={() => navigate(`/${app.id}`)}>
      <img src={app.iconSrc} alt={app.iconAlt} width={96} height={96} />
      <h2>{app.title}</h2>
      <p>{app.description}</p>
    </button>
  );
}

function HomePage() {
  return (
    <main className="home-page">
      <section className="app-grid" aria-label="Companion apps">
        {apps.map((app) => (
          <AppCard app={app} key={app.id} />
        ))}
      </section>
    </main>
  );
}

function AppDetail({ app }: { app: AppData }) {
  const links = [
    app.iosAppLink && { label: "App Store", href: app.iosAppLink },
    app.webLink && { label: "Website", href: app.webLink },
    app.xLink && { label: "X", href: app.xLink },
    app.instagramLink && { label: "Instagram", href: app.instagramLink },
    app.tiktokLink && { label: "TikTok", href: app.tiktokLink },
  ].filter(Boolean) as Array<{ label: string; href: string }>;

  return (
    <main className="detail-page">
      <section className="hero-section">
        <img className="hero-icon" src={app.iconSrc} alt={app.iconAlt} width={132} height={132} />
        <h1>{app.title}</h1>
        <p>{app.description}</p>
        {links.length > 0 ? (
          <div className="link-row">
            {links.map((link) => (
              <a href={link.href} key={link.label} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        ) : null}
      </section>
    </main>
  );
}

function LegalPage({ type }: { type: "terms" | "privacy" }) {
  const isPrivacy = type === "privacy";
  return (
    <main className="legal-page">
      <article>
        <h1>{isPrivacy ? "Privacy Policy" : "Terms of Service"}</h1>
        <p className="updated">Last updated June 23, 2026</p>
        {isPrivacy ? (
          <>
            <p>
              Coral respects your privacy and collects only the information needed to provide,
              improve, and support our websites, mobile applications, and related services.
            </p>
            <h2>Information We Collect</h2>
            <p>
              We may collect account information, app preferences, device information, usage data,
              and location information when you grant permission for location-aware features.
            </p>
            <h2>How We Use Information</h2>
            <p>
              We use information to provide the Services, personalize app experiences, send requested
              notifications, improve reliability, and respond to support inquiries.
            </p>
            <h2>Contact</h2>
            <p>
              Email <a href="mailto:privacy@coralsourcing.com">privacy@coralsourcing.com</a> with privacy questions.
            </p>
          </>
        ) : (
          <>
            <p>
              By accessing or using Coral websites, mobile applications, and related services,
              you agree to these Terms. If you do not agree, do not use the Services.
            </p>
            <h2>Acceptable Use</h2>
            <p>
              You agree not to misuse the Services, interfere with normal operation, attempt
              unauthorized access, or use the Services in violation of applicable laws.
            </p>
            <h2>Third-Party Services</h2>
            <p>
              The Services may link to third-party websites or services. Coral is not responsible
              for third-party content, policies, or practices.
            </p>
            <h2>Contact</h2>
            <p>
              Questions about these Terms? Contact <a href="mailto:support@coralsourcing.com">support@coralsourcing.com</a>.
            </p>
          </>
        )}
      </article>
    </main>
  );
}

export default function App() {
  const [path, setPath] = React.useState(window.location.pathname);

  React.useEffect(() => {
    const handleRouteChange = () => setPath(window.location.pathname);
    window.addEventListener("popstate", handleRouteChange);
    return () => window.removeEventListener("popstate", handleRouteChange);
  }, []);

  const currentApp = apps.find((app) => `/${app.id}` === path);

  return (
    <Shell>
      {path === "/privacy" ? <LegalPage type="privacy" /> : null}
      {path === "/terms" ? <LegalPage type="terms" /> : null}
      {currentApp ? <AppDetail app={currentApp} /> : null}
      {!currentApp && path !== "/privacy" && path !== "/terms" ? <HomePage /> : null}
    </Shell>
  );
}
