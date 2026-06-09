import { useEffect } from "react";

export default function ParticlesContainer() {
  useEffect(() => {
    const container = document.getElementById("particles");
    if (container && container.childElementCount === 0) {
      for (let i = 0; i < 60; i++) {
        const p = document.createElement("div");
        p.className = "particle";
        const size = Math.random() * 3 + 1;
        p.style.width = `${size}px`;
        p.style.height = `${size}px`;
        p.style.left = `${Math.random() * 100}%`;
        p.style.bottom = `-5%`;
        p.style.animation = `float-particle ${Math.random() * 10 + 10}s linear ${Math.random() * 20}s infinite`;
        container.appendChild(p);
      }
    }
  }, []);

  return <div className="animated-bg" id="particles" />;
}
