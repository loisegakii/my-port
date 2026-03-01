import { useState, useRef } from "react";

const CATEGORIES = ["Web", "Software", "Academic", "Presentation"];

const EMPTY_FORM = {
  title: "",
  category: "Web",
  description: "",
  image: "",
  link: "",
  tech: "",
};

// ── Tiny reusable field ────────────────────────────────────────────────────
function Field({ label, children }) {
  return (
    <div style={{ marginBottom: 18 }}>
      <label
        style={{
          display: "block", marginBottom: 7,
          fontSize: 12, fontWeight: 600,
          color: "#94a3b8", textTransform: "uppercase", letterSpacing: 1,
        }}
      >
        {label}
      </label>
      {children}
    </div>
  );
}

// ── Image uploader with preview ────────────────────────────────────────────
function ImageUploader({ value, onChange }) {
  const fileRef = useRef(null);

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => onChange(ev.target.result); // base64 data URL
    reader.readAsDataURL(file);
  };

  return (
    <div>
      {value ? (
        <div style={{ position: "relative", marginBottom: 10 }}>
          <img
            src={value}
            alt="preview"
            style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover", borderRadius: 10, display: "block" }}
          />
          <button
            type="button"
            onClick={() => onChange("")}
            style={{
              position: "absolute", top: 8, right: 8,
              background: "rgba(239,68,68,0.9)", border: "none",
              color: "white", width: 28, height: 28, borderRadius: "50%",
              cursor: "pointer", fontSize: 13, fontWeight: 700,
            }}
          >
            ✕
          </button>
        </div>
      ) : (
        <div
          onClick={() => fileRef.current?.click()}
          style={{
            border: "2px dashed rgba(14,165,233,0.3)",
            borderRadius: 10, padding: "28px 20px",
            textAlign: "center", cursor: "pointer",
            background: "rgba(14,165,233,0.04)",
            transition: "all 0.2s", marginBottom: 8,
          }}
          onMouseOver={(e) => (e.currentTarget.style.borderColor = "#0ea5e9")}
          onMouseOut={(e)  => (e.currentTarget.style.borderColor = "rgba(14,165,233,0.3)")}
        >
          <div style={{ fontSize: 28, marginBottom: 8 }}>🖼️</div>
          <div style={{ color: "#0ea5e9", fontWeight: 600, fontSize: 14 }}>Click to upload image</div>
          <div style={{ color: "#64748b", fontSize: 12, marginTop: 4 }}>PNG, JPG, WEBP up to 5 MB</div>
        </div>
      )}
      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleFile}
      />
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 6 }}>
        <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.08)" }} />
        <span style={{ color: "#64748b", fontSize: 11 }}>or paste URL</span>
        <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.08)" }} />
      </div>
      <input
        type="url"
        placeholder="https://example.com/image.jpg"
        value={value.startsWith("data:") ? "" : value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: "100%", background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10,
          padding: "10px 14px", color: "#e2e8f0", fontSize: 13,
          outline: "none", marginTop: 8, fontFamily: "inherit",
        }}
      />
    </div>
  );
}

