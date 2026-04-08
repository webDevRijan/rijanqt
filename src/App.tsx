import { useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Resources from './pages/Resources';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'about':
        return <About />;
      case 'resources':
        return <Resources />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="app">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="main-content">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
