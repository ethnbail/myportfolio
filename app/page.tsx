const CARD =
  "rounded-2xl border border-green-400/20 bg-black/60 backdrop-blur p-6 shadow-[0_0_30px_rgba(0,255,160,0.12)]";

const SOFT =
  "rounded-2xl border border-green-400/15 bg-black/40 backdrop-blur p-6";

const SECTION_CLASS = "scroll-mt-24";

function Divider() {
  return (
    <div className="h-px w-full bg-gradient-to-r from-transparent via-green-400/20 to-transparent" />
  );
}

function SectionTitle({ id, title }: { id: string; title: string }) {
  return (
    <div id={id} className={`${SECTION_CLASS} flex items-center gap-5`}>
      <h2 className="text-4xl font-bold whitespace-nowrap">
        <span className="text-green-400 mr-2">#</span>
        {title}
      </h2>
      <div className="h-[2px] flex-1 bg-green-400/20" />
    </div>
  );
}

function Tag({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1 text-xs text-green-200">
      {children}
    </span>
  );
}

function ProjectCard({
  title,
  desc,
  tags,
}: {
  title: string;
  desc: string;
  tags: string[];
}) {
  return (
    <div className={`${CARD}`}>
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold text-green-300">{title}</h3>
        <span className="text-xs text-white/50">Lab</span>
      </div>

      <p className="mt-3 text-white/75 leading-relaxed">{desc}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>

      <div className="mt-6 text-white/50 text-sm">
        Write-up link coming soon →
      </div>
    </div>


  );
}
function YouTubeSection() {
  // Replace these later with real YouTube video IDs
  const videos = [
    { title: "SOC Alert Triage Walkthrough", id: "VIDEO_ID_1" },
    { title: "SIEM Detection Logic Explained", id: "VIDEO_ID_2" },
    { title: "Blue Team Lab Breakdown", id: "VIDEO_ID_3" },
  ];

  return (
    <section>
      <SectionTitle id="youtube" title="YouTube" />

      <div className="mt-10 grid lg:grid-cols-2 gap-10 items-stretch">
        {/* Channel overview */}
        <div
          className={`${CARD} hover:shadow-[0_0_55px_rgba(0,255,160,0.18)] hover:-translate-y-1 transition-all duration-300`}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-2xl font-semibold text-green-300">
                Cipherstitious
              </h3>
              <p className="mt-2 text-white/70 leading-relaxed">
                Cybersecurity content focused on SOC workflows, SIEM analysis,
                detection reasoning, and practical blue team thinking.
              </p>
            </div>

            <span className="text-xs text-white/50">Channel</span>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <Tag>SOC</Tag>
            <Tag>SIEM</Tag>
            <Tag>Detection</Tag>
            <Tag>Blue Team</Tag>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://youtube.com/@cipherstitious"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl border border-green-400/40 bg-green-400/10 text-green-200 hover:bg-green-400/20 transition-colors"
            >
              Visit Channel
            </a>
          </div>

          <div className="mt-8 text-white/50 text-sm font-mono">
            youtube.com/@Cipherstitious
          </div>
        </div>

        {/* Embedded videos */}
        <div className="space-y-6">
          <div
            className={`${SOFT} hover:shadow-[0_0_45px_rgba(0,255,160,0.14)] hover:-translate-y-1 transition-all duration-300`}
          >
            <h4 className="text-lg font-semibold text-green-300">
              Featured Videos
            </h4>
            <p className="mt-2 text-white/60 text-sm">
              Watch selected videos directly on this site. Video IDs can be
              swapped anytime.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {videos.map((v) => (
              <div
                key={v.title}
                className={`${CARD} p-4 hover:shadow-[0_0_55px_rgba(0,255,160,0.18)] hover:-translate-y-1 transition-all duration-300`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="text-sm font-semibold text-green-200">
                    {v.title}
                  </div>
                  <span className="text-xs text-white/45">Video</span>
                </div>

                <div className="mt-3 aspect-video w-full overflow-hidden rounded-xl border border-green-400/20 bg-black/50">
                  {v.id.startsWith("VIDEO_ID_") ? (
                    <div className="h-full w-full flex items-center justify-center text-white/45 text-sm">
                      Add YouTube video ID
                    </div>
                  ) : (
                    <iframe
                      className="h-full w-full"
                      src={`https://www.youtube.com/embed/${v.id}`}
                      title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-8 py-12 space-y-20">
      {/* HERO / TITLE PAGE */}
      <section className="min-h-[80vh] flex items-center justify-center relative overflow-hidden rounded-3xl border border-green-400/20 bg-black/40 backdrop-blur p-10 shadow-[0_0_60px_rgba(0,255,160,0.10)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,255,160,0.12)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-green-400/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-green-400/10 blur-3xl" />

        <div className="relative z-10 text-center max-w-3xl">
          <div className="inline-block mb-6 px-4 py-1 rounded-full border border-green-400/30 text-green-300 font-mono text-sm">
            $ whoami
          </div>

          <h1 className="text-6xl font-bold tracking-tight text-green-400">
            ETHAN ANTHONY BAILEY
          </h1>

          <p className="mt-4 text-xl text-white/70">
            Cybersecurity Student • Security+ • SOC & SIEM Focus
          </p>

          <div className="mt-10 rounded-2xl border border-green-400/30 bg-black/70 backdrop-blur p-6 shadow-[0_0_40px_rgba(0,255,160,0.25)] text-left font-mono text-sm text-white/80">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-3 h-3 bg-red-400 rounded-full" />
              <span className="w-3 h-3 bg-yellow-400 rounded-full" />
              <span className="w-3 h-3 bg-green-400 rounded-full" />
            </div>

            <p>
              <span className="text-green-400">$</span> ./get_profile.sh
            </p>
            <p className="mt-2">Name: Ethan Anthony Bailey</p>
            <p>Role: Cybersecurity Student</p>
            <p>Focus: SOC Operations, Detection, Automation</p>
            <p>Certifications: CompTIA Security+</p>
            <p className="mt-2">
              Status: Seeking internship / entry-level cyber role
            </p>
            <p className="mt-2 text-green-400">$ _</p>
          </div>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl border border-green-400/40 bg-green-400/10 text-green-200 hover:bg-green-400/20"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl border border-white/20 text-white/80 hover:bg-white/10"
            >
              Contact
            </a>
            <a
              href="https://github.com/ethnbail"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl border border-green-400/25 text-green-200/90 hover:bg-green-400/10"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      <Divider />

{/* ABOUT */}
<section>
  <SectionTitle id="about" title="About Me" />

  <div className="mt-10 grid lg:grid-cols-2 gap-10 items-stretch">
    <div className="space-y-6">
      {/* Main About card */}
      <div
        className={`${CARD} hover:shadow-[0_0_55px_rgba(0,255,160,0.18)] hover:-translate-y-1 transition-all duration-300`}
      >
        <p className="text-lg text-white/80 leading-relaxed">
          Cybersecurity student focused on SOC workflows, SIEM monitoring, and
          security automation through hands-on labs. Security+ certified and
          building job-ready projects around alert triage, detection tuning, and
          incident response playbooks.
        </p>
      </div>

      {/* Quick stats */}
      <div className="grid sm:grid-cols-3 gap-4">
        <div
          className={`${SOFT} text-center hover:shadow-[0_0_45px_rgba(0,255,160,0.14)] hover:-translate-y-1 transition-all duration-300`}
        >
          <div className="text-3xl font-bold text-green-400">Security+</div>
          <div className="mt-2 text-sm text-white/60">Certified</div>
        </div>

        <div
          className={`${SOFT} text-center hover:shadow-[0_0_45px_rgba(0,255,160,0.14)] hover:-translate-y-1 transition-all duration-300`}
        >
          <div className="text-3xl font-bold text-green-400">SOC</div>
          <div className="mt-2 text-sm text-white/60">Blue Team Focus</div>
        </div>

        <div
          className={`${SOFT} text-center hover:shadow-[0_0_45px_rgba(0,255,160,0.14)] hover:-translate-y-1 transition-all duration-300`}
        >
          <div className="text-3xl font-bold text-green-400">SIEM</div>
          <div className="mt-2 text-sm text-white/60">Detection + Triage</div>
        </div>
      </div>

      {/* Supporting note */}
      <div
        className={`${SOFT} hover:shadow-[0_0_45px_rgba(0,255,160,0.14)] hover:-translate-y-1 transition-all duration-300`}
      >
        <p className="text-white/70 leading-relaxed">
          I’m building everything with clean documentation so recruiters can
          quickly see what I did, what I detected, how I validated it, and what
          I would improve next.
        </p>

        {/* subtle divider like certs */}
        <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-green-400/25 to-transparent" />

        <p className="mt-4 text-white/50 text-sm">
      
        </p>
      </div>
    </div>

    {/* Code Window */}
    <div
      className={`${CARD} overflow-hidden h-full hover:shadow-[0_0_60px_rgba(0,255,160,0.18)] hover:-translate-y-1 transition-all duration-300`}
    >
      <div className="flex items-center justify-between px-4 py-3 border-b border-green-400/15">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-400/90" />
          <span className="w-3 h-3 rounded-full bg-yellow-300/90" />
          <span className="w-3 h-3 rounded-full bg-green-400/90" />
        </div>
        <span className="text-xs text-white/60 font-mono">about.ts</span>
      </div>

      <div className="p-5 font-mono text-sm leading-7 text-white/80">
        <div>
          <span className="text-white/60">const</span>{" "}
          <span className="text-green-300">candidate</span>{" "}
          <span className="text-white/60">=</span> {"{"}
        </div>

        <div className="pl-4">
          <div>
            <span className="text-white/60">name:</span>{" "}
            <span className="text-white/90">"Ethan Bailey"</span>,
          </div>
          <div>
            <span className="text-white/60">focus:</span>{" "}
            <span className="text-white/90">
              ["SOC", "SIEM", "Detection", "Automation"]
            </span>
            ,
          </div>
          <div>
            <span className="text-white/60">toolkit:</span>{" "}
            <span className="text-white/90">
              ["Splunk", "Chronicle", "XSOAR", "Linux"]
            </span>
            ,
          </div>
          <div>
            <span className="text-white/60">frameworks:</span>{" "}
            <span className="text-white/90">["NIST", "MITRE ATT&CK"]</span>,
          </div>
          <div>
            <span className="text-white/60">certifications:</span>{" "}
            <span className="text-white/90">
              ["Security+", "Google Cybersecurity"]
            </span>
            ,

  
          </div>
        </div>

        <div>{"}"};</div>

        <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-green-400/25 to-transparent" />
        <div className="mt-4 text-white/45 text-sm">
          
        </div>
      </div>
    </div>
  </div>
</section>

      <Divider />

{/* HOME LAB */}
<section>
  <SectionTitle id="homelab" title="Home Lab Architecture" />

  <div className="mt-12 grid lg:grid-cols-[1.3fr_0.7fr] gap-8 items-stretch">
    {/* LEFT: NETWORK MAP */}
    <div
      className={`${CARD} relative overflow-hidden hover:shadow-[0_0_60px_rgba(0,255,160,0.18)] hover:-translate-y-1 transition-all duration-300`}
    >
      {/* background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,255,160,0.08)_1px,transparent_1px)] bg-[size:32px_32px] opacity-60" />

      <div className="relative">
        <h3 className="text-xl font-semibold text-green-300">
          Virtual SOC Network Topology
        </h3>

        <p className="mt-3 text-white/70 leading-relaxed max-w-2xl">
          Isolated virtual environment designed to simulate attacker behavior,
          network controls, endpoint activity, and centralized detection for SOC
          practice.
        </p>

        {/* MAP */}
        <div className="mt-8 grid grid-cols-3 gap-6 items-center">
          {/* ATTACKER */}
          <div className="rounded-2xl border border-green-400/20 bg-black/60 p-5">
            <div className="flex items-center justify-between">
              <span className="text-green-200 font-semibold">Kali Linux</span>
              <span className="text-xs text-white/50 font-mono">Attacker</span>
            </div>

            <div className="mt-3 text-sm text-white/70">
              Simulated offensive traffic:
              <ul className="mt-2 space-y-1">
                <li>• reconnaissance & scanning</li>
                <li>• authentication attempts</li>
                <li>• payload simulation</li>
              </ul>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <Tag>Nmap</Tag>
              <Tag>Metasploit</Tag>
              <Tag>Burp</Tag>
            </div>
          </div>

          {/* FIREWALL */}
          <div className="flex flex-col items-center gap-3">
            <div className="text-green-400 text-xs font-mono">traffic filtered</div>

            <div className="rounded-2xl border border-green-400/30 bg-emerald-950/40 p-5 w-full">
              <div className="flex items-center justify-between">
                <span className="text-green-200 font-semibold">pfSense</span>
                <span className="text-xs text-white/50 font-mono">Firewall</span>
              </div>

              <div className="mt-3 text-sm text-white/70">
                Network enforcement & logging:
                <ul className="mt-2 space-y-1">
                  <li>• segmentation & zones</li>
                  <li>• allow / deny rules</li>
                  <li>• NAT & traffic logs</li>
                </ul>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <Tag>Rules</Tag>
                <Tag>Logging</Tag>
                <Tag>Segmentation</Tag>
              </div>
            </div>

            <div className="text-green-400 text-xs font-mono">
              logs forwarded
            </div>
          </div>

          {/* DEFENSE */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-green-400/20 bg-black/60 p-5">
              <div className="flex items-center justify-between">
                <span className="text-green-200 font-semibold">Windows VM</span>
                <span className="text-xs text-white/50 font-mono">Endpoint</span>
              </div>

              <div className="mt-3 text-sm text-white/70">
                Event generation & telemetry:
                <ul className="mt-2 space-y-1">
                  <li>• authentication events</li>
                  <li>• process execution</li>
                  <li>• network connections</li>
                </ul>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <Tag>Event Logs</Tag>
                <Tag>Sysmon</Tag>
              </div>
            </div>

            <div className="rounded-2xl border border-green-400/20 bg-black/60 p-5">
              <div className="flex items-center justify-between">
                <span className="text-green-200 font-semibold">SIEM</span>
                <span className="text-xs text-white/50 font-mono">Detection</span>
              </div>

              <div className="mt-3 text-sm text-white/70">
                Centralized monitoring & alerts:
                <ul className="mt-2 space-y-1">
                  <li>• log ingestion</li>
                  <li>• detection rules</li>
                  <li>• alert triage</li>
                </ul>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <Tag>Splunk</Tag>
                <Tag>Chronicle</Tag>
                <Tag>MITRE</Tag>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="mt-8 grid sm:grid-cols-3 gap-3 text-xs text-white/60">
          <div className="rounded-xl border border-green-400/15 bg-black/40 px-4 py-3">
            <span className="text-green-300 font-mono">Input:</span> simulated attacks
          </div>
          <div className="rounded-xl border border-green-400/15 bg-black/40 px-4 py-3">
            <span className="text-green-300 font-mono">Output:</span> alerts & timelines
          </div>
          <div className="rounded-xl border border-green-400/15 bg-black/40 px-4 py-3">
            <span className="text-green-300 font-mono">Goal:</span> SOC decision practice
          </div>
        </div>
      </div>
    </div>

    {/* RIGHT: LEGEND / WHAT THIS PROVES */}
    <div
      className={`${CARD} hover:shadow-[0_0_60px_rgba(0,255,160,0.18)] hover:-translate-y-1 transition-all duration-300`}
    >
      <h3 className="text-xl font-semibold text-green-300">
        What This Lab Demonstrates
      </h3>

      <div className="mt-5 space-y-4 text-white/75">
        <div className="rounded-2xl border border-green-400/15 bg-black/40 p-5">
          <div className="font-semibold text-green-200">End-to-End Visibility</div>
          <p className="mt-2 text-sm">
            From attacker activity through firewall enforcement to endpoint
            telemetry and SIEM alerts.
          </p>
        </div>

        <div className="rounded-2xl border border-green-400/15 bg-black/40 p-5">
          <div className="font-semibold text-green-200">SOC Workflow</div>
          <p className="mt-2 text-sm">
            Alert triage, evidence correlation, MITRE mapping, and response notes.
          </p>
        </div>

        <div className="rounded-2xl border border-green-400/15 bg-black/40 p-5">
          <div className="font-semibold text-green-200">Defensive Thinking</div>
          <p className="mt-2 text-sm">
            Validating detections, tuning noise, and confirming expected network behavior.
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        <Tag>Virtualization</Tag>
        <Tag>Network Security</Tag>
        <Tag>SOC Practice</Tag>
        <Tag>Detection Engineering</Tag>
      </div>

      <div className="mt-6 text-sm text-white/50">
        Detailed write-up: <span className="text-green-200/90">coming soon →</span>
      </div>
    </div>
  </div>
</section>

  
{/* SKILLS */}
<section>
  <SectionTitle id="skills" title="Skills" />

  <div className="mt-10 grid lg:grid-cols-[1.2fr_0.8fr] gap-6 items-stretch">
    {/* Left: Terminal panel */}
    <div
      className={`${CARD} overflow-hidden h-full hover:shadow-[0_0_55px_rgba(0,255,160,0.18)] hover:-translate-y-1 transition-all duration-300`}
    >
      <div className="flex items-center justify-between px-4 py-3 border-b border-green-400/15">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-400/90" />
          <span className="w-3 h-3 rounded-full bg-yellow-300/90" />
          <span className="w-3 h-3 rounded-full bg-green-400/90" />
        </div>
        <span className="text-xs text-white/60 font-mono">skills.sh</span>
      </div>

      <div className="p-6 font-mono text-sm text-white/80 leading-7">
        <p>
          <span className="text-green-400">$</span> cat skills.txt
        </p>

        <div className="mt-4 space-y-6">
          <div>
            <div className="text-green-300">[SOC & Detection]</div>
            <div className="mt-2 flex flex-wrap gap-2">
              <Tag>SIEM Monitoring</Tag>
              <Tag>Log Analysis</Tag>
              <Tag>Alert Triage</Tag>
              <Tag>Investigation</Tag>
              <Tag>MITRE ATT&CK</Tag>
              <Tag>IR Workflow</Tag>
            </div>
          </div>

          <div>
            <div className="text-green-300">[Tools]</div>
            <div className="mt-2 flex flex-wrap gap-2">
              <Tag>Splunk</Tag>
              <Tag>Google Chronicle</Tag>
              <Tag>Cortex XSOAR</Tag>
              <Tag>Honeypots</Tag>
              <Tag>Lab Environments</Tag>
            </div>
          </div>

          <div>
            <div className="text-green-300">[Systems & Concepts]</div>
            <div className="mt-2 flex flex-wrap gap-2">
              <Tag>Linux Hardening</Tag>
              <Tag>Networking</Tag>
              <Tag>NIST CSF</Tag>
              <Tag>Security Automation</Tag>
              <Tag>Baseline Checks</Tag>
            </div>
          </div>

          <p className="mt-2 text-green-400">$ _</p>
        </div>
      </div>
    </div>

    {/* Right: “Focus” callout */}
    <div
      className={`${CARD} h-full flex flex-col hover:shadow-[0_0_55px_rgba(0,255,160,0.18)] hover:-translate-y-1 transition-all duration-300`}
    >
      <h3 className="text-xl font-semibold text-green-300">Current Focus</h3>
      <p className="mt-3 text-white/75 leading-relaxed">
        Building SOC-ready projects that show alert triage, detection logic, and
        repeatable response playbooks with clear documentation and verification steps.
      </p>

      {/* Divider like certs */}
      <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-green-400/30 to-transparent" />

      <div className="mt-6 space-y-5 text-white/70">
        {/* Row 1 */}
        <div className="flex items-center justify-between">
          <span>Detection & Triage</span>
          <span className="text-green-300 font-mono text-xs">primary</span>
        </div>
        <div className="h-2 rounded-full bg-white/10 overflow-hidden">
          <div className="h-full w-[78%] bg-green-400/30 transition-all duration-300 group-hover:w-[78%]" />
        </div>

        {/* Row 2 */}
        <div className="flex items-center justify-between">
          <span>Automation (SOAR)</span>
          <span className="text-green-300 font-mono text-xs">building</span>
        </div>
        <div className="h-2 rounded-full bg-white/10 overflow-hidden">
          <div className="h-full w-[58%] bg-green-400/25 transition-all duration-300" />
        </div>

        {/* Row 3 */}
        <div className="flex items-center justify-between">
          <span>Linux Hardening</span>
          <span className="text-green-300 font-mono text-xs">supporting</span>
        </div>
        <div className="h-2 rounded-full bg-white/10 overflow-hidden">
          <div className="h-full w-[62%] bg-green-400/20 transition-all duration-300" />
        </div>
      </div>

      {/* Footer pinned (nice spacing) */}
      <div className="mt-auto pt-6 text-sm text-white/45">
        Updated as I build new SOC labs →
      </div>
    </div>
  </div>
</section>

{/* PROJECTS */}
<section id="projects">
  <h2 className="text-4xl font-bold mb-10">
    <span className="text-green-400 mr-2">#</span>
    Projects
  </h2>

  <div className="grid md:grid-cols-2 gap-6 items-stretch">
    {[
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
    ].map((p) => (
      <div
        key={p.title}
        className="h-full flex flex-col rounded-2xl border border-green-400/20 bg-black/60 backdrop-blur p-6 shadow-[0_0_30px_rgba(0,255,160,0.10)] hover:shadow-[0_0_55px_rgba(0,255,160,0.18)] hover:-translate-y-1 transition-all duration-300"
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold text-green-300">
            {p.title}
          </h3>
          <span className="text-xs text-white/40">Lab</span>
        </div>

        {/* Body */}
        <p className="mt-3 text-white/75 leading-relaxed">
          {p.body}
        </p>

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
    ))}
  </div>
</section>


      <Divider />

  <YouTubeSection />
 

{/* CERTIFICATIONS */}
<section>
  <SectionTitle id="certifications" title="Certifications" />

  <div className="mt-10 grid md:grid-cols-2 gap-6 items-stretch">
    {/* CompTIA Security+ */}
    <div className="h-full flex flex-col rounded-2xl border border-green-400/20 bg-emerald-950/40 backdrop-blur p-8 shadow-[0_0_40px_rgba(0,255,160,0.10)] hover:shadow-[0_0_55px_rgba(0,255,160,0.18)] hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-start gap-6">
        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl">
          🛡️
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="inline-flex items-center rounded-full border border-green-400/25 bg-green-400/10 px-3 py-1 text-xs text-green-200">
              CompTIA
            </span>
            <span className="inline-flex items-center rounded-full border border-green-400/25 bg-green-400/10 px-3 py-1 text-xs text-green-200">
              Enterprise Security
            </span>
          </div>

          <h3 className="mt-4 text-2xl font-semibold text-white">
            CompTIA Security+
          </h3>

          <p className="mt-4 text-white/70 leading-relaxed">
            Learned the core building blocks of enterprise security: how threats
            happen, how defenses are designed, and how teams respond. Covered
            identity concepts, secure networking basics, risk management, and
            incident response workflow.
          </p>

          <div className="mt-6 grid sm:grid-cols-2 gap-2 text-white/70">
            <div>• Threats & vulnerabilities</div>
            <div>• Identity & access basics</div>
            <div>• Controls & hardening</div>
            <div>• Incident response workflow</div>
          </div>
        </div>
      </div>

      {/* Divider + Earned */}
      <div className="mt-auto pt-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-green-400/30 to-transparent mb-4" />
        <span className="text-white/50 text-sm">Earned: 2025</span>
      </div>
    </div>

    {/* Google Cybersecurity */}
    <div className="h-full flex flex-col rounded-2xl border border-green-400/20 bg-emerald-950/40 backdrop-blur p-8 shadow-[0_0_40px_rgba(0,255,160,0.10)] hover:shadow-[0_0_55px_rgba(0,255,160,0.18)] hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-start gap-6">
        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl">
          🔎
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="inline-flex items-center rounded-full border border-green-400/25 bg-green-400/10 px-3 py-1 text-xs text-green-200">
              Google
            </span>
            <span className="inline-flex items-center rounded-full border border-green-400/25 bg-green-400/10 px-3 py-1 text-xs text-green-200">
              SOC Foundations
            </span>
          </div>

          <h3 className="mt-4 text-2xl font-semibold text-white">
            Google Cybersecurity Professional
          </h3>

          <p className="mt-4 text-white/70 leading-relaxed">
            Built practical SOC fundamentals: how to think through alerts,
            document incidents, and follow escalation workflows. Reinforced
            security concepts with hands-on exercises and repeatable processes.
          </p>

          <div className="mt-6 grid sm:grid-cols-2 gap-2 text-white/70">
            <div>• SOC workflow & escalation</div>
            <div>• Alert triage mindset</div>
            <div>• Incident documentation</div>
            <div>• Security tooling basics</div>
          </div>
        </div>
      </div>

      {/* Divider + Earned */}
      <div className="mt-auto pt-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-green-400/30 to-transparent mb-4" />
        <span className="text-white/50 text-sm">Earned: 2025</span>
      </div>
    </div>
  </div>
</section>


      <Divider />

      {/* EDUCATION (Timeline style) */}
<section>
  <SectionTitle id="education" title="Education" />

  <div className="mt-14 relative max-w-5xl mx-auto">
    {/* Center line */}
    <div className="absolute left-1/2 top-0 h-full w-px bg-green-400/25" />

    {/* CSUSB (left) */}
    <div className="relative mb-20 flex items-center">
      <div className="w-1/2 pr-10 text-right">
        <div
          className={`${CARD} hover:-translate-y-1 hover:shadow-[0_0_60px_rgba(0,255,160,0.16)] transition-all duration-300`}
        >
          <h3 className="text-xl font-semibold text-green-300">
            California State University, San Bernardino
          </h3>
          <p className="text-white/60 mt-1">
            B.S. Information Systems — Cybersecurity
          </p>
          <p className="text-white/50 text-sm mt-1">2025 – 2027</p>

          <p className="mt-4 text-white/75 leading-relaxed">
            Studying cybersecurity fundamentals, information assurance, and
            enterprise systems with an emphasis on SOC operations, incident
            response, and security controls.
          </p>

          <div className="mt-5 flex flex-wrap justify-end gap-2">
            <Tag>Cybersecurity Focus</Tag>
            <Tag>Information Assurance</Tag>
            <Tag>Systems</Tag>
          </div>
        </div>
      </div>

      {/* Timeline node */}
      <div className="relative z-10">
        <div className="w-4 h-4 rounded-full bg-green-400 shadow-[0_0_18px_rgba(0,255,160,0.85)]" />
        <div className="absolute -inset-3 rounded-full bg-green-400/10 blur-xl" />
      </div>

      <div className="w-1/2" />
    </div>

    {/* Chaffey (right) */}
    <div className="relative flex items-center">
      <div className="w-1/2" />

      {/* Timeline node */}
      <div className="relative z-10">
        <div className="w-4 h-4 rounded-full bg-green-400 shadow-[0_0_18px_rgba(0,255,160,0.85)]" />
        <div className="absolute -inset-3 rounded-full bg-green-400/10 blur-xl" />
      </div>

      <div className="w-1/2 pl-10">
        <div
          className={`${CARD} hover:-translate-y-1 hover:shadow-[0_0_60px_rgba(0,255,160,0.16)] transition-all duration-300`}
        >
          <h3 className="text-xl font-semibold text-green-300">
            Chaffey College
          </h3>
          <p className="text-white/60 mt-1">
            Associate Degree — Computer Science
          </p>
          <p className="text-white/50 text-sm mt-1">2023 – 2025</p>

          <p className="mt-4 text-white/75 leading-relaxed">
            Built a strong foundation in programming, algorithms, and systems
            thinking used in scripting, automation, and security labs.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            <Tag>Programming</Tag>
            <Tag>Problem Solving</Tag>
            <Tag>Systems Thinking</Tag>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      <Divider />

{/* CONTACT (Styled + Formspree wired) */}
<section>
  <SectionTitle id="contact" title="Get In Touch" />

  {/* Top contact cards */}
  <div className="mt-12 grid md:grid-cols-3 gap-6 items-stretch">
    {/* Email */}
    <div className="h-full rounded-2xl border border-green-400/20 bg-black/60 backdrop-blur p-8 text-center shadow-[0_0_35px_rgba(0,255,160,0.10)] hover:shadow-[0_0_55px_rgba(0,255,160,0.18)] hover:-translate-y-1 transition-all duration-300">
      <div className="text-3xl mb-4">✉️</div>
      <div className="text-green-300 font-semibold text-lg">Email</div>
      <a
        className="mt-3 block text-white/80 underline underline-offset-4 hover:text-white"
        href="mailto:eabaileyedu@gmail.com"
      >
        eabaileyedu@gmail.com
      </a>
      <div className="mt-2 text-white/50 text-sm">preferred contact</div>
    </div>

    {/* GitHub */}
    <div className="h-full rounded-2xl border border-green-400/20 bg-black/60 backdrop-blur p-8 text-center shadow-[0_0_35px_rgba(0,255,160,0.10)] hover:shadow-[0_0_55px_rgba(0,255,160,0.18)] hover:-translate-y-1 transition-all duration-300">
      <div className="text-3xl mb-4">💼</div>
      <div className="text-green-300 font-semibold text-lg">GitHub</div>
      <a
        className="mt-3 block text-white/80 underline underline-offset-4 hover:text-white"
        href="https://github.com/ethnbail"
        target="_blank"
        rel="noreferrer"
      >
        github.com/ethnbail
      </a>
      <div className="mt-2 text-white/50 text-sm">projects & write-ups</div>
    </div>

    {/* LinkedIn */}
    <div className="h-full rounded-2xl border border-green-400/20 bg-black/60 backdrop-blur p-8 text-center shadow-[0_0_35px_rgba(0,255,160,0.10)] hover:shadow-[0_0_55px_rgba(0,255,160,0.18)] hover:-translate-y-1 transition-all duration-300">
      <div className="text-3xl mb-4">🔗</div>
      <div className="text-green-300 font-semibold text-lg">LinkedIn</div>
      <a
        className="mt-3 block text-white/80 underline underline-offset-4 hover:text-white"
        href="https://www.linkedin.com/in/ethan-a-bailey"
        target="_blank"
        rel="noreferrer"
      >
        linkedin.com/in/ethan-a-bailey
      </a>
      <div className="mt-2 text-white/50 text-sm">professional profile</div>
    </div>
  </div>

  {/* Contact form */}
  <div className="mt-10 rounded-2xl border border-green-400/20 bg-black/60 backdrop-blur p-8 shadow-[0_0_50px_rgba(0,255,160,0.08)] hover:shadow-[0_0_70px_rgba(0,255,160,0.16)] hover:-translate-y-1 transition-all duration-300">
    <div className="font-mono text-sm text-green-300/90 mb-2">$ contact</div>

    <p className="text-white/60 text-sm mb-6">
      Quickest response via email. This form sends directly to my inbox.
    </p>

    <form
      action="https://formspree.io/f/xpwvelkl"
      method="POST"
      className="space-y-6"
    >
      {/* OPTIONAL REDIRECT (recommended) */}
      <input
        type="hidden"
        name="_redirect"
        value="http://localhost:3000/#contact"
      />

      <div>
        <label className="block font-mono text-sm text-green-300 mb-2">
          $ name --input
        </label>
        <input
          name="name"
          required
          className="w-full rounded-xl border border-green-400/20 bg-black/50 px-4 py-3 text-white/80 outline-none focus:border-green-400/50 focus:shadow-[0_0_0_3px_rgba(0,255,160,0.12)] transition"
          placeholder="Your name"
        />
        <div className="mt-2 text-white/40 text-sm">
          Example: Recruiter / Hiring Manager
        </div>
      </div>

      <div>
        <label className="block font-mono text-sm text-green-300 mb-2">
          $ email --input
        </label>
        <input
          type="email"
          name="email"
          required
          className="w-full rounded-xl border border-green-400/20 bg-black/50 px-4 py-3 text-white/80 outline-none focus:border-green-400/50 focus:shadow-[0_0_0_3px_rgba(0,255,160,0.12)] transition"
          placeholder="you@email.com"
        />
      </div>

      <div>
        <label className="block font-mono text-sm text-green-300 mb-2">
          $ message --input
        </label>
        <textarea
          name="message"
          required
          className="w-full min-h-[180px] rounded-xl border border-green-400/20 bg-black/50 px-4 py-3 text-white/80 outline-none focus:border-green-400/50 focus:shadow-[0_0_0_3px_rgba(0,255,160,0.12)] transition"
          placeholder="Message"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-xl border border-green-400/30 bg-green-400/10 py-4 font-mono text-green-200 hover:bg-green-400/20 hover:shadow-[0_0_45px_rgba(0,255,160,0.18)] transition-all duration-300"
      >
        Send Message
      </button>

      <p className="text-center text-white/40 text-xs">
        When you deploy, update the redirect URL to your live domain.
      </p>
    </form>
  </div>
</section>

      <footer className="pb-10 text-center text-white/40 text-sm">
        Built with Next.js • Tailwind • Ethan Bailey
      </footer>
    </main>
  );
}