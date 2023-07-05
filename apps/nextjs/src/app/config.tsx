import type { Route } from "next";

export const siteConfig = {
  name: "Acme Corp",
  description:
    "Next.js starter kit that includes everything you need to build a modern web application. Mobile application preconfigured, ready to go.",
  github: "https://github.com/juliusmarminge/acme-corp",
  twitter: "https://twitter.com/jullerino",
};

export const navItems = [
  {
    href: "/dashboard",
    title: "Overview",
  },
] satisfies { href: Route; title: string }[];
