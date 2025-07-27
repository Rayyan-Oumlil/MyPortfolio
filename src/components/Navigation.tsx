import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useScrollProgress } from "../hooks/useScrollProgress";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as 'light' | 'dark') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    }
    return 'light';
  });
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const id = entry.target.getAttribute('id');
              if (id) {
                console.log('Section active:', id);
                setActiveSection(id);
              }
            }
          });
        },
        { threshold: 0.1, rootMargin: '-20% 0px -20% 0px' }
    );
    
    // Debug: vérifier toutes les sections
    navItems.forEach((item) => {
      const el = document.getElementById(item.href);
      console.log(`Section ${item.href}:`, el ? 'Found' : 'NOT FOUND');
      if (el) observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', href: 'hero' },
    { label: 'About', href: 'about' },
    { label: 'Education', href: 'education' },
    { label: 'Courses', href: 'courses' },
    { label: 'Experience', href: 'experience' },
    { label: 'Skills', href: 'skills' },
    { label: "Projects", href: "projects" },
    { label: 'Certifications', href: 'certifications' },
    { label: 'Contact', href: 'contact' },
  ];

  return (
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
              ? 'backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`} style={{ background: isScrolled ? 'hsl(var(--navbar-bg) / 0.95)' : undefined }}>
        <div
            className="fixed top-0 left-0 h-1 bg-primary z-[9999]"
            style={{ width: `${scrollProgress}%` }}
        />
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Empty space - logo removed */}
            <div></div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                  <button
                      key={item.href}
                      onClick={() => scrollToSection(item.href)}
                      className={`transition-colors relative group ${
                          activeSection === item.href
                              ? 'text-white font-semibold'
                              : 'text-muted-foreground hover:text-white'
                      }`}
                  >
                    {item.label}
                    <span
                        className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"/>
                  </button>
              ))}
              {/* Dark/Light Mode Toggle */}
              <button
                onClick={toggleTheme}
                className="ml-4 p-2 rounded-lg bg-card/50 border border-border hover:bg-card/70 transition-colors"
                aria-label="Toggle dark mode"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button
                  variant="glass"
                  onClick={() => scrollToSection('contact')}
                  className="hover:scale-105 transition-transform"
              >
                Let's Talk
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg bg-card/50 backdrop-blur-sm border border-border hover:bg-card/70 transition-colors"
            >
              {isMobileMenuOpen ? (
                  <X className="w-5 h-5"/>
              ) : (
                  <Menu className="w-5 h-5"/>
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
              <div
                  className="md:hidden absolute top-full left-0 right-0 backdrop-blur-md border-b border-border"
                  style={{ background: 'hsl(var(--navbar-bg) / 0.98)' }}>
                <div className="container mx-auto px-6 py-4 space-y-4">
                  {navItems.map((item) => (
                      <button
                          key={item.href}
                          onClick={() => scrollToSection(item.href)}
                          className={`block w-full text-left transition-colors py-2 ${
                              activeSection === item.href
                                  ? 'text-white font-semibold'
                                  : 'text-muted-foreground hover:text-white'
                          }`}
                      >
                        {item.label}
                      </button>
                  ))}
                  {/* Dark/Light Mode Toggle in Mobile Menu */}
                  <div className="pt-4 border-t border-border flex items-center justify-between">
                    <Button
                        variant="glass"
                        onClick={() => scrollToSection('contact')}
                        className="w-auto"
                    >
                      Let's Talk
                    </Button>
                    <button
                      onClick={toggleTheme}
                      className="ml-4 p-2 rounded-lg bg-card/50 border border-border hover:bg-card/70 transition-colors"
                      aria-label="Toggle dark mode"
                    >
                      {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
              </div>
          )}
        </div>
      </nav>
  );
};

export default Navigation;