import { useEffect, useState } from "react";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 border-b border-on-background/20 px-4 py-4 transition-all duration-300 sm:px-6 lg:px-8 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="relative max-w-5xl mx-auto flex items-center">
        <a href="#hero" className="text-2xl text-on-background font-bold">
          JL
        </a>

        <div className="ml-auto hidden items-center gap-4 md:flex lg:gap-6">
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                href={link.href}
                key={link.href}
                className="px-3 py-2 font-headline text-on-background"
              >
                <span className="nav-link">{link.label}</span>
              </a>
            ))}
          </div>

          <button className="font-bold bg-primary text-on-background border border-border rounded-lg px-4 py-2 cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg hover:shadow-primary-glow/30">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="..."
            >
              Resume
            </a>
          </button>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
          className="ml-auto flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-on-background/20 md:hidden"
        >
          <span className="h-0.5 w-5 rounded-full bg-on-background" />
          <span className="h-0.5 w-5 rounded-full bg-on-background" />
          <span className="h-0.5 w-5 rounded-full bg-on-background" />
        </button>

        {isMobileMenuOpen && (
          <div className="absolute left-0 right-0 top-full mt-4 rounded-lg border border-on-background/20 bg-surface-bright/95 p-4 shadow-lg backdrop-blur-md md:hidden">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  href={link.href}
                  key={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-lg px-3 py-2 font-headline text-on-background hover:bg-on-background/10"
                >
                  {link.label}
                </a>
              ))}

              <button className="mt-2 w-full rounded-lg border border-border bg-primary-container px-4 py-2 font-bold transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg hover:shadow-primary-glow/30">
                <a
                  href="/Jerome_Lora_Resume_latest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="..."
                >
                  Resume
                </a>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
