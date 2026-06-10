import { Arsenal } from "../components/Arsenal";

export const About = () => {
  return (
    <section id="about" className="min-h-screen items-center px-6 pt-28 pb-16 md:pt-24">
      <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2 mb-24">
        <div>
          <h1 className="font-headline text-4xl font-semibold uppercase tracking-wide text-primary pb-24">
            About Me
          </h1>
          <div>
            <p className="leading-7 text-on-surface-variant">
              I'm a junior full-stack developer focused on creating web and
              mobile applications with thoughtful interfaces, reliable
              functionality, and code that is easy to keep improving.
            </p>

            <p className="mt-4 leading-7 text-on-surface-variant">
              I work with React, JavaScript, Node.js, Express, PostgreSQL, and
              Flutter, and I enjoy turning ideas into polished user experiences.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="glass-card rounded-lg border border-border bg-glass p-4">
                <h3 className="font-headline font-semibold text-on-background">
                  Philippines
                </h3>
                <p className="mt-2 text-sm leading-6 text-on-surface-variant">
                  Location
                </p>
              </div>

              <div className="glass-card rounded-lg border border-border bg-glass p-4">
                <h3 className="font-headline font-semibold text-on-background">
                  BSIT
                </h3>
                <p className="mt-2 text-sm leading-6 text-on-surface-variant">
                  Education
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center md:justify-end pt-30">
          <div className="glass-card aspect-video rounded-3xl overflow-hidden relative group">
            <img
              src="computer.jpg"
              alt="Development Setup"
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-surface/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="px-6 py-3 bg-primary text-on-primary-container rounded-full font-bold">
                Curiosity & Craft
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
