import React from "react";

export default function XSOARIRAutomation() {
  return (
    <main className="max-w-4xl mx-auto px-8 py-16 space-y-12">
      <section className="rounded-2xl border border-green-400/20 bg-black/60 backdrop-blur p-8 shadow-[0_0_40px_rgba(0,255,160,0.12)]">
        <h1 className="text-4xl font-bold text-green-400">
          Incident Response Automation (Cortex XSOAR)
        </h1>

        <p className="mt-4 text-white/70 text-lg">
          Built playbooks to automate repetitive SOC response steps like enrichment,
          severity routing, notifications, and case workflow for simulated incidents.
        </p>
      </section>

      <section className="space-y-8">
        <Block title="Objective">
          Reduce response time and analyst workload by automating repeatable tasks,
          while keeping decision points clear and auditable.
        </Block>

        <Block title="Environment">
          Cortex XSOAR using simulated alerts and incidents. Playbooks include steps
          for enrichment, tagging, assignment, and notification.
        </Block>

        <Block title="Detection or Task Logic">
          Designed playbooks around common SOC needs: enrich indicators, categorize
          incidents, assign ownership, and route high-severity events for faster
          attention. Used branching logic to handle different incident types.
        </Block>

        <Block title="Investigation or Execution">
          Tested playbooks with sample incidents to confirm correct branching,
          consistent outputs, and safe handling. Verified that enrichment steps run in
          the right order and that notifications trigger only when conditions match.
        </Block>

        <Block title="Outcome">
          Delivered a repeatable workflow that standardizes incident handling and
          removes manual copy-paste tasks, allowing analysts to spend more time on
          investigation.
        </Block>

        <Block title="Improvements">
          Add approval gates for high-impact actions, expand enrichment sources, and
          generate a structured case summary automatically for tickets and handoffs.
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
