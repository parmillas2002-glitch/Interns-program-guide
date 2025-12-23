import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Target,
  Users,
  ClipboardCheck,
  CalendarClock,
  ShieldCheck,
  AlertTriangle,
  BarChart3,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Layers,
  Presentation,
  Handshake,
  FileText,
} from "lucide-react";

// ------------------------------------------------------------
// Interns Program – IT & Digital Mexico City Hub
// Visual Handover Guide (React canvas)
// Look & feel: Nestlé-inspired (blue-first, clean, corporate)
// ------------------------------------------------------------

const NESTLE = {
  navy: "bg-[#002D72]",
  navyText: "text-[#002D72]",
  blue: "bg-[#0071CE]",
  blueText: "text-[#0071CE]",
  ice: "bg-[#F4F8FF]",
  ink: "text-[#0B1B33]",
  sub: "text-[#51607A]",
  border: "border-[#D7E3F7]",
  softBorder: "border-[#E6EEFF]",
};

function Pill({ children, tone = "neutral" }: { children: React.ReactNode; tone?: "neutral" | "good" | "warn" | "info" }) {
  const styles = {
    neutral: "bg-white border border-[#E6EEFF] text-[#0B1B33]",
    good: "bg-[#ECFDF3] border border-[#B7F7D0] text-[#055F2B]",
    warn: "bg-[#FFFBEB] border border-[#FDE68A] text-[#7A4B00]",
    info: "bg-[#EFF6FF] border border-[#BFDBFE] text-[#0B3B8C]",
  };
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${styles[tone]}`}>
      {children}
    </span>
  );
}

function SectionTitle({ icon: Icon, title, subtitle }: any) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 h-10 w-10 rounded-2xl bg-white border border-[#E6EEFF] flex items-center justify-center shadow-sm">
        <Icon className="h-5 w-5 text-[#002D72]" />
      </div>
      <div>
        <h2 className="text-lg font-extrabold tracking-tight text-[#0B1B33]">{title}</h2>
        {subtitle ? <p className="text-sm text-[#51607A] mt-0.5">{subtitle}</p> : null}
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-white border border-[#E6EEFF] p-4 shadow-sm">
      <div className="text-xs font-semibold text-[#51607A]">{label}</div>
      <div className="mt-1 text-2xl font-extrabold text-[#0B1B33]">{value}</div>
    </div>
  );
}

function Card({ children, className = "" }: any) {
  return <div className={`rounded-2xl bg-white border border-[#E6EEFF] shadow-sm ${className}`}>{children}</div>;
}

function CardHeader({ children }: any) {
  return <div className="p-5 border-b border-[#E6EEFF]">{children}</div>;
}

function CardBody({ children }: any) {
  return <div className="p-5">{children}</div>;
}

function Row({ left, right }: { left: React.ReactNode; right: React.ReactNode }) {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12 lg:col-span-4">{left}</div>
      <div className="col-span-12 lg:col-span-8">{right}</div>
    </div>
  );
}

const sections = [
  { id: "overview", label: "Program overview", icon: BookOpen },
  { id: "role", label: "Your role", icon: ShieldCheck },
  { id: "cadence", label: "Cadence & activities", icon: CalendarClock },
  { id: "governance", label: "Governance", icon: Users },
  { id: "success", label: "Success criteria", icon: ClipboardCheck },
  { id: "risks", label: "Risk signals", icon: AlertTriangle },
  { id: "opps", label: "Opportunities", icon: Sparkles },
  { id: "toolkit", label: "Toolkit", icon: FileText },
];

