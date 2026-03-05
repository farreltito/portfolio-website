import React, { useState } from "react";

const Footer: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending
    console.log("Sending message to farrel@example.com:", formState);
    setIsSent(true);
    setTimeout(() => setIsSent(false), 3000);
  };

  return (
    <footer
      id="contact"
      className="bg-yellow-300 border-t-8 border-black pt-12 md:pt-20 pb-8 md:pb-10 px-4"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl md:text-7xl font-black text-center mb-12 md:mb-16 tracking-tighter uppercase">
          LET'S WORK <br className="hidden md:block" />
          <span className="text-blue-600 bg-white px-3 md:px-4 neo-border neo-shadow inline-block mt-2">
            TOGETHER
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 w-full mb-16 md:mb-20">
          {/* Contact Form Section */}
          <div className="bg-white neo-border p-6 md:p-8 neo-shadow relative">
            <div className="absolute -top-5 md:-top-6 left-4 md:left-6 bg-pink-500 text-white px-3 md:px-4 py-1 neo-border font-black text-sm md:text-base">
              SEND A MESSAGE
            </div>
            {isSent ? (
              <div className="h-full flex flex-col items-center justify-center space-y-4 py-8 md:py-10">
                <div className="text-5xl md:text-6xl animate-bounce">🚀</div>
                <h3 className="text-xl md:text-2xl font-black text-center">
                  MESSAGE SENT!
                </h3>
                <p className="font-bold text-sm md:text-base text-center">
                  I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-4 md:space-y-6 pt-4"
              >
                <div>
                  <label className="block font-black mb-1 md:mb-2 text-sm">
                    NAME
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full p-2 md:p-3 neo-border focus:bg-blue-50 focus:outline-none font-bold text-sm md:text-base"
                    placeholder="John Doe"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block font-black mb-1 md:mb-2 text-sm">
                    EMAIL
                  </label>
                  <input
                    required
                    type="email"
                    className="w-full p-2 md:p-3 neo-border focus:bg-blue-50 focus:outline-none font-bold text-sm md:text-base"
                    placeholder="john@example.com"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block font-black mb-1 md:mb-2 text-sm">
                    MESSAGE
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full p-2 md:p-3 neo-border focus:bg-blue-50 focus:outline-none font-bold resize-none text-sm md:text-base"
                    placeholder="Hey Farrel, let's collaborate on..."
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 md:py-4 bg-blue-500 text-white font-black text-lg md:text-xl neo-border neo-shadow-hover transition-all active:translate-x-1 active:translate-y-1 active:neo-shadow-none"
                >
                  SEND TO EMAIL
                </button>
              </form>
            )}
          </div>

          {/* Social & Connect Section */}
          <div className="flex flex-col gap-6 md:gap-8">
            <div className="bg-white neo-border p-6 md:p-8 neo-shadow flex-grow">
              <h3 className="text-xl md:text-2xl font-black mb-6 md:mb-8 border-b-4 border-black pb-2">
                CONNECT
              </h3>
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {/* Email Icon */}
                <a
                  href="mailto:farrel@example.com"
                  className="flex flex-col items-center justify-center p-4 md:p-6 bg-pink-100 neo-border neo-shadow-hover transition-all group"
                >
                  <svg
                    className="w-8 h-8 md:w-10 md:h-10 group-hover:scale-110 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <span className="font-black text-[10px] md:text-xs mt-2 uppercase">
                    EMAIL
                  </span>
                </a>
                {/* GitHub Icon */}
                <a
                  href="https://www.github.com/farreltito/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-4 md:p-6 bg-blue-100 neo-border neo-shadow-hover transition-all group"
                >
                  <svg
                    className="w-8 h-8 md:w-10 md:h-10 group-hover:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span className="font-black text-[10px] md:text-xs mt-2 uppercase">
                    GITHUB
                  </span>
                </a>
                {/* Instagram Icon */}
                <a
                  href="https://www.instagram.com/rrq_lerraf/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-4 md:p-6 bg-yellow-100 neo-border neo-shadow-hover transition-all group"
                >
                  <svg
                    className="w-8 h-8 md:w-10 md:h-10 group-hover:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span className="font-black text-[10px] md:text-xs mt-2 uppercase">
                    INSTAGRAM
                  </span>
                </a>
                {/* Twitter Icon */}
                <a
                  href="https://twitter.com/rrq_lerraf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-4 md:p-6 bg-blue-300 neo-border neo-shadow-hover transition-all group"
                >
                  <svg
                    className="w-8 h-8 md:w-10 md:h-10 group-hover:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  <span className="font-black text-[10px] md:text-xs mt-2 uppercase">
                    TWITTER
                  </span>
                </a>
              </div>
            </div>

            <div className="bg-white neo-border p-6 md:p-8 neo-shadow">
              <h3 className="text-lg md:text-xl font-black mb-4 uppercase">
                LOCATION
              </h3>
              <p className="font-bold flex items-center gap-2 text-sm md:text-base">
                <span className="w-3 h-3 md:w-4 md:h-4 bg-red-500 rounded-full neo-border"></span>
                Jakarta, Indonesia (UTC+7)
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-center pt-8 md:pt-10 border-t-4 border-black font-black text-[10px] md:text-sm text-center md:text-left">
          <p className="mb-4 md:mb-0">
            © 2026 FARREL TITO • BUILT WITH ADRENALINE & PASSION
          </p>
          <div className="flex gap-4 md:gap-6">
            <span className="bg-black text-white px-2 py-0.5">
              LOCAL TIME:{" "}
              {new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
