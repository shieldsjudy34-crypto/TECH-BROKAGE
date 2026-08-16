/* ------------------------------------------------------------------
   PDSCOMM — Central site content.
   Edit copy here; pages render from this source of truth.
------------------------------------------------------------------- */

export const site = {
  name: "PDSCOMM",
  domain: "pdscomm.com",
  hq: "California, USA",
  presence: ["California", "Texas", "Dubai", "Singapore", "China"],
  description:
    "PDSCOMM connects government and enterprise buyers with qualified AI software providers—supporting sourcing, evaluation, and due diligence from requirements to shortlist.",
  ctas: {
    briefing: { label: "Schedule a 15‑Minute Briefing", href: "/contact" },
    requirements: { label: "Submit Requirements", href: "/contact" },
    partner: { label: "Partner Intake", href: "/contact" },
  },
};

export type NavItem = {
  label: string;
  href: string;
  short?: string;
  children?: { label: string; href: string }[];
};

export const nav: NavItem[] = [
  { label: "Buyers", href: "/buyers" },
  { label: "Technology Partners", href: "/technology-partners", short: "Partners" },
  { label: "Solutions", href: "/solutions" },
  { label: "Trust & Compliance", href: "/trust-compliance", short: "Trust" },
  { label: "Insights", href: "/insights" },
  {
    label: "About",
    href: "/about",
    children: [{ label: "Founder", href: "/founder" }],
  },
  { label: "Contact", href: "/contact" },
];

