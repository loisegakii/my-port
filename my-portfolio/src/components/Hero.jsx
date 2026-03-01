// Drop profile-photo.png into src/assets/ — Vite will bundle it automatically.
// The line below is the correct import once the file is there:
import profilePhoto from "../assets/profile-photo.png";
import FadeIn from "./FadeIn";
import Counter from "./Counter";

const stats = [
  { label: "Projects Done",   end: 120, suffix: "+" },
  { label: "Happy Clients",   end: 85,  suffix: "+" },
  { label: "Research Papers", end: 40,  suffix: "+" },
  { label: "Years Exp",       end: 5,   suffix: "+" },
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
        className="hero-grid"
        style={{
          maxWidth: 1200, margin: "0 auto", width: "100%",
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: 56, alignItems: "center",
        }}
      >
        {/* ── Left: text ── */}
        <div>
          <FadeIn>
            <div
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "rgba(14,165,233,0.1)",
                border: "1px solid rgba(14,165,233,0.2)",
                borderRadius: 50, padding: "5px 15px",
                marginBottom: 20, fontSize: 12,
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

          <FadeIn delay={100}>
            <h1
              className="playfair"
              style={{
                fontSize: "clamp(32px, 5.5vw, 68px)",
                fontWeight: 800, lineHeight: 1.05,
                marginBottom: 16,
                color: dark ? "#fff" : "#0f172a",
              }}
            >
              Web Dev &<br />
              <span className="gradient-text" style={{ fontStyle: "italic" }}>Research</span>
              <br />Specialist
            </h1>
          </FadeIn>

          <FadeIn delay={200}>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "#94a3b8", marginBottom: 30, maxWidth: 460 }}>
              High-performance web applications &amp; precision academic writing.
              From React &amp; Django to PhD-level research — technical excellence meets scholarly rigour.
            </p>
          </FadeIn>

          <FadeIn delay={300}>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 40 }}>
              <button className="btn-primary" onClick={() => scrollTo("portfolio")}>
                View Portfolio
              </button>
              <button className="btn-outline" onClick={() => scrollTo("contact")}>
                Contact Me
              </button>
              <a
                href="/cv.pdf"
                download
                style={{
                  display: "flex", alignItems: "center", gap: 7,
                  color: "#0ea5e9", fontWeight: 600, fontSize: 13,
                  textDecoration: "none", padding: "11px 0",
                }}
              >
                ⬇ Download CV
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={380}>
            <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="playfair" style={{ fontSize: 24, fontWeight: 800, color: "#0ea5e9" }}>
                    <Counter end={s.end} suffix={s.suffix} />
                  </div>
                  <div style={{ fontSize: 11, color: "#64748b", marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* ── Right: photo ── */}
        <FadeIn delay={180} style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ position: "relative", animation: "float 6s ease-in-out infinite" }}>
            {/* Spinning gradient ring */}
            <div
              style={{
                position: "absolute", inset: -4, borderRadius: 28,
                background: "linear-gradient(135deg, #0ea5e9, #8b5cf6, #0ea5e9, #38bdf8)",
                backgroundSize: "300% 300%",
                animation: "spin-slow 8s linear infinite",
                opacity: 0.65,
              }}
            />
            {/* Photo frame */}
            <div
              style={{
                position: "relative", width: 290, height: 350,
                borderRadius: 24, overflow: "hidden",
                border: "3px solid rgba(14,165,233,0.45)",
                boxShadow: "0 0 50px rgba(14,165,233,0.22), 0 0 100px rgba(14,165,233,0.08)",
              }}
            >
              <img
                src={profilePhoto}
                alt="Professional portrait"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
              />
            </div>
            {/* Badge */}
            <div
              style={{
                position: "absolute", bottom: -18, left: "50%",
                transform: "translateX(-50%)",
                background: "linear-gradient(135deg, #0ea5e9, #0284c7)",
                borderRadius: 12, padding: "8px 20px",
                whiteSpace: "nowrap",
                boxShadow: "0 8px 26px rgba(14,165,233,0.42)",
                fontSize: 12, fontWeight: 700, color: "white",
              }}
            >
              ✨ Open to Freelance
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}