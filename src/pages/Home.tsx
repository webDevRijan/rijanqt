import { BookOpen, Server, Database } from "lucide-react";

interface HomeProps {
  onNavigate: (page: string) => void;
}

function Home({ onNavigate }: HomeProps) {
  return (
    <div className="page home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to RijanQT's Website</h1>
          <p className="hero-description">
            The website developed by Rijan R. Palomera to accomplished an
            activity project and escape College.
          </p>
          <button
            className="cta-button"
            onClick={() => onNavigate("resources")}
          >
            View Resources
          </button>
        </div>
      </section>

      <section className="features-section">
        <h2 className="section-title">How It Works</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <Server size={40} />
            </div>
            <h3>Web Server</h3>
            <p>
              The application runs on a web server built with Node.js and
              Express, handling HTTP requests and serving dynamic content.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Database size={40} />
            </div>
            <h3>Data Storage</h3>
            <p>
              Resource metadata is stored in a local JSON file, keeping the data
              self-contained within the application.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <BookOpen size={40} />
            </div>
            <h3>File Server</h3>
            <p>
              Downloadable files are hosted on external file servers (Google
              Drive), demonstrating distributed file storage architecture.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
