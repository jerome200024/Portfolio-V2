export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Brand/Logo Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-primary">Jerome Lora</h3>
            <p className="text-sm text-on-background/70">
              Full Stack Developer
            </p>
          </div>

          {/* Social Links */}
          <div></div>

          {/* Links Section */}
          <div className="text-center md:text-right">
            <div className="mb-4 flex flex-wrap justify-center gap-6 md:justify-end">
              <a
                href="#about"
                className="text-sm text-on-background/70 transition-colors hover:text-primary"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-sm text-on-background/70 transition-colors hover:text-primary"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-sm text-on-background/70 transition-colors hover:text-primary"
              >
                Contact
              </a>
            </div>
            <p className="text-xs text-on-background/50">
              © {currentYear} Jerome Lora. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
