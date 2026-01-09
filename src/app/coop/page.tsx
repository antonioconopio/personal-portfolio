"use client";

import React, { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Building2, Target, Briefcase, CheckCircle2, Handshake, Sparkles } from "lucide-react";

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
  term: "Fall 2025",
  student: "Antonio Conopio",
  position: "Data Integration Intern",
  employer: "The Co-operators General Insurance Company",
  workTerm: "September 2025 – December 2025",
};

const goalData = [
  {
    id: "g1",
    title: "Learning Goal 1 — Strengthen Problem-Solving Skills (Critical & Creative Thinking)",
    goal: "Independently debug and optimize code.",
    actions: [
      "Took ownership of assigned API and data tasks, performing systematic testing to identify issues.",
      "Used internal documentation, R package references, and online research to find solutions before escalating problems.",
      "Applied optimization approaches from coursework and learned new debugging patterns used by the team.",
    ],
    measure: [
      "Resolve 3–4 significant bugs with minimal supervisor intervention.",
      "Receive positive code review feedback.",
    ],
    reflection:
      "This goal was central to my work term, and I exceeded it through hands-on experience with regression testing, deployments, and API modernization. While testing modernized APIs, I independently identified multiple bugs. I developed a custom comparator script to automatically compare expected vs. actual responses, significantly speeding up validation. I became more confident in reading logs, tracing errors, and proposing fixes. This goal was fully met.",
  },
  {
    id: "g2",
    title: "Learning Goal 2 — Improve Professional Written Communication (Written Communication)",
    goal: "Produce clear, accurate technical documentation.",
    actions: [
      "Drafted documentation for API behaviour, testing processes, and deployment notes.",
      "Asked teammates to review my documentation to improve clarity.",
      "Studied high-quality examples in internal repositories to model structure and tone.",
    ],
    measure: [
      "Documentation approved without major revisions.",
      "Team members can replicate work using my documentation.",
    ],
    reflection:
      "Over the term, I prepared documentation for API deployments, throughout the GitHub repositories, and within API codebases. Team members used my notes to understand changes without needing additional clarification, which demonstrated that the documentation was clear and useful. I learned how to write succinct, professional explanations tailored to technical teammates and to follow documentation guidelines. This goal was fully achieved.",
  },
  {
    id: "g3",
    title: "Learning Goal 3 — Analyze Requirements & Translate Into Technical Solutions (Inquiry & Analysis)",
    goal: "Strengthen ability to interpret requirements and implement accurate solutions.",
    actions: [
      "Participated in requirement gathering related to API modernization and R recipe development.",
      "Broke down requirements into task lists and pseudocode.",
      "Clarified expectations with senior developers where needed.",
    ],
    measure: [
      "Complete 80% of tasks according to original requirements with minimal rework.",
      "Positive supervisor feedback.",
    ],
    reflection:
      "This goal was developed throughout my work on R recipe creation and API revamping. Each recipe required precise preprocessing logic and validation criteria, which I translated into code and tested carefully. When modernizing an API, I reviewed requirements, mapped old vs. new architecture, and identified areas requiring design clarification. Tasks were consistently completed according to the original specifications, and rework was minimal. This goal was also fully met.",
  },
  {
    id: "g4",
    title: "Learning Goal 4 — Broaden Technological Literacy (Technological Literacy)",
    goal: "Expand knowledge of tools, frameworks, and technologies used at Co-operators.",
    actions: [
      "Explored the company’s R Plumber API architecture, deployment tools, Git repositories, internal frameworks, and workflow pipelines.",
      "Created a personal knowledge base documenting learnings.",
      "Discussed tool usage with team members to understand best practices.",
    ],
    measure: [
      "Integrate at least one new technology into a project.",
      "Demonstrate increased comfort with the tech stack.",
    ],
    reflection:
      "Throughout my term, I significantly expanded my understanding of R Plumber APIs, deployment pipelines, automated testing, regression testing frameworks, and R recipe packages. I completed over 10 deployments, gaining familiarity with deployment sequencing, CI/CD, communication protocols, and troubleshooting steps. I successfully integrated new tools into my work, including an automated comparison script and utilizing Git tags to increase repository organization. By the end of the term, I felt confident navigating the team’s entire tech stack. This goal was fully met.",
  },
];

const jobResponsibilities = [
  {
    title: "API Learning & Architecture Familiarization",
    body: [
      "I completed an extensive internal learning path covering:",
      [
        "R Plumber APIs",
        "Internal API architecture & naming conventions",
        "Error handling patterns",
        "Deployment workflow",
      ],
      "This foundation prepared me to contribute meaningfully to the team’s modernization work.",
    ],
  },
  {
    title: "Regression Testing & Bug Identification",
    body: [
      "I performed regression testing for APIs undergoing modernization.",
      "Tasks included:",
      [
        "Executing test cases",
        "Validating outputs against expected behaviour",
        "Investigating discrepancies",
        "Collaborating with developers and modelers to resolve issues",
      ],
      "I discovered multiple bugs and built a comparator script to streamline output analysis.",
    ],
  },
  {
    title: "R Recipe Creation, Treatment, and Validation",
    body: [
      "I developed four R-based data preprocessing recipes, which are used as inputs to downstream models.",
      "This required:",
      [
        "Learning the recipe package",
        "Understanding business logic",
        "Validating transformations",
        "Debugging inconsistencies",
      ],
      "This project strengthened my analytical and data processing skills.",
    ],
  },
  {
    title: "API Modernization",
    body: [
      "Toward the end of the term, I was assigned a major project to revamp and modernize an existing API into the company’s new target architecture.",
      "This included:",
      [
        "Reviewing requirements",
        "Understanding legacy behaviour",
        "Designing updated logic",
        "Troubleshooting architectural differences",
      ],
      "This project strengthened my overall understanding of the API structure and the development process.",
    ],
  },
  {
    title: "Deployment Support",
    body: [
      "I participated in 10+ deployments, gaining experience with:",
      [
        "Deployment windows",
        "Cross-team communication",
        "Validating deployed services",
        "Rollback planning",
      ],
      "I learned how production deployments operate in real enterprise environments.",
    ],
  },
];

