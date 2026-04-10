import {
  GraduationCap,
  Code,
  Globe,
  Monitor,
  Server,
  Database,
  Palette,
  HardDrive,
} from "lucide-react";

function About() {
  return (
    <div className="page about-page">
      <div className="about-container">
        <section className="about-header">
          <h1>About This Project</h1>
          <p className="subtitle">
            Understanding Web Architecture Through Practice
          </p>
        </section>

        <section className="about-content">
          <div className="about-card">
            <div className="about-icon">
              <GraduationCap size={48} />
            </div>
            <h2>RijanQT's Information</h2>
            <div className="info-grid">
              <div className="info-item">
                <strong>Name:</strong> <span>Rijan R. Palomera</span>
              </div>
              <div className="info-item">
                <strong>Course & Section:</strong>{" "}
                <span>
                  Bachelor of Science in Information Technology (BSIT)-F2
                </span>
              </div>
              <div className="info-item">
                <strong>Subject:</strong>{" "}
                <span>Systems Administration and Maintenance</span>
              </div>
            </div>
          </div>

          <div className="about-card">
            <div className="about-icon">
              <Code size={48} />
            </div>
            <h2>Project Purpose</h2>
            <p>
              This web application serves as a practical demonstration of the
              fundamental concepts of web servers and file servers. It showcases
              how modern web applications separate concerns between:
            </p>
            <ul className="purpose-list">
              <li>
                <Server size={20} style={{ verticalAlign: "middle" }} />{" "}
                <strong>Web Server:</strong> Handles HTTP requests, serves
                dynamic content, and manages application logic through a
                Node.js/Express backend
              </li>
              <li>
                <HardDrive size={20} style={{ verticalAlign: "middle" }} />{" "}
                <strong>File Server:</strong> Stores and delivers static files
                (documents, PDFs, etc.) through external hosting services like
                Google Drive
              </li>
              <li>
                <Database size={20} style={{ verticalAlign: "middle" }} />{" "}
                <strong>Database Server:</strong> Manages structured data with a
                local JSON file containing resource metadata
              </li>
            </ul>
          </div>

          <div className="about-card">
            <div className="about-icon">
              <Globe size={48} />
            </div>
            <h2>Technical Implementation</h2>
            <p>
              The website demonstrates a frontend architecture using local data
              storage:
            </p>
            <ul className="tech-list">
              <li>
                <Monitor size={20} style={{ verticalAlign: "middle" }} />{" "}
                <strong>Frontend:</strong> React with TypeScript for a dynamic
                user interface
              </li>
              <li>
                <Server size={20} style={{ verticalAlign: "middle" }} />{" "}
                <strong>Backend:</strong> No backend required; data is loaded
                directly from a local JSON file
              </li>
              <li>
                <Database size={20} style={{ verticalAlign: "middle" }} />{" "}
                <strong>Database:</strong> Local JSON storage for application
                data persistence
              </li>
              <li>
                <Palette size={20} style={{ verticalAlign: "middle" }} />{" "}
                <strong>Styling:</strong> Pure CSS with responsive design
                principles
              </li>
              <li>
                <HardDrive size={20} style={{ verticalAlign: "middle" }} />{" "}
                <strong>File Storage:</strong> External file server integration
                (simulated with Google Drive links)
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
