/* ------------------------------------------------------------------
   Unique visual assets. Never reuse a file across pages.
------------------------------------------------------------------- */

export const media = {
  og: "/og.png",
  home: {
    hero: "/images/home-hero.png",
    whoGovernment: "/images/home-who-government.png",
    whoEnterprise: "/images/home-who-enterprise.png",
    caps: {
      document: "/images/home-cap-document.png",
      vision: "/images/home-cap-vision.png",
      predictive: "/images/home-cap-predictive.png",
      fraud: "/images/home-cap-fraud.png",
      cyber: "/images/home-cap-cyber.png",
      mlops: "/images/home-cap-mlops.png",
    },
  },
  buyers: {
    header: "/images/buyers-header.png",
    pathwayGov: "/images/buyers-pathway-gov.png",
    pathwayEnt: "/images/buyers-pathway-ent.png",
  },
  partners: {
    header: "/images/partners-header.png",
    routeGov: "/images/partners-route-gov.png",
    routeEnt: "/images/partners-route-ent.png",
  },
  solutions: {
    header: "/images/solutions-header.png",
  },
  engagements: {
    header: "/images/engagements-header.png",
  },
  trust: {
    header: "/images/trust-header.png",
  },
  about: {
    header: "/images/about-header.png",
    california: "/images/about-california.png",
    dubai: "/images/about-dubai.png",
    singapore: "/images/about-singapore.png",
    china: "/images/about-china.png",
  },
  founder: {
    header: "/images/founder-header.png",
    portrait: "/images/founder-portrait.png",
  },
  insights: {
    header: "/images/insights-header.png",
    featured: [
      "/images/insights-featured-01.png",
      "/images/insights-featured-02.png",
      "/images/insights-featured-03.png",
    ],
  },
  contact: {
    header: "/images/contact-header.png",
  },
} as const;
