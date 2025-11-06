import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import SocialLinks from './components/SocialLinks';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Hero />
      <Skills />
      <Experience />
      <SocialLinks />
      <Footer />
    </div>
  );
}

export default App;
