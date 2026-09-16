"use client";

import React, { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  FileText,
  Building2,
  Target,
  Briefcase,
  CheckCircle2,
  Handshake,
  Sparkles,
} from "lucide-react";

const sections = [
  { id: "intro", label: "Abstract / Introduction", icon: FileText },
  { id: "employer", label: "About the Employer", icon: Building2 },
  { id: "goals", label: "Goals & Learning Outcomes", icon: Target },
  { id: "job", label: "Job Description", icon: Briefcase },
  { id: "conclusion", label: "Conclusions", icon: CheckCircle2 },
  { id: "thanks", label: "Acknowledgments", icon: Handshake },
];

const headerMeta = {
  title: "Co-op Work Term Report",
  term: "Summer 2026",
  student: "Antonio Conopio",
  position: "Data Integration Intern / API Developer",
  employer: "The Co-operators General Insurance Company",
  workTerm: "May 2026 – August 2026",
};

const goalData = [
  {
    id: "g1",
    title: "Learning Goal 1 — Deepen Technical Proficiency (Technological Literacy)",
    goal: "Deepen my technical proficiency in Python and API development by working on the migration of our API template from R to Python, and applying both languages across production tasks at Co-operators.",
    actions: [
      "Took ownership of the R-to-Python migration end-to-end — refactoring logic, maintaining feature parity, and validating outputs.",
      "Applied Python daily across Risk Assist API development and ad hoc data tasks.",
      "Referenced documentation and internal resources to fill knowledge gaps as they arose.",
    ],
    measure: [
      "The migrated Python API template is functional, peer-reviewed, and adopted by the team.",
      "Could independently write, debug, and deploy Python-based APIs without relying on senior support for standard tasks.",
    ],
    reflection:
      "I took ownership of migrating our API template from R to Python end-to-end — refactoring the core routing and business logic while validating that every output matched the legacy R version before cutover. Working in FastAPI daily on the Risk Assist APIs built on that momentum, and my evaluation rated my ability to learn as Outstanding, noting I sometimes finished new work fast enough to be waiting on the next ticket. When a reconciliation problem threatened to stall a project, I used batch testing to systematically narrow down where the pipeline was breaking, traced it to specific issues in the code, and shipped the fix that let the project move forward. By the end of the term I could write, debug, and deploy Python APIs independently, following the same scope-review-test-deploy process the team already trusted — this goal was fully met.",
  },
  {
    id: "g2",
    title: "Learning Goal 2 — Strengthen Cross-Team Communication (Integrative Communication)",
    goal: "Strengthen my ability to communicate technical requirements and implementation details across internal teams and external business partners during the enablement of two new business channels for our APIs.",
    actions: [
      "Actively participated in partner-facing meetings and documented requirements clearly.",
      "Used peer review cycles as feedback loops to improve both my code and my communication of technical decisions.",
      "Proactively followed up on ambiguities with stakeholders rather than making assumptions.",
    ],
    measure: [
      "Both new business channels successfully enabled and deployed with my direct contribution.",
      "Feedback from peer reviews trended positively over the term, and partners confirmed their requirements were met without major rework after handoff.",
    ],
    reflection:
      "Enabling two new business channels meant sitting in meetings with partners who cared about outcomes, not implementation details, so I had to get comfortable translating between the two. I documented requirements as they came in, used peer review as a feedback loop on both my code and how I explained it, and made a habit of following up on anything ambiguous instead of guessing. That paid off — three separate business partners reached out unprompted just to say they enjoyed working with me, and I got positive feedback on a team presentation where I explained technical material to a mixed technical and non-technical audience and handled the follow-up questions well. Both channels shipped with my direct contribution, and requirements held up without major rework after handoff, so this goal was fully achieved.",
  },
  {
    id: "g3",
    title:
      "Learning Goal 3 — Build Systematic QA Practices (Problem Solving — Critical & Creative Thinking)",
    goal: "Develop a systematic approach to software quality assurance by designing and executing comprehensive test suites — unit, integration, regression, and performance — across Co-operators' API solutions.",
    actions: [
      "Wrote tests at multiple levels — unit, integration, regression, and performance — for each API or feature I worked on.",
      "Documented test cases and results, and used failures as learning opportunities to trace bugs back to root causes.",
      "Invested time understanding each solution end-to-end so testing was informed by business context, not just code coverage.",
    ],
    measure: [
      "Test coverage meaningfully increased on the APIs I worked on.",
      "Could independently diagnose and resolve test failures and explain the business impact of any defect caught, not just the technical fix.",
    ],
    reflection:
      "For every API I touched, I tried to write tests at more than one level — unit tests for the logic itself, integration tests for how it talked to the rest of the pipeline, regression tests to catch parity breaks, and performance checks where they mattered. That discipline is what let me isolate a reconciliation defect that was blocking a major initiative: batch testing narrowed the failure to a specific stage, and understanding the business logic, not just the code, let me explain why the defect mattered rather than just how to fix it. My evaluation rated Quality of Work, Decision Making, and Organization/Planning all Very Good, specifically noting that I documented my work and sought feedback before implementing. I came out of the term with a much more systematic mental model for what 'tested' actually means beyond a single happy-path check — this goal was fully met.",
  },
];

