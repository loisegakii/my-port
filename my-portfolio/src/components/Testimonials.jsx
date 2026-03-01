import FadeIn from "./FadeIn";

const testimonials = [
  {
    name: "Dr. Sarah Okonkwo",
    role: "University Lecturer, Nairobi",
    text: "Exceptional academic writing support. My research paper was published in a peer-reviewed journal. The depth of analysis and citation quality was outstanding.",
  },
  {
    name: "James Mutua",
    role: "CEO, TechStart Kenya",
    text: "Our website went from invisible to page 1 on Google within 8 weeks. The SEO strategy combined with clean design was exactly what we needed.",
  },
  {
    name: "Amina Hassan",
    role: "Marketing Director, GrowthCo",
    text: "The PowerPoint presentations she creates are simply stunning. Our investor pitch secured $2 M in funding — the deck played a huge role.",
  },
  {
    name: "Michael Kamau",
    role: "Entrepreneur",
    text: "Professional, fast, and incredibly talented. Built our full e-commerce platform in 3 weeks, exceeding all expectations.",
  },
];

export default function Testimonials({ dark }) {
  const cBg = dark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.04)";
  const cBd = dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.1)";

  return (
    <section id="testimonials" style={{ padding: "96px 5%" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ fontSize: 12, letterSpacing: 3, color: "#0ea5e9", fontWeight: 700, marginBottom: 10, textTransform: "uppercase" }}>
              Client Love
            </div>
            <h2 className="syne" style={{ fontSize: "clamp(28px,5vw,48px)", fontWeight: 800, color: dark ? "#fff" : "#0f172a" }}>
              What Clients <span className="gradient-text">Say</span>
            </h2>
          </div>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(265px, 1fr))", gap: 20 }}>
          {testimonials.map((t, i) => (
            <FadeIn key={i} delay={i * 65}>
              <div className="testimonial-card" style={{ background: cBg, borderColor: cBd }}>
                <div style={{ fontSize: 16, marginBottom: 12, color: "#f59e0b", letterSpacing: 2 }}>
                  ★★★★★
                </div>
                <p style={{ color: "#94a3b8", lineHeight: 1.85, fontSize: 14, marginBottom: 20, fontStyle: "italic" }}>
                  "{t.text}"
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div
                    style={{
                      width: 42, height: 42, borderRadius: "50%",
                      background: "linear-gradient(135deg, #0ea5e9, #8b5cf6)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 16, fontWeight: 700, color: "white", flexShrink: 0,
                    }}
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14, color: dark ? "#fff" : "#0f172a" }}>{t.name}</div>
                    <div style={{ fontSize: 12, color: "#64748b" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}