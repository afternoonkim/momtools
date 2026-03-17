import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/cal/due-date", destination: "/tools/due-date", permanent: true },
      { source: "/cal/baby-age", destination: "/tools/baby-age", permanent: true },
      { source: "/cal/vaccine-schedule", destination: "/tools/vaccine-schedule", permanent: true },
      { source: "/cal/weaning-start", destination: "/tools/weaning-start", permanent: true },
      { source: "/cal/growth-percentile", destination: "/tools/growth-percentile", permanent: true },
      { source: "/checklists/birth-prep", destination: "/checklists/birth", permanent: true },
      { source: "/checklists/newborn-prep", destination: "/checklists/newborn", permanent: true },
      { source: "/checklists/weaning-prep", destination: "/checklists/weaning", permanent: true },
      { source: "/checklists/daycare-prep", destination: "/checklists/daycare", permanent: true },
      { source: "/baby-names/rankings", destination: "/baby-names/rankings/2025", permanent: true },
      { source: "/cal/cal/calculator", destination: "/cal/calculator", permanent: true },
      { source: "/cal/cal/fire", destination: "/cal/fire", permanent: true },
      { source: "/cal/cal/capital-gains", destination: "/cal/capital-gains", permanent: true },
      { source: "/cal/cal/retirement-tax", destination: "/cal/retirement-tax", permanent: true },
    ];
  },
};

export default nextConfig;
