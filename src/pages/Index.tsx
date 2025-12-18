import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Certifications from "../components/Certifications";
import Projects from "../components/Projects";
import Hackathons from "../components/Hackathons";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Hackathons />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
