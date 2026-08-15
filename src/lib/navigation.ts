export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/buyers", label: "Buyers" },
  { href: "/partners", label: "Technology Partners" },
  { href: "/solutions", label: "Solutions" },
  { href: "/trust", label: "Trust & Compliance" },
  { href: "/engagements", label: "Engagements" },
  { href: "/about", label: "About" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerColumns = [
  {
    title: "Platform",
    links: [
      { href: "/buyers", label: "For Buyers" },
      { href: "/partners", label: "For Partners" },
      { href: "/solutions", label: "Solutions" },
      { href: "/engagements", label: "Engagements" },
    ],
  },
  {
    title: "Institution",
    links: [
      { href: "/about", label: "About PDSCOMM" },
      { href: "/trust", label: "Trust & Compliance" },
      { href: "/insights", label: "Insights & Briefs" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Engage",
    links: [
      { href: "/contact", label: "Schedule a Briefing" },
      { href: "/buyers#intake", label: "Submit Requirements" },
      { href: "/partners#register", label: "Partner Registration" },
      { href: "/trust#hotline", label: "Compliance Desk" },
    ],
  },
] as const;

export const offices = [
  { city: "California", region: "Headquarters", tz: "America/Los_Angeles", focus: "Global operations & buyer engagement" },
  { city: "Dubai", region: "MENA Hub", tz: "Asia/Dubai", focus: "GCC sovereign & enterprise sourcing" },
  { city: "Singapore", region: "APAC Hub", tz: "Asia/Singapore", focus: "Regional compliance & partner network" },
  { city: "China", region: "Greater China", tz: "Asia/Shanghai", focus: "Technology landscape intelligence" },
] as const;