// ── Project card in admin list ─────────────────────────────────────────────
function AdminProjectCard({ project, onEdit, onDelete, catColor }) {
  const [confirming, setConfirming] = useState(false);

  return (
    <div
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 16, overflow: "hidden",
        transition: "all 0.2s",
      }}
    >
      {/* Thumbnail */}
      <div style={{ position: "relative", aspectRatio: "1/1", background: "rgba(255,255,255,0.05)" }}>
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover", display: "block" }}
          />
        ) : (
          <div style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "#475569" }}>
            <div style={{ fontSize: 32, marginBottom: 6 }}>📷</div>
            <div style={{ fontSize: 12 }}>No image yet</div>
          </div>
        )}
        <span
          style={{
            position: "absolute", top: 10, left: 10,
            background: catColor(project.category),
            color: "white", padding: "2px 10px",
            borderRadius: 50, fontSize: 10, fontWeight: 700,
          }}
        >
          {project.category}
        </span>
      </div>

      {/* Info */}
      <div style={{ padding: "16px 18px" }}>
        <div style={{ fontWeight: 700, fontSize: 15, color: "#fff", marginBottom: 4 }}>{project.title}</div>
        {project.tech && (
          <div style={{ fontSize: 11, color: "#0ea5e9", marginBottom: 6, fontWeight: 500 }}>{project.tech}</div>
        )}
        <div style={{ fontSize: 12, color: "#64748b", lineHeight: 1.6, marginBottom: 14,
          display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
          {project.description}
        </div>

        {/* Actions */}
        <div style={{ display: "flex", gap: 8 }}>
          <button
            onClick={() => onEdit(project)}
            style={{
              flex: 1, background: "rgba(14,165,233,0.12)",
              border: "1px solid rgba(14,165,233,0.25)",
              color: "#0ea5e9", borderRadius: 8, padding: "8px 0",
              fontSize: 12, fontWeight: 600, cursor: "pointer",
              fontFamily: "inherit", transition: "all 0.2s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = "rgba(14,165,233,0.22)")}
            onMouseOut={(e)  => (e.currentTarget.style.background = "rgba(14,165,233,0.12)")}
          >
            ✏️ Edit
          </button>

          {confirming ? (
            <div style={{ display: "flex", gap: 6, flex: 1 }}>
              <button
                onClick={() => onDelete(project.id)}
                style={{
                  flex: 1, background: "rgba(239,68,68,0.2)",
                  border: "1px solid rgba(239,68,68,0.4)",
                  color: "#ef4444", borderRadius: 8, padding: "8px 0",
                  fontSize: 11, fontWeight: 700, cursor: "pointer", fontFamily: "inherit",
                }}
              >
                Confirm
              </button>
              <button
                onClick={() => setConfirming(false)}
                style={{
                  flex: 1, background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#94a3b8", borderRadius: 8, padding: "8px 0",
                  fontSize: 11, cursor: "pointer", fontFamily: "inherit",
                }}
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              onClick={() => setConfirming(true)}
              style={{
                background: "rgba(239,68,68,0.08)",
                border: "1px solid rgba(239,68,68,0.2)",
                color: "#ef4444", borderRadius: 8, padding: "8px 12px",
                fontSize: 12, cursor: "pointer", fontFamily: "inherit",
                transition: "all 0.2s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.background = "rgba(239,68,68,0.18)")}
              onMouseOut={(e)  => (e.currentTarget.style.background = "rgba(239,68,68,0.08)")}
            >
              🗑️
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Main AdminPanel component ──────────────────────────────────────────────
export default function AdminPanel({ projects, onAdd, onUpdate, onDelete, onClose }) {
  const [form, setForm]         = useState(EMPTY_FORM);
  const [editingId, setEditingId] = useState(null);
  const [saved, setSaved]       = useState(false);
  const [view, setView]         = useState("list"); // "list" | "form"

  const CAT_COLOR = {
    Web: "#0ea5e9", Academic: "#f59e0b",
    Presentation: "#ec4899", Software: "#10b981",
  };

  const startAdd = () => {
    setForm(EMPTY_FORM);
    setEditingId(null);
    setView("form");
  };

  const startEdit = (project) => {
    setForm({
      title: project.title,
      category: project.category,
      description: project.description,
      image: project.image || "",
      link: project.link || "",
      tech: project.tech || "",
    });
    setEditingId(project.id);
    setView("form");
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (editingId) {
      onUpdate(editingId, form);
    } else {
      onAdd(form);
    }
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      setView("list");
      setForm(EMPTY_FORM);
      setEditingId(null);
    }, 1200);
  };

  const inputStyle = {
    width: "100%", background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10,
    padding: "11px 14px", color: "#e2e8f0", fontSize: 14,
    outline: "none", fontFamily: "inherit", transition: "border-color 0.2s",
  };

  return (
    <div
      style={{
        position: "fixed", inset: 0, zIndex: 200,
        background: "rgba(2,11,24,0.97)",
        backdropFilter: "blur(12px)",
        overflowY: "auto",
      }}
    >
      {/* ── Header ── */}
      <div
        style={{
          position: "sticky", top: 0, zIndex: 10,
          background: "rgba(2,11,24,0.95)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          padding: "0 5%",
        }}
      >
        <div
          style={{
            maxWidth: 1100, margin: "0 auto",
            display: "flex", alignItems: "center",
            justifyContent: "space-between", height: 64,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            {view === "form" && (
              <button
                onClick={() => setView("list")}
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#94a3b8", borderRadius: 8,
                  width: 34, height: 34, cursor: "pointer", fontSize: 16,
                }}
              >
                ←
              </button>
            )}
            <div>
              <div
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: 800, fontSize: 20, color: "#fff",
                }}
              >
                <span
                  style={{
                    background: "linear-gradient(135deg,#0ea5e9,#38bdf8,#7dd3fc)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                  }}
                >
                  Admin
                </span>{" "}
                Panel
              </div>
              <div style={{ fontSize: 11, color: "#475569", marginTop: 1 }}>
                {view === "list"
                  ? `${projects.length} projects · Loise Njeru Portfolio`
                  : editingId ? "Editing project" : "Adding new project"}
              </div>
            </div>
          </div>

          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            {view === "list" && (
              <button
                onClick={startAdd}
                style={{
                  background: "linear-gradient(135deg,#0ea5e9,#0284c7)",
                  border: "none", color: "white",
                  padding: "9px 20px", borderRadius: 50,
                  fontSize: 13, fontWeight: 600, cursor: "pointer",
                  fontFamily: "inherit",
                }}
              >
                + Add Project
              </button>
            )}
            <button
              onClick={onClose}
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#94a3b8", borderRadius: 8,
                width: 34, height: 34, cursor: "pointer", fontSize: 16,
              }}
            >
              ✕
            </button>
          </div>
        </div>
      </div>

      {/* ── Body ── */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "36px 5% 60px" }}>

        {/* ════ LIST VIEW ════ */}
        {view === "list" && (
          <>
            {projects.length === 0 ? (
              <div style={{ textAlign: "center", padding: "80px 0" }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>📂</div>
                <div style={{ color: "#475569", fontSize: 16 }}>No projects yet.</div>
                <button
                  onClick={startAdd}
                  style={{
                    marginTop: 20, background: "linear-gradient(135deg,#0ea5e9,#0284c7)",
                    border: "none", color: "white", padding: "12px 28px",
                    borderRadius: 50, fontSize: 14, fontWeight: 600,
                    cursor: "pointer", fontFamily: "inherit",
                  }}
                >
                  Add Your First Project
                </button>
              </div>
            ) : (
              <>
                {/* Stats bar */}
                <div
                  style={{
                    display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 32,
                  }}
                >
                  {["All", ...CATEGORIES].map((cat) => {
                    const count = cat === "All"
                      ? projects.length
                      : projects.filter((p) => p.category === cat).length;
                    return (
                      <div
                        key={cat}
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          border: `1px solid ${cat === "All" ? "rgba(255,255,255,0.1)" : CAT_COLOR[cat] + "44"}`,
                          borderRadius: 10, padding: "10px 18px",
                          display: "flex", alignItems: "center", gap: 8,
                        }}
                      >
                        {cat !== "All" && (
                          <span
                            style={{
                              width: 8, height: 8, borderRadius: "50%",
                              background: CAT_COLOR[cat], display: "inline-block",
                            }}
                          />
                        )}
                        <span style={{ color: "#94a3b8", fontSize: 12, fontWeight: 600 }}>
                          {cat}
                        </span>
                        <span
                          style={{
                            color: cat === "All" ? "#fff" : CAT_COLOR[cat],
                            fontWeight: 700, fontSize: 14,
                          }}
                        >
                          {count}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Grid */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                    gap: 20,
                  }}
                >
                  {projects.map((project) => (
                    <AdminProjectCard
                      key={project.id}
                      project={project}
                      onEdit={startEdit}
                      onDelete={onDelete}
                      catColor={(cat) => CAT_COLOR[cat] || "#0ea5e9"}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        )}

        {/* ════ FORM VIEW ════ */}
        {view === "form" && (
          <div style={{ maxWidth: 680, margin: "0 auto" }}>
            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 26, fontWeight: 800, color: "#fff",
                marginBottom: 28,
              }}
            >
              {editingId ? "Edit Project" : "Add New Project"}
            </h2>

            {saved && (
              <div
                style={{
                  background: "rgba(16,185,129,0.12)",
                  border: "1px solid rgba(16,185,129,0.25)",
                  borderRadius: 10, padding: "12px 18px",
                  color: "#10b981", fontWeight: 600, fontSize: 14,
                  marginBottom: 24,
                }}
              >
                ✅ Project {editingId ? "updated" : "added"} successfully!
              </div>
            )}

            <form onSubmit={handleSave}>
              <div
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 20, padding: 32, marginBottom: 20,
                }}
              >
                <h3 style={{ color: "#0ea5e9", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, marginBottom: 22 }}>
                  Project Details
                </h3>

                <Field label="Project Title *">
                  <input
                    style={inputStyle}
                    placeholder="e.g. Clinic Management System"
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                    required
                    onFocus={(e) => (e.target.style.borderColor = "#0ea5e9")}
                    onBlur={(e)  => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                  />
                </Field>

                <Field label="Category *">
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {CATEGORIES.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setForm({ ...form, category: cat })}
                        style={{
                          padding: "8px 18px", borderRadius: 50,
                          border: `1px solid ${form.category === cat ? CAT_COLOR[cat] : "rgba(255,255,255,0.12)"}`,
                          background: form.category === cat ? CAT_COLOR[cat] + "22" : "transparent",
                          color: form.category === cat ? CAT_COLOR[cat] : "#64748b",
                          fontSize: 13, fontWeight: 600, cursor: "pointer",
                          fontFamily: "inherit", transition: "all 0.2s",
                        }}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </Field>

                <Field label="Tech Stack / Tools">
                  <input
                    style={inputStyle}
                    placeholder="e.g. React, Django, PostgreSQL"
                    value={form.tech}
                    onChange={(e) => setForm({ ...form, tech: e.target.value })}
                    onFocus={(e) => (e.target.style.borderColor = "#0ea5e9")}
                    onBlur={(e)  => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                  />
                </Field>

                <Field label="Description *">
                  <textarea
                    style={{ ...inputStyle, resize: "vertical" }}
                    placeholder="Describe what this project does, the problem it solves, and the outcome..."
                    rows={4}
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    required
                    onFocus={(e) => (e.target.style.borderColor = "#0ea5e9")}
                    onBlur={(e)  => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                  />
                </Field>

                <Field label="Live Project URL">
                  <input
                    style={inputStyle}
                    type="url"
                    placeholder="https://yourproject.com"
                    value={form.link}
                    onChange={(e) => setForm({ ...form, link: e.target.value })}
                    onFocus={(e) => (e.target.style.borderColor = "#0ea5e9")}
                    onBlur={(e)  => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                  />
                </Field>
              </div>

              {/* Image upload section */}
              <div
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 20, padding: 32, marginBottom: 28,
                }}
              >
                <h3 style={{ color: "#0ea5e9", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, marginBottom: 22 }}>
                  Project Screenshot / Thumbnail
                </h3>
                <ImageUploader
                  value={form.image}
                  onChange={(val) => setForm({ ...form, image: val })}
                />
              </div>

              {/* Buttons */}
              <div style={{ display: "flex", gap: 12 }}>
                <button
                  type="submit"
                  style={{
                    flex: 1,
                    background: "linear-gradient(135deg,#0ea5e9,#0284c7)",
                    border: "none", color: "white",
                    padding: "14px 0", borderRadius: 50,
                    fontSize: 15, fontWeight: 700,
                    cursor: "pointer", fontFamily: "inherit",
                    transition: "all 0.3s",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.boxShadow = "0 8px 30px rgba(14,165,233,0.5)")}
                  onMouseOut={(e)  => (e.currentTarget.style.boxShadow = "none")}
                >
                  {editingId ? "💾 Save Changes" : "🚀 Add Project"}
                </button>
                <button
                  type="button"
                  onClick={() => setView("list")}
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "#94a3b8", padding: "14px 24px",
                    borderRadius: 50, fontSize: 15,
                    cursor: "pointer", fontFamily: "inherit",
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}