export default function InternsProgramHandoverGuide() {
  const [active, setActive] = useState("overview");
  const [search, setSearch] = useState("");

  const filteredSections = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return sections;
    return sections.filter((s) => s.label.toLowerCase().includes(q));
  }, [search]);

  const ActiveIcon = sections.find((s) => s.id === active)?.icon || BookOpen;

  return (
    <div className="min-h-screen w-full bg-[#F4F8FF]">
      {/* Top Bar */}
      <div className="sticky top-0 z-20 bg-[#F4F8FF]/80 backdrop-blur border-b border-[#D7E3F7]">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-[#002D72] flex items-center justify-center shadow-sm">
              <Layers className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="text-sm font-semibold text-[#51607A]">IT & Digital Mexico City Hub</div>
              <div className="text-lg font-extrabold tracking-tight text-[#0B1B33]">Interns Program — Handover Guide</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <Pill tone="info">Nestlé look & feel</Pill>
            <Pill>Operational + visual reference</Pill>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-6 grid grid-cols-12 gap-6">
        {/* Sidebar */}
        <Card className="col-span-12 lg:col-span-3 overflow-hidden">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4 text-[#002D72]" />
              <div className="text-sm font-extrabold text-[#0B1B33]">Navigate</div>
            </div>
            <div className="mt-3">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search sections…"
                className="w-full rounded-xl border border-[#E6EEFF] bg-white px-3 py-2 text-sm text-[#0B1B33] placeholder:text-[#8A97AD] focus:outline-none focus:ring-2 focus:ring-[#0071CE]/30"
              />
            </div>
          </CardHeader>
          <CardBody>
            <div className="flex flex-col gap-1">
              {filteredSections.map((s) => {
                const isActive = s.id === active;
                const Icon = s.icon;
                return (
                  <button
                    key={s.id}
                    onClick={() => setActive(s.id)}
                    className={`group w-full flex items-center gap-3 rounded-2xl px-3 py-2 text-left transition border ${
                      isActive
                        ? "bg-[#002D72] border-[#002D72] text-white"
                        : "bg-white border-[#E6EEFF] text-[#0B1B33] hover:border-[#D7E3F7]"
                    }`}
                  >
                    <div
                      className={`h-9 w-9 rounded-2xl flex items-center justify-center transition ${
                        isActive ? "bg-white/15" : "bg-[#F4F8FF]"
                      }`}
                    >
                      <Icon className={`h-4 w-4 ${isActive ? "text-white" : "text-[#002D72]"}`} />
                    </div>
                    <div className="flex-1">
                      <div className={`text-sm font-bold ${isActive ? "text-white" : "text-[#0B1B33]"}`}>{s.label}</div>
                      <div className={`text-xs ${isActive ? "text-white/75" : "text-[#51607A]"}`}>Open</div>
                    </div>
                    <ArrowRight className={`h-4 w-4 ${isActive ? "text-white" : "text-[#8A97AD] group-hover:text-[#002D72]"}`} />
                  </button>
                );
              })}
            </div>

            <div className="mt-6 rounded-2xl bg-[#002D72] p-4 text-white">
              <div className="flex items-center gap-2">
                <Presentation className="h-4 w-4" />
                <div className="text-sm font-extrabold">How to use this guide</div>
              </div>
              <ul className="mt-2 space-y-1 text-xs text-white/85">
                <li>• Use it as a quick reference before monthly follow-ups.</li>
                <li>• Copy snippets directly into emails / chat messages.</li>
                <li>• Keep it open during onboarding + renewal decisions.</li>
              </ul>
            </div>
          </CardBody>
        </Card>

        {/* Main */}
        <div className="col-span-12 lg:col-span-9">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.22 }}
              className="space-y-6"
            >
              {/* HERO */}
              <Card className="overflow-hidden">
                <div className="p-6 bg-gradient-to-r from-[#002D72] to-[#0071CE]">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <div className="h-10 w-10 rounded-2xl bg-white/15 flex items-center justify-center">
                          <ActiveIcon className="h-5 w-5 text-white" />
                        </div>
                        <Pill tone="info">Program governance</Pill>
                        <Pill>Mexico + Brazil</Pill>
                      </div>
                      <h1 className="mt-3 text-2xl md:text-3xl font-extrabold tracking-tight text-white">
                        Interns Program — Playbook for HR Owner
                      </h1>
                      <p className="mt-2 text-sm text-white/85 max-w-3xl">
                        A practical, visual guide to understand what the program is, what you must manage, how often, and where we can improve.
                      </p>
                    </div>
                    <div className="hidden md:flex flex-col items-end gap-2">
                      <Pill tone="neutral">Last updated: Dec 2025</Pill>
                      <div className="text-xs text-white/80">Use as internal reference</div>
                    </div>
                  </div>
                </div>

                <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Stat label="Total interns" value="38" />
                  <Stat label="Mexico / Brazil" value="31 / 7" />
                  <Stat label="Gender balance" value="55% women" />
                </div>
              </Card>

              {/* CONTENT */}
              {active === "overview" && <Overview />}
              {active === "role" && <YourRole />}
              {active === "cadence" && <Cadence />}
              {active === "governance" && <Governance />}
              {active === "success" && <Success />}
              {active === "risks" && <Risks />}
              {active === "opps" && <Opportunities />}
              {active === "toolkit" && <Toolkit />}

              {/* Footer */}
              <div className="text-xs text-[#51607A] px-1">
                Built for handover continuity — keep this open as a living reference. Update sections as the program evolves.
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function Overview() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <SectionTitle
            icon={BookOpen}
            title="What is the Interns Program?"
            subtitle="A talent pipeline and development ecosystem — not a transactional internship." 
          />
        </CardHeader>
        <CardBody>
          <Row
            left={
              <div className="space-y-3">
                <Pill tone="info">Core purpose</Pill>
                <div className="text-sm text-[#0B1B33] font-semibold">Develop future IT & Digital talent through real exposure.</div>
                <div className="text-sm text-[#51607A]">
                  Hiring can happen, but it is not guaranteed. The program reduces hiring risk by observing talent in real work environments.
                </div>
              </div>
            }
            right={
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <MiniBlock
                  title="What it IS"
                  icon={CheckCircle2}
                  items={[
                    "Long-term early-career pipeline",
                    "Real projects + deliverables",
                    "Structured learning (70–20–10)",
                    "HR governance + manager ownership",
                  ]}
                />
                <MiniBlock
                  title="What it is NOT"
                  icon={AlertTriangle}
                  tone="warn"
                  items={[
                    "A short-term support role",
                    "Only operational tasks",
                    "A hiring promise",
                    "HR doing the manager’s job",
                  ]}
                />
              </div>
            }
          />

          <div className="mt-6 rounded-2xl border border-[#E6EEFF] bg-[#F9FBFF] p-4">
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4 text-[#002D72]" />
              <div className="text-sm font-extrabold text-[#0B1B33]">Learning model (70–20–10)</div>
            </div>
            <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-3">
              <LearningCard pct="70%" title="Hands-on experience" desc="Real work, projects, exposure to leadership." />
              <LearningCard pct="20%" title="Networking + community" desc="Mentorship, Coffee IT, peer learning." />
              <LearningCard pct="10%" title="Formal learning" desc="iLearn + soft skills learning path." />
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

function YourRole() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <SectionTitle
            icon={ShieldCheck}
            title="Your role as HR Program Owner"
            subtitle="You coordinate governance and quality — you do not execute the intern’s day-to-day work." 
          />
        </CardHeader>
        <CardBody>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <MiniBlock
              title="You ARE"
              icon={ShieldCheck}
              items={[
                "Program orchestrator (cadence + structure)",
                "Quality controller (learning + exposure)",
                "Bridge HR ↔ People Managers",
                "Guardian of intern experience",
              ]}
            />
            <MiniBlock
              title="You are NOT"
              icon={AlertTriangle}
              tone="warn"
              items={[
                "The intern’s task manager",
                "A replacement for People Managers",
                "The person doing technical coaching",
                "Someone who ‘runs the project’ alone",
              ]}
            />
          </div>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
            <FocusTile
              title="Your north star"
              icon={Target}
              text="Ensure every intern has meaningful development and business exposure, with clear follow-up." 
            />
            <FocusTile
              title="What you control"
              icon={ClipboardCheck}
              text="Cadence, governance, visibility, escalation, and the quality of development tracking." 
            />
            <FocusTile
              title="When you intervene"
              icon={AlertTriangle}
              text="If People Manager engagement is low or the internship becomes purely operational." 
            />
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

function Cadence() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <SectionTitle
            icon={CalendarClock}
            title="Cadence & Activities"
            subtitle="What you manage, how often, and the expected output." 
          />
        </CardHeader>
        <CardBody>
          <div className="overflow-hidden rounded-2xl border border-[#E6EEFF]">
            <div className="grid grid-cols-12 bg-[#F9FBFF] px-4 py-3 text-xs font-extrabold text-[#0B1B33]">
              <div className="col-span-4">Activity</div>
              <div className="col-span-3">Frequency</div>
              <div className="col-span-5">Output / What “good” looks like</div>
            </div>
            {[
              {
                a: "Onboarding governance (first 45 days)",
                f: "Per intern (first month + checkpoints)",
                o: "Role clarity, tool access, development plan defined, real project assigned",
              },
              {
                a: "Monthly follow-up with People Managers",
                f: "Monthly",
                o: "1:1 completed, development visible, risks identified early",
              },
              {
                a: "Learning model check (70–20–10)",
                f: "Monthly light review",
                o: "Balance between projects, community, and training is healthy",
              },
              {
                a: "Mid-cycle review",
                f: "Once per 6-month cycle",
                o: "Clear progress + next development actions agreed",
              },
              {
                a: "Renewal / closure support",
                f: "End of cycle",
                o: "Decision grounded in 4 dimensions: performance, skills, mindset, impact",
              },
              {
                a: "Visibility moments (intern presentation)",
                f: "Annual",
                o: "Interns showcase who they are, what they build, and innovation",
              },
            ].map((r, idx) => (
              <div key={idx} className="grid grid-cols-12 px-4 py-4 text-sm border-t border-[#E6EEFF]">
                <div className="col-span-12 md:col-span-4 font-semibold text-[#0B1B33]">{r.a}</div>
                <div className="col-span-12 md:col-span-3 text-[#51607A] mt-1 md:mt-0">{r.f}</div>
                <div className="col-span-12 md:col-span-5 text-[#51607A] mt-1 md:mt-0">{r.o}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Callout
              icon={Handshake}
              title="Quick escalation rule"
              tone="info"
              text="If a People Manager is consistently missing follow-ups or using the intern for operational tasks only, HR intervenes and reassesses internship viability." 
            />
            <Callout
              icon={CheckCircle2}
              title="Minimum standard (non-negotiables)"
              tone="good"
              text="Monthly 1:1s + development tracking updated + intern assigned to value-generating work." 
            />
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

function Governance() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <SectionTitle
            icon={Users}
            title="Governance model"
            subtitle="Shared ownership: People Managers own formation; HR owns structure and follow-up." 
          />
        </CardHeader>
        <CardBody>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <MiniBlock
              title="People Manager owns"
              icon={Users}
              items={[
                "Day-to-day coaching and formation",
                "Integrating interns into real projects",
                "Developing them from zero when needed",
                "Maximizing value of the internship resource",
              ]}
            />
            <MiniBlock
              title="HR owns"
              icon={ShieldCheck}
              items={[
                "Structure and governance",
                "Cadence: ensure monthly 1:1 happens",
                "Monitor development + engagement",
                "Intervene if manager engagement is low",
              ]}
            />
          </div>

          <div className="mt-6 rounded-2xl border border-[#E6EEFF] bg-[#F9FBFF] p-5">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-[#002D72]" />
              <div className="text-sm font-extrabold text-[#0B1B33]">Why HR governance matters</div>
            </div>
            <div className="mt-2 text-sm text-[#51607A]">
              The program must remain a pipeline (development + exposure). If it becomes only operational support, the value and credibility of the program declines.
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

function Success() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <SectionTitle
            icon={ClipboardCheck}
            title="Success criteria"
            subtitle="Success = clear before/after development + readiness. Hiring is a possible outcome, not a promise." 
          />
        </CardHeader>
        <CardBody>
          <Row
            left={
              <div className="space-y-3">
                <Pill tone="good">Definition of success</Pill>
                <div className="text-sm text-[#51607A]">
                  An intern is successful when there is visible progress in technical skills, soft skills, mindset, and overall readiness for the job market.
                </div>
                <Pill tone="info">Ideal outcome</Pill>
                <div className="text-sm text-[#51607A]">
                  Hiring (inside Nestlé or externally) is the strongest signal of employability.
                </div>
              </div>
            }
            right={
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <MiniBlock
                  title="Evaluate decisions on 4 dimensions"
                  icon={ClipboardCheck}
                  items={[
                    "Performance",
                    "Skills development",
                    "Attitude & mindset",
                    "Business impact",
                  ]}
                />
                <MiniBlock
                  title="Evidence you should look for"
                  icon={BarChart3}
                  items={[
                    "More autonomy over time",
                    "Higher-quality outputs",
                    "Ownership + collaboration",
                    "Visible learning + confidence",
                  ]}
                />
              </div>
            }
          />
        </CardBody>
      </Card>
    </div>
  );
}

function Risks() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <SectionTitle
            icon={AlertTriangle}
            title="Risk signals (what to watch)"
            subtitle="Early detection protects intern experience and program credibility." 
          />
        </CardHeader>
        <CardBody>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <RiskTile
              title="Low People Manager engagement"
              items={["1:1s not happening", "Feedback is inconsistent", "No coaching / no exposure"]}
            />
            <RiskTile
              title="Intern used only as operational support"
              items={["Repetitive tasks only", "No learning path", "No real project ownership"]}
            />
            <RiskTile
              title="Missing visibility on development"
              items={["No Development Tracking / PDP updates", "No evidence of progress", "Hard to decide renewal"]}
            />
            <RiskTile
              title="Engagement drop"
              items={["Intern disengaged", "Low participation in community", "Lack of belonging"]}
            />
          </div>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Callout
              icon={AlertTriangle}
              title="When to escalate"
              tone="warn"
              text="Escalate when the internship is not development-focused, or when the People Manager consistently misses the governance cadence." 
            />
            <Callout
              icon={ShieldCheck}
              title="HR intervention approach"
              tone="info"
              text="Clarify expectations with the manager, reset the development plan, and reassess whether the internship resource is genuinely needed." 
            />
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

function Opportunities() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <SectionTitle
            icon={Sparkles}
            title="Opportunities to strengthen the program"
            subtitle="Biggest gap today: impact measurement and structured evaluation." 
          />
        </CardHeader>
        <CardBody>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <Opportunity
              title="Light evaluation framework"
              icon={ClipboardCheck}
              desc="Standardize how we assess performance and readiness across interns and managers." 
              bullets={["Simple rubric", "Consistent renewal decisions", "Clear expectations"]}
            />
            <Opportunity
              title="Consolidated metrics"
              icon={BarChart3}
              desc="Create a minimal set of KPIs to track program outcomes and credibility." 
              bullets={["Retention", "Conversion", "Engagement", "Skills readiness"]}
            />
            <Opportunity
              title="Impact storytelling"
              icon={Presentation}
              desc="Turn results into a narrative for leadership and global IT visibility." 
              bullets={["Before/after", "Success cases", "Talent pipeline value"]}
            />
          </div>

          <div className="mt-6 rounded-2xl bg-gradient-to-r from-[#002D72] to-[#0071CE] p-5 text-white">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              <div className="text-sm font-extrabold">Recommended first win (low effort / high impact)</div>
            </div>
            <div className="mt-2 text-sm text-white/85">
              Build a simple monthly tracker: 1:1 done (Y/N), development plan updated (Y/N), project exposure (short note), risk flag (green/yellow/red).
              This alone increases governance quality and enables basic reporting.
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

function Toolkit() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <SectionTitle
            icon={FileText}
            title="Toolkit (copy/paste-ready)"
            subtitle="Short templates you can reuse for onboarding, monthly checks, and escalations." 
          />
        </CardHeader>
        <CardBody>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Template
              title="Monthly check-in message to People Manager"
              icon={CalendarClock}
              text={`Hi [Name], quick reminder for our Interns Program governance: could you please confirm (1) the monthly 1:1 with [Intern] happened, (2) key development progress this month, and (3) any risk flags or support needed from HR? Thank you.`}
            />
            <Template
              title="Onboarding expectations (first 45 days)"
              icon={BookOpen}
              text={`For the first 45 days, we align on: role expectations, objectives, tools access, learning path (Development Tracking / PDP), and assignment to a real project with measurable deliverables. HR will follow up to ensure clarity and consistency.`}
            />
            <Template
              title="Escalation note (low manager engagement)"
              icon={AlertTriangle}
              tone="warn"
              text={`Hi [Name], I’m noticing governance gaps in the Interns Program cadence (missed 1:1s / limited coaching). The program is designed as a development pipeline, so we need to reset expectations and confirm the internship resource is being used for value-generating development. Can we align this week?`}
            />
            <Template
              title="Renewal decision prompt"
              icon={ClipboardCheck}
              text={`For renewal decisions, please provide a short view across 4 dimensions: performance, skills development, attitude/mindset, and business impact. Include 1–2 concrete examples of progress and recommended next steps.`}
            />
          </div>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
            <QuickChecklist
              title="Monthly HR checklist"
              icon={CheckCircle2}
              items={[
                "1:1s completed (all interns)",
                "Development Tracking / PDP updated",
                "Risk flags captured",
                "Any manager follow-up needed",
              ]}
            />
            <QuickChecklist
              title="Onboarding checklist"
              icon={BookOpen}
              items={[
                "Role clarity & expectations",
                "Tool/system access",
                "Learning path assigned",
                "Real project defined",
              ]}
            />
            <QuickChecklist
              title="End-of-cycle checklist"
              icon={ClipboardCheck}
              items={[
                "4-dimension evaluation",
                "Decision documented",
                "Next step agreed",
                "Visibility / learnings captured",
              ]}
            />
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

// -------------------- components --------------------

function MiniBlock({ title, icon: Icon, items, tone = "neutral" }: any) {
  const head = tone === "warn" ? "bg-[#FFFBEB]" : "bg-[#F9FBFF]";
  const iconBg = tone === "warn" ? "bg-[#FEF3C7]" : "bg-white";
  const iconColor = tone === "warn" ? "text-[#7A4B00]" : "text-[#002D72]";
  return (
    <div className="rounded-2xl border border-[#E6EEFF] overflow-hidden bg-white">
      <div className={`px-4 py-3 ${head} border-b border-[#E6EEFF] flex items-center gap-2`}>
        <div className={`h-9 w-9 rounded-2xl ${iconBg} border border-[#E6EEFF] flex items-center justify-center`}>
          <Icon className={`h-4 w-4 ${iconColor}`} />
        </div>
        <div className="text-sm font-extrabold text-[#0B1B33]">{title}</div>
      </div>
      <div className="p-4">
        <ul className="space-y-2">
          {items.map((it: string, i: number) => (
            <li key={i} className="flex items-start gap-2 text-sm text-[#51607A]">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#0071CE]" />
              <span>{it}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function LearningCard({ pct, title, desc }: any) {
  return (
    <div className="rounded-2xl bg-white border border-[#E6EEFF] p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="text-xs font-extrabold text-[#002D72]">{pct}</div>
        <Pill>70–20–10</Pill>
      </div>
      <div className="mt-2 text-sm font-extrabold text-[#0B1B33]">{title}</div>
      <div className="mt-1 text-sm text-[#51607A]">{desc}</div>
    </div>
  );
}

function FocusTile({ title, icon: Icon, text }: any) {
  return (
    <div className="rounded-2xl bg-white border border-[#E6EEFF] p-5 shadow-sm">
      <div className="flex items-center gap-2">
        <div className="h-9 w-9 rounded-2xl bg-[#F4F8FF] flex items-center justify-center border border-[#E6EEFF]">
          <Icon className="h-4 w-4 text-[#002D72]" />
        </div>
        <div className="text-sm font-extrabold text-[#0B1B33]">{title}</div>
      </div>
      <div className="mt-2 text-sm text-[#51607A]">{text}</div>
    </div>
  );
}

function Callout({ icon: Icon, title, text, tone = "neutral" }: any) {
  const styles = {
    neutral: "bg-white border-[#E6EEFF]",
    info: "bg-[#EFF6FF] border-[#BFDBFE]",
    good: "bg-[#ECFDF3] border-[#B7F7D0]",
    warn: "bg-[#FFFBEB] border-[#FDE68A]",
  };
  return (
    <div className={`rounded-2xl border p-5 ${styles[tone]}`}>
      <div className="flex items-center gap-2">
        <div className="h-9 w-9 rounded-2xl bg-white/70 border border-white/50 flex items-center justify-center">
          <Icon className="h-4 w-4 text-[#002D72]" />
        </div>
        <div className="text-sm font-extrabold text-[#0B1B33]">{title}</div>
      </div>
      <div className="mt-2 text-sm text-[#51607A]">{text}</div>
    </div>
  );
}

function RiskTile({ title, items }: any) {
  return (
    <div className="rounded-2xl bg-white border border-[#E6EEFF] p-5 shadow-sm">
      <div className="flex items-center gap-2">
        <div className="h-9 w-9 rounded-2xl bg-[#FFFBEB] border border-[#FDE68A] flex items-center justify-center">
          <AlertTriangle className="h-4 w-4 text-[#7A4B00]" />
        </div>
        <div className="text-sm font-extrabold text-[#0B1B33]">{title}</div>
      </div>
      <ul className="mt-3 space-y-2">
        {items.map((it: string, i: number) => (
          <li key={i} className="text-sm text-[#51607A] flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#7A4B00]" />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Opportunity({ title, icon: Icon, desc, bullets }: any) {
  return (
    <div className="rounded-2xl bg-white border border-[#E6EEFF] p-5 shadow-sm">
      <div className="flex items-center gap-2">
        <div className="h-9 w-9 rounded-2xl bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center">
          <Icon className="h-4 w-4 text-[#0B3B8C]" />
        </div>
        <div className="text-sm font-extrabold text-[#0B1B33]">{title}</div>
      </div>
      <div className="mt-2 text-sm text-[#51607A]">{desc}</div>
      <ul className="mt-3 space-y-2">
        {bullets.map((b: string, i: number) => (
          <li key={i} className="text-sm text-[#51607A] flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0071CE]" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Template({ title, icon: Icon, text, tone = "neutral" }: any) {
  const bg = tone === "warn" ? "bg-[#FFFBEB]" : "bg-[#F9FBFF]";
  return (
    <div className="rounded-2xl bg-white border border-[#E6EEFF] overflow-hidden shadow-sm">
      <div className={`px-4 py-3 ${bg} border-b border-[#E6EEFF] flex items-center gap-2`}>
        <div className="h-9 w-9 rounded-2xl bg-white border border-[#E6EEFF] flex items-center justify-center">
          <Icon className="h-4 w-4 text-[#002D72]" />
        </div>
        <div className="text-sm font-extrabold text-[#0B1B33]">{title}</div>
      </div>
      <div className="p-4">
        <div className="rounded-2xl border border-[#E6EEFF] bg-white p-4 text-sm text-[#0B1B33] leading-relaxed">
          {text}
        </div>
        <div className="mt-3 text-xs text-[#51607A]">Tip: adapt names, keep it short, send as a friendly governance ping.</div>
      </div>
    </div>
  );
}

function QuickChecklist({ title, icon: Icon, items }: any) {
  return (
    <div className="rounded-2xl bg-white border border-[#E6EEFF] p-5 shadow-sm">
      <div className="flex items-center gap-2">
        <div className="h-9 w-9 rounded-2xl bg-[#F4F8FF] border border-[#E6EEFF] flex items-center justify-center">
          <Icon className="h-4 w-4 text-[#002D72]" />
        </div>
        <div className="text-sm font-extrabold text-[#0B1B33]">{title}</div>
      </div>
      <div className="mt-3 space-y-2">
        {items.map((it: string, i: number) => (
          <div key={i} className="flex items-start gap-2 text-sm text-[#51607A]">
            <CheckCircle2 className="h-4 w-4 text-[#0071CE] mt-0.5" />
            <span>{it}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
