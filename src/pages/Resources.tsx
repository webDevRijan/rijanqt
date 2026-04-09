import resourcesData from "../data/resources.json";
import { Download, ExternalLink } from "lucide-react";

interface Resource {
  id: string;
  title: string;
  description: string;
  link: string;
  created_at: string;
}

function Resources() {
  const resources = resourcesData as Resource[];

  return (
    <div className="page resources-page">
      <div className="resources-container">
        <header className="resources-header">
          <h1>Available Resources</h1>
          <p>Download educational materials hosted on my file server</p>
        </header>

        {resources.length === 0 ? (
          <div className="empty-state">
            <p>No resources available at the moment.</p>
          </div>
        ) : (
          <div className="resources-grid">
            {resources.map((resource) => (
              <div key={resource.id} className="resource-card">
                <div className="resource-icon">
                  <Download size={32} />
                </div>
                <h3 className="resource-title">{resource.title}</h3>
                <p className="resource-description">{resource.description}</p>
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="download-button"
                >
                  <span>Download</span>
                  <ExternalLink size={18} />
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Resources;
