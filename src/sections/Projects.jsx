import { ExternalLink, Terminal, Rocket } from "lucide-react";

const projects = [
  {
    title: "Clinic System",
    tags: ["React", "API"],
    desc: "Booking and Management System.",
    link: "Live Demo",
    icon: "rocket",
    href: "https://clinic-system-ten-nu.vercel.app/",
    img: "/clinic-system.jpg",
  },
];

const iconMap = {
  external: ExternalLink,
  terminal: Terminal,
  rocket: Rocket,
};

export const Projects = () => {
  return (
    <section id="projects" className="py-section-gap-lg px-margin-mobile">
      <div className="max-w-(--container-container-max) mx-auto mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 reveal">
        <div>
          <h2 className="text-4xl ont-headline-lg  text-white font-semibold uppercase tracking-wide">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-on-surface-variant max-w-xl mt-4">
            A selection of my recent works across IoT, web, and mobile
            ecosystems.
          </p>
        </div>
      </div>

      <div className="max-w-(--container-container-max) mx-auto grid md:grid-cols-2 gap-gutter">
        {projects.length === 0 ? (
          <p className="text-on-surface-variant col-span-2 text-center">
            No projects yet — add yours in the <code>projects</code> array!
          </p>
        ) : (
          projects.map((p, i) => {
            const Icon = iconMap[p.icon] || ExternalLink;
            return (
              <div
                key={p.title}
                className="glass-card rounded-3xl overflow-hidden group reveal"
                style={{ transitionDelay: i % 2 === 1 ? "150ms" : "0ms" }}
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    alt={p.title}
                    src={p.img}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-label-sm text-white"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-headline-md text-headline-md text-white mb-2 group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-on-surface-variant font-body-md text-body-md mb-6">
                    {p.desc}
                  </p>
                  <div className="flex gap-4">
                    <a
                      href={p.href || "#"}
                      className="text-primary font-bold flex items-center gap-1 hover:gap-2 transition-all"
                    >
                      {p.link} <Icon className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
};