function cx(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function ScrollSpyNav({ activeId, onJump }: { activeId: string; onJump: (id: string) => void }) {
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
                      : "hover:bg-muted/60 text-muted-foreground hover:text-foreground"
                  )}
                >
                  <Icon className={cx("h-4 w-4", active ? "text-foreground" : "text-muted-foreground")} />
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

export default function page() {
  const [activeId, setActiveId] = useState("intro");

  const observers = useMemo(() => ({ current: null as IntersectionObserver | null }), []);

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
          .sort((a, b) => (a.boundingClientRect.top > b.boundingClientRect.top ? 1 : -1));
        if (visible[0]?.target?.id) setActiveId(visible[0].target.id);
      },
      {
        root: null,
        rootMargin: "-20% 0px -70% 0px",
        threshold: [0.05, 0.1, 0.2],
      }
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
                A reflection on projects, learning goals, and professional growth as a {headerMeta.position} at {" "}
                {headerMeta.employer}.
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
                  Welcome to my Fall 2025 co-op work term report. This website highlights my experience working as a Data Integration Intern at The
                  Co-operators General Insurance Company, where I contributed to API modernization, deployment processes, data preprocessing workflows,
                  and internal testing frameworks.
                </p>
                <p>
                  Throughout the term, I strengthened both my technical and professional communication skills while gaining hands-on experience in R,
                  API development, and cross-team collaboration. This report reflects on my goals, the projects I completed, and what I learned during
                  my time at Co-operators.
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
                  The Co-operators is a leading Canadian insurance and financial services company providing home, auto, life, business, farm, travel,
                  and investment products. With headquarters in Guelph, Ontario and offices across Canada, the company is known for its values-driven
                  culture and focus on community impact.
                </p>
                <div className="rounded-2xl border bg-muted/30 p-4">
                  <div className="flex items-start gap-3">
                    <Sparkles className="mt-0.5 h-5 w-5 text-muted-foreground" />
                    <div className="space-y-2">
                      <p className="font-medium text-foreground">My team: LEGO Team</p>
                      <p>
                        I worked with the LEGO Team, which develops and maintains internal R-based APIs and data transformation pipelines that support
                        analytics, modelling, and enterprise systems.
                      </p>
                      <p>
                        The team uses a modern R Plumber API architecture, Git-based collaboration, and structured deployment processes to ensure
                        reliability and scalability across the organization.
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
                  Below is a summary of the goals I set at the start of the term, the actions I took, and the reflections on my progress.
                </p>

                <div className="grid gap-4 md:grid-cols-2">
  {goalData.map((g) => (
    <Card key={g.id} className="rounded-3xl">
      <CardHeader className="pb-3">
        <CardTitle className="text-base">{g.title}</CardTitle>
        <p className="text-sm text-muted-foreground">Goal: {g.goal}</p>
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
          <p className="text-sm font-medium">Measure of Success</p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
            {g.measure.map((m, idx) => (
              <li key={idx}>{m}</li>
            ))}
          </ul>
        </div>
        <Separator />
        <div className="space-y-1">
          <p className="text-sm font-medium">Reflection</p>
          <p className="text-sm text-muted-foreground leading-relaxed">{g.reflection}</p>
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
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  As a Data Integration Intern, I contributed to several core development and modernization initiatives.
                </p>

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
                      <AccordionItem key={idx} value={`jr-${idx}`} className="rounded-2xl border px-3 mb-2">
                        <AccordionTrigger className="text-left">
                          <span className="font-medium">{idx + 1}. {r.title}</span>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                            {r.body.map((chunk, cIdx) => {
                              if (Array.isArray(chunk)) {
                                return (
                                  <ul key={cIdx} className="list-disc pl-5 space-y-1">
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
                  My Fall 2025 co-op term at Co-operators was an invaluable learning experience that strengthened my technical skills, confidence, and
                  professional communication. I gained hands-on experience with R API development, regression testing, deployments, and data preprocessing
                  frameworks while achieving all four learning goals I set at the start of the term.
                </p>
                <p>
                  My time at Co-operators has prepared me for future co-op roles and full-time positions in data engineering, API development, and
                  analytics.
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
                  I would like to thank the LEGO team for their continuous support and mentorship throughout the term. Special thanks to my mentor and
                  team lead who reviewed my code, helped me navigate deployments, and provided valuable feedback that greatly improved my technical
                  confidence and productivity.
                </p>
                <p>
                  The positive team culture and willingness to help made this work term a meaningful and motivating experience.
                </p>
                <div className="pt-2">
                  <Button className="rounded-2xl" onClick={() => jumpTo("intro")}>
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
