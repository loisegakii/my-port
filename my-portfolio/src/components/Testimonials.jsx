import FadeIn from "./FadeIn";

const testimonials = [
  {
    name: "Hadassah",
    role: "Founder, Dasa Hair",
    text: "Loise built us a beautiful online store that truly represents our brand. She understood exactly what we needed and delivered a polished, professional result. Our customers love how easy it is to shop and our sales have grown significantly since launch.",
    color: "#ec4899",
  },
  {
    name: "Fred Makoha",
    role: "German School Online",
    text: "Our language school needed a website that felt trustworthy and modern. Loise delivered exactly that — clean design, easy navigation, and a smooth enrolment process for our students.",
    color: "#0ea5e9",
  },
  {
    name: "Emmanuel Ijai",
    role: "EBM Gym",
    text: "The gym website Loise created for us is exactly what we envisioned. It's energetic, professional, and our members love using it to check schedules and book classes.",
    color: "#10b981",
  },
  {
    name: "Jean Gichuhi",
    role: "Zawadi",
    text: "Loise brought our gifting platform to life beautifully. The user experience is smooth, the design is elegant, and our customers keep complimenting how lovely the site feels.",
    color: "#f59e0b",
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
            <h2 className="playfair" style={{ fontSize: "clamp(28px,5vw,48px)", fontWeight: 800, color: dark ? "#fff" : "#0f172a" }}>
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
                      background: `linear-gradient(135deg, ${t.color || "#0ea5e9"}, ${t.color ? t.color + "99" : "#8b5cf6"})`,
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