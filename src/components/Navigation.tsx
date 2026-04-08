import { Menu, X } from "lucide-react";
import { useState } from "react";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "resources", label: "Resources" },
  ];

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-text">RijanQT's Website</span>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className={`nav-link ${currentPage === item.id ? "active" : ""}`}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