const jobResponsibilities = [
  {
    title: "R-to-Python API Template Migration",
    body: [
      "I migrated the team's internal API template from R/Plumber to Python/FastAPI, working through the codebase end-to-end rather than picking off isolated pieces.",
      [
        "Refactored routing, request validation, and business logic into a more modular FastAPI structure",
        "Improved response speed by 33% over the legacy R/Plumber template",
        "Increased base test coverage from 40% to 97% as part of the migration",
      ],
      "The migrated template was peer-reviewed and adopted by the team, becoming the reference implementation for new API work.",
    ],
  },
  {
    title: "Cross-Team Requirements & Risk Assist API Development",
    body: [
      "I collaborated with partners and stakeholders to gather requirements, implement business layer changes, and debug Risk Assist APIs across auto and home insurance lines.",
      [
        "Gathered requirements directly from business partners and internal stakeholders",
        "Implemented business layer logic changes across auto and home insurance Risk Assist APIs",
        "Debugged issues across both lines as they surfaced in development and testing",
      ],
      "Working across two insurance lines meant keeping two distinct sets of business rules straight at once.",
    ],
  },
  {
    title: "Enabling Two New Business Channels",
    body: [
      "I enabled two new business channels for auto and home Risk Assist by extending the existing APIs with new fields, validation logic, and business rules.",
      [
        "Added new fields and validation logic to support each channel's requirements",
        "Implemented the additional business rules needed for auto and home Risk Assist",
        "Increased API call capacity by 30% to support the added channel volume",
      ],
      "Both channels launched successfully with my direct contribution.",
    ],
  },
  {
    title: "Leading Testing for the National Auto Risk Assist API",
    body: [
      "I led testing for the National Auto Risk Assist API, one of the team's flagship projects of the year.",
      [
        "Debugged across multiple models and data transformations",
        "Validated outputs against the modelers' pipeline at every stage",
        "Achieved 100% parity between the API and the modelers' pipeline before release",
      ],
      "This was the highest-stakes testing work I owned all term, given how visible the project was.",
    ],
  },
  {
    title: "Internal API Log Extraction Tool for Azure Migration",
    body: [
      "As part of a broader modernization initiative, I built an internal tool to extract API logs for migration off the team's Posit server.",
      [
        "Designed and built a log extraction tool to pull historical API logs",
        "Migrated over 1 million logs from the team's Posit server to Azure Data Lake Storage (ADLS)",
        "Supported the team's broader move toward cloud-based infrastructure",
      ],
      "The tool is reusable for any future log migrations the team needs to run.",
    ],
  },
];