export const footerNav = [
  { label: "Home", href: "/" },
  { label: "Buyers", href: "/buyers" },
  { label: "Technology Partners", href: "/technology-partners" },
  { label: "Solutions", href: "/solutions" },
  { label: "Trust & Compliance", href: "/trust-compliance" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
  { label: "Founder", href: "/founder" },
  { label: "Contact", href: "/contact" },
];

/* ---------------------------------- Home ------------------------------ */

export const pillarCards = [
  {
    icon: "FileText",
    title: "Buyer Requirements",
    body: "We structure institutional requirements into clear, comparable briefs—capturing objectives, constraints, integration realities, and success criteria before any market activity begins.",
  },
  {
    icon: "Search",
    title: "Vendor Sourcing & Shortlisting",
    body: "Market scans across AI software categories, filtered for use-case fit, deployment compatibility, and procurement readiness—so buyers review shortlists, not noise.",
  },
  {
    icon: "ShieldCheck",
    title: "Evaluation & Due Diligence Support",
    body: "Comparison frameworks, evaluation scorecards, and diligence coordination that support institutional decision processes—documented in the manner procurement teams expect.",
  },
];

export const buyerMarkets = [
  {
    icon: "Landmark",
    title: "Government Buyers",
    body: "Civilian and public-sector-adjacent organizations that need documentation-conscious sourcing, defined information boundaries, and engagement structures that respect agency procurement environments.",
    points: [
      "NDA-first engagement posture",
      "Documentation practices commonly expected in institutional procurement",
      "Adapted to agency procurement structures",
    ],
  },
  {
    icon: "Building2",
    title: "Enterprise Buyers",
    body: "Regulated and high-procurement private-sector organizations that require rigorous evaluation, security-awareness, and defensible selection processes before adoption.",
    points: [
      "Structured evaluation and comparison frameworks",
      "Diligence across data handling and deployment model",
      "Support for internal governance and risk processes",
    ],
  },
];

export const capabilityItems = [
  {
    icon: "FileText",
    title: "Document Intelligence & Knowledge Retrieval",
    body: "Extraction, summarization, search, and retrieval across institutional document estates.",
  },
  {
    icon: "Eye",
    title: "Computer Vision",
    body: "Inspection, monitoring, and operational vision use cases across structured environments.",
  },
  {
    icon: "TrendingUp",
    title: "Predictive Analytics & Forecasting",
    body: "Demand, risk, maintenance, and operational forecasting built for decision support.",
  },
  {
    icon: "Fingerprint",
    title: "Fraud, Risk & Anomaly Detection",
    body: "Detection and scoring workflows for institutions with high-stakes data environments.",
  },
  {
    icon: "Lock",
    title: "Cybersecurity AI",
    body: "AI-assisted defense, triage, and security operations tooling.",
  },
  {
    icon: "Workflow",
    title: "MLOps, Monitoring & Governance Tooling",
    body: "Model lifecycle, monitoring, and governance platforms that keep AI deployments accountable.",
  },
];

export const engagementTimeline = [
  {
    title: "Briefing & requirements intake",
    body: "A structured 15-minute conversation to align on objectives, constraints, timelines, and the appropriate engagement path.",
  },
  {
    title: "Market scan & candidate discovery",
    body: "A disciplined scan of qualified providers across relevant AI software categories, filtered against your stated requirements.",
  },
  {
    title: "Qualification & shortlist build",
    body: "Candidates are assessed for use-case fit, deployment compatibility, and procurement readiness before a shortlist is presented.",
  },
  {
    title: "Evaluation support & comparison framework",
    body: "Side-by-side comparison frameworks and scorecards that make institutional decisions defensible and repeatable.",
  },
  {
    title: "Due diligence coordination",
    body: "Structured coordination across data handling, security documentation, model governance, and vendor maturity.",
  },
  {
    title: "Introductions, pilots & procurement support",
    body: "Qualified introductions, pilot planning support, and documentation to carry the engagement through procurement.",
  },
];

export const vettingCriteria = [
  {
    title: "Clear use cases & measurable outcomes",
    body: "Providers must articulate specific problems and how outcomes are measured.",
  },
  {
    title: "Deployment & integration compatibility",
    body: "Architecture, data flow, and integration paths assessed against buyer environments.",
  },
  {
    title: "Security & data handling documentation readiness",
    body: "Documentation practices commonly expected in institutional procurement are reviewed, not assumed.",
  },
  {
    title: "Support model & delivery capability",
    body: "Implementation support, SLAs, and ongoing service models are evaluated for scale and durability.",
  },
];

export const trustHighlights = [
  {
    title: "NDA-first engagements",
    body: "Confidentiality is defined before requirements are shared. NDA availability where appropriate.",
  },
  {
    title: "Information handling expectations defined per buyer",
    body: "Boundaries, handling, and disclosure practices are agreed per engagement—not assumed.",
  },
  {
    title: "Governance & risk considerations as required",
    body: "Alignment to institutional risk processes, with considerations documented and surfaced throughout.",
  },
  {
    title: "Structured documentation to support evaluation",
    body: "Frameworks, scorecards, and logs structured to support procurement decision processes.",
  },
];

export const selectedEngagements = [
  {
    ref: "ENG-01",
    sector: "Civilian records",
    region: "California",
    objective:
      "Move a public-sector records estate from vendor demos to a defensible document-intelligence shortlist.",
    scope:
      "Requirements brief, market scan, and comparison framework across extraction, retrieval, and audit-trail providers.",
    constraints:
      "On-premise preference, NDA before any file samples, no public RFP at intake.",
    outcome:
      "Three-vendor shortlist, weighted scorecard, and a 60-day pilot outline with exit criteria.",
  },
  {
    ref: "ENG-02",
    sector: "Public payments",
    region: "Dubai",
    objective:
      "Identify fraud, waste, and anomaly-detection software that could survive institutional review.",
    scope:
      "Sourcing and diligence across detection, scoring, and case-handling vendors for a program-payment environment.",
    constraints:
      "In-region data handling, documentation-first posture, agency procurement tempo.",
    outcome:
      "Two providers cleared for buyer-side evaluation, with data-flow and monitoring notes attached to the pack.",
  },
  {
    ref: "ENG-03",
    sector: "Regulated finance",
    region: "Singapore",
    objective:
      "Select an anomaly-detection platform that could sit beside an existing rules engine—not replace it overnight.",
    scope:
      "Evaluation support across fit, deployment model, model governance, and vendor maturity.",
    constraints:
      "Hybrid deployment, internal risk sign-off, no production data in the first exchange.",
    outcome:
      "Scorecarded shortlist of two, plus a 90-day pilot brief with success measures and a walk-away clause.",
  },
  {
    ref: "ENG-04",
    sector: "Industrial inspection",
    region: "China",
    objective:
      "Map computer-vision providers that could operate in a constrained, on-premise inspection environment.",
    scope:
      "Partner-market scan, qualification, and integration-surface mapping for vision and maintenance use cases.",
    constraints:
      "Air-gapped deployment, no cloud inference, Chinese and international vendor mix.",
    outcome:
      "Shortlist of two specialists and one platform, with architecture and support-model notes for procurement.",
  },
];

/* ------------------------------- Buyers ------------------------------- */

export const buyerEngagementModels = [
  {
    icon: "Compass",
    title: "Advisory",
    body: "Structured guidance on AI sourcing strategy, requirement formulation, and market readiness—without vendor bias.",
  },
  {
    icon: "Search",
    title: "Sourcing",
    body: "Requirements-driven market scans and shortlist construction against your stated constraints and timelines.",
  },
  {
    icon: "FileCheck2",
    title: "Evaluation support",
    body: "Comparison frameworks, scorecards, and demonstration structures that make selection defensible.",
  },
  {
    icon: "Workflow",
    title: "Ongoing partner management",
    body: "Continuity across contract transitions, renewals, and new requirements as your landscape evolves.",
  },
];

export const procurementDocs = [
  {
    title: "Requirements brief",
    body: "A structured brief capturing objectives, constraints, integration realities, and acceptance criteria—confirmed per buyer.",
  },
  {
    title: "Vendor comparison framework",
    body: "Side-by-side evaluation dimensions across fit, risk, maturity, and procurement readiness.",
  },
  {
    title: "Evaluation scorecard",
    body: "Weighted scoring aligned to your decision criteria, documented for internal review.",
  },
  {
    title: "Pilot readiness outline",
    body: "A practical outline of pilot scope, success measures, and exit criteria before commitment.",
  },
];

export const diligenceAreas = [
  {
    title: "Data handling",
    body: "Data flows, retention, residency, and processing boundaries examined against your expectations.",
  },
  {
    title: "Deployment model",
    body: "Cloud, hybrid, on-premise, and software-as-a-service considerations assessed for compatibility.",
  },
  {
    title: "Security documentation",
    body: "Documentation practices commonly expected in institutional procurement—reviewed as considerations.",
  },
  {
    title: "Model governance",
    body: "Monitoring, drift, versioning, and oversight practices aligned to responsible AI expectations.",
  },
  {
    title: "Vendor maturity",
    body: "Team depth, delivery capacity, support model, and long-term viability assessed on available evidence.",
  },
];

/* ------------------------- Technology Partners ------------------------ */

export const partnerQualities = [
  {
    icon: "Target",
    title: "Clear use cases",
    body: "Specific problems solved, with measurable outcomes rather than generic capability claims.",
  },
  {
    icon: "Server",
    title: "Deployment readiness",
    body: "Practical deployment paths—cloud, hybrid, on-premise—and documented integration approaches.",
  },
  {
    icon: "ShieldCheck",
    title: "Security & documentation posture",
    body: "Willingness to provide institutional-grade documentation; posture assessed, never assumed.",
  },
  {
    icon: "Users",
    title: "Implementation support",
    body: "Delivery capability, support model, and the ability to carry institutional engagements.",
  },
];

export const partnerTiers = [
  {
    tier: "Sourced",
    body: "Identified through market scans and assessed against buyer requirement profiles. The entry tier of the partner relationship.",
  },
  {
    tier: "Evaluated",
    body: "Subject to structured evaluation across use-case fit, deployment compatibility, and documentation readiness.",
  },
  {
    tier: "Preferred",
    body: "Demonstrated fit, delivery capability, and procurement readiness across repeated buyer engagements.",
  },
];

export const partnerOnboarding = [
  {
    title: "Product brief",
    body: "Capability overview, positioning, and what the product does—and does not—do.",
  },
  {
    title: "Use cases",
    body: "Referenceable problem statements where the technology is proven, or planned. Details may remain under NDA.",
  },
  {
    title: "Deployment model",
    body: "Cloud, hybrid, on-premise, or API—and the integration realities buyers should expect.",
  },
  {
    title: "Security pack",
    body: "Security and data-handling documentation posture, structured for institutional review.",
  },
  {
    title: "Pricing model",
    body: "Commercial structure and the procurement implications buyers should anticipate.",
  },
  {
    title: "Ideal buyer profile",
    body: "Which institutions, sectors, and requirements the product is best matched to.",
  },
];

export const partnerReadinessChecklist = [
  {
    title: "Architecture overview",
    body: "A clear description of system architecture, dependencies, and deployment topology.",
  },
  {
    title: "Data flow",
    body: "What data is ingested, processed, stored, and returned—and where each step occurs.",
  },
  {
    title: "Model governance",
    body: "Monitoring, retraining, versioning, and drift-management practices.",
  },
  {
    title: "Support model",
    body: "Service levels, escalation paths, and the team structure behind delivery.",
  },
  {
    title: "References if available",
    body: "Customer references are welcome where permitted; never assumed or fabricated.",
  },
];

/* ------------------------------ Solutions ----------------------------- */

export const solutionCategories = [
  {
    icon: "FileText",
    title: "Document Intelligence",
    body: "Requirements parsing, contract and record analysis, and knowledge retrieval at institutional scale.",
  },
  {
    icon: "Eye",
    title: "Computer Vision",
    body: "Inspection, monitoring, and operational vision for structured physical environments.",
  },
  {
    icon: "TrendingUp",
    title: "Predictive Analytics",
    body: "Forecasting for demand, operations, maintenance, and risk decision support.",
  },
  {
    icon: "Fingerprint",
    title: "Fraud, Risk & Anomaly Detection",
    body: "Detection, scoring, and alerting for high-stakes transactional environments.",
  },
  {
    icon: "Lock",
    title: "Cybersecurity AI",
    body: "Triage, detection, and response tooling to strengthen institutional security operations.",
  },
  {
    icon: "Workflow",
    title: "MLOps & Governance",
    body: "Lifecycle management, monitoring, and oversight tooling for accountable AI.",
  },
];

export const deploymentConsiderations = [
  {
    title: "Cloud, hybrid & on-premise",
    body: "Deployment topology and environment constraints are aligned to buyer infrastructure—as considerations, not guarantees.",
  },
  {
    title: "API & integration surfaces",
    body: "Integration paths into existing systems, identity, and data layers are mapped during evaluation.",
  },
  {
    title: "Identity & access",
    body: "Access control and authentication alignment is examined against institutional standards.",
  },
  {
    title: "Data systems",
    body: "Interoperability with existing data estates, warehouses, and pipelines is assessed per requirement.",
  },
];

export const evaluationLens = [
  {
    title: "Fit",
    body: "How directly the capability addresses the stated requirement, in the buyer's real environment.",
  },
  {
    title: "Risk",
    body: "Data, security, and governance exposure—surfaced early and documented for decision-makers.",
  },
  {
    title: "Maturity",
    body: "Provider stability, delivery depth, and product evolution evidence.",
  },
  {
    title: "Procurement readiness",
    body: "Documentation, contracting, and support structures required for institutional adoption.",
  },
];

export const riskMitigations = [
  {
    title: "Data quality",
    body: "Assessment of input data readiness and the mitigation practices providers apply.",
  },
  {
    title: "Privacy",
    body: "Processing boundaries, retention, and residency examined against buyer expectations.",
  },
  {
    title: "Model drift",
    body: "Monitoring and retraining practices evaluated for sustained performance.",
  },
  {
    title: "Explainability",
    body: "Output transparency and audit trail capability examined where required.",
  },
  {
    title: "Vendor viability",
    body: "Commercial durability and continuity assessed across the engagement horizon.",
  },
];

/* ----------------------------- Engagements ---------------------------- */

export const engagementFields = [
  "Sector",
  "Region",
  "Objective",
  "Scope",
  "Constraints",
  "Outcome",
];

export const methodologyRecap = [
  {
    title: "Intake",
    body: "Requirements, constraints, and timelines captured in a structured briefing.",
  },
  {
    title: "Scan",
    body: "Market discovery across qualified providers, filtered against the brief.",
  },
  {
    title: "Qualify",
    body: "Shortlist construction across fit, risk, maturity, and readiness.",
  },
  {
    title: "Evaluate",
    body: "Comparison frameworks and scorecards supporting institutional decisions.",
  },
  {
    title: "Diligence",
    body: "Structured coordination of documentation, data handling, and governance review.",
  },
  {
    title: "Introduce",
    body: "Qualified introductions and procurement support through decision.",
  },
];

/* -------------------------- Trust & Compliance ------------------------ */

export const trustPillars = [
  {
    icon: "Vault",
    title: "Confidentiality-first engagement posture",
    body: "NDA availability where appropriate, defined information boundaries, and buyer-defined handling expectations established before sensitive detail is shared.",
  },
  {
    icon: "Scale",
    title: "Institutional security & governance awareness",
    body: "We reference frameworks and controls commonly requested in institutional contexts—NIST AI RMF, SOC 2-style controls, ISO 27001-style policies, GDPR and CCPA considerations—as alignment considerations, not certifications.",
  },
  {
    icon: "Fingerprint",
    title: "Vendor due diligence lens",
    body: "Architecture, data flows, model monitoring, retention, support, SLAs, and vendor viability are examined as structured diligence dimensions.",
  },
  {
    icon: "Eye",
    title: "Responsible AI principles",
    body: "Bias considerations, explainability, audit trails, and human oversight where required are written into evaluation frameworks, not left implicit.",
  },
];

export const frameworkNotes = [
  {
    title: "NIST AI RMF",
    body: "Govern, map, measure, and manage—used as a structuring reference for diligence conversations.",
  },
  {
    title: "SOC 2-style controls",
    body: "Control descriptions in the style of SOC 2 reports are reviewed as documentation, where provided by vendors.",
  },
  {
    title: "ISO 27001-style policies",
    body: "Policy documentation in the style of ISO 27001 is treated as an alignment consideration.",
  },
  {
    title: "GDPR / CCPA considerations",
    body: "Data processing and residency expectations are examined against applicable privacy frameworks.",
  },
];

export const procurementSupportDocs = [
  {
    title: "Comparison frameworks",
    body: "Structured side-by-side evaluation dimensions, documented and repeatable.",
  },
  {
    title: "Requirement mapping",
    body: "Traceability from stated requirements to vendor capability claims.",
  },
  {
    title: "Risk & assumption logs",
    body: "Living registers that make evaluation rationales visible to decision-makers.",
  },
];

/* -------------------------------- About ------------------------------- */

export const presenceRegions = [
  {
    name: "California",
    role: "Headquarters",
    note: "Global coordination and commercial function. No street address published.",
  },
  {
    name: "Texas",
    role: "Regional presence",
    note: "U.S. engagement coverage beyond California headquarters. No street address published.",
  },
  {
    name: "Dubai",
    role: "Regional presence",
    note: "Gulf and broader Middle East engagement coverage.",
  },
  {
    name: "Singapore",
    role: "Regional presence",
    note: "Southeast Asia and cross-border engagement coverage.",
  },
  {
    name: "China",
    role: "Regional presence",
    note: "Technology landscape coverage and partner market visibility.",
  },
];

export const leadership = [
  {
    name: "Ruben Wagner",
    role: "Founder & Managing Partner",
    href: "/founder",
    background:
      "Sets the firm’s posture: NDA-first intake, requirements before market noise, and a shortlist a procurement team can defend in writing. Coordinates the five-region practice from California.",
    focus: "Buyer engagements, final shortlist quality, and confidentiality standard",
  },
  {
    name: "Buyer Practice",
    role: "Partner — Government & Enterprise",
    background:
      "Runs the two pathways. Government work is documentation-conscious and adapted to agency structure. Enterprise work is built for regulated environments—IT, risk, and commercial sitting at the same table.",
    focus: "Requirements capture, evaluation frameworks, and procurement handover",
  },
  {
    name: "Partner Practice",
    role: "Partner — Technology Partnerships",
    background:
      "Qualifies providers before they ever meet a buyer: use-case clarity, deployment reality, security documentation, and delivery capacity. Tiers are earned across engagements, not granted for a slide.",
    focus: "Vendor qualification, onboarding packs, and partner-to-buyer fit",
  },
];

/* ------------------------------- Founder ------------------------------ */

export const founder = {
  name: "Ruben Wagner",
  role: "Founder & Managing Partner",
  location: "California, USA",
  photoNote:
    "Ruben Wagner, Founder & Managing Partner.",
  lede:
    "Ruben Wagner founded PDSCOMM so government and enterprise buyers could source AI software the way they already buy everything else that matters: with requirements on paper, vendors under diligence, and a shortlist a procurement team can defend.",
  facts: [
    { label: "Seat", value: "Founder & Managing Partner" },
    { label: "Based", value: "California, USA" },
    { label: "Practice", value: "Institutional AI software brokerage" },
    { label: "Regions", value: "California · Texas · Dubai · Singapore · China" },
  ],
  chapters: [
    {
      title: "California, and the habit of reading the file",
      body: [
        "Ruben Wagner is a Californian by formation and by temperament. He came of age around institutions that buy slowly, document thoroughly, and remember every vendor who treated a demo as a substitute for an answer. That environment—civilian agencies, regulated enterprises, committees that have to live with a selection long after the salesperson has left the room—is still the one he writes for.",
        "He did not start as a technologist pitching a stack. He started as someone sitting on the buyer’s side of the table: reading RFPs that were too vague to evaluate, sitting through vendor sessions that were too theatrical to compare, and watching otherwise serious organizations make AI software decisions on the strength of a slide. The work that later became PDSCOMM began as a private irritation with that gap.",
        "The name on this page is a working placeholder for the biography that will be edited to the public record. The posture is not. Wagner’s operating assumption is that institutional buyers do not need more market noise. They need a broker who will hold the requirement still long enough to test a vendor against it.",
      ],
    },
    {
      title: "How institutions actually buy",
      body: [
        "Before PDSCOMM existed as a firm, Wagner spent years inside the mechanics of institutional purchasing—vendor evaluation, comparison frameworks, security questionnaires, and the quiet politics of a committee that has to sign. He learned the difference between a requirement a program office can state in a meeting and a requirement a contracting officer can put in a file.",
        "That distinction still governs the practice. Government buyers, in his view, are not slow because they are unsophisticated. They are slow because the record has to survive audit, turnover, and a successor who was not in the room. Enterprise buyers in regulated environments are not conservative because they dislike AI. They are conservative because IT, risk, legal, and commercial all have to sit at the same table, and none of them can afford a selection they cannot explain.",
        "Wagner’s early work was not “digital transformation.” It was closer to translation: taking a buyer’s operational problem and turning it into a brief a vendor could actually fail. He became known, among the people who worked with him, as the person who would stop a conversation until the success criteria were written down. That habit is now the first hour of a PDSCOMM engagement.",
      ],
    },
    {
      title: "Five markets, one standard",
      body: [
        "California remained the base. Texas was added as a U.S. regional presence—same standard, a second American buying environment. The work did not stay domestic. Wagner spent sustained time in the buying environments that now sit on PDSCOMM’s map—Dubai and the broader Gulf, Singapore and the Southeast Asian corridor, and China as a technology-landscape and partner-market—not as a tourist of “global,” but as someone watching how AI software was being sold into governments and enterprises that do not share a procurement culture.",
        "What he saw was consistent even when the paperwork was not. In every region, vendors arrived with capability claims. In every region, buyers arrived with constraints they had not yet written. The American instinct was to fill the gap with a consultant’s workshop. The marketplace instinct was to fill it with a catalog. Neither produced a shortlist a serious buyer could stand behind.",
        "Wagner’s conclusion was unfashionable and, to him, obvious: the missing institution was a brokerage. Not a consultancy that dabbles in AI. Not a marketplace that auctions vendors. A practice that qualifies providers before they meet a buyer, holds NDAs as the default, and treats evaluation as a documented process rather than a series of impressions. PDSCOMM was built to be that practice, with California as headquarters and Texas, Dubai, Singapore, and China as presence—not flags on a slide.",
      ],
    },
    {
      title: "The brokerage, not the theater",
      body: [
        "PDSCOMM exists because Wagner watched AI software enter procurement queues as if it were ordinary enterprise software from the 2000s: demo first, documentation last, integration treated as a footnote. The category was new. The buying failure was old. He founded the firm to put a procurement-grade process in front of a market that was rewarding speed over defensibility.",
        "The firm’s method is his method. Intake is NDA-first. Requirements are captured before any market scan. Vendors are qualified against use-case, deployment reality, security documentation, and delivery capacity—not against the quality of a keynote. Shortlists are written so a procurement team can defend them. Engagements stay anonymous in public because the buyer’s file is not a marketing asset.",
        "He is particular about what the firm will not do. PDSCOMM does not implement the software it shortlists. It does not take a success fee that would make the broker a hidden salesman. It does not publish a vendor leaderboard. Wagner’s view is that a broker who also wants to be a hero of the category has already left the buyer’s side of the table.",
      ],
    },
    {
      title: "How he works now",
      body: [
        "Wagner still takes the first briefing on a serious buyer engagement. Fifteen minutes is the advertised length because that is usually enough to know whether the requirement is real, whether the buyer can put a committee around it, and whether PDSCOMM is the right instrument. If the answer is no, he says so. If the answer is yes, the work that follows is documentation, not a relationship campaign.",
        "Day to day he coordinates the five-region practice from California: buyer-side engagements, the quality of the final shortlist, and the confidentiality standard that every person in the firm is expected to keep. Named partners and specialists are introduced under NDA when a brief requires them. They are not published as a roster, because a public roster is an invitation to be sold to.",
        "People who work with him describe a narrow set of preferences: fewer meetings, more files; fewer adjectives, more constraints; a shortlist of three that can be compared, not a longlist of twelve that cannot. He still reads the packet. That is not branding. It is how he decides whether PDSCOMM did the job.",
      ],
    },
  ],
  history: [
    {
      period: "Formation",
      title: "Learning the institutional file",
      body: "California. Early years spent around public-sector and regulated-enterprise buying—not as a vendor, but as someone responsible for making selections that had to survive a file review. The discipline of writing requirements before hearing a pitch dates from this period.",
    },
    {
      period: "Institutional markets",
      title: "Vendor evaluation as a craft",
      body: "Sustained work in comparison frameworks, security and deployment questionnaires, and committee process. Wagner’s practice formed around a single test: can a buyer who was not in the demo room still understand why this vendor, and not the other two?",
    },
    {
      period: "Gulf & Asia",
      title: "The same gap, different paperwork",
      body: "Extended time in Dubai, Singapore, and China market environments, with Texas as the second U.S. presence. Confirmed that AI software was being sold globally with the same demo-first habit, while buyers in each region still needed documentation their own procurement culture would accept. The five-region map of PDSCOMM comes from this work, not from a later expansion slide.",
    },
    {
      period: "The thesis",
      title: "Brokerage instead of consultancy or marketplace",
      body: "The decision to build a firm that qualifies vendors, holds the requirement still, and never implements what it shortlists. Wagner rejected both the consultant’s workshop model and the catalog model. PDSCOMM is the resulting instrument: NDA-first, procurement-grade, buyer-side.",
    },
    {
      period: "PDSCOMM",
      title: "Founder & Managing Partner",
      body: "Established the firm from California with presence in Texas, Dubai, Singapore, and China. Sets intake posture, shortlist standard, and confidentiality. Still takes the opening briefing. The public biography on this page will be edited to the dated record; the operating standard will not.",
    },
  ],
  workingWith: [
    {
      title: "The briefing",
      body: "Fifteen minutes, no deck dump. Wagner uses it to test whether the requirement is real, whether a committee can own it, and whether PDSCOMM should take the work. If the fit is wrong, the conversation ends there.",
    },
    {
      title: "The file",
      body: "He prefers a packet to a narrative. Constraints, integration realities, data-handling boundaries, and success criteria—written so a successor can read them. Market activity does not start until that file exists.",
    },
    {
      title: "The shortlist",
      body: "A comparable set, not a parade. Each name on it has been qualified against the brief. Wagner will not send a buyer a vendor he would not want to defend in a room that includes procurement, risk, and the operator who has to live with the choice.",
    },
    {
      title: "Discretion",
      body: "Engagements are not case studies. Named introductions happen under NDA. Wagner treats the buyer’s process as confidential by default, including when the outcome would be flattering to PDSCOMM.",
    },
  ],
  closing:
    "This page is a working biography. Dates, prior seats, and personal particulars will be replaced with Ruben Wagner’s own record. Until then, treat the name as the placeholder and the method as the fact: a California-based founder running a five-region AI software brokerage from the buyer’s side of the table.",
};

export const operatingPrinciples = [
  {
    icon: "Vault",
    title: "Discretion",
    body: "Confidentiality is the default posture. Nothing is shared without defined boundaries.",
  },
  {
    icon: "Scale",
    title: "Rigor",
    body: "Structured frameworks, documented processes, and defensible evaluation.",
  },
  {
    icon: "Gauge",
    title: "Speed",
    body: "Momentum that respects institutional tempo—fast without recklessness.",
  },
  {
    icon: "Compass",
    title: "Neutrality",
    body: "Buyer-first alignment. We do not take retainers or positions that compromise judgment.",
  },
  {
    icon: "FileCheck2",
    title: "Procurement awareness",
    body: "Every engagement is structured with the documentation and governance expectations of institutional buying in mind.",
  },
];

/* ------------------------------- Insights ------------------------------ */

export const insightCategories = [
  "Procurement Notes",
  "AI Risk",
  "Market Maps",
  "Buyer Briefs",
];

export const featuredInsights = [
  {
    category: "Procurement Notes",
    title: "How institutions should structure AI vendor shortlists",
    abstract:
      "A practical framework for moving from capability marketing to a defensible shortlist—dimensions, weighting, and the questions that separate providers.",
    status: "On request",
  },
  {
    category: "Buyer Briefs",
    title: "What buyers should request before an AI pilot",
    abstract:
      "The documentation, data-handling terms, and evaluation criteria that should precede any pilot commitment—structured for procurement teams.",
    status: "On request",
  },
  {
    category: "AI Risk",
    title: "AI procurement risks that appear after the demo",
    abstract:
      "Drift, support vacuums, integration debt, and vendor continuity—risks that surface post-selection and how to structure against them.",
    status: "On request",
  },
];

export const editorialStandards = [
  "Concise and procurement-oriented; no hype, no vendor theater.",
  "Claims are grounded in observable process and documentation practice.",
  "Specific engagements are published only with client consent, in anonymized form.",
  "Editorial content is not marketing—it exists to make buyers sharper.",
];

/* -------------------------------- Contact ------------------------------ */

export type IntakeField = {
  name: string;
  label: string;
  type: "text" | "email" | "url" | "select" | "textarea";
  options?: string[];
  required?: boolean;
};

export const buyerIntakeFields: IntakeField[] = [
  { name: "name", label: "Name", type: "text", required: true },
  { name: "organization", label: "Organization", type: "text", required: true },
  { name: "role", label: "Role", type: "text", required: false },
  { name: "email", label: "Email", type: "email", required: true },
  {
    name: "region",
    label: "Region",
    type: "select",
    options: ["California", "Texas", "Dubai", "Singapore", "China", "Other"],
    required: true,
  },
  {
    name: "buyerType",
    label: "Buyer Type",
    type: "select",
    options: ["Government", "Enterprise / Private Sector"],
    required: true,
  },
  {
    name: "aiInterest",
    label: "AI Interest Area",
    type: "select",
    options: [
      "Document Intelligence & Knowledge Retrieval",
      "Computer Vision",
      "Predictive Analytics & Forecasting",
      "Fraud, Risk & Anomaly Detection",
      "Cybersecurity AI",
      "MLOps, Monitoring & Governance",
      "Not yet defined",
    ],
    required: false,
  },
  {
    name: "timeline",
    label: "Timeline",
    type: "select",
    options: ["Immediate", "1–3 months", "3–6 months", "6–12 months", "Exploring"],
    required: false,
  },
  { name: "message", label: "Message", type: "textarea", required: false },
];

export const partnerIntakeFields: IntakeField[] = [
  { name: "name", label: "Name", type: "text", required: true },
  { name: "company", label: "Company", type: "text", required: true },
  { name: "website", label: "Website", type: "url", required: false },
  { name: "email", label: "Email", type: "email", required: true },
  {
    name: "aiCategory",
    label: "AI Category",
    type: "select",
    options: [
      "Document Intelligence & Knowledge Retrieval",
      "Computer Vision",
      "Predictive Analytics & Forecasting",
      "Fraud, Risk & Anomaly Detection",
      "Cybersecurity AI",
      "MLOps, Monitoring & Governance",
      "Other",
    ],
    required: true,
  },
  {
    name: "deploymentModel",
    label: "Deployment Model",
    type: "select",
    options: ["Cloud SaaS", "Hybrid", "On-premise", "API / Embedded", "Multiple"],
    required: true,
  },
  {
    name: "targetBuyers",
    label: "Target Buyers",
    type: "select",
    options: ["Government", "Enterprise / Private Sector", "Both"],
    required: false,
  },
  { name: "message", label: "Message", type: "textarea", required: false },
];

/* ------------------------------- Footer ------------------------------- */

export const footerBuyerLinks = [
  { label: "Engagement Models", href: "/buyers/#engagement-models" },
  { label: "Procurement Documentation", href: "/buyers/#procurement-documentation" },
  { label: "Due Diligence Coverage", href: "/buyers/#due-diligence" },
  { label: "Use-Case Library", href: "/solutions/" },
];

export const footerPartnerLinks = [
  { label: "What We Look For", href: "/technology-partners/#what-we-look-for" },
  { label: "Partner Tiers", href: "/technology-partners/#partner-tiers" },
  { label: "Onboarding Process", href: "/technology-partners/#onboarding" },
  { label: "Partner Intake", href: "/contact/" },
];