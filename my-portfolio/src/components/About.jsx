import FadeIn from "./FadeIn";

const pillars = [
  { icon: "🏆", title: "Results-Driven",     desc: "Every project built around measurable outcomes — rankings, conversions, publication success." },
  { icon: "🔬", title: "Research Precision", desc: "Academic work meets strict scholarly standards with proper methodology and peer-review quality." },
  { icon: "⚡", title: "Modern Tech Stack",  desc: "React, Django, Next.js, WordPress — always the right tool for the job." },
  { icon: "🌍", title: "Global Standards",   desc: "Work delivered to international quality benchmarks with deep academic context understanding." },
];

const tags = ["React & Django", "WordPress Expert", "SEO Strategy", "Academic Research", "Data Analysis", "UX Design"];

export default function About({ dark }) {
  const cBg = dark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.04)";
  const cBd = dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.1)";

  return (
    <section
      id="about"
      style={{
        padding: "96px 5%",
        background: dark ? "rgba(255,255,255,0.015)" : "rgba(0,0,0,0.02)",
      }}
    >
      <div
        className="about-grid"
        style={{
          maxWidth: 1200, margin: "0 auto",
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: 70, alignItems: "center",
        }}
      >
        {/* ── Left card ── */}
        <FadeIn>
          <div
            style={{
              background: "linear-gradient(135deg, rgba(14,165,233,0.11), rgba(139,92,246,0.07))",
              borderRadius: 24, padding: 42,
              border: "1px solid rgba(14,165,233,0.17)",
            }}
          >
            <div style={{ fontSize: 12, letterSpacing: 3, color: "#0ea5e9", fontWeight: 700, marginBottom: 10, textTransform: "uppercase" }}>
              About Me
            </div>
            <h2
              className="syne"
              style={{ fontSize: "clamp(26px,4vw,44px)", fontWeight: 800, color: dark ? "#fff" : "#0f172a", marginBottom: 20, lineHeight: 1.1 }}
            >
              Tech Meets<br /><span className="gradient-text">Academia</span>
            </h2>
            <p style={{ color: "#94a3b8", lineHeight: 1.85, fontSize: 15, marginBottom: 16 }}>
              I am a multi-skilled professional with deep expertise in full-stack web development
              and academic research writing. I build modern, scalable applications using React and
              Django while delivering scholarly papers that meet the highest academic standards.
            </p>
            <p style={{ color: "#94a3b8", lineHeight: 1.85, fontSize: 15, marginBottom: 28 }}>
              Whether you need a conversion-optimised website, a published-quality dissertation,
              or an investor-winning pitch deck — I combine technical precision with creative
              strategy to deliver measurable results.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {tags.map((t) => (
                <span
                  key={t}
                  style={{
                    background: "rgba(14,165,233,0.1)",
                    border: "1px solid rgba(14,165,233,0.2)",
                    borderRadius: 50, padding: "4px 12px",
                    fontSize: 12, color: "#38bdf8", fontWeight: 600,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* ── Right pillars ── */}
        <FadeIn delay={150}>
          <div style={{ display: "grid", gap: 16 }}>
            {pillars.map((item, i) => (
              <FadeIn key={i} delay={i * 65}>
                <div
                  className="service-card"
                  style={{ background: cBg, borderColor: cBd, padding: "18px 22px", borderRadius: 14 }}
                >
                  <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <div style={{ fontSize: 26 }}>{item.icon}</div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 15, color: dark ? "#fff" : "#0f172a", marginBottom: 4 }}>
                        {item.title}
                      </div>
                      <div style={{ color: "#64748b", fontSize: 13, lineHeight: 1.65 }}>
                        {item.desc}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}