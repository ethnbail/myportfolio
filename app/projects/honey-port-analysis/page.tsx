import React from "react";

export default function HoneypotAnalysis() {
  return (
    <main className="max-w-4xl mx-auto px-8 py-16 space-y-12">
      <section className="rounded-2xl border border-green-400/20 bg-black/60 backdrop-blur p-8 shadow-[0_0_40px_rgba(0,255,160,0.12)]">
        <h1 className="text-4xl font-bold text-green-400">
          Honeypot Deployment and Analysis
        </h1>

        <p className="mt-4 text-white/70 text-lg">
          Deployed honeypots to observe attacker behavior, capture common scanning
          and credential attempts, and document indicators and patterns.
        </p>
      </section>

      <section className="space-y-8">
        <Block title="Objective">
          Collect real-world attacker behavior and build a repeatable process for
          extracting useful indicators and trends from noisy inbound activity.
        </Block>

        <Block title="Environment">
          Linux-based lab environment with honeypot services and logging. Captured
          inbound connections, request patterns, and authentication attempts.
        </Block>

        <Block title="Detection or Task Logic">
          Watched for scanning behavior, repeated connection attempts, and
          credential-stuffing style patterns. Focused on frequency, source reuse, and
          the types of services targeted.
        </Block>

        <Block title="Investigation or Execution">
          Reviewed logs to identify recurring IPs, common usernames/passwords, and
          request signatures. Grouped events to separate random background noise from
          more persistent behavior.
        </Block>

        <Block title="Outcome">
          Produced a documented set of observed tactics and a list of indicators that
          can be fed into monitoring tools for correlation and alerting.
        </Block>

        <Block title="Improvements">
          Forward logs into a SIEM, add enrichmesnt (GeoIP, ASN, reputation), and build
          correlation rules that connect honeypot activity to broader detection logic.
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