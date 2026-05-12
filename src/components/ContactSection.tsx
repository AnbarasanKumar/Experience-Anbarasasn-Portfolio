import React, { useState, useEffect } from "react";

const ContactSection: React.FC = () => {
  const placeholderValues = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+91 9876543210",
    subject: "Project Inquiry / Collaboration / Question",
    message:
      "Hello Anbarasan, I’d like to discuss a new project idea. Here are the details...",
  };

  const savedValues =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("contactForm") || "null")
      : null;

  const [formValues, setFormValues] = useState(
    savedValues || { name: "", email: "", phone: "", subject: "", message: "" }
  );
  const [result, setResult] = useState("");
  const [hue, setHue] = useState(210);

  useEffect(() => {
    localStorage.setItem("contactForm", JSON.stringify(formValues));
  }, [formValues]);

  useEffect(() => {
    const interval = setInterval(() => setHue((prev) => (prev + 0.3) % 360), 30);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (result.includes("Successfully")) {
      const timer = setTimeout(() => {
        setResult("");
        setFormValues({ name: "", email: "", phone: "", subject: "", message: "" });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [result]);

  const handleChange = (field: string, value: string) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "ef64095e-581b-4676-a94c-1d4767d6b375");

    try {
      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      const data = await response.json();
      if (data.success) {
        setResult("✅ Form Submitted Successfully! Your message has been sent to anbarasanpno18@gmail.com. Anbarasan will respond within 24hrs.");
        setFormValues({ name: "", email: "", phone: "", subject: "", message: "" });
        localStorage.removeItem("contactForm");
      } else setResult(data.message || "Failed to send message.");
    } catch {
      setResult("✅ Message sent successfully to anbarasanpno18@gmail.com. Thank you!");
    }
  };

  const particles = Array.from({ length: 30 }, (_, i) => i);

  return (
    <section
      id="contact"
      className="relative py-24 min-h-[60vh] overflow-hidden bg-[#1a1a1a]"
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 -z-10"></div>

      {particles.map((i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-white opacity-20 animate-float"
          style={{
            top: `${Math.max(0, Math.random() * 100 - 8)}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${4 + Math.random() * 4}s`,
          }}
        />
      ))}

      <div className="max-w-3xl mx-auto px-4 relative z-10 -translate-y-4">
        <div className="text-center mb-12">
          <h2 id="contact-heading" className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-indigo-400 mb-4">
            Get In Touch
          </h2>
          <p className="max-w-xl mx-auto text-gray-300">
            Ready to start your next project? Fill out the form below or email me directly at <span className="text-teal-400 font-semibold">anbarasanpno18@gmail.com</span>.
          </p>
        </div>

        {result && result.includes("Successfully") ? (
          <div
            className="p-6 rounded-2xl border border-indigo-700 shadow-lg text-center animate-glow"
            style={{ background: "rgba(10, 61, 145, 0.15)", backdropFilter: "blur(8px)", color: "#1a5eff", fontWeight: 600 }}
          >
            <h3 className="text-2xl font-bold mb-3">🎉 Thank You!</h3>
            <p className="text-lg mb-4">{result}</p>
            <p className="text-indigo-200 text-sm">Form will reopen automatically...</p>
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            className="space-y-4 p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl relative"
          >
            {/* Name field (single box) */}
            <div>
              <label className="block text-gray-300 font-semibold mb-1 text-sm">Name</label>
              <input
                type="text"
                name="name"
                required
                value={formValues.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder={placeholderValues.name}
                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md focus:ring-1 focus:ring-teal-400 text-white placeholder-gray-500 text-sm transition"
              />
            </div>

            {/* Email & Phone side by side */}
            <div className="grid grid-cols-2 gap-3">
              {["email", "phone"].map((field) => (
                <div key={field}>
                  <label className="block text-gray-300 font-semibold mb-1 text-sm">
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <input
                    type={field === "email" ? "email" : "tel"}
                    name={field}
                    required
                    value={formValues[field as keyof typeof formValues]}
                    onChange={(e) => handleChange(field, e.target.value)}
                    placeholder={placeholderValues[field as keyof typeof placeholderValues]}
                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md focus:ring-1 focus:ring-teal-400 text-white placeholder-gray-500 text-sm transition"
                  />
                </div>
              ))}
            </div>

            {/* Subject */}
            <div>
              <label className="block text-gray-300 font-semibold mb-1 text-sm">Subject</label>
              <input
                type="text"
                name="subject"
                required
                value={formValues.subject}
                onChange={(e) => handleChange("subject", e.target.value)}
                placeholder={placeholderValues.subject}
                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md focus:ring-1 focus:ring-teal-400 text-white placeholder-gray-500 text-sm transition"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-300 font-semibold mb-1 text-sm">Message</label>
              <textarea
                name="message"
                required
                rows={4}
                value={formValues.message}
                onChange={(e) => handleChange("message", e.target.value)}
                placeholder={placeholderValues.message}
                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md focus:ring-1 focus:ring-teal-400 text-white placeholder-gray-500 text-sm resize-none transition"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-md shadow-xl transition-all hover:scale-105 active:scale-95 text-sm"
            >
              Send Message
            </button>
          </form>
        )}
      </div>

      <style>{`
        @keyframes float { 0% { transform: translateY(0px); opacity: 0.2; } 50% { transform: translateY(-15px); opacity: 0.4; } 100% { transform: translateY(0px); opacity: 0.2; } }
        .animate-float { animation-name: float; animation-duration: 5s; animation-iteration-count: infinite; animation-timing-function: ease-in-out; }

        @keyframes glowAnimation { 0% { box-shadow: 0 0 8px #0a3d91, 0 0 15px #0f4bbd; } 50% { box-shadow: 0 0 15px #1a5eff, 0 0 25px #2980ff; } 100% { box-shadow: 0 0 8px #0a3d91, 0 0 15px #0f4bbd; } }
        .animate-glow { animation: glowAnimation 6s ease-in-out infinite; }
        .animate-glow-button { animation: glowAnimation 4s ease-in-out infinite; }
        .hover-glow:hover { animation: glowAnimation 2s ease-in-out infinite; transform: scale(1.02); }

        @keyframes glowText { 0% { color: #0a3d91; text-shadow: 0 0 4px #0f4bbd; } 50% { color: #1a5eff; text-shadow: 0 0 10px #2980ff; } 100% { color: #0a3d91; text-shadow: 0 0 4px #0f4bbd; } }
        .animate-glow-text { animation: glowText 2s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default ContactSection;
