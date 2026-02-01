import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "drt.media",
  EMAIL: "npd.xsi9g@slmail.me", 
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_PHOTO_ALBUMS_ON_HOMEPAGE: 3, 
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Berlin-based Comparative Law Specialist & Web Developer.",
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