function cx(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function ScrollSpyNav({
  activeId,
  onJump,
}: {
  activeId: string;
  onJump: (id: string) => void;
}) {
  return (
    <div className="hidden lg:block">
      <Card className="sticky top-6">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm">On this page</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="flex flex-col gap-1">
            {sections.map((s) => {
              const Icon = s.icon;
              const active = activeId === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => onJump(s.id)}
                  className={cx(
                    "flex items-center gap-2 rounded-xl px-3 py-2 text-left text-sm transition",
                    active
                      ? "bg-muted font-medium"
                      : "hover:bg-muted/60 text-muted-foreground hover:text-foreground",
                  )}
                >
                  <Icon
                    className={cx(
                      "h-4 w-4",
                      active ? "text-foreground" : "text-muted-foreground",
                    )}
                  />
                  <span>{s.label}</span>
                </button>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function MetaChip({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center gap-2 rounded-2xl border bg-background px-3 py-2">
      <span className="text-xs text-muted-foreground">{label}</span>
      <span className="text-sm font-medium">{value}</span>
    </div>
  );
}

function DiagramCard({
  title,
  caption,
  children,
}: {
  title: string;
  caption: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border bg-muted/30 p-4">
      <p className="mb-3 text-sm font-medium text-foreground">{title}</p>
      <div className="rounded-xl bg-background p-3">{children}</div>
      <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{caption}</p>
    </div>
  );
}

function MigrationDiagram() {
  return (
    <svg
      viewBox="0 0 440 190"
      className="h-auto w-full"
      role="img"
      aria-label="Diagram showing the API template migration from R Plumber to Python FastAPI, with routing, business logic, and response format layers migrated one-to-one"
    >
      <text x="95" y="16" textAnchor="middle" className="fill-foreground text-[11px] font-medium">
        Before — R Plumber
      </text>
      <rect x="10" y="24" width="170" height="140" rx="14" className="fill-none stroke-border" strokeWidth={1.5} />
      <rect x="26" y="44" width="138" height="26" rx="6" className="fill-muted-foreground" opacity={0.12} />
      <rect x="26" y="80" width="138" height="26" rx="6" className="fill-muted-foreground" opacity={0.12} />
      <rect x="26" y="116" width="138" height="26" rx="6" className="fill-muted-foreground" opacity={0.12} />
      <text x="95" y="61" textAnchor="middle" className="fill-foreground text-[10px]">Routing</text>
      <text x="95" y="97" textAnchor="middle" className="fill-foreground text-[10px]">Business Logic</text>
      <text x="95" y="133" textAnchor="middle" className="fill-foreground text-[10px]">Response Format</text>

      <line x1="188" y1="94" x2="244" y2="94" className="stroke-chart-1" strokeWidth={2} />
      <polygon points="244,88 256,94 244,100" className="fill-chart-1" />
      <text x="216" y="82" textAnchor="middle" className="fill-muted-foreground text-[9px]">migrated</text>

      <text x="345" y="16" textAnchor="middle" className="fill-foreground text-[11px] font-medium">
        After — Python FastAPI
      </text>
      <rect x="258" y="24" width="174" height="140" rx="14" className="fill-none stroke-chart-1" strokeWidth={2} />
      <rect x="274" y="44" width="142" height="26" rx="6" className="fill-chart-1" opacity={0.15} />
      <rect x="274" y="80" width="142" height="26" rx="6" className="fill-chart-1" opacity={0.15} />
      <rect x="274" y="116" width="142" height="26" rx="6" className="fill-chart-1" opacity={0.15} />
      <text x="345" y="61" textAnchor="middle" className="fill-foreground text-[10px]">Routing</text>
      <text x="345" y="97" textAnchor="middle" className="fill-foreground text-[10px]">Business Logic</text>
      <text x="345" y="133" textAnchor="middle" className="fill-foreground text-[10px]">Response Format</text>
    </svg>
  );
}

function ChannelsDiagram() {
  return (
    <svg
      viewBox="0 0 520 200"
      className="h-auto w-full"
      role="img"
      aria-label="Diagram showing one existing channel and two new business channels feeding into the Risk Assist API, which feeds downstream systems"
    >
      <rect x="10" y="12" width="140" height="46" rx="10" className="fill-none stroke-border" strokeWidth={1.5} />
      <text x="80" y="40" textAnchor="middle" className="fill-foreground text-[10px] font-medium">Existing Channel</text>

      <rect x="10" y="76" width="140" height="46" rx="10" className="fill-none stroke-chart-1" strokeWidth={2} />
      <text x="80" y="100" textAnchor="middle" className="fill-foreground text-[10px] font-medium">New Channel A</text>
      <rect x="18" y="106" width="32" height="13" rx={6.5} className="fill-chart-1" opacity={0.25} />
      <text x="34" y="115.5" textAnchor="middle" className="fill-foreground text-[7px] font-semibold">NEW</text>

      <rect x="10" y="140" width="140" height="46" rx="10" className="fill-none stroke-chart-2" strokeWidth={2} />
      <text x="80" y="164" textAnchor="middle" className="fill-foreground text-[10px] font-medium">New Channel B</text>
      <rect x="18" y="170" width="32" height="13" rx={6.5} className="fill-chart-2" opacity={0.25} />
      <text x="34" y="179.5" textAnchor="middle" className="fill-foreground text-[7px] font-semibold">NEW</text>

      <line x1="150" y1="35" x2="220" y2="80" className="stroke-border" strokeWidth={1.5} />
      <line x1="150" y1="99" x2="220" y2="99" className="stroke-chart-1" strokeWidth={2} />
      <line x1="150" y1="163" x2="220" y2="118" className="stroke-chart-2" strokeWidth={2} />

      <rect x="222" y="72" width="150" height="56" rx="12" className="fill-muted stroke-foreground" strokeWidth={1.5} />
      <text x="297" y="96" textAnchor="middle" className="fill-foreground text-[11px] font-medium">Risk Assist</text>
      <text x="297" y="111" textAnchor="middle" className="fill-foreground text-[11px] font-medium">API</text>

      <line x1="372" y1="100" x2="430" y2="100" className="stroke-border" strokeWidth={1.5} />

      <rect x="432" y="72" width="80" height="56" rx="10" className="fill-none stroke-border" strokeWidth={1.5} />
      <text x="472" y="96" textAnchor="middle" className="fill-foreground text-[10px] font-medium">Downstream</text>
      <text x="472" y="110" textAnchor="middle" className="fill-foreground text-[10px] font-medium">Systems</text>
    </svg>
  );
}

function TestLayersDiagram() {
  const layers = [
    { label: "Unit", desc: "core logic — runs on every commit", width: 260, colorClass: "fill-chart-1" },
    { label: "Integration", desc: "API ↔ pipeline behavior", width: 210, colorClass: "fill-chart-2" },
    { label: "Regression", desc: "R ↔ Python output parity", width: 160, colorClass: "fill-chart-3" },
    { label: "Performance", desc: "response time & throughput", width: 110, colorClass: "fill-chart-4" },
  ];
  const barHeight = 30;
  const gap = 12;
  const barX = 130;
  const descX = 410;

  return (
    <svg
      viewBox="0 0 560 190"
      className="h-auto w-full"
      role="img"
      aria-label="Diagram of the test suite layers, from unit tests through integration, regression, and performance tests"
    >
      {layers.map((layer, idx) => {
        const y = idx * (barHeight + gap) + 6;
        return (
          <g key={layer.label}>
            <text
              x={barX - 10}
              y={y + barHeight / 2 + 4}
              textAnchor="end"
              className="fill-foreground text-[10px] font-medium"
            >
              {layer.label}
            </text>
            <rect x={barX} y={y} width={layer.width} height={barHeight} rx="7" className={layer.colorClass} opacity={0.85} />
            <text x={descX} y={y + barHeight / 2 + 4} className="fill-muted-foreground text-[9px]">
              {layer.desc}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export default function page() {
  const [activeId, setActiveId] = useState("intro");

  const observers = useMemo(
    () => ({ current: null as IntersectionObserver | null }),
    [],
  );

  React.useEffect(() => {
    const ids = sections.map((s) => s.id);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const io = new IntersectionObserver(
      (entries) => {
        // pick the entry closest to top that is intersecting
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) =>
            a.boundingClientRect.top > b.boundingClientRect.top ? 1 : -1,
          );
        if (visible[0]?.target?.id) setActiveId(visible[0].target.id);
      },
      {
        root: null,
        rootMargin: "-20% 0px -70% 0px",
        threshold: [0.05, 0.1, 0.2],
      },
    );

    elements.forEach((el) => io.observe(el));
    observers.current = io;

    return () => {
      try {
        io.disconnect();
      } catch {
        // no-op
      }
    };
  }, [observers]);

  const jumpTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background/85">
      {/* Header */}
      <header className="border-b bg-background/70 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="rounded-xl">
                {headerMeta.term}
              </Badge>
              <Badge className="rounded-xl" variant="outline">
                {headerMeta.workTerm}
              </Badge>
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
                {headerMeta.title}
              </h1>
              <p className="text-muted-foreground">
                A reflection on projects, learning goals, and professional
                growth as a {headerMeta.position} at {headerMeta.employer}.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <MetaChip label="Student" value={headerMeta.student} />
              <MetaChip label="Position" value={headerMeta.position} />
              <MetaChip label="Employer" value="Co-operators" />
              <MetaChip label="Term" value={headerMeta.workTerm} />
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {sections.map((s) => {
                const Icon = s.icon;
                return (
                  <Button
                    key={s.id}
                    variant="secondary"
                    className="rounded-2xl"
                    onClick={() => jumpTo(s.id)}
                  >
                    <Icon className="mr-2 h-4 w-4" />
                    {s.label}
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-6xl px-4 py-8">
        <div className="space-y-6">
          {/* Abstract / Introduction */}
          <section id="intro" className="scroll-mt-24">
            <Card className="rounded-3xl shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Abstract / Introduction
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 leading-relaxed text-muted-foreground">
                <p>
                  Welcome to my Summer 2026 co-op work term report — my
                  second term with The Co-operators General Insurance
                  Company. This time around, I moved from supporting API
                  modernization to owning it: leading the migration of our
                  team&rsquo;s API template from R to Python, developing daily
                  on our Python-based Risk Assist APIs, helping enable two new
                  business channels, and building out a more systematic
                  approach to testing across the team&rsquo;s API solutions.
                </p>
                <p>
                  Where my first term was about learning the stack, this term
                  was about taking ownership within it. This report reflects
                  on the goals I set, the projects I shipped, and what I
                  learned along the way — including where I still have room
                  to grow.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* About the Employer */}
          <section id="employer" className="scroll-mt-24">
            <Card className="rounded-3xl shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="h-5 w-5" />
                  About the Employer
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 leading-relaxed text-muted-foreground">
                <p>
                  The Co-operators is a leading Canadian insurance and
                  financial services company providing home, auto, life,
                  business, farm, travel, and investment products. With
                  headquarters in Guelph, Ontario and offices across Canada,
                  the company is known for its values-driven culture and focus
                  on community impact.
                </p>
                <div className="rounded-2xl border bg-muted/30 p-4">
                  <div className="flex items-start gap-3">
                    <Sparkles className="mt-0.5 h-5 w-5 text-muted-foreground" />
                    <div className="space-y-2">
                      <p className="font-medium text-foreground">
                        My team, again: LEGO Team
                      </p>
                      <p>
                        I returned to the LEGO Team, which develops and
                        maintains internal APIs and data transformation
                        pipelines that support analytics, modelling, and
                        enterprise systems. Coming back for a second term
                        meant skipping most of the onboarding and getting
                        straight into ownership-level work from week one.
                      </p>
                      <p>
                        The team was mid-migration from a legacy R Plumber API
                        architecture toward a Python-based stack, using
                        Git-based collaboration and structured deployment
                        processes to keep everything reliable along the way.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Goals & Learning Outcomes */}
          <section id="goals" className="scroll-mt-24">
            <Card className="rounded-3xl shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Goals & Learning Outcomes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <p className="text-muted-foreground leading-relaxed">
                  Below is a summary of the goals I set at the start of the
                  term, the actions I took, and the reflections on my progress.
                </p>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {goalData.map((g) => (
                    <Card key={g.id} className="rounded-3xl">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-base">{g.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">
                          Goal: {g.goal}
                        </p>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="space-y-1">
                          <p className="text-sm font-medium">Actions</p>
                          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                            {g.actions.map((a, idx) => (
                              <li key={idx}>{a}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium">
                            Measure of Success
                          </p>
                          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                            {g.measure.map((m, idx) => (
                              <li key={idx}>{m}</li>
                            ))}
                          </ul>
                        </div>
                        <Separator />
                        <div className="space-y-1">
                          <p className="text-sm font-medium">Reflection</p>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {g.reflection}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Job Description */}
          <section id="job" className="scroll-mt-24">
            <Card className="rounded-3xl shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5" />
                  Job Description
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  As a Data Integration Intern / API Developer, I contributed
                  to several core development, enablement, and quality
                  initiatives this term.
                </p>

                <div className="space-y-3">
                  <p className="font-medium">Selected Work, Visualized</p>
                  <div className="grid gap-4 lg:grid-cols-3">
                    <DiagramCard
                      title="R → Python API Migration"
                      caption="I refactored our API template's routing, business logic, and response formatting from R Plumber into Python FastAPI, validating output parity at every layer before the team adopted it."
                    >
                      <MigrationDiagram />
                    </DiagramCard>
                    <DiagramCard
                      title="Two New Business Channels"
                      caption="I helped enable two new partner-facing channels onto the existing Risk Assist API, gathering requirements directly from business partners and implementing the changes needed to support each one."
                    >
                      <ChannelsDiagram />
                    </DiagramCard>
                    <DiagramCard
                      title="Test Suite Layers"
                      caption="For each API I owned, I wrote tests at multiple levels — from fast unit checks up through regression and performance testing — rather than relying on a single layer of coverage."
                    >
                      <TestLayersDiagram />
                    </DiagramCard>
                  </div>
                </div>

                <div className="rounded-2xl border p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-medium">Key Responsibilities</p>
                    <Badge className="rounded-xl" variant="secondary">
                      5 areas
                    </Badge>
                  </div>
                  <Separator className="my-3" />

                  <Accordion type="multiple" className="w-full">
                    {jobResponsibilities.map((r, idx) => (
                      <AccordionItem
                        key={idx}
                        value={`jr-${idx}`}
                        className="rounded-2xl border px-3 mb-2 last:border-b"
                      >
                        <AccordionTrigger className="text-left">
                          <span className="font-medium">
                            {idx + 1}. {r.title}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                            {r.body.map((chunk, cIdx) => {
                              if (Array.isArray(chunk)) {
                                return (
                                  <ul
                                    key={cIdx}
                                    className="list-disc pl-5 space-y-1"
                                  >
                                    {chunk.map((li, liIdx) => (
                                      <li key={liIdx}>{li}</li>
                                    ))}
                                  </ul>
                                );
                              }
                              return <p key={cIdx}>{chunk}</p>;
                            })}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Conclusions */}
          <section id="conclusion" className="scroll-mt-24">
            <Card className="rounded-3xl shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  Conclusions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 leading-relaxed text-muted-foreground">
                <p>
                  My Summer 2026 co-op term at Co-operators built directly on
                  what I started in my first term — but this time the
                  projects had real production weight behind them: an API
                  template migration the team will keep building on, two
                  business channels with external partners waiting on them,
                  and test suites that had to hold up under regression
                  pressure, not just pass once. My performance reflected
                  that: I consistently met or exceeded expectations across
                  the term, with my ability to pick up new material quickly
                  standing out in particular.
                </p>
                <p>
                  If there&rsquo;s one thing I&rsquo;m carrying forward from
                  this term, it&rsquo;s initiative. The feedback I got was
                  that I tend to wait to be assigned unfamiliar work rather
                  than asking for it — a fair read, and one I recognize in
                  myself. Next term, I want to be the one raising my hand for
                  the messier, less-documented tasks a teammate is already
                  juggling, instead of waiting for them to land on my plate.
                  Everything I&rsquo;m proud of from this term came from
                  being handed hard problems and working through them; the
                  next step is asking for them earlier.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Acknowledgments */}
          <section id="thanks" className="scroll-mt-24">
            <Card className="rounded-3xl shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Handshake className="h-5 w-5" />
                  Acknowledgments
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 leading-relaxed text-muted-foreground">
                <p>
                  I want to thank the LEGO Team again for a second term of
                  mentorship — this time trusting me with ownership of a
                  migration and direct partner contact, not just supervised
                  tasks. Peer review stayed a constant throughout: every
                  piece of code I shipped got read by someone else first, and
                  that habit caught mistakes before they reached production
                  and made me a more careful engineer in the process.
                </p>
                <p>
                  Particular thanks to the teammates who reviewed the
                  R-to-Python migration piece by piece, and to the business
                  partners who were patient while I learned to translate
                  between their requirements and our implementation. The
                  team&rsquo;s willingness to let me take on real ownership is
                  what made this term feel like a genuine step up from the
                  last one.
                </p>
                <div className="pt-2">
                  <Button
                    className="rounded-2xl"
                    onClick={() => jumpTo("intro")}
                  >
                    Back to top
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
}
