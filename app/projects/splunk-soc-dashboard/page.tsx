import React from "react";

export default function LinuxHardening() {
  return (
    <main className="max-w-4xl mx-auto px-8 py-16 space-y-12">
      <section className="rounded-2xl border border-green-400/20 bg-black/60 backdrop-blur p-8 shadow-[0_0_40px_rgba(0,255,160,0.12)]">
        <h1 className="text-4xl font-bold text-green-400">
          Linux Security Hardening Lab
        </h1>

        <p className="mt-4 text-white/70 text-lg">
          Hardened a Linux host using SSH best practices, firewall rules, and baseline
          checks, with verification steps to confirm changes.
        </p>
      </section>

      <section className="space-y-8">
        <Block title="Objective">
          Reduce attack surface and improve baseline security posture while
          preserving usability for legitimate administration.
        </Block>

        <Block title="Environment">
          Linux host in a lab environment. Hardening tasks include SSH configuration,
          service review, access controls, and firewall policy.
        </Block>

        <Block title="Detection or Task Logic">
          Prioritized high-impact controls: limit remote access exposure, restrict
          authentication methods, and ensure only required services are reachable.
          Focused on least privilege and secure defaults.
        </Block>

        <Block title="Investigation or Execution">
          Applied SSH hardening (key-based auth, tighter access rules), reviewed and
          disabled unnecessary services, and configured firewall rules. Verified
          changes through connection testing and log review.
        </Block>

        <Block title="Outcome">
          Produced a hardened baseline that demonstrates practical defensive steps
          and a clear validation approach.
        </Block>

        <Block title="Improvements">
          Automate baseline checks with a script, add configuration drift detection,
          and integrate host logs into a centralized monitoring workflow.
        </Block>
      </section>

      <a
        href="/#projects"
        className="inline-block text-green-300 underline underline-offset-4 hover:text-green-200"
      >
        ← Back to projects
      </a>
    </main>
  );
}

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-green-400/15 bg-black/50 backdrop-blur p-6">
      <h2 className="text-xl font-semibold text-green-300 mb-3">{title}</h2>
      <p className="text-white/75 leading-relaxed">{children}</p>
    </div>
  );
}