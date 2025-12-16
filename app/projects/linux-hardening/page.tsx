import React from "react";

export default function SplunkSOCDashboard() {
  return (
    <main className="max-w-4xl mx-auto px-8 py-16 space-y-12">
      <section className="rounded-2xl border border-green-400/20 bg-black/60 backdrop-blur p-8 shadow-[0_0_40px_rgba(0,255,160,0.12)]">
        <h1 className="text-4xl font-bold text-green-400">
          SIEM SOC Dashboard (Splunk)
        </h1>

        <p className="mt-4 text-white/70 text-lg">
          Built SOC-style dashboards to quickly identify authentication anomalies and
          brute-force patterns, with a simple triage flow and validation steps.
        </p>
      </section>

      <section className="space-y-8">
        <Block title="Objective">
          Create dashboards that help an analyst spot suspicious login behavior fast,
          reduce noise, and support consistent triage decisions.
        </Block>

        <Block title="Environment">
          Splunk with authentication-style logs. Events include failed logins, user
          identifiers, source IP, timestamps, and outcome fields.
        </Block>

        <Block title="Detection or Task Logic">
          Focused on patterns commonly used for credential attacks: repeated failures
          from a single source, high failure counts for a user, and abnormal timing.
          Grouped and summarized by user and source to surface the highest-risk
          clusters first.
        </Block>

        <Block title="Investigation or Execution">
          Validated suspicious clusters by checking whether the activity was
          consistent with user mistakes versus automated attempts. Confirmed
          frequency, spread (one user vs many users), and whether the pattern
          persisted over time.
        </Block>

        <Block title="Outcome">
          Produced dashboards that highlight high-risk authentication behavior in a
          single view, making it easier to prioritize and document investigations.
        </Block>

        <Block title="Improvements">
          Add baselining per user and per subnet, enrich with GeoIP and reputation,
          and create alert rules with tuned thresholds based on observed normal
          behavior.
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
