import { useState } from "react";
import FadeIn from "./FadeIn";

const info = [
  { icon: "📧", label: "Email",         val: "hello@devfolio.com" },
  { icon: "📍", label: "Location",      val: "Nairobi, Kenya" },
  { icon: "⏱",  label: "Response Time", val: "Within 24 hours" },
];

export default function Contact({ dark }) {
  const cBg = dark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.04)";
  const cBd = dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.1)";

  const [form, setForm]   = useState({ name: "", email: "", msg: "" });
  const [sent, setSent]   = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", msg: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section
      id="contact"
      style={{
        padding: "96px 5%",
        background: dark ? "rgba(255,255,255,0.015)" : "rgba(0,0,0,0.02)",
      }}
    >
      <div
        className="contact-grid"
        style={{
          maxWidth: 1200, margin: "0 auto",
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 70,
        }}
      >
        {/* ── Left: info ── */}
        <FadeIn>
          <div>
            <div style={{ fontSize: 12, letterSpacing: 3, color: "#0ea5e9", fontWeight: 700, marginBottom: 10, textTransform: "uppercase" }}>
              Get In Touch
            </div>
            <h2
              className="syne"
              style={{ fontSize: "clamp(26px,4vw,44px)", fontWeight: 800, color: dark ? "#fff" : "#0f172a", marginBottom: 18, lineHeight: 1.1 }}
            >
              Let's Build<br /><span className="gradient-text">Something Great</span>
            </h2>
            <p style={{ color: "#94a3b8", lineHeight: 1.8, marginBottom: 32, fontSize: 15 }}>
              Ready to start? Web application, research paper, or presentation — let's create
              something exceptional together.
            </p>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/254700000000"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", gap: 14,
                background: "linear-gradient(135deg, #25d366, #128c7e)",
                borderRadius: 14, padding: "15px 20px",
                textDecoration: "none", color: "white",
                fontWeight: 600, fontSize: 14, marginBottom: 18,
              }}
            >
              <span style={{ fontSize: 20 }}>💬</span> Chat on WhatsApp
            </a>

            {info.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex", alignItems: "center", gap: 13,
                  padding: "13px 17px", background: cBg,
                  borderRadius: 11, border: `1px solid ${cBd}`,
                  marginBottom: 11,
                }}
              >
                <span style={{ fontSize: 20 }}>{item.icon}</span>
                <div>
                  <div style={{ fontSize: 11, color: "#64748b", marginBottom: 1 }}>{item.label}</div>
                  <div style={{ fontWeight: 600, color: dark ? "#e2e8f0" : "#0f172a", fontSize: 14 }}>
                    {item.val}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* ── Right: form ── */}
        <FadeIn delay={130}>
          <div style={{ background: cBg, borderRadius: 22, padding: 36, border: `1px solid ${cBd}` }}>
            {sent && (
              <div
                style={{
                  background: "rgba(16,185,129,0.12)",
                  border: "1px solid rgba(16,185,129,0.22)",
                  borderRadius: 10, padding: "11px 16px",
                  marginBottom: 18, color: "#10b981",
                  fontWeight: 600, fontSize: 13,
                }}
              >
                ✅ Message sent! I will respond within 24 hours.
              </div>
            )}

            <form onSubmit={onSubmit}>
              {[
                { label: "Full Name",      key: "name",  type: "text",  ph: "Your full name" },
                { label: "Email Address",  key: "email", type: "email", ph: "your@email.com" },
              ].map((f) => (
                <div key={f.key} style={{ marginBottom: 16 }}>
                  <label style={{ display: "block", marginBottom: 6, fontSize: 13, fontWeight: 500, color: "#94a3b8" }}>
                    {f.label}
                  </label>
                  <input
                    className="input-field"
                    type={f.type}
                    placeholder={f.ph}
                    value={form[f.key]}
                    onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                    required
                  />
                </div>
              ))}

              <div style={{ marginBottom: 22 }}>
                <label style={{ display: "block", marginBottom: 6, fontSize: 13, fontWeight: 500, color: "#94a3b8" }}>
                  Message
                </label>
                <textarea
                  className="input-field"
                  placeholder="Tell me about your project, timeline and budget..."
                  rows={5}
                  value={form.msg}
                  onChange={(e) => setForm({ ...form, msg: e.target.value })}
                  required
                  style={{ resize: "vertical" }}
                />
              </div>

              <button type="submit" className="btn-primary" style={{ width: "100%", fontSize: 15 }}>
                Send Message ✉️
              </button>
            </form>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}