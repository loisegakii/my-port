import profilePhoto from "../assets/profile-photo.png";
import FadeIn from "./FadeIn";
import Counter from "./Counter";

const stats = [
  { label: "Projects Done", end: 6,  suffix: "+" },
  { label: "Happy Clients", end: 10, suffix: "+" },
  { label: "Years Exp",     end: 5,  suffix: "+" },
  { label: "Technologies",  end: 8,  suffix: "+" },
];

export default function Hero({ dark, scrollTo }) {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "100px 5% 60px",
        background:
          "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(14,165,233,0.12) 0%, transparent 60%)," +
          "radial-gradient(ellipse 50% 40% at 90% 90%, rgba(139,92,246,0.07) 0%, transparent 60%)",
      }}
    >
      <div
        style={{
          maxWidth: 900, margin: "0 auto", width: "100%",
          display: "flex", flexDirection: "column",
          alignItems: "center", textAlign: "center", gap: 0,
        }}
      >

        {/* ── 1. Headline ── */}
        <FadeIn>
          <h1
            className="playfair"
            style={{
              fontSize: "clamp(36px, 6vw, 76px)",
              fontWeight: 800, lineHeight: 1.05,
              marginBottom: 28,
              color: dark ? "#fff" : "#0f172a",
            }}
          >
            Web Dev &amp;{" "}
            <span className="gradient-text" style={{ fontStyle: "italic" }}>Research</span>
            <br />Specialist
          </h1>
        </FadeIn>

        {/* ── 2. Available badge ── */}
        <FadeIn delay={100}>
          <div
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(14,165,233,0.1)",
              border: "1px solid rgba(14,165,233,0.2)",
              borderRadius: 50, padding: "6px 18px",
              marginBottom: 36, fontSize: 12,
              color: "#38bdf8", fontWeight: 600,
            }}
          >
            <span
              style={{
                width: 7, height: 7, background: "#10b981",
                borderRadius: "50%", display: "inline-block",
                animation: "pulse-dot 2s infinite",
              }}
            />
            Available for New Projects
          </div>
        </FadeIn>

        {/* ── 3. Photo ── */}
        <FadeIn delay={180}>
          <div style={{ position: "relative", animation: "float 6s ease-in-out infinite", marginBottom: 44 }}>
            {/* Spinning gradient ring */}
            <div
              style={{
                position: "absolute", inset: -4, borderRadius: "50%",
                background: "linear-gradient(135deg, #0ea5e9, #8b5cf6, #0ea5e9, #38bdf8)",
                backgroundSize: "300% 300%",
                animation: "spin-slow 8s linear infinite",
                opacity: 0.7,
              }}
            />
            {/* Circular photo frame */}
            <div
              style={{
                position: "relative", width: 200, height: 200,
                borderRadius: "50%", overflow: "hidden",
                border: "4px solid rgba(14,165,233,0.5)",
                boxShadow: "0 0 50px rgba(14,165,233,0.25), 0 0 100px rgba(14,165,233,0.1)",
              }}
            >
              <img
                src={profilePhoto}
                alt="Loise Njeru"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
              />
            </div>
            {/* Badge */}
            <div
              style={{
                position: "absolute", bottom: -14, left: "50%",
                transform: "translateX(-50%)",
                background: "linear-gradient(135deg, #0ea5e9, #0284c7)",
                borderRadius: 20, padding: "5px 14px",
                whiteSpace: "nowrap",
                boxShadow: "0 6px 20px rgba(14,165,233,0.4)",
                fontSize: 11, fontWeight: 700, color: "white",
                display: "flex", alignItems: "center", gap: 5,
              }}
            >
              <svg width="10" height="10" viewBox="0 0 24 24" fill="white">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
              Open to Freelance
            </div>
          </div>
        </FadeIn>

        {/* ── 4. Description ── */}
        <FadeIn delay={260}>
          <p style={{ fontSize: 16, lineHeight: 1.85, color: "#94a3b8", marginBottom: 32, maxWidth: 560 }}>
            High-performance web applications &amp; precision academic writing.
            From React &amp; Django to real-world IT solutions — technical excellence
            meets a results-driven approach.
          </p>
        </FadeIn>

        {/* ── 5. CTA Buttons ── */}
        <FadeIn delay={320}>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center", marginBottom: 44 }}>
            <button className="btn-primary" onClick={() => scrollTo("portfolio")}>
              View Portfolio
            </button>
            <button className="btn-outline" onClick={() => scrollTo("contact")}>
              Contact Me
            </button>
            <a
              href="/LOISE_GAKII_CV.pdf"
              download="Loise_Gakii_CV.pdf"
              style={{
                display: "flex", alignItems: "center", gap: 8,
                color: "#0ea5e9", fontWeight: 600, fontSize: 13,
                textDecoration: "none", padding: "10px 20px",
                border: "1px solid rgba(14,165,233,0.35)",
                borderRadius: 50,
                background: "rgba(14,165,233,0.06)",
                transition: "all 0.3s",
              }}
              onMouseOver={(e) => { e.currentTarget.style.background = "rgba(14,165,233,0.14)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseOut={(e)  => { e.currentTarget.style.background = "rgba(14,165,233,0.06)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download CV
            </a>
          </div>
        </FadeIn>

        {/* ── 6. Stats ── */}
        <FadeIn delay={400}>
          <div
            style={{
              display: "flex", gap: 0, flexWrap: "wrap",
              justifyContent: "center",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 20, overflow: "hidden",
            }}
          >
            {stats.map((s, i) => (
              <div
                key={s.label}
                style={{
                  padding: "22px 36px", textAlign: "center",
                  borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
                }}
              >
                <div className="playfair" style={{ fontSize: 26, fontWeight: 800, color: "#0ea5e9" }}>
                  <Counter end={s.end} suffix={s.suffix} />
                </div>
                <div style={{ fontSize: 11, color: "#64748b", marginTop: 3, whiteSpace: "nowrap" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

      </div>
    </section>
  );
}