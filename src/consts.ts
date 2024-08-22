import type { Site, Page, Links, Socials } from "@types";

// Global
export const SITE: Site = {
  TITLE: "Alex Cosmas",
  DESCRIPTION:
    "Decade of ideating and overseeing implementation of scalable digital applications for humans in various industry settings",
  AUTHOR: "Mark Horn",
};

// Work Page
export const WORK: Page = {
  TITLE: "Experience",
  DESCRIPTION: "Places I have worked.",
};

// Projects Page
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
};

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
};

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
};

// Links
export const LINKS: Links = [
  {
    TEXT: "Home",
    HREF: "/",
  },
  {
    TEXT: "Work",
    HREF: "/work",
  },
  {
    TEXT: "Projects",
    HREF: "/projects",
  },
  {
    TEXT: "Blog",
    HREF: "/blog",
  },
];

// Socials
export const SOCIALS: Socials = [
  {
    NAME: "Email",
    ICON: "email",
    TEXT: "alexcosmasotieno@gmail.com",
    HREF: "mailto:alexcosmasotieno@gmail.com",
  },
  {
    NAME: "Github",
    ICON: "github",
    TEXT: "alex-cosmas",
    HREF: "https://github.com/alex-cosmas",
  },
  {
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "alex-cosmas",
    HREF: "https://www.linkedin.com/in/alex-cosmas/",
  },
  {
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "alcosmas",
    HREF: "https://twitter.com/alcosmas",
  },
];
