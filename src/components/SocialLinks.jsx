const GithubIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="currentColor"
  >
    <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.54 2.87 8.39 6.84 9.75.5.09.68-.22.68-.49v-1.9c-2.78.62-3.37-1.22-3.37-1.22-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.85.09-.66.35-1.12.63-1.37-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.29 9.29 0 0 1 12 6.99c.85 0 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.95.68 1.91v2.83c0 .27.18.59.69.49A10.18 10.18 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="currentColor"
  >
    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.35 8h4.3v14H.35V8Zm7.3 0h4.12v1.91h.06c.57-1.09 1.98-2.24 4.08-2.24 4.36 0 5.16 2.87 5.16 6.6V22h-4.3v-6.86c0-1.64-.03-3.74-2.28-3.74-2.28 0-2.63 1.78-2.63 3.62V22h-4.3V8h.09Z" />
  </svg>
);

const socialLinks = [
  {
    href: "https://github.com/jerome200024",
    label: "GitHub",
    icon: GithubIcon,
  },
  {
    href: "https://www.linkedin.com/in/jerome-lora/",
    label: "LinkedIn",
    icon: LinkedinIcon,
  },
];

export const SocialLinks = () => {
  return (
    <div className="flex flex-wrap gap-3">
      {socialLinks.map((link) => {
        const Icon = link.icon;

        return (
          <a
            href={link.href}
            key={link.label}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 font-medium text-on-background transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary"
          >
            <Icon />
            {link.label}
          </a>
        );
      })}
    </div>
  );
};
