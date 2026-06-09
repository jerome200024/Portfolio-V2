import { useState } from "react";
import emailjs from "@emailjs/browser";
import { SocialLinks } from "../components/SocialLinks";

const EMAILJS_SERVICE_ID =
  import.meta.env.VITE_EMAILJS_SERVICE_ID;

const EMAILJS_TEMPLATE_ID =
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

const EMAILJS_PUBLIC_KEY =
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    setErrorMessage("");

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setStatus("error");
      setErrorMessage(
        "Please fill in all required fields."
      );
      return;
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      setStatus("error");
      setErrorMessage(
        "Please enter a valid email address."
      );
      return;
    }

    setStatus("loading");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus("success");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      setStatus("error");
      setErrorMessage(
        "Failed to send message. Please try again later."
      );
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen px-6 pt-28 pb-16 md:pt-24"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* LEFT SIDE */}
          <div className="glass-card flex flex-col rounded-2xl p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-on-surface-variant">
              Get In Touch
            </p>

            <h2
              className="mt-3 text-4xl md:text-5xl font-bold"
              style={{
                fontFamily: "var(--font-headline)",
              }}
            >
              Let's{" "}
              <span className="text-primary">
                Connect
              </span>
            </h2>

            <p className="mt-5 text-on-surface-variant leading-relaxed">
              Have a project in mind or just want to say
              hello? I'm always open to discussing new
              opportunities, collaborations, and
              technical challenges.
            </p>

            <div className="mt-10 space-y-4">

              <div className="flex gap-4 items-center rounded-xl p-3 hover:bg-surface/20 transition-colors">
                <div className="text-primary">
                  📧
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-on-surface-variant">
                    Email
                  </p>

                  <p className="font-medium">
                    jerome.lora21@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-center rounded-xl p-3 hover:bg-surface/20 transition-colors">
                <div className="text-primary">
                  📍
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-on-surface-variant">
                    Location
                  </p>

                  <p className="font-medium">
                    Rizal, Philippines
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-center rounded-xl p-3 hover:bg-surface/20 transition-colors">
                <div className="text-primary">
                  💼
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-on-surface-variant">
                    Availability
                  </p>

                  <p className="font-medium">
                    Open To Work
                  </p>
                </div>
              </div>

            </div>

            <div className="mt-auto pt-8">
              <SocialLinks />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            className="glass-card-no-hover flex flex-col gap-4 rounded-2xl p-8"
          >

            <div>
              <label className="block mb-2 text-sm font-medium">
                Name
              </label>

              <input
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full rounded-xl border border-border bg-surface/20 px-4 py-3 focus:border-primary focus:outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">
                Email
              </label>

              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full rounded-xl border border-border bg-surface/20 px-4 py-3 focus:border-primary focus:outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">
                Subject
              </label>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="How can I help?"
                className="w-full rounded-xl border border-border bg-surface/20 px-4 py-3 focus:border-primary focus:outline-none"
              />
            </div>

            <div className="flex-1">
              <label className="block mb-2 text-sm font-medium">
                Message
              </label>

              <textarea
                required
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className="w-full rounded-xl border border-border bg-surface/20 px-4 py-3 resize-none focus:border-primary focus:outline-none"
              />
            </div>

            {status === "success" && (
              <p className="text-sm text-green-500">
                ✓ Message sent successfully!
              </p>
            )}

            {status === "error" && (
              <p className="text-sm text-red-500">
                {errorMessage}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="primary-glow mt-2 rounded-xl bg-primary px-5 py-3 font-semibold text-white disabled:opacity-50"
            >
              {status === "loading"
                ? "Sending..."
                : "Send Message"}
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};