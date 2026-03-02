import FadeIn from "./FadeIn";

const pillars = [
  {
    fa:    "fa-solid fa-chart-line",
    title: "Results-Driven",
    desc:  "Every project built around measurable outcomes — rankings, conversions, and publication success.",
    color: "#0ea5e9",
  },
  {
    fa:    "fa-solid fa-microscope",
    title: "Research Precision",
    desc:  "Academic work meets strict scholarly standards with proper methodology and institutional rigour.",
    color: "#8b5cf6",
  },
  {
    fa:    "fa-solid fa-layer-group",
    title: "Modern Tech Stack",
    desc:  "React, Django, WordPress — always the right tool chosen for the right problem.",
    color: "#10b981",
  },
  {
    fa:    "fa-solid fa-bullseye",
    title: "Strategy & Execution",
    desc:  "Growth — business or academic — is built on structure, strategy, and flawless execution.",
    color: "#f59e0b",
  },
];

const tags = [
  "Web Development", "WordPress", "SEO", "E-commerce",
  "Academic Writing", "Thesis & Dissertations", "PowerPoint Design",
];

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
          gap: 70, alignItems: "start",
        }}
      >
        {/* ── Left: bio ── */}
        <FadeIn>
          <div
            style={{
              background: "linear-gradient(135deg, rgba(14,165,233,0.08), rgba(139,92,246,0.05))",
              borderRadius: 24, padding: 42,
              border: "1px solid rgba(14,165,233,0.15)",
            }}
          >
            <div style={{ fontSize: 12, letterSpacing: 3, color: "#0ea5e9", fontWeight: 700, marginBottom: 12, textTransform: "uppercase" }}>
              About Me
            </div>
            <h2
              className="playfair"
              style={{ fontSize: "clamp(26px,4vw,42px)", fontWeight: 800, color: dark ? "#fff" : "#0f172a", marginBottom: 24, lineHeight: 1.1 }}
            >
              Helping brands grow online and <br /><span className="gradient-text" style={{ fontStyle: "italic" }}>Students excel academically</span>
            </h2>

            {/* Intro line */}
            <p style={{ color: "#e2e8f0", lineHeight: 1.9, fontSize: 15, marginBottom: 18, fontWeight: 500 }}>
              I work at the intersection of technology, strategy, and academic excellence.
            </p>

            {/* Web development paragraph */}
            <p style={{ color: "#94a3b8", lineHeight: 1.9, fontSize: 14, marginBottom: 16 }}>
              As a Web Development and Design specialist, I help small businesses build strong,
              scalable digital foundations that convert visitors into customers. From custom web
              applications and WordPress platforms to SEO-structured websites and e-commerce
              integrations, I design systems that do more than look good — they perform. My approach
              combines clean design, optimized architecture, and strategic thinking to ensure
              businesses not only exist online, but thrive online.
            </p>

            {/* Academic paragraph */}
            <p style={{ color: "#94a3b8", lineHeight: 1.9, fontSize: 14, marginBottom: 16 }}>
              Beyond digital solutions, I also support students and researchers in achieving academic
              success. I provide structured, well-researched academic papers, theses, and dissertations
              that meet institutional standards while maintaining clarity, depth, and originality. I also
              create high-impact PowerPoint presentations that communicate complex ideas with precision
              and confidence.
            </p>

            {/* Closing statement */}
            <p style={{ color: "#94a3b8", lineHeight: 1.9, fontSize: 14, marginBottom: 28 }}>
              Whether developing a modern web platform for a growing brand or helping a student refine
              a dissertation — my goal remains the same: deliver excellence, clarity, and measurable
              results. I believe growth — whether business or academic — is built on structure, strategy,
              and execution. And that's exactly what I bring to every project.
            </p>

            {/* Skill tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {tags.map((t) => (
                <span
                  key={t}
                  style={{
                    background: "rgba(14,165,233,0.1)",
                    border: "1px solid rgba(14,165,233,0.2)",
                    borderRadius: 50, padding: "5px 14px",
                    fontSize: 12, color: "#38bdf8", fontWeight: 600,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* ── Right: pillars ── */}
        <FadeIn delay={150}>
          <div style={{ display: "grid", gap: 16 }}>
            {pillars.map((item, i) => (
              <FadeIn key={i} delay={i * 70}>
                <div
                  style={{
                    background: cBg,
                    border: `1px solid ${cBd}`,
                    borderRadius: 16, padding: "20px 24px",
                    transition: "all 0.3s",
                    display: "flex", gap: 16, alignItems: "flex-start",
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.borderColor = item.color + "55"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                  onMouseOut={(e)  => { e.currentTarget.style.borderColor = cBd; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  {/* Icon box */}
                  <div
                    style={{
                      width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                      background: item.color + "18",
                      border: `1px solid ${item.color}35`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}
                  >
                    <i className={item.fa} style={{ fontSize: 18, color: item.color }} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 15, color: dark ? "#fff" : "#0f172a", marginBottom: 5 }}>
                      {item.title}
                    </div>
                    <div style={{ color: "#64748b", fontSize: 13, lineHeight: 1.7 }}>
                      {item.desc}
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