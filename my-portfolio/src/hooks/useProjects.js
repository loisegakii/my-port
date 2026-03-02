import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";

const DEFAULT_PROJECTS = [
  {
    title: "Clinic Management System",
    category: "Software",
    description: "A comprehensive clinic management platform built to streamline patient records, appointment scheduling, and billing. Designed to simplify day-to-day operations for healthcare providers with an intuitive dashboard for doctors and admin staff.",
    image: "", link: "#", tech: "React, Django, PostgreSQL",
  },
  {
    title: "German School Online",
    category: "Web",
    description: "A professional e-learning website for a German language school, featuring structured course listings, seamless student enrolment, and an integrated payment system. Built to give students a smooth and trustworthy learning experience online.",
    image: "", link: "#", tech: "WordPress, WooCommerce, SEO",
  },
  {
    title: "EBM Gym Website",
    category: "Web",
    description: "A bold, high-energy website for EBM Gym featuring class schedules, membership plans, trainer profiles, and an online booking system. Fully mobile-responsive and designed to attract and convert new members.",
    image: "", link: "#", tech: "React, Tailwind CSS",
  },
  {
    title: "Dasa Hair",
    category: "Web",
    description: "A sleek e-commerce website for Dasa Hair, a premium hair products brand. Features a full product catalogue, shopping cart, secure checkout, and a visual gallery — making it easy for customers to browse and buy online.",
    image: "", link: "#", tech: "WordPress, WooCommerce",
  },
  {
    title: "Zawadi",
    category: "Web",
    description: "An elegant gifting platform that allows users to browse curated gift collections, personalise their orders, and schedule deliveries for their loved ones. Built with a warm, user-friendly experience at its core.",
    image: "", link: "#", tech: "React, Node.js",
  },
  {
    title: "Hustle Stack",
    category: "Software",
    description: "A productivity and project management tool built for freelancers and small teams. Features task boards, time tracking, and client invoicing — everything needed to manage projects and get paid, all in one place.",
    image: "", link: "#", tech: "React, Django, REST API",
  },
];

export default function useProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading]   = useState(true);

  useEffect(() => { fetchProjects(); }, []);

  async function fetchProjects() {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;

      if (data.length === 0) {
        await seedDefaults();
      } else {
        setProjects(data);
      }
    } catch (err) {
      console.warn("Supabase unavailable, using defaults:", err.message);
      const saved = localStorage.getItem("loise_njeru_projects");
      setProjects(saved ? JSON.parse(saved) : DEFAULT_PROJECTS);
    } finally {
      setLoading(false);
    }
  }

  async function seedDefaults() {
    try {
      const { data, error } = await supabase
        .from("projects")
        .insert(DEFAULT_PROJECTS)
        .select();
      if (error) throw error;
      setProjects(data);
    } catch (err) {
      console.warn("Seed failed:", err.message);
      setProjects(DEFAULT_PROJECTS);
    }
  }

  async function addProject(project) {
    try {
      const { data, error } = await supabase
        .from("projects")
        .insert([project])
        .select()
        .single();
      if (error) throw error;
      setProjects((prev) => [data, ...prev]);
    } catch (err) {
      console.error("Add failed:", err.message);
    }
  }

  async function updateProject(id, updates) {
    try {
      const { error } = await supabase
        .from("projects")
        .update(updates)
        .eq("id", id);
      if (error) throw error;
      setProjects((prev) =>
        prev.map((p) => (p.id === id ? { ...p, ...updates } : p))
      );
    } catch (err) {
      console.error("Update failed:", err.message);
    }
  }

  async function deleteProject(id) {
    try {
      const { error } = await supabase
        .from("projects")
        .delete()
        .eq("id", id);
      if (error) throw error;
      setProjects((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      console.error("Delete failed:", err.message);
    }
  }

  return { projects, loading, addProject, updateProject, deleteProject };
}