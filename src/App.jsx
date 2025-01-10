import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';

function App() {
  return (
    <Router>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <div className="min-h-screen bg-background text-foreground">
          <Navbar />
          <Landing />
          <About />
          <Experience/> 
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;

