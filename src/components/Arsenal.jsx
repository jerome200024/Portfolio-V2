import { Monitor, Server, Database, Wrench } from "lucide-react";

const stacks = [
  { title: "Frontend", icon: Monitor, items: ["React", "Flutter", "TypeScript", "Tailwind"] },
  { title: "Backend", icon: Server, items: ["Node.js", "Python", "Express"] },
  { title: "Database", icon: Database, items: ["MongoDB", "Firebase", "PostgreSQL"] },
  { title: "Tools", icon: Wrench, items: ["Git", "Figma", "Postman"] },
];

export const Arsenal = () => {
  return (
    <section className="min-h-screen bg-surface-bright px-6 pt-28 pb-16 md:pt-24 px-margin-mobile">
      <div className="mx-auto text-center mb-16">
        <h2 className="text-4xl font-headline-lg text-white font-semibold uppercase ">
          Technical <span className="text-primary">Arsenal</span>
        </h2>
        <p className="text-on-surface-variant max-w-xl mx-auto mt-4">
          A curated stack of tools and technologies I use to bring digital ideas to life.
        </p>
      </div>

      <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
        {stacks.map((s, i) => {
          const Icon = s.icon;
          return (
            <div
              key={s.title}
              className="glass-card p-8 rounded-3xl flex flex-col items-center text-center"
              style={{ transitionDelay: `${(i + 1) * 0}ms` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 border border-primary/20 group">
                <Icon className="text-primary w-8 h-8 group-hover:rotate-12 transition-transform" />
              </div>
              <h3 className="font-headline-md text-headline-md text-white mb-4">{s.title}</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {s.items.map((it) => (
                  <span key={it} className="px-3 py-1 bg-surface-container rounded-full text-label-sm">
                    {it}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};