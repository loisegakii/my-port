import { useState } from "react";
import FadeIn from "./FadeIn";

// ── Clean SVG icons ────────────────────────────────────────────────────────
const Icons = {
  Email: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  ),
  Location: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  Clock: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  ),
  WhatsApp: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
    </svg>
  ),
  Send: () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m22 2-7 20-4-9-9-4Z"/>
      <path d="M22 2 11 13"/>
    </svg>
  ),
  Check: () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5"/>
    </svg>
  ),
};

const info = [
  { Icon: Icons.Email,    label: "Email",         val: "loisegakii101@gmail.com" },
  { Icon: Icons.Location, label: "Location",      val: "Nairobi, Kenya" },
  { Icon: Icons.Clock,    label: "Response Time", val: "Within 24 hours" },
];

export default function Contact({ dark }) {
  const cBg = dark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.04)";
  const cBd = dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.1)";

  const [form, setForm] = useState({ name: "", email: "", msg: "" });
  const [sent, setSent] = useState(false);

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
              className="playfair"
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
              href="https://wa.me/254703472816"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", gap: 12,
                background: "linear-gradient(135deg, #25d366, #128c7e)",
                borderRadius: 14, padding: "15px 22px",
                textDecoration: "none", color: "white",
                fontWeight: 600, fontSize: 14, marginBottom: 20,
                transition: "transform 0.3s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
              onMouseOut={(e)  => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <Icons.WhatsApp />
              Chat on WhatsApp
            </a>

            {/* Info cards */}
            {info.map(({ Icon, label, val }, i) => (
              <div
                key={i}
                style={{
                  display: "flex", alignItems: "center", gap: 14,
                  padding: "14px 18px", background: cBg,
                  borderRadius: 12, border: `1px solid ${cBd}`,
                  marginBottom: 11, transition: "border-color 0.2s",
                }}
                onMouseOver={(e) => (e.currentTarget.style.borderColor = "rgba(14,165,233,0.3)")}
                onMouseOut={(e)  => (e.currentTarget.style.borderColor = cBd)}
              >
                {/* Icon box */}
                <div
                  style={{
                    width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                    background: "rgba(14,165,233,0.08)",
                    border: "1px solid rgba(14,165,233,0.18)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}
                >
                  <Icon />
                </div>
                <div>
                  <div style={{ fontSize: 11, color: "#64748b", marginBottom: 2, textTransform: "uppercase", letterSpacing: 1 }}>
                    {label}
                  </div>
                  <div style={{ fontWeight: 600, color: dark ? "#e2e8f0" : "#0f172a", fontSize: 14 }}>
                    {val}
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
                  background: "rgba(16,185,129,0.1)",
                  border: "1px solid rgba(16,185,129,0.2)",
                  borderRadius: 10, padding: "12px 16px",
                  marginBottom: 20, color: "#10b981",
                  fontWeight: 600, fontSize: 13,
                  display: "flex", alignItems: "center", gap: 8,
                }}
              >
                <Icons.Check />
                Message sent! I will respond within 24 hours.
              </div>
            )}

            <form onSubmit={onSubmit}>
              {[
                { label: "Full Name",     key: "name",  type: "text",  ph: "Your full name" },
                { label: "Email Address", key: "email", type: "email", ph: "your@email.com" },
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

              <button
                type="submit"
                className="btn-primary"
                style={{
                  width: "100%", fontSize: 15,
                  display: "flex", alignItems: "center",
                  justifyContent: "center", gap: 8,
                }}
              >
                Send Message <Icons.Send />
              </button>
            </form>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}