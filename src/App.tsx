import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Showcase } from './components/Showcase';
import { Services } from './components/Services';
import { Awards } from './components/Awards';
import { Blog } from './components/Blog';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BlogPost } from './components/BlogPost';
import { Chatbot } from './components/Chatbot';
import { AdminPage } from './pages/AdminPage';
import { LoadingAnimation } from './components/LoadingAnimation';
import PrivacyPolicy from './components/PrivacyPolicy';


function AppContent() {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  // Scroll to top on page load/refresh
  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'services', 'awards', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);





  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  if (isLoading) {
    return <LoadingAnimation />;
  }

  return (
    <Routes>
          <Route path="/" element={
            <div className="min-h-screen bg-white">
              <Navigation 
                activeSection={activeSection} 
                setActiveSection={setActiveSection}
              />
              <Hero onContactClick={scrollToContact} />
              <About />
              <Projects />
              <Showcase />
              <Services />
              <Awards />
              <Blog />
              <FAQ />
              <Contact />
              <Footer />
              <Chatbot />
            </div>
          } />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <Router>
        <AppContent />
      </Router>
    </ErrorBoundary>
  );
}
