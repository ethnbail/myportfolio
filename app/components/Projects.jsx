"use client";

import { useState } from "react";

export default function Projects() {
  const projects = [
    {
      title: "SIEM SOC Dashboard (Splunk)",
      body:
        "Dashboards for authentication anomalies and brute-force patterns. Built a simple triage flow with alert context, severity cues, and follow-up steps.",
      tags: ["Splunk", "Dashboards", "Detection", "Triage"],
      slug: "splunk-soc-dashboard",
    },
    {
      title: "Incident Response Automation (Cortex XSOAR)",
      body:
        "Created playbooks to automate repetitive response steps including enrichment, notification, and case workflow for simulated incidents.",
      tags: ["XSOAR", "Automation", "IR", "Playbooks"],
      slug: "xsoar-ir-automation",
    },
    {
      title: "Honeypot Deployment & Analysis",
      body:
        "Deployed honeypots to observe attacker behavior, extract indicators of compromise, and document common scanning and credential attempts.",
      tags: ["Honeypot", "IOCs", "Linux", "Threat Intel"],
      slug: "honeypot-analysis",
    },
    {
      title: "Linux Security Hardening Lab",
      body:
        "Hardened a Linux host using SSH best practices, firewall rules, and baseline checks with validation steps.",
      tags: ["Linux", "Hardening", "SSH", "Firewall"],
      slug: "linux-hardening",
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % projects.length);
  const prev = () => setIndex((i) => (i - 1 + projects.length) % projects.length);

  return (
    <section id="projects">
      <h2 className="text-4xl font-bold mb-10">
        <span className="text-green-400 mr-2">#</span>
        Projects
      </h2>

      <div className="relative">
        {/* Viewport */}
        <div className="overflow-hidden rounded-2xl">
          {/* Track */}
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {projects.map((p) => (
              <div key={p.title} className="w-full shrink-0">
                <div
                  className="h-full flex flex-col rounded-2xl border border-green-400/20 bg-black/60 backdrop-blur p-6
                             shadow-[0_0_30px_rgba(0,255,160,0.10)]
                             hover:shadow-[0_0_55px_rgba(0,255,160,0.18)]
                             hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold text-green-300">{p.title}</h3>
                    <span className="text-xs text-white/40">Lab</span>
                  </div>

                  {/* Body */}
                  <p className="mt-3 text-white/75 leading-relaxed">{p.body}</p>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full border border-green-400/20 bg-green-400/10 text-white/75 text-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Footer pinned to bottom */}
                  <div className="mt-auto pt-6">
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-green-400/30 to-transparent mb-3" />
                    <a
                      href={`/projects/${p.slug}`}
                      className="text-sm text-green-300 hover:text-green-200 underline underline-offset-4"
                    >
                      View write-up →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Left/Right buttons (on sides of the slider) */}
        <button
          type="button"
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2
                     px-3 py-2 rounded-xl border border-green-400/20 bg-black/70 text-white/80
                     hover:text-white hover:border-green-400/40 transition"
          aria-label="Previous project"
        >
          ←
        </button>

        <button
          type="button"
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2
                     px-3 py-2 rounded-xl border border-green-400/20 bg-black/70 text-white/80
                     hover:text-white hover:border-green-400/40 transition"
          aria-label="Next project"
        >
          →
        </button>

        {/* Optional: dots */}
        <div className="mt-5 flex justify-center gap-2">
          {projects.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={`h-2.5 w-2.5 rounded-full border transition ${
                i === index
                  ? "bg-green-400/70 border-green-400/40"
                  : "bg-white/10 border-white/20 hover:bg-white/20"
              }`}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
