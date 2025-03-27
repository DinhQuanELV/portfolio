import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex max-w-[1440px] flex-col items-center justify-center">
      <Header />
      <main>
        <Home />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
