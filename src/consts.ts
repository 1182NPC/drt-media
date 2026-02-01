import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "DRT Media",
  EMAIL: "npd.xsi9g@slmail.me", // Update this
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_PHOTO_ALBUMS_ON_HOMEPAGE: 3, // <--- The new setting
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Comparative Law Specialist & Web Developer.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles focusing on Comparative Law, Technology, and Web Development.",
};

// Removed WORK and PROJECTS constants entirely

export const SOCIALS: Socials = [
  { 
    NAME: "github",
    HREF: "https://github.com/1182NPC"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/"
  }
];