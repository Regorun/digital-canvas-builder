import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import InteractiveBackground from './InteractiveBackground';

const navLinks = [
  { path: '/', label: 'About' },
  { path: '/career', label: 'Career' },
  { path: '/technology', label: 'Technology' },
  { path: '/case-studies', label: 'Case Studies' },
  { path: '/projects', label: 'Projects' },
  { path: '/interests', label: 'Interests' },
  { path: '/goodies', label: 'Goodies' },
  { path: '/contact', label: 'Contact' },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isAbout = location.pathname === '/';

  return (
    <div className="min-h-screen relative">
      <InteractiveBackground />

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <Link to="/" className="font-display text-lg font-bold text-foreground tracking-tight">
            <span className="text-primary">{'<'}</span>JR's Portfolio<span className="text-primary">{'/>'}</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'nav-link-active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile toggle */}
          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 text-foreground">
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
            <div className="px-6 py-4 flex flex-col gap-3">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`nav-link py-2 ${location.pathname === link.path ? 'nav-link-active' : ''}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main */}
      <main className="page-container pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border bg-background/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            All rights reserved. Copyright © 2026
          </p>
          <div className="flex items-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
