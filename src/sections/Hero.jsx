import { SocialLinks } from "../components/SocialLinks";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center px-6 pt-28 pb-16 md:pt-24"
    >
      <div className="max-w-5xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE */}
        <div>
          <div className="mb-6 inline-flex items-center rounded-full border border-green-400/40 bg-green-400/10 px-4 py-2 text-sm font-medium text-green-300">
            Available for Opportunities
          </div>

          <h1 className="text-5xl font-bold">
            Hi,
            <span className="text-primary/80">I'm Jerome Lora</span>
          </h1>

          <h2 className="mt-4 text-3xl font-bold text-muted-foreground">
            Junior Full-Stack Developer
          </h2>

          <p className="mt-6 text-on-surface-variant mt-4 mb-4">
            I build modern web and mobile applications using React, JavaScript,
            Node.js, Express, PostgreSQL, and Flutter. With expertise in
            full-stack development, I create scalable solutions that combine
            clean code with intuitive user experiences. From API design to
            mobile interfaces, I'm passionate about solving real-world problems
            through technology.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 font-bold border border-border bg-primary-container rounded-lg transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:shadow-lg hover:shadow-primary-glow/30"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="bg-secondary/80 px-6 py-3 border border-border rounded-lg transition-colors duration-300 hover:bg-muted-foreground/50"
            >
              Contact Me
            </a>
          </div>
          <div className="mt-8">
            <SocialLinks />
          </div>
        </div>

        {/* RIGHT SIDE - AVATAR */}
        <div className="flex justify-center md:justify-end">
          <div className="avatar-card" />
          {/* Placeholder for profile picture */}
          <div className="relative rounded-3xl p-1 glass-card avatar-glow w-72 h-72 md:w-96 md:h-96">
            <img
              src="profile.jpg"
              alt="Profile Picture"
              className="profile-image aspect-[4/5] w-full h-full p-2 object-cover cursor-pointer rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
